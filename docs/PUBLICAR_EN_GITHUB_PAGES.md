# Guía Paso a Paso para Publicar en GitHub Pages

Esta aplicación es **100 % estática** (no requiere bases de datos ni servidores de backend) y está preparada para funcionar tanto en un dominio raíz (`https://usuario.github.io/`) como en la subruta de cualquier repositorio (`https://usuario.github.io/nombre-del-repositorio/`).

---

## Opción A: Publicar directamente la carpeta `site/` (la forma más rápida)

Si querés crear un repositorio que contenga únicamente el sitio listo para publicar:

1. Creá un repositorio nuevo en GitHub (por ejemplo, `estadistica-paso-a-paso`).
2. Subí **el contenido de la carpeta `site/`** (o descomprimí `entrega/estadistica-paso-a-paso-portatil.zip`) en la raíz de la rama `main`. Asegurate de que `index.html` y `.nojekyll` queden en el primer nivel.
3. En tu repositorio de GitHub, abrí **Settings → Pages**.
4. En **Build and deployment → Source**, elegí **Deploy from a branch**.
5. Seleccioná la rama **`main`** y la carpeta **`/ (root)`**, y pulsá **Save**.
6. En 1 a 2 minutos tu sitio estará publicado en:
   `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`

---

## Configuración activa de este repositorio

Se activó GitHub Pages para servir `/` de la rama `gh-pages`, con HTTPS. Esa rama contiene solo la carpeta `site/` extraída mediante Git subtree. URL: https://xavimape.github.io/estadistica-paso-a-paso/ .

Para actualizar: ejecutar las pruebas, confirmar los cambios en `main`, subir `main` y ejecutar `git subtree push --prefix site origin gh-pages`. Esperar a que finalice `pages build and deployment` y comprobar la URL. No subir la carpeta superior de materiales privados. Las opciones de Actions siguientes son alternativas futuras, no la configuración actualmente activada.

## Opción B: Publicar el proyecto completo usando GitHub Actions

Si subís la estructura completa del proyecto (`entrega/estadistica-paso-a-paso-proyecto-github.zip`, que incluye `site/`, `docs/`, `scripts/` y `tests/`):

1. En **Settings → Pages → Build and deployment → Source**, seleccioná **GitHub Actions**.
2. Creá el archivo `.github/workflows/deploy-pages.yml` con el siguiente contenido para validar automáticamente las cuentas y publicar la carpeta `site/`:

```yaml
name: Publicar Estadística paso a paso en GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build_and_deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Descargar repositorio
        uses: actions/checkout@v4

      - name: Configurar Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Validar contenido y pruebas matemáticas
        run: |
          npm run validate:content
          npm test

      - name: Configurar GitHub Pages
        uses: actions/configure-pages@v5

      - name: Subir artefacto desde la carpeta site/
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./site"

      - name: Desplegar en GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Verificación posterior al despliegue

Una vez publicado el enlace:
1. Abrí la URL en el celular o computadora y comprobá que cargan las 6 pestañas (`Inicio`, `Aprendé`, `Practicá`, `Laboratorio`, `Simulacro`, `Recursos`).
2. Entrá en **Recursos** y pulsá **«Preparar este dispositivo para usar sin conexión»** para dejar cacheadas las 10 fichas de alta resolución y el PDF en el navegador del dispositivo.
