'use strict';

const NUEVOS_3_4_INT = [
  // ================= TEMA 3: BARRAS (N3-01 a N3-12) =================
  {
    id: 'N3-01',
    title: 'Lectura directa de frecuencias desde un gráfico de barras',
    source: { kind: 'nuevo', label: 'Práctica N3-01' },
    topic: 'barras',
    level: 'inicial',
    skills: ['lectura-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'En el gráfico de barras de las fichas («Libros leídos por 10 estudiantes»), las alturas de las barras para 0, 1, 2, 3 y 4 libros son: barra de 0 = 2; barra de 1 = 4; barra de 2 = 2; barra de 3 = 1; barra de 4 = 1. Respondé leyendo los valores del gráfico.',
    chartPreview: {
      title: 'Libros leídos por 10 estudiantes',
      xAxisLabel: 'Cantidad de libros',
      yAxisLabel: 'Cantidad de estudiantes',
      yStep: 1,
      yMax: 4,
      bars: [
        { label: '0', value: 2 },
        { label: '1', value: 4 },
        { label: '2', value: 2 },
        { label: '3', value: 1 },
        { label: '4', value: 1 }
      ]
    },
    parts: [
      {
        id: 'max_frec',
        label: '1. ¿Cuántos estudiantes alcanzan la barra más alta (la de 1 libro)?',
        type: 'number',
        integerOnly: true,
        expected: 4
      },
      {
        id: 'total_lectura',
        label: '2. Sumando la altura de todas las barras, ¿cuántos estudiantes fueron consultados en total?',
        type: 'number',
        integerOnly: true,
        expected: 10
      },
      {
        id: 'valor_moda',
        label: '3. Mirando qué barra es la más alta, ¿cuál es la moda (Mo) de libros leídos?',
        type: 'number',
        integerOnly: true,
        expected: 1,
        commonErrors: [
          { value: 4, message: '4 es la altura de la barra (4 estudiantes), pero el valor de la variable en el eje horizontal para esa barra es 1 libro.' }
        ]
      }
    ],
    hints: [
      'La altura en el eje Y indica cuántos estudiantes tienen ese valor.',
      'Sumá las cinco alturas: 2 + 4 + 2 + 1 + 1.',
      'La barra más alta está sobre el valor «1 libro» en el eje X.'
    ],
    solutionSteps: [
      'La barra más alta llega a 4 estudiantes (sobre el valor 1 libro).',
      'Suma de las alturas: 2 + 4 + 2 + 1 + 1 = 10 estudiantes en total.',
      'La moda es el valor en el eje X cuya barra es más alta: Mo = 1 libro.'
    ],
    commonErrorNote: 'En un gráfico de frecuencias, la moda se lee en la base de la barra más alta (eje X), mientras que la altura (eje Y) es su frecuencia.'
  },
  {
    id: 'N3-02',
    title: 'Identificar el ancho y separación recomendados en hoja cuadriculada',
    source: { kind: 'nuevo', label: 'Práctica N3-02' },
    topic: 'barras',
    level: 'inicial',
    skills: ['construir-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Vas a dibujar un gráfico de barras con 5 categorías en tu hoja cuadriculada siguiendo la regla práctica de la guía: 1 cuadrito libre antes de la primera barra, 2 cuadritos de ancho para cada barra y 1 cuadrito libre de separación entre barras. ¿Cuántos cuadritos horizontales ocupará ese tramo en el eje X?',
    parts: [
      {
        id: 'ancho_5_barras',
        label: '1. ¿Cuántos cuadritos suman los anchos de las 5 barras juntas (5 × 2)?',
        type: 'number',
        integerOnly: true,
        expected: 10
      },
      {
        id: 'espacios_totales',
        label: '2. Contando el cuadrito previo a cada una de las 5 barras (5 espacios de 1 cuadrito), ¿cuántos cuadritos suman barras más espacios?',
        type: 'number',
        integerOnly: true,
        expected: 15
      }
    ],
    hints: [
      'Cada barra ocupa 2 cuadritos de ancho: para 5 barras son 5 × 2 = 10 cuadritos.',
      'Cada barra lleva 1 cuadrito de espacio previo (1 + 2 = 3 cuadritos por categoría).',
      'Para 5 categorías: 5 × 3 = 15 cuadritos (y conviene dejar 1 cuadrito más al final para la flecha del eje).'
    ],
    solutionSteps: [
      'Ancho de las 5 barras: 5 × 2 = 10 cuadritos.',
      'Con 1 cuadrito de separación previo por cada barra (5 espacios): 10 + 5 = 15 cuadritos horizontales.'
    ],
    commonErrorNote: 'Planificar los cuadritos del eje X antes de trazar evita que la última barra quede apretada en el borde de la hoja.'
  },
  {
    id: 'N3-03',
    title: 'Construir el gráfico del ejemplo de 20 estudiantes de la guía',
    source: { kind: 'nuevo', label: 'Práctica N3-03' },
    topic: 'barras',
    level: 'inicial',
    skills: ['construir-barras', 'elegir-escala'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Con la tabla del ejemplo guiado de la guía (n = 20 estudiantes: 0 libros → 3; 1 libro → 8; 2 libros → 6; 3 libros → 2; 4 libros → 1), configurá el gráfico de barras.',
    parts: [
      {
        id: 'constructor',
        label: 'Elegí una escala uniforme (1 o 2 estudiantes por cuadrito) y completá la frecuencia de cada barra',
        type: 'bar-builder',
        unit: 'estudiantes',
        inputMode: 'value',
        maxGridCells: 12,
        validScaleSteps: [1, 2],
        bars: [
          { key: 'b0', label: '0 libros', value: 3 },
          { key: 'b1', label: '1 libro', value: 8 },
          { key: 'b2', label: '2 libros', value: 6 },
          { key: 'b3', label: '3 libros', value: 2 },
          { key: 'b4', label: '4 libros', value: 1 }
        ]
      }
    ],
    hints: [
      'Como la frecuencia máxima es 8, la escala de 1 cuadrito = 1 estudiante ocupa apenas 8 cuadritos de alto.',
      'Copiá en cada barra su frecuencia absoluta correspondiente: 3, 8, 6, 2 y 1.'
    ],
    solutionSteps: [
      'Escala en Eje Y: 1 cuadrito = 1 estudiante (de 0 a 8) o 1 cuadrito = 2 estudiantes.',
      'Alturas: 0 libros = 3; 1 libro = 8; 2 libros = 6; 3 libros = 2; 4 libros = 1.'
    ],
    commonErrorNote: 'Verificá que la suma de las alturas de las barras (3 + 8 + 6 + 2 + 1 = 20) coincida con n = 20.'
  },
  {
    id: 'N3-04',
    title: 'Pasar de un gráfico de barras a una tabla de frecuencias',
    source: { kind: 'nuevo', label: 'Práctica N3-04' },
    topic: 'barras',
    level: 'inicial',
    skills: ['grafico-a-tabla', 'porcentaje'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Un gráfico de barras sobre el club o deporte elegido en el patio muestra cuatro barras con estas alturas: Vóley = 10, Básquet = 6, Fútbol = 5, Ajedrez = 4. Construí la tabla de frecuencias (f, fr y %) a partir del gráfico.',
    chartPreview: {
      title: 'Actividad elegida en el patio (n = 25)',
      xAxisLabel: 'Actividad',
      yAxisLabel: 'Estudiantes',
      yStep: 2,
      yMax: 12,
      bars: [
        { label: 'Vóley', value: 10 },
        { label: 'Básquet', value: 6 },
        { label: 'Fútbol', value: 5 },
        { label: 'Ajedrez', value: 4 }
      ]
    },
    parts: [
      {
        id: 'tabla_desde_grafico',
        label: 'Completá f, fr y % leyendo las alturas del gráfico (total n = 25)',
        type: 'freq-table',
        totalN: 25,
        columns: ['f', 'fr', 'pct'],
        rows: [
          { x: 'Vóley', label: 'Vóley', f: 10 },
          { x: 'Básquet', label: 'Básquet', f: 6 },
          { x: 'Fútbol', label: 'Fútbol', f: 5 },
          { x: 'Ajedrez', label: 'Ajedrez', f: 4 }
        ]
      }
    ],
    hints: [
      'La altura de cada barra es su frecuencia absoluta f: 10, 6, 5 y 4 (suman n = 25).',
      'Dividí cada altura entre 25 para hallar fr: 10/25 = 0,40; 6/25 = 0,24; 5/25 = 0,20; 4/25 = 0,16.',
      'Multiplicá por 100 para obtener los porcentajes: 40 %, 24 %, 20 % y 16 %.'
    ],
    solutionSteps: [
      'Total de observaciones leídas del gráfico: n = 10 + 6 + 5 + 4 = 25.',
      'Vóley: f = 10 → fr = 0,40 → 40 %.',
      'Básquet: f = 6 → fr = 0,24 → 24 %.',
      'Fútbol: f = 5 → fr = 0,20 → 20 %.',
      'Ajedrez: f = 4 → fr = 0,16 → 16 %.'
    ],
    commonErrorNote: 'Como es una variable cualitativa nominal, la tabla incluye f, fr y %, pero no columna acumulada F.'
  },
  {
    id: 'N3-05',
    title: 'Elegir una escala para valores grandes (máximo 60 en 12 cuadritos)',
    source: { kind: 'nuevo', label: 'Práctica N3-05' },
    topic: 'barras',
    level: 'intermedio',
    skills: ['elegir-escala'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Se recolectaron botellas plásticas para reciclar en tres cursos: 2.º A juntó 45 botellas, 2.º B juntó 60 botellas y 2.º C juntó 30 botellas. Si disponés de 12 cuadritos verticales para el eje Y, ¿cuántas botellas debe representar como mínimo cada cuadrito y qué altura tendrá cada barra con escala de 5 botellas por cuadrito?',
    parts: [
      {
        id: 'escala_minima',
        label: '1. Si el máximo es 60 botellas y hay 12 cuadritos disponibles, ¿cuántas botellas representa 1 cuadrito al hacer 60 ÷ 12?',
        type: 'number',
        expected: 5
      },
      {
        id: 'alt_45',
        label: '2. Con escala 1 cuadrito = 5 botellas, ¿cuántos cuadritos de alto mide la barra de 2.º A (45 botellas)?',
        type: 'number',
        expected: 9
      },
      {
        id: 'alt_30',
        label: '3. ¿Y cuántos cuadritos mide la barra de 2.º C (30 botellas)?',
        type: 'number',
        expected: 6
      }
    ],
    hints: [
      'Dividí el valor máximo (60) por los cuadritos disponibles (12): 60 ÷ 12 = 5 botellas por cuadrito.',
      'Con esa escala, dividí cada cantidad por 5: 45 ÷ 5 = 9 cuadritos y 30 ÷ 5 = 6 cuadritos.'
    ],
    solutionSteps: [
      'Escala elegida: 1 cuadrito = 5 botellas (el eje Y avanza 0, 5, 10, 15, ..., 60 en 12 cuadritos).',
      'Alturas: 2.º A (45) → 9 cuadritos; 2.º B (60) → 12 cuadritos; 2.º C (30) → 6 cuadritos.'
    ],
    commonErrorNote: 'Para elegir rápido una escala, dividí el valor máximo por la cantidad de cuadritos disponibles y redondeá hacia arriba a un paso cómodo (como 2, 5 o 10).'
  },
  {
    id: 'N3-06',
    title: 'Detectar un gráfico engañoso con el eje vertical cortado (sin empezar en 0)',
    source: { kind: 'nuevo', label: 'Práctica N3-06' },
    topic: 'barras',
    level: 'intermedio',
    skills: ['detectar-errores-graficos'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Dos listas estudiantiles recibieron 52 votos (Lista Celeste) y 56 votos (Lista Blanca). Alguien dibujó un gráfico de barras haciendo que el eje vertical empiece en 50 en vez de 0: así, la barra de 52 sube 2 cuadritos y la de 56 sube 6 cuadritos (parece el triple de alta). Analizá por qué es engañoso.',
    parts: [
      {
        id: 'razon_real',
        label: '1. ¿Por qué es engañoso empezar el eje vertical de un gráfico de barras en 50 en lugar de 0?',
        type: 'select',
        options: [
          {
            value: 'rompe_proporcionalidad',
            label: 'Porque las alturas dejan de ser proporcionales a los datos reales: 56 no es el triple de 52 (apenas supera a 52 en 4 votos), pero al recortar la base parece tres veces mayor'
          },
          {
            value: 'es_correcto',
            label: 'No tiene ningún problema, siempre conviene empezar el eje en 50'
          }
        ],
        expected: 'rompe_proporcionalidad'
      },
      {
        id: 'altura_correcta',
        label: '2. Si el eje empieza correctamente en 0 con escala 1 cuadrito = 8 votos, ¿cuántos cuadritos mide la barra de 56 votos?',
        type: 'number',
        expected: 7
      },
      {
        id: 'altura_52',
        label: '3. Y con esa misma escala desde 0 (1 cuadrito = 8 votos), ¿cuántos cuadritos mide la barra de 52 votos?',
        type: 'number',
        expected: 6.5
      }
    ],
    hints: [
      'En un gráfico de barras la vista compara el largo completo de cada rectángulo desde la base.',
      'Si la base no es 0, un rectángulo de 6 cuadritos parece el triple que uno de 2 cuadritos, aunque 56 y 52 sean casi iguales.',
      'Desde 0 con 8 votos por cuadrito: 56 ÷ 8 = 7 cuadritos y 52 ÷ 8 = 6,5 cuadritos (se ve que son muy parecidos).'
    ],
    solutionSteps: [
      'Un gráfico de barras debe tener su base en 0 para que la altura visual sea proporcional a la magnitud representada.',
      'Con base en 0 y escala de 8 votos por cuadrito, 56 votos ocupa 7 cuadritos y 52 votos ocupa 6,5 cuadritos, reflejando fielmente la pequeña diferencia.'
    ],
    commonErrorNote: 'Regla fundamental: en todo gráfico de barras el eje de frecuencias o cantidades debe comenzar en 0.'
  },
  {
    id: 'N3-07',
    title: 'Identificar la barra mal dibujada comparando tabla y gráfico',
    source: { kind: 'nuevo', label: 'Práctica N3-07' },
    topic: 'barras',
    level: 'intermedio',
    skills: ['detectar-errores-graficos', 'lectura-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'La tabla de una encuesta indica: Frutilla = 14, Chocolate = 18, Dulce de leche = 16, Vainilla = 8 (escala 1 cuadrito = 2 votos). Al revisar el dibujo de un compañero, ves que las alturas en cuadritos que trazó son: Frutilla = 7 cuadritos, Chocolate = 9 cuadritos, Dulce de leche = 6 cuadritos, Vainilla = 4 cuadritos. ¿Qué barra está mal trazada y qué altura debería tener?',
    parts: [
      {
        id: 'barra_erronea',
        label: '1. ¿Cuál de las cuatro barras no coincide con la tabla?',
        type: 'select',
        options: [
          { value: 'ddl', label: 'Dulce de leche (dibujó 6 cuadritos, que representan 12 votos en lugar de 16)' },
          { value: 'frutilla', label: 'Frutilla (7 cuadritos × 2 = 14 votos)' },
          { value: 'chocolate', label: 'Chocolate (9 cuadritos × 2 = 18 votos)' },
          { value: 'vainilla', label: 'Vainilla (4 cuadritos × 2 = 8 votos)' }
        ],
        expected: 'ddl'
      },
      {
        id: 'altura_ddl_correcta',
        label: '2. ¿Cuántos cuadritos de altura debe medir la barra de «Dulce de leche» (16 votos) con escala de 2 votos por cuadrito?',
        type: 'number',
        expected: 8
      }
    ],
    hints: [
      'Multiplicá los cuadritos dibujados por 2 votos/cuadrito para ver qué valor representa cada barra.',
      'Frutilla: 7×2 = 14 (bien); Chocolate: 9×2 = 18 (bien); Dulce de leche: 6×2 = 12 (¡pero la tabla dice 16!).',
      'Para representar 16 votos con 2 votos por cuadrito se necesitan 16 ÷ 2 = 8 cuadritos.'
    ],
    solutionSteps: [
      'Con escala 1 cuadrito = 2 votos: Frutilla = 14÷2 = 7 cuadritos; Chocolate = 18÷2 = 9 cuadritos; Vainilla = 8÷2 = 4 cuadritos.',
      'La barra de Dulce de leche fue dibujada de 6 cuadritos (12 votos), pero su frecuencia es 16 → debe medir 16 ÷ 2 = 8 cuadritos.'
    ],
    commonErrorNote: 'Al terminar un gráfico, revisá barra por barra que su altura coincida con la fila correspondiente de la tabla.'
  },
  {
    id: 'N3-08',
    title: 'Gráfico con eje vertical en porcentajes (%)',
    source: { kind: 'nuevo', label: 'Práctica N3-08' },
    topic: 'barras',
    level: 'intermedio',
    skills: ['construir-barras', 'porcentaje'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Con los datos de transporte de n = 40 estudiantes (Colectivo: 40 %, Moto: 25 %, Bicicleta: 20 %, Caminando: 15 %), se quiere construir un gráfico de barras cuyo eje vertical muestre porcentajes (%) usando la escala 1 cuadrito = 5 %. Calculá cuántos cuadritos sube cada barra.',
    parts: [
      {
        id: 'constructor_pct',
        label: 'Con escala 1 cuadrito = 5 %, ingresá la altura en cuadritos de cada medio de transporte',
        type: 'bar-builder',
        unit: 'cuadritos',
        inputMode: 'cells',
        maxGridCells: 12,
        validScaleSteps: [5],
        bars: [
          { key: 'col', label: 'Colectivo (40 %)', value: 40 },
          { key: 'moto', label: 'Moto (25 %)', value: 25 },
          { key: 'bici', label: 'Bicicleta (20 %)', value: 20 },
          { key: 'cam', label: 'Caminando (15 %)', value: 15 }
        ]
      }
    ],
    hints: [
      'Dividí cada porcentaje entre 5 % por cuadrito.',
      'Colectivo: 40 ÷ 5 = 8 cuadritos; Moto: 25 ÷ 5 = 5 cuadritos; Bicicleta: 20 ÷ 5 = 4 cuadritos; Caminando: 15 ÷ 5 = 3 cuadritos.'
    ],
    solutionSteps: [
      'Con 1 cuadrito = 5 %, el eje Y se gradúa 0 %, 5 %, 10 %, ..., 40 %.',
      'Alturas en cuadritos: Colectivo = 8; Moto = 5; Bicicleta = 4; Caminando = 3.'
    ],
    commonErrorNote: 'Observá que las barras de frecuencias absolutas (16, 10, 8, 6 con escala 2) y las de porcentajes (40 %, 25 %, 20 %, 15 % con escala 5 %) tienen exactamente las mismas alturas en cuadritos (8, 5, 4 y 3) porque son proporcionales.'
  },
  {
    id: 'N3-09',
    title: 'Hallar la escala desconocida de un gráfico a partir de una barra',
    source: { kind: 'nuevo', label: 'Práctica N3-09' },
    topic: 'barras',
    level: 'desafio',
    skills: ['proporcionalidad-barras', 'lectura-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'En un gráfico de barras se borró la numeración del eje Y, pero sabemos por el texto que la barra de «Teatro» representa 18 estudiantes y tiene 6 cuadritos de altura. En ese mismo gráfico, la barra de «Coro» mide 4 cuadritos y la de «Orquesta» mide 5,5 cuadritos. Descubrí la escala y cuántos estudiantes hay en Coro y en Orquesta.',
    parts: [
      {
        id: 'escala',
        label: '1. ¿Cuántos estudiantes representa cada cuadrito del eje Y (18 ÷ 6)?',
        type: 'number',
        expected: 3
      },
      {
        id: 'coro',
        label: '2. ¿Cuántos estudiantes hay en «Coro» (4 cuadritos)?',
        type: 'number',
        integerOnly: true,
        expected: 12
      },
      {
        id: 'orquesta',
        label: '3. Si hubiera otra barra de 7 cuadritos, ¿cuántos estudiantes representaría?',
        type: 'number',
        integerOnly: true,
        expected: 21
      }
    ],
    hints: [
      'Como la escala es uniforme, si 6 cuadritos equivalen a 18 estudiantes, 1 cuadrito equivale a 18 ÷ 6 = 3 estudiantes.',
      'Multiplicá la altura en cuadritos de cada barra por 3 estudiantes/cuadrito.'
    ],
    solutionSteps: [
      'Escala del eje Y: 18 estudiantes ÷ 6 cuadritos = 3 estudiantes por cuadrito.',
      'Coro (4 cuadritos): 4 × 3 = 12 estudiantes.',
      'Barra de 7 cuadritos: 7 × 3 = 21 estudiantes.'
    ],
    commonErrorNote: 'La proporcionalidad directa entre altura y frecuencia permite deducir cualquier barra conociendo una sola referencia.'
  },
  {
    id: 'N3-10',
    title: 'Calcular una medida de tendencia central leyendo un gráfico de barras',
    source: { kind: 'nuevo', label: 'Práctica N3-10' },
    topic: 'barras',
    level: 'desafio',
    skills: ['lectura-barras', 'media'],
    lessonId: 'L07',
    allowComparableVariant: false,
    prompt: 'Un gráfico de barras muestra la cantidad de hermanos de un grupo de estudiantes: la barra de «0 hermanos» llega a 3; la de «1 hermano» llega a 5; la de «2 hermanos» llega a 2. A partir del gráfico, calculá cuántos estudiantes hay en total, cuántos hermanos suman en conjunto y cuál es el promedio de hermanos por estudiante.',
    chartPreview: {
      title: 'Cantidad de hermanos en un grupo de 10 estudiantes',
      xAxisLabel: 'Número de hermanos',
      yAxisLabel: 'Cantidad de estudiantes',
      yStep: 1,
      yMax: 5,
      bars: [
        { label: '0', value: 3 },
        { label: '1', value: 5 },
        { label: '2', value: 2 }
      ]
    },
    parts: [
      {
        id: 'n_total',
        label: '1. Total de estudiantes (n = suma de alturas)',
        type: 'number',
        integerOnly: true,
        expected: 10
      },
      {
        id: 'suma_hermanos',
        label: '2. Suma total de hermanos (0×3 + 1×5 + 2×2)',
        type: 'number',
        integerOnly: true,
        expected: 9
      },
      {
        id: 'media_hermanos',
        label: '3. Promedio (media x̄) de hermanos por estudiante',
        type: 'number',
        unit: 'hermanos',
        expected: 0.9,
        roundingDecimals: 2
      }
    ],
    hints: [
      'Sumá las alturas de las tres barras para hallar n: 3 + 5 + 2 = 10 estudiantes.',
      'Multiplicá cada valor del eje X por la altura de su barra: 0×3 = 0; 1×5 = 5; 2×2 = 4 → suma = 9 hermanos.',
      'Dividí 9 hermanos entre 10 estudiantes.'
    ],
    solutionSteps: [
      'Total de estudiantes: n = 3 + 5 + 2 = 10.',
      'Suma de productos (x · f): 0×3 + 1×5 + 2×2 = 0 + 5 + 4 = 9 hermanos.',
      'Media aritmética: x̄ = 9 ÷ 10 = 0,9 hermanos por estudiante.'
    ],
    commonErrorNote: 'No promedies las alturas de las barras ((3+5+2)÷3): lo que se promedia son los valores de la variable ponderados por su frecuencia.'
  },
  {
    id: 'N3-11',
    title: 'Comparación de dos gráficos con distintas escalas verticales',
    source: { kind: 'nuevo', label: 'Práctica N3-11' },
    topic: 'barras',
    level: 'desafio',
    skills: ['comparar-graficos', 'elegir-escala'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Dos grupos graficaron cuántas plantas germinaron en el vivero. En el Gráfico 1 (usando 1 cuadrito = 1 planta), la barra de «Tomate» mide 8 cuadritos. En el Gráfico 2 (usando 1 cuadrito = 3 plantas), la barra de «Tomate» mide 4 cuadritos. ¿En cuál de los dos gráficos hubo mayor cantidad de plantas de tomate germinadas?',
    parts: [
      {
        id: 'plantas_g1',
        label: '1. ¿Cuántas plantas representa la barra de 8 cuadritos en el Gráfico 1 (1 cuadrito = 1 planta)?',
        type: 'number',
        integerOnly: true,
        expected: 8
      },
      {
        id: 'plantas_g2',
        label: '2. ¿Cuántas plantas representa la barra de 4 cuadritos en el Gráfico 2 (1 cuadrito = 3 plantas)?',
        type: 'number',
        integerOnly: true,
        expected: 12
      },
      {
        id: 'conclusion',
        label: '3. ¿Qué conclusión sacás al comparar dos gráficos separados?',
        type: 'select',
        options: [
          {
            value: 'mirar_escala',
            label: 'Antes de comparar alturas visuales entre dos gráficos distintos, hay que leer la escala del eje Y: en el Gráfico 2 hay más plantas (12 > 8) aunque su barra ocupe menos cuadritos'
          },
          {
            value: 'mas_cuadritos_siempre_gana',
            label: 'Siempre tiene mayor valor la barra que ocupa más cuadritos sin importar la escala'
          }
        ],
        expected: 'mirar_escala'
      }
    ],
    hints: [
      'En el Gráfico 1: 8 cuadritos × 1 planta/cuadrito = 8 plantas.',
      'En el Gráfico 2: 4 cuadritos × 3 plantas/cuadrito = 12 plantas.',
      '12 plantas es mayor que 8 plantas, aunque 4 cuadritos sea más bajo en el papel que 8 cuadritos.'
    ],
    solutionSteps: [
      'Gráfico 1: 8 × 1 = 8 plantas.',
      'Gráfico 2: 4 × 3 = 12 plantas.',
      'Al comparar dos gráficos diferentes, siempre hay que verificar primero la escala graduada de cada eje Y.'
    ],
    commonErrorNote: 'Si dos gráficos se van a presentar juntos para compararlos a simple vista, conviene dibujarlos con la misma escala.'
  },
  {
    id: 'N3-12',
    title: 'Redactar una conclusión completa a partir de un gráfico de barras',
    source: { kind: 'nuevo', label: 'Práctica N3-12' },
    topic: 'barras',
    level: 'desafio',
    skills: ['comunicar-resultados', 'lectura-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'En un gráfico sobre el tipo de lectura preferida por n = 40 estudiantes, las frecuencias son: Cuentos = 18, Novelas = 10, Historietas = 8, Poesía = 4. Calculá el porcentaje de la categoría más elegida y redactá una conclusión clara que comunique los resultados.',
    parts: [
      {
        id: 'pct_cuentos',
        label: '1. ¿Qué porcentaje del total de 40 estudiantes eligió «Cuentos» (f = 18) (%)?',
        type: 'number',
        unit: '%',
        expected: 45
      },
      {
        id: 'conclusion_rubrica',
        label: '2. Redactá una conclusión breve sobre el gráfico y autoevaluala con la rúbrica',
        type: 'rubric',
        placeholder: 'Mencioná cuál fue la categoría más elegida (moda), su cantidad o porcentaje, y el total de encuestados...',
        criteria: [
          'Identifiqué a «Cuentos» como la categoría más frecuente (moda), con 18 de los 40 estudiantes (45 %).',
          'Mencioné el contraste con las demás categorías o con la menos elegida («Poesía», con 4 estudiantes o 10 %).'
        ],
        modelAnswer: 'Sobre un total de 40 estudiantes consultados, la opción más elegida (moda) fue Cuentos con 18 respuestas (el 45 % del grupo), seguida por Novelas (10) e Historietas (8), mientras que Poesía fue la menos frecuente con 4 respuestas (10 %).'
      }
    ],
    hints: [
      'Calculá (18 ÷ 40) × 100 = 45 %.',
      'Una buena conclusión estadística nombra el total (40 estudiantes), la moda (Cuentos, 18 o 45 %) y el contraste con la menor frecuencia.'
    ],
    solutionSteps: [
      'Porcentaje de Cuentos: (18 ÷ 40) × 100 = 45 %.',
      'Conclusión: Cuentos es la moda de la distribución (18 de 40 estudiantes, 45 %), superando ampliamente a las demás opciones.'
    ],
    commonErrorNote: 'Comunicar resultados no es solo repetir la lista de números: es destacar qué predomina y en qué proporción.'
  },

  // ================= TEMA 4: MEDIDAS (N4-01 a N4-12) =================
  {
    id: 'N4-01',
    title: 'Media aritmética como reparto equitativo (5 datos)',
    source: { kind: 'nuevo', label: 'Práctica N4-01' },
    topic: 'medidas',
    level: 'inicial',
    skills: ['media'],
    lessonId: 'L07',
    allowComparableVariant: true,
    prompt: 'En el ejemplo de la Ficha 6, cinco estudiantes leyeron esta cantidad de libros: 0, 1, 1, 2, 6. Calculá la suma total de libros y el promedio (media) por estudiante.',
    dataset: [0, 1, 1, 2, 6],
    parts: [
      {
        id: 'suma',
        label: '1. Suma total de libros (0 + 1 + 1 + 2 + 6)',
        type: 'number',
        integerOnly: true,
        expected: 10
      },
      {
        id: 'media',
        label: '2. Media aritmética (x̄) en libros por estudiante',
        type: 'number',
        unit: 'libros',
        expected: 2,
        commonErrors: [
          { value: 2.5, message: 'Dividiste entre 4 (quizás olvidando contar el 0). El 0 también es un estudiante: hay n = 5 datos (10 ÷ 5 = 2).' }
        ]
      }
    ],
    hints: [
      'Sumá los 5 números: 0 + 1 + 1 + 2 + 6 = 10.',
      'El estudiante que leyó 0 libros también forma parte del grupo: hay n = 5 estudiantes.',
      'Dividí 10 entre 5.'
    ],
    solutionSteps: [
      'Suma de todos los datos: 0 + 1 + 1 + 2 + 6 = 10 libros.',
      'Cantidad de observaciones: n = 5 estudiantes.',
      'Media aritmética: x̄ = 10 ÷ 5 = 2 libros por estudiante.'
    ],
    commonErrorNote: 'Nunca excluyas los ceros al contar la cantidad de datos n para el promedio.'
  },
  {
    id: 'N4-02',
    title: 'Media, mediana y moda desde la tabla de 20 estudiantes de la guía',
    source: { kind: 'nuevo', label: 'Práctica N4-02' },
    topic: 'medidas',
    level: 'inicial',
    skills: ['media-tabla', 'mediana-par', 'moda'],
    lessonId: 'L07',
    allowComparableVariant: true,
    prompt: 'En el ejemplo integrador de la guía (n = 20 estudiantes), los libros leídos fueron: 0 libros (f=3), 1 libro (f=8), 2 libros (f=6), 3 libros (f=2), 4 libros (f=1). Calculá la suma total de libros usando los productos (x · f), la media, la mediana y la moda.',
    parts: [
      {
        id: 'suma_productos',
        label: '1. Suma total de libros Σ(x · f) = 0×3 + 1×8 + 2×6 + 3×2 + 4×1',
        type: 'number',
        integerOnly: true,
        expected: 30,
        commonErrors: [
          { value: 10, message: '10 es la suma de los valores distintos (0+1+2+3+4) sin multiplicar por sus frecuencias. Multiplicá cada valor por su f.' }
        ]
      },
      {
        id: 'media',
        label: '2. Media aritmética (x̄ = 30 ÷ 20) en libros',
        type: 'number',
        unit: 'libros',
        expected: 1.5,
        roundingDecimals: 2,
        commonErrors: [
          { value: 6, message: 'Dividiste 30 entre 5 (la cantidad de filas), pero hay n = 20 estudiantes en total: 30 ÷ 20 = 1,5.' }
        ]
      },
      {
        id: 'mediana',
        label: '3. Mediana (Me) buscando las posiciones 10 y 11 en la acumulada (F₁=3, F₂=11)',
        type: 'number',
        unit: 'libros',
        expected: 1
      },
      {
        id: 'moda',
        label: '4. Moda (Mo) de libros leídos',
        type: 'number-set',
        expected: [1],
        maxFrequency: 8
      }
    ],
    hints: [
      'Sumá los productos: 0 + 8 + 12 + 6 + 4 = 30 libros en total.',
      'Dividí 30 libros entre los n = 20 estudiantes (da 1,5).',
      'Como F₁ = 3 y F₂ = 11, tanto el 10.º como el 11.º estudiante leyeron 1 libro (Me = 1). Y la mayor frecuencia es f = 8 en 1 libro (Mo = 1).'
    ],
    solutionSteps: [
      'Suma de productos: 0×3 + 1×8 + 2×6 + 3×2 + 4×1 = 0 + 8 + 12 + 6 + 4 = 30 libros.',
      'Media: x̄ = 30 ÷ 20 = 1,5 libros.',
      'Mediana: con n = 20, las posiciones 10 y 11 caen en la fila de 1 libro (que abarca de la posición 4 a la 11) → Me = 1 libro.',
      'Moda: la mayor frecuencia es f = 8, que corresponde a Mo = 1 libro.'
    ],
    commonErrorNote: 'En una tabla de frecuencias, dividí siempre la suma de productos entre el total n (20), nunca entre la cantidad de filas (5).'
  },
  {
    id: 'N4-03',
    title: 'Mediana con cantidad impar de datos desordenados (n = 7)',
    source: { kind: 'nuevo', label: 'Práctica N4-03' },
    topic: 'medidas',
    level: 'inicial',
    skills: ['mediana-impar', 'ordenar-datos'],
    lessonId: 'L08',
    allowComparableVariant: true,
    prompt: 'Las notas de 7 estudiantes se anotaron en este orden a medida que entregaban:\n9, 5, 10, 6, 8, 6, 7.\nOrdenalas de menor a mayor y hallá la posición central y el valor de la mediana (Me).',
    dataset: [9, 5, 10, 6, 8, 6, 7],
    parts: [
      {
        id: 'posicion',
        label: '1. ¿Qué número de posición ocupa el dato central cuando n = 7 ((7 + 1) ÷ 2)?',
        type: 'number',
        integerOnly: true,
        expected: 4
      },
      {
        id: 'mediana',
        label: '2. Una vez ordenados (5, 6, 6, 7, 8, 9, 10), ¿cuál es el valor de la mediana (Me)?',
        type: 'number',
        unit: 'puntos',
        expected: 7,
        commonErrors: [
          { value: 6, message: '6 era el 4.º número de la lista desordenada (9, 5, 10, 6...), pero primero hay que ordenar de menor a mayor: 5, 6, 6, [7], 8, 9, 10.' },
          { value: 4, message: '4 es la posición central, pero la nota ubicada en el 4.º lugar ordenado es 7.' }
        ]
      }
    ],
    hints: [
      'No busques el centro sin ordenar antes la lista.',
      'Ordená los 7 datos de menor a mayor, incluyendo el 6 repetido: 5, 6, 6, 7, 8, 9, 10.',
      'El 4.º dato de esa lista ordenada es la mediana.'
    ],
    solutionSteps: [
      'Paso 1 (ordenar): 5, 6, 6, 7, 8, 9, 10.',
      'Paso 2 (posición central para n = 7 impar): (7 + 1) ÷ 2 = 4 (cuarto lugar).',
      'Paso 3 (valor): el 4.º dato ordenado es Me = 7 puntos.'
    ],
    commonErrorNote: 'Si tomás el centro sin ordenar (que era 6), obtenés un resultado incorrecto.'
  },
  {
    id: 'N4-04',
    title: 'Mediana con cantidad par de datos desordenados (n = 6)',
    source: { kind: 'nuevo', label: 'Práctica N4-04' },
    topic: 'medidas',
    level: 'inicial',
    skills: ['mediana-par', 'ordenar-datos'],
    lessonId: 'L08',
    allowComparableVariant: true,
    prompt: 'Se registraron los goles convertidos por un equipo en 6 fechas: 3, 0, 8, 1, 4, 2. Ordenalos de menor a mayor y calculá la mediana (Me).',
    dataset: [3, 0, 8, 1, 4, 2],
    parts: [
      {
        id: 'mediana',
        label: 'Mediana (Me) de los 6 datos ordenados (0, 1, 2, 3, 4, 8)',
        type: 'number',
        unit: 'goles',
        expected: 2.5,
        roundingDecimals: 2,
        commonErrors: [
          { value: 4.5, message: 'Tomaste el 3.º y 4.º dato de la lista desordenada (8 y 1 → 4,5). Ordená primero: 0, 1, 2, 3, 4, 8 y promediá 2 y 3.' },
          { value: 3.5, message: '3,5 es la posición central ((6 + 1) ÷ 2 = 3,5). Los valores en las posiciones 3 y 4 son 2 y 3, cuyo promedio es 2,5.' }
        ]
      }
    ],
    hints: [
      'Ordená primero los 6 datos: 0, 1, 2, 3, 4, 8.',
      'Como n = 6 es par, tomá los dos valores centrales (posiciones 3 y 4): son el 2 y el 3.',
      'Promediá ambos: (2 + 3) ÷ 2.'
    ],
    solutionSteps: [
      'Datos ordenados (n = 6): 0, 1, 2, 3, 4, 8.',
      'Posiciones centrales: 3.ª (valor 2) y 4.ª (valor 3).',
      'Mediana: Me = (2 + 3) ÷ 2 = 2,5 goles.'
    ],
    commonErrorNote: 'Cuando n es par, la mediana puede dar un decimal (2,5) aunque todos los datos sean enteros.'
  },
  {
    id: 'N4-05',
    title: 'Hallar la mediana directamente desde una tabla de frecuencias (n = 15)',
    source: { kind: 'nuevo', label: 'Práctica N4-05' },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['mediana-tabla', 'frecuencia-acumulada'],
    lessonId: 'L08',
    allowComparableVariant: false,
    prompt: 'En el ejemplo resuelto de la guía sobre notas de n = 15 alumnos, la tabla muestra:\n• Nota 6: f₁ = 2 → F₁ = 2\n• Nota 7: f₂ = 3 → F₂ = 5\n• Nota 8: f₃ = 5 → F₃ = 10\n• Nota 9: f₄ = 3 → F₄ = 13\n• Nota 10: f₅ = 2 → F₅ = 15\nUbicá la posición central usando la columna F y determiná la mediana.',
    parts: [
      {
        id: 'pos_central',
        label: '1. Como n = 15 es impar, ¿qué posición central buscamos ((15 + 1) ÷ 2)?',
        type: 'number',
        integerOnly: true,
        expected: 8
      },
      {
        id: 'mediana_tabla',
        label: '2. Mirando la columna acumulada F (F₂ = 5 cubre hasta el 5.º lugar y F₃ = 10 cubre del 6.º al 10.º lugar), ¿cuál es la nota mediana (Me)?',
        type: 'number',
        unit: 'puntos',
        expected: 8,
        commonErrors: [
          { value: 5, message: '5 es la frecuencia absoluta f₃ de la nota 8, pero la mediana es el valor de la nota: 8 puntos.' }
        ]
      }
    ],
    hints: [
      'Con 15 datos ordenados, el dato central está en la posición (15 + 1) ÷ 2 = 8.',
      'Las notas 6 y 7 llegan hasta la posición acumulada F₂ = 5.',
      'Las cinco notas 8 ocupan las posiciones 6, 7, 8, 9 y 10 (hasta F₃ = 10). Por lo tanto, en la posición 8 hay un 8.'
    ],
    solutionSteps: [
      'Posición central: (15 + 1) ÷ 2 = 8 (octavo dato ordenado).',
      'La primera acumulada que alcanza o supera a 8 es F₃ = 10, que corresponde a la fila de Nota 8.',
      'Por lo tanto, Me = 8 puntos.'
    ],
    commonErrorNote: 'Para hallar la mediana en una tabla ordenada, buscá la primera fila cuya frecuencia acumulada F sea mayor o igual a la posición central.'
  },
  {
    id: 'N4-06',
    title: 'Distribución bimodal: identificar las dos modas empatadas',
    source: { kind: 'nuevo', label: 'Práctica N4-06' },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['moda', 'bimodal'],
    lessonId: 'L09',
    allowComparableVariant: false,
    prompt: 'En un registro de 12 entregas de actividades, las calificaciones fueron:\n6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 6.\nDeterminá cuál o cuáles son las modas y cómo se clasifica la distribución.',
    dataset: [6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 6],
    parts: [
      {
        id: 'modas',
        label: '1. Ingresá las modas de la serie (separadas por «y» o por punto y coma, por ejemplo: 7 y 9)',
        type: 'number-set',
        expected: [7, 9],
        maxFrequency: 3
      },
      {
        id: 'clasificacion',
        label: '2. ¿Cómo se clasifica esta serie según sus modas?',
        type: 'select',
        options: [
          { value: 'bimodal', label: 'Bimodal (dos valores empatan en la frecuencia máxima de 3 repeticiones)' },
          { value: 'unimodal', label: 'Unimodal (una sola moda)' },
          { value: 'amodal', label: 'Amodal (sin moda)' }
        ],
        expected: 'bimodal'
      }
    ],
    hints: [
      'Contá cuántas veces aparece cada nota: el 6 está 2 veces; el 7 está 3 veces; el 8 está 2 veces; el 9 está 3 veces; el 10 está 2 veces.',
      'La frecuencia más alta es 3, y la alcanzan tanto el 7 como el 9.',
      'Cuando dos valores empatan en el máximo superando al resto, la serie es bimodal.'
    ],
    solutionSteps: [
      'Frecuencias absolutas: f(6)=2, f(7)=3, f(8)=2, f(9)=3, f(10)=2.',
      'La frecuencia máxima es 3 y corresponde a dos valores: 7 y 9.',
      'Por lo tanto, Mo = 7 y 9, y la distribución es bimodal.'
    ],
    commonErrorNote: 'Cuando hay empate entre dos valores con la frecuencia más alta, no se promedian las modas: se informan ambas (7 y 9).'
  },
  {
    id: 'N4-07',
    title: 'Serie amodal: cuando ningún valor se destaca en frecuencia',
    source: { kind: 'nuevo', label: 'Práctica N4-07' },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['moda', 'amodal'],
    lessonId: 'L09',
    allowComparableVariant: false,
    prompt: 'Las temperaturas mínimas (en °C) registradas en 5 mañanas consecutivas fueron: 11, 13, 14, 16, 18. Determiná la media, la mediana y analizá qué ocurre con la moda.',
    dataset: [11, 13, 14, 16, 18],
    parts: [
      {
        id: 'media',
        label: '1. Media aritmética (x̄) en °C',
        type: 'number',
        unit: '°C',
        expected: 14.4,
        roundingDecimals: 2
      },
      {
        id: 'mediana',
        label: '2. Mediana (Me) en °C',
        type: 'number',
        unit: '°C',
        expected: 14
      },
      {
        id: 'moda',
        label: '3. ¿Cuál es la moda (escribí «amodal» si ningún valor se repite más que otro)?',
        type: 'number-set',
        expected: []
      }
    ],
    hints: [
      'Suma: 11 + 13 + 14 + 16 + 18 = 72 °C → dividí entre 5 para la media.',
      'El 3.º dato ordenado es 14 °C (mediana).',
      'Como los 5 valores aparecen 1 sola vez cada uno, ninguno se repite más que los demás: en el criterio escolar la serie es amodal.'
    ],
    solutionSteps: [
      'Media: (11 + 13 + 14 + 16 + 18) ÷ 5 = 72 ÷ 5 = 14,4 °C.',
      'Mediana: el 3.º dato ordenado es Me = 14 °C.',
      'Moda: todos los valores tienen frecuencia 1 → la serie es amodal (sin moda destacada).'
    ],
    commonErrorNote: 'Cuando ningún valor supera en frecuencia a los demás, indicá que la serie es amodal.'
  },
  {
    id: 'N4-08',
    title: 'Comparar el efecto de cambiar un extremo de 6 a 16 (ejemplo de Ficha 9)',
    source: { kind: 'nuevo', label: 'Práctica N4-08' },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['valores-extremos', 'media', 'mediana-impar', 'moda'],
    lessonId: 'L10',
    allowComparableVariant: false,
    prompt: 'En la Ficha 9 comparamos dos listas de 5 datos:\n• Lista original: 0, 1, 1, 2, 6 (suma = 10, media = 2, mediana = 1, moda = 1).\n• Lista modificada (cambiando el 6 por un 16): 0, 1, 1, 2, 16.\nCalculá la nueva media, mediana y moda de la lista modificada y observá cuál cambió.',
    dataset: [0, 1, 1, 2, 16],
    parts: [
      {
        id: 'nueva_media',
        label: '1. Nueva media aritmética (x̄) de 0, 1, 1, 2, 16',
        type: 'number',
        unit: 'libros',
        expected: 4
      },
      {
        id: 'nueva_mediana',
        label: '2. Nueva mediana (Me) de 0, 1, 1, 2, 16',
        type: 'number',
        unit: 'libros',
        expected: 1
      },
      {
        id: 'nueva_moda',
        label: '3. Nueva moda (Mo) de 0, 1, 1, 2, 16',
        type: 'number-set',
        expected: [1],
        maxFrequency: 2
      }
    ],
    hints: [
      'Sumá los nuevos datos: 0 + 1 + 1 + 2 + 16 = 20 → dividí entre 5.',
      'El dato central (3.º lugar) sigue siendo 1 y el valor más repetido sigue siendo 1.'
    ],
    solutionSteps: [
      'Nueva suma: 0 + 1 + 1 + 2 + 16 = 20 → Nueva media: 20 ÷ 5 = 4 libros (se duplicó de 2 a 4 por efecto del extremo 16).',
      'Nueva mediana: el 3.º dato ordenado sigue siendo Me = 1 libro.',
      'Nueva moda: el valor que más se repite sigue siendo Mo = 1 libro.'
    ],
    commonErrorNote: 'Cuando se reemplaza el valor máximo por uno aún mayor sin cambiar la cantidad de datos n, la mediana no se mueve pero la media sube.'
  },
  {
    id: 'N4-09',
    title: 'Mediana en una variable cualitativa ordinal',
    source: { kind: 'nuevo', label: 'Práctica N4-09' },
    topic: 'medidas',
    level: 'desafio',
    skills: ['cualitativa-ordinal', 'mediana-impar', 'pertinencia-medidas'],
    lessonId: 'L08',
    allowComparableVariant: false,
    prompt: 'En una consulta de satisfacción con n = 9 respuestas ordenadas de menor a mayor nivel (Baja < Media < Alta), se obtuvieron: 2 respuestas «Baja», 4 respuestas «Media» y 3 respuestas «Alta». Determiná qué medidas pueden calcularse y cuáles son sus valores.',
    parts: [
      {
        id: 'medidas_posibles',
        label: '1. Tratándose de una variable cualitativa ordinal, ¿qué medidas de tendencia central tienen sentido?',
        type: 'select',
        options: [
          { value: 'moda_y_mediana', label: 'La moda y la mediana (porque hay frecuencias y un orden jerárquico, pero no suma numérica para la media)' },
          { value: 'solo_media', label: 'Únicamente la media aritmética' },
          { value: 'las_tres', label: 'Media, mediana y moda' }
        ],
        expected: 'moda_y_mediana'
      },
      {
        id: 'mediana_ordinal',
        label: '2. Al ordenar las 9 respuestas (Baja, Baja, Media, Media, [Media], Media, Alta, Alta, Alta), ¿qué categoría ocupa la 5.ª posición central (mediana)?',
        type: 'select',
        options: [
          { value: 'Media', label: 'Media (ocupa las posiciones 3.ª a 6.ª, incluida la 5.ª central)' },
          { value: 'Baja', label: 'Baja (posiciones 1.ª y 2.ª)' },
          { value: 'Alta', label: 'Alta (posiciones 7.ª a 9.ª)' }
        ],
        expected: 'Media'
      }
    ],
    hints: [
      'Como las categorías son palabras ordenadas (Baja < Media < Alta), no se pueden sumar para una media, pero sí se pueden ordenar para ubicar el centro (mediana).',
      'Con n = 9 respuestas, la posición central es (9 + 1) ÷ 2 = 5.',
      'Las 2 primeras son «Baja» y las 4 siguientes (lugares 3, 4, 5 y 6) son «Media».'
    ],
    solutionSteps: [
      'En una variable cualitativa ordinal son aplicables la Moda y la Mediana (no la Media).',
      'Posición central para n = 9: (9 + 1) ÷ 2 = 5. La 5.ª respuesta ordenada corresponde a la categoría «Media» (que además coincide con la moda, f = 4).'
    ],
    commonErrorNote: 'Recordá la tabla de la guía: la mediana aplica tanto a variables cuantitativas como a cualitativas ordinales.'
  },
  {
    id: 'N4-10',
    title: 'Detectar el error de dividir por la cantidad de filas en lugar de n',
    source: { kind: 'nuevo', label: 'Práctica N4-10' },
    topic: 'medidas',
    level: 'desafio',
    skills: ['media-tabla', 'detectar-errores'],
    lessonId: 'L07',
    allowComparableVariant: false,
    prompt: 'En una tabla sobre cantidad de mascotas en n = 25 hogares, los valores son 0, 1, 2 y 3 mascotas (4 filas), y la suma de los productos Σ(x · f) dio 35 mascotas en total. Un compañero calculó la media haciendo 35 ÷ 4 = 8,75 mascotas por hogar. Explicá por qué es imposible ese resultado y calculá la media correcta.',
    parts: [
      {
        id: 'por_que_imposible',
        label: '1. Sin hacer cuentas siquiera, ¿cómo te das cuenta enseguida de que una media de 8,75 mascotas es imposible en esta tabla?',
        type: 'select',
        options: [
          {
            value: 'fuera_de_rango',
            label: 'Porque los datos van de 0 a 3 mascotas: el promedio jamás puede ser mayor que el dato máximo (3); el error fue dividir entre las 4 filas en vez de dividir entre los 25 hogares'
          },
          {
            value: 'porque_tiene_coma',
            label: 'Porque un promedio nunca puede tener decimales'
          }
        ],
        expected: 'fuera_de_rango'
      },
      {
        id: 'media_correcta',
        label: '2. ¿Cuál es la media aritmética correcta (35 ÷ 25) en mascotas por hogar?',
        type: 'number',
        unit: 'mascotas',
        expected: 1.4,
        roundingDecimals: 2
      }
    ],
    hints: [
      'Todo promedio tiene que quedar comprendido entre el valor mínimo (0) y el valor máximo (3) de los datos.',
      'El compañero dividió por 4 (las filas) en vez de dividir por n = 25 hogares.',
      'Hacé 35 ÷ 25.'
    ],
    solutionSteps: [
      'Comprobación de sentido: si ningún hogar tiene más de 3 mascotas, el promedio no puede ser 8,75.',
      'El error fue dividir la suma de productos (35) entre la cantidad de filas (4) en lugar del total de hogares (n = 25).',
      'Media correcta: x̄ = 35 ÷ 25 = 1,4 mascotas por hogar.'
    ],
    commonErrorNote: 'Control rápido de cualquier media o mediana: el resultado siempre debe estar entre el valor mínimo y el valor máximo de la lista.'
  },
  {
    id: 'N4-11',
    title: 'Construir un conjunto de 5 datos que cumpla condiciones dadas',
    source: { kind: 'nuevo', label: 'Práctica N4-11' },
    topic: 'medidas',
    level: 'desafio',
    skills: ['media', 'mediana-impar', 'moda'],
    lessonId: 'L10',
    allowComparableVariant: false,
    prompt: 'Queremos completar una lista ordenada de 5 números enteros de menor a mayor: 2, 2, 4, 6, [ ? ] de modo que su moda sea 2, su mediana sea 4 y su media aritmética sea exactamente 5. ¿Qué número debe ir en el quinto lugar?',
    parts: [
      {
        id: 'suma_5_datos',
        label: '1. Para que 5 datos tengan media 5, ¿cuánto deben sumar en total (5 × 5)?',
        type: 'number',
        integerOnly: true,
        expected: 25
      },
      {
        id: 'quinto_dato',
        label: '2. Como los cuatro primeros suman 2 + 2 + 4 + 6 = 14, ¿cuál debe ser el quinto número?',
        type: 'number',
        integerOnly: true,
        expected: 11
      }
    ],
    hints: [
      'Si 5 números tienen promedio 5, su suma total es 5 × 5 = 25.',
      'Restá a 25 la suma de los cuatro primeros (2 + 2 + 4 + 6 = 14).',
      'Verificá que con 2, 2, 4, 6, 11 la moda sigue siendo 2 y el dato central (3.º) sigue siendo 4.'
    ],
    solutionSteps: [
      'Suma necesaria para media 5 con n = 5 datos: 5 × 5 = 25.',
      'Suma de los 4 primeros datos: 2 + 2 + 4 + 6 = 14 → quinto dato = 25 − 14 = 11.',
      'Verificación de 2, 2, 4, 6, 11: moda = 2 (se repite dos veces), mediana = 4 (3.º dato ordenado) y media = 25 ÷ 5 = 5.'
    ],
    commonErrorNote: 'Modificar el último dato hacia arriba permite ajustar la media sin cambiar la mediana (4) ni la moda (2).'
  },
  {
    id: 'N4-12',
    title: 'Elegir la medida adecuada para tres preguntas distintas sobre un mismo negocio',
    source: { kind: 'nuevo', label: 'Práctica N4-12' },
    topic: 'medidas',
    level: 'desafio',
    skills: ['eleccion-medida', 'pertinencia-medidas'],
    lessonId: 'L10',
    allowComparableVariant: false,
    prompt: 'En una librería escolar se analizan tres consultas distintas. Asociá cada pregunta con la medida de tendencia central que mejor ayuda a responderla.',
    parts: [
      {
        id: 'q_stock',
        label: '1. «¿Qué color de carpeta se vende más para encargar mayor cantidad al proveedor?»',
        type: 'select',
        options: [
          { value: 'moda', label: 'La moda (identifica la categoría o valor más frecuente)' },
          { value: 'media', label: 'La media aritmética' },
          { value: 'mediana', label: 'La mediana' }
        ],
        expected: 'moda'
      },
      {
        id: 'q_reparto',
        label: '2. «Si juntamos la recaudación pareja de los 5 días hábiles, ¿cuánto ingresó por día en promedio?»',
        type: 'select',
        options: [
          { value: 'media', label: 'La media aritmética (reparte el total acumulado entre los 5 días)' },
          { value: 'moda', label: 'La moda' }
        ],
        expected: 'media'
      },
      {
        id: 'q_extremo',
        label: '3. «De 9 compras del turno mañana, 8 fueron de entre $2.000 y $4.000 y una sola compra mayorista fue de $95.000. ¿Qué medida resume mejor el gasto típico de un cliente común?»',
        type: 'select',
        options: [
          { value: 'mediana', label: 'La mediana (porque no se distorsiona por la compra mayorista extrema de $95.000)' },
          { value: 'media', label: 'La media (aunque dé más de $13.000 y ningún cliente común haya gastado eso)' }
        ],
        expected: 'mediana'
      }
    ],
    hints: [
      'Para saber «qué es lo que más sale» (y más aún si es color), buscás la moda.',
      'Para repartir un total parejo entre los días, buscás la media.',
      'Cuando hay un valor extremo ($95.000) que distorsiona el promedio, conviene la mediana.'
    ],
    solutionSteps: [
      '1) Color más vendido → Moda (lo más frecuente).',
      '2) Ingreso diario al repartir el total de 5 días parejos → Media.',
      '3) Compra típica en presencia de un valor muy extremo ($95.000) → Mediana.'
    ],
    commonErrorNote: 'La mejor medida depende siempre de la naturaleza de la variable, la presencia de extremos y la pregunta que queremos responder.'
  },

  // ================= 8 PROBLEMAS INTEGRADORES (I-01 a I-08) =================
  {
    id: 'I-01',
    title: 'Integrador 1: Libros leídos por 10 estudiantes (de principio a fin)',
    source: { kind: 'integrador', label: 'Integrador I-01' },
    topic: 'integrador',
    level: 'intermedio',
    skills: ['clasificar-variable', 'frecuencia-absoluta', 'porcentaje', 'media', 'mediana-par', 'moda'],
    lessonId: 'L07',
    allowComparableVariant: false,
    prompt: 'Recorrido integrador completo con los datos ficticios de las fichas: se consultó a n = 10 estudiantes cuántos libros leyeron en el año y respondieron:\n0, 1, 1, 2, 0, 1, 3, 2, 1, 4.\n1) Clasificá la variable.\n2) Completá la tabla de frecuencias (f, fr, % y F).\n3) Calculá la media, la mediana y la moda.',
    dataset: [0, 1, 1, 2, 0, 1, 3, 2, 1, 4],
    parts: [
      {
        id: 'clasif',
        label: '1. ¿Cómo se clasifica la variable «cantidad de libros leídos»?',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (conteo entero)' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-discreta'
      },
      {
        id: 'tabla',
        label: '2. Completá la tabla de frecuencias para 0, 1, 2, 3 y 4 libros (n = 10)',
        type: 'freq-table',
        totalN: 10,
        columns: ['f', 'fr', 'pct', 'F'],
        rows: [
          { x: 0, label: '0 libros', f: 2, F: 2 },
          { x: 1, label: '1 libro', f: 4, F: 6 },
          { x: 2, label: '2 libros', f: 2, F: 8 },
          { x: 3, label: '3 libros', f: 1, F: 9 },
          { x: 4, label: '4 libros', f: 1, F: 10 }
        ]
      },
      {
        id: 'media',
        label: '3a. Media aritmética (x̄) en libros (suma = 15, n = 10)',
        type: 'number',
        unit: 'libros',
        expected: 1.5,
        roundingDecimals: 2
      },
      {
        id: 'mediana',
        label: '3b. Mediana (Me) en libros (promedio de las posiciones 5 y 6)',
        type: 'number',
        unit: 'libros',
        expected: 1
      },
      {
        id: 'moda',
        label: '3c. Moda (Mo) en libros',
        type: 'number-set',
        expected: [1],
        maxFrequency: 4
      }
    ],
    hints: [
      'Frecuencias absolutas: f(0)=2, f(1)=4, f(2)=2, f(3)=1, f(4)=1 (total n = 10).',
      'Suma de todos los libros: 0×2 + 1×4 + 2×2 + 3×1 + 4×1 = 0 + 4 + 4 + 3 + 4 = 15 → media = 15 ÷ 10 = 1,5.',
      'En los 10 datos ordenados (0, 0, 1, 1, [1, 1], 2, 2, 3, 4), las posiciones 5 y 6 son 1 y 1 (mediana = 1), y el 1 se repite 4 veces (moda = 1).'
    ],
    solutionSteps: [
      '1) Variable Cuantitativa Discreta.',
      '2) Tabla (n = 10): 0 (f=2, fr=0,20, 20 %, F=2); 1 (f=4, fr=0,40, 40 %, F=6); 2 (f=2, fr=0,20, 20 %, F=8); 3 (f=1, fr=0,10, 10 %, F=9); 4 (f=1, fr=0,10, 10 %, F=10).',
      '3) Suma = 15 → Media x̄ = 15 ÷ 10 = 1,5 libros; Mediana Me = 1 libro; Moda Mo = 1 libro.'
    ],
    commonErrorNote: 'Conectá siempre tabla y medidas: la acumulada F₂ = 6 ya te avisa que las posiciones 5 y 6 están en la fila de 1 libro.'
  },
  {
    id: 'I-02',
    title: 'Integrador 2: Goles por partido en un torneo escolar (n = 12)',
    source: { kind: 'integrador', label: 'Integrador I-02' },
    topic: 'integrador',
    level: 'intermedio',
    skills: ['clasificar-variable', 'frecuencia-absoluta', 'construir-barras', 'media', 'mediana-par', 'moda'],
    lessonId: 'L07',
    allowComparableVariant: false,
    prompt: 'En los 12 partidos de un torneo de futsal (datos ficticios), la cantidad de goles convertidos por un equipo fue:\n1, 2, 0, 2, 3, 1, 2, 2, 1, 3, 0, 1.\nClasificá la variable, completá la tabla, verificá las barras y calculá las tres medidas de tendencia central.',
    dataset: [1, 2, 0, 2, 3, 1, 2, 2, 1, 3, 0, 1],
    parts: [
      {
        id: 'clasif',
        label: '1. Tipo de variable («cantidad de goles por partido»)',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' }
        ],
        expected: 'cuantitativa-discreta'
      },
      {
        id: 'tabla',
        label: '2. Completá las frecuencias f y acumuladas F para 0, 1, 2 y 3 goles (n = 12)',
        type: 'freq-table',
        totalN: 12,
        columns: ['f', 'F'],
        rows: [
          { x: 0, label: '0 goles', f: 2, F: 2 },
          { x: 1, label: '1 gol', f: 4, F: 6 },
          { x: 2, label: '2 goles', f: 4, F: 10 },
          { x: 3, label: '3 goles', f: 2, F: 12 }
        ]
      },
      {
        id: 'media',
        label: '3a. Media aritmética (x̄) de goles por partido (suma = 18, n = 12)',
        type: 'number',
        unit: 'goles',
        expected: 1.5,
        roundingDecimals: 2
      },
      {
        id: 'mediana',
        label: '3b. Mediana (Me) promediando las posiciones 6.ª (valor 1) y 7.ª (valor 2)',
        type: 'number',
        unit: 'goles',
        expected: 1.5,
        roundingDecimals: 2
      },
      {
        id: 'moda',
        label: '3c. Modas de la distribución (hay empate entre dos valores)',
        type: 'number-set',
        expected: [1, 2],
        maxFrequency: 4
      }
    ],
    hints: [
      'Contá cada valor en los 12 partidos: 0 goles (2), 1 gol (4), 2 goles (4), 3 goles (2).',
      'Suma total de goles: 0×2 + 1×4 + 2×4 + 3×2 = 0 + 4 + 8 + 6 = 18 → media = 18 ÷ 12 = 1,5.',
      'Con n = 12, la posición 6 tiene 1 gol (F₂ = 6) y la posición 7 tiene 2 goles: Me = (1 + 2) ÷ 2 = 1,5. Y tanto 1 como 2 se repiten 4 veces (bimodal).'
    ],
    solutionSteps: [
      '1) Variable cuantitativa discreta.',
      '2) Frecuencias: f(0)=2, f(1)=4, f(2)=4, f(3)=2; acumuladas: F = 2, 6, 10, 12.',
      '3) Suma = 18 → Media = 18 ÷ 12 = 1,5 goles. Mediana = (1 + 2) ÷ 2 = 1,5 goles. Modas = 1 y 2 goles (bimodal).'
    ],
    commonErrorNote: 'Fijate qué bien se ve en la columna F el cambio entre la posición 6 (último 1) y la posición 7 (primer 2).'
  },
  {
    id: 'I-03',
    title: 'Integrador 3: Trabajos prácticos entregados a término (n = 20)',
    source: { kind: 'integrador', label: 'Integrador I-03' },
    topic: 'integrador',
    level: 'intermedio',
    skills: ['frecuencia-absoluta', 'porcentaje', 'frecuencia-acumulada', 'construir-barras', 'media', 'mediana-par', 'moda'],
    lessonId: 'L07',
    allowComparableVariant: false,
    prompt: 'Se registró cuántos de los 4 trabajos prácticos del bimestre entregó en fecha cada uno de los n = 20 estudiantes de un grupo (datos ficticios):\n• 1 trabajo: 2 estudiantes\n• 2 trabajos: 5 estudiantes\n• 3 trabajos: 8 estudiantes\n• 4 trabajos: 5 estudiantes\nCompletá la tabla, armá el gráfico de barras y hallá la media, mediana y moda.',
    parts: [
      {
        id: 'tabla',
        label: '1. Completá f, fr, % y F (total n = 20)',
        type: 'freq-table',
        totalN: 20,
        columns: ['f', 'fr', 'pct', 'F'],
        rows: [
          { x: 1, label: '1 TP', f: 2, F: 2 },
          { x: 2, label: '2 TP', f: 5, F: 7 },
          { x: 3, label: '3 TP', f: 8, F: 15 },
          { x: 4, label: '4 TP', f: 5, F: 20 }
        ]
      },
      {
        id: 'barras',
        label: '2. Construí el gráfico de barras con escala uniforme',
        type: 'bar-builder',
        unit: 'estudiantes',
        inputMode: 'value',
        maxGridCells: 12,
        validScaleSteps: [1, 2],
        bars: [
          { key: 'tp1', label: '1 TP', value: 2 },
          { key: 'tp2', label: '2 TP', value: 5 },
          { key: 'tp3', label: '3 TP', value: 8 },
          { key: 'tp4', label: '4 TP', value: 5 }
        ]
      },
      {
        id: 'media',
        label: '3a. Media aritmética (x̄) de trabajos entregados (suma de productos = 56, n = 20)',
        type: 'number',
        unit: 'trabajos',
        expected: 2.8,
        roundingDecimals: 2
      },
      {
        id: 'mediana',
        label: '3b. Mediana (Me) en trabajos (posiciones 10 y 11)',
        type: 'number',
        unit: 'trabajos',
        expected: 3
      },
      {
        id: 'moda',
        label: '3c. Moda (Mo) en trabajos',
        type: 'number-set',
        expected: [3],
        maxFrequency: 8
      }
    ],
    hints: [
      'Con n = 20, las frecuencias relativas son 2/20=0,10; 5/20=0,25; 8/20=0,40; 5/20=0,25.',
      'Suma de productos: 1×2 + 2×5 + 3×8 + 4×5 = 2 + 10 + 24 + 20 = 56 → media = 56 ÷ 20 = 2,8.',
      'Como F₂ = 7 y F₃ = 15, las posiciones 10 y 11 están en «3 trabajos» (Me = 3), que también es la mayor frecuencia (Mo = 3).'
    ],
    solutionSteps: [
      'Tabla (n = 20): 1 TP (2, 0,10, 10 %, F=2); 2 TP (5, 0,25, 25 %, F=7); 3 TP (8, 0,40, 40 %, F=15); 4 TP (5, 0,25, 25 %, F=20).',
      'Suma de productos: 2 + 10 + 24 + 20 = 56 → Media x̄ = 56 ÷ 20 = 2,8 trabajos.',
      'Mediana Me = 3 trabajos y Moda Mo = 3 trabajos.'
    ],
    commonErrorNote: 'El 65 % del curso (8 + 5 = 13 de 20) entregó 3 o 4 trabajos prácticos.'
  },
  {
    id: 'I-04',
    title: 'Integrador 4: Tiempo de recorrido a la escuela y efecto de un dato extremo',
    source: { kind: 'integrador', label: 'Integrador I-04' },
    topic: 'integrador',
    level: 'desafio',
    skills: ['cuantitativa-continua', 'media', 'mediana-impar', 'valores-extremos'],
    lessonId: 'L10',
    allowComparableVariant: false,
    prompt: 'Se midió el tiempo en minutos que tardan 9 estudiantes en llegar al colegio (datos ficticios):\n10, 12, 12, 15, 15, 15, 18, 20, 63 (el último vive en otra localidad).\nClasificá la variable, hallá la media, la mediana y la moda, y decidí cuál medida describe mejor al grupo.',
    dataset: [10, 12, 12, 15, 15, 15, 18, 20, 63],
    parts: [
      {
        id: 'clasif',
        label: '1. ¿Cómo se clasifica la variable «tiempo de viaje a la escuela»?',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua (el tiempo es una magnitud continua aunque se haya anotado en minutos enteros)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-continua'
      },
      {
        id: 'media',
        label: '2a. Media aritmética (x̄) de los 9 tiempos en minutos (suma = 180)',
        type: 'number',
        unit: 'min',
        expected: 20
      },
      {
        id: 'mediana',
        label: '2b. Mediana (Me) en minutos (5.º dato ordenado)',
        type: 'number',
        unit: 'min',
        expected: 15
      },
      {
        id: 'moda',
        label: '2c. Moda (Mo) en minutos',
        type: 'number-set',
        expected: [15],
        maxFrequency: 3
      },
      {
        id: 'eleccion',
        label: '3. ¿Por qué la mediana (15 min) representa mejor el tiempo típico de viaje que la media (20 min)?',
        type: 'select',
        options: [
          {
            value: 'extremo_63',
            label: 'Porque 7 de los 9 estudiantes tardan 18 minutos o menos, y la media (20 min) quedó inflada por el único valor extremo de 63 minutos'
          },
          {
            value: 'media_mejor',
            label: 'La media de 20 min es más representativa porque coincide con el octavo estudiante'
          }
        ],
        expected: 'extremo_63'
      }
    ],
    hints: [
      'El tiempo es una magnitud física continua.',
      'Sumá los 9 tiempos: 10 + 12 + 12 + 15 + 15 + 15 + 18 + 20 + 63 = 180 min → 180 ÷ 9 = 20 min.',
      'El 5.º dato ordenado es 15 min (mediana) y el 15 aparece 3 veces (moda).'
    ],
    solutionSteps: [
      '1) Variable cuantitativa continua.',
      '2) Suma = 180 min → Media x̄ = 180 ÷ 9 = 20 min; Mediana (posición 5) = 15 min; Moda = 15 min.',
      '3) La mediana (15 min) y la moda (15 min) reflejan mejor el viaje típico, mientras que la media (20 min) está desplazada hacia arriba por el valor extremo de 63 min.'
    ],
    commonErrorNote: 'Observá que 8 de los 9 estudiantes tardan 20 minutos o menos; el dato de 63 minutos arrastra la media.'
  },
  {
    id: 'I-05',
    title: 'Integrador 5 (categórico nominal): Club o taller extracurricular elegido (n = 25)',
    source: { kind: 'integrador', label: 'Integrador I-05' },
    topic: 'integrador',
    level: 'intermedio',
    skills: ['cualitativa-nominal', 'frecuencia-relativa', 'porcentaje', 'construir-barras', 'moda-categorica', 'pertinencia-medidas'],
    lessonId: 'L09',
    allowComparableVariant: false,
    prompt: 'En un relevamiento a n = 25 estudiantes sobre qué taller extracurricular prefieren (datos ficticios), las respuestas fueron:\nRobótica: 10 | Teatro: 7 | Huerta: 5 | Ajedrez: 3.\nClasificá la variable, completá la tabla sin columna acumulada, configurá el gráfico de barras e indicá la única medida de tendencia central pertinente.',
    parts: [
      {
        id: 'clasif',
        label: '1. Clasificación de la variable «taller extracurricular elegido»',
        type: 'select',
        options: [
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' }
        ],
        expected: 'cualitativa-nominal'
      },
      {
        id: 'tabla',
        label: '2. Completá fr y % para los 4 talleres (total n = 25)',
        type: 'freq-table',
        totalN: 25,
        columns: ['fr', 'pct'],
        rows: [
          { x: 'Robótica', label: 'Robótica (f = 10)', f: 10 },
          { x: 'Teatro', label: 'Teatro (f = 7)', f: 7 },
          { x: 'Huerta', label: 'Huerta (f = 5)', f: 5 },
          { x: 'Ajedrez', label: 'Ajedrez (f = 3)', f: 3 }
        ]
      },
      {
        id: 'barras',
        label: '3. Construí el gráfico de barras de frecuencias absolutas',
        type: 'bar-builder',
        unit: 'estudiantes',
        inputMode: 'value',
        maxGridCells: 12,
        validScaleSteps: [1, 2],
        bars: [
          { key: 'rob', label: 'Robótica', value: 10 },
          { key: 'tea', label: 'Teatro', value: 7 },
          { key: 'hue', label: 'Huerta', value: 5 },
          { key: 'aje', label: 'Ajedrez', value: 3 }
        ]
      },
      {
        id: 'medida_unica',
        label: '4. ¿Cuál es la única medida de tendencia central aplicable y cuál es su valor?',
        type: 'select',
        options: [
          { value: 'moda_robotica', label: 'La moda: Mo = Robótica (elegida por 10 estudiantes, el 40 %). No corresponden media ni mediana por ser categorías nominales' },
          { value: 'media_625', label: 'La media: (10 + 7 + 5 + 3) ÷ 4 = 6,25 talleres' },
          { value: 'mediana_teatro', label: 'La mediana: Teatro y Huerta' }
        ],
        expected: 'moda_robotica'
      }
    ],
    hints: [
      'Los nombres de talleres son categorías sin orden jerárquico (cualitativa nominal).',
      'Dividí cada frecuencia entre 25: 10/25 = 0,40 (40 %); 7/25 = 0,28 (28 %); 5/25 = 0,20 (20 %); 3/25 = 0,12 (12 %).',
      'Para categorías nominales nunca se calcula media ni mediana: solo la moda (Robótica).'
    ],
    solutionSteps: [
      '1) Variable cualitativa nominal.',
      '2) fr y %: Robótica (0,40 / 40 %), Teatro (0,28 / 28 %), Huerta (0,20 / 20 %), Ajedrez (0,12 / 12 %).',
      '3) Barras de alturas 10, 7, 5 y 3.',
      '4) Única medida aplicable: Moda Mo = Robótica (no existen media de talleres ni mediana sin orden).'
    ],
    commonErrorNote: 'Promediar las frecuencias (25 ÷ 4 = 6,25) es el promedio de alumnos por grupo, no la media de la variable.'
  },
  {
    id: 'I-06',
    title: 'Integrador 6 (categórico ordinal): Nivel de comprensión autoevaluado (n = 20)',
    source: { kind: 'integrador', label: 'Integrador I-06' },
    topic: 'integrador',
    level: 'intermedio',
    skills: ['cualitativa-ordinal', 'frecuencia-acumulada', 'porcentaje', 'moda-categorica', 'mediana-par'],
    lessonId: 'L05',
    allowComparableVariant: false,
    prompt: 'Al terminar un tema, n = 20 estudiantes indicaron su nivel de seguridad ordenado de menor a mayor:\n• Inicial (necesito ayuda): 3 estudiantes\n• En proceso (resuelvo con guía): 5 estudiantes\n• Logrado (resuelvo solo): 8 estudiantes\n• Destacado (puedo explicarlo): 4 estudiantes\nCompletá la tabla (incluyendo F porque hay orden jerárquico) y respondé.',
    parts: [
      {
        id: 'clasif',
        label: '1. ¿Qué tipo de variable es este nivel de seguridad?',
        type: 'select',
        options: [
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (categorías con orden creciente de logro)' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' }
        ],
        expected: 'cualitativa-ordinal'
      },
      {
        id: 'tabla',
        label: '2. Completá f, fr, % y F respetando el orden de menor a mayor nivel (n = 20)',
        type: 'freq-table',
        totalN: 20,
        columns: ['f', 'fr', 'pct', 'F'],
        rows: [
          { x: 'Inicial', label: '1. Inicial', f: 3, F: 3 },
          { x: 'En proceso', label: '2. En proceso', f: 5, F: 8 },
          { x: 'Logrado', label: '3. Logrado', f: 8, F: 16 },
          { x: 'Destacado', label: '4. Destacado', f: 4, F: 20 }
        ]
      },
      {
        id: 'pct_logrado_o_mas',
        label: '3. ¿Qué porcentaje del curso alcanzó «Logrado» o «Destacado» (%)?',
        type: 'number',
        unit: '%',
        expected: 60
      },
      {
        id: 'moda_mediana',
        label: '4. ¿Cuáles son la moda y la categoría mediana (posiciones 10 y 11)?',
        type: 'select',
        options: [
          { value: 'logrado', label: 'Tanto la moda (f = 8) como las posiciones centrales 10 y 11 (entre F₂=8 y F₃=16) corresponden a la categoría «Logrado»' },
          { value: 'en_proceso', label: 'Ambas corresponden a «En proceso»' }
        ],
        expected: 'logrado'
      }
    ],
    hints: [
      'Al ser cualitativa ordinal, sí tiene sentido acumular desde Inicial hasta Destacado: F = 3, 8, 16, 20.',
      '«Logrado o Destacado» suma 8 + 4 = 12 estudiantes de 20 → (12 ÷ 20) × 100 = 60 %.',
      'Las posiciones 10 y 11 caen dentro de «Logrado» (que abarca los lugares 9 a 16).'
    ],
    solutionSteps: [
      '1) Variable cualitativa ordinal.',
      '2) Tabla (n = 20): Inicial (3, 0,15, 15 %, F=3); En proceso (5, 0,25, 25 %, F=8); Logrado (8, 0,40, 40 %, F=16); Destacado (4, 0,20, 20 %, F=20).',
      '3) Logrado o Destacado: (8 + 4) ÷ 20 × 100 = 60 %.',
      '4) Moda = Logrado y Mediana ordinal = Logrado.'
    ],
    commonErrorNote: 'Cuando la variable es cualitativa ordinal, sí podemos responder preguntas de acumulación y hallar la mediana ordinal, pero nunca calcular una media numérica.'
  },
  {
    id: 'I-07',
    title: 'Integrador 7 (auditoría de errores): Corregir un informe con 3 errores graves',
    source: { kind: 'integrador', label: 'Integrador I-07' },
    topic: 'integrador',
    level: 'desafio',
    skills: ['detectar-errores-tabla', 'media-tabla', 'moda', 'mediana-par'],
    lessonId: 'L07',
    allowComparableVariant: false,
    prompt: 'Un alumno analizó la cantidad de hermanos de n = 10 compañeros con esta tabla correcta: 0 hermanos (f=2), 1 hermano (f=4), 2 hermanos (f=3), 3 hermanos (f=1). Sin embargo, en sus conclusiones escribió tres errores:\n• Error A: «La suma de hermanos es 0+1+2+3 = 6, y como hay 4 filas la media es 6 ÷ 4 = 1,5».\n• Error B: «La moda es 4 porque 4 es el número más grande de la columna f».\n• Error C: «La mediana es 5,5 porque (10 + 1) ÷ 2 = 5,5».\nCalculá los tres valores verdaderos para corregir el informe.',
    parts: [
      {
        id: 'media_real',
        label: '1. Corregí el Error A: ¿cuál es la verdadera media aritmética (suma de productos = 0×2 + 1×4 + 2×3 + 3×1 = 13, dividida entre n = 10)?',
        type: 'number',
        unit: 'hermanos',
        expected: 1.3,
        roundingDecimals: 2
      },
      {
        id: 'moda_real',
        label: '2. Corregí el Error B: ¿cuál es el verdadero valor de la moda (Mo)?',
        type: 'number-set',
        expected: [1],
        maxFrequency: 4
      },
      {
        id: 'mediana_real',
        label: '3. Corregí el Error C: ¿cuál es el verdadero valor de la mediana (datos en las posiciones 5 y 6)?',
        type: 'number',
        unit: 'hermanos',
        expected: 1,
        commonErrors: [
          { value: 5.5, message: '5,5 es la posición central. Mirá las frecuencias acumuladas: F(0)=2 y F(1)=2+4=6, así que en las posiciones 5 y 6 el dato vale 1 hermano.' }
        ]
      }
    ],
    hints: [
      'Para la media desde tabla, multiplicá cada x por su f (0×2 + 1×4 + 2×3 + 3×1 = 13) y dividí entre n = 10.',
      'Para la moda, mirá qué valor de hermanos tiene f = 4: es «1 hermano».',
      'Para la mediana, 5,5 indica que busques las posiciones 5 y 6: ambas caen en la fila de «1 hermano» (porque F₁ = 2 y F₂ = 6).'
    ],
    solutionSteps: [
      'Corrección A (Media): Σ(x · f) = 0 + 4 + 6 + 3 = 13 hermanos → x̄ = 13 ÷ 10 = 1,3 hermanos (no se suman x sin frecuencia ni se divide por 4 filas).',
      'Corrección B (Moda): 4 es la frecuencia máxima, pero el valor del dato más repetido es Mo = 1 hermano.',
      'Corrección C (Mediana): 5,5 es la posición central; los datos en las posiciones 5 y 6 valen 1 y 1 → Me = 1 hermano.'
    ],
    commonErrorNote: 'Este ejercicio reúne los tres errores más frecuentes en un examen: dividir por filas, dar f como moda y dar la posición como mediana.'
  },
  {
    id: 'I-08',
    title: 'Integrador 8 (auditoría gráfica y de datos): Reconstruir el estudio correcto',
    source: { kind: 'integrador', label: 'Integrador I-08' },
    topic: 'integrador',
    level: 'desafio',
    skills: ['detectar-errores-graficos', 'frecuencia-faltante', 'porcentaje', 'media'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'En un informe sobre la cantidad de libros prestados por la biblioteca a n = 20 socios (valores 1, 2, 3 y 4 libros), una mancha tapó la frecuencia de «2 libros». Se sabe que:\n• 1 libro: f₁ = 5 socios\n• 2 libros: f₂ = ? socios\n• 3 libros: f₃ = 4 socios\n• 4 libros: f₄ = 2 socios\nAdemás, quien hizo el gráfico dibujó la barra de «1 libro» de 5 cuadritos y la de «3 libros» de 4 cuadritos, pero puso el título del eje Y como «Libros» en vez de «Cantidad de socios». Hallá los valores correctos.',
    parts: [
      {
        id: 'f2_faltante',
        label: '1. ¿Cuál es la frecuencia absoluta f₂ de «2 libros» para completar los n = 20 socios?',
        type: 'number',
        integerOnly: true,
        expected: 9
      },
      {
        id: 'pct_hasta_2',
        label: '2. ¿Qué porcentaje de los 20 socios pidió prestados 2 libros o menos (F₂ = f₁ + f₂) (%)?',
        type: 'number',
        unit: '%',
        expected: 70
      },
      {
        id: 'media_prestamos',
        label: '3. ¿Cuál es la media aritmética (x̄) de libros prestados por socio (suma de productos ÷ 20)?',
        type: 'number',
        unit: 'libros',
        expected: 2.15,
        roundingDecimals: 2
      },
      {
        id: 'error_rotulo',
        label: '4. ¿Cómo deben rotularse correctamente los ejes del gráfico de barras?',
        type: 'select',
        options: [
          { value: 'x_libros_y_socios', label: 'Eje horizontal (X): Cantidad de libros prestados (1, 2, 3, 4) | Eje vertical (Y): Cantidad de socios (frecuencia)' },
          { value: 'x_socios_y_libros', label: 'Eje horizontal (X): Cantidad de socios | Eje vertical (Y): Cantidad de libros' }
        ],
        expected: 'x_libros_y_socios'
      }
    ],
    hints: [
      'Restá a 20 las frecuencias conocidas: 20 − (5 + 4 + 2) = 9 socios.',
      'Hasta 2 libros inclusive: F₂ = 5 + 9 = 14 socios → (14 ÷ 20) × 100 = 70 %.',
      'Suma de productos: 1×5 + 2×9 + 3×4 + 4×2 = 5 + 18 + 12 + 8 = 43 libros → dividí 43 entre 20.'
    ],
    solutionSteps: [
      '1) Frecuencia faltante: f₂ = 20 − (5 + 4 + 2) = 9 socios.',
      '2) Acumulada hasta 2 libros: F₂ = 5 + 9 = 14 socios → (14 ÷ 20) × 100 = 70 %.',
      '3) Suma de productos: 1×5 + 2×9 + 3×4 + 4×2 = 43 → Media x̄ = 43 ÷ 20 = 2,15 libros por socio.',
      '4) Eje X: «Cantidad de libros prestados»; Eje Y: «Cantidad de socios».'
    ],
    commonErrorNote: 'En una distribución de frecuencias, el eje X lleva los valores de la variable y el eje Y lleva las frecuencias.'
  }
];

module.exports = { NUEVOS_3_4_INT };
