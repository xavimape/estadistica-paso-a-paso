(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});
  const MathEngine = EstadisticaApp.MathEngine;
  const LessonsData = EstadisticaApp.LessonsData;
  const ExercisesData = EstadisticaApp.ExercisesData;
  const Storage = EstadisticaApp.Storage;
  const Charts = EstadisticaApp.Charts;
  const UIViews = EstadisticaApp.UIViews;
  const esc = Charts.escapeHtml;

  function normalizeText(str) {
    return String(str || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function getExOrigin(ex) {
    return (ex.source && ex.source.kind) || ex.origin || 'guia';
  }

  function getExLevel(ex) {
    return ex.level || ex.difficulty || 'inicial';
  }

  function getExLabel(ex) {
    return (ex.source && ex.source.label) || ex.code || ex.id;
  }

  // ===================== APP STATE =====================
  const state = {
    tab: 'inicio',
    lessonId: 'L01',
    practica: {
      topic: 'todas',
      difficulty: 'todos',
      origin: 'todos',
      status: 'todos',
      search: '',
      viewMode: 'single', // 'single' | 'list'
      listPage: 1,
      currentExerciseId: 'G1-01',
      activeVariant: null,
      evaluationByExId: {},
      hintsShownByExId: {},
      solutionShownByExId: {},
      mobileTableByExId: {}
    },
    diagnostic: {
      open: false,
      answers: {},
      evaluated: false
    },
    pendingImportPayload: null,
    pendingImportSummary: null,
    lastFocusedElement: null,
    waitingServiceWorker: null
  };

  function announce(msg) {
    if (typeof document === 'undefined') return;
    const region = document.getElementById('live-announcer');
    if (!region) return;
    region.textContent = '';
    setTimeout(() => {
      region.textContent = msg;
    }, 30);
  }

  // ===================== APPEARANCE APPLICATION =====================
  function applyAppearanceToDom() {
    if (typeof document === 'undefined') return;
    const a = Storage.getAppearance();
    const rootEl = document.documentElement;
    rootEl.setAttribute('data-theme', a.theme);
    rootEl.setAttribute('data-font', a.font);
    rootEl.setAttribute('data-size', String(a.fontSize));
    rootEl.setAttribute('data-line', a.lineHeight);
    rootEl.setAttribute('data-focus', a.focusMode ? 'true' : 'false');

    const selTheme = document.getElementById('pref-theme');
    const selFont = document.getElementById('pref-font');
    const selSize = document.getElementById('pref-size');
    const selLine = document.getElementById('pref-line');
    const chkFocus = document.getElementById('pref-focus');
    if (selTheme) selTheme.value = a.theme;
    if (selFont) selFont.value = a.font;
    if (selSize) selSize.value = String(a.fontSize);
    if (selLine) selLine.value = a.lineHeight;
    if (chkFocus) chkFocus.checked = Boolean(a.focusMode);
  }

  function updateHeaderProfileInfo() {
    if (typeof document === 'undefined') return;
    const prof = Storage.getActiveProfile();
    const el = document.getElementById('header-profile-name');
    if (el && prof) el.textContent = prof.name;
    const footerStatus = document.getElementById('footer-storage-status');
    if (footerStatus) {
      footerStatus.textContent = Storage.isLocalStorageAvailable()
        ? `Progreso guardado localmente en este navegador (Perfil: ${prof.name}).`
        : 'Modo sesión temporal activo (localStorage bloqueado: usá Exportar JSON para conservar tu avance).';
    }
  }

  // ===================== HASH ROUTER =====================
  function parseHashRoute(hashStr) {
    const clean = String(hashStr || '')
      .replace(/^#\/?/, '')
      .trim();
    if (!clean) return { tab: 'inicio' };
    const parts = clean.split('/').map((p) => decodeURIComponent(p));
    const main = (parts[0] || 'inicio').toLowerCase();

    if (main === 'aprende') {
      const lId = (parts[1] || '').toUpperCase();
      const valid = LessonsData.LESSONS.some((l) => l.id === lId);
      return { tab: 'aprende', lessonId: valid ? lId : state.lessonId || 'L01' };
    }
    if (main === 'practica') {
      if (parts[1] === 'variante' && parts[2] && parts[3]) {
        return {
          tab: 'practica',
          isVariant: true,
          variantTopic: parts[2].toLowerCase(),
          variantSeed: parts[3]
        };
      }
      const topicParam = (parts[1] || '').toLowerCase();
      const exIdParam = parts[2] || '';
      const foundEx = ExercisesData.EXERCISES.find((e) => e.id.toLowerCase() === exIdParam.toLowerCase());
      return {
        tab: 'practica',
        topic: ['variables', 'frecuencias', 'barras', 'medidas', 'integrador', 'todas'].includes(topicParam)
          ? topicParam
          : foundEx
          ? foundEx.topic
          : state.practica.topic,
        exerciseId: foundEx ? foundEx.id : state.practica.currentExerciseId
      };
    }
    if (['inicio', 'laboratorio', 'simulacro', 'recursos'].includes(main)) {
      return { tab: main };
    }
    return { tab: 'inicio' };
  }

  function syncTabsAria(activeTab) {
    if (typeof document === 'undefined') return;
    const tabs = document.querySelectorAll('#main-tablist [role="tab"]');
    tabs.forEach((btn) => {
      const isSelected = btn.getAttribute('data-tab') === activeTab;
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      btn.setAttribute('tabindex', isSelected ? '0' : '-1');
    });
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.setAttribute('aria-labelledby', `tab-${activeTab}`);
    }
  }

  function navigateToHash(newHash) {
    if (typeof window === 'undefined') return;
    if (window.location.hash === newHash) {
      handleRouteChange();
    } else {
      window.location.hash = newHash;
    }
  }

  // ===================== INICIO VIEW =====================
  function renderInicioView() {
    const prof = Storage.getActiveProfile();
    const solvedMap = prof.progress.exercises || {};
    const lessonsRead = prof.progress.lessonsRead || {};

    const topicsMeta = [
      { id: 'variables', title: '1. Variables estadísticas', lesson: 'L01', firstEx: 'G1-01' },
      { id: 'frecuencias', title: '2. Tablas de frecuencia', lesson: 'L04', firstEx: 'G2-01' },
      { id: 'barras', title: '3. Gráficos de barras', lesson: 'L06', firstEx: 'G3-01' },
      { id: 'medidas', title: '4. Medidas de tendencia central', lesson: 'L07', firstEx: 'G4-01' }
    ];

    const topicCardsHtml = topicsMeta
      .map((t) => {
        const list = ExercisesData.EXERCISES.filter((e) => e.topic === t.id);
        const solvedCount = list.filter((e) => solvedMap[e.id] && solvedMap[e.id].status === 'solved').length;
        const pct = list.length > 0 ? Math.round((solvedCount / list.length) * 100) : 0;
        return `
          <div class="card" style="margin-bottom:0;">
            <div class="badge-row" style="margin-bottom:0.35rem;">
              <span class="badge">${solvedCount} de ${list.length} resueltas (${pct} %)</span>
            </div>
            <h3 style="margin:0 0 0.4rem;font-size:1.05rem;">${esc(t.title)}</h3>
            <div class="progress-track" aria-hidden="true" style="margin-bottom:0.65rem;">
              <div class="progress-fill" style="width:${pct}%;"></div>
            </div>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
              <a class="btn btn-sm btn-primary" href="#/aprende/${t.lesson}">Explicación</a>
              <a class="btn btn-sm" href="#/practica/${t.id}/${t.firstEx}">Practicar</a>
            </div>
          </div>
        `;
      })
      .join('');

    const totalSolved = ExercisesData.EXERCISES.filter((e) => solvedMap[e.id] && solvedMap[e.id].status === 'solved').length;
    const totalLessons = LessonsData.LESSONS.filter((l) => lessonsRead[l.id]).length;

    let diagnosticHtml = '';
    if (state.diagnostic.open) {
      const questionsHtml = LessonsData.DIAGNOSTIC_QUESTIONS.map((q, idx) => {
        const chosen = state.diagnostic.answers[q.id] || '';
        const isCorrect = chosen === q.expected;
        const optsHtml = (q.options || [])
          .map((opt) => {
            const val = typeof opt === 'object' ? opt.value : opt;
            const lbl = typeof opt === 'object' ? opt.label : opt;
            return `
              <label style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;cursor:pointer;">
                <input type="radio" name="diag-${esc(q.id)}" data-diag-q="${esc(q.id)}" value="${esc(val)}" ${chosen === val ? 'checked' : ''} />
                <span>${esc(lbl)}</span>
              </label>`;
          })
          .join('');
        const fbText =
          q.feedback && typeof q.feedback === 'object'
            ? q.feedback[chosen] || q.feedback[q.expected] || ''
            : String(q.feedback || '');
        const recLesson = q.lessonId || q.recommendedLesson || 'L01';

        return `
          <div class="part-block">
            <p class="part-prompt">${idx + 1}. ${esc(q.prompt)}</p>
            <div>${optsHtml}</div>
            ${
              state.diagnostic.evaluated
                ? `<div class="feedback-box ${isCorrect ? 'feedback-ok' : 'feedback-warn'}">
                    <strong>${isCorrect ? '¡Bien!' : 'Para repasar:'}</strong> ${esc(fbText)}
                    <div style="margin-top:0.3rem;"><a href="#/aprende/${esc(recLesson)}">Ir a la lección sugerida (${esc(recLesson)})</a></div>
                  </div>`
                : ''
            }
          </div>
        `;
      }).join('');

      diagnosticHtml = `
        <div class="card card-highlight" id="diagnostic-panel">
          <div class="card-header">
            <h3 style="margin:0;">Diagnóstico breve inicial (8 preguntas rápidas)</h3>
            <button type="button" class="btn btn-sm" id="btn-close-diagnostic">Ocultar diagnóstico</button>
          </div>
          <p class="field-hint">No lleva nota: sirve para revisar conteo, orden de decimales, división, porcentajes y lectura de ejes antes de empezar.</p>
          ${questionsHtml}
          <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:0.75rem;">
            <button type="button" class="btn btn-primary" id="btn-eval-diagnostic">Comprobar mis respuestas</button>
            <button type="button" class="btn" id="btn-reset-diagnostic">Limpiar respuestas</button>
          </div>
        </div>
      `;
    }

    return `
      <section aria-labelledby="home-heading">
        <div class="card card-highlight">
          <h2 id="home-heading" tabindex="-1" style="margin-top:0;">Bienvenida a tu espacio de estudio de Estadística</h2>
          <p style="margin-bottom:0.85rem;">Acá podés repasar cada idea desde cero con palabras sencillas, comprobar tus cuentas paso a paso y practicar a tu ritmo con los 28 ejercicios de la guía más 56 actividades nuevas e integradoras.</p>
          <div class="action-grid">
            <a class="action-card" href="#/aprende/${esc(prof.progress.lastRoute && prof.progress.lastRoute.startsWith('#/aprende/') ? prof.progress.lastRoute.replace('#/aprende/', '') : 'L01')}">
              <span class="action-card-title">1. Empezar paso a paso</span>
              <span class="action-card-desc">10 lecciones guiadas con palabras, ejemplos resueltos y símbolos explicados (${totalLessons}/10 leídas).</span>
            </a>
            <a class="action-card" href="#/practica/variables/G1-01">
              <span class="action-card-title">2. Practicar por tema</span>
              <span class="action-card-desc">84 actividades con corrección por casilla, pistas graduales y generador «Otro parecido» (${totalSolved}/84 resueltas).</span>
            </a>
            <a class="action-card" href="#/simulacro">
              <span class="action-card-title">3. Hacer un simulacro</span>
              <span class="action-card-desc">Práctica integradora de 8 o 12 actividades mezcladas con devolución por tema al terminar.</span>
            </a>
            <a class="action-card" href="#/recursos">
              <span class="action-card-title">4. Fichas y descargas</span>
              <span class="action-card-desc">Las 10 fichas verticales para celular, la guía en PDF y el modo para estudiar sin internet.</span>
            </a>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div>
              <h3 style="margin:0;">Mapa de progreso por tema</h3>
              <p class="field-hint" style="margin:0.2rem 0 0;">Podés elegir por dónde empezar o hacer primero el diagnóstico breve opcional.</p>
            </div>
            <button type="button" class="btn btn-sm btn-secondary" id="btn-toggle-diagnostic">
              ${state.diagnostic.open ? 'Ocultar diagnóstico inicial (8 preguntas)' : 'Hacer diagnóstico inicial opcional (8 preguntas)'}
            </button>
          </div>
          <div class="grid-2">${topicCardsHtml}</div>
        </div>

        ${diagnosticHtml}
      </section>
    `;
  }

  // ===================== APRENDÉ VIEW =====================
  function renderAprendeView() {
    const lessons = LessonsData.LESSONS;
    const idx = Math.max(
      0,
      lessons.findIndex((l) => l.id === state.lessonId)
    );
    const lesson = lessons[idx] || lessons[0];
    const prevLesson = idx > 0 ? lessons[idx - 1] : null;
    const nextLesson = idx < lessons.length - 1 ? lessons[idx + 1] : null;
    const isRead = Storage.isLessonRead(lesson.id);

    const plainParas = Array.isArray(lesson.plainExplanation)
      ? lesson.plainExplanation.map((p) => `<p style="margin-bottom:0.55rem;">${esc(p)}</p>`).join('')
      : `<p>${esc(lesson.plainExplanation)}</p>`;

    const exObj = lesson.smallExample || lesson.workedExample || {};
    const exampleStepsHtml = (exObj.steps || []).map((st) => `<li>${esc(st)}</li>`).join('');

    const gp = lesson.guidedPractice || {};
    const gpStepsHtml = Array.isArray(gp.steps) ? gp.steps.map((s) => `<li>${esc(s)}</li>`).join('') : '';

    const commonErrorsHtml = Array.isArray(lesson.commonErrors)
      ? `<ul style="margin:0.35rem 0 0;padding-left:1.25rem;">${lesson.commonErrors.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>`
      : `<p style="margin:0;">${esc(lesson.commonMistake || '')}</p>`;

    const relatedIds = lesson.independentPracticeIds || lesson.relatedExercises || [];
    const relatedExButtons = relatedIds
      .map((exId) => {
        const ex = ExercisesData.EXERCISES.find((e) => e.id === exId);
        if (!ex) return '';
        return `<a class="btn btn-sm btn-primary" href="#/practica/${esc(ex.topic)}/${esc(ex.id)}">Practicar ${esc(ex.id)}: ${esc(ex.title)}</a>`;
      })
      .join(' ');

    return `
      <article aria-labelledby="lesson-heading">
        <div class="stepper-bar">
          <div>
            <span class="badge">Lección ${idx + 1} de ${lessons.length}</span>
            <span class="badge ${isRead ? 'badge-solved' : ''}" style="margin-left:0.35rem;">
              ${isRead ? '✓ Leída' : 'En lectura'}
            </span>
          </div>
          <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
            ${prevLesson ? `<a class="btn btn-sm" href="#/aprende/${esc(prevLesson.id)}">← Anterior (${esc(prevLesson.id)})</a>` : ''}
            <button type="button" class="btn btn-sm btn-secondary" id="btn-open-lessons-index">Índice de las 10 lecciones</button>
            ${nextLesson ? `<a class="btn btn-sm btn-primary" href="#/aprende/${esc(nextLesson.id)}">Siguiente (${esc(nextLesson.id)}) →</a>` : ''}
          </div>
        </div>

        <div class="card">
          <h2 id="lesson-heading" tabindex="-1" style="margin-top:0;">${esc(lesson.id)} · ${esc(lesson.title)}</h2>

          <div class="feedback-box feedback-ok" style="margin-bottom:0.85rem;">
            <strong>1. Objetivo observable:</strong> ${esc(lesson.objective)}
          </div>

          <div class="part-block">
            <h3 style="margin-top:0;font-size:1.05rem;">2. Conocimientos previos que usamos en este bloque</h3>
            <p style="margin-bottom:0;">${esc(lesson.prerequisites || '')}</p>
          </div>

          <div class="part-block">
            <h3 style="margin-top:0;font-size:1.05rem;">3. La idea explicada con palabras sencillas</h3>
            ${plainParas}
            ${
              lesson.notationNote
                ? `<div class="dataset-box" style="margin-top:0.5rem;"><strong>Notación y símbolos:</strong> ${esc(lesson.notationNote)}</div>`
                : ''
            }
            ${
              lesson.id === 'L07'
                ? `<div class="feedback-box feedback-ok" style="margin-top:0.75rem;display:flex;align-items:center;justify-content:space-between;gap:0.75rem;flex-wrap:wrap;">
                    <div>
                      <strong>Micro-experiencia interactiva: La Media como Reparto Equitativo</strong>
                      <div style="margin-top:0.2rem;">Mové libros entre 3 pilas (de 2, 5 y 8 libros) con clic o con el teclado hasta nivelarlas en 5 libros cada una y comprobar por qué <code>(2 + 5 + 8) ÷ 3 = 5</code>.</div>
                    </div>
                    <a class="btn btn-sm btn-primary" id="link-actividad-reparto" href="actividades/reparto-media.html">Abrir actividad interactiva de reparto →</a>
                  </div>`
                : ''
            }
          </div>

          <div class="part-block">
            <h3 style="margin-top:0;font-size:1.05rem;">4. Ejemplo cotidiano resuelto paso a paso</h3>
            <p style="margin-top:0;"><strong>${esc(exObj.context || exObj.title || '')}</strong></p>
            <div class="dataset-box">${esc(exObj.data || exObj.dataset || '')}</div>
            <ol style="padding-left:1.25rem;margin:0.5rem 0;">${exampleStepsHtml}</ol>
            <p style="margin-bottom:0;"><strong>Interpretación en contexto:</strong> ${esc(exObj.interpretation || exObj.conclusion || '')}</p>
          </div>

          <div class="part-block">
            <h3 style="margin-top:0;font-size:1.05rem;">5. Práctica acompañada</h3>
            <p class="part-prompt">${esc(gp.question || '')}</p>
            <details class="accordion">
              <summary>Ver pasos guiados y respuesta explicada</summary>
              <div class="accordion-body">
                ${gpStepsHtml ? `<ol style="padding-left:1.25rem;margin-top:0;">${gpStepsHtml}</ol>` : ''}
                <p style="margin-bottom:0;"><strong>Respuesta:</strong> ${esc(gp.answer || '')}</p>
              </div>
            </details>
          </div>

          <div class="feedback-box feedback-warn">
            <strong>6. Errores frecuentes que conviene evitar:</strong>
            ${commonErrorsHtml}
          </div>

          <div class="part-block" style="margin-top:0.85rem;">
            <h3 style="margin-top:0;font-size:1.05rem;">7. Práctica independiente y seguimiento</h3>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-sm ${isRead ? '' : 'btn-primary'}" id="btn-toggle-lesson-read" data-lesson-id="${esc(lesson.id)}">
                ${isRead ? 'Desmarcar como leída' : '✓ Marcar esta lección como comprendida'}
              </button>
              ${relatedExButtons}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // ===================== EXERCISE PARTS RENDERER =====================
  function renderSinglePart(ex, part, studentVal, partEval, contextMode) {
    const pId = part.id;
    const promptText = part.label || part.prompt || '';
    let controlHtml = '';

    if (part.type === 'select') {
      const cur = typeof studentVal === 'string' ? studentVal : '';
      const opts = [
        `<option value="">— Elegí una opción —</option>`,
        ...(part.options || []).map((o) => {
          const val = typeof o === 'object' ? o.value : o;
          const lbl = typeof o === 'object' ? o.label : o;
          return `<option value="${esc(val)}" ${cur === String(val) ? 'selected' : ''}>${esc(lbl)}</option>`;
        })
      ].join('');
      controlHtml = `
        <div class="field-group" style="max-width:620px;">
          <label class="sr-only" for="input-${esc(ex.id)}-${esc(pId)}">${esc(promptText)}</label>
          <select id="input-${esc(ex.id)}-${esc(pId)}" data-ex-input="${esc(ex.id)}" data-part-id="${esc(pId)}" data-part-type="select" data-context="${esc(contextMode)}">
            ${opts}
          </select>
        </div>
      `;
    } else if (part.type === 'number' || part.type === 'number-set') {
      const cur = studentVal !== undefined && studentVal !== null ? String(studentVal) : '';
      const unitBadge = part.unit ? `<span class="badge">${esc(part.unit)}</span>` : '';
      const hintText =
        part.type === 'number-set'
          ? 'Si hay más de un valor (ej. bimodal), separalos con punto y coma «;» (ejemplo: 1; 2) o escribí «amodal» si ninguno se repite más que otro.'
          : 'Usá coma para decimales (ej: 7,94). También podés escribir fracción a/b si el apartado lo admite.';
      controlHtml = `
        <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;max-width:440px;">
          <label class="sr-only" for="input-${esc(ex.id)}-${esc(pId)}">${esc(promptText)}</label>
          <input
            type="text"
            inputmode="decimal"
            id="input-${esc(ex.id)}-${esc(pId)}"
            data-ex-input="${esc(ex.id)}"
            data-part-id="${esc(pId)}"
            data-part-type="${esc(part.type)}"
            data-context="${esc(contextMode)}"
            value="${esc(cur)}"
            placeholder="Escribí tu resultado..."
            style="flex:1;min-width:170px;"
          />
          ${unitBadge}
        </div>
        <span class="field-hint">${esc(hintText)}</span>
      `;
    } else if (part.type === 'freq-table') {
      const cellInputs = studentVal && typeof studentVal === 'object' ? studentVal : {};
      const cols = part.columns || ['f', 'fr', 'pct', 'F'];
      const colNames = {
        f: 'Frecuencia absoluta (f)',
        fr: 'Frecuencia relativa (fr)',
        pct: 'Porcentaje (%)',
        F: 'Acumulada (F)'
      };
      const isMobileCards = Boolean(state.practica.mobileTableByExId[ex.id]);

      const ths = [
        `<th>${esc(part.valueLabel || 'Valor / Categoría')}</th>`,
        ...cols.map((c) => `<th>${esc(colNames[c] || c)}</th>`)
      ].join('');

      const trs = (part.rows || [])
        .map((row, rIdx) => {
          const rowLabel = row.label !== undefined ? row.label : row.x !== undefined ? row.x : row.value;
          const cells = cols
            .map((c) => {
              const key = `${rIdx}_${c}`;
              const val = cellInputs[key] !== undefined ? String(cellInputs[key]) : '';
              const cEv = partEval && partEval.cellResults ? partEval.cellResults[key] : null;
              const borderStyle = cEv
                ? cEv.ok
                  ? 'border-color:var(--color-success);background:var(--color-success-bg);'
                  : 'border-color:var(--color-error);background:var(--color-error-bg);'
                : '';
              return `
                <td>
                  <label class="sr-only" for="cell-${esc(ex.id)}-${esc(pId)}-${key}">Fila ${esc(rowLabel)}, columna ${esc(c)}</label>
                  <input
                    type="text"
                    inputmode="decimal"
                    class="table-input"
                    style="${borderStyle}"
                    id="cell-${esc(ex.id)}-${esc(pId)}-${key}"
                    data-ex-table="${esc(ex.id)}"
                    data-part-id="${esc(pId)}"
                    data-cell-key="${esc(key)}"
                    data-context="${esc(contextMode)}"
                    value="${esc(val)}"
                  />
                  ${cEv && !cEv.ok ? `<div style="font-size:0.78rem;color:var(--color-error);">${esc(cEv.message)}</div>` : ''}
                </td>
              `;
            })
            .join('');
          return `<tr><td><strong>${esc(rowLabel)}</strong></td>${cells}</tr>`;
        })
        .join('');

      controlHtml = `
        <div style="margin-bottom:0.45rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;">
          <span class="field-hint">En frecuencia relativa (fr) podés escribir decimal con coma (ej: 0,25) o fracción (ej: 5/20). Total n = ${part.totalN || ''}.</span>
          <button type="button" class="btn btn-sm" data-toggle-ex-table="${esc(ex.id)}">
            ${isMobileCards ? 'Ver como tabla clásica' : 'Modo compacto'}
          </button>
        </div>
        <div class="table-wrapper">
          <table class="data-table">
            <caption>${esc(promptText)}</caption>
            <thead><tr>${ths}</tr></thead>
            <tbody>${trs}</tbody>
          </table>
        </div>
      `;
    } else if (part.type === 'bar-builder') {
      const defaultScale = (part.validScaleSteps && part.validScaleSteps[0]) || 1;
      const stObj =
        studentVal && typeof studentVal === 'object'
          ? studentVal
          : { scaleStep: String(defaultScale), bars: {} };
      if (!stObj.scaleStep) stObj.scaleStep = String(defaultScale);
      const stBars = stObj.bars || {};
      const expectedBars = part.bars || [];

      const scaleOpts = (part.validScaleSteps || [1, 2, 4, 5])
        .map(
          (s) =>
            `<option value="${s}" ${Number(stObj.scaleStep) === Number(s) ? 'selected' : ''}>1 cuadrito = ${s} unidad(es)</option>`
        )
        .join('');

      const barControls = expectedBars
        .map((b) => {
          const curH = stBars[b.key] !== undefined ? stBars[b.key] : '';
          const bEv = partEval && partEval.barResults ? partEval.barResults[b.key] : null;
          return `
            <div class="card" style="padding:0.65rem;margin-bottom:0.45rem;">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                <label for="bar-${esc(ex.id)}-${esc(pId)}-${esc(b.key)}"><strong>Barra «${esc(b.label)}»</strong></label>
                <div style="display:flex;align-items:center;gap:0.35rem;">
                  <button type="button" class="btn btn-sm" data-bar-step="${esc(ex.id)}" data-part-id="${esc(pId)}" data-bar-key="${esc(b.key)}" data-delta="-1" data-context="${esc(contextMode)}" aria-label="Bajar altura de ${esc(b.label)}">−</button>
                  <input
                    type="text"
                    inputmode="decimal"
                    class="table-input"
                    id="bar-${esc(ex.id)}-${esc(pId)}-${esc(b.key)}"
                    data-ex-bar="${esc(ex.id)}"
                    data-part-id="${esc(pId)}"
                    data-bar-key="${esc(b.key)}"
                    data-context="${esc(contextMode)}"
                    value="${esc(String(curH))}"
                    placeholder="0"
                    style="width:78px;"
                  />
                  <button type="button" class="btn btn-sm" data-bar-step="${esc(ex.id)}" data-part-id="${esc(pId)}" data-bar-key="${esc(b.key)}" data-delta="1" data-context="${esc(contextMode)}" aria-label="Subir altura de ${esc(b.label)}">+</button>
                </div>
              </div>
              ${bEv && !bEv.ok ? `<div style="font-size:0.82rem;color:var(--color-error);margin-top:0.25rem;">${esc(bEv.message)}</div>` : ''}
            </div>
          `;
        })
        .join('');

      const scaleNum = Number(String(stObj.scaleStep || 1).replace(',', '.')) || 1;
      const previewItems = expectedBars.map((b) => {
        const rawNum = Number(String(stBars[b.key] ?? 0).replace(',', '.')) || 0;
        const valInUnits = part.inputMode === 'cells' ? rawNum * scaleNum : rawNum;
        return { label: b.label, value: valInUnits };
      });

      const svgChart = Charts.renderBarChartSvg({
        title: ex.title,
        xLabel: 'Categoría / Valor',
        yLabel: part.unit || 'Frecuencia (f)',
        scaleStep: scaleNum,
        items: previewItems
      });

      controlHtml = `
        <div class="grid-2">
          <div>
            <div class="field-group" style="margin-bottom:0.65rem;">
              <label class="field-label" for="bar-scale-${esc(ex.id)}-${esc(pId)}">Escala del eje vertical (Eje Y)</label>
              <select id="bar-scale-${esc(ex.id)}-${esc(pId)}" data-ex-bar-scale="${esc(ex.id)}" data-part-id="${esc(pId)}" data-context="${esc(contextMode)}">
                ${scaleOpts}
              </select>
            </div>
            <p class="field-hint" style="margin-top:0;">Ingresá ${part.inputMode === 'cells' ? 'la cantidad de cuadritos de alto' : `el valor en ${part.unit || 'unidades'}`} para cada barra:</p>
            ${barControls}
          </div>
          <div>${svgChart}</div>
        </div>
      `;
    } else if (part.type === 'rubric') {
      const stRub =
        studentVal && typeof studentVal === 'object'
          ? studentVal
          : { text: '', checks: [] };
      const stText = stRub.text || '';
      const stChecks = Array.isArray(stRub.checks) ? stRub.checks : [];
      const criteriaHtml = (part.criteria || [])
        .map((crit, cIdx) => {
          const critLabel = typeof crit === 'object' ? crit.label : crit;
          return `
            <label style="display:flex;align-items:flex-start;gap:0.5rem;margin-bottom:0.35rem;cursor:pointer;">
              <input
                type="checkbox"
                data-ex-rubric-check="${esc(ex.id)}"
                data-part-id="${esc(pId)}"
                data-crit-idx="${cIdx}"
                data-context="${esc(contextMode)}"
                ${stChecks[cIdx] ? 'checked' : ''}
                style="margin-top:0.25rem;width:1.1rem;height:1.1rem;"
              />
              <span>${esc(critLabel)}</span>
            </label>`;
        })
        .join('');

      controlHtml = `
        <div class="field-group" style="margin-bottom:0.55rem;">
          <label class="sr-only" for="rubric-txt-${esc(ex.id)}-${esc(pId)}">${esc(promptText)}</label>
          <textarea
            id="rubric-txt-${esc(ex.id)}-${esc(pId)}"
            rows="3"
            data-ex-rubric-text="${esc(ex.id)}"
            data-part-id="${esc(pId)}"
            data-context="${esc(contextMode)}"
            placeholder="${esc(part.placeholder || 'Escribí tu conclusión o justificación con tus palabras...')}"
          >${esc(stText)}</textarea>
        </div>
        <div class="card" style="padding:0.7rem;margin-bottom:0;">
          <strong style="display:block;margin-bottom:0.35rem;font-size:0.92rem;">Autoevaluación con rúbrica (marcá los criterios que incluiste en tu respuesta):</strong>
          ${criteriaHtml}
        </div>
      `;
    }

    let feedbackHtml = '';
    if (partEval && contextMode !== 'simulacro') {
      feedbackHtml = `
        <div class="feedback-box ${partEval.ok ? 'feedback-ok' : 'feedback-err'}">
          <strong>${partEval.ok ? '✓ Correcto:' : 'Revisá este apartado:'}</strong> ${esc(partEval.message)}
        </div>
      `;
    }

    return `
      <div class="part-block" id="part-${esc(ex.id)}-${esc(pId)}">
        <p class="part-prompt">${esc(promptText)}</p>
        ${controlHtml}
        ${feedbackHtml}
      </div>
    `;
  }

  function renderExerciseParts(ex, answersObj, evaluationObj, contextMode) {
    return (ex.parts || [])
      .map((part) => {
        const stVal = answersObj ? answersObj[part.id] : undefined;
        const pEval = evaluationObj && evaluationObj.partResults ? evaluationObj.partResults[part.id] : null;
        return renderSinglePart(ex, part, stVal, pEval, contextMode || 'practica');
      })
      .join('');
  }

  // ===================== PRACTICÁ VIEW =====================
  function getFilteredExercises() {
    const p = state.practica;
    const q = normalizeText(p.search);

    return ExercisesData.EXERCISES.filter((ex) => {
      const origin = getExOrigin(ex);
      const level = getExLevel(ex);
      if (p.topic !== 'todas' && ex.topic !== p.topic) return false;
      if (p.difficulty !== 'todos' && level !== p.difficulty) return false;
      if (p.origin !== 'todos' && origin !== p.origin) return false;

      const rec = Storage.getExerciseRecord(ex.id);
      if (p.status === 'resueltos' && rec.status !== 'solved') return false;
      if (p.status === 'pendientes' && rec.status === 'solved') return false;
      if (p.status === 'revisar' && !rec.review) return false;
      if (p.status === 'favoritos' && !rec.favorite) return false;

      if (q) {
        const haystack = normalizeText(
          `${ex.id} ${getExLabel(ex)} ${ex.title} ${ex.prompt} ${ex.topic} ${origin}`
        );
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  function renderPracticaView() {
    const p = state.practica;
    const filtered = getFilteredExercises();

    const filterBarHtml = `
      <div class="card no-print">
        <div class="grid-3">
          <div class="field-group">
            <label class="field-label" for="prac-filter-topic">Tema</label>
            <select id="prac-filter-topic">
              <option value="todas" ${p.topic === 'todas' ? 'selected' : ''}>Todos los temas (84)</option>
              <option value="variables" ${p.topic === 'variables' ? 'selected' : ''}>1. Variables (19)</option>
              <option value="frecuencias" ${p.topic === 'frecuencias' ? 'selected' : ''}>2. Tablas de frecuencia (19)</option>
              <option value="barras" ${p.topic === 'barras' ? 'selected' : ''}>3. Gráficos de barras (19)</option>
              <option value="medidas" ${p.topic === 'medidas' ? 'selected' : ''}>4. Medidas de tendencia central (19)</option>
              <option value="integrador" ${p.topic === 'integrador' ? 'selected' : ''}>5. Integradores completos (8)</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label" for="prac-filter-diff">Nivel</label>
            <select id="prac-filter-diff">
              <option value="todos" ${p.difficulty === 'todos' ? 'selected' : ''}>Todos los niveles</option>
              <option value="inicial" ${p.difficulty === 'inicial' ? 'selected' : ''}>Inicial</option>
              <option value="intermedio" ${p.difficulty === 'intermedio' ? 'selected' : ''}>Intermedio</option>
              <option value="desafio" ${p.difficulty === 'desafio' ? 'selected' : ''}>Desafío</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label" for="prac-filter-origin">Origen</label>
            <select id="prac-filter-origin">
              <option value="todos" ${p.origin === 'todos' ? 'selected' : ''}>Todos (Guía + Nuevos + Integradores)</option>
              <option value="guia" ${p.origin === 'guia' ? 'selected' : ''}>Guía escolar (28)</option>
              <option value="nuevo" ${p.origin === 'nuevo' ? 'selected' : ''}>Práctica adicional (48)</option>
              <option value="integrador" ${p.origin === 'integrador' ? 'selected' : ''}>Integradores completos (8)</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label" for="prac-filter-status">Tu estado</label>
            <select id="prac-filter-status">
              <option value="todos" ${p.status === 'todos' ? 'selected' : ''}>Todos</option>
              <option value="pendientes" ${p.status === 'pendientes' ? 'selected' : ''}>Pendientes</option>
              <option value="resueltos" ${p.status === 'resueltos' ? 'selected' : ''}>Resueltos (✓)</option>
              <option value="revisar" ${p.status === 'revisar' ? 'selected' : ''}>Marcados para revisar</option>
              <option value="favoritos" ${p.status === 'favoritos' ? 'selected' : ''}>Favoritos (★)</option>
            </select>
          </div>
          <div class="field-group">
            <label class="field-label" for="prac-search-input">Buscar por código o palabra clave</label>
            <input type="search" id="prac-search-input" value="${esc(p.search)}" placeholder="Ej: G4-05, mediana, libros..." />
          </div>
          <div class="field-group" style="justify-content:flex-end;">
            <span class="field-label">Modo de vista (${filtered.length} resultados)</span>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-sm ${p.viewMode === 'single' ? 'btn-primary' : ''}" id="btn-prac-view-single">1 ejercicio por vista</button>
              <button type="button" class="btn btn-sm ${p.viewMode === 'list' ? 'btn-primary' : ''}" id="btn-prac-view-list">Índice paginado (10/pág)</button>
            </div>
          </div>
        </div>
      </div>
    `;

    if (filtered.length === 0 && !p.activeVariant) {
      return `
        <section aria-labelledby="prac-empty-heading">
          ${filterBarHtml}
          <div class="card card-highlight">
            <h2 id="prac-empty-heading" tabindex="-1" style="margin-top:0;">No se encontraron actividades con esos filtros</h2>
            <p>Probá quitar alguna condición de búsqueda o restablecer todos los filtros para ver las 84 actividades disponibles.</p>
            <button type="button" class="btn btn-primary" id="btn-prac-clear-filters">Limpiar todos los filtros</button>
          </div>
        </section>
      `;
    }

    if (p.viewMode === 'list' && !p.activeVariant) {
      const perPage = 10;
      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
      const curPage = Math.min(Math.max(1, p.listPage), totalPages);
      const slice = filtered.slice((curPage - 1) * perPage, curPage * perPage);

      const rowsHtml = slice
        .map((ex) => {
          const rec = Storage.getExerciseRecord(ex.id);
          const origin = getExOrigin(ex);
          const level = getExLevel(ex);
          return `
            <div class="card" style="padding:0.9rem;margin-bottom:0.65rem;">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:0.6rem;flex-wrap:wrap;">
                <div>
                  <div class="badge-row" style="margin-bottom:0.25rem;">
                    <span class="badge">${esc(ex.id)}</span>
                    <span class="badge badge-${esc(origin)}">${esc(getExLabel(ex))}</span>
                    <span class="badge badge-${esc(level)}">${esc(level)}</span>
                    ${rec.status === 'solved' ? `<span class="badge badge-solved">✓ Resuelto</span>` : ''}
                    ${rec.favorite ? `<span class="badge">★ Favorito</span>` : ''}
                    ${rec.review ? `<span class="badge badge-review">Para revisar</span>` : ''}
                  </div>
                  <strong>${esc(ex.title)}</strong>
                  <p class="field-hint" style="margin:0.2rem 0 0;">${esc(ex.prompt.slice(0, 140))}${ex.prompt.length > 140 ? '…' : ''}</p>
                </div>
                <a class="btn btn-sm btn-primary" href="#/practica/${esc(ex.topic)}/${esc(ex.id)}" data-open-single-ex="${esc(ex.id)}">Resolver →</a>
              </div>
            </div>
          `;
        })
        .join('');

      return `
        <section aria-labelledby="prac-list-heading">
          ${filterBarHtml}
          <div class="stepper-bar">
            <strong id="prac-list-heading" tabindex="-1">Mostrando página ${curPage} de ${totalPages} (${filtered.length} actividades)</strong>
            <div style="display:flex;gap:0.4rem;">
              <button type="button" class="btn btn-sm" id="btn-prac-page-prev" ${curPage <= 1 ? 'disabled' : ''}>← Página anterior</button>
              <button type="button" class="btn btn-sm" id="btn-prac-page-next" ${curPage >= totalPages ? 'disabled' : ''}>Página siguiente →</button>
            </div>
          </div>
          ${rowsHtml}
        </section>
      `;
    }

    // Single exercise view (or active numerical variant)
    const ex = p.activeVariant
      ? p.activeVariant
      : filtered.find((item) => item.id === p.currentExerciseId) || filtered[0];

    if (!p.activeVariant && ex) {
      p.currentExerciseId = ex.id;
    }

    const exIdx = filtered.findIndex((item) => item.id === ex.id);
    const prevEx = !p.activeVariant && exIdx > 0 ? filtered[exIdx - 1] : null;
    const nextEx = !p.activeVariant && exIdx >= 0 && exIdx < filtered.length - 1 ? filtered[exIdx + 1] : null;

    const exKey = ex.id || `VAR-${ex.seed}`;
    if (!ex.id) ex.id = exKey;
    const origin = getExOrigin(ex);
    const level = getExLevel(ex);

    const rec = Storage.getExerciseRecord(ex.id);
    const draft = Storage.getExerciseDraft(ex.id);
    const ev = p.evaluationByExId[ex.id] || null;
    const hintsShown = p.hintsShownByExId[ex.id] || 0;
    const solutionShown = Boolean(p.solutionShownByExId[ex.id]);

    const hintsHtml =
      hintsShown > 0
        ? `<div class="feedback-box feedback-warn" style="margin-top:0.75rem;">
            <strong>Pistas desbloqueadas (${hintsShown} de ${(ex.hints || []).length}):</strong>
            <ol style="margin:0.35rem 0 0;padding-left:1.25rem;">
              ${(ex.hints || [])
                .slice(0, hintsShown)
                .map((h) => `<li>${esc(h)}</li>`)
                .join('')}
            </ol>
          </div>`
        : '';

    const solutionHtml = `
      <div class="solution-print-block" style="${solutionShown ? '' : 'display:none;'}" id="solution-block-${esc(ex.id)}">
        <div class="feedback-box feedback-ok" style="margin-top:0.85rem;">
          <p style="margin-top:0;"><em>Consultar la solución sirve para aprender el procedimiento; después probá «Otro parecido» para resolver sin ayuda.</em></p>
          <strong>Resolución paso a paso y respuesta razonada:</strong>
          <ol style="margin:0.4rem 0 0;padding-left:1.25rem;">
            ${(ex.solutionSteps || []).map((s) => `<li>${esc(s)}</li>`).join('')}
          </ol>
          ${ex.commonErrorNote ? `<p style="margin:0.5rem 0 0;"><strong>Nota de control:</strong> ${esc(ex.commonErrorNote)}</p>` : ''}
        </div>
      </div>
    `;

    return `
      <section aria-labelledby="ex-heading">
        ${filterBarHtml}

        <div class="stepper-bar no-print">
          <div>
            ${
              p.activeVariant
                ? `<span class="badge badge-nuevo">Variante reproducible (Semilla: ${esc(p.activeVariant.seed)})</span>`
                : `<span class="badge">Actividad ${exIdx + 1} de ${filtered.length} en este filtro</span>`
            }
          </div>
          <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
            ${prevEx ? `<a class="btn btn-sm" href="#/practica/${esc(prevEx.topic)}/${esc(prevEx.id)}">← Anterior (${esc(prevEx.id)})</a>` : ''}
            <button type="button" class="btn btn-sm" id="btn-open-exercises-modal">Índice rápido</button>
            ${nextEx ? `<a class="btn btn-sm btn-primary" href="#/practica/${esc(nextEx.topic)}/${esc(nextEx.id)}">Siguiente (${esc(nextEx.id)}) →</a>` : ''}
          </div>
        </div>

        <article class="card">
          <div class="card-header">
            <div>
              <div class="badge-row" style="margin-bottom:0.35rem;">
                <span class="badge">${esc(ex.id)}</span>
                <span class="badge badge-${esc(origin)}">${esc(getExLabel(ex))}</span>
                <span class="badge badge-${esc(level)}">Nivel: ${esc(level)}</span>
                ${rec.status === 'solved' ? `<span class="badge badge-solved">✓ Resuelto</span>` : ''}
              </div>
              <h2 id="ex-heading" tabindex="-1" style="margin:0;font-size:1.3rem;">${esc(ex.title)}</h2>
            </div>

            <div class="no-print" style="display:flex;gap:0.4rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-sm" data-toggle-fav="${esc(ex.id)}" aria-pressed="${rec.favorite ? 'true' : 'false'}">
                ${rec.favorite ? '★ En favoritos' : '☆ Favorito'}
              </button>
              <button type="button" class="btn btn-sm" data-toggle-rev="${esc(ex.id)}" aria-pressed="${rec.review ? 'true' : 'false'}">
                ${rec.review ? '⚑ Para revisar' : '⚐ Marcar para revisar'}
              </button>
              <a class="btn btn-sm" href="#/aprende/${esc(ex.lessonId || 'L01')}">Repasar Lección ${esc(ex.lessonId || 'L01')}</a>
            </div>
          </div>

          <div class="dataset-box" style="white-space:pre-line;font-family:var(--font-body);">${esc(ex.prompt)}</div>

          ${renderExerciseParts(ex, draft, ev, 'practica')}

          ${
            ev
              ? `<div class="feedback-box ${ev.ok ? 'feedback-ok' : 'feedback-warn'}">
                  <strong>Resumen de comprobación:</strong> ${ev.objectiveCorrect} de ${ev.objectiveTotal} apartados objetivos correctos.
                  ${ev.rubricTotal > 0 ? ` · Rúbrica de interpretación: ${ev.rubricCompleted} de ${ev.rubricTotal}.` : ''}
                </div>`
              : ''
          }

          ${hintsHtml}
          ${solutionHtml}

          <div class="no-print" style="display:flex;justify-content:space-between;align-items:center;gap:0.6rem;flex-wrap:wrap;margin-top:1rem;padding-top:0.85rem;border-top:1px solid var(--color-border);">
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary" data-check-ex="${esc(ex.id)}">Comprobar respuestas</button>
              <button type="button" class="btn" data-hint-ex="${esc(ex.id)}" ${hintsShown >= (ex.hints || []).length ? 'disabled' : ''}>
                Pedir pista (${hintsShown}/${(ex.hints || []).length})
              </button>
              <button type="button" class="btn" data-solution-ex="${esc(ex.id)}">
                ${solutionShown ? 'Ocultar solución' : 'Ver solución explicada'}
              </button>
              <button type="button" class="btn btn-secondary" data-variant-ex="${esc(ex.topic)}">
                Otro parecido (nuevos números)
              </button>
            </div>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-sm" data-print-mode="without">Imprimir sin respuestas</button>
              <button type="button" class="btn btn-sm" data-print-mode="with">Imprimir con respuestas</button>
            </div>
          </div>
        </article>
      </section>
    `;
  }

  // ===================== MAIN VIEW RENDER DISPATCH =====================
  function renderCurrentView(moveFocusToHeading) {
    if (typeof document === 'undefined') return;
    const container = document.getElementById('app-view');
    if (!container) return;

    syncTabsAria(state.tab);
    updateHeaderProfileInfo();

    if (state.tab === 'inicio') {
      container.innerHTML = renderInicioView();
    } else if (state.tab === 'aprende') {
      container.innerHTML = renderAprendeView();
    } else if (state.tab === 'practica') {
      container.innerHTML = renderPracticaView();
    } else if (state.tab === 'laboratorio') {
      container.innerHTML = UIViews.renderLaboratorioView();
    } else if (state.tab === 'simulacro') {
      container.innerHTML = UIViews.renderSimulacroView(renderExerciseParts);
    } else if (state.tab === 'recursos') {
      container.innerHTML = UIViews.renderRecursosView();
    }

    if (moveFocusToHeading) {
      const heading = container.querySelector('h2[tabindex="-1"], [id$="-heading"]');
      if (heading && typeof heading.focus === 'function') {
        heading.focus({ preventScroll: false });
      }
    }
  }

  function handleRouteChange() {
    if (typeof window === 'undefined') return;
    const parsed = parseHashRoute(window.location.hash);
    state.tab = parsed.tab;

    if (parsed.tab === 'aprende' && parsed.lessonId) {
      state.lessonId = parsed.lessonId;
      Storage.setLastRoute(`#/aprende/${parsed.lessonId}`);
    } else if (parsed.tab === 'practica') {
      if (parsed.isVariant) {
        const vTopic = parsed.variantTopic === 'frecuencias' ? 'frecuencias' : 'medidas';
        const gen = MathEngine.generateComparableVariant(vTopic, parsed.variantSeed);
        gen.id = `VAR-${vTopic.toUpperCase()}-${parsed.variantSeed}`;
        state.practica.activeVariant = gen;
      } else {
        state.practica.activeVariant = null;
        if (parsed.topic) state.practica.topic = parsed.topic;
        if (parsed.exerciseId) state.practica.currentExerciseId = parsed.exerciseId;
      }
    }

    renderCurrentView(true);
  }

  // ===================== MODALS =====================
  function openModal(modalId, triggerEl) {
    if (typeof document === 'undefined') return;
    const modal = document.getElementById(modalId);
    if (!modal) return;
    state.lastFocusedElement = triggerEl || document.activeElement;
    modal.hidden = false;
    const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  }

  function closeModal(modalId) {
    if (typeof document === 'undefined') return;
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.hidden = true;
    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === 'function') {
      state.lastFocusedElement.focus();
    }
  }

  function openSymbolsModal(highlightSymbolId, triggerEl) {
    const body = document.getElementById('modal-symbols-body');
    if (!body) return;
    const rows = LessonsData.SYMBOLS_GLOSSARY.map((s) => {
      const isHighlighted = highlightSymbolId && (s.id === highlightSymbolId || s.symbol === highlightSymbolId);
      return `
        <tr style="${isHighlighted ? 'background:var(--color-accent-soft);' : ''}">
          <td><strong style="font-size:1.15rem;">${esc(s.symbol)}</strong></td>
          <td><strong>${esc(s.name || s.PlainName)}</strong><div class="field-hint">Se lee: ${esc(s.readsAs || s.howToRead)}</div></td>
          <td>${esc(s.plainMeaning || s.meaning)}</td>
          <td>${esc(s.example)}</td>
        </tr>
      `;
    }).join('');
    body.innerHTML = `
      <div class="table-wrapper">
        <table class="data-table">
          <caption>Diccionario de símbolos estadísticos de 2.º año</caption>
          <thead><tr><th>Símbolo</th><th>Nombre y lectura</th><th>Qué significa con palabras</th><th>Ejemplo</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
    openModal('modal-symbols', triggerEl);
  }

  function renderProfileModalContent(feedbackMsg, isError) {
    const body = document.getElementById('modal-profile-body');
    if (!body) return;
    const st = Storage.getState();
    const activeProf = Storage.getActiveProfile();

    const profileOpts = Object.values(st.profiles)
      .map((p) => `<option value="${esc(p.id)}" ${p.id === activeProf.id ? 'selected' : ''}>${esc(p.name)}</option>`)
      .join('');

    const previewHtml = state.pendingImportSummary
      ? `<div class="card card-highlight" style="margin-top:0.75rem;">
          <h4 style="margin:0 0 0.35rem;">Vista previa del archivo a importar</h4>
          <p style="margin:0 0 0.5rem;">
            Perfil en archivo: <strong>${esc(state.pendingImportSummary.profileName)}</strong> ·
            Actividades resueltas: <strong>${state.pendingImportSummary.solvedCount}</strong> ·
            Lecciones leídas: <strong>${state.pendingImportSummary.lessonsReadCount}</strong>.
          </p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-sm btn-primary" data-confirm-import="merge">Combinar con mi progreso actual</button>
            <button type="button" class="btn btn-sm btn-danger" data-confirm-import="replace">Reemplazar mi progreso actual</button>
            <button type="button" class="btn btn-sm" id="btn-cancel-import">Cancelar</button>
          </div>
        </div>`
      : '';

    body.innerHTML = `
      ${feedbackMsg ? `<div class="feedback-box ${isError ? 'feedback-err' : 'feedback-ok'}">${esc(feedbackMsg)}</div>` : ''}
      <div class="grid-2">
        <div class="card" style="margin-bottom:0;">
          <h3 style="margin-top:0;font-size:1.05rem;">Cambiar o crear perfil local</h3>
          <div class="field-group" style="margin-bottom:0.55rem;">
            <label class="field-label" for="prof-select-active">Perfil activo en este navegador</label>
            <select id="prof-select-active">${profileOpts}</select>
          </div>
          <div class="field-group">
            <label class="field-label" for="prof-new-name">Crear nuevo perfil (ej: Mi práctica, Repaso jueves)</label>
            <div style="display:flex;gap:0.4rem;">
              <input type="text" id="prof-new-name" maxlength="40" placeholder="Nombre del perfil..." />
              <button type="button" class="btn btn-sm btn-primary" id="btn-create-profile">Crear</button>
            </div>
          </div>
        </div>

        <div class="card" style="margin-bottom:0;">
          <h3 style="margin-top:0;font-size:1.05rem;">Exportar o importar avance (JSON)</h3>
          <p class="field-hint" style="margin-top:0;">Podés guardar un archivo <code>.json</code> con tu progreso para llevarlo a otro dispositivo o hacer copia de respaldo.</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.65rem;">
            <button type="button" class="btn btn-sm btn-primary" id="btn-export-progress">Exportar progreso (.json)</button>
          </div>
          <div class="field-group">
            <label class="field-label" for="prof-import-file">Importar archivo de progreso (.json)</label>
            <input type="file" id="prof-import-file" accept=".json,application/json" />
          </div>
          ${previewHtml}
        </div>
      </div>

      <div class="card" style="margin-top:0.85rem;margin-bottom:0;">
        <h3 style="margin-top:0;font-size:1.05rem;">Reiniciar progreso del perfil actual</h3>
        <p class="field-hint" style="margin-top:0;">Borra las respuestas guardadas del perfil «${esc(activeProf.name)}» para volver a practicar desde cero.</p>
        <button type="button" class="btn btn-sm btn-danger" id="btn-reset-profile-progress">Reiniciar progreso de este perfil</button>
      </div>
    `;
  }

  function openFichaModal(fichaId, triggerEl) {
    const idx = LessonsData.FICHAS_CATALOG.findIndex((f) => f.id === fichaId);
    if (idx < 0) return;
    const f = LessonsData.FICHAS_CATALOG[idx];
    const prevF = idx > 0 ? LessonsData.FICHAS_CATALOG[idx - 1] : null;
    const nextF = idx < LessonsData.FICHAS_CATALOG.length - 1 ? LessonsData.FICHAS_CATALOG[idx + 1] : null;

    const titleEl = document.getElementById('modal-generic-title');
    const bodyEl = document.getElementById('modal-generic-body');
    if (!titleEl || !bodyEl) return;

    titleEl.textContent = `Ficha ${String(f.number).padStart(2, '0')} de 10 · ${f.title}`;
    bodyEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.75rem;">
        <div style="display:flex;gap:0.4rem;">
          ${prevF ? `<button type="button" class="btn btn-sm" data-open-ficha="${esc(prevF.id)}">← Ficha ${prevF.number}</button>` : ''}
          ${nextF ? `<button type="button" class="btn btn-sm" data-open-ficha="${esc(nextF.id)}">Ficha ${nextF.number} →</button>` : ''}
        </div>
        <a class="btn btn-sm btn-primary" href="assets/fichas/${esc(f.fileName)}" download="${esc(f.originalName)}">Descargar PNG original (1080×1920)</a>
      </div>
      <div class="grid-2">
        <div style="text-align:center;">
          <img
            src="assets/fichas/${esc(f.fileName)}"
            alt="Ficha ${f.number}: ${esc(f.title)}"
            style="max-width:100%;max-height:72vh;border-radius:8px;border:1px solid var(--color-border);"
          />
        </div>
        <div>
          <h3 style="margin-top:0;font-size:1.05rem;">Equivalente textual completo</h3>
          ${UIViews.renderFichaHtmlContent(f)}
        </div>
      </div>
    `;
    openModal('modal-generic', triggerEl);
  }

  // ===================== SERVICE WORKER & OFFLINE PACK =====================
  function sendSwMessage(msg) {
    return new Promise((resolve) => {
      if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
        resolve({ ok: false, error: 'Service Worker no disponible en este navegador.' });
        return;
      }
      navigator.serviceWorker.ready
        .then((reg) => {
          const target = reg.active || navigator.serviceWorker.controller;
          if (!target) {
            resolve({ ok: false, error: 'El Service Worker aún se está activando.' });
            return;
          }
          const chan = new MessageChannel();
          const timer = setTimeout(() => {
            resolve({ ok: false, error: 'Tiempo de espera agotado al consultar el Service Worker.' });
          }, 15000);
          chan.port1.onmessage = (e) => {
            clearTimeout(timer);
            resolve(e.data || { ok: false });
          };
          target.postMessage(msg, [chan.port2]);
        })
        .catch((err) => {
          resolve({ ok: false, error: err && err.message ? err.message : 'Error de Service Worker' });
        });
    });
  }

  async function refreshOfflineStatus() {
    if (UIViews.recursosState.offlineStatus.isFileProtocol) return;
    const res = await sendSwMessage({ type: 'CHECK_OFFLINE_STATUS' });
    if (res && res.status) {
      Object.assign(UIViews.recursosState.offlineStatus, res.status);
      if (state.tab === 'recursos') renderCurrentView(false);
    }
  }

  function registerServiceWorker() {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
    if (window.location.protocol === 'file:' || !('serviceWorker' in navigator)) return;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      UIViews.recursosState.deferredInstallPrompt = e;
      if (state.tab === 'recursos') renderCurrentView(false);
    });

    navigator.serviceWorker
      .register('./sw.js', { scope: './' })
      .then((reg) => {
        if (reg.waiting) {
          state.waitingServiceWorker = reg.waiting;
          const banner = document.getElementById('sw-update-banner');
          if (banner) banner.hidden = false;
        }
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (!newWorker) return;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              state.waitingServiceWorker = newWorker;
              const banner = document.getElementById('sw-update-banner');
              if (banner) banner.hidden = false;
            }
          });
        });
        setTimeout(refreshOfflineStatus, 400);
      })
      .catch(() => {});
  }

  // ===================== EVENT LISTENERS & DELEGATION =====================
  function getActiveExerciseById(exId) {
    if (state.practica.activeVariant && state.practica.activeVariant.id === exId) {
      return state.practica.activeVariant;
    }
    return ExercisesData.EXERCISES.find((e) => e.id === exId);
  }

  function getAnswerStoreForContext(exId, contextMode) {
    if (contextMode === 'simulacro' && UIViews.simulacroState.activeAttempt) {
      const att = UIViews.simulacroState.activeAttempt;
      if (!att.answers[exId]) att.answers[exId] = {};
      return att.answers[exId];
    }
    return Storage.getExerciseDraft(exId);
  }

  function saveAnswerStoreForContext(exId, store, contextMode) {
    if (contextMode === 'simulacro' && UIViews.simulacroState.activeAttempt) {
      const prof = Storage.getActiveProfile();
      prof.progress.simulacroDraft = UIViews.simulacroState.activeAttempt;
      Storage.saveState();
      return;
    }
    Storage.saveExerciseDraft(exId, store);
  }

  function bindGlobalEvents() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;

    window.addEventListener('hashchange', handleRouteChange);

    window.addEventListener('scroll', () => {
      const btnTop = document.getElementById('btn-scroll-top');
      if (btnTop) {
        btnTop.hidden = window.scrollY < 320;
      }
    });

    // WAI-ARIA Tablist keyboard navigation
    const tablist = document.getElementById('main-tablist');
    if (tablist) {
      tablist.addEventListener('keydown', (e) => {
        const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
        const curIdx = tabs.indexOf(document.activeElement);
        if (curIdx < 0) return;

        let nextIdx = -1;
        if (e.key === 'ArrowRight') nextIdx = (curIdx + 1) % tabs.length;
        else if (e.key === 'ArrowLeft') nextIdx = (curIdx - 1 + tabs.length) % tabs.length;
        else if (e.key === 'Home') nextIdx = 0;
        else if (e.key === 'End') nextIdx = tabs.length - 1;

        if (nextIdx >= 0) {
          e.preventDefault();
          tabs[nextIdx].focus();
        }
      });

      tablist.addEventListener('click', (e) => {
        const tabBtn = e.target.closest('[role="tab"]');
        if (!tabBtn) return;
        const tabName = tabBtn.getAttribute('data-tab');
        if (tabName === 'aprende') navigateToHash(`#/aprende/${state.lessonId}`);
        else if (tabName === 'practica') navigateToHash(`#/practica/${state.practica.topic}/${state.practica.currentExerciseId}`);
        else navigateToHash(`#/${tabName}`);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        ['modal-appearance', 'modal-symbols', 'modal-profile', 'modal-generic'].forEach((id) => {
          const m = document.getElementById(id);
          if (m && !m.hidden) closeModal(id);
        });
      }
    });

    // Input delegation
    document.addEventListener('input', (e) => {
      const t = e.target;

      if (t.hasAttribute('data-ex-input')) {
        const exId = t.getAttribute('data-ex-input');
        const partId = t.getAttribute('data-part-id');
        const ctx = t.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        store[partId] = t.value;
        saveAnswerStoreForContext(exId, store, ctx);
        return;
      }

      if (t.hasAttribute('data-ex-table')) {
        const exId = t.getAttribute('data-ex-table');
        const partId = t.getAttribute('data-part-id');
        const cellKey = t.getAttribute('data-cell-key');
        const ctx = t.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        if (!store[partId] || typeof store[partId] !== 'object') store[partId] = {};
        store[partId][cellKey] = t.value;
        saveAnswerStoreForContext(exId, store, ctx);
        return;
      }

      if (t.hasAttribute('data-ex-bar')) {
        const exId = t.getAttribute('data-ex-bar');
        const partId = t.getAttribute('data-part-id');
        const barKey = t.getAttribute('data-bar-key');
        const ctx = t.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        if (!store[partId] || typeof store[partId] !== 'object') store[partId] = { scaleStep: '1', bars: {} };
        if (!store[partId].bars) store[partId].bars = {};
        store[partId].bars[barKey] = t.value;
        saveAnswerStoreForContext(exId, store, ctx);
        return;
      }

      if (t.hasAttribute('data-ex-rubric-text')) {
        const exId = t.getAttribute('data-ex-rubric-text');
        const partId = t.getAttribute('data-part-id');
        const ctx = t.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        if (!store[partId] || typeof store[partId] !== 'object') store[partId] = { text: '', checks: [] };
        store[partId].text = t.value;
        saveAnswerStoreForContext(exId, store, ctx);
        return;
      }

      if (t.id === 'prac-search-input') {
        state.practica.search = t.value;
        state.practica.listPage = 1;
        renderCurrentView(false);
        const inputEl = document.getElementById('prac-search-input');
        if (inputEl) {
          inputEl.focus();
          inputEl.setSelectionRange(inputEl.value.length, inputEl.value.length);
        }
      }
    });

    document.addEventListener('change', (e) => {
      const t = e.target;

      if (['pref-theme', 'pref-font', 'pref-size', 'pref-line', 'pref-focus'].includes(t.id)) {
        Storage.updateAppearance({
          theme: document.getElementById('pref-theme').value,
          font: document.getElementById('pref-font').value,
          fontSize: Number(document.getElementById('pref-size').value),
          lineHeight: document.getElementById('pref-line').value,
          focusMode: document.getElementById('pref-focus').checked
        });
        applyAppearanceToDom();
        announce('Preferencias de apariencia actualizadas.');
        return;
      }

      if (t.hasAttribute('data-diag-q')) {
        state.diagnostic.answers[t.getAttribute('data-diag-q')] = t.value;
        return;
      }

      if (t.hasAttribute('data-ex-input') && t.getAttribute('data-part-type') === 'select') {
        const exId = t.getAttribute('data-ex-input');
        const partId = t.getAttribute('data-part-id');
        const ctx = t.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        store[partId] = t.value;
        saveAnswerStoreForContext(exId, store, ctx);
        return;
      }

      if (t.hasAttribute('data-ex-bar-scale')) {
        const exId = t.getAttribute('data-ex-bar-scale');
        const partId = t.getAttribute('data-part-id');
        const ctx = t.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        if (!store[partId] || typeof store[partId] !== 'object') store[partId] = { scaleStep: t.value, bars: {} };
        store[partId].scaleStep = t.value;
        saveAnswerStoreForContext(exId, store, ctx);
        renderCurrentView(false);
        return;
      }

      if (t.hasAttribute('data-ex-rubric-check')) {
        const exId = t.getAttribute('data-ex-rubric-check');
        const partId = t.getAttribute('data-part-id');
        const critIdx = Number(t.getAttribute('data-crit-idx'));
        const ctx = t.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        if (!store[partId] || typeof store[partId] !== 'object') store[partId] = { text: '', checks: [] };
        if (!Array.isArray(store[partId].checks)) store[partId].checks = [];
        store[partId].checks[critIdx] = t.checked;
        saveAnswerStoreForContext(exId, store, ctx);
        return;
      }

      if (t.id === 'prac-filter-topic') {
        state.practica.topic = t.value;
        state.practica.activeVariant = null;
        state.practica.listPage = 1;
        renderCurrentView(false);
      } else if (t.id === 'prac-filter-diff') {
        state.practica.difficulty = t.value;
        state.practica.listPage = 1;
        renderCurrentView(false);
      } else if (t.id === 'prac-filter-origin') {
        state.practica.origin = t.value;
        state.practica.listPage = 1;
        renderCurrentView(false);
      } else if (t.id === 'prac-filter-status') {
        state.practica.status = t.value;
        state.practica.listPage = 1;
        renderCurrentView(false);
      }

      if (t.id === 'lab-preset-select') {
        UIViews.loadLabPreset(t.value);
        renderCurrentView(false);
      } else if (t.id === 'lab-mode-select') {
        UIViews.labState.mode = t.value;
        UIViews.labState.kind = t.value === 'numeric' ? 'discreta' : 'nominal';
        renderCurrentView(false);
      } else if (t.id === 'lab-kind-select') {
        UIViews.labState.kind = t.value;
        renderCurrentView(false);
      } else if (t.id === 'lab-scale-step') {
        UIViews.labState.yScaleStep = t.value;
        renderCurrentView(false);
      } else if (['chk-lab-fr', 'chk-lab-pct', 'chk-lab-F', 'chk-lab-prod'].includes(t.id)) {
        if (t.id === 'chk-lab-fr') UIViews.labState.showFr = t.checked;
        if (t.id === 'chk-lab-pct') UIViews.labState.showPct = t.checked;
        if (t.id === 'chk-lab-F') UIViews.labState.showF = t.checked;
        if (t.id === 'chk-lab-prod') UIViews.labState.showProd = t.checked;
        renderCurrentView(false);
      }

      if (t.id === 'rec-ficha-filter') {
        UIViews.recursosState.fichaTopicFilter = t.value;
        renderCurrentView(false);
      }

      if (t.id === 'prof-select-active') {
        Storage.switchProfile(t.value);
        state.pendingImportPayload = null;
        state.pendingImportSummary = null;
        renderProfileModalContent('Perfil activo cambiado.', false);
        renderCurrentView(false);
      } else if (t.id === 'prof-import-file' && t.files && t.files[0]) {
        if (t.files[0].size > 512 * 1024) {
          renderProfileModalContent('El archivo supera el tamaño máximo de 512 KB.', true);
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          const valRes = Storage.validateImportJson(String(reader.result || ''), new Set(ExercisesData.EXERCISES.map(ex => ex.id)));
          if (!valRes.ok) {
            state.pendingImportPayload = null;
            state.pendingImportSummary = null;
            renderProfileModalContent(valRes.message, true);
          } else {
            state.pendingImportPayload = valRes.payload;
            state.pendingImportSummary = valRes.summary;
            renderProfileModalContent('Archivo verificado correctamente. Elegí cómo aplicarlo:', false);
          }
        };
        reader.readAsText(t.files[0]);
      }
    });

    // Click delegation
    document.addEventListener('click', async (e) => {
      const btn = e.target.closest('button, a');
      if (!btn) return;

      if (btn.id === 'btn-scroll-top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (btn.id === 'btn-exit-focus') {
        Storage.updateAppearance({ focusMode: false });
        applyAppearanceToDom();
        announce('Modo enfoque desactivado.');
        return;
      }

      if (btn.id === 'btn-apply-sw-update' && state.waitingServiceWorker) {
        state.waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
        window.location.reload();
        return;
      }

      if (btn.id === 'btn-open-appearance') {
        applyAppearanceToDom();
        openModal('modal-appearance', btn);
        return;
      }
      if (btn.id === 'btn-reset-appearance') {
        Storage.resetAppearance();
        applyAppearanceToDom();
        announce('Apariencia restablecida.');
        return;
      }
      if (btn.id === 'btn-open-symbols') {
        openSymbolsModal(null, btn);
        return;
      }
      if (btn.hasAttribute('data-open-symbol')) {
        openSymbolsModal(btn.getAttribute('data-open-symbol'), btn);
        return;
      }
      if (btn.id === 'btn-open-profile') {
        state.pendingImportPayload = null;
        state.pendingImportSummary = null;
        renderProfileModalContent('', false);
        openModal('modal-profile', btn);
        return;
      }
      if (btn.hasAttribute('data-close-modal')) {
        closeModal(btn.getAttribute('data-close-modal'));
        return;
      }

      if (btn.hasAttribute('data-open-ficha')) {
        openFichaModal(btn.getAttribute('data-open-ficha'), btn);
        return;
      }

      if (btn.id === 'btn-toggle-diagnostic' || btn.id === 'btn-close-diagnostic') {
        state.diagnostic.open = btn.id === 'btn-toggle-diagnostic' ? !state.diagnostic.open : false;
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-eval-diagnostic') {
        state.diagnostic.evaluated = true;
        renderCurrentView(false);
        announce('Diagnóstico inicial comprobado.');
        return;
      }
      if (btn.id === 'btn-reset-diagnostic') {
        state.diagnostic.answers = {};
        state.diagnostic.evaluated = false;
        renderCurrentView(false);
        return;
      }

      if (btn.id === 'btn-toggle-lesson-read') {
        const lId = btn.getAttribute('data-lesson-id');
        const nextVal = !Storage.isLessonRead(lId);
        Storage.markLessonRead(lId, nextVal);
        renderCurrentView(false);
        announce(nextVal ? `Lección ${lId} marcada como leída.` : `Lección ${lId} desmarcada.`);
        return;
      }
      if (btn.id === 'btn-open-lessons-index') {
        const titleEl = document.getElementById('modal-generic-title');
        const bodyEl = document.getElementById('modal-generic-body');
        if (titleEl && bodyEl) {
          titleEl.textContent = 'Índice de las 10 lecciones paso a paso';
          bodyEl.innerHTML = LessonsData.LESSONS.map((l) => {
            const read = Storage.isLessonRead(l.id);
            return `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--color-border);">
                <div>
                  <strong>${esc(l.id)} · ${esc(l.title)}</strong>
                  ${read ? `<span class="badge badge-solved" style="margin-left:0.4rem;">✓ Leída</span>` : ''}
                  <div class="field-hint">${esc(l.objective)}</div>
                </div>
                <a class="btn btn-sm btn-primary" href="#/aprende/${esc(l.id)}" data-close-modal="modal-generic">Ir a ${esc(l.id)}</a>
              </div>
            `;
          }).join('');
          openModal('modal-generic', btn);
        }
        return;
      }

      if (btn.id === 'btn-prac-view-single') {
        state.practica.viewMode = 'single';
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-prac-view-list') {
        state.practica.viewMode = 'list';
        renderCurrentView(false);
        return;
      }
      if (btn.hasAttribute('data-open-single-ex')) {
        state.practica.viewMode = 'single';
        state.practica.currentExerciseId = btn.getAttribute('data-open-single-ex');
        return;
      }
      if (btn.id === 'btn-prac-page-prev') {
        state.practica.listPage = Math.max(1, state.practica.listPage - 1);
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-prac-page-next') {
        state.practica.listPage += 1;
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-prac-clear-filters') {
        state.practica.topic = 'todas';
        state.practica.difficulty = 'todos';
        state.practica.origin = 'todos';
        state.practica.status = 'todos';
        state.practica.search = '';
        state.practica.listPage = 1;
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-open-exercises-modal') {
        const filtered = getFilteredExercises();
        const titleEl = document.getElementById('modal-generic-title');
        const bodyEl = document.getElementById('modal-generic-body');
        if (titleEl && bodyEl) {
          titleEl.textContent = `Índice rápido (${filtered.length} actividades en el filtro actual)`;
          bodyEl.innerHTML = filtered
            .map((item) => {
              const rec = Storage.getExerciseRecord(item.id);
              return `
                <div style="display:flex;justify-content:space-between;align-items:center;padding:0.45rem 0;border-bottom:1px solid var(--color-border);">
                  <div>
                    <strong>${esc(item.id)}</strong> · ${esc(item.title)}
                    ${rec.status === 'solved' ? `<span class="badge badge-solved">✓</span>` : ''}
                  </div>
                  <a class="btn btn-sm btn-primary" href="#/practica/${esc(item.topic)}/${esc(item.id)}" data-close-modal="modal-generic">Abrir</a>
                </div>
              `;
            })
            .join('');
          openModal('modal-generic', btn);
        }
        return;
      }

      if (btn.hasAttribute('data-toggle-ex-table')) {
        const exId = btn.getAttribute('data-toggle-ex-table');
        state.practica.mobileTableByExId[exId] = !state.practica.mobileTableByExId[exId];
        renderCurrentView(false);
        return;
      }

      if (btn.hasAttribute('data-bar-step')) {
        const exId = btn.getAttribute('data-bar-step');
        const partId = btn.getAttribute('data-part-id');
        const barKey = btn.getAttribute('data-bar-key');
        const delta = Number(btn.getAttribute('data-delta')) || 0;
        const ctx = btn.getAttribute('data-context') || 'practica';
        const store = getAnswerStoreForContext(exId, ctx);
        if (!store[partId] || typeof store[partId] !== 'object') store[partId] = { scaleStep: '1', bars: {} };
        if (!store[partId].bars) store[partId].bars = {};
        const cur = Number(String(store[partId].bars[barKey] ?? 0).replace(',', '.')) || 0;
        const nextVal = Math.max(0, Math.round((cur + delta * 0.5) * 100) / 100);
        store[partId].bars[barKey] = MathEngine.formatNumberAr(nextVal, { decimals: 2 });
        saveAnswerStoreForContext(exId, store, ctx);
        renderCurrentView(false);
        return;
      }

      if (btn.hasAttribute('data-check-ex')) {
        const exId = btn.getAttribute('data-check-ex');
        const ex = getActiveExerciseById(exId);
        if (!ex) return;
        const draft = Storage.getExerciseDraft(exId);
        const ev = MathEngine.evaluateExercise(ex, draft);
        state.practica.evaluationByExId[exId] = ev;
        if (ev.ok) {
          Storage.markExerciseStatus(exId, 'solved');
          announce(`¡Excelente! Actividad ${exId} resuelta correctamente.`);
        } else {
          Storage.markExerciseStatus(exId, 'in_progress');
          announce(`Comprobación lista: ${ev.objectiveCorrect} de ${ev.objectiveTotal} apartados correctos. Revisá las indicaciones en pantalla.`);
        }
        renderCurrentView(false);
        return;
      }

      if (btn.hasAttribute('data-hint-ex')) {
        const exId = btn.getAttribute('data-hint-ex');
        const ex = getActiveExerciseById(exId);
        if (!ex) return;
        const cur = state.practica.hintsShownByExId[exId] || 0;
        if (cur < (ex.hints || []).length) {
          state.practica.hintsShownByExId[exId] = cur + 1;
          renderCurrentView(false);
          announce(`Pista ${cur + 1} mostrada.`);
        }
        return;
      }

      if (btn.hasAttribute('data-solution-ex')) {
        const exId = btn.getAttribute('data-solution-ex');
        state.practica.solutionShownByExId[exId] = !state.practica.solutionShownByExId[exId];
        renderCurrentView(false);
        return;
      }

      if (btn.hasAttribute('data-variant-ex')) {
        const rawTopic = btn.getAttribute('data-variant-ex');
        const vTopic = rawTopic === 'frecuencias' || rawTopic === 'barras' ? 'frecuencias' : 'medidas';
        const seed = `S${Date.now().toString(36).slice(-5).toUpperCase()}`;
        navigateToHash(`#/practica/variante/${vTopic}/${seed}`);
        return;
      }

      if (btn.hasAttribute('data-toggle-fav')) {
        const exId = btn.getAttribute('data-toggle-fav');
        const nextFav = Storage.toggleExerciseFavorite(exId);
        renderCurrentView(false);
        announce(nextFav ? `${exId} agregado a favoritos.` : `${exId} quitado de favoritos.`);
        return;
      }

      if (btn.hasAttribute('data-toggle-rev')) {
        const exId = btn.getAttribute('data-toggle-rev');
        const nextRev = Storage.toggleExerciseReview(exId);
        renderCurrentView(false);
        announce(nextRev ? `${exId} marcado para revisar.` : `${exId} desmarcado para revisar.`);
        return;
      }

      if (btn.hasAttribute('data-print-mode')) {
        const withSol = btn.getAttribute('data-print-mode') === 'with';
        document.body.setAttribute('data-print-solutions', withSol ? 'true' : 'false');
        window.print();
        return;
      }

      // Laboratorio buttons
      if (btn.id === 'btn-lab-apply') {
        const ta = document.getElementById('lab-data-textarea');
        const unitIn = document.getElementById('lab-unit-input');
        const catIn = document.getElementById('lab-cat-order');
        if (ta) UIViews.labState.rawText = ta.value;
        if (unitIn) UIViews.labState.unit = unitIn.value;
        if (catIn) UIViews.labState.categoryOrderText = catIn.value;
        renderCurrentView(false);
        announce('Tabla, gráfico y medidas del laboratorio actualizados.');
        return;
      }
      if (btn.id === 'btn-lab-remove-last') {
        const lines = UIViews.labState.rawText
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter(Boolean);
        if (lines.length > 1) {
          lines.pop();
          UIViews.labState.rawText = lines.join('\n');
          renderCurrentView(false);
        }
        return;
      }
      if (btn.id === 'btn-lab-clear') {
        UIViews.labState.rawText = '';
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-lab-convert-paste') {
        const pasteInput = document.getElementById('lab-paste-line');
        if (pasteInput && pasteInput.value.trim()) {
          UIViews.labState.pastePreviewText = pasteInput.value;
          const items = pasteInput.value
            .split(';')
            .map((s) => s.trim())
            .filter(Boolean);
          if (items.length > 0) {
            UIViews.labState.rawText = items.join('\n');
            renderCurrentView(false);
          }
        }
        return;
      }
      if (btn.id === 'btn-lab-toggle-compare') {
        UIViews.labState.compareActive = !UIViews.labState.compareActive;
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-lab-update-compare') {
        const compTa = document.getElementById('lab-compare-input');
        if (compTa) {
          UIViews.labState.compareModifiedText = compTa.value;
          renderCurrentView(false);
        }
        return;
      }
      if (btn.id === 'btn-lab-toggle-table-view') {
        UIViews.labState.mobileCardView = !UIViews.labState.mobileCardView;
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-lab-download-csv') {
        const parsed = UIViews.parseLabValues(UIViews.labState.rawText, UIViews.labState.mode === 'numeric');
        if (parsed.ok) {
          const stats = MathEngine.computeDatasetStats(parsed.values, { kind: UIViews.labState.kind });
          const headers = ['Valor_o_Categoria', 'f', 'fr', 'Porcentaje', 'F'];
          const rows = stats.rows.map((r) => [
            r.value,
            r.f,
            MathEngine.formatNumberAr(r.fr, { fixedDecimals: 2 }),
            MathEngine.formatNumberAr(r.pct, { fixedDecimals: 2 }),
            r.F !== null ? r.F : ''
          ]);
          const csv = Charts.buildCsvContent(headers, rows);
          Charts.downloadTextFile('tabla-frecuencias-laboratorio.csv', csv, 'text/csv;charset=utf-8');
        }
        return;
      }
      if (btn.id === 'btn-lab-download-svg' || btn.id === 'btn-lab-download-png') {
        const chartWrap = document.getElementById('lab-chart-container');
        if (chartWrap) {
          const svgStr = chartWrap.innerHTML;
          if (btn.id === 'btn-lab-download-svg') Charts.downloadSvgFile('grafico-barras-laboratorio.svg', svgStr);
          else Charts.downloadPngFromSvg('grafico-barras-laboratorio.png', svgStr);
        }
        return;
      }

      // Simulacro buttons
      if (btn.id === 'btn-sim-new-seed') {
        UIViews.simulacroState.seed = `SIM-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-sim-start') {
        const cntEl = document.getElementById('sim-count-select');
        const seedEl = document.getElementById('sim-seed-input');
        const useTimerEl = document.getElementById('sim-use-timer');
        const minsEl = document.getElementById('sim-timer-mins');
        UIViews.startSimulacro(
          cntEl ? Number(cntEl.value) : 8,
          seedEl && seedEl.value.trim() ? seedEl.value.trim() : 'SIM-2026-A',
          useTimerEl ? useTimerEl.checked : false,
          minsEl ? Number(minsEl.value) : 30
        );
        renderCurrentView(true);
        return;
      }
      if (btn.id === 'btn-sim-prev' && UIViews.simulacroState.activeAttempt) {
        UIViews.simulacroState.activeAttempt.currentIndex = Math.max(0, UIViews.simulacroState.activeAttempt.currentIndex - 1);
        Storage.saveState();
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-sim-next' && UIViews.simulacroState.activeAttempt) {
        const att = UIViews.simulacroState.activeAttempt;
        att.currentIndex = Math.min(att.exerciseIds.length - 1, att.currentIndex + 1);
        Storage.saveState();
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-sim-finish' && UIViews.simulacroState.activeAttempt) {
        UIViews.simulacroState.activeAttempt.finished = true;
        const prof = Storage.getActiveProfile();
        prof.progress.simulacroDraft = null;
        Storage.saveState();
        renderCurrentView(true);
        announce('Simulacro finalizado. Devolución por tema disponible.');
        return;
      }
      if (btn.id === 'btn-sim-cancel' || btn.id === 'btn-sim-reset') {
        UIViews.simulacroState.activeAttempt = null;
        const prof = Storage.getActiveProfile();
        prof.progress.simulacroDraft = null;
        Storage.saveState();
        renderCurrentView(true);
        return;
      }

      // Recursos & Offline buttons
      if (btn.id === 'btn-prepare-offline') {
        UIViews.recursosState.offlineStatus.loading = true;
        UIViews.recursosState.offlineStatus.message = 'Descargando las 10 fichas de alta resolución y el PDF en caché local...';
        renderCurrentView(false);
        const res = await sendSwMessage({ type: 'CACHE_OFFLINE_PACK' });
        UIViews.recursosState.offlineStatus.loading = false;
        if (res && res.status) {
          Object.assign(UIViews.recursosState.offlineStatus, res.status);
        }
        UIViews.recursosState.offlineStatus.message =
          res && res.ok
            ? '¡Verificación completa! El núcleo del sitio, las 10 fichas en alta resolución y el PDF están guardados en este dispositivo para usar sin internet.'
            : `Aviso: ${(res && res.error) || 'No se pudieron precachear todos los archivos en este entorno.'}`;
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-check-offline') {
        await refreshOfflineStatus();
        announce('Estado de caché comprobado.');
        return;
      }
      if (btn.id === 'btn-pwa-install' && UIViews.recursosState.deferredInstallPrompt) {
        UIViews.recursosState.deferredInstallPrompt.prompt();
        UIViews.recursosState.deferredInstallPrompt = null;
        renderCurrentView(false);
        return;
      }

      // Profile modal buttons
      if (btn.id === 'btn-create-profile') {
        const nameIn = document.getElementById('prof-new-name');
        const created = Storage.createProfile(nameIn ? nameIn.value : '');
        renderProfileModalContent(`Perfil «${created.name}» creado y activado.`, false);
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-export-progress') {
        const jsonStr = Storage.exportProgressJson();
        Charts.downloadTextFile('progreso-estadistica-2do-anio.json', jsonStr, 'application/json;charset=utf-8');
        return;
      }
      if (btn.hasAttribute('data-confirm-import') && state.pendingImportPayload) {
        const mode = btn.getAttribute('data-confirm-import');
        Storage.applyImportedProgress(state.pendingImportPayload, mode);
        state.pendingImportPayload = null;
        state.pendingImportSummary = null;
        applyAppearanceToDom();
        renderProfileModalContent(
          mode === 'replace' ? 'Progreso reemplazado correctamente.' : 'Progreso combinado correctamente (idempotente).',
          false
        );
        renderCurrentView(false);
        return;
      }
      if (btn.id === 'btn-cancel-import') {
        state.pendingImportPayload = null;
        state.pendingImportSummary = null;
        renderProfileModalContent('Importación cancelada.', false);
        return;
      }
      if (btn.id === 'btn-reset-profile-progress') {
        if (window.confirm('¿Querés borrar las respuestas guardadas del perfil actual y empezar de cero?')) {
          Storage.resetCurrentProfileProgress();
          state.practica.evaluationByExId = {};
          state.practica.hintsShownByExId = {};
          state.practica.solutionShownByExId = {};
          renderProfileModalContent('Se reinició el progreso del perfil actual.', false);
          renderCurrentView(false);
        }
      }
    });
  }

  function initApp() {
    if (typeof document === 'undefined') return;
    Storage.loadState();
    applyAppearanceToDom();
    bindGlobalEvents();
    handleRouteChange();
    registerServiceWorker();
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  }

  EstadisticaApp.App = {
    state: state,
    parseHashRoute: parseHashRoute,
    renderCurrentView: renderCurrentView
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.App;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
