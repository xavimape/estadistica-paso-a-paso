raise SystemExit("Recursos públicos saneados: no sobrescribir desde fuentes privadas. Ver docs/AUDITORIA_SEGURIDAD_PRIVACIDAD.md")
import pathlib
import shutil
import hashlib
import json
import struct
import zlib

root = pathlib.Path(__file__).resolve().parents[2]
src_base = root / '2026 -  2do IVto - Estadistica'
proj = root / 'web-estadistica'

dirs = [
    proj / 'site' / 'assets' / 'css',
    proj / 'site' / 'assets' / 'js',
    proj / 'site' / 'assets' / 'icons',
    proj / 'site' / 'assets' / 'fichas' / 'thumbs',
    proj / 'site' / 'assets' / 'documentos',
    proj / 'site' / 'downloads',
    proj / 'scripts',
    proj / 'tests',
    proj / 'docs' / 'capturas',
    proj / 'entrega',
]
for d in dirs:
    d.mkdir(parents=True, exist_ok=True)

ficha_map = [
    ('01_Variables.png', 'ficha-01-variables.png'),
    ('02_Frecuencia_absoluta.png', 'ficha-02-frecuencia-absoluta.png'),
    ('03_Frecuencia_relativa_y_porcentaje.png', 'ficha-03-frecuencia-relativa-porcentaje.png'),
    ('04_Frecuencia_acumulada.png', 'ficha-04-frecuencia-acumulada.png'),
    ('05_Grafico_de_barras.png', 'ficha-05-grafico-de-barras.png'),
    ('06_Media.png', 'ficha-06-media.png'),
    ('07_Mediana.png', 'ficha-07-mediana.png'),
    ('08_Moda.png', 'ficha-08-moda.png'),
    ('09_Elegir_la_medida.png', 'ficha-09-elegir-la-medida.png'),
    ('10_Simbolos.png', 'ficha-10-simbolos.png'),
]

manifest_entries = []

def record_copy(src_path, dst_path, kind):
    shutil.copy2(src_path, dst_path)
    h_src = hashlib.sha256(src_path.read_bytes()).hexdigest()
    h_dst = hashlib.sha256(dst_path.read_bytes()).hexdigest()
    assert h_src == h_dst
    manifest_entries.append({
        'kind': kind,
        'source_rel': str(src_path.relative_to(root)).replace('\\', '/'),
        'dest_rel': str(dst_path.relative_to(proj)).replace('\\', '/'),
        'bytes': dst_path.stat().st_size,
        'sha256': h_dst
    })

for orig_name, web_name in ficha_map:
    s = src_base / 'Infografias_Celular_Cielito' / orig_name
    d = proj / 'site' / 'assets' / 'fichas' / web_name
    record_copy(s, d, 'ficha-png')

pdf_src = list(src_base.glob('*.pdf'))[0]
pdf_dst = proj / 'site' / 'assets' / 'documentos' / 'guia-estudio-estadistica-2do-anio.pdf'
raise RuntimeError('Preparación deshabilitada: usar recursos públicos saneados; no copiar el PDF privado ni regenerar paquetes sin auditoría.')

zip_src = src_base / 'Infografias_Celular_Cielito.zip'
zip_dst = proj / 'site' / 'downloads' / 'fichas-estadistica-2do-anio.zip'
record_copy(zip_src, zip_dst, 'fichas-zip')

def make_png(width, height, pixel_fn):
    raw = bytearray()
    for y in range(height):
        raw.append(0)  # Filter type 0 (None)
        for x in range(width):
            r, g, b, a = pixel_fn(x, y, width, height)
            raw.extend((r, g, b, a))
    def chunk(tag, data):
        return struct.pack('!I', len(data)) + tag + data + struct.pack('!I', zlib.crc32(tag + data) & 0xffffffff)
    ihdr = struct.pack('!IIBBBBB', width, height, 8, 6, 0, 0, 0)
    idat = zlib.compress(bytes(raw), 9)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', idat) + chunk(b'IEND', b'')

def icon_pixel(x, y, w, h, maskable=False):
    pad = int(w * (0.08 if maskable else 0.04))
    if not maskable and (x < pad or x >= w - pad or y < pad or y >= h - pad):
        return (0, 0, 0, 0)
    # Background dark navy #142E43
    bg = (20, 46, 67, 255)
    # Axis line at y around 0.76..0.79
    if int(w * 0.18) <= x <= int(w * 0.82) and int(h * 0.76) <= y <= int(h * 0.79):
        return (243, 246, 250, 255)
    bars = [
        (0.22, 0.33, 0.52, (77, 208, 225, 255)),
        (0.37, 0.48, 0.32, (0, 172, 193, 255)),
        (0.52, 0.63, 0.42, (255, 183, 77, 255)),
        (0.67, 0.78, 0.24, (129, 199, 132, 255)),
    ]
    for x0f, x1f, y0f, col in bars:
        if int(w * x0f) <= x <= int(w * x1f) and int(h * y0f) <= y < int(h * 0.76):
            return col
    return bg

for sz, fname, maskable in [(192, 'icon-192.png', False), (512, 'icon-512.png', False), (512, 'icon-maskable-512.png', True)]:
    png_bytes = make_png(sz, sz, lambda x, y, w, h, m=maskable: icon_pixel(x, y, w, h, m))
    (proj / 'site' / 'assets' / 'icons' / fname).write_bytes(png_bytes)

svg_icon = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Estadística paso a paso">
  <rect x="6" y="6" width="116" height="116" rx="24" fill="#142E43"/>
  <rect x="28" y="68" width="14" height="30" rx="3" fill="#4DD0E1"/>
  <rect x="48" y="42" width="14" height="56" rx="3" fill="#00ACC1"/>
  <rect x="68" y="54" width="14" height="44" rx="3" fill="#FFB74D"/>
  <rect x="88" y="32" width="14" height="66" rx="3" fill="#81C784"/>
  <line x1="22" y1="98" x2="106" y2="98" stroke="#F3F6FA" stroke-width="4" stroke-linecap="round"/>
</svg>
"""
(proj / 'site' / 'assets' / 'icons' / 'icon.svg').write_text(svg_icon, encoding='utf-8')
(proj / 'site' / '.nojekyll').write_text('', encoding='utf-8')

(proj / 'scripts' / 'resource-manifest.json').write_text(
    json.dumps(manifest_entries, ensure_ascii=False, indent=2),
    encoding='utf-8'
)
print('Copied and verified', len(manifest_entries), 'resources and generated icons.')
