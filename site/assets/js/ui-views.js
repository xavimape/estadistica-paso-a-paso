(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});
  const MathEngine = EstadisticaApp.MathEngine;
  const LessonsData = EstadisticaApp.LessonsData;
  const ExercisesData = EstadisticaApp.ExercisesData;
  const Storage = EstadisticaApp.Storage;
  const Charts = EstadisticaApp.Charts;
  const esc = Charts.escapeHtml;

  // ===================== LABORATORIO STATE & RENDER =====================
  const labState = {
    presetId: 'fichas-10',
    mode: 'numeric',
    kind: 'discreta',
    unit: 'libros',
    rawText: '0\n1\n1\n2\n0\n1\n3\n2\n1\n4',
    categoryOrderText: 'Defectuoso, Regular, Bueno, Excelente',
    showFr: true,
    showPct: true,
    showF: true,
    showProd: true,
    mobileCardView: false,
    yScaleStep: '',
    compareActive: false,
    compareModifiedText: '0\n1\n1\n2\n0\n1\n3\n2\n1',
    pasteSeparator: ';',
    pastePreviewText: '',
    errorMsg: ''
  };

  function loadLabPreset(presetId) {
    const preset = (ExercisesData.LAB_PRESETS || []).find((p) => p.id === presetId) || ExercisesData.LAB_PRESETS[0];
    if (!preset) return;
    labState.presetId = preset.id;
    labState.mode = preset.mode;
    labState.kind = preset.kind;
    labState.unit = preset.unit || '';
    labState.rawText = preset.values.join('\n');
    if (preset.categoryOrder) {
      labState.categoryOrderText = preset.categoryOrder.join(', ');
    }
    // Prepare default "Después" without last/extreme value
    const withoutLast = preset.values.slice(0, Math.max(1, preset.values.length - 1));
    labState.compareModifiedText = withoutLast.join('\n');
    labState.errorMsg = '';
  }

  function parseLabValues(text, isNumeric) {
    const lines = String(text || '')
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) {
      return { ok: false, message: 'Ingresá al menos un dato (uno por renglón).' };
    }
    if (lines.length > 100) {
      return {
        ok: false,
        message: `Ingresaste ${lines.length} datos. El límite del Laboratorio es de 100 observaciones para mantener la lectura clara.`
      };
    }
    const values = [];
    for (let i = 0; i < lines.length; i++) {
      if (isNumeric) {
        const p = MathEngine.parseStudentNumber(lines[i], { allowFraction: false });
        if (!p.ok) {
          return { ok: false, message: `Renglón ${i + 1} («${lines[i]}»): ${p.message}` };
        }
        values.push(p.value);
      } else {
        const clean = lines[i].slice(0, 40);
        values.push(clean);
      }
    }
    const distinct = new Set(values);
    if (distinct.size > 20) {
      return {
        ok: false,
        message: `Hay ${distinct.size} valores o categorías distintas. El límite de la tabla por valores es de 20 filas distintas.`
      };
    }
    return { ok: true, values: values };
  }

  function renderLaboratorioView() {
    const isNumeric = labState.mode === 'numeric';
    const parsed = parseLabValues(labState.rawText, isNumeric);
    const catOrder = labState.categoryOrderText
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const stats = parsed.ok
      ? MathEngine.computeDatasetStats(parsed.values, {
          kind: isNumeric ? labState.kind : labState.kind,
          categoryOrder: catOrder
        })
      : null;

    // Check if many decimals warning applies
    const hasManyDecimals =
      isNumeric &&
      parsed.ok &&
      parsed.values.some((v) => !Number.isInteger(v)) &&
      stats &&
      stats.distinctCount >= 6;

    const presetsHtml = (ExercisesData.LAB_PRESETS || [])
      .map(
        (p) =>
          `<option value="${esc(p.id)}" ${p.id === labState.presetId ? 'selected' : ''}>${esc(p.title)}</option>`
      )
      .join('');

    let resultsHtml = '';
    if (!parsed.ok || !stats || !stats.ok) {
      const msg = !parsed.ok ? parsed.message : stats ? stats.message : 'Datos inválidos.';
      resultsHtml = `<div class="feedback-box feedback-err" role="alert">${esc(msg)}</div>`;
    } else {
      const hasOrder = stats.hasOrder;
      const showFCol = labState.showF && hasOrder;
      const showProdCol = labState.showProd && isNumeric;

      // Table headers
      const ths = [
        `<th>Valor (${isNumeric ? 'x' : 'Categoría'})</th>`,
        `<th>Frec. absoluta (f)</th>`
      ];
      if (labState.showFr) ths.push(`<th>Frec. relativa (fr)</th>`);
      if (labState.showPct) ths.push(`<th>Porcentaje (%)</th>`);
      if (showFCol) ths.push(`<th>Acumulada (F)</th>`);
      if (showProdCol) ths.push(`<th>Producto (x · f)</th>`);

      const trs = stats.rows
        .map((r) => {
          const valStr = isNumeric ? MathEngine.formatNumberAr(r.value, { decimals: 2 }) : esc(r.value);
          const cells = [`<td><strong>${valStr}</strong></td>`, `<td>${r.f}</td>`];
          if (labState.showFr) {
            cells.push(`<td>${r.frNumerator}/${r.frDenominator} ≈ ${MathEngine.formatNumberAr(r.frRounded, { fixedDecimals: 2 })}</td>`);
          }
          if (labState.showPct) {
            cells.push(`<td>${MathEngine.formatNumberAr(r.pctRounded, { fixedDecimals: 2 })} %</td>`);
          }
          if (showFCol) cells.push(`<td>${r.F}</td>`);
          if (showProdCol) cells.push(`<td>${MathEngine.formatNumberAr(r.product, { decimals: 2 })}</td>`);
          return `<tr>${cells.join('')}</tr>`;
        })
        .join('');

      const tfootCells = [`<td>Total</td>`, `<td>n = ${stats.n}</td>`];
      if (labState.showFr) tfootCells.push(`<td>${MathEngine.formatNumberAr(stats.totals.frRounded, { fixedDecimals: 2 })}</td>`);
      if (labState.showPct) tfootCells.push(`<td>${MathEngine.formatNumberAr(stats.totals.pctRounded, { fixedDecimals: 2 })} %</td>`);
      if (showFCol) tfootCells.push(`<td>—</td>`);
      if (showProdCol) tfootCells.push(`<td>Σ(x·f) = ${MathEngine.formatNumberAr(stats.totals.product, { decimals: 2 })}</td>`);

      // Mobile cards for each row
      const mobileCardsHtml = stats.rows
        .map((r) => {
          const valStr = isNumeric ? MathEngine.formatNumberAr(r.value, { decimals: 2 }) : esc(r.value);
          return `<div class="mobile-row-card">
            <strong>Valor: ${valStr}</strong>
            <div class="mobile-row-grid">
              <div>f: <strong>${r.f}</strong></div>
              ${labState.showFr ? `<div>fr: <strong>${MathEngine.formatNumberAr(r.frRounded, { fixedDecimals: 2 })}</strong></div>` : ''}
              ${labState.showPct ? `<div>%: <strong>${MathEngine.formatNumberAr(r.pctRounded, { fixedDecimals: 2 })} %</strong></div>` : ''}
              ${showFCol ? `<div>F: <strong>${r.F}</strong></div>` : ''}
              ${showProdCol ? `<div>x·f: <strong>${MathEngine.formatNumberAr(r.product, { decimals: 2 })}</strong></div>` : ''}
            </div>
          </div>`;
        })
        .join('');

      const customStep = Number(labState.yScaleStep);
      const chartSvg = Charts.renderBarChartSvg({
        title: `Distribución de frecuencias (n = ${stats.n})`,
        xAxisLabel: isNumeric ? `Valores (${labState.unit || 'x'})` : 'Categorías',
        yAxisLabel: 'Frecuencia absoluta (f)',
        yStep: customStep > 0 ? customStep : undefined,
        bars: stats.rows.map((r) => ({
          label: isNumeric ? MathEngine.formatNumberAr(r.value, { decimals: 2 }) : String(r.value),
          value: r.f
        }))
      });

      // Sorted list with median highlight
      let sortedChipsHtml = '';
      if (stats.sortedValues) {
        const medPositions = stats.median && stats.median.positions1Based ? stats.median.positions1Based : [];
        sortedChipsHtml = stats.sortedValues
          .map((v, idx) => {
            const pos1 = idx + 1;
            const isMed = medPositions.includes(pos1);
            const label = isNumeric ? MathEngine.formatNumberAr(v, { decimals: 2 }) : esc(v);
            return `<span class="datum-chip ${isMed ? 'is-median' : ''}" title="Posición ${pos1}">${pos1}.º: ${label}</span>`;
          })
          .join('');
      }

      // Compare Antes / Después
      let compareHtml = '';
      if (labState.compareActive) {
        const parsedAfter = parseLabValues(labState.compareModifiedText, isNumeric);
        const statsAfter = parsedAfter.ok
          ? MathEngine.computeDatasetStats(parsedAfter.values, {
              kind: labState.kind,
              categoryOrder: catOrder
            })
          : null;

        compareHtml = `
          <div class="card card-highlight" style="margin-top:1rem;">
            <h3 style="margin-top:0;">Comparador Antes / Después (exploración de valores extremos)</h3>
            <p class="field-hint">El conjunto original se conserva intacto. Editá la columna «Después» (por ejemplo, retirando o cambiando el dato extremo) para comparar cuánto varía cada medida.</p>
            <div class="grid-2">
              <div>
                <label class="field-label" for="lab-compare-input">Datos «Después» (1 dato por renglón)</label>
                <textarea id="lab-compare-input" rows="5">${esc(labState.compareModifiedText)}</textarea>
                <button type="button" class="btn btn-sm btn-primary" id="btn-lab-update-compare" style="margin-top:0.4rem;">Actualizar comparación</button>
              </div>
              <div>
                ${
                  statsAfter && statsAfter.ok
                    ? `<table class="data-table">
                        <caption>Comparación de medidas</caption>
                        <thead><tr><th>Medida</th><th>Antes (n=${stats.n})</th><th>Después (n=${statsAfter.n})</th></tr></thead>
                        <tbody>
                          <tr>
                            <td><strong>Media (x̄)</strong></td>
                            <td>${stats.mean.applicable ? stats.mean.formatted : 'No aplica'}</td>
                            <td>${statsAfter.mean.applicable ? statsAfter.mean.formatted : 'No aplica'}</td>
                          </tr>
                          <tr>
                            <td><strong>Mediana (Me)</strong></td>
                            <td>${stats.median.applicable ? stats.median.formatted : 'No aplica'}</td>
                            <td>${statsAfter.median.applicable ? statsAfter.median.formatted : 'No aplica'}</td>
                          </tr>
                          <tr>
                            <td><strong>Moda (Mo)</strong></td>
                            <td>${esc(stats.mode.formatted)}</td>
                            <td>${esc(statsAfter.mode.formatted)}</td>
                          </tr>
                        </tbody>
                      </table>`
                    : `<div class="feedback-box feedback-err">${esc(parsedAfter.message || 'Datos inválidos en Después')}</div>`
                }
              </div>
            </div>
          </div>`;
      }

      resultsHtml = `
        ${
          !hasOrder
            ? `<div class="feedback-box feedback-warn">
                <strong>Variable cualitativa nominal:</strong> como las categorías no tienen un orden jerárquico natural, se ocultan la frecuencia acumulada (F), la media y la mediana. La única medida de tendencia central aplicable es la <strong>moda</strong>.
              </div>`
            : ''
        }
        ${
          hasManyDecimals
            ? `<div class="feedback-box feedback-warn">
                <strong>Nota sobre muchos valores con decimales:</strong> en un gráfico de barras por valores individuales, cada número distinto genera su propia barra. Cuando una variable continua toma muchos decimales diferentes, en cursos siguientes se agrupan en intervalos para construir un histograma.
              </div>`
            : ''
        }
        ${
          stats.totals.hasRoundingDiff
            ? `<div class="feedback-box feedback-warn">
                <strong>Nota de redondeo:</strong> antes de redondear, las fracciones de frecuencia relativa suman exactamente ${stats.n}/${stats.n} = 1 (100 %). Al redondear cada fila a dos decimales, la suma visual da ${MathEngine.formatNumberAr(stats.totals.frRounded, { fixedDecimals: 2 })} (${MathEngine.formatNumberAr(stats.totals.pctRounded, { fixedDecimals: 2 })} %).
              </div>`
            : ''
        }

        <div class="card">
          <div class="card-header">
            <h3 style="margin:0;">1. Tabla de frecuencias conectada (n = ${stats.n})</h3>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-sm" id="btn-lab-toggle-table-view">
                ${labState.mobileCardView ? 'Ver como tabla clásica' : 'Ver como tarjetas por fila'}
              </button>
              <button type="button" class="btn btn-sm btn-secondary" id="btn-lab-download-csv">
                Descargar tabla CSV (;)
              </button>
            </div>
          </div>

          <div style="display:flex;gap:0.9rem;flex-wrap:wrap;margin-bottom:0.65rem;">
            <label><input type="checkbox" id="chk-lab-fr" ${labState.showFr ? 'checked' : ''} /> Mostrar fr</label>
            <label><input type="checkbox" id="chk-lab-pct" ${labState.showPct ? 'checked' : ''} /> Mostrar %</label>
            ${hasOrder ? `<label><input type="checkbox" id="chk-lab-F" ${labState.showF ? 'checked' : ''} /> Mostrar acumulada (F)</label>` : ''}
            ${isNumeric ? `<label><input type="checkbox" id="chk-lab-prod" ${labState.showProd ? 'checked' : ''} /> Mostrar producto (x · f)</label>` : ''}
          </div>

          <div class="${labState.mobileCardView ? 'table-view-mobile' : ''}">
            <div class="table-wrapper">
              <table class="data-table">
                <caption>Tabla de frecuencias (${stats.n} observaciones, ${stats.distinctCount} filas)</caption>
                <thead><tr>${ths.join('')}</tr></thead>
                <tbody>${trs}</tbody>
                <tfoot><tr class="row-total">${tfootCells.join('')}</tr></tfoot>
              </table>
            </div>
            <div class="mobile-table-cards">${mobileCardsHtml}</div>
          </div>
        </div>

        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0;">2. Medidas de tendencia central</h3>
            <ul style="padding-left:1.2rem;margin:0;">
              <li style="margin-bottom:0.6rem;">
                <strong>Media aritmética (x̄):</strong>
                ${
                  stats.mean.applicable
                    ? `${MathEngine.formatNumberAr(stats.mean.sum, { decimals: 2 })} ÷ ${stats.n} ${stats.mean.isExact2Decimals ? '=' : '≈'} <strong>${stats.mean.formatted} ${esc(labState.unit)}</strong>
                       <div class="field-hint">Reparto equitativo: si repartiéramos el total (${MathEngine.formatNumberAr(stats.mean.sum)}) en partes iguales entre las ${stats.n} observaciones, cada una recibiría ${stats.mean.formatted}.</div>`
                    : `<em>No aplicable (${esc(stats.mean.reason)})</em>`
                }
              </li>
              <li style="margin-bottom:0.6rem;">
                <strong>Mediana (Me):</strong>
                ${
                  stats.median.applicable
                    ? `<strong>${esc(stats.median.formatted)} ${esc(labState.unit)}</strong>
                       <div class="field-hint">Posición central: (${stats.n} + 1) ÷ 2 = ${MathEngine.formatNumberAr(stats.median.position)} → lugar(es) ${stats.median.positions1Based.join(' y ')} en la lista ordenada.</div>`
                    : `<em>No aplicable (${esc(stats.median.reason)})</em>`
                }
              </li>
              <li>
                <strong>Moda (Mo):</strong>
                <strong>${esc(stats.mode.formatted)}</strong>
                <div class="field-hint">Clasificación: <strong>${esc(stats.mode.classification)}</strong> (frecuencia máxima f = ${stats.mode.maxFrequency}).</div>
              </li>
            </ul>

            ${
              stats.sortedValues
                ? `<div style="margin-top:0.85rem;">
                    <strong>Datos ordenados de menor a mayor (posiciones centrales resaltadas):</strong>
                    <div class="dataset-box" style="margin-top:0.35rem;">${sortedChipsHtml}</div>
                  </div>`
                : ''
            }
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin:0;">3. Gráfico de barras conectado</h3>
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                <button type="button" class="btn btn-sm" id="btn-lab-download-svg">Descargar SVG</button>
                <button type="button" class="btn btn-sm" id="btn-lab-download-png">Descargar PNG</button>
              </div>
            </div>
            <div class="field-group" style="max-width:260px;margin-bottom:0.65rem;">
              <label class="field-label" for="lab-scale-step">Escala del eje Y (unidades por cuadrito)</label>
              <select id="lab-scale-step">
                <option value="" ${!labState.yScaleStep ? 'selected' : ''}>Automática</option>
                <option value="1" ${labState.yScaleStep === '1' ? 'selected' : ''}>1 unidad por cuadrito</option>
                <option value="2" ${labState.yScaleStep === '2' ? 'selected' : ''}>2 unidades por cuadrito</option>
                <option value="4" ${labState.yScaleStep === '4' ? 'selected' : ''}>4 unidades por cuadrito</option>
                <option value="5" ${labState.yScaleStep === '5' ? 'selected' : ''}>5 unidades por cuadrito</option>
              </select>
            </div>
            <div id="lab-chart-container">${chartSvg}</div>
          </div>
        </div>

        ${compareHtml}
      `;
    }

    return `
      <section aria-labelledby="lab-heading">
        <div class="card">
          <div class="card-header">
            <div>
              <h2 id="lab-heading" tabindex="-1" style="margin:0;">Laboratorio interactivo de datos</h2>
              <p class="field-hint" style="margin:0.25rem 0 0;">Cargá un ejemplo de la guía o ingresá tus propios datos ficticios (no ingreses nombres reales de personas). Todo cambio actualiza tabla, gráfico y medidas al instante.</p>
            </div>
            <button type="button" class="btn btn-sm btn-secondary" id="btn-lab-toggle-compare">
              ${labState.compareActive ? 'Ocultar comparador Antes/Después' : 'Comparar Antes / Después (extremos)'}
            </button>
          </div>

          <div class="grid-2">
            <div>
              <div class="field-group" style="margin-bottom:0.65rem;">
                <label class="field-label" for="lab-preset-select">Cargar conjunto de ejemplo comprobado</label>
                <select id="lab-preset-select">${presetsHtml}</select>
              </div>

              <div class="grid-2" style="margin-bottom:0.65rem;">
                <div class="field-group">
                  <label class="field-label" for="lab-mode-select">Modo de datos</label>
                  <select id="lab-mode-select">
                    <option value="numeric" ${labState.mode === 'numeric' ? 'selected' : ''}>Numéricos (cuantitativos)</option>
                    <option value="categorical" ${labState.mode === 'categorical' ? 'selected' : ''}>Categóricos (cualitativos)</option>
                  </select>
                </div>
                <div class="field-group">
                  <label class="field-label" for="lab-kind-select">Subtipo de variable</label>
                  <select id="lab-kind-select">
                    ${
                      labState.mode === 'numeric'
                        ? `<option value="discreta" ${labState.kind === 'discreta' ? 'selected' : ''}>Cuantitativa discreta</option>
                           <option value="continua" ${labState.kind === 'continua' ? 'selected' : ''}>Cuantitativa continua</option>`
                        : `<option value="nominal" ${labState.kind === 'nominal' ? 'selected' : ''}>Cualitativa nominal (sin orden)</option>
                           <option value="ordinal" ${labState.kind === 'ordinal' ? 'selected' : ''}>Cualitativa ordinal (con orden)</option>`
                    }
                  </select>
                </div>
              </div>

              ${
                labState.mode === 'numeric'
                  ? `<div class="field-group" style="margin-bottom:0.65rem;">
                      <label class="field-label" for="lab-unit-input">Unidad de medida (opcional, ej: libros, faltas, cm)</label>
                      <input type="text" id="lab-unit-input" value="${esc(labState.unit)}" maxlength="24" />
                    </div>`
                  : labState.kind === 'ordinal'
                  ? `<div class="field-group" style="margin-bottom:0.65rem;">
                      <label class="field-label" for="lab-cat-order">Orden jerárquico de categorías (separadas por coma)</label>
                      <input type="text" id="lab-cat-order" value="${esc(labState.categoryOrderText)}" />
                    </div>`
                  : ''
              }
            </div>

            <div>
              <div class="field-group">
                <label class="field-label" for="lab-data-textarea">
                  Lista de observaciones (1 dato por renglón; para decimales usá coma, ej: 1,5)
                </label>
                <textarea id="lab-data-textarea" rows="6" aria-describedby="lab-textarea-hint">${esc(labState.rawText)}</textarea>
                <span id="lab-textarea-hint" class="field-hint">Límite: hasta 100 observaciones y hasta 20 valores distintos.</span>
              </div>
              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.5rem;">
                <button type="button" class="btn btn-sm btn-primary" id="btn-lab-apply">Calcular y actualizar</button>
                <button type="button" class="btn btn-sm" id="btn-lab-remove-last">Quitar último dato</button>
                <button type="button" class="btn btn-sm" id="btn-lab-clear">Vaciar lista</button>
              </div>

              <details class="accordion" style="margin-top:0.65rem;">
                <summary>Pegar lista separada por punto y coma (;)</summary>
                <div class="accordion-body">
                  <label class="field-label" for="lab-paste-line">Pegá una lista separada por «;» (ejemplo: 0; 1; 1; 2; 4)</label>
                  <input type="text" id="lab-paste-line" placeholder="0; 1; 1; 2; 0; 1; 3" value="${esc(labState.pastePreviewText)}" />
                  <button type="button" class="btn btn-sm btn-secondary" id="btn-lab-convert-paste" style="margin-top:0.45rem;">
                    Convertir a 1 dato por renglón
                  </button>
                </div>
              </details>
            </div>
          </div>
        </div>

        ${resultsHtml}
      </section>
    `;
  }

  // ===================== SIMULACRO STATE & RENDER =====================
  const simulacroState = {
    modeCount: 8,
    seed: 'SIM-2026-A',
    useTimer: false,
    timerMinutes: 25,
    remainingSeconds: 0,
    timerInterval: null,
    timerExpiredNotice: false,
    activeAttempt: null // { count, seed, exerciseIds, currentIndex, answers, finished, startedAt }
  };

  function buildSimulacroExerciseList(count, seed) {
    const rng = MathEngine.createRng(seed);
    const perTopic = count === 12 ? 3 : 2;
    const topics = ['variables', 'frecuencias', 'barras', 'medidas'];
    const selectedIds = [];

    for (const t of topics) {
      const pool = ExercisesData.EXERCISES.filter((e) => e.topic === t).slice();
      // Deterministic shuffle
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        const tmp = pool[i];
        pool[i] = pool[j];
        pool[j] = tmp;
      }
      for (let k = 0; k < perTopic && k < pool.length; k++) {
        selectedIds.push(pool[k].id);
      }
    }
    return selectedIds;
  }

  function startSimulacro(count, seed, useTimer, timerMinutes) {
    if (simulacroState.timerInterval) {
      clearInterval(simulacroState.timerInterval);
      simulacroState.timerInterval = null;
    }
    const ids = buildSimulacroExerciseList(count, seed);
    const attempt = {
      count: count,
      seed: seed,
      exerciseIds: ids,
      currentIndex: 0,
      answers: {},
      finished: false,
      useTimer: Boolean(useTimer),
      timerMinutes: Number(timerMinutes) || 25,
      startedAt: new Date().toISOString()
    };
    simulacroState.activeAttempt = attempt;
    simulacroState.timerExpiredNotice = false;

    const prof = Storage.getActiveProfile();
    prof.progress.simulacroDraft = attempt;
    Storage.saveState();
  }

  function renderSimulacroView(renderExercisePartsFn) {
    const prof = Storage.getActiveProfile();
    if (!simulacroState.activeAttempt && prof.progress.simulacroDraft && !prof.progress.simulacroDraft.finished) {
      simulacroState.activeAttempt = prof.progress.simulacroDraft;
    }

    const att = simulacroState.activeAttempt;
    if (!att) {
      return `
        <section aria-labelledby="sim-heading">
          <div class="card">
            <h2 id="sim-heading" tabindex="-1" style="margin-top:0;">Simulacro de práctica integradora</h2>
            <p>Esta sección te permite practicar una selección equilibrada de ejercicios de los cuatro temas sin ver pistas ni soluciones hasta terminar. Podés salir y retomar tu borrador en cualquier momento.</p>

            <div class="grid-2" style="margin-top:1rem;">
              <div class="field-group">
                <label class="field-label" for="sim-count-select">Extensión del simulacro</label>
                <select id="sim-count-select">
                  <option value="8" ${simulacroState.modeCount === 8 ? 'selected' : ''}>Repaso breve: 8 actividades (2 por tema)</option>
                  <option value="12" ${simulacroState.modeCount === 12 ? 'selected' : ''}>Repaso completo: 12 actividades (3 por tema)</option>
                </select>
              </div>
              <div class="field-group">
                <label class="field-label" for="sim-seed-input">Semilla del simulacro (compartible con compañeros)</label>
                <input type="text" id="sim-seed-input" value="${esc(simulacroState.seed)}" maxlength="24" />
                <span class="field-hint">La misma semilla selecciona las mismas actividades.</span>
              </div>
            </div>

            <div class="card" style="margin-top:0.85rem;">
              <label style="display:flex;align-items:center;gap:0.6rem;font-weight:700;cursor:pointer;">
                <input type="checkbox" id="sim-use-timer" ${simulacroState.useTimer ? 'checked' : ''} style="width:1.2rem;height:1.2rem;" />
                <span>Activar reloj orientativo opcional (desactivado por defecto)</span>
              </label>
              <p class="field-hint" style="margin:0.35rem 0 0;">Si el tiempo vence, tus respuestas se guardan y podés elegir entre ver la devolución o seguir practicando sin reloj.</p>
              <div class="field-group" style="max-width:240px;margin-top:0.5rem;">
                <label class="field-label" for="sim-timer-mins">Minutos (si activás el reloj)</label>
                <select id="sim-timer-mins">
                  <option value="20">20 minutos</option>
                  <option value="30" selected>30 minutos</option>
                  <option value="45">45 minutos</option>
                </select>
              </div>
            </div>

            <div style="margin-top:1rem;display:flex;gap:0.65rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary" id="btn-sim-start">Comenzar simulacro</button>
              <button type="button" class="btn" id="btn-sim-new-seed">Generar otra semilla</button>
            </div>
          </div>
        </section>
      `;
    }

    if (att.finished) {
      // Evaluate all exercises in the attempt
      let objCorrect = 0;
      let objTotal = 0;
      let rubDone = 0;
      let rubTotal = 0;
      const byTopic = {
        variables: { correct: 0, total: 0, lesson: 'L02' },
        frecuencias: { correct: 0, total: 0, lesson: 'L04' },
        barras: { correct: 0, total: 0, lesson: 'L06' },
        medidas: { correct: 0, total: 0, lesson: 'L07' }
      };

      const detailCards = att.exerciseIds
        .map((id, idx) => {
          const ex = ExercisesData.EXERCISES.find((e) => e.id === id);
          if (!ex) return '';
          const exAns = att.answers[id] || {};
          const ev = MathEngine.evaluateExercise(ex, exAns);
          objCorrect += ev.objectiveCorrect;
          objTotal += ev.objectiveTotal;
          rubDone += ev.rubricCompleted;
          rubTotal += ev.rubricTotal;

          if (byTopic[ex.topic]) {
            byTopic[ex.topic].correct += ev.objectiveCorrect;
            byTopic[ex.topic].total += ev.objectiveTotal;
          }

          return `
            <div class="card">
              <div class="card-header">
                <strong>Actividad ${idx + 1}: ${esc(ex.id)} · ${esc(ex.title)}</strong>
                <span class="badge ${ev.ok ? 'badge-solved' : 'badge-review'}">
                  Objetivos: ${ev.objectiveCorrect}/${ev.objectiveTotal}
                  ${ev.rubricTotal > 0 ? ` · Rúbrica: ${ev.rubricCompleted}/${ev.rubricTotal}` : ''}
                </span>
              </div>
              <p>${esc(ex.prompt)}</p>
              <div class="feedback-box ${ev.ok ? 'feedback-ok' : 'feedback-warn'}">
                <strong>Solución paso a paso:</strong>
                <ol style="margin:0.4rem 0 0;padding-left:1.25rem;">
                  ${ex.solutionSteps.map((s) => `<li>${esc(s)}</li>`).join('')}
                </ol>
              </div>
              <div style="margin-top:0.5rem;">
                <a class="btn btn-sm" href="#/aprende/${esc(ex.lessonId)}">Repasar Lección ${esc(ex.lessonId)}</a>
                <a class="btn btn-sm" href="#/practica/${esc(ex.topic)}/${esc(ex.id)}">Abrir en Practicá</a>
              </div>
            </div>
          `;
        })
        .join('');

      const topicSummaryRows = Object.entries(byTopic)
        .map(
          ([tKey, tVal]) => `
          <tr>
            <td><strong>${esc(tKey.toUpperCase())}</strong></td>
            <td>${tVal.correct} de ${tVal.total} apartados objetivos</td>
            <td><a class="btn btn-sm" href="#/aprende/${esc(tVal.lesson)}">Ir a lección ${esc(tVal.lesson)}</a></td>
          </tr>`
        )
        .join('');

      return `
        <section aria-labelledby="sim-result-heading">
          <div class="card card-highlight">
            <h2 id="sim-result-heading" tabindex="-1" style="margin-top:0;">Devolución del simulacro (Semilla: ${esc(att.seed)})</h2>
            <p>
              <strong>Apartados de corrección objetiva:</strong> ${objCorrect} correctos de ${objTotal}.
              ${
                rubTotal > 0
                  ? `<br/><strong>Explicaciones abiertas (autoevaluación con rúbrica):</strong> ${rubDone} completadas de ${rubTotal} (se informan por separado porque requieren tu revisión con la rúbrica).`
                  : ''
              }
            </p>
            <div class="table-wrapper">
              <table class="data-table">
                <caption>Resultado por tema y enlaces de repaso</caption>
                <thead><tr><th>Tema</th><th>Puntos objetivos</th><th>Sugerencia</th></tr></thead>
                <tbody>${topicSummaryRows}</tbody>
              </table>
            </div>
            <div style="margin-top:0.85rem;display:flex;gap:0.65rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary" id="btn-sim-reset">Preparar nuevo simulacro</button>
            </div>
          </div>
          ${detailCards}
        </section>
      `;
    }

    // Active attempt in progress
    const curId = att.exerciseIds[att.currentIndex] || att.exerciseIds[0];
    const curEx = ExercisesData.EXERCISES.find((e) => e.id === curId);

    return `
      <section aria-labelledby="sim-active-heading">
        <div class="stepper-bar">
          <div>
            <strong id="sim-active-heading" tabindex="-1">Simulacro en curso: Actividad ${att.currentIndex + 1} de ${att.exerciseIds.length}</strong>
            <span class="badge" style="margin-left:0.4rem;">${esc(curEx.id)}</span>
          </div>
          <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-sm" id="btn-sim-prev" ${att.currentIndex === 0 ? 'disabled' : ''}>← Anterior</button>
            <button type="button" class="btn btn-sm" id="btn-sim-next" ${att.currentIndex >= att.exerciseIds.length - 1 ? 'disabled' : ''}>Siguiente →</button>
            <button type="button" class="btn btn-sm btn-primary" id="btn-sim-finish">Finalizar y ver devolución</button>
            <button type="button" class="btn btn-sm" id="btn-sim-cancel">Abandonar intento</button>
          </div>
        </div>

        <div class="card">
          <h3 style="margin-top:0;">${esc(curEx.title)}</h3>
          <p style="white-space:pre-line;">${esc(curEx.prompt)}</p>
          ${renderExercisePartsFn(curEx, att.answers[curEx.id] || {}, null, 'simulacro')}
          <p class="field-hint" style="margin-top:0.85rem;">Tus respuestas se guardan automáticamente como borrador al pasar de actividad. Las pistas y soluciones se mostrarán al finalizar el simulacro.</p>
        </div>
      </section>
    `;
  }

  // ===================== RECURSOS VIEW =====================
  const recursosState = {
    fichaTopicFilter: 'todas',
    offlineStatus: {
      isFileProtocol: typeof window !== 'undefined' && window.location.protocol === 'file:',
      swSupported: typeof navigator !== 'undefined' && 'serviceWorker' in navigator,
      coreReady: false,
      mediaReady: false,
      mediaCount: 0,
      mediaTotal: 11,
      mediaStatus: {},
      loading: false,
      message: ''
    },
    deferredInstallPrompt: null
  };

  function renderFichaHtmlContent(ficha) {
    return (ficha.htmlSections || [])
      .map((sec) => {
        if (sec.table) {
          const ths = sec.table.headers.map((h) => `<th>${esc(h)}</th>`).join('');
          const trs = sec.table.rows
            .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`)
            .join('');
          return `<div style="margin-bottom:0.65rem;">
            <strong>${esc(sec.heading)}</strong>
            <div class="table-wrapper"><table class="data-table"><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>
          </div>`;
        }
        return `<div class="${sec.highlight ? 'feedback-box feedback-warn' : ''}" style="margin-bottom:0.55rem;">
          <strong>${esc(sec.heading)}:</strong> ${esc(sec.text)}
        </div>`;
      })
      .join('');
  }

  function renderRecursosView() {
    const filteredFichas = LessonsData.FICHAS_CATALOG.filter(
      (f) => recursosState.fichaTopicFilter === 'todas' || f.topic === recursosState.fichaTopicFilter
    );

    const st = recursosState.offlineStatus;
    let offlineCardContent = '';
    if (st.isFileProtocol) {
      offlineCardContent = `
        <div class="feedback-box feedback-ok">
          <strong>Modo archivo local (portátil) detectado (<code>file:</code>):</strong> estás abriendo el sitio directamente desde una carpeta extraída en tu equipo. Todas las lecciones, las 84 actividades, el laboratorio, las fichas y el PDF funcionan sin internet y sin necesitar Service Worker.
        </div>`;
    } else {
      const badgeText =
        st.coreReady && st.mediaReady
          ? 'Listo sin conexión (núcleo + 10 fichas + PDF verificados)'
          : st.coreReady
          ? `Núcleo listo · Recursos adicionales en caché: ${st.mediaCount} de ${st.mediaTotal}`
          : 'Conectado online (podés preparar el dispositivo para usar sin red)';
      offlineCardContent = `
        <p style="margin-top:0;">Estado actual en este navegador: <span class="badge ${st.coreReady && st.mediaReady ? 'badge-solved' : 'badge-review'}">${esc(badgeText)}</span></p>
        ${st.message ? `<div class="feedback-box ${st.mediaReady ? 'feedback-ok' : 'feedback-warn'}">${esc(st.message)}</div>` : ''}
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:0.65rem;">
          <button type="button" class="btn btn-primary" id="btn-prepare-offline" ${st.loading ? 'disabled' : ''}>
            ${st.loading ? 'Descargando y verificando recursos...' : 'Preparar este dispositivo para usar sin conexión'}
          </button>
          <button type="button" class="btn" id="btn-check-offline">Comprobar estado de caché</button>
          ${
            recursosState.deferredInstallPrompt
              ? `<button type="button" class="btn btn-secondary" id="btn-pwa-install">Instalar aplicación en el dispositivo</button>`
              : ''
          }
        </div>
        <p class="field-hint" style="margin-bottom:0;">Para agregar a la pantalla de inicio en celular o tablet si no aparece el botón directo: abrí el menú del navegador (⋮ o Compartir) y elegí «Agregar a pantalla de inicio».</p>
      `;
    }

    const fichasHtml = filteredFichas
      .map((f) => {
        const relPath = `./assets/fichas/${f.fileName}`;
        const isCached = st.isFileProtocol || Boolean(st.mediaStatus && st.mediaStatus[relPath]);
        return `
          <article class="ficha-card">
            <div>
              <div class="badge-row" style="margin-bottom:0.4rem;">
                <span class="badge">Ficha ${String(f.number).padStart(2, '0')}</span>
                <span class="badge ${isCached ? 'badge-solved' : ''}">${isCached ? 'Disponible offline' : 'Online / bajo demanda'}</span>
              </div>
              <h3 style="margin:0 0 0.35rem;font-size:1.05rem;">${esc(f.title)}</h3>
              <p class="field-hint" style="margin:0 0 0.6rem;">${esc(f.summary)}</p>
              <div class="ficha-thumb-wrap">
                <img
                  src="assets/fichas/thumbs/${esc(f.fileName)}"
                  alt="Miniatura de Ficha ${f.number}: ${esc(f.title)}"
                  class="ficha-thumb-img"
                  width="360"
                  height="640"
                  loading="lazy"
                />
              </div>
              <details class="accordion">
                <summary>Leer contenido completo en texto HTML</summary>
                <div class="accordion-body">${renderFichaHtmlContent(f)}</div>
              </details>
            </div>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.5rem;">
              <button type="button" class="btn btn-sm btn-primary" data-open-ficha="${esc(f.id)}">Ampliar ficha</button>
              <a class="btn btn-sm" href="assets/fichas/${esc(f.fileName)}" download="${esc(f.originalName)}">Descargar PNG</a>
            </div>
          </article>
        `;
      })
      .join('');

    const calcTipsHtml = LessonsData.CALCULATOR_CONCEPTUAL_GUIDE.tips
      .map((t) => `<li><strong>${esc(t.title)}:</strong> ${esc(t.detail)}</li>`)
      .join('');

    return `
      <section aria-labelledby="rec-heading">
        <div class="card">
          <h2 id="rec-heading" tabindex="-1" style="margin-top:0;">Recursos, descargas y estudio sin conexión</h2>
          <p>Acá tenés las tres formas de usar y llevar el material de estudio, las 10 fichas verticales para celular con su texto accesible y la guía completa en PDF.</p>

          <div class="grid-2" style="margin-top:0.85rem;">
            <div class="card" style="margin-bottom:0;">
              <h3 style="margin-top:0;">1. Usar sin conexión en este navegador</h3>
              ${offlineCardContent}
            </div>

            <div class="card" style="margin-bottom:0;">
              <h3 style="margin-top:0;">2. Descargas directas (PDF, Fichas y Sitio Portátil)</h3>
              <ul style="padding-left:1.2rem;margin-top:0;">
                <li style="margin-bottom:0.55rem;">
                  <a href="assets/documentos/guia-estudio-estadistica-2do-anio.pdf" download="Guia_Estudio_Estadistica_2do_Anio.pdf">
                    <strong>Descargar Guía Teórico-Práctica en PDF</strong>
                  </a> (28 ejercicios y solucionario).
                </li>
                <li style="margin-bottom:0.55rem;">
                  <a href="downloads/fichas-estadistica-2do-anio.zip" download="fichas-estadistica.zip">
                    <strong>Descargar ZIP con las 10 fichas para el celular</strong>
                  </a> (imágenes PNG de 1080 × 1920 px).
                </li>
                <li>
                  <a href="downloads/estadistica-paso-a-paso-portatil.zip" download=" estadistica-paso-a-paso-portatil.zip">
                    <strong>Descargar sitio completo en ZIP portátil para PC</strong>
                  </a> (extraelo en una carpeta y abrí <code>index.html</code> con doble clic sin servidor ni internet).
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div>
              <h3 style="margin:0;">Galería de las 10 fichas para celular (con equivalente textual HTML)</h3>
              <p class="field-hint" style="margin:0.2rem 0 0;">Nota: las fichas usan un ejemplo ficticio de 10 estudiantes (frecuencias 2, 4, 2, 1, 1), distinto del ejemplo de 20 estudiantes de la guía principal.</p>
            </div>
            <div class="field-group" style="min-width:210px;">
              <label class="field-label" for="rec-ficha-filter">Filtrar fichas por tema</label>
              <select id="rec-ficha-filter">
                <option value="todas" ${recursosState.fichaTopicFilter === 'todas' ? 'selected' : ''}>Todas las fichas (10)</option>
                <option value="variables" ${recursosState.fichaTopicFilter === 'variables' ? 'selected' : ''}>Variables (Ficha 01)</option>
                <option value="frecuencias" ${recursosState.fichaTopicFilter === 'frecuencias' ? 'selected' : ''}>Frecuencias (Fichas 02 a 04)</option>
                <option value="barras" ${recursosState.fichaTopicFilter === 'barras' ? 'selected' : ''}>Gráfico de barras (Ficha 05)</option>
                <option value="medidas" ${recursosState.fichaTopicFilter === 'medidas' ? 'selected' : ''}>Medidas (Fichas 06 a 09)</option>
                <option value="simbolos" ${recursosState.fichaTopicFilter === 'simbolos' ? 'selected' : ''}>Símbolos (Ficha 10)</option>
              </select>
            </div>
          </div>

          <div class="fichas-grid">${fichasHtml}</div>
        </div>

        <div class="card">
          <h3 style="margin-top:0;">Consejos de uso de la calculadora científica en Estadística</h3>
          <p class="field-hint">${esc(LessonsData.CALCULATOR_CONCEPTUAL_GUIDE.note)}</p>
          <ul style="padding-left:1.2rem;margin-bottom:0;">${calcTipsHtml}</ul>
        </div>
      </section>
    `;
  }

  EstadisticaApp.UIViews = {
    labState: labState,
    loadLabPreset: loadLabPreset,
    parseLabValues: parseLabValues,
    renderLaboratorioView: renderLaboratorioView,
    simulacroState: simulacroState,
    startSimulacro: startSimulacro,
    renderSimulacroView: renderSimulacroView,
    recursosState: recursosState,
    renderFichaHtmlContent: renderFichaHtmlContent,
    renderRecursosView: renderRecursosView
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.UIViews;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
