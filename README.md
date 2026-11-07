# Estadística paso a paso · Aprendé, practicá y comprobá tus ideas

**Versión 1.0.0.** Primera versión funcional, conservada como punto de partida para futuras mejoras de diseño y experiencia de aprendizaje. El repositorio no implica que GitHub Pages esté activado. Consultá la [auditoría de seguridad y privacidad](docs/AUDITORIA_SEGURIDAD_PRIVACIDAD.md), incluidas sus pruebas y limitaciones.

Aplicación web educativa, estática e interactiva de **Estadística para 2.º año de educación secundaria** (Ciclo Básico, Argentina). Diseñada para acompañar el estudio autónomo y el repaso de **variables estadísticas, tablas de frecuencia, gráficos de barras y medidas de tendencia central (media, mediana y moda)**.

---

## 1. Tres modos de uso (Online, Offline en navegador y Portátil sin servidor)

1. **Publicada en GitHub Pages (en raíz `/` o en subruta `/<nombre-del-repositorio>/`)**:
   - Todas las rutas del sitio, hojas de estilo, scripts, imágenes, manifiesto (`manifest.webmanifest`) y Service Worker (`sw.js`) son **estrictamente relativas**.
   - Incluye `.nojekyll` en `site/` para evitar procesamientos innecesarios de Jekyll.
   - Consultá la guía paso a paso en [`docs/PUBLICAR_EN_GITHUB_PAGES.md`](docs/PUBLICAR_EN_GITHUB_PAGES.md).

2. **Sin conexión (Offline) desde el navegador / PWA instalable**:
   - Al abrir el sitio sobre `https://` o `http://localhost`, el Service Worker (`site/sw.js`) precachea el núcleo interactivo (HTML, CSS, motor matemático, las 10 lecciones, las 84 actividades, íconos y las 10 miniaturas de fichas).
   - Desde la pestaña **Recursos**, el botón **«Preparar este dispositivo para usar sin conexión»** descarga y verifica en caché local las **10 fichas PNG en alta resolución (1080 × 1920 px)** y la **Guía de Estudio en PDF (25 páginas)**, mostrando el estado real verificado recurso por recurso.

3. **Modo portátil por archivo local (`file://`) sin servidor ni internet**:
   - Descargá y descomprimí `entrega/estadistica-paso-a-paso-portatil.zip` (o `site/downloads/estadistica-paso-a-paso-portatil.zip`) en cualquier carpeta de tu computadora.
   - Abrí `index.html` con doble clic en Chrome, Edge o Firefox: todos los módulos se cargan mediante `<script defer>` clásicos compatibles con `file://` sin errores de CORS.

---

## 2. Estructura de las 6 secciones principales

- **Inicio**: Bienvenida, 4 accesos directos de acción, mapa de progreso por tema y **diagnóstico inicial opcional de 8 preguntas** con recomendación directa de lecciones.
- **Aprendé**: **10 lecciones guiadas (`L01` a `L10`)** con 1 lección por vista, barra de progreso y botones `Anterior` / `Siguiente` / `Índice`, cada una estructurada en: objetivo observable, conocimientos previos, explicación con palabras sencillas, notación progresiva, ejemplo cotidiano resuelto paso a paso, práctica acompañada, errores frecuentes y actividad breve de cierre. Incluye diccionario interactivo de **12 símbolos** (`n`, `x`, `f`, `fr`, `%`, `F`, `=`, `≈`, `x̄`, `Σ`, `Me`, `Mo`).
- **Practicá**: **84 actividades fijas identificables** (28 de la guía escolar `G1-01`..`G4-07`, 48 actividades nuevas `N1-01`..`N4-12` graduadas en `inicial`/`intermedio`/`desafio`, y 8 problemas integradores `I-01`..`I-08`), más el generador reproducible **«Otro parecido (nuevos números)»** con semilla visible en la URL. Incluye corrección diagnóstica por casilla, 3 niveles de pistas graduales, solución explicada paso a paso e impresión con o sin respuestas.
- **Laboratorio**: Pizarra interactiva editable (hasta 100 observaciones y 20 valores distintos) con 6 conjuntos de ejemplo precargados, tabla conectada (`f`, `fr`, `%`, `F`, `x · f`), gráfico de barras SVG estilo hoja cuadriculada, medidas de tendencia central, **comparador Antes / Después** para explorar valores extremos y exportación a CSV (`;`), SVG y PNG.
- **Simulacro**: Práctica integradora configurable de **8 o 12 actividades** (2 o 3 por tema) seleccionadas mediante semilla compartible, con guardado automático de borrador, reloj orientativo opcional (desactivado por defecto) y devolución detallada separando corrección objetiva y autoevaluación por rúbrica.
- **Recursos**: Control de modo sin conexión, galería de las **10 fichas verticales para celular** con su equivalente textual completo en HTML, descarga de la Guía en PDF, paquete ZIP de fichas, paquete ZIP portátil y guía conceptual de uso de la calculadora científica.

---

## 3. Comandos de verificación y empaquetado (`npm`)

Requisitos: **Node.js >= 20** (sin dependencias externas pesadas de ejecución).

```bash
# 1. Validar integridad de las 84 actividades, 10 lecciones, hashes SHA-256 y presupuesto (< 1 MB)
npm run validate:content

# 2. Ejecutar suite de pruebas unitarias y verificación matemática independiente
npm test

# 3. Ejecutar pruebas E2E en navegadores reales (Chrome y Edge) y generar capturas en docs/capturas/
npm run test:e2e

# 4. Generar paquetes ZIP (portátil en site/downloads/ y entrega/, y proyecto GitHub en entrega/)
npm run package

# 5. Iniciar servidor estático local (en raíz / y en subruta /repo-prueba/)
npm run serve
```

---

## 4. Documentación del proyecto

- [`docs/CONTENIDO_Y_FUENTES.md`](docs/CONTENIDO_Y_FUENTES.md): Inventario de fuentes, hashes SHA-256 y trazabilidad curricular.
- [`docs/MAPA_EJERCICIOS.md`](docs/MAPA_EJERCICIOS.md): Tabla completa de las 84 actividades (`G`, `N`, `I`) y familias de variantes.
- [`docs/CAMBIOS_PEDAGOGICOS.md`](docs/CAMBIOS_PEDAGOGICOS.md): Correcciones matemáticas y mejoras didácticas aplicadas respecto de los documentos de origen.
- [`docs/VALIDACION.md`](docs/VALIDACION.md): Resultados de pruebas unitarias, E2E multi-dispositivo, accesibilidad y presupuesto de rendimiento.
- [`docs/PUBLICAR_EN_GITHUB_PAGES.md`](docs/PUBLICAR_EN_GITHUB_PAGES.md): Instructivo paso a paso para publicar en GitHub Pages desde rama o GitHub Actions.
- [`docs/LICENCIAS.md`](docs/LICENCIAS.md): Licencias del código y de los recursos educativos.
