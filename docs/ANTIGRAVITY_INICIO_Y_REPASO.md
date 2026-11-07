# Relevo para Antigravity · Inicio y repaso visual

## Qué se puede probar

La portada **De los datos a las ideas** organiza el sitio en tres recorridos. Probá el Inicio en la copia local o en el despliegue de GitHub Pages.

| Ruta | Qué contiene |
| --- | --- |
| `#/inicio` | Tres accesos ilustrados, con prioridad visual para Repaso interactivo. |
| `#/inicio/repaso` | Detective estadístico con comprobación de respuesta, solución plegable, reparto de libros, índice de temas y enlace al ejercicio G4-07. |
| `#/inicio/guia` | La vista anterior de Inicio con el mapa, los indicadores de avance y el diagnóstico. Las pestañas y los enlaces profundos de la guía siguen disponibles. |
| `#/inicio/video` | Reproductor nativo con el repaso de 7 min 08 s, miniatura local, descarga del MP4 y selector para abrirlo desde el dispositivo sin conexión. |
| `#/inicio/mision-1` a `#/inicio/mision-4` | Clasificación de variables, tabla de frecuencias por etapas, corrección de un gráfico y laboratorio de medidas. Hay accesos directos desde Inicio y desde el repaso. |

Desde el directorio `web-estadistica`, ejecutá `npm run serve` y abrí `http://127.0.0.1:4173/repo-prueba/`. Si el puerto está ocupado, elegí otro con `$env:PORT='4174'`. Probá también la apertura del ZIP extraído con `file://`.

## Dónde seguir el código

- `site/assets/js/study-views.js` contiene las vistas nuevas y los controles del Detective y del video.
- `site/assets/js/missions.js` contiene las versiones integradas de los prototipos de `source_2/`. Los HTML originales quedan como referencia. Las misiones 2 y 3 comparten la misma lista de diez datos. El laboratorio usa el motor matemático del sitio.
- `site/assets/css/study.css` contiene la composición, los SVG y sus colores a través de las variables de tema. Los SVG son decorativos y el texto de cada tarjeta identifica su destino.
- `site/assets/js/app.js` conserva el enrutador y la navegación principal. Las tres vistas nuevas son subrutas de Inicio. Al salir del video se libera la URL temporal del archivo.
- `site/index.html` permite video propio y `blob:` en `media-src`. Conservá las demás restricciones de CSP y el hash del arranque.
- `site/sw.js` lleva el precaché de la interfaz, las misiones y la miniatura del video a `core-v7`. El MP4 se sirve bajo demanda desde `site/assets/video/` y queda fuera del precaché y del ZIP portátil para que la descarga siga siendo liviana. El ZIP del proyecto sí contiene el MP4. Regenerá ambos con `npm run package` antes de preparar un despliegue.
- `npm test`, `npm run validate:content` y `npm run test:e2e` son los puntos de partida para verificar el trabajo. La variable opcional `ESTADISTICA_CAPTURAS` redirige las capturas de la suite a otra carpeta.

## Verificación de esta entrega

Pasaron las 12 pruebas de `npm test` y la validación del contenido. En Chrome, la suite E2E comprobó las rutas nuevas, los ejercicios de regresión, el funcionamiento offline y la apertura del ZIP portátil. Su lanzador CDP terminó con error al iniciar el bloque de Edge. Una prueba independiente con Playwright verificó en Chrome y Edge los 320 px, los temas con letra al 100 % y al 150 %, la navegación con teclado, las respuestas del Detective, el salto al ejercicio G4-07 y la reproducción del MP4 local. En ese recorrido no hubo solicitudes a servidores externos ni errores de CSP.

## Qué tomar del informe de Gemini Notebook

En la vista observada, el índice lateral permite saltar entre temas en escritorio y los bloques se pliegan en celular. Las explicaciones reúnen ejemplos resueltos, consignas, una infografía con zoom, 14 diapositivas, una cápsula de audio de 1:34, un cuestionario de 8 preguntas con pistas y 18 tarjetas de respuesta reversible. El enlace directo al informe abrió sin iniciar sesión. Tomalo como referencia de organización y revisá cualquier recurso antes de reutilizarlo en público.

La unidad didáctica de referencia es **explicación breve → ejemplo visual → intento → pista o solución → práctica completa**. Cada recurso aparece cerca de la idea que ayuda a entender. En celular conviene mostrar un tema por vez, con un índice compacto y accesos directos a Inicio y a la guía. Usá voseo, coma decimal y lenguaje llano antes de la notación. Desarrollá una suma con números antes de introducir Σ.

## Siguiente etapa propuesta

1. Conservá la conexión entre las misiones 2 y 3. Los cinco valores 0, 1, 2, 3 y 4 corresponden a frecuencias 2, 4, 2, 1 y 1. El total es 10. La presentación integrada del cuaderno trae otro ejemplo de 20 estudiantes. Si lo reutilizás, identificá el cambio de conjunto.
2. Si ampliás las misiones, agregá práctica de ordenamiento para encontrar la mediana y preguntas de interpretación. Reutilizá el motor matemático, la actividad de reparto y las rutas existentes. Mostrá la razón de cada respuesta con el mismo conjunto de datos.
3. Conservá el desafío con 1, 9, 10 y 10 y la media propuesta de 7,8. La suma es 30, la media correcta 7,5, la comprobación del error es 7,8 × 4 = 31,2 y la mediana es 9,5. Compará explícitamente con 9, 9, 10 y 10 al explicar qué cambia. Reservá la solución hasta que se solicite. Con empates, evitá afirmar que la mitad queda estrictamente por debajo y la mitad estrictamente por encima de la mediana. La mediana puede cambiar al quitar un dato.
4. El último MP4 se incorporó en su versión original con autorización del usuario para conservar el alias de la placa final. Si se amplía este recurso, prepará subtítulos revisados y capítulos que coincidan con las escenas. Mantené la carga bajo demanda y la opción de abrir el archivo descargado desde el dispositivo.
5. Validá teclado, foco visible, lectura de resultados, 320 px, zoom y contraste alto. Probá Inicio → Repaso → Detective → G4-07, Inicio → Guía → diagnóstico e Inicio → Video → reproducir → volver. Probá enlaces profundos, modo portátil y una actualización del service worker desde una instalación existente.

## Publicación

Prepará la vista previa local para revisión. Antes de cualquier publicación revisá el diff, el ZIP y los materiales de `site/`. La publicación de Pages usa la rama `gh-pages` con el contenido de `site/`, según `docs/PUBLICAR_EN_GITHUB_PAGES.md`. El MP4 incorporado es la copia autorizada. Mantené fuera del sitio y los paquetes los identificadores del cuaderno, los demás originales, los datos personales y las capturas con cuentas.
