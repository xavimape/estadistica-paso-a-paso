'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const ROOT_DIR = path.join(__dirname, '..');
const SITE_DIR = path.join(ROOT_DIR, 'site');
const ENTREGA_DIR = path.join(ROOT_DIR, 'entrega');

function buildPackages() {
  fs.mkdirSync(path.join(SITE_DIR, 'downloads'), { recursive: true });
  fs.mkdirSync(ENTREGA_DIR, { recursive: true });

  const pyScript = `
import os, shutil, zipfile

root_dir = r"""${ROOT_DIR}"""
site_dir = os.path.join(root_dir, "site")
entrega_dir = os.path.join(root_dir, "entrega")
portable_in_site = os.path.join(site_dir, "downloads", "estadistica-paso-a-paso-portatil.zip")
portable_in_entrega = os.path.join(entrega_dir, "estadistica-paso-a-paso-portatil.zip")
github_zip = os.path.join(entrega_dir, "estadistica-paso-a-paso-proyecto-github.zip")

# 1. Build portable ZIP of site/ (excluding the portable ZIP itself)
if os.path.exists(portable_in_site):
    os.remove(portable_in_site)

with zipfile.ZipFile(portable_in_site, "w", zipfile.ZIP_DEFLATED) as zf:
    for dirpath, dirnames, filenames in os.walk(site_dir):
        for fn in sorted(filenames):
            full = os.path.join(dirpath, fn)
            if os.path.islink(full) or fn.startswith('.env') or fn.lower().endswith(('.pem', '.key', '.pfx', '.log')):
                continue
            if os.path.abspath(full) == os.path.abspath(portable_in_site):
                continue
            rel = os.path.relpath(full, site_dir).replace("\\\\", "/")
            zf.write(full, rel)

shutil.copy2(portable_in_site, portable_in_entrega)

# 2. Build clean GitHub project ZIP in entrega/
if os.path.exists(github_zip):
    os.remove(github_zip)

exclude_Top = {"entrega", "_progreso", "node_modules", ".git"}
allowed_top = {"site", "docs", "scripts", "tests"}
allowed_root = {"README.md", "package.json", "package-lock.json", ".gitignore"}

with zipfile.ZipFile(github_zip, "w", zipfile.ZIP_DEFLATED) as zf:
    for dirpath, dirnames, filenames in os.walk(root_dir):
        rel_dir = os.path.relpath(dirpath, root_dir)
        parts = [] if rel_dir == "." else rel_dir.split(os.sep)
        if parts and parts[0] not in allowed_top:
            dirnames[:] = []
            continue
        dirnames[:] = [d for d in dirnames if d not in exclude_Top]
        for fn in sorted(filenames):
            full = os.path.join(dirpath, fn)
            if not parts and fn not in allowed_root:
                continue
            if os.path.islink(full) or fn.startswith('.env') or fn.lower().endswith(('.pem', '.key', '.pfx', '.log')):
                continue
            rel = os.path.relpath(full, root_dir).replace("\\\\", "/")
            zf.write(full, rel)

print(f"Portable ZIP: {os.path.getsize(portable_in_site)} bytes")
print(f"GitHub Project ZIP: {os.path.getsize(github_zip)} bytes")
`;

  const out = execFileSync('python', ['-c', pyScript], { encoding: 'utf-8' });
  console.log('=== Paquetes generados correctamente ===');
  console.log(out.trim());
}

if (require.main === module) {
  buildPackages();
}

module.exports = { buildPackages };
