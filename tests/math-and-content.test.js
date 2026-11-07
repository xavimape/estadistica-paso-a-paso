'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');

const SITE_DIR = path.join(__dirname, '..', 'site');
const MathEngine = require(path.join(SITE_DIR, 'assets', 'js', 'math-engine.js'));
const ExercisesData = require(path.join(SITE_DIR, 'assets', 'js', 'exercises-data.js'));
const Storage = require(path.join(SITE_DIR, 'assets', 'js', 'storage.js'));
const Charts = require(path.join(SITE_DIR, 'assets', 'js', 'charts.js'));
const { runValidation } = require(path.join(__dirname, '..', 'scripts', 'validate-content.js'));

test('1. Validación estructural del banco de 84 ejercicios, 10 lecciones, 10 fichas y manifiesto SHA-256', () => {
  runValidation();
});

test('2. Parser numérico seguro y formato en español de Argentina (coma decimal)', () => {
  assert.equal(MathEngine.formatNumberAr(7.9375, { decimals: 2 }), '7,94');
  assert.equal(MathEngine.formatNumberAr(0.5, { decimals: 2 }), '0,5');
  assert.equal(MathEngine.formatNumberAr(12.5, { decimals: 2 }), '12,5');

  const okComma = MathEngine.parseStudentNumber('7,94');
  assert.equal(okComma.ok, true);
  assert.equal(okComma.value, 7.94);

  const okFrac = MathEngine.parseStudentNumber('3 / 20', { allowFraction: true });
  assert.equal(okFrac.ok, true);
  assert.equal(okFrac.value, 0.15);

  // Reject malformed strings like 7abc, division by zero, or code expressions
  for (const invalidInput of ['7abc', '12px', '5/0', '0/0', '1+2', 'alert(1)', 'NaN', 'Infinity', '']) {
    const res = MathEngine.parseStudentNumber(invalidInput, { allowFraction: true });
    assert.equal(res.ok, false, `Debería rechazar entrada inválida: "${invalidInput}"`);
  }
});

test('3. Regresión crítica Ejercicio 4.5 (G4-05): suma 127 y media 127/16 = 7,9375 ≈ 7,94', () => {
  const data45 = [5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10];
  assert.equal(data45.length, 16);

  // Independent calculation
  const independentSum = data45.reduce((acc, v) => acc + v, 0);
  assert.equal(independentSum, 127, 'La suma de los 16 datos de 4.5 es 127, no 128');
  const independentMean = independentSum / data45.length;
  assert.equal(independentMean, 7.9375);

  const stats = MathEngine.computeDatasetStats(data45, { kind: 'discreta' });
  assert.equal(stats.n, 16);
  assert.equal(stats.mean.sum, 127);
  assert.equal(stats.mean.value, 7.9375);
  assert.equal(stats.mean.rounded2, 7.94);
  assert.equal(stats.mean.isExact2Decimals, false, '7,9375 requiere ≈ al redondear a 7,94');
  assert.equal(stats.median.value, 8);
  assert.deepEqual(stats.mode.modes, [8]);

  // Verify exercise G4-05 in the bank rejects 128 and 8 as mean
  const ex45 = ExercisesData.EXERCISES.find((e) => e.id === 'G4-05');
  assert.ok(ex45);
  const sumPart = ex45.parts.find((p) => p.id === 'suma');
  const meanPart = ex45.parts.find((p) => p.id === 'media');

  const wrongSumEval = MathEngine.evaluatePart(sumPart, '128');
  assert.equal(wrongSumEval.ok, false, 'Debe rechazar la suma errónea 128');
  const rightSumEval = MathEngine.evaluatePart(sumPart, '127');
  assert.equal(rightSumEval.ok, true);

  const wrongMeanEval = MathEngine.evaluatePart(meanPart, '8');
  assert.equal(wrongMeanEval.ok, false, 'Debe rechazar la media errónea 8');
  const rightMeanEval = MathEngine.evaluatePart(meanPart, '7,94');
  assert.equal(rightMeanEval.ok, true);
});

test('4. Regresión crítica Ejercicio 4.7 (G4-07): medianas 1 (con n=11) y 0,5 (con n=10 al retirar 11 tardanzas)', () => {
  const dataWith11 = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 11];
  const dataWithout11 = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3];

  const stats11 = MathEngine.computeDatasetStats(dataWith11, { kind: 'discreta' });
  assert.equal(stats11.n, 11);
  assert.equal(stats11.mean.sum, 20);
  assert.equal(stats11.mean.rounded2, 1.82);
  assert.equal(stats11.median.value, 1, 'Con 11 datos ordenados, el 6.º dato es 1');
  assert.deepEqual(stats11.mode.modes, [0]);

  const stats10 = MathEngine.computeDatasetStats(dataWithout11, { kind: 'discreta' });
  assert.equal(stats10.n, 10);
  assert.equal(stats10.mean.sum, 9);
  assert.equal(stats10.mean.value, 0.9);
  assert.equal(stats10.median.value, 0.5, 'Con 10 datos ordenados, los centrales 5.º (0) y 6.º (1) promedian 0,5');
  assert.deepEqual(stats10.mode.modes, [0]);

  const ex47 = ExercisesData.EXERCISES.find((e) => e.id === 'G4-07');
  assert.ok(ex47);
  const medBeforePart = ex47.parts.find((p) => p.id === 'mediana_11');
  const medAfterPart = ex47.parts.find((p) => p.id === 'mediana_10');

  assert.equal(MathEngine.evaluatePart(medBeforePart, '0').ok, false, 'Debe rechazar mediana 0 antes de retirar 11');
  assert.equal(MathEngine.evaluatePart(medBeforePart, '1').ok, true);
  assert.equal(MathEngine.evaluatePart(medAfterPart, '0').ok, false, 'Debe rechazar mediana 0 después de retirar 11');
  assert.equal(MathEngine.evaluatePart(medAfterPart, '1').ok, false, 'Debe rechazar mediana 1 después de retirar 11');
  assert.equal(MathEngine.evaluatePart(medAfterPart, '0,5').ok, true);
});

test('5. Regresión Ejercicio 3.7 (G3-07) y separación de ejemplos de 20 estudiantes vs 10 estudiantes', () => {
  const ex37 = ExercisesData.EXERCISES.find((e) => e.id === 'G3-07');
  assert.ok(ex37);
  const part25 = ex37.parts.find((p) => p.id === 'altura_25');
  assert.ok(part25, 'G3-07 debe incluir el apartado para el valor 25 con escala 1 cuadrito = 2 unidades');
  assert.equal(MathEngine.evaluatePart(part25, '12,5').ok, true);

  // Guide 20-student dataset vs Fichas 10-student dataset
  const guidePreset = ExercisesData.LAB_PRESETS.find((p) => p.id === 'guia-20');
  const fichasPreset = ExercisesData.LAB_PRESETS.find((p) => p.id === 'fichas-10');
  assert.equal(guidePreset.values.length, 20);
  assert.equal(fichasPreset.values.length, 10);

  const st20 = MathEngine.computeDatasetStats(guidePreset.values, { kind: 'discreta' });
  assert.equal(st20.n, 20);
  assert.equal(st20.mean.sum, 30);
  assert.equal(st20.mean.value, 1.5);
  assert.equal(st20.median.value, 1);
  assert.deepEqual(st20.mode.modes, [1]);
  assert.equal(st20.totals.F, 20);

  const st10 = MathEngine.computeDatasetStats(fichasPreset.values, { kind: 'discreta' });
  assert.equal(st10.n, 10);
  assert.equal(st10.mean.sum, 15);
  assert.equal(st10.mean.value, 1.5);
  assert.equal(st10.median.value, 1);
  assert.deepEqual(st10.mode.modes, [1]);
  assert.equal(st10.totals.F, 10);
});

test('6. Casos bordes del motor matemático: vacío, 1 dato, par/impar, bimodal, amodal, negativos y nominal/ordinal', () => {
  assert.equal(MathEngine.computeDatasetStats([]).ok, false, 'Lista vacía no debe ser válida');

  const single = MathEngine.computeDatasetStats([42]);
  assert.equal(single.ok, true);
  assert.equal(single.n, 1);
  assert.equal(single.mean.value, 42);
  assert.equal(single.median.value, 42);

  const bimodal = MathEngine.computeDatasetStats([1, 1, 2, 3, 3]);
  assert.equal(bimodal.mode.classification, 'bimodal');
  assert.deepEqual(bimodal.mode.modes, [1, 3]);

  const amodal = MathEngine.computeDatasetStats([2, 2, 4, 4, 6, 6]);
  assert.equal(amodal.mode.classification, 'amodal');
  assert.deepEqual(amodal.mode.modes, []);

  const negatives = MathEngine.computeDatasetStats([-4, -1, 0, 2, 3]);
  assert.equal(negatives.mean.value, 0);
  assert.equal(negatives.median.value, 0);

  const nominal = MathEngine.computeDatasetStats(['Fútbol', 'Vóley', 'Fútbol', 'Básquet'], { kind: 'nominal' });
  assert.equal(nominal.mean.applicable, false);
  assert.equal(nominal.median.applicable, false);
  assert.equal(nominal.rows[0].F, null, 'En nominal no se calcula acumulada F');
  assert.deepEqual(nominal.mode.modes, ['Fútbol']);

  const ordinalEvenDiff = MathEngine.computeDatasetStats(
    ['Regular', 'Bueno', 'Excelente', 'Defectuoso'],
    { kind: 'ordinal', categoryOrder: ['Defectuoso', 'Regular', 'Bueno', 'Excelente'] }
  );
  assert.equal(ordinalEvenDiff.median.applicable, true);
  assert.equal(ordinalEvenDiff.median.formatted, 'Entre «Regular» y «Bueno» (no se promedian palabras)');
});

test('7. Autoevaluación completa de las 84 actividades del banco con sus respuestas canónicas', () => {
  for (const ex of ExercisesData.EXERCISES) {
    const mockStudentAnswers = {};
    for (const part of ex.parts) {
      if (part.type === 'select') {
        mockStudentAnswers[part.id] = String(part.expected);
      } else if (part.type === 'number') {
        if (typeof part.expected === 'object' && part.expected !== null && 'numerator' in part.expected) {
          const val = part.expected.numerator / part.expected.denominator;
          mockStudentAnswers[part.id] = MathEngine.formatNumberAr(val, { decimals: part.roundingDecimals || 2 });
        } else {
          mockStudentAnswers[part.id] = MathEngine.formatNumberAr(part.expected, { decimals: part.roundingDecimals || 2 });
        }
      } else if (part.type === 'number-set') {
        if (Array.isArray(part.expected) && part.expected.length === 0) {
          mockStudentAnswers[part.id] = 'amodal';
        } else {
          mockStudentAnswers[part.id] = part.expected.map((v) => MathEngine.formatNumberAr(v)).join('; ');
        }
      } else if (part.type === 'freq-table') {
        const cellAns = {};
        const n = part.totalN || part.rows.reduce((acc, r) => acc + Number(r.f), 0);
        part.rows.forEach((r, rIdx) => {
          for (const col of part.columns || ['f', 'fr', 'pct', 'F']) {
            const key = `${rIdx}_${col}`;
            if (col === 'f') cellAns[key] = String(r.f);
            else if (col === 'fr') cellAns[key] = MathEngine.formatNumberAr(r.f / n, { decimals: 2 });
            else if (col === 'pct') cellAns[key] = MathEngine.formatNumberAr((r.f * 100) / n, { decimals: 2 });
            else if (col === 'F') cellAns[key] = String(r.F);
          }
        });
        mockStudentAnswers[part.id] = cellAns;
      } else if (part.type === 'bar-builder') {
        const scaleStep = (part.validScaleSteps && part.validScaleSteps[0]) || 1;
        const barsAns = {};
        for (const b of part.bars) {
          const target = part.inputMode === 'cells' ? b.value / scaleStep : b.value;
          barsAns[b.key] = MathEngine.formatNumberAr(target, { decimals: 2 });
        }
        mockStudentAnswers[part.id] = { scaleStep: String(scaleStep), bars: barsAns };
      } else if (part.type === 'rubric') {
        mockStudentAnswers[part.id] = {
          text: 'Explicación completa en contexto verificada con los criterios de la rúbrica.',
          checks: (part.criteria || []).map(() => true)
        };
      }
    }

    const evaluation = MathEngine.evaluateExercise(ex, mockStudentAnswers);
    assert.equal(
      evaluation.ok,
      true,
      `El ejercicio ${ex.id} no pasó la autoevaluación con sus respuestas canónicas: ${JSON.stringify(evaluation.partResults)}`
    );
  }
});

test('8. Generador reproducible «Otro parecido» y sanitización CSV + idempotencia de importación JSON', () => {
  const v1 = MathEngine.generateComparableVariant('frecuencias', 'SEMILLA-123');
  const v2 = MathEngine.generateComparableVariant('frecuencias', 'SEMILLA-123');
  assert.deepEqual(v1, v2, 'La misma semilla debe producir exactamente la misma variante');

  const vMed = MathEngine.generateComparableVariant('medidas', 'SEMILLA-456');
  assert.equal(vMed.parts.length, 3);

  // CSV formula injection sanitization
  assert.equal(Charts.sanitizeCsvCell('=SUM(A1:A5)'), "'=SUM(A1:A5)");
  assert.equal(Charts.sanitizeCsvCell('+10'), "'+10");
  assert.equal(Charts.sanitizeCsvCell('@cmd'), "'@cmd");

  // Storage import validation & idempotence
  Storage.loadState();
  Storage.markExerciseStatus('G1-01', 'solved');
  Storage.markLessonRead('L01', true);
  const exported = Storage.exportProgressJson();
  const validated = Storage.validateImportJson(exported);
  assert.equal(validated.ok, true);
  assert.equal(validated.summary.solvedCount, 1);

  Storage.applyImportedProgress(validated.payload, 'merge');
  Storage.applyImportedProgress(validated.payload, 'merge');
  const prof = Storage.getActiveProfile();
  assert.equal(Object.keys(prof.progress.exercises).length, 1, 'La importación repetida debe ser idempotente');
});
