'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { GUIA_EXERCISES } = require('./bank/guia.js');
const { NUEVOS_1_2 } = require('./bank/nuevos-1-2.js');
const { NUEVOS_3_4_INT } = require('./bank/nuevos-3-4-int.js');

const allExercises = [...GUIA_EXERCISES, ...NUEVOS_1_2, ...NUEVOS_3_4_INT];

// Verify count and uniqueness
if (allExercises.length !== 84) {
  throw new Error(`Expected 84 exercises, got ${allExercises.length}`);
}

const seenIds = new Set();
for (const ex of allExercises) {
  if (seenIds.has(ex.id)) {
    throw new Error(`Duplicate exercise ID: ${ex.id}`);
  }
  seenIds.add(ex.id);
  if (Array.isArray(ex.hints) && ex.hints.length === 2) {
    ex.hints.push(
      ex.commonErrorNote ||
        'Verificá que cada respuesta coincida con el significado de la variable y las unidades del problema antes de comprobar.'
    );
  }
}

// Add预设 examples for Laboratorio as well
const LAB_PRESETS = [
  {
    id: 'fichas-10',
    title: 'Fichas: Libros leídos por 10 estudiantes',
    mode: 'numeric',
    kind: 'discreta',
    unit: 'libros',
    description: 'Ejemplo ficticio de las fichas para celular (n = 10; frecuencias 2, 4, 2, 1, 1).',
    values: [0, 1, 1, 2, 0, 1, 3, 2, 1, 4]
  },
  {
    id: 'guia-20',
    title: 'Guía: Libros leídos por 20 estudiantes',
    mode: 'numeric',
    kind: 'discreta',
    unit: 'libros',
    description: 'Ejemplo integrador de la guía principal (n = 20; frecuencias 3, 8, 6, 2, 1; media 1,5).',
    values: [1, 2, 0, 1, 3, 2, 1, 0, 2, 1, 4, 1, 2, 0, 1, 3, 2, 1, 2, 1]
  },
  {
    id: 'guia-tardanzas-11',
    title: 'Guía 4.7: Tardanzas de 11 alumnos (con extremo 11)',
    mode: 'numeric',
    kind: 'discreta',
    unit: 'tardanzas',
    description: 'Permite probar el comparador Antes/Después retirando el valor extremo 11.',
    values: [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 11],
    extremeValueToExplore: 11
  },
  {
    id: 'guia-aciertos-16',
    title: 'Guía 4.5: Aciertos de 16 alumnos en prueba corta',
    mode: 'numeric',
    kind: 'discreta',
    unit: 'aciertos',
    description: '16 observaciones cuya suma es 127 y su media es 127/16 = 7,9375 ≈ 7,94.',
    values: [5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10]
  },
  {
    id: 'guia-zapatillas-12',
    title: 'Guía 4.2: Marcas de zapatillas (cualitativa nominal)',
    mode: 'categorical',
    kind: 'nominal',
    unit: '',
    description: '12 respuestas nominales (Nike, Adidas, Puma, Topper). Muestra por qué solo aplica la moda.',
    values: ['Nike', 'Adidas', 'Puma', 'Nike', 'Topper', 'Nike', 'Adidas', 'Puma', 'Nike', 'Topper', 'Adidas', 'Nike']
  },
  {
    id: 'guia-computadoras-ordinal',
    title: 'Guía 1.2: Estado de computadoras (cualitativa ordinal)',
    mode: 'categorical',
    kind: 'ordinal',
    categoryOrder: ['Defectuoso', 'Regular', 'Bueno', 'Excelente'],
    unit: '',
    description: '15 equipos evaluados con categorías ordenadas de menor a mayor calidad.',
    values: [
      'Bueno', 'Excelente', 'Regular', 'Bueno', 'Defectuoso',
      'Bueno', 'Regular', 'Excelente', 'Bueno', 'Bueno',
      'Regular', 'Excelente', 'Bueno', 'Regular', 'Excelente'
    ]
  }
];

const outputJs = `/* Auto-generado por scripts/build-exercises-bank.js — 84 actividades verificadas */
(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});

  const EXERCISES = ${JSON.stringify(allExercises, null, 2)};

  const LAB_PRESETS = ${JSON.stringify(LAB_PRESETS, null, 2)};

  EstadisticaApp.ExercisesData = {
    EXERCISES: EXERCISES,
    LAB_PRESETS: LAB_PRESETS
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.ExercisesData;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
`;

const targetPath = path.join(__dirname, '..', 'site', 'assets', 'js', 'exercises-data.js');
fs.writeFileSync(targetPath, outputJs, 'utf-8');
console.log(`Built ${targetPath} with ${allExercises.length} exercises (${Buffer.byteLength(outputJs)} bytes).`);

const docsDir = path.join(__dirname, '..', 'docs');
fs.mkdirSync(docsDir, { recursive: true });
const mapaLines = [
  '# Mapa Completo de las 84 Actividades Fijas y Generador de Variantes',
  '',
  '## 1. Resumen cuantitativo del banco',
  '',
  '- **Guía escolar original (`G1-01` a `G4-07`)**: 28 actividades (7 por bloque temático).',
  '- **Práctica adicional graduada (`N1-01` a `N4-12`)**: 48 actividades (12 por bloque temático: 4 iniciales, 4 intermedias y 4 desafíos).',
  '- **Problemas integradores completos (`I-01` a `I-08`)**: 8 actividades que conectan variable, tabla, gráfico y medidas.',
  '- **Total de actividades fijas identificables**: **84 actividades**.',
  '- **Generador reproducible «Otro parecido»**: Familias paramétricas deterministas con semilla visible en la URL (`#/practica/variante/:tema/:semilla`) para tablas de frecuencias y medidas de tendencia central.',
  '',
  '## 2. Tabla de las 84 actividades fijas',
  '',
  '| ID | Origen | Tema | Nivel | Lección vinculada | Título |',
  '| --- | --- | --- | --- | --- | --- |'
];
for (const ex of allExercises) {
  const origin = (ex.source && ex.source.label) || ex.origin;
  mapaLines.push(`| \`${ex.id}\` | ${origin} | \`${ex.topic}\` | \`${ex.level}\` | \`${ex.lessonId}\` | ${ex.title} |`);
}
const mapaPath = path.join(docsDir, 'MAPA_EJERCICIOS.md');
fs.writeFileSync(mapaPath, mapaLines.join('\n') + '\n', 'utf-8');
console.log(`Built ${mapaPath} with ${allExercises.length} rows.`);
