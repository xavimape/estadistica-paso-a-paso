(function (root) {
  'use strict';

  const app = root.EstadisticaApp;
  const back = '<a class="study-back" href="#/inicio">← Volver al Inicio</a>';

  const drawings = {
    chart: `
      <svg viewBox="0 0 400 176" aria-hidden="true" focusable="false">
        <path class="study-ink" d="M39 25v119h320M39 114h5m-5-30h5m-5-30h5" fill="none" stroke-width="2"/>
        <rect class="study-bar-a" x="66" y="91" width="42" height="52" rx="4"/>
        <rect class="study-bar-b" x="124" y="39" width="42" height="104" rx="4"/>
        <rect class="study-bar-a" x="182" y="91" width="42" height="52" rx="4"/>
        <rect class="study-bar-c" x="240" y="117" width="42" height="26" rx="4"/>
        <rect class="study-bar-c" x="298" y="117" width="42" height="26" rx="4"/>
        <g class="study-svg-text" text-anchor="middle">
          <text x="87" y="83">2</text><text x="145" y="30">4</text><text x="203" y="83">2</text>
          <text x="261" y="108">1</text><text x="319" y="108">1</text>
          <text x="87" y="164">0</text><text x="145" y="164">1</text><text x="203" y="164">2</text>
          <text x="261" y="164">3</text><text x="319" y="164">4</text>
        </g>
      </svg>`,
    guide: `
      <svg viewBox="0 0 200 118" aria-hidden="true" focusable="false">
        <rect x="60" y="12" width="84" height="93" rx="7" class="study-page-drawing"/>
        <path class="study-ink" d="M80 37h42M80 53h35m-35 17h42m-42 16h25" fill="none" stroke-width="3" stroke-linecap="round"/>
        <path class="study-ink" d="m119 85 6 6 13-14" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path class="study-ink" d="M51 25v82a7 7 0 0 0 7 7h72" fill="none" stroke-width="2"/>
      </svg>`,
    video: `
      <svg viewBox="0 0 200 118" aria-hidden="true" focusable="false">
        <rect x="35" y="22" width="130" height="74" rx="10" class="study-page-drawing"/>
        <path class="study-ink" d="m93 42 24 17-24 17Z" stroke-width="3" fill="none" stroke-linejoin="round"/>
        <path class="study-ink" d="M49 85h102" stroke-width="2" stroke-linecap="round"/>
        <circle class="study-bar-b" cx="76" cy="85" r="5"/>
      </svg>`
  };

  function renderPortada() {
    return `
      <section class="study-home" aria-labelledby="home-heading">
        <p class="study-level">Estadística para 2.º año</p>
        <h2 id="home-heading" tabindex="-1">De los datos a las ideas</h2>
        <p class="study-intro">Explorá con gráficos, resolvé a tu ritmo o mirá el repaso en video.</p>

        <nav class="study-choices" aria-label="Elegí cómo estudiar">
          <a class="study-choice study-choice-featured" href="#/inicio/repaso">
            <span class="study-choice-art study-chart">${drawings.chart}</span>
            <span class="study-choice-copy">
              <span class="study-chip">Empezá acá</span>
              <strong>Repaso interactivo</strong>
              <span>Probá un desafío, repartí libros y descubrí cómo se calcula una media.</span>
              <span class="study-link-text">Empezar el repaso <span aria-hidden="true">→</span></span>
            </span>
          </a>
          <a class="study-choice" href="#/inicio/guia">
            <span class="study-choice-art study-paper">${drawings.guide}</span>
            <span class="study-choice-copy">
              <strong>Guía y práctica completa</strong>
              <span>Lecciones, ejercicios, laboratorio, simulacro y descargas.</span>
              <span class="study-link-text">Abrir la guía <span aria-hidden="true">→</span></span>
            </span>
          </a>
          <a class="study-choice" href="#/inicio/video">
            <span class="study-choice-art study-film">${drawings.video}</span>
            <span class="study-choice-copy">
              <strong>Repaso en video</strong>
              <span>Recorré el tema desde las variables hasta las medidas.</span>
              <span class="study-link-text">Ir al video <span aria-hidden="true">→</span></span>
            </span>
          </a>
        </nav>
        ${app.Missions.links()}
      </section>`;
  }

  function renderRepaso() {
    return `
      <section class="study-resource" aria-labelledby="repaso-heading">
        ${back}
        <h2 id="repaso-heading" tabindex="-1">Repaso interactivo</h2>
        <p class="study-intro">Elegí un desafío para empezar. Si querés seguir practicando, abrí la guía desde el mismo tema.</p>
        ${app.Missions.links()}
        <div class="study-activities">
          <article class="study-activity study-detective" aria-labelledby="detective-title">
            <h3 id="detective-title">Detective estadístico</h3>
            <p>En un ejemplo ficticio, cuatro estudiantes obtuvieron estas notas.</p>
            <ul class="study-data" aria-label="Las cuatro notas"><li>1</li><li>9</li><li>10</li><li>10</li></ul>
            <p>Alguien dice que la media es <strong>7,8</strong>. Sumá las notas y dividí por la cantidad de datos. ¿Qué media te da?</p>
            <form id="detective-form" class="study-answer" autocomplete="off">
              <label for="detective-answer">La media que calculaste</label>
              <div class="study-answer-row">
                <input id="detective-answer" name="media" type="text" inputmode="decimal" maxlength="24" aria-describedby="detective-feedback" />
                <button class="btn btn-primary" type="submit">Comprobar</button>
              </div>
              <p id="detective-feedback" role="status"></p>
            </form>
            <details class="study-disclosure">
              <summary>Ver solución paso a paso</summary>
              <ol>
                <li>Sumá las cuatro notas. <strong>1 + 9 + 10 + 10 = 30</strong>.</li>
                <li>Repartí ese total entre las cuatro notas. <strong>30 ÷ 4 = 7,5</strong>.</li>
                <li>Comprobá el resultado. <strong>7,5 × 4 = 30</strong>. Con 7,8, obtendrías <strong>7,8 × 4 = 31,2</strong>.</li>
              </ol>
              <p>Para la mediana, tomá las dos notas del centro, 9 y 10. Su promedio es <strong>(9 + 10) ÷ 2 = 9,5</strong>.</p>
              <p>Si comparás 1, 9, 10 y 10 con 9, 9, 10 y 10, reemplazar un 9 por un 1 baja la media de 9,5 a 7,5. Las dos notas centrales siguen siendo 9 y 10.</p>
            </details>
            <a class="study-topic-link" href="#/practica/medidas/G4-07">Practicar con otro dato extremo</a>
          </article>
          <article class="study-activity study-reparto" aria-labelledby="reparto-title">
            <h3 id="reparto-title">Repartí los libros</h3>
            <p>Hay 2, 5 y 8 libros en tres pilas. Mové los libros hasta que todas tengan la misma cantidad.</p>
            <a class="btn btn-secondary" href="actividades/reparto-media.html">Abrir actividad de reparto</a>
          </article>
        </div>
        <details class="study-disclosure study-topic-index">
          <summary>Explorar otros temas</summary>
          <ul>
            <li><a href="#/aprende/L01">Variables estadísticas</a></li>
            <li><a href="#/aprende/L04">Tablas de frecuencias</a></li>
            <li><a href="#/aprende/L06">Gráficos de barras</a></li>
            <li><a href="#/aprende/L07">Media, mediana y moda</a></li>
          </ul>
        </details>
      </section>`;
  }

  function bindDetective(container) {
    const form = container.querySelector('#detective-form');
    const input = form.elements.media;
    const feedback = container.querySelector('#detective-feedback');

    input.addEventListener('input', () => {
      feedback.textContent = '';
      input.removeAttribute('aria-invalid');
    });
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const result = app.MathEngine.parseStudentNumber(input.value, { nonNegative: true });
      if (!result.ok) {
        feedback.textContent = 'Escribí una nota con números. Podés usar coma decimal.';
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');
      feedback.textContent = result.value === 7.5
        ? '¡La media es 7,5! Abrí la solución para ver cómo comprobarla.'
        : 'Revisá la suma y dividila por 4. Para comprobar tu respuesta, multiplicala por 4 y compará con el total.';
    });
  }

  function renderVideo() {
    return `
      <section class="study-resource study-video" aria-labelledby="video-heading">
        ${back}
        <h2 id="video-heading" tabindex="-1">Repaso en video</h2>
        <p class="study-intro">Variables, tablas, gráficos y medidas de tendencia central en 7 min 08 s.</p>
        <div class="study-activity">
          <video id="study-player" controls playsinline preload="none" poster="assets/video/repaso-estadistica.jpg" aria-label="Video de repaso" hidden></video>
          <p id="video-download" hidden><a href="assets/video/repaso-estadistica.mp4" download>Descargar el video (MP4, 37 MB)</a></p>
          <details id="video-local">
            <summary>Abrir un MP4 de tu dispositivo</summary>
            <p id="video-help">Si ya descargaste el video, podés abrirlo acá para verlo sin conexión.</p>
            <label for="study-video-file">Elegí el video MP4</label>
            <input id="study-video-file" name="video" type="file" accept="video/mp4,.mp4" aria-describedby="video-help video-status" />
          </details>
          <p id="video-status" role="status"></p>
        </div>
        <a class="study-topic-link" href="#/inicio/repaso">Ir a Detective estadístico</a>
      </section>`;
  }

  function bindVideo(container) {
    const input = container.querySelector('#study-video-file');
    const player = container.querySelector('#study-player');
    const status = container.querySelector('#video-status');
    let objectUrl;

    function release() {
      if (!player.hasAttribute('src')) return;
      player.pause();
      player.removeAttribute('src');
      player.load();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = undefined;
      player.hidden = true;
    }

    if (location.protocol === 'file:') {
      container.querySelector('#video-local').open = true;
    } else {
      player.src = 'assets/video/repaso-estadistica.mp4';
      player.hidden = false;
      container.querySelector('#video-download').hidden = false;
    }

    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      if (!file.size || (file.type ? file.type !== 'video/mp4' : !/\.mp4$/i.test(file.name))) {
        status.textContent = 'Elegí un archivo de video MP4 válido.';
        input.value = '';
        return;
      }
      release();
      objectUrl = URL.createObjectURL(file);
      player.src = objectUrl;
      player.hidden = false;
      status.textContent = 'Archivo seleccionado. Pulsá Reproducir para empezar.';
    });

    player.addEventListener('error', () => {
      if (!player.hasAttribute('src')) return;
      const localFile = Boolean(objectUrl);
      release();
      input.value = '';
      container.querySelector('#video-local').open = true;
      status.textContent = localFile
        ? 'El navegador no pudo reproducir este archivo. Probá con otro video MP4.'
        : 'No se pudo cargar el video. Si ya lo descargaste, abrilo desde tu dispositivo.';
    });

    return release;
  }

  app.StudyViews = {
    render(container, page) {
      if (page === 'repaso') {
        container.innerHTML = renderRepaso();
        bindDetective(container);
      } else if (page === 'video') {
        container.innerHTML = renderVideo();
        return bindVideo(container);
      } else if (page.startsWith('mision-')) {
        app.Missions.render(container, page);
      } else {
        container.innerHTML = renderPortada();
      }
    }
  };
})(window);
