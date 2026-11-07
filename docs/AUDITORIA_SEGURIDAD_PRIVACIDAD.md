# Auditoría de seguridad y privacidad

Fecha: 6 de noviembre de 2026. Alcance: proyecto local, salida `site/`, recursos binarios y paquetes de distribución. No se probó un despliegue remoto ni se certifica ausencia absoluta de vulnerabilidades.

## Hallazgos y correcciones

1. El PDF público conservaba el nombre personal del autor en metadatos. Se eliminaron metadatos de documento y XMP únicamente en la copia pública. Se comparó el texto de todas las páginas antes y después, sin diferencias. El original privado permanece intacto.
2. Las fichas incluían un nombre de estudiante en el pie. Se regeneraron las diez copias públicas desde su fuente editable con un pie genérico; también miniaturas y ZIP de fichas. No se alteraron las fichas privadas originales.
3. La importación JSON filtraba la cadena antes de decodificarla, permitiendo eludir ese filtro mediante escapes Unicode. Se añadió revisión recursiva del contenido decodificado, rechazo de marcado y claves de prototipo, límites de profundidad, nodos y cadenas, validación de IDs de ejercicios y límite de archivo antes de leerlo. Se agregaron casos de regresión. Esta validación complementa, y no reemplaza, el escape HTML de las vistas.
4. Las cachés tenían un prefijo común a todas las instalaciones del mismo sitio en un dominio. Ahora el prefijo incluye el alcance del service worker, evitando que una instalación borre las cachés de otra. La clave de progreso también incorpora la carpeta del proyecto. Esa separación no es una frontera de seguridad entre páginas del mismo origen: otros sitios alojados bajo el mismo dominio pueden compartir privilegios del navegador. Para aislar aplicaciones que no sean de confianza, usar orígenes distintos.
5. Se agregó CSP en HTML: scripts propios y bootstrap con hash, sin eval ni JavaScript inline arbitrario, conexiones al mismo origen, objetos y envío de formularios bloqueados, base URL bloqueada; además de política de referente `no-referrer`. Se permiten estilos inline por compatibilidad con la interfaz existente. La CSP no sustituye la validación ni protege contra cambios maliciosos en el repositorio publicado.
6. Se reforzó la exportación CSV frente a fórmulas precedidas por espacios y controles. Las etiquetas de gráficos se escapan al generar SVG.
7. El servidor local de previsualización comprueba la ruta real de archivos y su contención con separador de directorio, y no devuelve excepciones con rutas internas. Escucha únicamente en loopback. No es un servidor de producción.
8. El empaquetado usa una lista de directorios públicos del proyecto y excluye progreso interno, dependencias instaladas, repositorio Git, archivos de entorno, claves, certificados, logs y enlaces simbólicos de archivos. Los paquetes se regeneraron después del saneamiento.
9. Se eliminó una ruta absoluta privada del script de preparación. La preparación desde los originales privados quedó deshabilitada antes de cualquier escritura para que no reintroduzca metadatos ni nombres. Para actualizar recursos, generar una nueva copia pública, sanearla y actualizar el manifiesto. La validación de recursos verifica SHA-256 de la copia pública, no identidad binaria con el original privado.

## Comprobaciones realizadas

- Once pruebas automáticas aprobadas: ocho existentes de contenido/matemática y tres nuevas de seguridad. Banco fijo de 84 actividades y recursos públicos con integridad comprobada.
- Inspección de puntos de inserción HTML, escape de entradas, parser matemático, CSV/SVG, importaciones, almacenamiento, scripts, service worker y empaquetado. No se identificaron llamadas a analítica ni servicios externos de ejecución, ni credenciales en la revisión local.
- E2E en Chrome: raíz y subruta, seis tamaños de pantalla, ejercicios críticos, service worker offline y apertura del paquete portátil. El arranque de Edge finalizó prematuramente con código 0; esa comprobación no se considera aprobada.
- Inspección de metadatos del PDF e imágenes y revisión de los archivos incluidos en ZIP, con regeneración de las distribuciones.

## Límites que deben mantenerse visibles

El progreso local y los alias no están cifrados ni protegidos por contraseña. Cualquier persona con acceso al navegador o al JSON exportado puede verlos. Usar alias sin nombres reales y no subir archivos de progreso a GitHub. El sitio no debe pedir datos personales para practicar.

GitHub Pages no permite establecer arbitrariamente todas las cabeceras HTTP desde archivos del sitio. `frame-ancestors` no funciona en una etiqueta meta: no se afirma protección completa frente a enmarcado/clickjacking. Si se requiere, usar alojamiento o proxy que permita esa cabecera. La auditoría local no comprueba TLS, permisos del repositorio, configuración de Pages, historial Git anterior ni archivos que el usuario pudiera subir después.

La revisión de contenido educativo detecta y limita identificación directa, pero no acredita de manera universal que todos los ejemplos o datos futuros estén anonimizados. Revisar cada incorporación. Los nombres de ejemplo en consignas son ficticios; la referencia curricular a una institución no constituye identificación de una matrícula de estudiantes.

Subir exclusivamente la salida saneada o el paquete regenerado. No subir la carpeta superior de materiales privados, el progreso de estudiantes ni los originales del aula. Revisar la previsualización de archivos del repositorio antes de publicar.

Referencias técnicas consultadas: [OWASP sobre XSS en el DOM](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html), [MDN sobre CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP) y [limitación de frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).

## Ampliación de comprobaciones pendientes

Se añadieron pruebas ejecutadas en Chrome real (`node tests/security-browser.test.js`): rechazo de importaciones con marcado codificado e IDs desconocidos; bloqueo de un script inline no autorizado por CSP; bloqueo de una conexión hacia otro origen; etiquetas maliciosas representadas como texto en SVG; y separación efectiva del progreso entre raíz y subruta. Todas aprobaron. Estas pruebas generan deliberadamente rechazos de CSP: esos rechazos son el resultado esperado, no errores de la aplicación.

Se añadieron solicitudes de prueba al servidor local con rutas escapadas y URL malformada, comprobando que no permiten leer archivos del proyecto fuera de la salida ni revelan rutas de excepciones. `npm test` incluye ahora doce pruebas (las ocho iniciales y cuatro de seguridad). `npm audit --omit=dev` informó cero vulnerabilidades; el proyecto no declara dependencias de terceros, por lo que ese resultado no reemplaza la revisión del código propio.

Se reintentó el arranque de Edge con perfil temporal independiente, diferentes opciones de inicio y el ejecutable directo de la versión instalada. El proceso terminó con código 0 antes de exponer DevTools o cargar la aplicación. No se modificaron políticas del navegador ni se cerraron sesiones personales. La compatibilidad real en Edge permanece sin verificar; también quedan fuera Safari, Firefox y dispositivos físicos.

La carpeta local no es un repositorio Git y no tiene remoto. Se consultó el listado de repositorios accesibles de la cuenta conectada y no se identificó uno correspondiente a esta aplicación. No se dispone de una URL de despliegue confirmada: TLS, cabeceras reales, permisos y exposición del historial Git no se pueden comprobar hasta conocer el destino publicado. No se creó ni publicó un repositorio para efectuar estas pruebas.

Actualización del 7 de noviembre de 2026. El párrafo anterior registra el estado al momento de la auditoría local. El repositorio y GitHub Pages se activaron después. Se verificaron HTTPS, los recursos principales y la apertura de un ejercicio en Chrome. [Estado y alcance de la verificación publicada](ESTADO_POST_ANTIGRAVITY.md).
