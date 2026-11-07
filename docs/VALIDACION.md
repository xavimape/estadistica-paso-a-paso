# Validación Matemática, Técnica, Multi-Dispositivo y de Accesibilidad

## 1. Resumen de verificaciones ejecutadas

| Suite / Comando | Resultado | Detalle |
| --- | --- | --- |
| `npm run validate:content` | **Aprobado (0 errores)** | 10 lecciones (`L01`–`L10`), 12 símbolos, 10 fichas y miniaturas, 8 preguntas diagnósticas, 84 actividades fijas sin IDs duplicados (`28 guía + 48 nuevas + 8 integradoras`), verificación SHA-256 de los 12 recursos estáticos y ausencia total de infografías descartadas o fotos privadas. |
| `npm test` | **8 / 8 pruebas aprobadas** | Verificación matemática independiente (`node:test`), regresión de `G4-05` (`127`, `127/16 = 7,9375 ≈ 7,94`), `G4-07` (`Me = 1` con `n=11` y `Me = 0,5` con `n=10`), `G3-07` (`12,5 cuadritos` para 25 con escala 2), separación de ejemplos de 20 y 10 estudiantes, casos bordes (vacío, `n=1`, par/impar, bimodal, amodal, negativos, nominal/ordinal), autoevaluación canónica de las 84 actividades, generador con semilla, sanitización CSV y exportación/importación JSON idempotente. |
| `npm run test:e2e` | **Aprobado en Chrome y Edge** | Verificación HTTP en raíz (`/`) y en subruta (`/repo-prueba/`), 6 resoluciones (`320×568`, `360×800`, `390×844`, `768×1024`, `1024×768`, `1440×900`) sin desborde horizontal, temas `claro`, `oscuro`, `sepia` y `contraste` al `150 %`, resolución interactiva en DOM de `G4-05` y `G4-07`, Service Worker offline real y apertura local por `file://` desde el ZIP portátil extraído. |
| `npm run package` | **Aprobado** | Generación de `site/downloads/estadistica-paso-a-paso-portatil.zip`, copia en `entrega/estadistica-paso-a-paso-portatil.zip` y paquete completo del proyecto en `entrega/estadistica-paso-a-paso-proyecto-github.zip`. |

---

## 2. Presupuesto de carga inicial (< 1 MB)

El peso total sin comprimir de los recursos de carga inicial (`index.html`, `manifest.webmanifest`, `styles.css`, los 6 módulos JS y `icon.svg`) es de **540,6 KB**, cumpliendo ampliamente el límite máximo de **1.024 KB (1 MB)**. Las 10 fichas de alta resolución (`1080 × 1920 px`) y el PDF de 25 páginas se cargan bajo demanda o cuando se pulsa **«Preparar este dispositivo para usar sin conexión»**.

---

## 3. Evidencias visuales generadas (`docs/capturas/`)

Las pruebas E2E generan automáticamente en `docs/capturas/` las siguientes 8 capturas verificadas:

1. `01-inicio-escritorio-claro.png`: Vista **Inicio** en escritorio (`1440 × 900 px`, tema claro).
2. `02-aprende-leccion-movil-360.png`: Vista **Aprendé** (`L04`) en pantalla móvil (`360 × 800 px`) servida bajo subruta `/repo-prueba/`.
3. `03-practica-G4-05-resuelto.png`: Ejercicio crítico **`G4-05`** resuelto interactivamente (`suma = 127`, `media ≈ 7,94`, `Me = 8`, `Mo = 8`).
4. `04-laboratorio-oscuro-1024.png`: **Laboratorio interactivo** en tema oscuro (`1024 × 768 px`) con el comparador Antes/Después activo.
5. `05-simulacro-tablet-768.png`: **Simulacro** en curso en resolución de tablet vertical (`768 × 1024 px`).
6. `06-recursos-fichas-sepia.png`: Galería de **Recursos y Fichas** en tema sepia tras verificar el paquete offline en caché.
7. `07-accesibilidad-contraste-150pct.png`: Tema **Alto contraste** con tamaño tipográfico al **150 %** e interlineado amplio sin desborde horizontal.
8. `08-modo-portatil-file-protocol.png`: Apertura directa mediante protocolo `file:///` desde el paquete `estadistica-paso-a-paso-portatil.zip` descomprimido.
