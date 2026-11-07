(function (app) {
  'use strict';

  const { computeDatasetStats, formatNumberAr, parseStudentNumber } = app.MathEngine;
  const bookData = [0, 1, 1, 1, 0, 2, 3, 2, 1, 4];
  const bookRows = computeDatasetStats(bookData).rows;
  const titles = ['Clasificá las variables', 'Organizá los datos', 'Inspeccioná el gráfico', 'Compará las medidas'];
  const lessons = ['L01', 'L04', 'L06', 'L07'];
  const practices = ['variables/G1-01', 'frecuencias/G2-01', 'barras/G3-01', 'medidas/G4-07'];

  function links() {
    return `<nav class="mission-links" aria-label="Misiones del repaso"><ul>
      ${titles.map((title, i) => `<li><a href="#/inicio/mision-${i + 1}"><span aria-hidden="true">${i + 1}</span>${title}</a></li>`).join('')}
    </ul></nav>`;
  }

  function feedback() {
    return '<p class="mission-feedback" id="mission-feedback" role="status" aria-atomic="true"></p>';
  }

  function classify(panel) {
    const categories = ['Cualitativa nominal', 'Cualitativa ordinal', 'Cuantitativa discreta', 'Cuantitativa continua'];
    const cards = [
      ['Deporte preferido', 0, 'Son categorías sin orden.'],
      ['Satisfacción (baja, media, alta)', 1, 'Las categorías tienen un orden.'],
      ['Cantidad de hermanos', 2, 'Se obtiene contando.'],
      ['Estatura', 3, 'Se obtiene midiendo.'],
      ['Número de camiseta', 0, 'El número identifica al jugador. ¿Tiene sentido sumar dos camisetas?'],
      ['Talle de remera (S, M, L)', 1, 'Los talles son etiquetas que se pueden ordenar.']
    ];
    panel.innerHTML = `
      <p>Elegí una situación y después la categoría que le corresponde.</p>
      <div class="mission-buttons" role="group" aria-label="Situaciones">
        ${cards.map(([label], i) => `<button class="btn" type="button" data-card="${i}" aria-pressed="false">${label}</button>`).join('')}
      </div>
      <div class="mission-buttons" role="group" aria-label="Categorías">
        ${categories.map((label, i) => `<button class="btn" type="button" data-category="${i}" disabled>${label}</button>`).join('')}
      </div>
      ${feedback()}
      <p id="mission-progress">0 de ${cards.length} situaciones clasificadas.</p>
      <ul id="mission-classified"></ul>`;
    const cardButtons = [...panel.querySelectorAll('[data-card]')];
    const choices = [...panel.querySelectorAll('[data-category]')];
    const status = panel.querySelector('#mission-feedback');
    let selected = null;
    let solved = 0;

    cardButtons.forEach((button, i) => button.addEventListener('click', () => {
      selected?.setAttribute('aria-pressed', 'false');
      selected = button;
      selected.setAttribute('aria-pressed', 'true');
      choices.forEach(choice => { choice.disabled = false; });
      status.textContent = `Elegiste: ${cards[i][0]}. Ahora elegí la categoría.`;
    }));

    choices.forEach((choice, i) => choice.addEventListener('click', () => {
      if (!selected || selected.disabled) return;
      const [label, expected, reason] = cards[Number(selected.dataset.card)];
      if (i !== expected) {
        status.textContent = `Probá otra categoría. Pista: ${reason}`;
        return;
      }
      const row = document.createElement('li');
      row.textContent = `${label} — ${categories[i]}.`;
      panel.querySelector('#mission-classified').append(row);
      selected.setAttribute('aria-pressed', 'false');
      selected.disabled = true;
      selected = null;
      solved++;
      panel.querySelector('#mission-progress').textContent = `${solved} de ${cards.length} situaciones clasificadas.`;
      const next = cardButtons.find(button => !button.disabled);
      (next || document.getElementById('mission-next')).focus();
      choices.forEach(button => { button.disabled = true; });
      status.textContent = next ? `¡Bien! ${reason}` : `¡Misión completa! ${reason}`;
    }));
  }

  function organize(panel) {
    const steps = [
      ['Frecuencia acumulada', 'Sumá la frecuencia de cada fila y las de las filas anteriores.', row => row.F],
      ['Frecuencia relativa', 'Dividí la frecuencia de cada fila por 10. Escribí el resultado con coma decimal.', row => row.frExact],
      ['Porcentaje', 'Multiplicá la frecuencia relativa por 100. Escribí solo el número, sin el signo %.', row => row.pctExact]
    ];
    panel.innerHTML = `
      <p>En una encuesta ficticia, diez estudiantes dijeron cuántos libros leyeron. Tocá cada dato para contarlo una vez.</p>
      <div class="mission-buttons" id="book-chips" role="group" aria-label="Datos para contar">
        ${bookData.map((value, i) => `<button type="button" class="btn" data-book="${i}" aria-label="Dato ${i + 1}: ${value} libros">${value}</button>`).join('')}
      </div>
      <p id="book-count" role="status" aria-atomic="true">0 de ${bookData.length} datos contados.</p>
      <table class="mission-table">
        <caption>Frecuencia absoluta</caption>
        <thead><tr><th scope="col">Libros</th><th scope="col">Estudiantes</th></tr></thead>
        <tbody>${bookRows.map(row => `<tr><th scope="row">${row.value}</th><td data-count="${row.value}">0</td></tr>`).join('')}</tbody>
      </table>
      <div id="frequency-step"></div>
      ${feedback()}`;
    const counts = bookRows.map(() => 0);
    const chips = [...panel.querySelectorAll('[data-book]')];
    const stage = panel.querySelector('#frequency-step');
    const status = panel.querySelector('#mission-feedback');
    let counted = 0;

    function showStep(i) {
      if (i === steps.length) {
        stage.innerHTML = `<h4 tabindex="-1">Tabla completa</h4>
          <p>Se contaron 10 datos. La última acumulada es 10, las frecuencias relativas suman 1 y los porcentajes suman 100 %.</p>
          <details><summary>Ver la tabla completa</summary>
            <div class="mission-table-scroll" tabindex="0" role="region" aria-label="Tabla completa con desplazamiento horizontal">
              <table class="mission-table">
                <thead><tr><th scope="col">Libros</th><th scope="col">Absoluta</th><th scope="col">Acumulada</th><th scope="col">Relativa</th><th scope="col">Porcentaje</th></tr></thead>
                <tbody>${bookRows.map(row => `<tr><th scope="row">${row.value}</th><td>${row.f}</td><td>${row.F}</td><td>${formatNumberAr(row.frExact)}</td><td>${row.pctExact} %</td></tr>`).join('')}</tbody>
              </table>
            </div>
          </details>`;
        stage.querySelector('h4').focus();
        status.textContent = '¡Misión completa! Usá estos mismos datos para inspeccionar el gráfico.';
        return;
      }
      const [label, explanation, expected] = steps[i];
      stage.innerHTML = `<h4 tabindex="-1">Paso ${i + 2} · ${label}</h4>
        <p>${explanation}</p>
        <form autocomplete="off">
          <div class="mission-frequency-inputs">
            ${bookRows.map(row => `<label>${row.value} libros <input name="fila-${row.value}" type="text" inputmode="${i === 0 ? 'numeric' : 'decimal'}" maxlength="16" aria-describedby="mission-feedback"></label>`).join('')}
          </div>
          <button class="btn btn-primary" type="submit">Comprobar columna</button>
        </form>`;
      stage.querySelector('h4').focus();
      const form = stage.querySelector('form');
      const inputs = [...form.querySelectorAll('input')];
      form.addEventListener('input', event => { event.target.removeAttribute('aria-invalid'); });
      form.addEventListener('submit', event => {
        event.preventDefault();
        const incorrect = inputs.filter((input, j) => {
          const parsed = parseStudentNumber(input.value, { integerOnly: i === 0, nonNegative: true, allowFraction: false });
          const invalid = !parsed.ok || Math.abs(parsed.value - expected(bookRows[j])) > 1e-9;
          if (invalid) input.setAttribute('aria-invalid', 'true');
          else input.removeAttribute('aria-invalid');
          return invalid;
        });
        if (incorrect.length) {
          status.textContent = `Revisá las filas de ${incorrect.map(input => input.name.slice(5)).join(', ')} libros. ${explanation}`;
          incorrect[0].focus();
        } else {
          status.textContent = '¡Columna correcta!';
          showStep(i + 1);
        }
      });
    }

    chips.forEach((chip, i) => chip.addEventListener('click', () => {
      if (chip.disabled) return;
      chip.disabled = true;
      const value = bookData[i];
      panel.querySelector(`[data-count="${value}"]`).textContent = ++counts[value];
      panel.querySelector('#book-count').textContent = `${++counted} de ${bookData.length} datos contados.`;
      if (counted === bookData.length) showStep(0);
      else chips.find(button => !button.disabled).focus();
    }));
  }

  function inspectChart(panel) {
    const corrections = [
      ['Espacio entre las barras', 'Ahora todas las barras tienen la misma separación.'],
      ['Altura de la barra de 3 libros', 'La tabla indica que una persona leyó 3 libros.'],
      ['Base del eje vertical', 'Desde cero, la altura representa la frecuencia completa.']
    ];
    const fixed = corrections.map(() => false);
    panel.innerHTML = `
      <p>Usá la tabla de la misión anterior para encontrar tres problemas en el gráfico. Probá una corrección y observá el cambio.</p>
      <p><strong>Libros:</strong> 0, 1, 2, 3 y 4. <strong>Estudiantes:</strong> ${bookRows.map(row => row.f).join(', ')}.</p>
      <div id="mission-chart" class="mission-chart"></div>
      <div class="mission-buttons" role="group" aria-label="Correcciones del gráfico">
        ${corrections.map(([label], i) => `<button class="btn" type="button" data-fix="${i}" aria-pressed="false">${label}</button>`).join('')}
      </div>
      ${feedback()}
      <details><summary>Ver una pista</summary><p>Compará la base del eje, la altura de la barra de 3 libros y el espacio entre las barras de 0 y 1 libros.</p></details>`;
    const chart = panel.querySelector('#mission-chart');
    const status = panel.querySelector('#mission-feedback');

    function draw() {
      const min = fixed[2] ? 0 : 1;
      const y = value => 164 - (value - min) * 134 / (4 - min);
      const ticks = Array.from({ length: 5 - min }, (_, i) => i + min);
      const height3 = fixed[1] ? bookRows[3].f : 1.6;
      chart.innerHTML = `<svg viewBox="0 0 365 205" role="img" aria-label="Libros leídos. Eje de frecuencia desde ${min}. Primeras barras ${fixed[0] ? 'separadas' : 'juntas'}. Barra de 3 libros en ${formatNumberAr(height3)}.">
        ${ticks.map(value => `<path class="mission-grid-line" d="M42 ${y(value)}H353"/><text x="32" y="${y(value) + 4}" text-anchor="end">${value}</text>`).join('')}
        <path class="mission-axis" d="M42 30V164H353" />
        <text x="42" y="18">Estudiantes</text>
        ${bookRows.map((row, i) => {
          const x = 55 + i * 60 - (i === 1 && !fixed[0] ? 20 : 0);
          const top = y(i === 3 ? height3 : row.f);
          return `<rect class="mission-bar" x="${x}" y="${top}" width="40" height="${164 - top}" /><text x="${x + 20}" y="181" text-anchor="middle">${row.value}</text>`;
        }).join('')}
        <text x="198" y="201" text-anchor="middle">Libros leídos</text>
      </svg>`;
    }

    panel.querySelectorAll('[data-fix]').forEach((button, i) => button.addEventListener('click', () => {
      fixed[i] = !fixed[i];
      button.setAttribute('aria-pressed', String(fixed[i]));
      draw();
      status.textContent = fixed.every(Boolean) ? '¡Gráfico corregido! Las cinco barras coinciden con la tabla.'
        : fixed[i] ? corrections[i][1] : 'Volviste a mostrar ese error. Compará el antes y el después.';
    }));
    draw();
  }

  function compare(panel) {
    const example = [6, 1, 0, 2, 1];
    const wages = [300000, 300000, 300000, 300000];
    let values = [...example];
    panel.innerHTML = `
      <p>Agregá o quitá números y observá qué medidas cambian. Podés usar valores negativos, cero o decimales.</p>
      <form class="mission-lab-form" autocomplete="off">
        <label>Nuevo dato <input name="dato" type="text" inputmode="decimal" maxlength="18" aria-describedby="mission-feedback"></label>
        <button type="submit" class="btn btn-primary">Agregar</button>
        <button type="button" class="btn" id="mission-example">Cargar ejemplo</button>
        <button type="button" class="btn" id="mission-clear">Limpiar</button>
      </form>
      ${feedback()}
      <div id="mission-values" class="mission-buttons" role="group" aria-label="Datos que podés quitar"></div>
      <div id="mission-measures" aria-live="polite"></div>
      <section class="mission-wages">
        <h4>¿Qué cambia con un sueldo alto?</h4>
        <p>Cuatro personas cobran $300.000 cada una. Predecí qué pasará si agregás el sueldo del gerente de $2.800.000.</p>
        <label><input type="checkbox" id="mission-wage-toggle"> Incluir el sueldo del gerente</label>
        <p id="mission-wage-result" role="status"></p>
      </section>
      <a href="actividades/reparto-media.html">Probá también el reparto de libros</a>`;
    const form = panel.querySelector('form');
    const input = form.elements.dato;
    const status = panel.querySelector('#mission-feedback');
    const chips = panel.querySelector('#mission-values');
    const results = panel.querySelector('#mission-measures');

    function draw() {
      chips.replaceChildren(...values.map((value, i) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn';
        button.textContent = `${formatNumberAr(value, { decimals: 4 })} ×`;
        button.setAttribute('aria-label', `Quitar dato ${i + 1}: ${formatNumberAr(value, { decimals: 4 })}`);
        button.addEventListener('click', () => {
          values.splice(i, 1);
          draw();
          (chips.children[Math.min(i, values.length - 1)] || input).focus();
        });
        return button;
      }));
      const stats = computeDatasetStats(values, { kind: 'continua' });
      if (!stats.ok) {
        results.textContent = 'Agregá un dato para ver las medidas.';
        return;
      }
      const points = stats.sortedValues;
      const lo = Math.min(0, ...points);
      const hi = Math.max(0, ...points);
      const spread = hi - lo;
      const x = value => spread === 0 ? 160 : 20 + (value - lo) * 280 / spread;
      const series = points.map(value => formatNumberAr(value, { decimals: 4 })).join(', ');
      results.innerHTML = `<p><strong>Datos ordenados</strong> ${series}</p>
        <svg class="mission-number-line" viewBox="0 0 320 52" aria-hidden="true">
          <path class="mission-axis" d="M20 32H300" />
          <path class="mission-axis" d="M${x(0)} 28v8" />
          <text x="${x(0)}" y="50" text-anchor="middle">0</text>
          ${stats.rows.map(row => `<circle class="mission-bar" cx="${x(row.value)}" cy="22" r="${Math.min(10, 4 + row.f)}" />`).join('')}
        </svg>
        <p class="mission-note">Cada punto ubica un valor. Los puntos más grandes indican más repeticiones.</p>
        <dl class="mission-measures">
          <div><dt>Media</dt><dd>${stats.mean.formatted}</dd></div>
          <div><dt>Mediana</dt><dd>${stats.median.formatted}</dd></div>
          <div><dt>Moda</dt><dd>${stats.mode.formatted}</dd></div>
        </dl>`;
    }

    form.addEventListener('submit', event => {
      event.preventDefault();
      const parsed = parseStudentNumber(input.value, { allowFraction: false });
      if (!parsed.ok || Math.abs(parsed.value) > 1000000) {
        input.setAttribute('aria-invalid', 'true');
        status.textContent = 'Ingresá un número entre −1.000.000 y 1.000.000.';
      } else if (values.length >= 15) {
        status.textContent = 'Podés comparar hasta 15 datos. Quitá uno para agregar otro.';
      } else {
        values.push(parsed.value);
        input.value = '';
        input.removeAttribute('aria-invalid');
        status.textContent = 'Dato agregado.';
        draw();
      }
      input.focus();
    });
    input.addEventListener('input', () => { input.removeAttribute('aria-invalid'); });
    panel.querySelector('#mission-example').addEventListener('click', () => {
      values = [...example];
      status.textContent = 'Ejemplo cargado.';
      draw();
    });
    panel.querySelector('#mission-clear').addEventListener('click', () => {
      values = [];
      status.textContent = 'Datos eliminados.';
      draw();
    });
    const toggle = panel.querySelector('#mission-wage-toggle');
    const wageResult = panel.querySelector('#mission-wage-result');
    function showWages() {
      const stats = computeDatasetStats(toggle.checked ? [...wages, 2800000] : wages);
      const asMoney = value => formatNumberAr(value, { fixedDecimals: 0, useThousands: true, currency: true });
      wageResult.textContent = `Media ${asMoney(stats.mean.value)}. Mediana ${asMoney(stats.median.value)}.`
        + (toggle.checked ? ' En este ejemplo, el sueldo alto eleva la media y los valores centrales siguen siendo $300.000.' : '');
    }
    toggle.addEventListener('change', showWages);
    draw();
    showWages();
  }

  const activities = [classify, organize, inspectChart, compare];

  function render(container, page) {
    const i = Number(page.slice(-1)) - 1;
    const next = i === titles.length - 1 ? '#/inicio/repaso' : `#/inicio/mision-${i + 2}`;
    container.innerHTML = `
      <section class="study-resource mission" aria-labelledby="mission-heading">
        <a class="study-back" href="#/inicio/repaso">← Volver al repaso</a>
        <p class="study-level">Misión ${i + 1} de ${titles.length}</p>
        <h2 id="mission-heading" tabindex="-1">${titles[i]}</h2>
        <div class="study-activity mission-panel"></div>
        <nav class="mission-footer" aria-label="Continuar estudiando">
          <a class="btn" href="#/inicio">Inicio</a>
          <a class="btn" href="#/aprende/${lessons[i]}">Leer la lección</a>
          <a class="btn" href="#/practica/${practices[i]}">Abrir ejercicio</a>
          <a class="btn btn-primary" id="mission-next" href="${next}">${i === titles.length - 1 ? 'Volver al repaso' : 'Siguiente misión'}</a>
        </nav>
      </section>`;
    activities[i](container.querySelector('.mission-panel'));
  }

  app.Missions = { links, render };
})(window.EstadisticaApp);
