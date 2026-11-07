# Contenido, Fuentes y Trazabilidad

## 1. Marco curricular y criterios de alcance

El diseño pedagógico y matemático de **Estadística paso a paso** se apoya en:

1. **Anuncio de evaluación y trabajo de aula (evidencia primaria)**:
   - Temario anunciado para 2.º año de secundaria: **variables estadísticas (cualitativas y cuantitativas), tablas de frecuencia (`f`, `fr`, `%`, `F`), gráficos de barras en hoja cuadriculada y medidas de tendencia central (media aritmética, mediana y moda)**.
   - Elementos de trabajo solicitados: calculadora y hoja cuadriculada (más regla como recurso práctico para el trazado de ejes y barras).
2. **Núcleos de Aprendizajes Prioritarios (NAP) de Matemática para el Ciclo Básico de Educación Secundaria** (Ministerio de Educación de la Nación / Educ.ar): organización y lectura de datos en tablas y gráficos, cálculo de medidas de posición central y análisis de su representatividad.
3. **Diseño Curricular Jurisdiccional del Ciclo Básico Secundario de Formosa** (reproducción documental identificada como 0672): respalda el trabajo con recolección y organización de datos, frecuencias, gráficos estadísticos y medidas de tendencia central. No se incorporan al repaso nuclear temas no anunciados para esta evaluación (como gráficos circulares con transportador, histogramas de intervalos continuos o combinatoria/probabilidad), manteniendo una mención breve únicamente para diferenciar barras separadas de un histograma.

---

## 2. Privacidad y resguardo de materiales

- **Cero datos personales**: No se publican en el sitio, ni en el repositorio, ni en los paquetes ZIP las fotografías del aula (`Tema.jpeg` y `WhatsApp Image 2026-11-05 at 10.41.37.jpeg`), ni nombres reales de docentes o estudiantes, ni rutas privadas del equipo local.
- **Ejemplos identificados como ficticios**: Todos los conjuntos de datos de práctica se presentan explícitamente como situaciones escolares y cotidianas ficticias con fines de estudio.
- **Infografías descartadas excluidas**: Las 5 infografías antiguas descartadas durante la auditoría de calidad (registradas en `_preparacion/infografias_eliminadas.json`) no forman parte de `site/` ni de los paquetes descargables; esto se comprueba automáticamente en `npm run validate:content`.

---

## 3. Separación explícita entre los dos ejemplos de «libros leídos»

Para evitar cualquier confusión al estudiar, la aplicación distingue explícitamente:

| Conjunto de datos | Tamaño (`n`) | Valores (`x`) | Frecuencias absolutas (`f`) | Suma (`Σ(x·f)`) | Media (`x̄`) | Mediana (`Me`) | Moda (`Mo`) | Dónde se utiliza |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Ejemplo integrador de la guía principal** | `n = 20` | `0, 1, 2, 3, 4` | `3, 8, 6, 2, 1` | `30 libros` | `1,5 libros` | `1 libro` | `1 libro` | Lecciones `L04`–`L09`, Laboratorio (`guia-20`), Integrador `I-01` |
| **Ejemplo breve de las 10 fichas para celular** | `n = 10` | `0, 1, 2, 3, 4` | `2, 4, 2, 1, 1` | `15 libros` | `1,5 libros` | `1 libro` | `1 libro` | Fichas `02` a `09`, Lección `L03`, Laboratorio (`fichas-10`) |

---

## 4. Manifiesto de recursos verificados y hashes SHA-256

Todos los activos estáticos copiados desde la carpeta de materiales aprobados fueron verificados mediante hash SHA-256 (registrado en `scripts/resource-manifest.json` y comprobado por `scripts/validate-content.js`):

| Recurso en `site/` | Tipo | Tamaño (bytes) | Hash SHA-256 |
| --- | --- | --- | --- |
| `assets/fichas/ficha-01-variables.png` | PNG 1080×1920 | 151.007 | `7c62507c2abe7c4468405770ea84c20d606c8a22991671c9a4005a34356cbf7e` |
| `assets/fichas/ficha-02-frecuencia-absoluta.png` | PNG 1080×1920 | 102.915 | `a1e0846e14499d7731aae8218780efb8686b7d4f4537ff533587a64369e5a2c4` |
| `assets/fichas/ficha-03-frecuencia-relativa-porcentaje.png` | PNG 1080×1920 | 133.316 | `fdc41090435ce2584f19d9d0d29733941f2db6d88ad4bdde9046af4ab97992fe` |
| `assets/fichas/ficha-04-frecuencia-acumulada.png` | PNG 1080×1920 | 125.888 | `eabfa0dc895e51cf1575ed6a27bd6e6d5e00881905c706733d9fb4e338570fc5` |
| `assets/fichas/ficha-05-grafico-de-barras.png` | PNG 1080×1920 | 129.536 | `1ee05e8a5a0926c95e16487e09878c3a2ec21e415a6ec28dc0729b6b482e4073` |
| `assets/fichas/ficha-06-media.png` | PNG 1080×1920 | 163.506 | `346e2d5eab4a912b6ce0b50b9d9362c5629a77e25f53bee817668da8d7f70db2` |
| `assets/fichas/ficha-07-mediana.png` | PNG 1080×1920 | 163.888 | `075a5d0a88f8ee436fd6693835bae57dcaa60cd63b42f269b55dca013cd06514` |
| `assets/fichas/ficha-08-moda.png` | PNG 1080×1920 | 156.001 | `56ae82c0228b6bd202d38739c782dd0b411f804b5c40cc4b70b59f9ec33ba345` |
| `assets/fichas/ficha-09-elegir-la-medida.png` | PNG 1080×1920 | 166.855 | `2ef93af3df7727d6e084e93ce2d913a1d626028e0792c2a1d61a7608c6d27e6a` |
| `assets/fichas/ficha-10-simbolos.png` | PNG 1080×1920 | 155.830 | `b1c92685511d04ced299ac842a2db10bf67b3f4acda8720ae9e279bd2d7c7ecf` |
| `assets/documentos/guia-estudio-estadistica-2do-anio.pdf` | PDF (25 págs.) | 622.298 | `2c6be0a3dfbc6b1628af51f075ded635ce01ab56b6bc353154e29399ee886c3d` |
| `downloads/fichas-estadistica-2do-anio.zip` | Archivo ZIP | 1.336.464 | `494611381c749534b702e2a6c70fb6050cb231ac4fc398e1216abf64e909daa0` |
