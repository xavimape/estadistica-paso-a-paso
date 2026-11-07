# Estado del proyecto después de Antigravity

Actualizado el 7 de noviembre de 2026. Este documento permite retomar el proyecto desde la versión publicada y distinguir el trabajo completado de las mejoras propuestas.

## Entrega recibida

Antigravity entregó una aplicación estática de Estadística para 2.º año de secundaria. La versión incluye seis secciones, diez lecciones, 84 actividades, un laboratorio de datos, simulacros y diez fichas descargables. También incluye preferencias de lectura, progreso local, un modo sin conexión en el navegador y un ZIP portátil.

El banco reúne los 28 ejercicios de la guía, 48 actividades nuevas y ocho integradoras. La versión inicial quedó identificada con la etiqueta `v1.0.0`. [Código de la versión](https://github.com/xavimape/estadistica-paso-a-paso/tree/v1.0.0).

## Auditoría y correcciones

- Se retiraron los metadatos de autor y XMP del PDF público. Se comprobó que el texto de sus páginas se conservó y se revisaron los 417 XML de ecuaciones adjuntos. Las fichas públicas y sus miniaturas se regeneraron con un pie genérico. Los originales privados se conservan fuera del repositorio.
- Se reforzó la importación de progreso JSON para revisar los valores después de decodificarlos, rechazar claves peligrosas y aplicar límites de tamaño y estructura. Se comprobó la protección contra fórmulas en CSV y el escape de las etiquetas al generar SVG.
- Se agregó una política de seguridad de contenido que limita scripts y conexiones, y se separaron las cachés y las claves de progreso por ruta del proyecto. El servidor local comprueba que los archivos solicitados estén dentro de la carpeta pública.
- Se regeneraron los ZIP de distribución y se verificaron sus recursos y metadatos. Se excluyeron del repositorio los archivos internos de preparación y de progreso, los paquetes de trabajo locales y los archivos de entorno.

Los detalles y los límites de cada comprobación están en el [informe de auditoría](AUDITORIA_SEGURIDAD_PRIVACIDAD.md).

## Pruebas realizadas

La suite local pasó 12 pruebas de contenido, cálculo y seguridad. En Chrome se verificaron seis anchos de pantalla, la navegación por subruta, el uso sin conexión y la apertura del ZIP portátil. También se comprobó que el navegador bloqueaba un script inline sin autorización y una conexión a otro origen, y que rechazaba los archivos JSON maliciosos usados en la prueba.

La ejecución automatizada en Edge terminó antes de cargar el sitio, incluso con un perfil temporal. La compatibilidad en Edge, Safari, Firefox y dispositivos físicos sigue pendiente de comprobación.

La versión local se sirvió por loopback para revisión en `http://127.0.0.1:4173/repo-prueba/`. Desde la carpeta del proyecto se puede volver a levantar con `npm run serve`.

## Repositorio y publicación

- `main` contiene el código, las pruebas y la documentación. La etiqueta `v1.0.0` apunta al commit `a4d6011`. [Repositorio público](https://github.com/xavimape/estadistica-paso-a-paso).
- GitHub Pages sirve la raíz de `gh-pages`. Esa rama se generó a partir de `site/` y la publicación exige HTTPS. El despliegue inicial terminó correctamente. [Ejecución de despliegue](https://github.com/xavimape/estadistica-paso-a-paso/actions/runs/42328721142).
- Se comprobó la respuesta HTTP 200 de la portada, el script principal, el manifiesto, el service worker y el PDF. En Chrome también se abrió el ejercicio `G4-05` por su enlace directo, en un contexto HTTPS y sin excepciones JavaScript. [Sitio publicado](https://xavimape.github.io/estadistica-paso-a-paso/).

Para publicar cambios en el sitio, primero validarlos y confirmarlos en `main`, luego actualizar la rama de Pages con `git subtree push --prefix site origin gh-pages`. Un push que solo actualiza la documentación de `main` deja servida la misma versión del sitio. [Guía de publicación](PUBLICAR_EN_GITHUB_PAGES.md).

## Devolución y mejoras propuestas

La revisión del usuario señaló que la versión 1.0 se siente demasiado textual. La primera actividad visual, «La media como reparto equitativo», ya está integrada desde la lección 7. Abre una página autónoma y ofrece volver a la lección o practicar con los ejercicios existentes. La aplicación principal conserva sus rutas. La actividad también se incluye en el modo sin conexión y en el paquete portátil.

Al cancelar, cada libro pendiente vuelve a su pila de origen. Las pilas reservan espacio para esas devoluciones, de modo que el gráfico conserve su escala de 0 a 10 incluso cuando se retiran y depositan varios libros.

Para las demás lecciones, se propone empezar con una acción breve, explicar lo que ocurre y cerrar con un ejercicio nuevo.

| Experiencia propuesta | Acción del estudiante | Idea que hace visible |
| --- | --- | --- |
| Repartir para encontrar la media | Mover libros entre personajes hasta equilibrar las cantidades. | El promedio conserva el total y representa un reparto equitativo. |
| Encontrar el centro | Ordenar tarjetas y señalar los lugares centrales. | La diferencia entre posición y valor y el tratamiento de una cantidad par o impar de datos. |
| Construir barras | Ajustar alturas en una cuadrícula con botones o arrastre. | Cómo se relacionan la frecuencia, la escala y la altura. |
| Convertir una encuesta en gráfico | Agrupar respuestas y ver el conteo, la tabla y las barras. | Cómo el mismo conjunto de datos se representa de distintas formas. |
| Explorar un valor extremo | Mover un dato con un deslizador y comparar las medidas. | Cuándo cambian la media, la mediana y la moda. |
| Detectar errores | Reparar escalas, alturas o rótulos incorrectos. | Cómo leer un gráfico con criterio y comprobarlo con la tabla. |
| Visualizar porcentajes | Sombrear una cuadrícula de cien casillas. | La relación entre una parte del total, su fracción y su porcentaje. |

Las próximas prioridades propuestas son las tarjetas de mediana y la construcción de barras. Cada actividad necesita controles por teclado y una alternativa sin movimiento. El instructivo de calculadora queda pendiente de la marca y el modelo exactos.
