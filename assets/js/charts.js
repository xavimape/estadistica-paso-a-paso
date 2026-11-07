(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});
  const MathEngine = EstadisticaApp.MathEngine;

  function escapeHtml(str) {
    return String(str === null || str === undefined ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function chooseNiceStep(maxValue, maxGridLines) {
    const targetLines = maxGridLines || 10;
    if (!Number.isFinite(maxValue) || maxValue <= 0) return 1;
    const rawStep = maxValue / targetLines;
    if (rawStep <= 1) return 1;
    if (rawStep <= 2) return 2;
    if (rawStep <= 4) return 4;
    if (rawStep <= 5) return 5;
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const norm = rawStep / mag;
    if (norm <= 1) return 1 * mag;
    if (norm <= 2) return 2 * mag;
    if (norm <= 5) return 5 * mag;
    return 10 * mag;
  }

  /**
   * Renders an accessible SVG bar chart with graph-paper grid lines.
   */
  function renderBarChartSvg(config) {
    const cfg = config || {};
    const bars = Array.isArray(cfg.bars) ? cfg.bars : [];
    const title = cfg.title || 'Gráfico de barras';
    const xAxisLabel = cfg.xAxisLabel || 'Valores / Categorías';
    const yAxisLabel = cfg.yAxisLabel || 'Frecuencia absoluta';
    const unit = cfg.unit || '';
    const standalone = Boolean(cfg.standalone);

    const maxDataVal = bars.length > 0 ? Math.max(...bars.map((b) => Number(b.value) || 0), 1) : 4;
    const yStep = cfg.yStep && cfg.yStep > 0 ? Number(cfg.yStep) : chooseNiceStep(maxDataVal, 10);
    const numSteps = Math.max(4, Math.ceil(maxDataVal / yStep));
    const yMax = cfg.yMax && cfg.yMax >= maxDataVal ? Number(cfg.yMax) : numSteps * yStep;
    const totalGridRows = Math.round(yMax / yStep);

    // Each bar is 2 grid units wide, with 1 grid unit separation before each bar and 1 at the end
    const barUnits = 2;
    const gapUnits = 1;
    const totalXUnits = Math.max(8, bars.length * (barUnits + gapUnits) + gapUnits);

    const cellPx = 28;
    const padLeft = 74;
    const padRight = 32;
    const padTop = 58;
    const padBottom = 78;

    const plotW = Math.max(260, totalXUnits * cellPx);
    const plotH = Math.max(180, Math.min(15, totalGridRows) * cellPx);
    const svgW = padLeft + plotW + padRight;
    const svgH = padTop + plotH + padBottom;

    const scaleY = plotH / yMax;
    const unitW = plotW / totalXUnits;

    const uid = 'svg_' + Math.random().toString(36).slice(2, 9);
    const bgFill = standalone ? '#FFFFFF' : 'var(--surface-card, #FFFFFF)';
    const inkFill = standalone ? '#142E43' : 'var(--text-primary, #142E43)';
    const mutedFill = standalone ? '#455E70' : 'var(--text-secondary, #455E70)';
    const gridStroke = standalone ? '#D8E3ED' : 'var(--border-subtle, #D8E3ED)';
    const barFill = standalone ? '#007C83' : 'var(--accent-primary, #007C83)';
    const meanLineStroke = standalone ? '#B25000' : 'var(--accent-warning, #B25000)';

    const descItems = bars.map((b) => `${b.label}: ${MathEngine ? MathEngine.formatNumberAr(b.value) : b.value}${unit ? ' ' + unit : ''}`).join('; ');

    let gridLinesSvg = '';
    // Vertical grid lines (graph paper effect)
    for (let gx = 0; gx <= totalXUnits; gx++) {
      const xx = (padLeft + gx * unitW).toFixed(1);
      gridLinesSvg += `<line x1="${xx}" y1="${padTop}" x2="${xx}" y2="${padTop + plotH}" stroke="${gridStroke}" stroke-width="1" stroke-dasharray="2,2" />`;
    }

    // Horizontal grid lines and Y labels
    const stepCount = Math.round(yMax / yStep);
    for (let k = 0; k <= stepCount; k++) {
      const val = k * yStep;
      const yy = (padTop + plotH - val * scaleY).toFixed(1);
      const valStr = MathEngine ? MathEngine.formatNumberAr(val, { decimals: 1 }) : String(val);
      gridLinesSvg += `<line x1="${padLeft}" y1="${yy}" x2="${padLeft + plotW}" y2="${yy}" stroke="${gridStroke}" stroke-width="${k === 0 ? '2' : '1'}" />`;
      gridLinesSvg += `<text x="${padLeft - 10}" y="${Number(yy) + 5}" text-anchor="end" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif" font-size="13" fill="${inkFill}">${escapeHtml(valStr)}</text>`;
    }

    // Bars
    let barsSvg = '';
    bars.forEach((b, idx) => {
      const val = Math.max(0, Number(b.value) || 0);
      const xStartUnits = gapUnits + idx * (barUnits + gapUnits);
      const bx = padLeft + xStartUnits * unitW;
      const bw = barUnits * unitW;
      const bh = val * scaleY;
      const by = padTop + plotH - bh;
      const valText = MathEngine ? MathEngine.formatNumberAr(val, { decimals: 2 }) : String(val);
      const labelStr = String(b.label);
      const shortLabel = labelStr.length > 13 ? labelStr.slice(0, 12) + '…' : labelStr;

      barsSvg += `
        <g class="chart-bar-group">
          <rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(0, bh).toFixed(1)}" fill="${barFill}" rx="3" stroke="${inkFill}" stroke-width="1" />
          <text x="${(bx + bw / 2).toFixed(1)}" y="${Math.max(padTop + 12, by - 7).toFixed(1)}" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="${inkFill}">${escapeHtml(valText)}</text>
          <text x="${(bx + bw / 2).toFixed(1)}" y="${padTop + plotH + 22}" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif" font-size="13" fill="${inkFill}">${escapeHtml(shortLabel)}</text>
        </g>`;
    });

    // Optional mean marker line on Y axis if requested
    let extraAnnotationSvg = '';
    if (typeof cfg.highlightYValue === 'number' && Number.isFinite(cfg.highlightYValue)) {
      const hy = padTop + plotH - cfg.highlightYValue * scaleY;
      if (hy >= padTop && hy <= padTop + plotH) {
        extraAnnotationSvg = `<line x1="${padLeft}" y1="${hy.toFixed(1)}" x2="${padLeft + plotW}" y2="${hy.toFixed(1)}" stroke="${meanLineStroke}" stroke-width="2" stroke-dasharray="6,4" />`;
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgW} ${svgH}" width="100%" height="auto" style="max-width:${svgW}px;display:block;margin:0 auto;" role="img" aria-labelledby="${uid}_title ${uid}_desc">
  <title id="${uid}_title">${escapeHtml(title)}</title>
  <desc id="${uid}_desc">Gráfico de barras. Eje horizontal: ${escapeHtml(xAxisLabel)}. Eje vertical: ${escapeHtml(yAxisLabel)} (escala de ${escapeHtml(String(yStep))} en ${escapeHtml(String(yStep))} desde 0 hasta ${escapeHtml(String(yMax))}). Datos: ${escapeHtml(descItems)}.</desc>
  <rect x="0" y="0" width="${svgW}" height="${svgH}" rx="12" fill="${bgFill}" />
  <text x="${padLeft}" y="28" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif" font-size="16" font-weight="700" fill="${inkFill}">${escapeHtml(title)}</text>
  <text x="${padLeft}" y="46" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif" font-size="12" font-weight="600" fill="${mutedFill}">Eje Y: ${escapeHtml(yAxisLabel)} (1 cuadrito = ${escapeHtml(MathEngine ? MathEngine.formatNumberAr(yStep) : String(yStep))})</text>
  ${gridLinesSvg}
  <line x1="${padLeft}" y1="${padTop - 6}" x2="${padLeft}" y2="${padTop + plotH}" stroke="${inkFill}" stroke-width="2.5" />
  <line x1="${padLeft}" y1="${padTop + plotH}" x2="${padLeft + plotW + 8}" y2="${padTop + plotH}" stroke="${inkFill}" stroke-width="2.5" />
  ${barsSvg}
  ${extraAnnotationSvg}
  <text x="${padLeft + plotW / 2}" y="${svgH - 18}" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif" font-size="13" font-weight="700" fill="${inkFill}">Eje X: ${escapeHtml(xAxisLabel)} (ancho: 2 cuadritos, separación: 1 cuadrito)</text>
</svg>`;
  }

  /**
   * Protects a cell from spreadsheet formula injection when exporting CSV.
   */
  function sanitizeCsvCell(val) {
    if (val === null || val === undefined) return '';
    let str = typeof val === 'number' && MathEngine ? MathEngine.formatNumberAr(val, { decimals: 4 }) : String(val);
    // If starts with =, +, @, or a minus sign that is NOT a pure negative number, prefix with apostrophe
    if (/^[\s]*[=+@\t\r-]/.test(str) && typeof val !== 'number' || (/^-/.test(str) && !/^-\d+(,\d+)?$/.test(str))) {
      str = "'" + str;
    }
    if (str.includes(';') || str.includes('"') || str.includes('\n')) {
      return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
  }

  function buildCsvContent(headers, rows) {
    const headerLine = headers.map(sanitizeCsvCell).join(';');
    const bodyLines = rows.map((r) => r.map(sanitizeCsvCell).join(';'));
    return '\uFEFF' + [headerLine, ...bodyLines].join('\r\n') + '\r\n';
  }

  EstadisticaApp.Charts = {
    escapeHtml: escapeHtml,
    chooseNiceStep: chooseNiceStep,
    renderBarChartSvg: renderBarChartSvg,
    sanitizeCsvCell: sanitizeCsvCell,
    buildCsvContent: buildCsvContent
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.Charts;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
