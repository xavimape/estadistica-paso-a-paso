(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});

  function gcd(a, b) {
    a = Math.abs(Math.trunc(a));
    b = Math.abs(Math.trunc(b));
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  function simplifyFraction(num, den) {
    if (!Number.isFinite(num) || !Number.isFinite(den) || den === 0) {
      return null;
    }
    const sign = (num < 0) !== (den < 0) ? -1 : 1;
    const n = Math.abs(Math.round(num));
    const d = Math.abs(Math.round(den));
    const div = gcd(n, d);
    return {
      numerator: sign * (n / div),
      denominator: d / div,
      value: (sign * n) / d
    };
  }

  /**
   * Formats a number using Argentine Spanish conventions:
   * - comma for decimals
   * - optional dot for thousands when >= 10000 or currency
   */
  function formatNumberAr(value, options) {
    const opts = options || {};
    if (value === null || value === undefined || !Number.isFinite(Number(value))) {
      return '—';
    }
    const num = Number(value);
    const maxDecimals = typeof opts.decimals === 'number' ? opts.decimals : 2;
    const fixedDecimals = typeof opts.fixedDecimals === 'number' ? opts.fixedDecimals : null;
    const useThousands = Boolean(opts.useThousands || Math.abs(num) >= 10000);

    const sign = num < 0 ? '-' : '';
    const absVal = Math.abs(num);
    const factor = Math.pow(10, fixedDecimals !== null ? fixedDecimals : maxDecimals);
    const rounded = Math.round((absVal + Number.EPSILON) * factor) / factor;

    let str;
    if (fixedDecimals !== null) {
      str = rounded.toFixed(fixedDecimals);
    } else {
      str = rounded.toFixed(maxDecimals).replace(/\.?0+$/, '');
    }

    const parts = str.split('.');
    let intPart = parts[0];
    const decPart = parts[1] || '';

    if (useThousands) {
      intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const formatted = decPart ? `${sign}${intPart},${decPart}` : `${sign}${intPart}`;
    if (opts.currency) {
      return `${sign}$${intPart}${decPart ? ',' + decPart : ''}`;
    }
    if (opts.unit) {
      return opts.unit === '%' ? `${formatted} %` : `${formatted} ${opts.unit}`;
    }
    return formatted;
  }

  /**
   * Safe, restricted parser for student numeric input.
   * Never uses eval or Function.
   * Supports integers, decimals with comma or dot, and simple fractions a/b when allowFraction is true.
   */
  function parseStudentNumber(rawInput, options) {
    const opts = options || {};
    if (rawInput === null || rawInput === undefined) {
      return { ok: false, code: 'EMPTY', message: 'Escribí un valor antes de comprobar.' };
    }
    const raw = String(rawInput).trim();
    if (raw === '') {
      return { ok: false, code: 'EMPTY', message: 'El campo está vacío. Ingresá un número para comprobar.' };
    }

    // Check if the user wrote a % sign or currency sign
    let cleaned = raw;
    const hadPercentSign = cleaned.endsWith('%');
    if (opts.stripPercent && hadPercentSign) {
      cleaned = cleaned.slice(0, -1).trim();
    }
    if (opts.stripCurrency && cleaned.startsWith('$')) {
      cleaned = cleaned.slice(1).trim();
    }

    // Reject Infinity, NaN, letters, or partial numbers like 7abc
    if (/[a-zA-Z_]/.test(cleaned)) {
      return {
        ok: false,
        code: 'INVALID_CHARS',
        message: 'Ingresá solo números (sin letras ni texto adicional). Por ejemplo: 8 o 7,94.'
      };
    }

    // Check simple fraction a/b
    if (cleaned.includes('/')) {
      if (opts.integerOnly) {
        return {
          ok: false,
          code: 'NOT_INTEGER',
          message: 'Este conteo requiere un número entero (sin fracciones ni decimales).'
        };
      }
      if (opts.allowFraction === false) {
        return {
          ok: false,
          code: 'FRACTION_NOT_ALLOWED',
          message: 'En este campo ingresá el resultado decimal usando coma (por ejemplo, 0,4).'
        };
      }
      const fracMatch = /^([+-]?\d+)\s*\/\s*([+-]?\d+)$/.exec(cleaned);
      if (!fracMatch) {
        return {
          ok: false,
          code: 'INVALID_FRACTION',
          message: 'La fracción debe escribirse con dos números enteros separados por una barra, por ejemplo: 7/25.'
        };
      }
      const num = Number(fracMatch[1]);
      const den = Number(fracMatch[2]);
      if (den === 0) {
        return {
          ok: false,
          code: 'DIV_ZERO',
          message: 'El denominador no puede ser 0 (no se puede dividir por cero).'
        };
      }
      const value = num / den;
      if (!Number.isFinite(value)) {
        return {
          ok: false,
          code: 'NON_FINITE',
          message: 'El número ingresado es demasiado grande o inválido.'
        };
      }
      if (opts.nonNegative && value < 0) {
        return {
          ok: false,
          code: 'NEGATIVE_NOT_ALLOWED',
          message: 'En este problema el valor no puede ser negativo.'
        };
      }
      return {
        ok: true,
        value: value,
        isFraction: true,
        numerator: num,
        denominator: den,
        isInteger: Number.isInteger(value),
        hadPercentSign: hadPercentSign,
        normalized: `${num}/${den} (${formatNumberAr(value, { decimals: 2 })})`
      };
    }

    // Standard integer or decimal (comma or dot)
    // Allow thousand dots ONLY if formatted like 300.000 or 2.800.000
    let normalizedDigits = cleaned.replace(/\s+/g, '');
    if (/^[+-]?\d{1,3}(\.\d{3})+(,\d+)?$/.test(normalizedDigits) && opts.allowThousandsDot) {
      normalizedDigits = normalizedDigits.replace(/\./g, '').replace(',', '.');
    } else {
      // Must have at most one comma or one dot as decimal separator
      const commaCount = (normalizedDigits.match(/,/g) || []).length;
      const dotCount = (normalizedDigits.match(/\./g) || []).length;
      if (commaCount + dotCount > 1) {
        return {
          ok: false,
          code: 'MULTIPLE_SEPARATORS',
          message: 'Usá una sola coma para los decimales (por ejemplo: 7,94) y escribí los miles sin puntos (por ejemplo: 300000).'
        };
      }
      normalizedDigits = normalizedDigits.replace(',', '.');
    }

    if (!/^[+-]?\d+(\.\d+)?$/.test(normalizedDigits)) {
      return {
        ok: false,
        code: 'INVALID_FORMAT',
        message: 'Formato numérico no válido. Escribí un número entero o decimal (por ejemplo: 14 o 14,4).'
      };
    }

    const value = Number(normalizedDigits);
    if (!Number.isFinite(value)) {
      return {
        ok: false,
        code: 'NON_FINITE',
        message: 'El valor ingresado no es un número finito válido.'
      };
    }

    const hasDecimalPart = normalizedDigits.includes('.');
    const decDigits = hasDecimalPart ? normalizedDigits.split('.')[1].length : 0;

    if (opts.integerOnly && (!Number.isInteger(value) || hasDecimalPart)) {
      return {
        ok: false,
        code: 'NOT_INTEGER',
        message: 'Este dato es un conteo y requiere un número entero (sin coma decimal).'
      };
    }

    if (opts.nonNegative && value < 0) {
      return {
        ok: false,
        code: 'NEGATIVE_NOT_ALLOWED',
        message: 'Las frecuencias y conteos no pueden ser números negativos.'
      };
    }

    return {
      ok: true,
      value: value,
      isFraction: false,
      isInteger: Number.isInteger(value) && !hasDecimalPart,
      decimalPlaces: decDigits,
      hadPercentSign: hadPercentSign,
      normalized: formatNumberAr(value, {
        fixedDecimals: hasDecimalPart ? Math.min(decDigits, 4) : 0,
        useThousands: Boolean(opts.allowThousandsDot && Math.abs(value) >= 10000)
      })
    };
  }

  /**
   * Computes full frequency table and central tendency stats for a dataset.
   * @param {Array<number|string>} rawValues
   * @param {Object} options { kind: 'discreta'|'continua'|'ordinal'|'nominal', categoryOrder?: string[] }
   */
  function computeDatasetStats(rawValues, options) {
    const opts = options || {};
    const kind = opts.kind || 'discreta';
    const isQuantitative = kind === 'discreta' || kind === 'continua';
    const hasOrder = isQuantitative || kind === 'ordinal';

    if (!Array.isArray(rawValues) || rawValues.length === 0) {
      return {
        ok: false,
        code: 'EMPTY_DATASET',
        message: 'La lista de datos está vacía. Ingresá al menos un dato.',
        n: 0,
        rows: []
      };
    }

    const n = rawValues.length;
    const counts = new Map();

    for (let i = 0; i < n; i++) {
      const v = rawValues[i];
      if (isQuantitative) {
        const num = Number(v);
        if (!Number.isFinite(num)) {
          return {
            ok: false,
            code: 'INVALID_DATUM',
            message: `El dato en la posición ${i + 1} no es un número válido.`
          };
        }
        counts.set(num, (counts.get(num) || 0) + 1);
      } else {
        const label = String(v).trim();
        if (!label) {
          return {
            ok: false,
            code: 'EMPTY_CATEGORY',
            message: `El dato en la posición ${i + 1} está vacío.`
          };
        }
        counts.set(label, (counts.get(label) || 0) + 1);
      }
    }

    let distinctValues = Array.from(counts.keys());
    if (isQuantitative) {
      distinctValues.sort((a, b) => a - b);
    } else if (kind === 'ordinal' && Array.isArray(opts.categoryOrder) && opts.categoryOrder.length > 0) {
      const orderMap = new Map(opts.categoryOrder.map((c, idx) => [String(c).toLowerCase(), idx]));
      distinctValues.sort((a, b) => {
        const ia = orderMap.has(String(a).toLowerCase()) ? orderMap.get(String(a).toLowerCase()) : 999;
        const ib = orderMap.has(String(b).toLowerCase()) ? orderMap.get(String(b).toLowerCase()) : 999;
        return ia - ib;
      });
    }

    let cumulative = 0;
    let sumProducts = 0;
    let sumFrRounded = 0;
    let sumPctRounded = 0;
    let maxFreq = 0;

    const rows = distinctValues.map((val) => {
      const f = counts.get(val);
      if (f > maxFreq) maxFreq = f;
      cumulative += f;
      const frExact = f / n;
      const pctExact = (f * 100) / n;
      const frRounded = Math.round((frExact + Number.EPSILON) * 100) / 100;
      const pctRounded = Math.round((pctExact + Number.EPSILON) * 100) / 100;
      sumFrRounded = Math.round((sumFrRounded + frRounded) * 1000) / 1000;
      sumPctRounded = Math.round((sumPctRounded + pctRounded) * 100) / 100;

      const product = isQuantitative ? val * f : null;
      if (isQuantitative) {
        sumProducts += product;
      }

      return {
        value: val,
        f: f,
        frNumerator: f,
        frDenominator: n,
        frExact: frExact,
        frRounded: frRounded,
        pctExact: pctExact,
        pctRounded: pctRounded,
        F: hasOrder ? cumulative : null,
        product: product
      };
    });

    // Sorted full list when order exists
    let sortedValues = null;
    if (isQuantitative) {
      sortedValues = rawValues.map(Number).sort((a, b) => a - b);
    } else if (kind === 'ordinal') {
      sortedValues = [];
      for (const r of rows) {
        for (let k = 0; k < r.f; k++) sortedValues.push(r.value);
      }
    }

    // Mean
    let meanInfo = null;
    if (isQuantitative) {
      const exactMean = sumProducts / n;
      meanInfo = {
        applicable: true,
        sum: sumProducts,
        n: n,
        value: exactMean,
        rounded2: Math.round((exactMean + Number.EPSILON) * 100) / 100,
        isExact2Decimals: Math.abs(exactMean * 100 - Math.round(exactMean * 100)) < 1e-9,
        formatted: formatNumberAr(exactMean, { decimals: 2 })
      };
    } else {
      meanInfo = {
        applicable: false,
        reason: 'La media aritmética requiere sumar cantidades numéricas; no se calcula sobre categorías o palabras.'
      };
    }

    // Median
    let medianInfo = null;
    if (isQuantitative) {
      const posFormula = (n + 1) / 2;
      if (n % 2 === 1) {
        const idx = (n - 1) / 2;
        const val = sortedValues[idx];
        medianInfo = {
          applicable: true,
          isEven: false,
          position: posFormula,
          positions1Based: [idx + 1],
          middleValues: [val],
          value: val,
          formatted: formatNumberAr(val, { decimals: 2 })
        };
      } else {
        const idx1 = n / 2 - 1;
        const idx2 = n / 2;
        const v1 = sortedValues[idx1];
        const v2 = sortedValues[idx2];
        const medVal = (v1 + v2) / 2;
        medianInfo = {
          applicable: true,
          isEven: true,
          position: posFormula,
          positions1Based: [idx1 + 1, idx2 + 1],
          middleValues: [v1, v2],
          value: medVal,
          formatted: formatNumberAr(medVal, { decimals: 2 })
        };
      }
    } else if (kind === 'ordinal') {
      const posFormula = (n + 1) / 2;
      if (n % 2 === 1) {
        const idx = (n - 1) / 2;
        const val = sortedValues[idx];
        medianInfo = {
          applicable: true,
          isEven: false,
          position: posFormula,
          positions1Based: [idx + 1],
          middleValues: [val],
          value: val,
          formatted: String(val)
        };
      } else {
        const idx1 = n / 2 - 1;
        const idx2 = n / 2;
        const v1 = sortedValues[idx1];
        const v2 = sortedValues[idx2];
        const same = v1 === v2;
        medianInfo = {
          applicable: true,
          isEven: true,
          position: posFormula,
          positions1Based: [idx1 + 1, idx2 + 1],
          middleValues: [v1, v2],
          value: same ? v1 : `${v1} / ${v2}`,
          formatted: same ? String(v1) : `Entre «${v1}» y «${v2}» (no se promedian palabras)`
        };
      }
    } else {
      medianInfo = {
        applicable: false,
        reason: 'La mediana requiere ordenar los datos de menor a mayor jerarquía; las categorías nominales no tienen un orden natural.'
      };
    }

    // Mode (school criterion: if all distinct values have the same frequency and distinctValues.length > 1, it is amodal)
    const allSameFreq = rows.length > 1 && rows.every((r) => r.f === maxFreq);
    const modes = allSameFreq ? [] : rows.filter((r) => r.f === maxFreq).map((r) => r.value);
    let modeClassification = 'unimodal';
    if (modes.length === 0) {
      modeClassification = 'amodal';
    } else if (modes.length === 2) {
      modeClassification = 'bimodal';
    } else if (modes.length > 2) {
      modeClassification = 'multimodal';
    }

    const modeInfo = {
      applicable: true,
      modes: modes,
      maxFrequency: maxFreq,
      classification: modeClassification,
      formatted:
        modes.length === 0
          ? 'Amodal (ningún valor se repite más que los demás)'
          : modes.map((m) => (isQuantitative ? formatNumberAr(m, { decimals: 2 }) : String(m))).join(' y ')
    };

    return {
      ok: true,
      kind: kind,
      isQuantitative: isQuantitative,
      hasOrder: hasOrder,
      n: n,
      distinctCount: rows.length,
      rawValues: rawValues.slice(),
      sortedValues: sortedValues,
      rows: rows,
      totals: {
        f: n,
        frExact: 1,
        frRounded: sumFrRounded,
        pctExact: 100,
        pctRounded: sumPctRounded,
        F: hasOrder ? cumulative : null,
        product: isQuantitative ? sumProducts : null,
        hasRoundingDiff: Math.abs(sumFrRounded - 1) > 0.001 || Math.abs(sumPctRounded - 100) > 0.01
      },
      mean: meanInfo,
      median: medianInfo,
      mode: modeInfo
    };
  }

  /**
   * Evaluates a single exercise part against student input with diagnostic pedagogical feedback.
   */
  function evaluatePart(part, userInput, context) {
    const ctx = context || {};
    const type = part.type;

    if (type === 'select') {
      const selected = userInput === null || userInput === undefined ? '' : String(userInput).trim();
      if (!selected) {
        return {
          ok: false,
          status: 'empty',
          message: 'Seleccioná una opción para comprobar este apartado.'
        };
      }
      const isCorrect = selected === String(part.expected);
      const optionFeedback = (part.optionFeedback && part.optionFeedback[selected]) || '';
      if (isCorrect) {
        return {
          ok: true,
          status: 'correct',
          message: optionFeedback || part.correctMessage || '¡Muy bien! La opción elegida tiene sentido matemático en este contexto.'
        };
      }
      return {
        ok: false,
        status: 'incorrect',
        message:
          optionFeedback ||
          part.errorMessage ||
          'Revisá el significado del dato o la definición del concepto antes de elegir.'
      };
    }

    if (type === 'number') {
      const isPct = part.unit === '%';
      const isRelFreq = part.subkind === 'fr';
      const isCount = Boolean(part.integerOnly);

      const parsed = parseStudentNumber(userInput, {
        integerOnly: isCount,
        nonNegative: part.nonNegative !== false,
        allowFraction: part.allowFraction !== false && !isCount,
        allowThousandsDot: Boolean(part.allowThousandsDot),
        stripPercent: isPct,
        stripCurrency: part.unit === '$'
      });

      if (!parsed.ok) {
        return {
          ok: false,
          status: parsed.code === 'EMPTY' ? 'empty' : 'invalid',
          message: parsed.message
        };
      }

      // Check if user put % sign on a relative frequency
      if (isRelFreq && parsed.hadPercentSign) {
        return {
          ok: false,
          status: 'incorrect',
          message: `Escribiste un porcentaje (${rawOrNormalized(userInput)}). La frecuencia relativa se expresa como parte de 1 (por ejemplo, dividiendo entre el total sin multiplicar por 100).`
        };
      }

      let expectedVal;
      let exactNum = null;
      let exactDen = null;
      if (typeof part.expected === 'object' && part.expected !== null && 'numerator' in part.expected) {
        exactNum = Number(part.expected.numerator);
        exactDen = Number(part.expected.denominator);
        expectedVal = exactNum / exactDen;
      } else {
        expectedVal = Number(part.expected);
      }

      const decimals = typeof part.roundingDecimals === 'number' ? part.roundingDecimals : 2;
      const factor = Math.pow(10, decimals);
      const roundedExpected = Math.round((expectedVal + Number.EPSILON) * factor) / factor;

      // Diagnostic checks for common statistical mistakes BEFORE generic mismatch
      if (isRelFreq && Math.abs(parsed.value - expectedVal * 100) < 0.05 && expectedVal > 0 && expectedVal <= 1) {
        return {
          ok: false,
          status: 'incorrect',
          message: `Ingresaste ${parsed.normalized}, que corresponde al porcentaje (${formatNumberAr(expectedVal * 100, { decimals: 2 })} %). Para la frecuencia relativa (fr), dejá el cociente entre 0 y 1: ${formatNumberAr(roundedExpected, { decimals: decimals })}.`
        };
      }
      if (isPct && Math.abs(parsed.value - expectedVal / 100) < 0.005 && expectedVal >= 1) {
        return {
          ok: false,
          status: 'incorrect',
          message: `Ingresaste ${parsed.normalized}, que es la frecuencia relativa (fr). Para el porcentaje (%), multiplicá esa proporción por 100: ${formatNumberAr(roundedExpected, { decimals: decimals })} %.`
        };
      }

      // Check custom diagnostics defined on the part
      if (Array.isArray(part.commonErrors)) {
        for (const err of part.commonErrors) {
          const tol = typeof err.tolerance === 'number' ? err.tolerance : 0.015;
          if (Math.abs(parsed.value - Number(err.value)) <= tol) {
            return {
              ok: false,
              status: 'incorrect',
              message: err.message
            };
          }
        }
      }

      // Check exact match or rounded match
      const exactMatch = Math.abs(parsed.value - expectedVal) < 1e-7;
      const roundedMatch = !isCount && Math.abs(parsed.value - roundedExpected) <= (part.tolerance || 0.0051);
      // Also allow 3 decimals if exact has more decimals (e.g. 0,333 for 1/3)
      const rounded3Expected = Math.round((expectedVal + Number.EPSILON) * 1000) / 1000;
      const rounded3Match = !isCount && exactDen && Math.abs(parsed.value - rounded3Expected) <= 0.0011;

      if (exactMatch || roundedMatch || rounded3Match) {
        const unitLabel = part.unit ? (part.unit === '$' ? '' : ` ${part.unit}`) : '';
        const displayExpected =
          part.unit === '$'
            ? formatNumberAr(roundedExpected, { currency: true, decimals: 0 })
            : `${formatNumberAr(roundedExpected, { decimals: decimals })}${unitLabel}`;
        const approxNote =
          exactDen && ! exactMatch && Math.abs(expectedVal - roundedExpected) > 1e-7
            ? ` (${exactNum}/${exactDen} ≈ ${displayExpected})`
            : '';
        return {
          ok: true,
          status: 'correct',
          normalizedInput: parsed.normalized,
          message:
            part.correctMessage ||
            `¡Correcto! Tu respuesta (${parsed.normalized}${unitLabel}) coincide con el resultado esperado${approxNote}.`
        };
      }

      // If student rounded to integer when 2 decimals were needed (e.g. 8 instead of 7,94 in G4-05)
      if (!isCount && Math.abs(parsed.value - Math.round(expectedVal)) < 1e-7 && Math.abs(expectedVal - Math.round(expectedVal)) > 0.01) {
        return {
          ok: false,
          status: 'incorrect',
          message: `Redondeaste a un entero (${parsed.normalized}), pero la cuenta da un valor con decimales (${formatNumberAr(roundedExpected, { decimals: decimals })}). Escribí el resultado con coma decimal sin redondear a entero.`
        };
      }

      return {
        ok: false,
        status: 'incorrect',
        normalizedInput: parsed.normalized,
        message:
          part.errorMessage ||
          `Tu respuesta fue ${parsed.normalized}, pero todavía no coincide. Revisá los pasos de cálculo o pedí una pista.`
      };
    }

    if (type === 'number-set') {
      const raw = userInput === null || userInput === undefined ? '' : String(userInput).trim();
      if (!raw) {
        return {
          ok: false,
          status: 'empty',
          message: 'Ingresá el valor o los valores pedidos (o escribí «amodal» si ninguno se repite más que otro).'
        };
      }

      const expectedArr = Array.isArray(part.expected) ? part.expected.map(Number) : [];
      const lower = raw.toLowerCase();
      const isAmodalAnswer =
        lower === 'amodal' ||
        lower === 'ninguna' ||
        lower === 'ninguno' ||
        lower === 'sin moda' ||
        lower === 'no tiene';

      if (expectedArr.length === 0) {
        if (isAmodalAnswer) {
          return {
            ok: true,
            status: 'correct',
            message: part.correctMessage || '¡Exacto! Ningún valor supera en frecuencia a los demás: la serie es amodal.'
          };
        }
        return {
          ok: false,
          status: 'incorrect',
          message: 'Fijate cuántas veces aparece cada valor: ¿hay alguno que se repita más veces que los demás?'
        };
      }

      if (isAmodalAnswer) {
        return {
          ok: false,
          status: 'incorrect',
          message: 'En este conjunto sí hay al menos un valor que aparece con mayor frecuencia que otros. Contá las repeticiones de cada dato.'
        };
      }

      // Split by ';', 'y', or ',' (when numbers are integers)
      const tokens = raw
        .replace(/\s+y\s+/gi, ';')
        .replace(/,/g, part.integerElements !== false ? ';' : ',')
        .split(';')
        .map((t) => t.trim())
        .filter(Boolean);

      const parsedNums = [];
      for (const tok of tokens) {
        const p = parseStudentNumber(tok, { allowFraction: false });
        if (!p.ok) {
          return {
            ok: false,
            status: 'invalid',
            message: `No se pudo leer «${tok}» como número. Si hay dos modas, separalas con «y» o con punto y coma (por ejemplo: 1 y 2).`
          };
        }
        parsedNums.push(p.value);
      }

      // Reject duplicates as extra answers
      const uniqueSet = new Set(parsedNums);
      if (uniqueSet.size !== parsedNums.length) {
        return {
          ok: false,
          status: 'incorrect',
          message: 'Escribiste valores repetidos en la respuesta. Indicá cada moda una sola vez.'
        };
      }

      // Check if student wrote the maximum frequency instead of the mode value
      if (part.maxFrequency && parsedNums.length === 1 && parsedNums[0] === part.maxFrequency && !expectedArr.includes(part.maxFrequency)) {
        return {
          ok: false,
          status: 'incorrect',
          message: `Escribiste ${part.maxFrequency}, que es la cantidad de veces que se repite (la frecuencia máxima). La moda es el valor del dato que más se repite, no cuántas veces aparece.`
        };
      }

      const expectedSet = new Set(expectedArr);
      const allMatch =
        uniqueSet.size === expectedSet.size &&
        Array.from(uniqueSet).every((v) => Array.from(expectedSet).some((e) => Math.abs(v - e) < 1e-6));

      if (allMatch) {
        return {
          ok: true,
          status: 'correct',
          message:
            part.correctMessage ||
            `¡Correcto! ${expectedArr.length > 1 ? 'Las modas son ' : 'La moda es '}${expectedArr.map((v) => formatNumberAr(v)).join(' y ')}.`
        };
      }

      if (expectedArr.length > 1 && uniqueSet.size === 1 && Array.from(uniqueSet).every((v) => expectedSet.has(v))) {
        return {
          ok: false,
          status: 'incorrect',
          message: 'Encontraste uno de los valores más frecuentes, pero hay otro valor empatado con la misma frecuencia máxima (serie bimodal).'
        };
      }

      return {
        ok: false,
        status: 'incorrect',
        message: part.errorMessage || 'Revisá cuál es el dato que tiene la mayor frecuencia absoluta en el conjunto.'
      };
    }

    if (type === 'freq-table') {
      // userInput is an object mapping `rowIndex_colKey` -> string
      const cellInputs = userInput && typeof userInput === 'object' ? userInput : {};
      const cols = part.columns || ['f', 'fr', 'pct', 'F'];
      const expectedRows = part.rows || [];
      const n = part.totalN || expectedRows.reduce((acc, r) => acc + Number(r.f), 0);

      const cellResults = {};
      let totalCells = 0;
      let correctCells = 0;
      let emptyCells = 0;
      let firstHintMsg = '';

      expectedRows.forEach((row, rIdx) => {
        cols.forEach((col) => {
          totalCells++;
          const key = `${rIdx}_${col}`;
          const rawVal = cellInputs[key];
          let subPart;
          if (col === 'f') {
            subPart = {
              type: 'number',
              integerOnly: true,
              nonNegative: true,
              expected: row.f,
              errorMessage: `Fila «${row.label || row.x}», columna f: contá cuántas veces aparece el valor ${row.label || row.x}.`
            };
          } else if (col === 'fr') {
            subPart = {
              type: 'number',
              subkind: 'fr',
              nonNegative: true,
              allowFraction: true,
              expected: { numerator: row.f, denominator: n },
              roundingDecimals: 2,
              errorMessage: `Fila «${row.label || row.x}», columna fr: dividí la frecuencia f (${row.f}) entre el total n (${n}).`
            };
          } else if (col === 'pct') {
            subPart = {
              type: 'number',
              unit: '%',
              nonNegative: true,
              allowFraction: false,
              expected: { numerator: row.f * 100, denominator: n },
              roundingDecimals: 2,
              errorMessage: `Fila «${row.label || row.x}», columna %: multiplicá la frecuencia relativa por 100.`
            };
          } else if (col === 'F') {
            subPart = {
              type: 'number',
              integerOnly: true,
              nonNegative: true,
              expected: row.F,
              errorMessage: `Fila «${row.label || row.x}», columna F: sumá las frecuencias absolutas desde la primera fila hasta «${row.label || row.x}».`
            };
          }
          const res = evaluatePart(subPart, rawVal, ctx);
          cellResults[key] = res;
          if (res.ok) {
            correctCells++;
          } else {
            if (res.status === 'empty') emptyCells++;
            else if (!firstHintMsg) firstHintMsg = res.message;
          }
        });
      });

      if (emptyCells === totalCells) {
        return {
          ok: false,
          status: 'empty',
          cellResults: cellResults,
          correctCells: 0,
          totalCells: totalCells,
          message: 'Completá las casillas de la tabla antes de comprobar.'
        };
      }

      if (correctCells === totalCells) {
        return {
          ok: true,
          status: 'correct',
          cellResults: cellResults,
          correctCells: correctCells,
          totalCells: totalCells,
          message:
            part.correctMessage ||
            `¡Tabla completa y correcta! Las frecuencias absolutas suman ${n}, las relativas suman 1 y los porcentajes suman 100 %.`
        };
      }

      return {
        ok: false,
        status: 'partial',
        cellResults: cellResults,
        correctCells: correctCells,
        totalCells: totalCells,
        message: `Acertaste ${correctCells} de ${totalCells} casillas. ${firstHintMsg || 'Completá las casillas faltantes marcadas en la tabla.'}`
      };
    }

    if (type === 'bar-builder') {
      // userInput: { scaleStep: number, bars: { [categoryKey]: number } }
      const input = userInput && typeof userInput === 'object' ? userInput : {};
      const scaleParsed = parseStudentNumber(input.scaleStep, { integerOnly: false, nonNegative: true });
      if (!scaleParsed.ok || scaleParsed.value <= 0) {
        return {
          ok: false,
          status: 'empty',
          message: 'Elegí primero cuántas unidades representa cada cuadrito del eje vertical (escala mayor que 0).'
        };
      }
      const scaleStep = scaleParsed.value;
      const maxGridCells = part.maxGridCells || 15;
      const expectedBars = part.bars || [];
      const maxVal = Math.max(...expectedBars.map((b) => Number(b.value)));
      const neededCells = maxVal / scaleStep;

      if (neededCells > maxGridCells) {
        return {
          ok: false,
          status: 'incorrect',
          message: `Con ${formatNumberAr(scaleStep)} unidad(es) por cuadrito, el valor máximo (${maxVal}) necesitaría ${formatNumberAr(neededCells)} cuadritos y supera los ${maxGridCells} cuadritos disponibles. Elegí una escala con más unidades por cuadrito.`
        };
      }

      if (Array.isArray(part.validScaleSteps) && !part.validScaleSteps.includes(scaleStep)) {
        return {
          ok: false,
          status: 'incorrect',
          message: `Elegí una escala uniforme cómoda para graduar la hoja (por ejemplo: ${part.validScaleSteps.join(', ')} unidades por cuadrito).`
        };
      }

      const barInputs = input.bars || {};
      const barResults = {};
      let correctBars = 0;
      let firstBarError = '';

      expectedBars.forEach((b) => {
        const rawH = barInputs[b.key];
        const p = parseStudentNumber(rawH, { nonNegative: true });
        if (!p.ok) {
          barResults[b.key] = { ok: false, message: `Ingresá la altura para «${b.label}».` };
          if (!firstBarError) firstBarError = barResults[b.key].message;
          return;
        }
        // Depending on part.inputMode: 'value' (height in data units) or 'cells' (height in grid cells)
        const expectedTarget = part.inputMode === 'cells' ? b.value / scaleStep : b.value;
        if (Math.abs(p.value - expectedTarget) < 0.01) {
          barResults[b.key] = { ok: true };
          correctBars++;
        } else {
          const targetDesc =
            part.inputMode === 'cells'
              ? `${formatNumberAr(expectedTarget)} cuadritos (para representar ${b.value} con escala de ${formatNumberAr(scaleStep)} por cuadrito)`
              : `${formatNumberAr(b.value)} ${part.unit || ''}`.trim();
          barResults[b.key] = {
            ok: false,
            message: `En «${b.label}» indicaste ${p.normalized}, pero debe llegar a ${targetDesc}.`
          };
          if (!firstBarError) firstBarError = barResults[b.key].message;
        }
      });

      if (correctBars === expectedBars.length) {
        return {
          ok: true,
          status: 'correct',
          barResults: barResults,
          message:
            part.correctMessage ||
            `¡Gráfico correcto! Con escala de ${formatNumberAr(scaleStep)} por cuadrito, el valor máximo (${maxVal}) ocupa ${formatNumberAr(neededCells)} cuadritos y todas las barras tienen la altura proporcional exacta.`
        };
      }

      return {
        ok: false,
        status: 'partial',
        barResults: barResults,
        message: `Escala válida (${formatNumberAr(scaleStep)} por cuadrito), pero revisá las barras (${correctBars} de ${expectedBars.length} correctas): ${firstBarError}`
      };
    }

    if (type === 'rubric') {
      // Self-evaluated explanation + checklist of criteria
      // userInput: { text: string, checks: boolean[] }
      const input = userInput && typeof userInput === 'object' ? userInput : {};
      const text = String(input.text || '').trim();
      const checks = Array.isArray(input.checks) ? input.checks.filter(Boolean).length : 0;
      const totalCriteria = Array.isArray(part.criteria) ? part.criteria.length : 1;

      if (text.length < 8) {
        return {
          ok: false,
          status: 'empty',
          isSelfEvaluated: true,
          message: 'Escribí primero tu explicación con tus propias palabras y luego comparala con la lista de criterios.'
        };
      }

      if (checks === 0) {
        return {
          ok: false,
          status: 'needs-rubric',
          isSelfEvaluated: true,
          message: 'Leé tu respuesta y marcá en la rúbrica qué criterios incluiste para completar tu autoevaluación.'
        };
      }

      return {
        ok: checks >= Math.ceil(totalCriteria * 0.6),
        status: checks === totalCriteria ? 'correct' : 'partial',
        isSelfEvaluated: true,
        checkedCount: checks,
        totalCriteria: totalCriteria,
        message:
          checks === totalCriteria
            ? 'Autoevaluación completada: verificaste todos los criterios clave de la explicación.'
            : `Autoevaluación registrada (${checks} de ${totalCriteria} criterios marcados). Revisá el criterio restante en la solución modelo.`
      };
    }

    return {
      ok: false,
      status: 'unknown',
      message: 'Tipo de apartado no reconocido.'
    };
  }

  function rawOrNormalized(v) {
    return String(v || '').trim();
  }

  /**
   * Evaluates all parts of an exercise.
   */
  function evaluateExercise(exercise, userAnswers) {
    const answers = userAnswers && typeof userAnswers === 'object' ? userAnswers : {};
    const parts = exercise.parts || [];
    const partResults = {};
    let objectiveTotal = 0;
    let objectiveCorrect = 0;
    let rubricTotal = 0;
    let rubricCompleted = 0;
    let emptyCount = 0;

    for (const part of parts) {
      const res = evaluatePart(part, answers[part.id], { exercise });
      partResults[part.id] = res;
      if (res.status === 'empty') emptyCount++;

      if (part.type === 'rubric') {
        rubricTotal++;
        if (res.ok) rubricCompleted++;
      } else {
        objectiveTotal++;
        if (res.ok) objectiveCorrect++;
      }
    }

    const allObjectiveCorrect = objectiveCorrect === objectiveTotal;
    const allRubricDone = rubricCompleted === rubricTotal;
    const allCorrect = allObjectiveCorrect && allRubricDone && parts.length > 0;

    let summaryStatus = 'incorrect';
    if (emptyCount === parts.length) {
      summaryStatus = 'empty';
    } else if (allCorrect) {
      summaryStatus = 'correct';
    } else if (objectiveCorrect > 0 || rubricCompleted > 0) {
      summaryStatus = 'partial';
    }

    return {
      ok: allCorrect,
      status: summaryStatus,
      objectiveCorrect: objectiveCorrect,
      objectiveTotal: objectiveTotal,
      rubricCompleted: rubricCompleted,
      rubricTotal: rubricTotal,
      partResults: partResults
    };
  }

  /**
   * Reproducible PRNG (Mulberry32) from numeric or string seed.
   */
  function hashSeed(seedInput) {
    const str = String(seedInput || 'cielito-2026');
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  function createRng(seedInput) {
    let a = hashSeed(seedInput);
    return function next() {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Generates a reproducible numerical variant ("Otro parecido") for frequency and central tendency exercises.
   * Never alters the original exercise ID or stored data.
   */
  function generateComparableVariant(topic, seedInput) {
    const seedStr = String(seedInput || 'V1-101');
    const rng = createRng(seedStr);

    if (topic === 'frecuencias') {
      const contexts = [
        { title: 'libros leídos en el cuatrimestre', unit: 'libros', values: [0, 1, 2, 3, 4] },
        { title: 'inasistencias en el mes', unit: 'faltas', values: [0, 1, 2, 3] },
        { title: 'horas de práctica deportiva semanal', unit: 'horas', values: [0, 1, 2, 3, 4] }
      ];
      const ctx = contexts[Math.floor(rng() * contexts.length)];
      const totals = [10, 15, 20, 25];
      const n = totals[Math.floor(rng() * totals.length)];
      const k = ctx.values.length;
      const freqs = new Array(k).fill(1);
      let rem = n - k;
      while (rem > 0) {
        const idx = Math.floor(rng() * k);
        freqs[idx]++;
        rem--;
      }
      const rawList = [];
      ctx.values.forEach((v, idx) => {
        for (let c = 0; c < freqs[idx]; c++) rawList.push(v);
      });
      // Deterministic shuffle of rawList
      for (let i = rawList.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        const tmp = rawList[i];
        rawList[i] = rawList[j];
        rawList[j] = tmp;
      }
      const stats = computeDatasetStats(rawList, { kind: 'discreta' });
      const askIdx = Math.min(2, stats.rows.length - 1);
      const targetRow = stats.rows[askIdx];

      return {
        generatorVersion: '1.0',
        seed: seedStr,
        topic: 'frecuencias',
        title: `Variante reproducible (${seedStr}): Tabla de ${ctx.title}`,
        prompt: `Datos ficticios de ${n} estudiantes sobre ${ctx.title}: ${rawList.join(', ')}. Completá la tabla de frecuencias y respondé qué porcentaje tiene hasta ${targetRow.value} ${ctx.unit}.`,
        dataset: rawList,
        stats: stats,
        parts: [
          {
            id: 'tabla',
            label: 'Completá la tabla de frecuencias (f, fr, % y F)',
            type: 'freq-table',
            totalN: n,
            columns: ['f', 'fr', 'pct', 'F'],
            rows: stats.rows.map((r) => ({ x: r.value, label: `${r.value}`, f: r.f, F: r.F }))
          },
          {
            id: 'pct_hasta',
            label: `Porcentaje de estudiantes con hasta ${targetRow.value} ${ctx.unit} (%)`,
            type: 'number',
            unit: '%',
            expected: { numerator: targetRow.F * 100, denominator: n },
            roundingDecimals: 2
          }
        ],
        hints: [
          `Contá cuántas veces aparece cada valor; la suma de la columna f debe dar n = ${n}.`,
          `Para cada fila, dividí f entre ${n} para hallar fr y multiplicá por 100 para el porcentaje.`,
          `Para «hasta ${targetRow.value} ${ctx.unit}», mirá la frecuencia acumulada F en la fila de ${targetRow.value} (${targetRow.F}) y pasala a porcentaje.`
        ],
        solutionSteps: [
          `Conteo de frecuencias absolutas (f): ${stats.rows.map((r) => `${r.value} → ${r.f}`).join('; ')}. Total n = ${n}.`,
          `Frecuencias acumuladas (F): ${stats.rows.map((r) => `F(${r.value}) = ${r.F}`).join(', ')}.`,
          `Hasta ${targetRow.value} ${ctx.unit} hay F = ${targetRow.F} estudiantes de ${n}: (${targetRow.F} ÷ ${n}) × 100 = ${formatNumberAr(targetRow.F * 100 / n, { decimals: 2 })} %.`
        ]
      };
    }

    // Default: 'medidas'
    const lengths = [7, 8, 9, 10];
    const n = lengths[Math.floor(rng() * lengths.length)];
    const base = 5 + Math.floor(rng() * 4);
    const data = [];
    for (let i = 0; i < n - 2; i++) {
      data.push(base + Math.floor(rng() * 5));
    }
    // Ensure a clear single mode by repeating one value 3 times
    const modeTarget = base + 2;
    data.push(modeTarget, modeTarget);
    // Count frequencies and ensure unique mode
    let stats = computeDatasetStats(data, { kind: 'discreta' });
    while (stats.mode.modes.length !== 1) {
      data[0] = modeTarget;
      stats = computeDatasetStats(data, { kind: 'discreta' });
    }

    return {
      generatorVersion: '1.0',
      seed: seedStr,
      topic: 'medidas',
      title: `Variante reproducible (${seedStr}): Media, mediana y moda`,
      prompt: `En una actividad práctica (datos ficticios), ${n} estudiantes obtuvieron estos puntajes: ${data.join(', ')}. Calculá la media, la mediana y la moda.`,
      dataset: data,
      stats: stats,
      parts: [
        {
          id: 'media',
          label: 'Media aritmética (promedio, redondeado a 2 decimales si hace falta)',
          type: 'number',
          expected: { numerator: stats.mean.sum, denominator: n },
          roundingDecimals: 2,
          commonErrors: [
            {
              value: stats.mean.sum / stats.distinctCount,
              message: `Dividiste la suma (${stats.mean.sum}) entre la cantidad de valores distintos (${stats.distinctCount}), pero hay ${n} observaciones en total.`
            }
          ]
        },
        {
          id: 'mediana',
          label: 'Mediana (ordenando primero de menor a mayor)',
          type: 'number',
          expected: stats.median.value,
          roundingDecimals: 2
        },
        {
          id: 'moda',
          label: 'Moda (valor más frecuente)',
          type: 'number-set',
          expected: stats.mode.modes,
          maxFrequency: stats.mode.maxFrequency
        }
      ],
      hints: [
        `Hay n = ${n} datos en total. Sumá todos los valores (incluyendo los repetidos): la suma da ${stats.mean.sum}.`,
        `Ordená los datos de menor a mayor: ${stats.sortedValues.join(', ')}. Buscá el centro (${n % 2 === 0 ? 'promedio de las dos posiciones centrales' : 'posición central'}).`,
        `Fijate qué puntaje aparece más veces (${stats.mode.maxFrequency} repeticiones).`
      ],
      solutionSteps: [
        `Suma total: ${stats.sortedValues.join(' + ')} = ${stats.mean.sum}. Cantidad de datos: n = ${n}.`,
        `Media: ${stats.mean.sum} ÷ ${n} ${stats.mean.isExact2Decimals ? '=' : '≈'} ${stats.mean.formatted} puntos.`,
        `Datos ordenados: ${stats.sortedValues.join(', ')}. Posición central: (${n} + 1) ÷ 2 = ${formatNumberAr(stats.median.position)}. Mediana = ${stats.median.formatted} puntos.`,
        `Moda: el valor ${stats.mode.formatted} es el que más se repite (aparece ${stats.mode.maxFrequency} veces).`
      ]
    };
  }

  EstadisticaApp.MathEngine = {
    gcd: gcd,
    simplifyFraction: simplifyFraction,
    formatNumberAr: formatNumberAr,
    parseStudentNumber: parseStudentNumber,
    computeDatasetStats: computeDatasetStats,
    evaluatePart: evaluatePart,
    evaluateExercise: evaluateExercise,
    hashSeed: hashSeed,
    createRng: createRng,
    generateComparableVariant: generateComparableVariant
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.MathEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
