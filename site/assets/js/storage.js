(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});

  const STORAGE_KEY = 'estadistica_paso_a_paso_v1' + (typeof location !== 'undefined' ? ':' + new URL('.', location.href).pathname : '');
  const SCHEMA_VERSION = 1;
  const CONTENT_VERSION = '2026.11.06';

  const DEFAULT_APPEARANCE = {
    theme: 'sistema',
    font: 'sans',
    fontSize: '100',
    lineHeight: 'normal',
    focusMode: false
  };

  const VALID_THEMES = ['sistema', 'claro', 'oscuro', 'sepia', 'contraste'];
  const VALID_FONTS = ['sans', 'serif', 'mono'];
  const VALID_SIZES = ['100', '115', '130', '150'];
  const VALID_LINE_HEIGHTS = ['normal', 'amplio'];

  function createEmptyProfileProgress() {
    return {
      lastRoute: '#/inicio',
      lastExerciseId: 'G1-01',
      lastLessonId: 'L01',
      lessonsCompleted: [],
      diagnostic: null,
      exercises: {},
      simulacroDraft: null,
      simulacroHistory: []
    };
  }

  function createDefaultRootState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      contentVersion: CONTENT_VERSION,
      appearance: { ...DEFAULT_APPEARANCE },
      activeProfileId: 'default',
      profiles: {
        default: {
          id: 'default',
          alias: 'Mi práctica',
          createdAt: '2026-11-06T00:00:00.000Z',
          progress: createEmptyProfileProgress()
        }
      }
    };
  }

  let memoryState = createDefaultRootState();
  let storageAvailable = true;

  function checkLocalStorage() {
    try {
      if (typeof localStorage === 'undefined') {
        storageAvailable = false;
        return false;
      }
      const testKey = '__est_test__';
      localStorage.setItem(testKey, '1');
      localStorage.removeItem(testKey);
      storageAvailable = true;
      return true;
    } catch (_err) {
      storageAvailable = false;
      return false;
    }
  }

  function sanitizeAlias(raw) {
    const str = String(raw || '').trim().replace(/[<>'"&`]/g, '');
    return str.slice(0, 32) || 'Mi práctica';
  }

  function loadState() {
    if (!checkLocalStorage()) {
      return memoryState;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        saveState(memoryState);
        return memoryState;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || parsed.schemaVersion !== SCHEMA_VERSION) {
        return memoryState;
      }
      memoryState = normalizeRootState(parsed);
      return memoryState;
    } catch (_err) {
      storageAvailable = false;
      return memoryState;
    }
  }

  function normalizeRootState(raw) {
    const base = createDefaultRootState();
    if (raw.appearance && typeof raw.appearance === 'object') {
      base.appearance.theme = VALID_THEMES.includes(raw.appearance.theme) ? raw.appearance.theme : 'sistema';
      base.appearance.font = VALID_FONTS.includes(raw.appearance.font) ? raw.appearance.font : 'sans';
      base.appearance.fontSize = VALID_SIZES.includes(String(raw.appearance.fontSize)) ? String(raw.appearance.fontSize) : '100';
      base.appearance.lineHeight = VALID_LINE_HEIGHTS.includes(raw.appearance.lineHeight) ? raw.appearance.lineHeight : 'normal';
      base.appearance.focusMode = Boolean(raw.appearance.focusMode);
    }

    if (raw.profiles && typeof raw.profiles === 'object') {
      const cleanedProfiles = {};
      for (const [pid, prof] of Object.entries(raw.profiles)) {
        if (!prof || typeof prof !== 'object') continue;
        const safeId = String(pid).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 32);
        if (!safeId || ['__proto__', 'constructor', 'prototype'].includes(safeId)) continue;
        const prog = createEmptyProfileProgress();
        if (prof.progress && typeof prof.progress === 'object') {
          if (typeof prof.progress.lastRoute === 'string') prog.lastRoute = prof.progress.lastRoute.slice(0, 120);
          if (typeof prof.progress.lastExerciseId === 'string') prog.lastExerciseId = prof.progress.lastExerciseId.slice(0, 20);
          if (typeof prof.progress.lastLessonId === 'string') prog.lastLessonId = prof.progress.lastLessonId.slice(0, 20);
          if (Array.isArray(prof.progress.lessonsCompleted)) {
            prog.lessonsCompleted = Array.from(new Set(prof.progress.lessonsCompleted.map(String))).slice(0, 20);
          }
          if (prof.progress.diagnostic && typeof prof.progress.diagnostic === 'object') {
            prog.diagnostic = prof.progress.diagnostic;
          }
          if (prof.progress.exercises && typeof prof.progress.exercises === 'object') {
            prog.exercises = prof.progress.exercises;
          }
          if (prof.progress.simulacroDraft && typeof prof.progress.simulacroDraft === 'object') {
            prog.simulacroDraft = prof.progress.simulacroDraft;
          }
          if (Array.isArray(prof.progress.simulacroHistory)) {
            prog.simulacroHistory = prof.progress.simulacroHistory.slice(0, 30);
          }
        }
        cleanedProfiles[safeId] = {
          id: safeId,
          alias: sanitizeAlias(prof.alias),
          createdAt: typeof prof.createdAt === 'string' ? prof.createdAt : '2026-11-06T00:00:00.000Z',
          progress: prog
        };
      }
      if (Object.keys(cleanedProfiles).length > 0) {
        base.profiles = cleanedProfiles;
      }
    }

    const activeId = String(raw.activeProfileId || 'default');
    base.activeProfileId = base.profiles[activeId] ? activeId : Object.keys(base.profiles)[0];
    return base;
  }

  function saveState(stateToSave) {
    memoryState = stateToSave || memoryState;
    if (!storageAvailable) return false;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(memoryState));
      return true;
    } catch (_err) {
      storageAvailable = false;
      return false;
    }
  }

  function getActiveProfile() {
    const st = memoryState;
    return st.profiles[st.activeProfileId] || st.profiles.default;
  }

  function getAppearance() {
    return { ...memoryState.appearance };
  }

  function updateAppearance(partial) {
    const next = { ...memoryState.appearance, ...(partial || {}) };
    memoryState.appearance = {
      theme: VALID_THEMES.includes(next.theme) ? next.theme : 'sistema',
      font: VALID_FONTS.includes(next.font) ? next.font : 'sans',
      fontSize: VALID_SIZES.includes(String(next.fontSize)) ? String(next.fontSize) : '100',
      lineHeight: VALID_LINE_HEIGHTS.includes(next.lineHeight) ? next.lineHeight : 'normal',
      focusMode: Boolean(next.focusMode)
    };
    saveState(memoryState);
    applyAppearanceToDocument(memoryState.appearance);
    return getAppearance();
  }

  function resetAppearance() {
    memoryState.appearance = { ...DEFAULT_APPEARANCE };
    saveState(memoryState);
    applyAppearanceToDocument(memoryState.appearance);
    return getAppearance();
  }

  function applyAppearanceToDocument(app) {
    if (typeof document === 'undefined' || !document.documentElement) return;
    const rootEl = document.documentElement;
    const a = app || memoryState.appearance;
    rootEl.setAttribute('data-theme', a.theme || 'sistema');
    rootEl.setAttribute('data-font', a.font || 'sans');
    rootEl.setAttribute('data-size', String(a.fontSize || '100'));
    rootEl.setAttribute('data-line', a.lineHeight || 'normal');
    rootEl.setAttribute('data-focus', a.focusMode ? 'true' : 'false');
  }

  function createProfile(alias) {
    const cleanAlias = sanitizeAlias(alias);
    const id = 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 6);
    memoryState.profiles[id] = {
      id: id,
      alias: cleanAlias,
      createdAt: new Date().toISOString(),
      progress: createEmptyProfileProgress()
    };
    memoryState.activeProfileId = id;
    saveState(memoryState);
    return memoryState.profiles[id];
  }

  function switchProfile(profileId) {
    if (memoryState.profiles[profileId]) {
      memoryState.activeProfileId = profileId;
      saveState(memoryState);
      return memoryState.profiles[profileId];
    }
    return getActiveProfile();
  }

  function deleteProfile(profileId) {
    if (profileId === 'default' || !memoryState.profiles[profileId]) {
      return false;
    }
    delete memoryState.profiles[profileId];
    if (memoryState.activeProfileId === profileId) {
      memoryState.activeProfileId = 'default';
    }
    saveState(memoryState);
    return true;
  }

  function getExerciseState(exerciseId) {
    const prof = getActiveProfile();
    const existing = prof.progress.exercises[exerciseId];
    if (existing) return existing;
    return {
      status: 'sin-intentar',
      usedHelp: false,
      attempts: 0,
      hintsShown: 0,
      solutionShown: false,
      favorite: false,
      needsReview: false,
      draft: {},
      lastAttemptId: null,
      updatedAt: null
    };
  }

  function updateExerciseState(exerciseId, updater) {
    const prof = getActiveProfile();
    const current = getExerciseState(exerciseId);
    const updated = typeof updater === 'function' ? updater({ ...current }) : { ...current, ...updater };
    updated.updatedAt = new Date().toISOString();
    prof.progress.exercises[exerciseId] = updated;
    saveState(memoryState);
    return updated;
  }

  function resetProgress(topicFilter, exercisesList) {
    const prof = getActiveProfile();
    if (!topicFilter || topicFilter === 'todos') {
      prof.progress = createEmptyProfileProgress();
    } else if (Array.isArray(exercisesList)) {
      const idsToRemove = new Set(exercisesList.filter((e) => e.topic === topicFilter).map((e) => e.id));
      for (const id of idsToRemove) {
        delete prof.progress.exercises[id];
      }
    }
    saveState(memoryState);
    return prof.progress;
  }

  function exportProgressData() {
    const prof = getActiveProfile();
    return {
      app: 'estadistica-paso-a-paso',
      schemaVersion: SCHEMA_VERSION,
      contentVersion: CONTENT_VERSION,
      exportedAt: new Date().toISOString(),
      appearance: { ...memoryState.appearance },
      profile: {
        id: prof.id,
        alias: prof.alias,
        progress: JSON.parse(JSON.stringify(prof.progress))
      }
    };
  }

  /**
   * Validates an imported JSON string before applying it.
   * Rejects executable HTML/script payloads, oversized files, or incompatible schema versions.
   */
  function validateImportJson(rawString, validExerciseIds) {
    if (typeof rawString !== 'string' || rawString.trim() === '') {
      return { ok: false, message: 'El archivo está vacío.' };
    }
    if (rawString.length > 512 * 1024) {
      return { ok: false, message: 'El archivo supera el tamaño máximo permitido (512 KB).' };
    }
    if (/<script\b|javascript:|onerror\s*=|onload\s*=/i.test(rawString)) {
      return { ok: false, message: 'Se rechazó el archivo porque contiene etiquetas o código ejecutable no permitido.' };
    }

    let data;
    try {
      data = JSON.parse(rawString);
    } catch (_err) {
      return { ok: false, message: 'El archivo no tiene un formato JSON válido.' };
    }

    // Validate decoded values: JSON unicode escapes bypass raw-text filters.
    let nodes = 0;
    function safeTree(value, depth) {
      if (++nodes > 20000 || depth > 20) return false;
      if (typeof value === 'string') return value.length <= 10000 && !/[<>]/.test(value);
      if (typeof value === 'number') return Number.isFinite(value);
      if (value === null || typeof value !== 'object') return true;
      if (Array.isArray(value) && value.length > 1000) return false;
      return Object.entries(value).every(([key, child]) =>
        !['__proto__', 'prototype', 'constructor'].includes(key) &&
        key.length <= 120 && !/[<>"'`]/.test(key) && safeTree(child, depth + 1));
    }
    if (!safeTree(data, 0)) {
      return { ok: false, message: 'El archivo contiene datos no permitidos o una estructura demasiado compleja.' };
    }

    if (!data || typeof data !== 'object' || data.app !== 'estadistica-paso-a-paso') {
      return { ok: false, message: 'El archivo no corresponde a una exportación de «Estadística paso a paso».' };
    }

    if (data.schemaVersion !== SCHEMA_VERSION) {
      return {
        ok: false,
        message: `Versión de esquema incompatible (recibida: ${data.schemaVersion}, esperada: ${SCHEMA_VERSION}).`
      };
    }

    if (!data.profile || typeof data.profile !== 'object' || !data.profile.progress) {
      return { ok: false, message: 'El archivo no contiene datos de progreso de perfil válidos.' };
    }

    const validSet = validExerciseIds instanceof Set ? validExerciseIds : new Set(validExerciseIds || []);
    const incomingExercises = data.profile.progress.exercises || {};
    if (typeof incomingExercises !== 'object' || Array.isArray(incomingExercises)) {
      return { ok: false, message: 'El registro de actividades no es válido.' };
    }
    let validExCount = 0;
    let solvedCount = 0;

    for (const [exId, exState] of Object.entries(incomingExercises)) {
      if (validSet.size > 0 && !validSet.has(exId)) {
        return { ok: false, message: `El archivo incluye un ID de actividad desconocido (${exId}).` };
      }
      if (!exState || typeof exState !== 'object') {
        return { ok: false, message: `Datos de actividad inválidos en ${exId}.` };
      }
      validExCount++;
      if (exState.status === 'resuelto-sin-ayuda' || exState.status === 'resuelto-con-ayuda') {
        solvedCount++;
      }
    }

    return {
      ok: true,
      data: data,
      summary: {
        alias: sanitizeAlias(data.profile.alias),
        exportedAt: data.exportedAt || 'Fecha no indicada',
        activitiesRecorded: validExCount,
        activitiesSolved: solvedCount,
        lessonsCount: Array.isArray(data.profile.progress.lessonsCompleted) ? data.profile.progress.lessonsCompleted.length : 0
      }
    };
  }

  /**
   * Applies validated import data in 'replace' or 'merge' (idempotent) mode.
   */
  function applyImportedProgress(validatedData, mode) {
    const prof = getActiveProfile();
    const incProg = validatedData.profile.progress;

    if (mode === 'replace') {
      prof.alias = sanitizeAlias(validatedData.profile.alias || prof.alias);
      prof.progress = createEmptyProfileProgress();
      prof.progress.lastRoute = incProg.lastRoute || '#/inicio';
      prof.progress.lastExerciseId = incProg.lastExerciseId || 'G1-01';
      prof.progress.lastLessonId = incProg.lastLessonId || 'L01';
      prof.progress.lessonsCompleted = Array.isArray(incProg.lessonsCompleted) ? Array.from(new Set(incProg.lessonsCompleted)) : [];
      prof.progress.diagnostic = incProg.diagnostic || null;
      prof.progress.exercises = JSON.parse(JSON.stringify(incProg.exercises || {}));
      prof.progress.simulacroHistory = Array.isArray(incProg.simulacroHistory) ? incProg.simulacroHistory.slice(0, 30) : [];
    } else {
      // Idempotent merge
      const mergedLessons = new Set([...(prof.progress.lessonsCompleted || []), ...(incProg.lessonsCompleted || [])]);
      prof.progress.lessonsCompleted = Array.from(mergedLessons);
      if (!prof.progress.diagnostic && incProg.diagnostic) {
        prof.progress.diagnostic = incProg.diagnostic;
      }

      const rank = {
        'sin-intentar': 0,
        visto: 1,
        'para-repasar': 2,
        'resuelto-con-ayuda': 3,
        'resuelto-sin-ayuda': 4
      };

      const incExercises = incProg.exercises || {};
      for (const [exId, incEx] of Object.entries(incExercises)) {
        const curEx = prof.progress.exercises[exId];
        if (!curEx) {
          prof.progress.exercises[exId] = JSON.parse(JSON.stringify(incEx));
          continue;
        }
        // Idempotent check: if updatedAt is identical, do not double attempts
        const sameTimestamp = curEx.updatedAt && incEx.updatedAt && curEx.updatedAt === incEx.updatedAt;
        const bestStatus = (rank[incEx.status] || 0) > (rank[curEx.status] || 0) ? incEx.status : curEx.status;
        prof.progress.exercises[exId] = {
          ...curEx,
          status: bestStatus,
          usedHelp: Boolean(curEx.usedHelp || incEx.usedHelp),
          attempts: sameTimestamp ? curEx.attempts : Math.max(curEx.attempts || 0, incEx.attempts || 0),
          hintsShown: Math.max(curEx.hintsShown || 0, incEx.hintsShown || 0),
          solutionShown: Boolean(curEx.solutionShown || incEx.solutionShown),
          favorite: Boolean(curEx.favorite || incEx.favorite),
          needsReview: Boolean(curEx.needsReview || incEx.needsReview),
          draft: Object.keys(curEx.draft || {}).length > 0 ? curEx.draft : incEx.draft || {},
          updatedAt: incEx.updatedAt || curEx.updatedAt
        };
      }
    }

    if (validatedData.appearance) {
      updateAppearance(validatedData.appearance);
    }
    saveState(memoryState);
    return prof;
  }

  function isLessonRead(lessonId) {
    const prof = getActiveProfile();
    const list = prof.progress.lessonsCompleted || [];
    return list.includes(lessonId);
  }

  function markLessonRead(lessonId, readFlag) {
    const prof = getActiveProfile();
    const set = new Set(prof.progress.lessonsCompleted || []);
    if (readFlag) set.add(lessonId);
    else set.delete(lessonId);
    prof.progress.lessonsCompleted = Array.from(set);
    saveState(memoryState);
    return readFlag;
  }

  function setLastRoute(routeStr) {
    const prof = getActiveProfile();
    prof.progress.lastRoute = String(routeStr || '#/inicio');
    saveState(memoryState);
  }

  function getExerciseRecord(exId) {
    const st = getExerciseState(exId);
    const isSolved =
      st.status === 'solved' ||
      st.status === 'resuelto-sin-ayuda' ||
      st.status === 'resuelto-con-ayuda';
    return {
      ...st,
      status: isSolved ? 'solved' : st.status,
      review: Boolean(st.needsReview || st.review)
    };
  }

  function getExerciseDraft(exId) {
    const st = getExerciseState(exId);
    if (!st.draft || typeof st.draft !== 'object') {
      st.draft = {};
    }
    return st.draft;
  }

  function saveExerciseDraft(exId, draftObj) {
    updateExerciseState(exId, (cur) => ({
      ...cur,
      draft: draftObj || {}
    }));
  }

  function markExerciseStatus(exId, statusStr) {
    const mapped =
      statusStr === 'solved'
        ? 'resuelto-sin-ayuda'
        : statusStr === 'in_progress'
        ? 'para-repasar'
        : statusStr;
    updateExerciseState(exId, (cur) => ({
      ...cur,
      status: mapped,
      attempts: (cur.attempts || 0) + 1
    }));
  }

  function toggleExerciseFavorite(exId) {
    let nextVal = false;
    updateExerciseState(exId, (cur) => {
      nextVal = !cur.favorite;
      return { ...cur, favorite: nextVal };
    });
    return nextVal;
  }

  function toggleExerciseReview(exId) {
    let nextVal = false;
    updateExerciseState(exId, (cur) => {
      nextVal = !(cur.needsReview || cur.review);
      return { ...cur, needsReview: nextVal, review: nextVal };
    });
    return nextVal;
  }

  function exportProgressJson() {
    return JSON.stringify(exportProgressData(), null, 2);
  }

  EstadisticaApp.Storage = {
    SCHEMA_VERSION: SCHEMA_VERSION,
    CONTENT_VERSION: CONTENT_VERSION,
    isStorageAvailable: function () {
      return storageAvailable;
    },
    isLocalStorageAvailable: function () {
      return storageAvailable;
    },
    loadState: loadState,
    saveState: saveState,
    getState: function () {
      return memoryState;
    },
    getActiveProfile: function () {
      const p = getActiveProfile();
      if (!p.name) p.name = p.alias || 'Mi práctica';
      return p;
    },
    getAppearance: getAppearance,
    updateAppearance: updateAppearance,
    resetAppearance: resetAppearance,
    applyAppearanceToDocument: applyAppearanceToDocument,
    createProfile: function (alias) {
      const p = createProfile(alias);
      p.name = p.alias;
      return p;
    },
    switchProfile: function (profileId) {
      const p = switchProfile(profileId);
      p.name = p.alias;
      return p;
    },
    deleteProfile: deleteProfile,
    getExerciseState: getExerciseState,
    updateExerciseState: updateExerciseState,
    getExerciseRecord: getExerciseRecord,
    getExerciseDraft: getExerciseDraft,
    saveExerciseDraft: saveExerciseDraft,
    markExerciseStatus: markExerciseStatus,
    toggleExerciseFavorite: toggleExerciseFavorite,
    toggleExerciseReview: toggleExerciseReview,
    isLessonRead: isLessonRead,
    markLessonRead: markLessonRead,
    setLastRoute: setLastRoute,
    resetProgress: resetProgress,
    resetCurrentProfileProgress: function () {
      return resetProgress('todos');
    },
    exportProgressData: exportProgressData,
    exportProgressJson: exportProgressJson,
    validateImportJson: function (rawString, validExerciseIds) {
      const res = validateImportJson(rawString, validExerciseIds);
      if (res.ok) {
        res.payload = res.data;
        res.summary.profileName = res.summary.alias;
        res.summary.solvedCount = res.summary.activitiesSolved;
        res.summary.lessonsReadCount = res.summary.lessonsCount;
      }
      return res;
    },
    applyImportedProgress: applyImportedProgress,
    sanitizeAlias: sanitizeAlias
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.Storage;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
