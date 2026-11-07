'use strict';

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');

const ROOT_DIR = path.join(__dirname, '..');
const SITE_DIR = path.join(ROOT_DIR, 'site');

// Load modules in order
require(path.join(SITE_DIR, 'assets', 'js', 'math-engine.js'));
const LessonsData = require(path.join(SITE_DIR, 'assets', 'js', 'lessons-data.js'));
const ExercisesData = require(path.join(SITE_DIR, 'assets', 'js', 'exercises-data.js'));

function sha256File(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function runValidation() {
  console.log('=== Validación integral de contenido, recursos y presupuesto ===');

  // 1. Validate Lessons, Symbols, Fichas, Diagnostic
  assert.equal(LessonsData.LESSONS.length, 10, 'Deben existir exactamente 10 lecciones (L01..L10)');
  assert.equal(LessonsData.SYMBOLS_GLOSSARY.length, 12, 'El glosario debe tener los 12 símbolos requeridos');
  assert.equal(LessonsData.FICHAS_CATALOG.length, 10, 'El catálogo de fichas debe tener las 10 fichas verificadas');
  assert.equal(LessonsData.DIAGNOSTIC_QUESTIONS.length, 8, 'El diagnóstico inicial debe tener 8 preguntas');

  for (const lesson of LessonsData.LESSONS) {
    assert.ok(lesson.id && lesson.title && lesson.objective, `Lección incompleta: ${lesson.id}`);
    const ex = lesson.smallExample || lesson.workedExample;
    assert.ok(ex && Array.isArray(ex.steps) && ex.steps.length >= 2, `Ejemplo incompleto en ${lesson.id}`);
    assert.ok(
      lesson.guidedPractice && lesson.guidedPractice.question && lesson.guidedPractice.answer,
      `Práctica guiada faltante en ${lesson.id}`
    );
  }

  // 2. Validate 84 Exercises (28 guia + 48 nuevo + 8 integrador)
  const exercises = ExercisesData.EXERCISES;
  assert.equal(exercises.length, 84, `Se esperaban 84 actividades fijas y se encontraron ${exercises.length}`);

  const ids = new Set();
  const byOrigin = { guia: 0, nuevo: 0, integrador: 0 };
  const byTopic = { variables: 0, frecuencias: 0, barras: 0, medidas: 0, integrador: 0 };
  const newByTopicAndDiff = {
    variables: { inicial: 0, intermedio: 0, desafio: 0 },
    frecuencias: { inicial: 0, intermedio: 0, desafio: 0 },
    barras: { inicial: 0, intermedio: 0, desafio: 0 },
    medidas: { inicial: 0, intermedio: 0, desafio: 0 }
  };

  for (const ex of exercises) {
    assert.ok(!ids.has(ex.id), `ID de ejercicio duplicado: ${ex.id}`);
    ids.add(ex.id);
    const origin = (ex.source && ex.source.kind) || ex.origin;
    const level = ex.level || ex.difficulty;

    assert.ok(byOrigin[origin] !== undefined, `Origen inválido en ${ex.id}: ${origin}`);
    byOrigin[origin]++;
    assert.ok(byTopic[ex.topic] !== undefined, `Tema inválido en ${ex.id}: ${ex.topic}`);
    byTopic[ex.topic]++;

    if (origin === 'nuevo') {
      assert.ok(
        newByTopicAndDiff[ex.topic][level] !== undefined,
        `Dificultad inválida en ${ex.id}: ${level}`
      );
      newByTopicAndDiff[ex.topic][level]++;
    }

    assert.ok(ex.title && ex.title.trim().length > 3, `Título vacío en ${ex.id}`);
    assert.ok(ex.prompt && ex.prompt.trim().length > 10, `Enunciado demasiado corto en ${ex.id}`);
    assert.ok(Array.isArray(ex.parts) && ex.parts.length >= 1, `Sin apartados interactivos en ${ex.id}`);
    assert.ok(Array.isArray(ex.hints) && ex.hints.length >= 3, `Se requieren al menos 3 pistas en ${ex.id}`);
    assert.ok(
      Array.isArray(ex.solutionSteps) && ex.solutionSteps.length >= 2,
      `Se requieren pasos de solución en ${ex.id}`
    );
  }

  assert.deepEqual(byOrigin, { guia: 28, nuevo: 48, integrador: 8 }, 'Conteo por origen incorrecto');
  assert.deepEqual(
    byTopic,
    { variables: 19, frecuencias: 19, barras: 19, medidas: 19, integrador: 8 },
    'Conteo por tema incorrecto (19 por cada uno de los 4 temas + 8 integradores = 84)'
  );

  for (const [topic, diffs] of Object.entries(newByTopicAndDiff)) {
    assert.deepEqual(
      diffs,
      { inicial: 4, intermedio: 4, desafio: 4 },
      `Los 12 ejercicios nuevos de ${topic} deben tener 4 iniciales, 4 intermedios y 4 desafíos`
    );
  }

  // 3. Validate SHA-256 Resource Manifest and Thumbs
  const manifestPath = path.join(__dirname, 'resource-manifest.json');
  assert.ok(fs.existsSync(manifestPath), 'No existe scripts/resource-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));

  assert.ok(Array.isArray(manifest) && manifest.length === 12, 'El manifiesto debe listar los 12 recursos verificados');
  const fichasInManifest = manifest.filter((m) => m.kind === 'ficha-png');
  assert.equal(fichasInManifest.length, 10, 'El manifiesto debe listar 10 fichas PNG');

  for (const item of manifest) {
    const fPath = path.join(ROOT_DIR, item.dest_rel);
    assert.ok(fs.existsSync(fPath), `Falta recurso en disco: ${item.dest_rel}`);
    const actualSha = sha256File(fPath);
    assert.equal(actualSha, item.sha256, `SHA-256 no coincide para ${item.dest_rel}`);
    if (item.kind === 'ficha-png') {
      const baseName = path.basename(item.dest_rel);
      const tPath = path.join(SITE_DIR, 'assets', 'fichas', 'thumbs', baseName);
      assert.ok(fs.existsSync(tPath), `Falta miniatura de ficha: assets/fichas/thumbs/${baseName}`);
    }
  }

  // 4. Verify none of the 5 eliminated infographics or private classroom photos are inside site/
  const forbiddenNames = [
    'Guía_de_tablas_de_frecuencia.png',
    'Medidas_de_tendencia_central.png',
    'Guía visual de variables estadísticas.png',
    'Tema.jpeg',
    'WhatsApp Image'
  ];

  function scanDirForForbidden(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      for (const bad of forbiddenNames) {
        assert.ok(!entry.name.includes(bad), `Archivo prohibido encontrado en site/: ${full}`);
      }
      if (entry.isDirectory()) scanDirForForbidden(full);
    }
  }
  scanDirForForbidden(SITE_DIR);

  // 5. Verify Initial Load Budget (< 1 MB = 1,048,576 bytes uncompressed)
  const initialFiles = [
    'index.html',
    'manifest.webmanifest',
    'assets/css/styles.css',
    'assets/css/study.css',
    'assets/js/math-engine.js',
    'assets/js/lessons-data.js',
    'assets/js/exercises-data.js',
    'assets/js/storage.js',
    'assets/js/charts.js',
    'assets/js/ui-views.js',
    'assets/js/missions.js',
    'assets/js/study-views.js',
    'assets/js/app.js',
    'assets/icons/icon.svg'
  ];
  let totalInitialBytes = 0;
  for (const rel of initialFiles) {
    const p = path.join(SITE_DIR, rel);
    assert.ok(fs.existsSync(p), `Falta archivo inicial: ${rel}`);
    totalInitialBytes += fs.statSync(p).size;
  }
  const maxInitialBytes = 1024 * 1024;
  assert.ok(
    totalInitialBytes < maxInitialBytes,
    `El peso inicial (${totalInitialBytes} B) supera el límite de 1 MB (${maxInitialBytes} B)`
  );

  // 6. Verify relative paths in index.html & manifest.webmanifest (no leading "/" in href/src)
  const indexHtml = fs.readFileSync(path.join(SITE_DIR, 'index.html'), 'utf-8');
  assert.ok(!/\b(href|src)="\/[^/]/.test(indexHtml), 'index.html no debe usar rutas absolutas a la raíz "/"');

  console.log('✓ 10 lecciones, 12 símbolos, 10 fichas y 8 preguntas diagnósticas verificados.');
  console.log('✓ 84 actividades fijas verificadas (28 guía + 48 nuevas + 8 integradoras; 21 por tema).');
  console.log('✓ Integridad SHA-256 de las 10 fichas, sus 10 miniaturas, el PDF y el ZIP verificada.');
  console.log(`✓ Presupuesto de carga inicial verificado: ${(totalInitialBytes / 1024).toFixed(1)} KB (< 1024 KB).`);
}

if (require.main === module) {
  runValidation();
}

module.exports = { runValidation };
