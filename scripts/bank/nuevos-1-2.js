'use strict';

const NUEVOS_1_2 = [
  // ================= TEMA 1: VARIABLES (N1-01 a N1-12) =================
  {
    id: 'N1-01',
    title: 'Distinguir variable, valor observado y frecuencia',
    source: { kind: 'nuevo', label: 'Práctica N1-01' },
    topic: 'variables',
    level: 'inicial',
    skills: ['dato-variable-frecuencia'],
    lessonId: 'L01',
    allowComparableVariant: false,
    prompt: 'En una actividad de aula (datos ficticios) se preguntó a 18 estudiantes cuántos útiles había en su cartuchera. La respuesta «6 útiles» apareció 5 veces. Identificá qué papel cumple cada elemento.',
    parts: [
      {
        id: 'variable',
        label: '1. ¿Cuál es la variable estadística estudiada?',
        type: 'select',
        options: [
          { value: 'cant_utiles', label: 'La cantidad de útiles por cartuchera' },
          { value: '18_est', label: 'Los 18 estudiantes consultados' },
          { value: '5_veces', label: 'Las 5 repeticiones' }
        ],
        expected: 'cant_utiles'
      },
      {
        id: 'valor_x',
        label: '2. ¿Qué representa «6 útiles» en ese registro?',
        type: 'select',
        options: [
          { value: 'valor', label: 'Un valor observado de la variable (x = 6)' },
          { value: 'frecuencia', label: 'La frecuencia absoluta (f = 6)' },
          { value: 'muestra', label: 'El tamaño total de la muestra (n = 6)' }
        ],
        expected: 'valor'
      },
      {
        id: 'frec_f',
        label: '3. ¿Qué representa «5 veces»?',
        type: 'select',
        options: [
          { value: 'frecuencia', label: 'La frecuencia absoluta de ese valor (f = 5)' },
          { value: 'valor', label: 'El valor de la variable (x = 5)' },
          { value: 'total', label: 'El total de estudiantes (n = 5)' }
        ],
        expected: 'frecuencia'
      }
    ],
    hints: [
      'La variable es la pregunta o característica general que se observa en cada integrante.',
      'El dato o valor (x) es una respuesta posible a esa pregunta («6 útiles»).',
      'La frecuencia (f) indica cuántas personas dieron esa misma respuesta («5 veces»).'
    ],
    solutionSteps: [
      'Variable estadística: «cantidad de útiles por cartuchera».',
      'Valor de la variable (x): «6 útiles».',
      'Frecuencia absoluta (f): 5 (hay 5 estudiantes con 6 útiles). El total de la muestra es n = 18.'
    ],
    commonErrorNote: 'No confundir el valor observado (6 útiles) con su frecuencia (5 estudiantes).'
  },
  {
    id: 'N1-02',
    title: 'Barrio de residencia y cantidad de cuadras caminadas',
    source: { kind: 'nuevo', label: 'Práctica N1-02' },
    topic: 'variables',
    level: 'inicial',
    skills: ['cualitativa-nominal', 'cuantitativa-discreta'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En una planilla ficticia de movilidad se anotan dos datos de cada estudiante: el barrio donde vive (San Martín, San Miguel, Don Bosco) y la cantidad entera de cuadras que camina hasta la parada (1, 2, 3, 4). Clasificá ambas variables.',
    parts: [
      {
        id: 'barrio',
        label: '1. Barrio de residencia',
        type: 'select',
        options: [
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (nombres de barrios sin jerarquía)' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (tienen un orden numérico obligatorio)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' }
        ],
        expected: 'cualitativa-nominal'
      },
      {
        id: 'cuadras',
        label: '2. Cantidad entera de cuadras caminadas hasta la parada',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (conteo de cuadras enteras)' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-discreta'
      }
    ],
    hints: [
      'El nombre del barrio es una palabra sin orden jerárquico.',
      'Contar cuántas cuadras enteras se caminan arroja números enteros (1, 2, 3, 4).'
    ],
    solutionSteps: [
      'Barrio de residencia: Cualitativa nominal.',
      'Cantidad de cuadras contadas: Cuantitativa discreta.'
    ],
    commonErrorNote: 'Un mismo relevamiento puede incluir variables cualitativas y cuantitativas a la vez.'
  },
  {
    id: 'N1-03',
    title: 'Nivel de batería indicado con palabras ordenadas',
    source: { kind: 'nuevo', label: 'Práctica N1-03' },
    topic: 'variables',
    level: 'inicial',
    skills: ['cualitativa-ordinal'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Una aplicación muestra el estado de carga de una tablet con cuatro categorías verbales: «Crítico, Bajo, Medio, Completo». Clasificá la variable y contrastala con el porcentaje exacto de carga.',
    parts: [
      {
        id: 'categoria_verbal',
        label: '1. Estado de carga expresado como «Crítico, Bajo, Medio, Completo»',
        type: 'select',
        options: [
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (categorías no numéricas con orden creciente de carga)' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (palabras sin ningún orden)' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' }
        ],
        expected: 'cualitativa-ordinal'
      },
      {
        id: 'contraste_mah',
        label: '2. Si en cambio se mide la energía almacenada en miliamperios-hora (mAh) o voltios con un instrumento de laboratorio, ¿de qué tipo general es?',
        type: 'select',
        options: [
          { value: 'cuantitativa', label: 'Cuantitativa (mide una magnitud física numérica)' },
          { value: 'cualitativa', label: 'Cualitativa nominal' }
        ],
        expected: 'cuantitativa'
      }
    ],
    hints: [
      'Las palabras «Crítico, Bajo, Medio, Completo» no son números, pero sí están ordenadas de menor a mayor nivel.',
      'Por eso se trata de una variable cualitativa ordinal.'
    ],
    solutionSteps: [
      'La escala verbal «Crítico < Bajo < Medio < Completo» es Cualitativa Ordinal.',
      'Cuando esa misma característica se mide numéricamente en unidades físicas, pasa a ser una variable Cuantitativa.'
    ],
    commonErrorNote: 'Una misma característica puede registrarse como cualitativa ordinal (categorías de nivel) o cuantitativa (medición numérica).'
  },
  {
    id: 'N1-04',
    title: 'Número de línea de colectivo y código de aula',
    source: { kind: 'nuevo', label: 'Práctica N1-04' },
    topic: 'variables',
    level: 'inicial',
    skills: ['codigos-numericos', 'cualitativa-nominal'],
    lessonId: 'L01',
    allowComparableVariant: false,
    prompt: 'En una planilla escolar se anota la línea de colectivo que usa cada estudiante («25», «40», «60», «70»). Un compañero dice: «Como son números enteros, es cuantitativa discreta y podemos calcular la línea promedio sumando 25 + 40 + 60». ¿Es correcto ese razonamiento?',
    parts: [
      {
        id: 'clasif_linea',
        label: '1. ¿Qué tipo de variable es el número de línea de colectivo?',
        type: 'select',
        options: [
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (el número funciona como nombre o etiqueta del recorrido)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (porque se escribe con cifras)' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' }
        ],
        expected: 'cualitativa-nominal'
      },
      {
        id: 'promedio_linea',
        label: '2. ¿Tiene sentido matemático calcular el promedio de los números de línea (por ejemplo, decir que el promedio es la línea 41,6)?',
        type: 'select',
        options: [
          { value: 'no_etiqueta', label: 'No, porque «60» no representa el triple de cantidad que «20»: son códigos identificadores y solo admite calcular la moda' },
          { value: 'si_suma', label: 'Sí, siempre que haya números se debe calcular el promedio' }
        ],
        expected: 'no_etiqueta'
      }
    ],
    hints: [
      'Preguntate si la Línea 60 «mide o cuenta el doble» que la Línea 30.',
      'No: el número de línea es simplemente un código que identifica el recorrido.',
      'Cuando un número actúa como etiqueta sin medir cantidad, la variable es cualitativa nominal.'
    ],
    solutionSteps: [
      'El número de línea de colectivo identifica una categoría (el recorrido), no una cantidad.',
      'Por lo tanto, es una variable Cualitativa Nominal y no tiene sentido sumar ni promediar sus códigos.'
    ],
    commonErrorNote: 'Regla clave: «ver números no alcanza para que sea cuantitativa». Distinguí siempre cantidad de etiqueta.'
  },
  {
    id: 'N1-05',
    title: 'Masa de mochilas escolares y cantidad de carpetas',
    source: { kind: 'nuevo', label: 'Práctica N1-05' },
    topic: 'variables',
    level: 'intermedio',
    skills: ['cuantitativa-continua', 'cuantitativa-discreta'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En un proyecto de salud postural (datos ficticios) se pesa cada mochila en kilogramos (3,4 kg; 4,15 kg; 5,0 kg) y se cuenta cuántas carpetas lleva adentro (1, 2, 3, 4). Clasificá ambas variables.',
    parts: [
      {
        id: 'peso_mochila',
        label: '1. Masa/peso de la mochila en kilogramos (kg)',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua (magnitud física continua que admite valores intermedios)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-continua'
      },
      {
        id: 'cant_carpetas',
        label: '2. Cantidad de carpetas dentro de la mochila',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (conteo de objetos enteros)' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' }
        ],
        expected: 'cuantitativa-discreta'
      }
    ],
    hints: [
      'Los kilogramos se miden con balanza y admiten cualquier fracción de gramo intermedia.',
      'Las carpetas se cuentan de a unidades enteras.'
    ],
    solutionSteps: [
      'Masa/peso de la mochila en kg: Cuantitativa continua (proviene de medir una magnitud continua).',
      'Cantidad de carpetas: Cuantitativa discreta (proviene de contar unidades enteras).'
    ],
    commonErrorNote: 'Que una mochila pese justo «5,0 kg» no hace discreto al peso: la magnitud admite valores intermedios.'
  },
  {
    id: 'N1-06',
    title: 'Orden correcto de categorías ordinales en una encuesta',
    source: { kind: 'nuevo', label: 'Práctica N1-06' },
    topic: 'variables',
    level: 'intermedio',
    skills: ['cualitativa-ordinal', 'orden-jerarquico'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Se consultó con qué frecuencia los estudiantes leen noticias científicas: «Nunca, Rara vez, A veces, Frecuentemente, Siempre». Identificá el tipo de variable y su orden lógico.',
    parts: [
      {
        id: 'tipo',
        label: '1. Tipo de variable',
        type: 'select',
        options: [
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' }
        ],
        expected: 'cualitativa-ordinal'
      },
      {
        id: 'orden',
        label: '2. ¿En qué orden deben disponerse las filas de la tabla para poder leer la columna acumulada (F)?',
        type: 'select',
        options: [
          { value: 'creciente', label: 'Nunca → Rara vez → A veces → Frecuentemente → Siempre (o exactamente al revés)' },
          { value: 'alfabetico', label: 'A veces → Frecuentemente → Nunca → Rara vez → Siempre (orden alfabético)' }
        ],
        expected: 'creciente'
      }
    ],
    hints: [
      'Las opciones son palabras que indican menor o mayor asiduidad.',
      'Para que la acumulación tenga sentido, las filas deben seguir esa escala gradual.'
    ],
    solutionSteps: [
      'Es una variable Cualitativa Ordinal porque sus categorías siguen una progresión de intensidad.',
      'Deben ordenarse según esa escala: Nunca → Rara vez → A veces → Frecuentemente → Siempre.'
    ],
    commonErrorNote: 'Si desordenás una variable ordinal en la tabla, la frecuencia acumulada pierde significado.'
  },
  {
    id: 'N1-07',
    title: 'Estatura anotada en centímetros enteros: ¿discreta o continua?',
    source: { kind: 'nuevo', label: 'Práctica N1-07' },
    topic: 'variables',
    level: 'intermedio',
    skills: ['magnitud-vs-registro', 'cuantitativa-continua'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En la ficha médica se anotaron las estaturas redondeadas en centímetros sin decimales: 158 cm, 161 cm, 164 cm, 170 cm. Un alumno afirma que como están escritas sin coma decimal, la estatura es una variable discreta. Analizá la afirmación.',
    parts: [
      {
        id: 'clasif_estatura',
        label: '1. ¿Qué tipo de variable es la estatura?',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' }
        ],
        expected: 'cuantitativa-continua'
      },
      {
        id: 'explicacion',
        label: '2. ¿Por qué sigue siendo continua aunque se haya anotado en centímetros enteros?',
        type: 'select',
        options: [
          {
            value: 'crecimiento_continuo',
            label: 'Porque nadie crece pegando saltos de 1 cm de golpe: la longitud es una magnitud continua y anotar números enteros es solo un redondeo de registro'
          },
          {
            value: 'cambia_segun_unidad',
            label: 'Porque en metros es continua pero en centímetros se vuelve discreta'
          }
        ],
        expected: 'crecimiento_continuo'
      }
    ],
    hints: [
      'Pensá si una persona pasa de medir 160 cm a 161 cm sin pasar por 160,4 cm.',
      'Cambiar de metros (1,64 m) a centímetros (164 cm) o redondear el milímetro no cambia la naturaleza física de la longitud.'
    ],
    solutionSteps: [
      'La estatura es una variable Cuantitativa Continua.',
      'Ni el cambio de unidad (metros a centímetros) ni el redondeo del instrumento alteran el hecho de que la longitud admite infinitos valores intermedios.'
    ],
    commonErrorNote: 'No confundir «cómo se redondeó al anotar» con «qué tipo de magnitud es».'
  },
  {
    id: 'N1-08',
    title: 'Identificar la única variable cuantitativa discreta del grupo',
    source: { kind: 'nuevo', label: 'Práctica N1-08' },
    topic: 'variables',
    level: 'intermedio',
    skills: ['cuantitativa-discreta', 'clasificar-variable'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Observá estas cuatro variables registradas en un club deportivo (ejemplo ficticio) y clasificá cada una para identificar cuál es cuantitativa discreta.',
    parts: [
      {
        id: 'v1',
        label: '1. Cantidad de partidos ganados en el campeonato (0, 1, 2, 3...)',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-discreta'
      },
      {
        id: 'v2',
        label: '2. Duración exacta de cada entrenamiento medida con reloj',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-continua'
      },
      {
        id: 'v3',
        label: '3. Categoría de edad del torneo («Sub-13, Sub-15, Sub-17»)',
        type: 'select',
        options: [
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' }
        ],
        expected: 'cualitativa-ordinal'
      }
    ],
    hints: [
      'Los partidos ganados se cuentan uno por uno con números enteros.',
      'La duración es tiempo (magnitud continua), y las divisiones Sub-13 < Sub-15 < Sub-17 son categorías ordenadas por etapa.'
    ],
    solutionSteps: [
      '1) Cantidad de partidos ganados: Cuantitativa discreta (conteo entero).',
      '2) Duración del entrenamiento: Cuantitativa continua (magnitud tiempo).',
      '3) Categoría del torneo (Sub-13, Sub-15, Sub-17): Cualitativa ordinal (categorías ordenadas).'
    ],
    commonErrorNote: 'En «Sub-13, Sub-15, Sub-17» el número forma parte del nombre de una categoría ordenada por edad.'
  },
  {
    id: 'N1-09',
    title: 'Códigos numéricos de respuesta (1 = Sí, 2 = No, 3 = No sabe)',
    source: { kind: 'nuevo', label: 'Práctica N1-09' },
    topic: 'variables',
    level: 'desafio',
    skills: ['codigos-numericos', 'cualitativa-nominal'],
    lessonId: 'L01',
    allowComparableVariant: false,
    prompt: 'Para cargar rápido una encuesta en una planilla, se codificó la respuesta a «¿Tenés bicicleta propia?» usando: 1 = Sí, 2 = No, 3 = No responde. Analizá si esa codificación convierte a la variable en cuantitativa.',
    parts: [
      {
        id: 'naturaleza',
        label: '1. ¿Qué tipo de variable sigue siendo «tenencia de bicicleta» aunque se cargue con los códigos 1, 2 y 3?',
        type: 'select',
        options: [
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (los números 1, 2 y 3 son etiquetas que reemplazan a palabras sin orden)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (porque en la planilla hay números 1, 2 y 3)' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cualitativa-nominal'
      },
      {
        id: 'operacion_valida',
        label: '2. ¿Qué cálculo sí es válido hacer con la columna de códigos 1, 2 y 3?',
        type: 'select',
        options: [
          { value: 'contar_frecuencias', label: 'Contar cuántos 1, cuántos 2 y cuántos 3 hay (frecuencias y porcentajes de cada categoría) y hallar la moda' },
          { value: 'promediar_codigos', label: 'Sumar todos los 1, 2 y 3 y dividir por n para obtener una media de 1,65' }
        ],
        expected: 'contar_frecuencias'
      }
    ],
    hints: [
      'Si hubiéramos puesto 9 = Sí y 0 = No, el significado de la respuesta sería el mismo.',
      'Por lo tanto, el 1, 2 y 3 son simples abreviaturas de categorías nominales.'
    ],
    solutionSteps: [
      'La variable es Cualitativa Nominal porque las respuestas reales («Sí», «No», «No responde») son categorías sin orden.',
      'Con esos códigos solo corresponde contar frecuencias absolutas, relativas, porcentajes y determinar la moda; promediar los códigos carece de sentido.'
    ],
    commonErrorNote: 'Codificar categorías con números en una planilla no autoriza a calcularles media ni mediana.'
  },
  {
    id: 'N1-10',
    title: 'Dos formas de registrar el uso del celular en una misma encuesta',
    source: { kind: 'nuevo', label: 'Práctica N1-10' },
    topic: 'variables',
    level: 'desafio',
    skills: ['clasificar-variable', 'transferencia'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En un estudio sobre hábitos digitales (datos ficticios) se hacen tres preguntas distintas sobre el celular:\nA) ¿Para qué lo usás principalmente? (Estudiar, Juegos, Redes, Música).\nB) ¿Cuántas aplicaciones educativas tenés instaladas? (0, 1, 2, 3, 4...).\nC) ¿Cuánto tiempo total de pantalla marcó el contador hoy? (2,4 h; 3,15 h...).\nClasificá cada una.',
    parts: [
      {
        id: 'preg_a',
        label: 'Pregunta A: Uso principal del celular',
        type: 'select',
        options: [
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' }
        ],
        expected: 'cualitativa-nominal'
      },
      {
        id: 'preg_b',
        label: 'Pregunta B: Cantidad de aplicaciones educativas instaladas',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-discreta'
      },
      {
        id: 'preg_c',
        label: 'Pregunta C: Tiempo diario de pantalla en horas',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' }
        ],
        expected: 'cuantitativa-continua'
      }
    ],
    hints: [
      '«Celular» es el tema general, pero cada pregunta define una variable distinta.',
      'El uso principal nombra actividades; las aplicaciones se cuentan de a una; el tiempo se mide de forma continua.'
    ],
    solutionSteps: [
      'A) Uso principal: Cualitativa nominal (categorías sin orden).',
      'B) Cantidad de aplicaciones instaladas: Cuantitativa discreta (conteo entero).',
      'C) Tiempo de pantalla: Cuantitativa continua (medición de tiempo).'
    ],
    commonErrorNote: 'No clasificar por el objeto («el celular»), sino por la característica exacta que mide o pregunta cada ítem.'
  },
  {
    id: 'N1-11',
    title: '¿Cuándo un conjunto de datos discretos tiene promedio con coma?',
    source: { kind: 'nuevo', label: 'Práctica N1-11' },
    topic: 'variables',
    level: 'desafio',
    skills: ['cuantitativa-discreta', 'media-conceptual'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En el ejemplo de la guía de 20 estudiantes, la variable «cantidad de libros leídos» toma los valores 0, 1, 2, 3 y 4, y el promedio da 1,5 libros. Una compañera pregunta: «Si el promedio dio 1,5 con coma, ¿entonces la variable cantidad de libros leídos es continua?». Respondé y justificá.',
    parts: [
      {
        id: 'respuesta',
        label: '1. ¿Qué tipo de variable es «cantidad de libros completos leídos»?',
        type: 'select',
        options: [
          {
            value: 'discreta',
            label: 'Sigue siendo cuantitativa discreta: cada dato observado es un conteo entero (0, 1, 2, 3, 4); el 1,5 es un resumen (el promedio del grupo), no un dato individual obligatorio'
          },
          {
            value: 'continua',
            label: 'Pasa a ser cuantitativa continua porque su promedio tiene coma'
          }
        ],
        expected: 'discreta'
      },
      {
        id: 'rúbrica',
        label: '2. Explicá con tus palabras la diferencia entre los valores que toma la variable y el valor del promedio',
        type: 'rubric',
        placeholder: 'Explicá qué valores puede responder cada estudiante y por qué el promedio puede tener decimales...',
        criteria: [
          'Aclaré que cada estudiante respondió con un número entero de libros (0, 1, 2, 3 o 4), por lo que la variable es discreta.',
          'Expliqué que 1,5 libros surge de dividir la suma (30) entre 20 estudiantes y representa un reparto promedio, no que alguien haya respondido 1,5.'
        ],
        modelAnswer: 'La variable es cuantitativa discreta porque cada observación cuenta libros enteros (0, 1, 2, 3, 4). Que el promedio dé 1,5 libros es resultado de dividir el total (30) entre los 20 estudiantes, y no cambia la naturaleza discreta de los datos.'
      }
    ],
    hints: [
      'Mirá qué valores respondió cada persona: 0, 1, 2, 3 o 4 libros.',
      'Al dividir la suma de números enteros (30) entre 20 personas aparece el decimal 1,5.',
      'La clasificación de la variable depende de los valores observados, no de si el promedio da con coma.'
    ],
    solutionSteps: [
      'La variable «cantidad de libros leídos» es Cuantitativa Discreta porque proviene de un conteo entero.',
      'El promedio (1,5 libros) es una medida resumen que reparte los 30 libros entre 20 estudiantes; un promedio decimal no convierte en continua a una variable discreta.'
    ],
    commonErrorNote: 'Casi todas las variables discretas (hermanos, hijos, goles, faltas) suelen tener promedios con decimales.'
  },
  {
    id: 'N1-12',
    title: 'Diseño de variables para un estudio del kiosco escolar',
    source: { kind: 'nuevo', label: 'Práctica N1-12' },
    topic: 'variables',
    level: 'desafio',
    skills: ['clasificar-variable', 'transferencia'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Querés armar una consulta ficticia sobre la cantina escolar que incluya exactamente un ejemplo de cada uno de los cuatro tipos de variables. Asociá cada pregunta con su clasificación.',
    parts: [
      {
        id: 'p_nominal',
        label: '1. ¿Cuál de estas preguntas define una variable cualitativa nominal?',
        type: 'select',
        options: [
          { value: 'alimento', label: '¿Qué alimento elegís con más frecuencia en el recreo? (Fruta, Sándwich, Alfajor, Empanada)' },
          { value: 'satisfaccion', label: '¿Qué nivel de conformidad tenés con la atención? (Bajo, Medio, Alto)' },
          { value: 'espera', label: '¿Cuántos minutos exactos esperaste en la fila?' }
        ],
        expected: 'alimento'
      },
      {
        id: 'p_ordinal',
        label: '2. ¿Cuál define una variable cualitativa ordinal?',
        type: 'select',
        options: [
          { value: 'satisfaccion', label: '¿Qué nivel de conformidad tenés con la atención? (Bajo, Medio, Alto)' },
          { value: 'alimento', label: '¿Qué alimento elegís en el recreo?' },
          { value: 'veces', label: '¿Cuántos días de esta semana compraste en la cantina? (0 a 5)' }
        ],
        expected: 'satisfaccion'
      },
      {
        id: 'p_discreta',
        label: '3. ¿Cuál define una variable cuantitativa discreta?',
        type: 'select',
        options: [
          { value: 'veces', label: '¿Cuántos días de esta semana compraste en la cantina? (0, 1, 2, 3, 4, 5)' },
          { value: 'espera', label: '¿Cuánto tiempo exacto esperaste en la fila medido en segundos?' }
        ],
        expected: 'veces'
      },
      {
        id: 'p_continua',
        label: '4. ¿Y cuál define una variable cuantitativa continua?',
        type: 'select',
        options: [
          { value: 'espera', label: '¿Cuánto tiempo exacto esperaste en la fila medido con cronómetro?' },
          { value: 'veces', label: '¿Cuántos productos compraste hoy?' }
        ],
        expected: 'espera'
      }
    ],
    hints: [
      'Nominal: palabras sin orden (tipo de alimento). Ordinal: palabras con jerarquía (Bajo, Medio, Alto).',
      'Discreta: conteo de días enteros (0 a 5). Continua: medición de tiempo.'
    ],
    solutionSteps: [
      'Cualitativa nominal: tipo de alimento elegido.',
      'Cualitativa ordinal: nivel de conformidad (Bajo, Medio, Alto).',
      'Cuantitativa discreta: cantidad de días de la semana que compró (0 a 5).',
      'Cuantitativa continua: tiempo de espera en la fila.'
    ],
    commonErrorNote: 'Comprobá que cada tipo de variable responde a una pregunta distinta.'
  },

  // ================= TEMA 2: FRECUENCIAS (N2-01 a N2-12) =================
  {
    id: 'N2-01',
    title: 'Conteo de frecuencias absolutas en el ejemplo de 10 estudiantes',
    source: { kind: 'nuevo', label: 'Práctica N2-01' },
    topic: 'frecuencias',
    level: 'inicial',
    skills: ['frecuencia-absoluta'],
    lessonId: 'L03',
    allowComparableVariant: true,
    prompt: 'En el ejemplo de las fichas didácticas, n = 10 estudiantes respondieron cuántos libros leyeron:\n0, 1, 1, 2, 0, 1, 3, 2, 1, 4.\nCompletá la columna de frecuencias absolutas (f) y verificá que sumen 10.',
    dataset: [0, 1, 1, 2, 0, 1, 3, 2, 1, 4],
    parts: [
      {
        id: 'tabla_f',
        label: 'Completá la frecuencia absoluta (f) de cada valor (n = 10)',
        type: 'freq-table',
        totalN: 10,
        columns: ['f'],
        rows: [
          { x: 0, label: '0 libros', f: 2, F: 2 },
          { x: 1, label: '1 libro', f: 4, F: 6 },
          { x: 2, label: '2 libros', f: 2, F: 8 },
          { x: 3, label: '3 libros', f: 1, F: 9 },
          { x: 4, label: '4 libros', f: 1, F: 10 }
        ]
      }
    ],
    hints: [
      'Contá cuántas veces aparece cada número del 0 al 4 en la lista de 10 datos.',
      'El 0 está 2 veces; el 1 está 4 veces; el 2 está 2 veces; el 3 está 1 vez; el 4 está 1 vez.',
      'Verificá: 2 + 4 + 2 + 1 + 1 = 10.'
    ],
    solutionSteps: [
      'f(0) = 2; f(1) = 4; f(2) = 2; f(3) = 1; f(4) = 1.',
      'Suma de frecuencias absolutas: 2 + 4 + 2 + 1 + 1 = 10 (coincide con los n = 10 estudiantes).'
    ],
    commonErrorNote: 'No confundir este ejemplo de 10 estudiantes (frecuencias 2, 4, 2, 1, 1) con el de la guía de 20 estudiantes (3, 8, 6, 2, 1).'
  },
  {
    id: 'N2-02',
    title: 'Paso de frecuencia absoluta a relativa y porcentaje (n = 10)',
    source: { kind: 'nuevo', label: 'Práctica N2-02' },
    topic: 'frecuencias',
    level: 'inicial',
    skills: ['frecuencia-relativa', 'porcentaje'],
    lessonId: 'L04',
    allowComparableVariant: true,
    prompt: 'Con la tabla de 10 estudiantes (0 libros: f=2; 1 libro: f=4; 2 libros: f=2; 3 libros: f=1; 4 libros: f=1), completá las columnas de frecuencia relativa (fr) y porcentaje (%).',
    parts: [
      {
        id: 'tabla_fr_pct',
        label: 'Completá fr y % para cada fila (n = 10)',
        type: 'freq-table',
        totalN: 10,
        columns: ['fr', 'pct'],
        rows: [
          { x: 0, label: '0 libros (f = 2)', f: 2 },
          { x: 1, label: '1 libro (f = 4)', f: 4 },
          { x: 2, label: '2 libros (f = 2)', f: 2 },
          { x: 3, label: '3 libros (f = 1)', f: 1 },
          { x: 4, label: '4 libros (f = 1)', f: 1 }
        ]
      }
    ],
    hints: [
      'Como n = 10, dividir por 10 corre la coma un lugar a la izquierda: 2 ÷ 10 = 0,20; 4 ÷ 10 = 0,40; 1 ÷ 10 = 0,10.',
      'Para el porcentaje, multiplicá cada fr por 100: 20 %, 40 %, 20 %, 10 %, 10 %.'
    ],
    solutionSteps: [
      '0 libros: fr = 2/10 = 0,20 → 20 %.',
      '1 libro: fr = 4/10 = 0,40 → 40 %.',
      '2 libros: fr = 2/10 = 0,20 → 20 %.',
      '3 libros: fr = 1/10 = 0,10 → 10 %.',
      '4 libros: fr = 1/10 = 0,10 → 10 %. Suma de fr = 1,00 y suma de % = 100 %.'
    ],
    commonErrorNote: 'Recordá que en la columna fr va la proporción sobre 1 (como 0,40) y en la columna % va sobre 100 (40 %).'
  },
  {
    id: 'N2-03',
    title: 'Hallar el total n y la última acumulada',
    source: { kind: 'nuevo', label: 'Práctica N2-03' },
    topic: 'frecuencias',
    level: 'inicial',
    skills: ['frecuencia-absoluta', 'frecuencia-acumulada'],
    lessonId: 'L03',
    allowComparableVariant: false,
    prompt: 'En un registro de mascotas por hogar, las frecuencias absolutas fueron: 0 mascotas (f = 4), 1 mascota (f = 9), 2 mascotas (f = 5) y 3 mascotas (f = 2). Calculá el tamaño total de la muestra (n) y las frecuencias acumuladas F₂ y F₄.',
    parts: [
      {
        id: 'total_n',
        label: '1. ¿Cuál es el total de hogares encuestados (n)?',
        type: 'number',
        integerOnly: true,
        expected: 20
      },
      {
        id: 'F2',
        label: '2. ¿Cuánto vale la frecuencia acumulada hasta 1 mascota (F₂ = f₁ + f₂)?',
        type: 'number',
        integerOnly: true,
        expected: 13
      },
      {
        id: 'F4',
        label: '3. ¿Cuánto vale la última frecuencia acumulada (F₄, hasta 3 mascotas)?',
        type: 'number',
        integerOnly: true,
        expected: 20
      }
    ],
    hints: [
      'Sumá todas las frecuencias absolutas: 4 + 9 + 5 + 2.',
      'Para F₂ sumá las dos primeras filas: 4 + 9.',
      'La última frecuencia acumulada (F₄) siempre coincide con el total n.'
    ],
    solutionSteps: [
      'Total de observaciones: n = 4 + 9 + 5 + 2 = 20 hogares.',
      'Frecuencia acumulada hasta 1 mascota: F₂ = 4 + 9 = 13 hogares.',
      'Última frecuencia acumulada: F₄ = 4 + 9 + 5 + 2 = 20 (coincide con n = 20).'
    ],
    commonErrorNote: 'Si el último valor de F no coincide con n, revisá las sumas parciales.'
  },
  {
    id: 'N2-04',
    title: 'Distinguir «exactamente 2» de «hasta 2» en la tabla de libros (n = 20)',
    source: { kind: 'nuevo', label: 'Práctica N2-04' },
    topic: 'frecuencias',
    level: 'inicial',
    skills: ['frecuencia-acumulada', 'interpretacion'],
    lessonId: 'L05',
    allowComparableVariant: false,
    prompt: 'En el ejemplo guiado de n = 20 estudiantes de la guía, las frecuencias de libros leídos son: 0 libros (f=3), 1 libro (f=8), 2 libros (f=6), 3 libros (f=2), 4 libros (f=1). Respondé las tres preguntas comparando f y F.',
    parts: [
      {
        id: 'exactamente_2',
        label: '1. ¿Cuántos estudiantes leyeron exactamente 2 libros?',
        type: 'number',
        integerOnly: true,
        expected: 6
      },
      {
        id: 'hasta_2',
        label: '2. ¿Cuántos estudiantes leyeron hasta 2 libros inclusive (2 libros o menos)?',
        type: 'number',
        integerOnly: true,
        expected: 17,
        commonErrors: [
          { value: 6, message: '6 leyeron exactamente 2 libros. «Hasta 2 libros inclusive» suma quienes leyeron 0, 1 o 2 libros: 3 + 8 + 6 = 17.' }
        ]
      },
      {
        id: 'mas_de_2',
        label: '3. ¿Cuántos estudiantes leyeron más de 2 libros (3 o 4 libros)?',
        type: 'number',
        integerOnly: true,
        expected: 3,
        commonErrors: [
          { value: 9, message: '«Más de 2 libros» no incluye el 2: sumá únicamente quienes leyeron 3 libros (2) y 4 libros (1): 2 + 1 = 3.' }
        ]
      }
    ],
    hints: [
      '«Exactamente 2» mira solo la frecuencia f de la fila 2.',
      '«Hasta 2 inclusive» mira la acumulada F de la fila 2: 3 + 8 + 6 = 17.',
      '«Más de 2» abarca los valores mayores que 2 (3 y 4 libros): 2 + 1 = 3 (notá que 17 + 3 = 20).'
    ],
    solutionSteps: [
      'Exactamente 2 libros: f(2) = 6 estudiantes.',
      'Hasta 2 libros inclusive: F(2) = 3 + 8 + 6 = 17 estudiantes.',
      'Más de 2 libros (3 o 4 libros): f(3) + f(4) = 2 + 1 = 3 estudiantes.'
    ],
    commonErrorNote: 'Observá que quienes leyeron «hasta 2 libros» (17) más quienes leyeron «más de 2 libros» (3) completan los 20 estudiantes.'
  },
  {
    id: 'N2-05',
    title: 'Reconstruir frecuencias absolutas a partir de porcentajes (n = 50)',
    source: { kind: 'nuevo', label: 'Práctica N2-05' },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['porcentaje', 'frecuencia-absoluta'],
    lessonId: 'L04',
    allowComparableVariant: false,
    prompt: 'En un relevamiento a n = 50 estudiantes sobre su taller artístico elegido, se informó que el 40 % eligió Música, el 30 % Teatro, el 20 % Pintura y el 10 % Danza. Calculá cuántos estudiantes (frecuencia absoluta f) eligieron cada taller.',
    parts: [
      {
        id: 'f_musica',
        label: '1. Estudiantes en Música (40 % de 50)',
        type: 'number',
        integerOnly: true,
        expected: 20
      },
      {
        id: 'f_teatro',
        label: '2. Estudiantes en Teatro (30 % de 50)',
        type: 'number',
        integerOnly: true,
        expected: 15
      },
      {
        id: 'f_pintura',
        label: '3. Estudiantes en Pintura (20 % de 50)',
        type: 'number',
        integerOnly: true,
        expected: 10
      },
      {
        id: 'f_danza',
        label: '4. Estudiantes en Danza (10 % de 50)',
        type: 'number',
        integerOnly: true,
        expected: 5
      }
    ],
    hints: [
      'Si f ÷ n = fr, entonces para recuperar f multiplicamos el total n por la frecuencia relativa (o hacemos porcentaje × n ÷ 100).',
      'Por ejemplo, el 40 % de 50 es 0,40 × 50 = 20 estudiantes.',
      'Comprobá al final que las cuatro cantidades enteras sumen 50.'
    ],
    solutionSteps: [
      'Música: 0,40 × 50 = 20 estudiantes.',
      'Teatro: 0,30 × 50 = 15 estudiantes.',
      'Pintura: 0,20 × 50 = 10 estudiantes.',
      'Danza: 0,10 × 50 = 5 estudiantes. Comprobación: 20 + 15 + 10 + 5 = 50.'
    ],
    commonErrorNote: 'El porcentaje no es la cantidad de personas salvo cuando n = 100; con n = 50 cada 10 % equivale a 5 personas.'
  },
  {
    id: 'N2-06',
    title: 'Diferencia entre «más de 1» y «al menos 1»',
    source: { kind: 'nuevo', label: 'Práctica N2-06' },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['frecuencia-acumulada', 'interpretacion'],
    lessonId: 'L05',
    allowComparableVariant: false,
    prompt: 'En un curso de n = 25 estudiantes se consultó cuántos deportes practican por semana: 0 deportes (f = 5), 1 deporte (f = 11), 2 deportes (f = 6), 3 deportes (f = 3). Calculá cuántos practican «al menos 1 deporte» y cuántos practican «más de 1 deporte».',
    parts: [
      {
        id: 'al_menos_1',
        label: '1. Estudiantes que practican «al menos 1 deporte» (1 o más deportes)',
        type: 'number',
        integerOnly: true,
        expected: 20,
        commonErrors: [
          { value: 11, message: '11 practican exactamente 1 deporte. «Al menos 1» significa 1, 2 o 3 deportes: 11 + 6 + 3 = 20.' },
          { value: 9, message: '9 son quienes practican más de 1 deporte (2 o 3). «Al menos 1» incluye también a los 11 que practican 1 deporte.' }
        ]
      },
      {
        id: 'mas_de_1',
        label: '2. Estudiantes que practican «más de 1 deporte» (2 o 3 deportes)',
        type: 'number',
        integerOnly: true,
        expected: 9,
        commonErrors: [
          { value: 20, message: '20 incluye a quienes practican 1 deporte. «Más de 1» exige estrictamente más que 1 (es decir, 2 o 3 deportes: 6 + 3 = 9).' }
        ]
      },
      {
        id: 'pct_al_menos_1',
        label: '3. ¿Qué porcentaje del curso practica al menos 1 deporte (%)?',
        type: 'number',
        unit: '%',
        expected: 80
      }
    ],
    hints: [
      '«Al menos 1» significa «como mínimo 1» (1, 2 o 3 deportes). También podés restar al total (25) los 5 que practican 0 deportes.',
      '«Más de 1» significa estrictamente mayor que 1 (solo 2 o 3 deportes).',
      'Para el porcentaje de 20 sobre 25: (20 ÷ 25) × 100.'
    ],
    solutionSteps: [
      'Al menos 1 deporte (1, 2 o 3): 11 + 6 + 3 = 20 estudiantes (o 25 − 5 = 20).',
      'Más de 1 deporte (2 o 3): 6 + 3 = 9 estudiantes.',
      'Porcentaje con al menos 1 deporte: (20 ÷ 25) × 100 = 80 %.'
    ],
    commonErrorNote: '«Al menos k» incluye al valor k (≥ k); «más de k» no incluye al valor k (> k).'
  },
  {
    id: 'N2-07',
    title: 'Detectar el efecto del redondeo en una tabla con n = 12',
    source: { kind: 'nuevo', label: 'Práctica N2-07' },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['redondeo', 'frecuencia-relativa', 'porcentaje'],
    lessonId: 'L04',
    allowComparableVariant: false,
    prompt: 'Tres categorías empatan con frecuencia f = 4 cada una en un grupo de n = 12 estudiantes (4 + 4 + 4 = 12). Al calcular la frecuencia relativa de cada fila obtenemos 4 ÷ 12 = 1/3 = 0,3333... Si redondeamos cada fila a dos decimales (0,33 y 33,33 %), analizá qué pasa con la suma.',
    parts: [
      {
        id: 'fr_fila',
        label: '1. ¿Cuál es la frecuencia relativa redondeada a 2 decimales de cada una de las tres filas?',
        type: 'number',
        subkind: 'fr',
        expected: { numerator: 4, denominator: 12 },
        roundingDecimals: 2
      },
      {
        id: 'suma_redondeada',
        label: '2. Si sumás tres veces 0,33 (los tres valores redondeados), ¿cuánto da esa suma?',
        type: 'number',
        expected: 0.99,
        roundingDecimals: 2
      },
      {
        id: 'explicacion_redondeo',
        label: '3. ¿Significa ese 0,99 (o 99,99 %) que la tabla está mal hecha?',
        type: 'select',
        options: [
          {
            value: 'no_es_redondeo',
            label: 'No: en fracción exacta 4/12 + 4/12 + 4/12 = 12/12 = 1; la diferencia de 0,01 se debe únicamente a haber truncado los decimales periódicos al mostrar'
          },
          {
            value: 'si_falta_alumno',
            label: 'Sí, significa que nos olvidamos de contar a un estudiante'
          }
        ],
        expected: 'no_es_redondeo'
      }
    ],
    hints: [
      '4 ÷ 12 = 0,3333..., que redondeado a dos cifras decimales se escribe 0,33.',
      '0,33 + 0,33 + 0,33 = 0,99.',
      'Pero las fracciones exactas suman 4/12 + 4/12 + 4/12 = 12/12 = 1.'
    ],
    solutionSteps: [
      'Cada fila tiene fr = 4/12 ≈ 0,33 (33,33 %).',
      'La suma de los redondeos da 0,33 + 0,33 + 0,33 = 0,99 (y 33,33 % × 3 = 99,99 %).',
      'No es un error de conteo ni hay que inventar un dato: antes del redondeo la suma exacta es 12/12 = 1 (100 %).'
    ],
    commonErrorNote: 'Nunca alteres una frecuencia verdadera para forzar el redondeo; explicá que la diferencia de un centésimo proviene del redondeo.'
  },
  {
    id: 'N2-08',
    title: 'Reconstruir las frecuencias simples (f) desde la columna acumulada (F)',
    source: { kind: 'nuevo', label: 'Práctica N2-08' },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['frecuencia-acumulada', 'frecuencia-absoluta'],
    lessonId: 'L05',
    allowComparableVariant: false,
    prompt: 'En una tabla de frecuencias sobre cantidad de lápices de colores, se borraron las frecuencias simples (f) pero quedó visible la columna de frecuencias acumuladas (F):\n• 0 lápices: F₁ = 3\n• 1 lápiz: F₂ = 11\n• 2 lápices: F₃ = 18\n• 3 lápices: F₄ = 20\nHallá cuántas veces se repitió cada valor (f₁, f₂, f₃ y f₄).',
    parts: [
      {
        id: 'f1',
        label: '1. Frecuencia simple f₁ (para 0 lápices)',
        type: 'number',
        integerOnly: true,
        expected: 3
      },
      {
        id: 'f2',
        label: '2. Frecuencia simple f₂ (para 1 lápiz: F₂ − F₁)',
        type: 'number',
        integerOnly: true,
        expected: 8,
        commonErrors: [
          { value: 11, message: '11 es la acumulada F₂ (que suma f₁ + f₂). Como f₁ = 3, restá 11 − 3 = 8.' }
        ]
      },
      {
        id: 'f3',
        label: '3. Frecuencia simple f₃ (para 2 lápices: F₃ − F₂)',
        type: 'number',
        integerOnly: true,
        expected: 7
      },
      {
        id: 'f4',
        label: '4. Frecuencia simple f₄ (para 3 lápices: F₄ − F₃)',
        type: 'number',
        integerOnly: true,
        expected: 2
      }
    ],
    hints: [
      'En la primera fila, F₁ siempre es igual a f₁.',
      'Como cada acumulada se obtiene sumando la nueva f a la acumulada anterior (F₂ = F₁ + f₂), para despejar f₂ hacés la resta: F₂ − F₁.',
      'Verificá que f₁ + f₂ + f₃ + f₄ dé igual a F₄ = 20.'
    ],
    solutionSteps: [
      'f₁ = F₁ = 3.',
      'f₂ = F₂ − F₁ = 11 − 3 = 8.',
      'f₃ = F₃ − F₂ = 18 − 11 = 7.',
      'f₄ = F₄ − F₃ = 20 − 18 = 2. Comprobación: 3 + 8 + 7 + 2 = 20.'
    ],
    commonErrorNote: 'Para pasar de f a F sumamos; para recuperar f desde F restamos la acumulada anterior.'
  },
  {
    id: 'N2-09',
    title: 'Encontrar el error en una tabla de frecuencias mal construida',
    source: { kind: 'nuevo', label: 'Práctica N2-09' },
    topic: 'frecuencias',
    level: 'desafio',
    skills: ['detectar-errores-tabla', 'frecuencia-absoluta'],
    lessonId: 'L03',
    allowComparableVariant: false,
    prompt: 'Un estudiante debía organizar los datos de n = 20 compañeros (valores 0, 1, 2, 3 y 4 con frecuencias 3, 8, 6, 2 y 1), pero en su hoja copió solo las filas de 0, 1 y 2 libros (frecuencias 3, 8 y 6), puso «Total = 17» y dividió todo por 17 diciendo que daba 100 %. Identificá el error y corregilo.',
    parts: [
      {
        id: 'error_detectado',
        label: '1. ¿Cuál fue el error principal al armar esa tabla?',
        type: 'select',
        options: [
          {
            value: 'omitio_filas',
            label: 'Omitió las filas de 3 libros (f=2) y 4 libros (f=1), dejando afuera a 3 de los 20 estudiantes encuestados y alterando todos los porcentajes'
          },
          {
            value: 'ningun_error',
            label: 'Ninguno, porque 3 + 8 + 6 da 17'
          }
        ],
        expected: 'omitio_filas'
      },
      {
        id: 'pct_correcto_1',
        label: '2. Con el total real de n = 20 estudiantes, ¿cuál es el porcentaje verdadero de la fila «1 libro» (f = 8)?',
        type: 'number',
        unit: '%',
        expected: 40
      },
      {
        id: 'suma_faltante',
        label: '3. ¿Qué porcentaje del curso representan en conjunto las dos filas que se había olvidado de incluir (f = 2 y f = 1 sobre n = 20)?',
        type: 'number',
        unit: '%',
        expected: 15
      }
    ],
    hints: [
      'Si el enunciado informa que se encuestó a 20 estudiantes, la suma de las frecuencias absolutas tiene que dar 20, no 17.',
      'Al omitir 3 datos (las filas de 3 y 4 libros), cambió el denominador de todas las frecuencias relativas.',
      'Con n = 20, 8 ÷ 20 = 0,40 (40 %) y los 3 alumnos omitidos representan (3 ÷ 20) × 100 = 15 %.'
    ],
    solutionSteps: [
      'El error fue omitir las filas de 3 libros (f = 2) y 4 libros (f = 1), reduciendo artificialmente el total de 20 a 17.',
      'Sobre el total correcto n = 20, la fila de 1 libro (f = 8) representa (8 ÷ 20) × 100 = 40 %.',
      'Las dos filas omitidas suman 2 + 1 = 3 estudiantes, que equivalen al (3 ÷ 20) × 100 = 15 % del curso.'
    ],
    commonErrorNote: 'Control obligatorio: antes de calcular fr y %, comprobá siempre que Σf coincida con la cantidad de datos del enunciado.'
  },
  {
    id: 'N2-10',
    title: 'Completar una tabla con pistas cruzadas de f, fr y F (n = 40)',
    source: { kind: 'nuevo', label: 'Práctica N2-10' },
    topic: 'frecuencias',
    level: 'desafio',
    skills: ['frecuencia-faltante', 'frecuencia-relativa', 'frecuencia-acumulada'],
    lessonId: 'L05',
    allowComparableVariant: false,
    prompt: 'En un estudio de n = 40 observaciones con valores 0, 1, 2 y 3 se sabe que:\n• Fila 0: su frecuencia relativa es fr₁ = 0,15.\n• Fila 1: la frecuencia acumulada hasta 1 es F₂ = 22.\n• Fila 2: su porcentaje es 30 %.\n• Fila 3: completa los 40 datos.\nHallá las cuatro frecuencias absolutas f₁, f₂, f₃ y f₄.',
    parts: [
      {
        id: 'f1',
        label: '1. Frecuencia absoluta f₁ (0,15 × 40)',
        type: 'number',
        integerOnly: true,
        expected: 6
      },
      {
        id: 'f2',
        label: '2. Frecuencia absoluta f₂ (sabiendo que F₂ = f₁ + f₂ = 22)',
        type: 'number',
        integerOnly: true,
        expected: 16
      },
      {
        id: 'f3',
        label: '3. Frecuencia absoluta f₃ (el 30 % de 40)',
        type: 'number',
        integerOnly: true,
        expected: 12
      },
      {
        id: 'f4',
        label: '4. Frecuencia absoluta f₄ (para completar n = 40)',
        type: 'number',
        integerOnly: true,
        expected: 6
      }
    ],
    hints: [
      'Para la fila 0: f₁ = fr₁ × n = 0,15 × 40 = 6.',
      'Para la fila 1: como F₂ = f₁ + f₂ = 22 y f₁ = 6, entonces f₂ = 22 − 6 = 16.',
      'Para la fila 2: el 30 % de 40 es 0,30 × 40 = 12. Luego restá 40 − (6 + 16 + 12) para obtener f₄.'
    ],
    solutionSteps: [
      'f₁ = 0,15 × 40 = 6.',
      'f₂ = F₂ − f₁ = 22 − 6 = 16.',
      'f₃ = 0,30 × 40 = 12.',
      'f₄ = 40 − (6 + 16 + 12) = 40 − 34 = 6.'
    ],
    commonErrorNote: 'Todas las columnas de la tabla están conectadas: podés ir de fr a f multiplicando por n, y de F a f restando.'
  },
  {
    id: 'N2-11',
    title: 'Comparar dos cursos de distinto tamaño usando porcentajes',
    source: { kind: 'nuevo', label: 'Práctica N2-11' },
    topic: 'frecuencias',
    level: 'desafio',
    skills: ['frecuencia-relativa', 'porcentaje', 'comparacion'],
    lessonId: 'L04',
    allowComparableVariant: false,
    prompt: 'En el Curso A (de 20 estudiantes), 9 alumnos aprobaron con nota sobresaliente. En el Curso B (de 25 estudiantes), 10 alumnos aprobaron con nota sobresaliente. ¿En cuál de los dos cursos hubo mayor proporción (porcentaje) de notas sobresalientes?',
    parts: [
      {
        id: 'pct_a',
        label: '1. Porcentaje de sobresalientes en el Curso A (9 de 20) (%)',
        type: 'number',
        unit: '%',
        expected: 45
      },
      {
        id: 'pct_b',
        label: '2. Porcentaje de sobresalientes en el Curso B (10 de 25) (%)',
        type: 'number',
        unit: '%',
        expected: 40
      },
      {
        id: 'comparacion',
        label: '3. ¿Qué conclusión es correcta?',
        type: 'select',
        options: [
          {
            value: 'curso_a_mayor_pct',
            label: 'Aunque el Curso B tiene 1 alumno más en cantidad absoluta (10 frente a 9), el Curso A tiene mayor proporción de sobresalientes (45 % frente a 40 %)'
          },
          {
            value: 'curso_b_mayor_pct',
            label: 'El Curso B tiene mayor porcentaje porque 10 es mayor que 9'
          }
        ],
        expected: 'curso_a_mayor_pct'
      }
    ],
    hints: [
      'Cuando los grupos tienen distinto total n (20 y 25), no alcanza con comparar las frecuencias absolutas (9 y 10).',
      'Calculá el porcentaje en cada curso: (9 ÷ 20) × 100 y (10 ÷ 25) × 100.'
    ],
    solutionSteps: [
      'Curso A: fr = 9 ÷ 20 = 0,45 → 45 %.',
      'Curso B: fr = 10 ÷ 25 = 0,40 → 40 %.',
      'Conclusión: las frecuencias relativas y porcentuales permiten comparar de forma justa grupos de distinto tamaño; el Curso A tuvo mayor porcentaje (45 % > 40 %).'
    ],
    commonErrorNote: 'Para comparar partes de muestras de distinto tamaño (n distinto), usá siempre frecuencias relativas o porcentajes.'
  },
  {
    id: 'N2-12',
    title: 'Consultas combinadas sobre una distribución de tardanzas',
    source: { kind: 'nuevo', label: 'Práctica N2-12' },
    topic: 'frecuencias',
    level: 'desafio',
    skills: ['frecuencia-acumulada', 'porcentaje', 'interpretacion'],
    lessonId: 'L05',
    allowComparableVariant: true,
    prompt: 'En un registro de n = 25 estudiantes sobre la cantidad de veces que olvidaron traer la regla en el mes, la tabla de frecuencias absolutas es: 0 veces (f=10), 1 vez (f=8), 2 veces (f=4), 3 veces (f=2), 4 veces (f=1). Respondé las tres consultas.',
    parts: [
      {
        id: 'pct_ninguna',
        label: '1. ¿Qué porcentaje de estudiantes no olvidó la regla ninguna vez (0 veces) (%)?',
        type: 'number',
        unit: '%',
        expected: 40
      },
      {
        id: 'pct_hasta_1',
        label: '2. ¿Qué porcentaje la olvidó como máximo 1 vez (0 o 1 vez) (%)?',
        type: 'number',
        unit: '%',
        expected: 72
      },
      {
        id: 'cant_entre_1_y_2',
        label: '3. ¿Cuántos estudiantes la olvidaron entre 1 y 2 veces inclusive (1 o 2 veces)?',
        type: 'number',
        integerOnly: true,
        expected: 12,
        commonErrors: [
          { value: 22, message: '22 incluye también a los 10 estudiantes de «0 veces». «Entre 1 y 2 veces inclusive» suma solo las filas de 1 vez (8) y 2 veces (4).' }
        ]
      }
    ],
    hints: [
      'Con n = 25, cada estudiante representa 100 ÷ 25 = 4 %.',
      '«Como máximo 1 vez» es la acumulada hasta 1: 10 + 8 = 18 estudiantes → (18 ÷ 25) × 100 = 72 %.',
      '«Entre 1 y 2 veces inclusive» suma las frecuencias de 1 vez (8) y 2 veces (4).'
    ],
    solutionSteps: [
      '1) 0 veces: f = 10 → (10 ÷ 25) × 100 = 40 %.',
      '2) Como máximo 1 vez (0 o 1): F(1) = 10 + 8 = 18 → (18 ÷ 25) × 100 = 72 %.',
      '3) Entre 1 y 2 veces inclusive: f(1) + f(2) = 8 + 4 = 12 estudiantes.'
    ],
    commonErrorNote: 'Leé con precisión qué valores extremos incluye cada frase («ninguna vez», «como máximo 1», «entre 1 y 2»).'
  }
];

module.exports = { NUEVOS_1_2 };
