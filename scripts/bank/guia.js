'use strict';

const GUIA_EXERCISES = [
  {
    id: 'G1-01',
    title: 'Clasificación de cuatro variables cotidianas',
    source: { kind: 'guia', exercise: '1.1', label: 'Guía 1.1' },
    topic: 'variables',
    level: 'inicial',
    skills: ['clasificar-variable', 'justificar-variable'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Clasificá cada una de las siguientes cuatro variables en cualitativa (nominal u ordinal) o cuantitativa (discreta o continua) y elegí la justificación correcta.',
    parts: [
      {
        id: 'p1',
        label: '1. Distancia desde el hogar hasta el colegio expresada en kilómetros',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua (mide una longitud que admite valores intermedios, como 2,75 km)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (solo puede tomar kilómetros enteros)' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (expresa el nombre de la calle)' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (ordena barrios sin medir distancia)' }
        ],
        expected: 'cuantitativa-continua',
        optionFeedback: {
          'cuantitativa-continua': '¡Correcto! La distancia es una magnitud física continua que admite valores intermedios en kilómetros o metros.',
          'cuantitativa-discreta': 'Aunque a veces alguien diga «vivo a 2 km», la distancia real admite fracciones de kilómetro (como 2,35 km): es continua.',
          'cualitativa-nominal': 'Se está registrando la distancia en kilómetros (una cantidad medible), no el nombre de la calle.',
          'cualitativa-ordinal': 'Los kilómetros son una magnitud numérica continua, no una categoría verbal.'
        }
      },
      {
        id: 'p2',
        label: '2. Talle de remera del uniforme escolar (S, M, L, XL)',
        type: 'select',
        options: [
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (categorías con un orden de tamaño: S < M < L < XL)' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (letras sin ningún orden entre sí)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (conteo de remeras con números enteros)' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua (medición exacta en centímetros)' }
        ],
        expected: 'cualitativa-ordinal',
        optionFeedback: {
          'cualitativa-ordinal': '¡Exacto! Las categorías S, M, L y XL expresan una cualidad ordenada de menor a mayor tamaño.',
          'cualitativa-nominal': 'Fijate que S, M, L y XL sí tienen una jerarquía natural de tamaño (chico, mediano, grande, extragrande).',
          'cuantitativa-discreta': 'No estamos contando cuántas remeras hay, sino clasificando el talle mediante letras ordenadas.',
          'cuantitativa-continua': 'En este caso el registro se hace por categorías ordenadas (S, M, L, XL), por lo que es cualitativa ordinal.'
        }
      },
      {
        id: 'p3',
        label: '3. Cantidad de mascotas que conviven en el hogar',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (proviene de un conteo con valores enteros: 0, 1, 2, 3...)' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua (admite valores intermedios con coma)' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (indica si es perro, gato o loro)' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (indica cuál mascota llegó primero)' }
        ],
        expected: 'cuantitativa-discreta',
        optionFeedback: {
          'cuantitativa-discreta': '¡Muy bien! Contar cuántas mascotas hay da valores enteros separados (0, 1, 2...), sin valores intermedios.',
          'cuantitativa-continua': 'No puede haber 1,5 mascotas: al tratarse de un conteo de individuos, es cuantitativa discreta.',
          'cualitativa-nominal': '«Especie de mascota» sería nominal, pero acá la variable es «cantidad de mascotas» (un conteo numérico).',
          'cualitativa-ordinal': 'La cantidad de mascotas es un número obtenido por conteo, es decir, cuantitativa discreta.'
        }
      },
      {
        id: 'p4',
        label: '4. Tipo de transporte utilizado para ir al instituto (Colectivo, Bicicleta, Moto, Caminando)',
        type: 'select',
        options: [
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal (categorías no numéricas sin orden jerárquico natural)' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (categorías ordenadas por calificación)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (conteo de vehículos)' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua (velocidad del viaje)' }
        ],
        expected: 'cualitativa-nominal',
        optionFeedback: {
          'cualitativa-nominal': '¡Correcto! Son categorías descriptivas que nombran el medio de traslado sin jerarquía natural.',
          'cualitativa-ordinal': 'Entre Colectivo, Bicicleta, Moto y Caminando no existe una escala de jerarquía única.',
          'cuantitativa-discreta': 'Cada estudiante responde con el nombre del medio de transporte, no con una cantidad.',
          'cuantitativa-continua': 'El medio de transporte es un atributo categórico nominal.'
        }
      }
    ],
    hints: [
      'Preguntate primero en cada caso: ¿la respuesta es una palabra/categoría (cualitativa) o una cantidad matemática (cuantitativa)?',
      'Si es cualitativa, fijate si las opciones tienen un orden de menor a mayor (ordinal) o no (nominal).',
      'Si es cuantitativa, distinguí si surge de contar unidades separadas (discreta) o de medir una magnitud con valores intermedios (continua).'
    ],
    solutionSteps: [
      '1) Distancia en km: Cuantitativa continua, porque la longitud admite valores intermedios (como 2,75 km).',
      '2) Talle de remera (S, M, L, XL): Cualitativa ordinal, porque son categorías no numéricas ordenadas por tamaño.',
      '3) Cantidad de mascotas: Cuantitativa discreta, porque surge de contar individuos enteros (0, 1, 2...).',
      '4) Tipo de transporte: Cualitativa nominal, porque son categorías sin orden jerárquico natural.'
    ],
    commonErrorNote: 'No confundir «tipo de mascota» (cualitativa) con «cantidad de mascotas» (cuantitativa discreta).'
  },
  {
    id: 'G1-02',
    title: 'Encuesta sobre el estado de las computadoras',
    source: { kind: 'guia', exercise: '1.2', label: 'Guía 1.2' },
    topic: 'variables',
    level: 'inicial',
    skills: ['cualitativa-ordinal', 'orden-jerarquico'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En un relevamiento escolar (ejemplo de estudio) para evaluar el estado de las computadoras del laboratorio, las respuestas posibles son: «Excelente, Bueno, Regular, Defectuoso». ¿Qué tipo de variable estadística representa esta medición y cuál es su orden lógico?',
    parts: [
      {
        id: 'clasificacion',
        label: 'Clasificación de la variable «estado de las computadoras»',
        type: 'select',
        options: [
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' }
        ],
        expected: 'cualitativa-ordinal',
        optionFeedback: {
          'cualitativa-ordinal': '¡Muy bien! Expresa una cualidad mediante categorías que siguen una escala de calidad ordenada.',
          'cualitativa-nominal': 'Aunque son palabras, no da lo mismo el orden: hay una progresión clara desde Defectuoso hasta Excelente.',
          'cuantitativa-discreta': 'Las respuestas son palabras de calidad, no cantidades numéricas.',
          'cuantitativa-continua': 'Son categorías de estado, no mediciones continuas.'
        }
      },
      {
        id: 'orden',
        label: 'Elegí la secuencia ordenada de menor a mayor calidad de funcionamiento',
        type: 'select',
        options: [
          { value: 'def-reg-bue-exc', label: 'Defectuoso → Regular → Bueno → Excelente' },
          { value: 'bue-def-exc-reg', label: 'Bueno → Defectuoso → Excelente → Regular (orden alfabético)' },
          { value: 'reg-def-bue-exc', label: 'Regular → Defectuoso → Bueno → Excelente' }
        ],
        expected: 'def-reg-bue-exc',
        optionFeedback: {
          'def-reg-bue-exc': '¡Exacto! Ese orden gradual permite incluso calcular frecuencias acumuladas o identificar la mediana ordinal.',
          'bue-def-exc-reg': 'El orden alfabético no respeta la jerarquía real de calidad del equipo.',
          'reg-def-bue-exc': '«Defectuoso» indica peor estado que «Regular», por lo que va en el extremo inferior.'
        }
      }
    ],
    hints: [
      'Observá las cuatro respuestas posibles: «Excelente, Bueno, Regular, Defectuoso». ¿Son números o palabras?',
      'Como son palabras que describen un atributo, la variable es cualitativa.',
      'Fijate si esas cuatro palabras tienen una jerarquía de calidad entre sí.'
    ],
    solutionSteps: [
      'Las respuestas («Excelente, Bueno, Regular, Defectuoso») son categorías no numéricas, por lo que la variable es cualitativa.',
      'Como expresan una escala graduada de calidad (Defectuoso < Regular < Bueno < Excelente), su subclasificación es Cualitativa Ordinal.'
    ],
    commonErrorNote: 'Ordenar categorías ordinales alfabéticamente en una tabla en lugar de respetar su jerarquía de nivel.'
  },
  {
    id: 'G1-03',
    title: 'Tiempo registrado en los 100 metros llanos',
    source: { kind: 'guia', exercise: '1.3', label: 'Guía 1.3' },
    topic: 'variables',
    level: 'inicial',
    skills: ['cuantitativa-continua', 'magnitud-vs-registro'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En la clase de Educación Física, la profesora registra el tiempo en segundos que tarda cada estudiante en recorrer 100 metros llanos. ¿Qué tipo de variable representa esta medición y por qué?',
    parts: [
      {
        id: 'tipo',
        label: 'Tipo y subclasificación de la variable',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' }
        ],
        expected: 'cuantitativa-continua',
        optionFeedback: {
          'cuantitativa-continua': '¡Correcto! El tiempo es una magnitud física continua.',
          'cuantitativa-discreta': 'El tiempo no salta de a unidades aisladas: entre 13 s y 14 s existen infinitos instantes intermedios.',
          'cualitativa-ordinal': 'Se mide el tiempo en segundos (cantidad numérica), no solo el puesto de llegada.',
          'cualitativa-nominal': 'Los segundos medidos con cronómetro son una cantidad numérica continua.'
        }
      },
      {
        id: 'justificacion',
        label: '¿Por qué sigue siendo continua incluso si un reloj sencillo mostrara segundos sin décimas?',
        type: 'select',
        options: [
          { value: 'magnitud', label: 'Porque el tiempo admite valores intermedios por su naturaleza física; la precisión del reloj solo redondea el registro' },
          { value: 'enteros', label: 'Porque si el reloj no muestra coma pasa a ser discreta y si tiene coma pasa a ser continua' },
          { value: 'etiqueta', label: 'Porque los segundos son etiquetas nominales de cada corredor' }
        ],
        expected: 'magnitud',
        optionFeedback: {
          magnitud: '¡Muy bien! La naturaleza de la magnitud (tiempo) no cambia por el instrumento con que la anotemos.',
          enteros: 'Ojo: redondear al anotar no cambia la naturaleza continua del tiempo.',
          etiqueta: 'Los segundos miden duración real; no son etiquetas.'
        }
      }
    ],
    hints: [
      'El tiempo se mide en segundos y fracciones de segundo (como 13,84 s).',
      'Entre dos tiempos cualesquiera siempre puede existir un tiempo intermedio.',
      'Recordá distinguir qué es la magnitud física (tiempo) de cómo la redondea el cronómetro.'
    ],
    solutionSteps: [
      'El tiempo empleado en recorrer 100 metros es una cantidad numérica obtenida por medición.',
      'Es una variable Cuantitativa Continua porque el tiempo transcurre sin saltos y admite cualquier valor real dentro de un intervalo (por ejemplo, 13,84 s), según la precisión del instrumento.'
    ],
    commonErrorNote: 'No justifiques que es continua diciendo únicamente «porque tiene coma»; explicá que mide una magnitud continua que admite valores intermedios.'
  },
  {
    id: 'G1-04',
    title: 'Número de asignaturas reprobadas en el cuatrimestre',
    source: { kind: 'guia', exercise: '1.4', label: 'Guía 1.4' },
    topic: 'variables',
    level: 'inicial',
    skills: ['cuantitativa-discreta', 'conteo'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Se registró el número de asignaturas reprobadas por un grupo de estudiantes al finalizar el primer cuatrimestre (con valores posibles 0, 1, 2, 3, 4). Clasificá esta variable indicando su grupo general y su subclasificación.',
    parts: [
      {
        id: 'grupo',
        label: 'Grupo general de la variable',
        type: 'select',
        options: [
          { value: 'cuantitativa', label: 'Cuantitativa (expresa una cantidad numérica con la que se puede operar)' },
          { value: 'cualitativa', label: 'Cualitativa (expresa un nombre o cualidad no numérica)' }
        ],
        expected: 'cuantitativa'
      },
      {
        id: 'subtipo',
        label: 'Subclasificación y razón matemática',
        type: 'select',
        options: [
          { value: 'discreta', label: 'Discreta, porque surge de un conteo exacto de materias enteras (0, 1, 2, 3, 4) sin valores intermedios' },
          { value: 'continua', label: 'Continua, porque el promedio de materias puede dar con coma' },
          { value: 'ordinal', label: 'Ordinal, porque son palabras ordenadas' }
        ],
        expected: 'discreta',
        optionFeedback: {
          discreta: '¡Excelente! Nadie reprueba 1,4 materias: el conteo de asignaturas toma valores enteros aislados.',
          continua: 'Cuidado: aunque el promedio del curso pueda dar con decimales (por ejemplo, 1,2 materias), la variable observada en cada estudiante solo toma valores separados (0, 1, 2, 3, 4).',
          ordinal: 'Los valores 0, 1, 2, 3, 4 son cantidades contadas, por lo que es cuantitativa discreta.'
        }
      }
    ],
    hints: [
      '¿Qué se observa en cada estudiante? La cantidad de materias reprobadas.',
      '¿Puede un estudiante tener 2,5 materias reprobadas en el boletín, o se cuentan de a una entera?',
      'Los conteos de unidades enteras corresponden a variables cuantitativas discretas.'
    ],
    solutionSteps: [
      'Grupo general: Variable Cuantitativa, ya que mide una cantidad numérica.',
      'Subclasificación: Cuantitativa Discreta, porque proviene de contar asignaturas enteras (0, 1, 2, 3, 4) y no existen valores intermedios entre dos conteos consecutivos.'
    ],
    commonErrorNote: 'Que el promedio de una variable discreta tenga decimales no convierte a la variable en continua.'
  },
  {
    id: 'G1-05',
    title: 'Cuatro situaciones del ámbito escolar',
    source: { kind: 'guia', exercise: '1.5', label: 'Guía 1.5' },
    topic: 'variables',
    level: 'intermedio',
    skills: ['clasificar-variable'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Determiná la clasificación exacta (cualitativa nominal, cualitativa ordinal, cuantitativa discreta o cuantitativa continua) para las siguientes cuatro situaciones:',
    parts: [
      {
        id: 'temp',
        label: '1. Temperatura corporal tomada en grados Celsius (36,2 °C; 36,6 °C)',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' }
        ],
        expected: 'cuantitativa-continua'
      },
      {
        id: 'civil',
        label: '2. Estado civil de los adultos consultados (Soltero, Casado, Divorciado, Viudo)',
        type: 'select',
        options: [
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' }
        ],
        expected: 'cualitativa-nominal'
      },
      {
        id: 'conducta',
        label: '3. Calificación cualitativa de conducta (Excelente, Muy Buena, Buena, Regular)',
        type: 'select',
        options: [
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' }
        ],
        expected: 'cualitativa-ordinal'
      },
      {
        id: 'hojas',
        label: '4. Cantidad de hojas útiles que tiene la libreta de calificaciones',
        type: 'select',
        options: [
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' },
          { value: 'cualitativa-nominal', label: 'Cualitativa nominal' }
        ],
        expected: 'cuantitativa-discreta'
      }
    ],
    hints: [
      'La temperatura es una magnitud física medible con termómetro; las hojas de una libreta se cuentan una por una.',
      'Tanto el estado civil como la calificación verbal de conducta usan palabras (cualitativas).',
      'Diferenciá cuál de las dos cualitativas tiene una jerarquía de nivel (Excelente > Muy Buena > Buena > Regular).'
    ],
    solutionSteps: [
      '1) Temperatura corporal: Cuantitativa continua (magnitud física que admite valores intermedios en °C).',
      '2) Estado civil: Cualitativa nominal (categorías sin orden jerárquico natural).',
      '3) Calificación cualitativa de conducta: Cualitativa ordinal (sigue una jerarquía ordenada: Excelente > Muy Buena > Buena > Regular).',
      '4) Hojas útiles de la libreta: Cuantitativa discreta (conteo en números enteros).'
    ],
    commonErrorNote: 'Distinguir siempre entre calificación verbal ordenada (cualitativa ordinal) y nota numérica en puntos (cuantitativa).'
  },
  {
    id: 'G1-06',
    title: 'Debate sobre el talle de calzado y la longitud del pie',
    source: {
      kind: 'guia',
      exercise: '1.6',
      label: 'Guía 1.6 (adaptado)',
      adaptationNote: 'Se explicita el criterio escolar que modela la escala graduada de talles como discreta, aclarando que ver números no alcanza, que no es un conteo de zapatos y contrastándola con la longitud continua del pie en centímetros.'
    },
    topic: 'variables',
    level: 'desafio',
    skills: ['criterio-clasificacion', 'discreta-vs-continua'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'Martín afirma que el talle de calzado argentino (36, 37, 38, 39) es cualitativo porque refiere a una característica del cuerpo. Sofía sostiene que en la guía escolar se clasifica como cuantitativa discreta porque el sistema de talles está graduado en pasos numéricos separados (e incluso si hubiera medios talles como 37,5 seguirían siendo saltos fijos). Analizá el debate y comparalo con medir el pie en centímetros.',
    parts: [
      {
        id: 'modelo_escolar',
        label: '1. ¿Cómo se clasifica el talle numérico de calzado (36, 37, 38, 39) en el criterio de nuestra guía escolar y por qué?',
        type: 'select',
        options: [
          {
            value: 'discreta-escala',
            label: 'Cuantitativa discreta, porque la escala de talles avanza en valores numéricos separados (pasos graduados de la horma)'
          },
          {
            value: 'nominal',
            label: 'Cualitativa nominal, porque los talles 36, 37, 38 no tienen ningún orden de tamaño'
          },
          {
            value: 'continua',
            label: 'Cuantitativa continua, porque se fabrican infinitos talles intermedios como 36,142'
          }
        ],
        expected: 'discreta-escala',
        optionFeedback: {
          'discreta-escala': '¡Muy bien! En la guía escolar se modela como cuantitativa discreta porque toma valores separados de una escala graduada.',
          nominal: 'Los talles sí tienen orden de tamaño y provienen de una escala graduada.',
          continua: 'El calzado comercial se fabrica en puntos separados (enteros o medios puntos), no en cualquier decimal continuo.'
        }
      },
      {
        id: 'contraste_pie',
        label: '2. En cambio, si medimos con una regla la longitud exacta del pie en centímetros (por ejemplo, 23,8 cm; 24,15 cm), ¿qué tipo de variable es?',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua (la longitud física admite cualquier valor intermedio en el intervalo)' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta (porque se mide con regla)' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal (porque ordena pies cortos y largos)' }
        ],
        expected: 'cuantitativa-continua',
        optionFeedback: {
          'cuantitativa-continua': '¡Exacto! La longitud del pie en centímetros es una magnitud continua, mientras que el talle comercial la agrupa en pasos discretos.',
          'cuantitativa-discreta': 'La longitud en centímetros no da saltos fijos: es una magnitud física continua.',
          'cualitativa-ordinal': 'Medir en centímetros arroja una cantidad numérica continua.'
        }
      },
      {
        id: 'cuidado_concepto',
        label: '3. ¿Cuál de estas advertencias es verdadera al justificar tu respuesta en un examen?',
        type: 'select',
        options: [
          {
            value: 'no-solo-enteros',
            label: 'Que esté escrito con números no basta por sí solo: hay que fijarse si representa una escala cuantitativa de valores separados y no confundir «talle 38» con «tener 38 zapatos»'
          },
          {
            value: 'todo-numero-es-discreto',
            label: 'Cualquier dato que tenga números enteros es siempre un conteo discreto'
          }
        ],
        expected: 'no-solo-enteros'
      }
    ],
    hints: [
      'Distinguí entre la longitud real del pie (medida en cm con valores continuos) y la escala comercial de talles (36, 37, 38, 39).',
      'En el solucionario de la guía escolar se adopta la postura de Sofía (cuantitativa discreta) porque los talles avanzan en valores aislados.',
      'Aun así, recordá que «talle 38» es un punto de una escala graduada, no un conteo de 38 objetos.'
    ],
    solutionSteps: [
      'En el criterio de la guía escolar, Sofía tiene razón al clasificar el talle numérico (36, 37, 38, 39) como Cuantitativa Discreta, porque toma valores aislados de una escala numérica graduada.',
      'Precisión importante: no es un conteo de objetos y, según el fabricante o país, algunos autores también lo tratan como escala ordinal si solo interesa el orden de tamaño. En cambio, la longitud del pie medida en centímetros (por ejemplo, 24,3 cm) es inequívocamente Cuantitativa Continua.'
    ],
    commonErrorNote: 'No escribir como regla universal «si tiene números enteros siempre es un conteo»: diferenciar conteo, escala graduada y longitud continua.'
  },
  {
    id: 'G1-07',
    title: 'Volumen diario de agua potable consumido',
    source: { kind: 'guia', exercise: '1.7', label: 'Guía 1.7' },
    topic: 'variables',
    level: 'intermedio',
    skills: ['cuantitativa-continua', 'justificar-variable'],
    lessonId: 'L02',
    allowComparableVariant: false,
    prompt: 'En una consulta de salud escolar se mide el volumen diario de agua potable consumido por cada estudiante (1,5 L; 2,0 L; 2,25 L). Clasificá la variable y justificá usando la idea de valores intermedios en un intervalo.',
    parts: [
      {
        id: 'clasif',
        label: 'Clasificación de la variable «volumen diario de agua en litros»',
        type: 'select',
        options: [
          { value: 'cuantitativa-continua', label: 'Cuantitativa continua' },
          { value: 'cuantitativa-discreta', label: 'Cuantitativa discreta' },
          { value: 'cualitativa-ordinal', label: 'Cualitativa ordinal' }
        ],
        expected: 'cuantitativa-continua'
      },
      {
        id: 'explicacion',
        label: 'Redactá con tus palabras por qué es continua y verificá los criterios en la rúbrica',
        type: 'rubric',
        placeholder: 'Explicá qué magnitud se mide y por qué admite valores intermedios entre dos cantidades como 1,5 L y 2,0 L...',
        criteria: [
          'Mencioné que el volumen (en litros) es una magnitud física medible.',
          'Expliqué que entre dos valores cualesquiera (como 1,5 L y 2,0 L) puede tomar valores intermedios (como 1,75 L o 1,8 L) dentro de un intervalo.'
        ],
        modelAnswer: 'Es una variable cuantitativa continua porque mide una magnitud física (el volumen de agua en litros) que puede tomar cualquier valor intermedio dentro de un intervalo numérico (por ejemplo, entre 1,5 L y 2,0 L existen valores como 1,75 L).'
      }
    ],
    hints: [
      'El volumen se mide en litros (L) o mililitros (mL).',
      '¿El consumo de agua salta de 1 litro a 2 litros sin pasar por el medio, o puede tomar cualquier cantidad intermedia?',
      'En tu explicación nombrá la magnitud (volumen) y la posibilidad de tomar valores intermedios en un intervalo.'
    ],
    solutionSteps: [
      'Clasificación: Variable Cuantitativa Continua.',
      'Justificación: El volumen es una magnitud física medible que no avanza a saltos enteros, sino que admite valores reales intermedios dentro de un intervalo (por ejemplo, 1,5 L; 1,75 L; 2,25 L).'
    ],
    commonErrorNote: 'Si alguien toma exactamente «2 litros», la variable sigue siendo continua porque la magnitud volumen admite valores intermedios.'
  },
  {
    id: 'G2-01',
    title: 'Tabla completa de faltas de 15 alumnos',
    source: { kind: 'guia', exercise: '2.1', label: 'Guía 2.1' },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['frecuencia-absoluta', 'frecuencia-relativa', 'porcentaje', 'frecuencia-acumulada'],
    lessonId: 'L04',
    allowComparableVariant: true,
    prompt: 'Los siguientes datos corresponden a la cantidad de faltas registradas durante un mes por n = 15 alumnos de 2.º año (ejemplo de la guía):\n0, 1, 2, 0, 1, 1, 3, 0, 2, 1, 0, 1, 2, 1, 0.\nConstruí la tabla de frecuencias completa indicando f, fr (con 2 o 3 decimales o fracción), % (con 2 decimales) y F.',
    dataset: [0, 1, 2, 0, 1, 1, 3, 0, 2, 1, 0, 1, 2, 1, 0],
    parts: [
      {
        id: 'tabla',
        label: 'Completá la tabla de frecuencias para 0, 1, 2 y 3 faltas (total n = 15)',
        type: 'freq-table',
        totalN: 15,
        columns: ['f', 'fr', 'pct', 'F'],
        rows: [
          { x: 0, label: '0 faltas', f: 5, F: 5 },
          { x: 1, label: '1 falta', f: 6, F: 11 },
          { x: 2, label: '2 faltas', f: 3, F: 14 },
          { x: 3, label: '3 faltas', f: 1, F: 15 }
        ]
      }
    ],
    hints: [
      'Contá primero cuántos ceros, unos, dos y tres hay en la lista: tienen que sumar 5 + 6 + 3 + 1 = 15.',
      'Para la frecuencia relativa (fr), dividí cada f entre 15: 5÷15 ≈ 0,33 (o 0,333); 6÷15 = 0,40; 3÷15 = 0,20; 1÷15 ≈ 0,07 (o 0,067).',
      'Para el porcentaje multiplicá por 100 (33,33 %; 40 %; 20 %; 6,67 %) y para la acumulada F sumá las f desde arriba (5, 11, 14, 15).'
    ],
    solutionSteps: [
      'Conteo de frecuencias absolutas (f): 0 faltas → 5; 1 falta → 6; 2 faltas → 3; 3 faltas → 1. Suma Σf = 5 + 6 + 3 + 1 = 15.',
      'Frecuencias relativas (fr = f ÷ 15): 5/15 ≈ 0,33 (0,333); 6/15 = 0,40; 3/15 = 0,20; 1/15 ≈ 0,07 (0,067). Suma = 1,00.',
      'Frecuencias porcentuales (%): 33,33 %; 40,00 %; 20,00 %; 6,67 %. Suma = 100 %.',
      'Frecuencias acumuladas (F): F₁ = 5; F₂ = 5 + 6 = 11; F₃ = 11 + 3 = 14; F₄ = 14 + 1 = 15.'
    ],
    commonErrorNote: 'En 5 ÷ 15 y 1 ÷ 15 los decimales son periódicos (0,333... y 0,066...): redondeá correctamente el segundo decimal de 0,066... a 0,07 (o 6,67 %).'
  },
  {
    id: 'G2-02',
    title: 'Frecuencia relativa y porcentual de la nota 8',
    source: { kind: 'guia', exercise: '2.2', label: 'Guía 2.2' },
    topic: 'frecuencias',
    level: 'inicial',
    skills: ['frecuencia-absoluta', 'frecuencia-relativa', 'porcentaje'],
    lessonId: 'L04',
    allowComparableVariant: true,
    prompt: 'En una prueba corta de matemática realizada a n = 25 estudiantes, las notas obtenidas sobre 10 puntos fueron:\n6, 7, 8, 6, 9, 10, 7, 8, 8, 7, 6, 9, 8, 7, 10, 8, 9, 7, 6, 8, 7, 9, 8, 10, 7.\nCalculá cuántas veces aparece la nota 8, su frecuencia relativa (fr) y su frecuencia porcentual (%).',
    dataset: [6, 7, 8, 6, 9, 10, 7, 8, 8, 7, 6, 9, 8, 7, 10, 8, 9, 7, 6, 8, 7, 9, 8, 10, 7],
    parts: [
      {
        id: 'f8',
        label: '1. Frecuencia absoluta (f) de la nota 8 (cantidad de estudiantes que sacaron 8)',
        type: 'number',
        integerOnly: true,
        expected: 7
      },
      {
        id: 'fr8',
        label: '2. Frecuencia relativa (fr) de la nota 8',
        type: 'number',
        subkind: 'fr',
        expected: { numerator: 7, denominator: 25 },
        roundingDecimals: 2
      },
      {
        id: 'pct8',
        label: '3. Frecuencia porcentual (%) de la nota 8',
        type: 'number',
        unit: '%',
        expected: 28,
        roundingDecimals: 2
      }
    ],
    hints: [
      'Recorré la lista de 25 notas contando únicamente cuántas veces aparece el número 8.',
      'El 8 aparece 7 veces. Para hallar la frecuencia relativa (fr), dividí 7 entre el total de estudiantes (25).',
      'Multiplicá el resultado de 7 ÷ 25 por 100 para obtener el porcentaje.'
    ],
    solutionSteps: [
      'Contamos las apariciones de la nota 8 en los 25 datos: f = 7 estudiantes.',
      'Frecuencia relativa: fr = 7 ÷ 25 = 0,28.',
      'Frecuencia porcentual: % = 0,28 × 100 = 28 % (el 28 % del curso obtuvo un 8).'
    ],
    commonErrorNote: 'No dividir entre la nota máxima (10 puntos) sino entre la cantidad total de estudiantes (n = 25).'
  },
  {
    id: 'G2-03',
    title: 'Interpretación de «2 o menos faltas»',
    source: {
      kind: 'guia',
      exercise: '2.3',
      label: 'Guía 2.3',
      adaptationNote: 'Incluye los datos y frecuencias del Ejercicio 2.1 en el propio enunciado para poder resolverlo de forma autónoma.'
    },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['frecuencia-acumulada', 'porcentaje', 'interpretacion'],
    lessonId: 'L05',
    allowComparableVariant: true,
    prompt: 'En el registro mensual de faltas de n = 15 alumnos (Ejercicio 2.1), las frecuencias absolutas fueron: 0 faltas → 5 alumnos; 1 falta → 6 alumnos; 2 faltas → 3 alumnos; 3 faltas → 1 alumno. Respondé:\n1) ¿Cuántos alumnos registraron 2 o menos faltas en el mes?\n2) ¿Qué porcentaje del total representa dicho grupo (redondeado a 2 decimales)?',
    parts: [
      {
        id: 'acum_2',
        label: '1. Cantidad de alumnos con 2 o menos faltas (F hasta 2)',
        type: 'number',
        integerOnly: true,
        expected: 14,
        commonErrors: [
          { value: 3, message: '3 es la cantidad de alumnos con exactamente 2 faltas. «2 o menos faltas» incluye también a quienes tuvieron 0 faltas (5) y 1 falta (6): 5 + 6 + 3 = 14.' },
          { value: 11, message: '11 suma solo quienes tuvieron 0 o 1 falta (5 + 6). Como pide «2 o menos», sumá también los 3 alumnos con 2 faltas.' }
        ]
      },
      {
        id: 'pct_2',
        label: '2. Porcentaje del total que representa ese grupo (%)',
        type: 'number',
        unit: '%',
        expected: { numerator: 1400, denominator: 15 },
        roundingDecimals: 2,
        commonErrors: [
          { value: 20, message: '20 % corresponde solo a quienes tuvieron exactamente 2 faltas (3 de 15). Calculá el porcentaje para los 14 alumnos de 15.' }
        ]
      }
    ],
    hints: [
      '«2 o menos faltas» significa haber tenido 0 faltas, 1 falta o 2 faltas.',
      'Sumá las frecuencias absolutas de esas tres filas: 5 + 6 + 3 (que es la frecuencia acumulada F₃).',
      'Para el porcentaje, dividí esa cantidad acumulada entre el total (15) y multiplicá por 100.'
    ],
    solutionSteps: [
      'Alumnos con 2 o menos faltas: corresponde a la frecuencia acumulada hasta x = 2 → F₃ = 5 + 6 + 3 = 14 alumnos.',
      'Porcentaje del total: (14 ÷ 15) × 100 = 93,333... % ≈ 93,33 %.'
    ],
    commonErrorNote: 'Distinguir siempre «exactamente 2 faltas» (f = 3) de «2 o menos faltas» (F = 14).'
  },
  {
    id: 'G2-04',
    title: 'Tabla de horas diarias de estudio de 20 alumnos',
    source: {
      kind: 'guia',
      exercise: '2.4',
      label: 'Guía 2.4',
      adaptationNote: 'Agrega aclaración conceptual de que registrar el tiempo en horas enteras redondeadas no transforma al tiempo en una magnitud discreta.'
    },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['frecuencia-absoluta', 'frecuencia-relativa', 'porcentaje', 'frecuencia-acumulada'],
    lessonId: 'L05',
    allowComparableVariant: true,
    prompt: 'Los siguientes datos representan las horas diarias dedicadas a tareas fuera del colegio (registradas en horas enteras) por n = 20 alumnos de 2.º año:\n1, 2, 0, 1, 3, 2, 1, 2, 0, 1, 2, 3, 1, 4, 2, 1, 0, 2, 1, 2.\nNota conceptual: aunque acá se hayan anotado números enteros (0 a 4) y los organicemos por valores en la tabla, recordá que el tiempo es por naturaleza una magnitud continua.\nConstruí la tabla de frecuencias completa (f, fr, % y F).',
    dataset: [1, 2, 0, 1, 3, 2, 1, 2, 0, 1, 2, 3, 1, 4, 2, 1, 0, 2, 1, 2],
    parts: [
      {
        id: 'tabla',
        label: 'Completá la tabla de frecuencias para 0, 1, 2, 3 y 4 horas (n = 20)',
        type: 'freq-table',
        totalN: 20,
        columns: ['f', 'fr', 'pct', 'F'],
        rows: [
          { x: 0, label: '0 h', f: 3, F: 3 },
          { x: 1, label: '1 h', f: 7, F: 10 },
          { x: 2, label: '2 h', f: 7, F: 17 },
          { x: 3, label: '3 h', f: 2, F: 19 },
          { x: 4, label: '4 h', f: 1, F: 20 }
        ]
      }
    ],
    hints: [
      'Contá cada valor en la lista de 20 datos: el 0 aparece 3 veces, el 1 aparece 7 veces, el 2 aparece 7 veces, el 3 aparece 2 veces y el 4 aparece 1 vez.',
      'Al dividir entre n = 20, cada unidad de frecuencia equivale a 1 ÷ 20 = 0,05 (es decir, 5 %).',
      'Sumá las frecuencias de arriba hacia abajo para la columna F: 3, 10, 17, 19, 20.'
    ],
    solutionSteps: [
      '0 h: f = 3 → fr = 3/20 = 0,15 → 15 % → F₁ = 3.',
      '1 h: f = 7 → fr = 7/20 = 0,35 → 35 % → F₂ = 3 + 7 = 10.',
      '2 h: f = 7 → fr = 7/20 = 0,35 → 35 % → F₃ = 10 + 7 = 17.',
      '3 h: f = 2 → fr = 2/20 = 0,10 → 10 % → F₄ = 17 + 2 = 19.',
      '4 h: f = 1 → fr = 1/20 = 0,05 → 5 % → F₅ = 19 + 1 = 20.',
      'Verificación: Σf = 20, Σfr = 1,00, Σ% = 100 %.'
    ],
    commonErrorNote: 'Cuando n = 20, verificá que la última acumulada F₅ dé exactamente 20.'
  },
  {
    id: 'G2-05',
    title: 'Medio de transporte de 40 estudiantes',
    source: { kind: 'guia', exercise: '2.5', label: 'Guía 2.5' },
    topic: 'frecuencias',
    level: 'inicial',
    skills: ['frecuencia-relativa', 'porcentaje', 'variable-nominal'],
    lessonId: 'L04',
    allowComparableVariant: false,
    prompt: 'En una consulta a n = 40 estudiantes sobre el medio de transporte usado para asistir a clase, se obtuvieron las siguientes frecuencias absolutas:\nColectivo (16), Moto (10), Bicicleta (8) y Caminando (6).\nCompletá las columnas de frecuencia relativa (fr) y porcentual (%), y respondé por qué no se incluye la columna de frecuencia acumulada (F).',
    parts: [
      {
        id: 'tabla',
        label: '1. Completá fr y % para cada medio de transporte (n = 40)',
        type: 'freq-table',
        totalN: 40,
        columns: ['fr', 'pct'],
        rows: [
          { x: 'Colectivo', label: 'Colectivo (f = 16)', f: 16 },
          { x: 'Moto', label: 'Moto (f = 10)', f: 10 },
          { x: 'Bicicleta', label: 'Bicicleta (f = 8)', f: 8 },
          { x: 'Caminando', label: 'Caminando (f = 6)', f: 6 }
        ]
      },
      {
        id: 'por_que_sin_F',
        label: '2. ¿Por qué no corresponde interpretar una frecuencia acumulada «menor o igual» en esta tabla?',
        type: 'select',
        options: [
          { value: 'nominal-sin-orden', label: 'Porque el medio de transporte es una variable cualitativa nominal y sus categorías no tienen un orden natural' },
          { value: 'porque-son-40', label: 'Porque cuando n = 40 no se puede sumar' },
          { value: 'porque-da-100', label: 'Porque los porcentajes ya suman 100 %' }
        ],
        expected: 'nominal-sin-orden'
      }
    ],
    hints: [
      'El total de estudiantes es n = 16 + 10 + 8 + 6 = 40.',
      'Dividí cada frecuencia absoluta entre 40: 16÷40 = 0,40; 10÷40 = 0,25; 8÷40 = 0,20; 6÷40 = 0,15.',
      'Multiplicá cada fr por 100 y comprobá que 40 % + 25 % + 20 % + 15 % = 100 %.'
    ],
    solutionSteps: [
      'Colectivo: fr = 16 ÷ 40 = 0,40 → 40 %.',
      'Moto: fr = 10 ÷ 40 = 0,25 → 25 %.',
      'Bicicleta: fr = 8 ÷ 40 = 0,20 → 20 %.',
      'Caminando: fr = 6 ÷ 40 = 0,15 → 15 %.',
      'Comprobación: 40 % + 25 % + 20 % + 15 % = 100 %. No se interpreta F como «hasta» porque las categorías son nominales.'
    ],
    commonErrorNote: 'No imponer un orden acumulado («menor o igual») a categorías nominales.'
  },
  {
    id: 'G2-06',
    title: 'Tabla incompleta sobre número de hermanos (n = 30)',
    source: { kind: 'guia', exercise: '2.6', label: 'Guía 2.6' },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['frecuencia-faltante', 'frecuencia-acumulada', 'porcentaje'],
    lessonId: 'L03',
    allowComparableVariant: true,
    prompt: 'Se presenta la siguiente tabla incompleta sobre el número de hermanos en un curso de n = 30 alumnos:\n• x = 0 hermanos: f₁ = 6\n• x = 1 hermano: f₂ = 12\n• x = 2 hermanos: f₃ = ?\n• x = 3 hermanos: f₄ = 3\nCalculá el valor que falta en f₃, hallá la frecuencia acumulada F₃ (hasta 2 hermanos) y determiná el porcentaje de alumnos que tienen 2 o menos hermanos.',
    parts: [
      {
        id: 'f3',
        label: '1. Frecuencia absoluta faltante f₃ (alumnos con 2 hermanos)',
        type: 'number',
        integerOnly: true,
        expected: 9,
        commonErrors: [
          { value: 21, message: '21 es la suma de las tres frecuencias conocidas (6 + 12 + 3). Restale 21 al total n = 30 para hallar f₃.' }
        ]
      },
      {
        id: 'F3',
        label: '2. Frecuencia acumulada F₃ (alumnos con 2 o menos hermanos)',
        type: 'number',
        integerOnly: true,
        expected: 27,
        commonErrors: [
          { value: 9, message: '9 es la frecuencia simple f₃ (exactamente 2 hermanos). Para la acumulada F₃ sumá f₁ + f₂ + f₃ = 6 + 12 + 9.' },
          { value: 18, message: '18 es F₂ (6 + 12). Sumale también f₃ = 9 para llegar hasta 2 hermanos.' }
        ]
      },
      {
        id: 'pct_F3',
        label: '3. Porcentaje de alumnos con 2 o menos hermanos (%)',
        type: 'number',
        unit: '%',
        expected: 90,
        commonErrors: [
          { value: 30, message: '30 % es el porcentaje de quienes tienen exactamente 2 hermanos (9 de 30). Calculá el porcentaje para los 27 alumnos de 30.' }
        ]
      }
    ],
    hints: [
      'Todas las frecuencias absolutas deben sumar n = 30: 6 + 12 + f₃ + 3 = 30.',
      'Una vez que tenés f₃ = 9, calculá F₃ sumando las frecuencias de 0, 1 y 2 hermanos: 6 + 12 + 9.',
      'Dividí F₃ entre 30 y multiplicá por 100 para obtener el porcentaje acumulado.'
    ],
    solutionSteps: [
      '1) Suma total: 6 + 12 + f₃ + 3 = 30 → 21 + f₃ = 30 → f₃ = 30 − 21 = 9 alumnos.',
      '2) Frecuencia acumulada hasta 2 hermanos: F₃ = 6 + 12 + 9 = 27 alumnos.',
      '3) Porcentaje acumulado: (27 ÷ 30) × 100 = 0,90 × 100 = 90 % (el 90 % del curso tiene 2 o menos hermanos).'
    ],
    commonErrorNote: 'Comprobá que si 27 de 30 tienen 2 o menos hermanos y los otros 3 tienen 3 hermanos, 27 + 3 = 30 (90 % + 10 % = 100 %).'
  },
  {
    id: 'G2-07',
    title: 'Porcentaje de rendimiento «Bueno o superior»',
    source: { kind: 'guia', exercise: '2.7', label: 'Guía 2.7' },
    topic: 'frecuencias',
    level: 'intermedio',
    skills: ['cualitativa-ordinal', 'porcentaje', 'acumulacion-ordinal'],
    lessonId: 'L05',
    allowComparableVariant: false,
    prompt: 'En una evaluación de n = 50 alumnos, los resultados según la escala ordenada (Insuficiente < Regular < Bueno < Sobresaliente) fueron: 15 obtuvieron «Sobresaliente», 20 «Bueno», 10 «Regular» y 5 «Insuficiente». ¿Cuántos estudiantes obtuvieron un rendimiento de «Bueno» o superior y qué porcentaje del total representan?',
    parts: [
      {
        id: 'cant',
        label: '1. Cantidad de estudiantes con rendimiento «Bueno» o «Sobresaliente»',
        type: 'number',
        integerOnly: true,
        expected: 35,
        commonErrors: [
          { value: 20, message: '20 son solo quienes obtuvieron «Bueno». Como pide «Bueno o superior», sumá también los 15 de «Sobresaliente».' },
          { value: 15, message: '15 son solo los de «Sobresaliente». Incluí también a los 20 que obtuvieron «Bueno».' }
        ]
      },
      {
        id: 'pct',
        label: '2. Porcentaje del total de 50 alumnos (%)',
        type: 'number',
        unit: '%',
        expected: 70,
        commonErrors: [
          { value: 35, message: '35 es la cantidad de alumnos sobre un total de 50. Para pasar a porcentaje (sobre 100), hacé (35 ÷ 50) × 100.' }
        ]
      }
    ],
    hints: [
      'En la jerarquía de calificaciones, «Bueno o superior» abarca dos categorías: «Bueno» y «Sobresaliente».',
      'Sumá las frecuencias de esas dos categorías: 20 + 15 = 35 alumnos.',
      'Calculá qué porcentaje representa 35 sobre un total de n = 50 alumnos: (35 ÷ 50) × 100.'
    ],
    solutionSteps: [
      'Estudiantes con «Bueno» o «Sobresaliente»: 20 + 15 = 35 alumnos.',
      'Porcentaje sobre el total (n = 50): (35 ÷ 50) × 100 = 0,70 × 100 = 70 %.'
    ],
    commonErrorNote: 'Cuando n = 50, cada alumno representa 2 % (no 1 %): 35 alumnos equivalen al 70 %.'
  },
  {
    id: 'G3-01',
    title: 'Gráfico de barras para colores de remera de viaje',
    source: { kind: 'guia', exercise: '3.1', label: 'Guía 3.1' },
    topic: 'barras',
    level: 'inicial',
    skills: ['construir-barras', 'elegir-escala'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Un grupo de 30 estudiantes votó por el color de su remera: Azul (12 votos), Rojo (8 votos), Verde (6 votos) y Amarillo (4 votos). Elegí una escala uniforme válida para el eje vertical (Eje Y) e indicá la altura de cada barra.',
    parts: [
      {
        id: 'constructor',
        label: '1. Elegí cuántas unidades vale cada cuadrito (por ejemplo, 1 o 2 votos por cuadrito) y completá los votos que alcanza cada barra',
        type: 'bar-builder',
        unit: 'votos',
        inputMode: 'value',
        maxGridCells: 15,
        validScaleSteps: [1, 2],
        bars: [
          { key: 'azul', label: 'Azul', value: 12 },
          { key: 'rojo', label: 'Rojo', value: 8 },
          { key: 'verde', label: 'Verde', value: 6 },
          { key: 'amarillo', label: 'Amarillo', value: 4 }
        ]
      },
      {
        id: 'cuadritos_azul',
        label: '2. Si en tu hoja cuadriculada elegís la escala 1 cuadrito = 2 votos, ¿cuántos cuadritos de alto mide la barra de «Azul» (12 votos)?',
        type: 'number',
        expected: 6
      }
    ],
    hints: [
      'La mayor frecuencia es 12 votos (Azul). En una hoja con 15 cuadritos entran tanto la escala de 1 voto por cuadrito (12 cuadritos) como la de 2 votos por cuadrito (6 cuadritos).',
      'Cada barra debe subir hasta su frecuencia: Azul = 12, Rojo = 8, Verde = 6, Amarillo = 4.',
      'Si cada cuadrito vale 2 votos, para llegar a 12 votos necesitás 12 ÷ 2 = 6 cuadritos.'
    ],
    solutionSteps: [
      'Eje X (horizontal): colocamos las 4 categorías (Azul, Rojo, Verde, Amarillo) usando 2 cuadritos de ancho por barra y 1 cuadrito libre de separación.',
      'Eje Y (vertical): graduamos desde 0 con escala uniforme, por ejemplo de 2 en 2 (0, 2, 4, 6, 8, 10, 12 votos), donde 1 cuadrito = 2 votos (o de 1 en 1 si disponemos de 12 cuadritos).',
      'Con 1 cuadrito = 2 votos, las barras miden: Azul = 6 cuadritos (12 votos), Rojo = 4 cuadritos (8 votos), Verde = 3 cuadritos (6 votos) y Amarillo = 2 cuadritos (4 votos).'
    ],
    commonErrorNote: 'No existe una única escala correcta mientras empiece en 0, avance en pasos iguales y entre en el espacio disponible.'
  },
  {
    id: 'G3-02',
    title: 'Gráfico de barras de faltas mensuales',
    source: {
      kind: 'guia',
      exercise: '3.2',
      label: 'Guía 3.2',
      adaptationNote: 'Provee la tabla completa en el enunciado para que sea autónomo respecto del Ejercicio 2.1.'
    },
    topic: 'barras',
    level: 'inicial',
    skills: ['construir-barras', 'rotular-ejes'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Con los datos de faltas mensuales de 15 alumnos (0 faltas: 5 alumnos; 1 falta: 6 alumnos; 2 faltas: 3 alumnos; 3 faltas: 1 alumno), construí el gráfico de barras e identificá qué representa cada eje.',
    parts: [
      {
        id: 'ejes',
        label: '1. ¿Qué debe ubicarse en el eje horizontal (X) y qué en el eje vertical (Y)?',
        type: 'select',
        options: [
          { value: 'x_faltas_y_alumnos', label: 'Eje X: Cantidad de faltas (0, 1, 2, 3) | Eje Y: Cantidad de alumnos (frecuencia absoluta)' },
          { value: 'x_alumnos_y_faltas', label: 'Eje X: Cantidad de alumnos (5, 6, 3, 1) | Eje Y: Cantidad de faltas' },
          { value: 'x_acumulada', label: 'Eje X: Frecuencia acumulada (5, 11, 14, 15) | Eje Y: Porcentaje' }
        ],
        expected: 'x_faltas_y_alumnos'
      },
      {
        id: 'constructor',
        label: '2. Configurá la escala (por ejemplo, 1 cuadrito = 1 alumno) y la altura de cada barra',
        type: 'bar-builder',
        unit: 'alumnos',
        inputMode: 'value',
        maxGridCells: 12,
        validScaleSteps: [1, 2],
        bars: [
          { key: 'f0', label: '0 faltas', value: 5 },
          { key: 'f1', label: '1 falta', value: 6 },
          { key: 'f2', label: '2 faltas', value: 3 },
          { key: 'f3', label: '3 faltas', value: 1 }
        ]
      }
    ],
    hints: [
      'Los valores observados de la variable (0, 1, 2 y 3 faltas) van en la base horizontal (Eje X).',
      'La cantidad de veces que se repite cada valor (5, 6, 3 y 1 alumnos) da la altura vertical en el Eje Y.',
      'Como la frecuencia máxima es 6, elegir 1 cuadrito = 1 alumno permite dibujar alturas exactas de 5, 6, 3 y 1 cuadritos.'
    ],
    solutionSteps: [
      'Eje horizontal (X): valores de la variable «Cantidad de faltas» (0, 1, 2, 3), con barras de 2 cuadritos de ancho separadas por 1 cuadrito.',
      'Eje vertical (Y): «Cantidad de alumnos» graduado de 1 en 1 desde 0 hasta 6.',
      'Alturas de las barras: 0 faltas → 5 cuadritos; 1 falta → 6 cuadritos; 2 faltas → 3 cuadritos; 3 faltas → 1 cuadrito.'
    ],
    commonErrorNote: 'Incluso cuando el valor de la variable es 0 («0 faltas»), tiene su propia barra cuya altura es su frecuencia (5 alumnos).'
  },
  {
    id: 'G3-03',
    title: 'Detección y prevención de dos errores habituales en gráficos de barras',
    source: { kind: 'guia', exercise: '3.3', label: 'Guía 3.3' },
    topic: 'barras',
    level: 'intermedio',
    skills: ['detectar-errores-graficos', 'justificar-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Un compañero dibujó un gráfico de barras en su carpeta cometiendo dos errores muy comunes: (1) pegó todas las barras sin dejar espacio entre ellas y (2) en el eje vertical escribió las marcas «0, 1, 3, 6, 12» a un cuadrito de distancia cada una. Identificá por qué son incorrectos y explicá cómo prevenirlos.',
    parts: [
      {
        id: 'error_escala',
        label: '1. ¿Por qué es un error matemático poner «0, 1, 3, 6, 12» a un cuadrito de distancia cada uno en el Eje Y?',
        type: 'select',
        options: [
          {
            value: 'deforma-proporcion',
            label: 'Porque rompe la escala uniforme: un mismo cuadrito vale primero 1 unidad, luego 2, luego 3 y luego 6, deformando la proporcionalidad de las barras'
          },
          {
            value: 'sobran-numeros',
            label: 'Porque no se puede escribir el número 0 en el eje vertical'
          },
          {
            value: 'solo-impares',
            label: 'Porque en el eje Y nunca pueden ir números impares'
          }
        ],
        expected: 'deforma-proporcion'
      },
      {
        id: 'error_pegadas',
        label: '2. ¿Cómo se previene el error de pegar las barras o hacerlas de distinto grosor?',
        type: 'select',
        options: [
          {
            value: 'ancho-y-separacion',
            label: 'Usando un ancho constante (por ejemplo, 2 cuadritos por barra) y una separación uniforme (por ejemplo, 1 cuadrito libre) entre categorías o valores discretos'
          },
          {
            value: 'unir-con-linea',
            label: 'Uniendo todas las barras con una línea diagonal'
          }
        ],
        expected: 'ancho-y-separacion'
      },
      {
        id: 'explicacion',
        label: '3. Escribí con tus palabras dos recomendaciones para revisar tu gráfico antes de entregar el examen',
        type: 'rubric',
        placeholder: 'Anotá cómo controlás la separación/ancho de las barras y la graduación del eje vertical...',
        criteria: [
          'Indiqué dejar una separación constante (como 1 cuadrito) y mantener el mismo ancho en todas las barras.',
          'Indiqué graduar el eje Y desde 0 con intervalos numéricos iguales (por ejemplo, de 1 en 1 o de 2 en 2), sin copiar solo las frecuencias de la tabla.'
        ],
        modelAnswer: '1) Dejar 1 cuadrito constante de separación entre barras y mantener el mismo ancho (2 cuadritos). 2) Graduar el eje vertical desde 0 con intervalos iguales (como 0, 2, 4, 6, 8...), sin alterar las distancias numéricas.'
      }
    ],
    hints: [
      'En un eje graduado, la misma distancia en cuadritos debe representar siempre la misma cantidad de unidades.',
      'Si ponés solo los valores que aparecen en la tabla a igual distancia, una barra de 12 parece apenas más alta que una de 6.',
      'Para datos categóricos o discretos independientes, las barras llevan separación constante.'
    ],
    solutionSteps: [
      'Error 1: Dibujar las barras pegadas o de distinto ancho. Prevención: asignar 2 cuadritos de ancho a cada barra y 1 cuadrito libre de separación.',
      'Error 2: Alterar la escala numérica del eje Y ubicando números a saltos desiguales. Prevención: graduar el eje desde 0 con pasos constantes (por ejemplo, 0, 2, 4, 6, 8, 10, 12).'
    ],
    commonErrorNote: 'Nunca copies la columna f directamente como marcas del eje Y: graduá primero la recta numérica con pasos iguales.'
  },
  {
    id: 'G3-04',
    title: 'Puntos anotados por partido en el torneo de básquetbol',
    source: { kind: 'guia', exercise: '3.4', label: 'Guía 3.4' },
    topic: 'barras',
    level: 'intermedio',
    skills: ['rotular-ejes', 'elegir-escala', 'construir-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'En un torneo interclases de básquetbol (ejemplo ficticio), los puntos anotados por 2.º A en 5 partidos fueron: Partido 1 (12 pts), Partido 2 (20 pts), Partido 3 (16 pts), Partido 4 (24 pts) y Partido 5 (8 pts). Elegí el rótulo correcto del eje vertical y calculá la altura en cuadritos de cada barra usando la escala sugerida de 1 cuadrito = 4 puntos.',
    parts: [
      {
        id: 'rotulo_y',
        label: '1. ¿Cuál es el rótulo correcto para el eje vertical (Eje Y) en este gráfico?',
        type: 'select',
        options: [
          { value: 'puntos', label: 'Puntos anotados (porque la altura de cada barra mide los tantos convertidos en ese partido)' },
          { value: 'frecuencia_partidos', label: 'Cantidad de partidos (frecuencia de partidos)' },
          { value: 'porcentaje', label: 'Porcentaje de alumnos' }
        ],
        expected: 'puntos',
        optionFeedback: {
          puntos: '¡Exacto! Acá no estamos contando cuántos partidos tuvieron cierto puntaje, sino mostrando los puntos anotados en cada partido.',
          frecuencia_partidos: 'Atención: cada barra es un partido y su altura representa los puntos anotados (12, 20, 16, 24, 8 pts).',
          porcentaje: 'Los datos están expresados en puntos anotados por partido.'
        }
      },
      {
        id: 'constructor_cuadritos',
        label: '2. Con la escala 1 cuadrito = 4 puntos, ingresá cuántos cuadritos de altura tendrá cada una de las 5 barras',
        type: 'bar-builder',
        unit: 'cuadritos',
        inputMode: 'cells',
        maxGridCells: 10,
        validScaleSteps: [4],
        bars: [
          { key: 'p1', label: 'Partido 1 (12 pts)', value: 12 },
          { key: 'p2', label: 'Partido 2 (20 pts)', value: 20 },
          { key: 'p3', label: 'Partido 3 (16 pts)', value: 16 },
          { key: 'p4', label: 'Partido 4 (24 pts)', value: 24 },
          { key: 'p5', label: 'Partido 5 (8 pts)', value: 8 }
        ]
      }
    ],
    hints: [
      'Observá que todos los puntajes (12, 20, 16, 24 y 8) son múltiplos de 4.',
      'Si 1 cuadrito representa 4 puntos, el eje Y se gradúa: 0, 4, 8, 12, 16, 20, 24 puntos.',
      'Para saber cuántos cuadritos sube cada barra, dividí los puntos del partido entre 4.'
    ],
    solutionSteps: [
      'Rótulo del eje Y: «Puntos anotados» (y en el eje X: «Partido 1 a Partido 5»).',
      'Escala sugerida en eje Y: 1 cuadrito = 4 puntos (marcas en 0, 4, 8, 12, 16, 20, 24).',
      'Alturas en cuadritos: Partido 1 = 12 ÷ 4 = 3 cuadritos; Partido 2 = 20 ÷ 4 = 5 cuadritos; Partido 3 = 16 ÷ 4 = 4 cuadritos; Partido 4 = 24 ÷ 4 = 6 cuadritos; Partido 5 = 8 ÷ 4 = 2 cuadritos.'
    ],
    commonErrorNote: 'Rotular siempre la magnitud real representada en el eje vertical («Puntos anotados» en un gráfico de puntos por partido).'
  },
  {
    id: 'G3-05',
    title: 'Proporción y altura de la barra «Cumbia» en géneros musicales',
    source: {
      kind: 'guia',
      exercise: '3.5',
      label: 'Guía 3.5 (precisado)',
      adaptationNote: 'Aclara la diferencia entre alcanzar el valor 40 % en un eje porcentual y ocupar el 40 % de la altura visible si el eje termina en otra cifra.'
    },
    topic: 'barras',
    level: 'intermedio',
    skills: ['porcentaje', 'lectura-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'En un gráfico de barras sobre géneros musicales preferidos por n = 40 alumnos, la barra de «Cumbia» alcanza una frecuencia absoluta de 16 alumnos. Calculá qué porcentaje del total representa esa barra y analizá cómo se lee su altura en un eje porcentual.',
    parts: [
      {
        id: 'pct_cumbia',
        label: '1. ¿Qué porcentaje del total de 40 alumnos representa la barra de «Cumbia» (f = 16)?',
        type: 'number',
        unit: '%',
        expected: 40,
        commonErrors: [
          { value: 16, message: '16 es la frecuencia absoluta sobre 40 alumnos. Para hallar el porcentaje hacé (16 ÷ 40) × 100.' }
        ]
      },
      {
        id: 'lectura_eje',
        label: '2. Si construimos el gráfico con un eje vertical en porcentajes (%), ¿hasta qué marca del eje llega la barra de Cumbia?',
        type: 'select',
        options: [
          {
            value: 'marca_40',
            label: 'Llega hasta la marca de 40 % en el eje vertical (que sería el 40 % de un eje que llegara hasta el 100 % del curso, aunque el gráfico suele graduarse hasta un poco más de la categoría máxima)'
          },
          {
            value: 'marca_16',
            label: 'Llega hasta 16 % porque 16 alumnos es igual a 16 %'
          }
        ],
        expected: 'marca_40'
      }
    ],
    hints: [
      'Dividí la frecuencia de Cumbia (16) entre el total del curso (40) y multiplicá por 100.',
      '16 ÷ 40 = 0,40 → 0,40 × 100 = 40 %.',
      'En un eje graduado en porcentajes, la barra sube hasta la línea del 40 %.'
    ],
    solutionSteps: [
      'Cálculo del porcentaje: (16 ÷ 40) × 100 = 0,40 × 100 = 40 %.',
      'Interpretación gráfica: en un eje vertical porcentual, la barra llega a la marca de 40 % (representa dos quintas partes, es decir el 40 %, del total de 40 estudiantes).'
    ],
    commonErrorNote: 'La altura de una barra se lee siempre contra la escala graduada del eje Y, no a ojo según dónde termine el recuadro.'
  },
  {
    id: 'G3-06',
    title: '¿Por qué no unir con líneas las categorías de un gráfico de barras?',
    source: {
      kind: 'guia',
      exercise: '3.6',
      label: 'Guía 3.6 (precisado)',
      adaptationNote: 'Explica por qué unir categorías nominales sugiere un orden o transición inexistente, sin afirmar que un gráfico de líneas jamás pueda representar conteos discretos a lo largo del tiempo.'
    },
    topic: 'barras',
    level: 'desafio',
    skills: ['concepto-barras', 'justificar-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'Explicá conceptualmente por qué en una distribución de frecuencias de una variable cualitativa nominal (como deporte o transporte preferido) dibujamos barras separadas y no unimos las categorías con una línea continua.',
    parts: [
      {
        id: 'motivo_principal',
        label: '1. ¿Qué idea falsa transmitiría unir con una línea categorías nominales como «Colectivo, Moto, Bicicleta, Caminando»?',
        type: 'select',
        options: [
          {
            value: 'orden_transicion',
            label: 'Sugeriría un orden natural o una variación continua entre una palabra y otra, cuando son categorías independientes cuyo orden en el eje X es arbitrario'
          },
          {
            value: 'suma_distinta',
            label: 'Haría que la suma de las frecuencias absolutas deje de dar n'
          }
        ],
        expected: 'orden_transicion'
      },
      {
        id: 'aclaracion_lineas',
        label: '2. ¿En qué caso sí tiene sentido usar segmentos o líneas para conectar datos?',
        type: 'select',
        options: [
          {
            value: 'serie_temporal',
            label: 'Cuando el eje horizontal tiene una secuencia temporal u orden real donde interesa seguir la tendencia o evolución de un período al siguiente'
          },
          {
            value: 'nunca_jamas',
            label: 'En ningún caso de la estadística se usan gráficos de líneas'
          }
        ],
        expected: 'serie_temporal'
      },
      {
        id: 'explicacion',
        label: '3. Redactá tu explicación y autoevaluala con la rúbrica',
        type: 'rubric',
        placeholder: 'Explicá por qué las barras van separadas y qué representa esa separación...',
        criteria: [
          'Expliqué que las barras separadas muestran categorías o valores discretos independientes.',
          'Mencioné que unir categorías nominales con una línea sugeriría una transición o tendencia continua inexistente entre ellas.'
        ],
        modelAnswer: 'Las barras se dibujan separadas porque representan categorías o valores discretos independientes. Unir categorías nominales con una línea continua sugeriría una transición intermedia o un orden natural que no existe entre opciones como colores o medios de transporte.'
      }
    ],
    hints: [
      'Pensá qué hay en el espacio entre la barra de «Colectivo» y la barra de «Moto»: ¿existe un valor numérico intermedio «medio colectivo y media moto»?',
      'No existe transición intermedia ni orden obligatorio entre categorías nominales.',
      'Por eso las barras separadas indican visualmente que cada categoría se cuenta por separado.'
    ],
    solutionSteps: [
      'En una distribución de categorías nominales o valores discretos, cada barra representa el conteo de un grupo bien diferenciado.',
      'Unir las barras con líneas continuas sugeriría la existencia de valores intermedios o una evolución de una categoría a la siguiente.',
      'Nota: los gráficos de líneas se reservan para mostrar tendencias a lo largo de un eje ordenado (típicamente el tiempo).'
    ],
    commonErrorNote: 'La separación entre barras cumple una función matemática: indicar que se trata de categorías o valores discretos separados.'
  },
  {
    id: 'G3-07',
    title: 'Elección de escala para frecuencia máxima 25 en 15 cuadritos',
    source: {
      kind: 'guia',
      exercise: '3.7',
      label: 'Guía 3.7 (completado)',
      adaptationNote: 'Incluye explícitamente el cálculo de la altura de la barra máxima de 25 (12,5 cuadritos con escala de 2 por cuadrito), que faltaba en el solucionario original, además de las barras de 15 y 20.'
    },
    topic: 'barras',
    level: 'desafio',
    skills: ['elegir-escala', 'proporcionalidad-barras'],
    lessonId: 'L06',
    allowComparableVariant: false,
    prompt: 'En un examen debés elaborar un gráfico de barras donde hay tres barras de frecuencias 15, 20 y 25 (la máxima es f = 25), pero tu hoja cuadriculada solo dispone de 15 cuadritos de altura vertical útil. Usando la escala graduada de 1 cuadrito = 2 unidades (0, 2, 4, 6, ..., 26), calculá cuántos cuadritos de altura mide cada una de las tres barras.',
    parts: [
      {
        id: 'altura_15',
        label: '1. Con escala 1 cuadrito = 2 unidades, ¿cuántos cuadritos de alto mide la barra de frecuencia 15?',
        type: 'number',
        expected: 7.5
      },
      {
        id: 'altura_20',
        label: '2. Con esa misma escala, ¿cuántos cuadritos de alto mide la barra de frecuencia 20?',
        type: 'number',
        expected: 10
      },
      {
        id: 'altura_25',
        label: '3. ¿Y cuántos cuadritos de alto mide la barra máxima de frecuencia 25?',
        type: 'number',
        expected: 12.5,
        commonErrors: [
          { value: 13, message: '13 cuadritos corresponde a la marca de 26 unidades (26 ÷ 2 = 13). Para representar 25 unidades hacé 25 ÷ 2 = 12,5 cuadritos (a mitad de camino entre la línea 12 y la línea 13).' },
          { value: 25, message: '25 es la frecuencia en unidades, pero como cada cuadrito vale 2 unidades, dividí 25 ÷ 2 para hallar los cuadritos.' }
        ]
      }
    ],
    hints: [
      'Si 1 cuadrito representa 2 unidades, para saber cuántos cuadritos ocupa cualquier frecuencia simplemente dividís esa frecuencia por 2.',
      'Cuando la frecuencia es par (como 20), cae justo sobre una línea de la cuadrícula: 20 ÷ 2 = 10 cuadritos.',
      'Cuando la frecuencia es impar (como 15 o 25), termina en «,5» cuadritos: justo a la mitad entre dos líneas consecutivas.'
    ],
    solutionSteps: [
      'Con 15 cuadritos disponibles, una escala de 1 cuadrito = 1 unidad no entra (necesitaría 25 cuadritos). Elegimos 1 cuadrito = 2 unidades, graduando el eje Y de 2 en 2 hasta 26 (13 cuadritos de alto).',
      'Barra de frecuencia 15: 15 ÷ 2 = 7,5 cuadritos (mitad entre los cuadritos 7 y 8).',
      'Barra de frecuencia 20: 20 ÷ 2 = 10 cuadritos exactos.',
      'Barra de frecuencia 25 (máxima): 25 ÷ 2 = 12,5 cuadritos (mitad entre los cuadritos 12 y 13).'
    ],
    commonErrorNote: 'También sería matemáticamente válida una escala de 1 cuadrito = 5 unidades (donde 15, 20 y 25 medirían 3, 4 y 5 cuadritos), aunque usar 2 unidades por cuadrito aprovecha mejor la altura de la hoja.'
  },
  {
    id: 'G4-01',
    title: 'Media, mediana y moda de las edades de 10 estudiantes',
    source: { kind: 'guia', exercise: '4.1', label: 'Guía 4.1' },
    topic: 'medidas',
    level: 'inicial',
    skills: ['media', 'mediana-par', 'moda'],
    lessonId: 'L07',
    allowComparableVariant: true,
    prompt: 'Dado el siguiente conjunto de edades (en años) de n = 10 estudiantes que participan de un taller deportivo (ejemplo de la guía):\n12, 13, 13, 14, 14, 14, 15, 15, 16, 18.\nCalculá la suma total, la media aritmética, la mediana (promediando los dos datos centrales al ser n = 10 par) y la moda.',
    dataset: [12, 13, 13, 14, 14, 14, 15, 15, 16, 18],
    parts: [
      {
        id: 'suma',
        label: '1. Suma total de las 10 edades',
        type: 'number',
        integerOnly: true,
        expected: 144
      },
      {
        id: 'media',
        label: '2. Media aritmética (x̄) en años',
        type: 'number',
        unit: 'años',
        expected: 14.4,
        roundingDecimals: 2,
        commonErrors: [
          { value: 14, message: '14 es la mediana y la moda, pero la media es 144 ÷ 10 = 14,4 años. No redondees a entero.' },
          { value: 24, message: 'Dividiste por la cantidad de valores distintos (6) en lugar de dividir entre los n = 10 estudiantes.' }
        ]
      },
      {
        id: 'mediana',
        label: '3. Mediana (Me) en años (promedio de las posiciones 5 y 6)',
        type: 'number',
        unit: 'años',
        expected: 14,
        commonErrors: [
          { value: 5.5, message: '5,5 es la posición central ((10 + 1) ÷ 2 = 5,5), no el valor de la edad. Buscá qué edades están en las posiciones 5 y 6 (ambas son 14).' }
        ]
      },
      {
        id: 'moda',
        label: '4. Moda (Mo) en años',
        type: 'number-set',
        expected: [14],
        maxFrequency: 3
      }
    ],
    hints: [
      'Sumá los 10 números (incluyendo los repetidos): 12 + 13 + 13 + 14 + 14 + 14 + 15 + 15 + 16 + 18 = 144.',
      'Para la media dividí 144 entre 10. Para la mediana, como la lista ya está ordenada y n = 10 es par, fijate qué valores ocupan los lugares 5.º y 6.º.',
      'Para la moda, buscá cuál es la edad que más veces se repite en la lista.'
    ],
    solutionSteps: [
      'Datos ordenados (n = 10): 12, 13, 13, 14, 14, 14, 15, 15, 16, 18.',
      'Suma total: 144 años → Media: x̄ = 144 ÷ 10 = 14,4 años.',
      'Mediana: como n = 10 es par, posición = (10 + 1) ÷ 2 = 5,5. Promediamos los datos en posición 5 (14) y posición 6 (14): Me = (14 + 14) ÷ 2 = 14 años.',
      'Moda: el valor 14 años aparece 3 veces (mayor frecuencia) → Mo = 14 años.'
    ],
    commonErrorNote: 'No confundir la posición 5,5 con el valor de la mediana (14 años), ni la frecuencia máxima (3) con la moda (14 años).'
  },
  {
    id: 'G4-02',
    title: 'Marca de zapatillas preferida por 12 adolescentes',
    source: { kind: 'guia', exercise: '4.2', label: 'Guía 4.2' },
    topic: 'medidas',
    level: 'inicial',
    skills: ['moda-categorica', 'pertinencia-medidas'],
    lessonId: 'L09',
    allowComparableVariant: false,
    prompt: 'Se consultó a n = 12 adolescentes sobre su marca de zapatillas preferida (ejemplo de la guía):\nNike, Adidas, Puma, Nike, Topper, Nike, Adidas, Puma, Nike, Topper, Adidas, Nike.\nRespondé si se pueden calcular la media y la mediana para esta variable, justificá por qué y determiná la medida correspondiente.',
    dataset: ['Nike', 'Adidas', 'Puma', 'Nike', 'Topper', 'Nike', 'Adidas', 'Puma', 'Nike', 'Topper', 'Adidas', 'Nike'],
    parts: [
      {
        id: 'pertinencia',
        label: '1. ¿Se pueden calcular la media y la mediana para «marca de zapatillas»? ¿Por qué?',
        type: 'select',
        options: [
          {
            value: 'no_nominal',
            label: 'No, porque es una variable cualitativa nominal: no se pueden sumar nombres (sin media) ni tienen un orden jerárquico natural (sin mediana)'
          },
          {
            value: 'si_frecuencias',
            label: 'Sí, promediando cuántas letras tiene cada marca'
          },
          {
            value: 'si_orden_alfabetico',
            label: 'Sí, ordenando alfabéticamente y tomando la marca del medio como mediana'
          }
        ],
        expected: 'no_nominal',
        optionFeedback: {
          no_nominal: '¡Exacto! En variables cualitativas nominales la única medida de tendencia central aplicable es la moda.',
          si_frecuencias: 'Eso mediría el largo de las palabras, no la preferencia de marca.',
          si_orden_alfabetico: 'El orden alfabético es una convención de diccionario, no una jerarquía de magnitud: no define una mediana estadística.'
        }
      },
      {
        id: 'moda_marca',
        label: '2. ¿Cuál es la moda (Mo) de esta distribución?',
        type: 'select',
        options: [
          { value: 'Nike', label: 'Nike (es la categoría más frecuente, elegida 5 veces)' },
          { value: '5', label: '5 (porque es el número más alto)' },
          { value: 'Adidas', label: 'Adidas (elegida 3 veces)' }
        ],
        expected: 'Nike',
        optionFeedback: {
          Nike: '¡Correcto! Nike se repite 5 veces (frente a 3 de Adidas, 2 de Puma y 2 de Topper), por lo que Mo = Nike.',
          '5': 'Cuidado: 5 es la frecuencia absoluta máxima (cuántas veces se eligió), pero la moda es la categoría: «Nike».',
          Adidas: 'Contá de nuevo: Adidas aparece 3 veces, pero Nike aparece 5 veces.'
        }
      },
      {
        id: 'frec_nike',
        label: '3. ¿Cuál es la frecuencia absoluta de «Nike»?',
        type: 'number',
        integerOnly: true,
        expected: 5
      }
    ],
    hints: [
      'Contá cuántas veces aparece cada marca en los 12 datos: Nike, Adidas, Puma y Topper.',
      'Preguntate si se pueden sumar palabras para sacar un promedio o si hay una marca «mayor» que otra.',
      'Recordá que la moda es el nombre de la marca más elegida, no cuántas veces salió.'
    ],
    solutionSteps: [
      'Conteo de frecuencias (n = 12): Nike = 5, Adidas = 3, Puma = 2, Topper = 2.',
      'No es posible calcular la media ni la mediana porque la variable es Cualitativa Nominal (no admite suma aritmética ni orden jerárquico).',
      'La única medida aplicable es la Moda: Mo = Nike (con frecuencia absoluta f = 5).'
    ],
    commonErrorNote: 'En una variable cualitativa nominal, la moda es el nombre de la categoría más repetida («Nike»), nunca el número 5.'
  },
  {
    id: 'G4-03',
    title: 'Salarios en un comercio y efecto de un valor extremo',
    source: { kind: 'guia', exercise: '4.3', label: 'Guía 4.3' },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['media', 'mediana-impar', 'eleccion-medida', 'valores-extremos'],
    lessonId: 'L10',
    allowComparableVariant: false,
    prompt: 'En un comercio (datos ficticios del ejercicio), 4 empleados cobran un salario mensual de $300.000 cada uno y el gerente cobra $2.800.000 (total n = 5 personas).\n1) Calculá la media y la mediana de los 5 sueldos.\n2) Explicá cuál de las dos medidas representa mejor la situación salarial típica de los trabajadores y por qué.',
    dataset: [300000, 300000, 300000, 300000, 2800000],
    parts: [
      {
        id: 'media',
        label: '1. Media aritmética (x̄) de los 5 sueldos en pesos (podés escribir 800000 o 800.000)',
        type: 'number',
        unit: '$',
        allowThousandsDot: true,
        expected: 800000,
        commonErrors: [
          { value: 1550000, message: 'Promediaste solo $300.000 y $2.800.000 como si fueran 2 personas, pero hay 4 empleados que cobran $300.000 y 1 gerente ($4.000.000 ÷ 5).' }
        ]
      },
      {
        id: 'mediana',
        label: '2. Mediana (Me) de los 5 sueldos ordenados en pesos',
        type: 'number',
        unit: '$',
        allowThousandsDot: true,
        expected: 300000,
        commonErrors: [
          { value: 3, message: '3 es la posición central ((5 + 1) ÷ 2 = 3), pero el sueldo que ocupa el tercer lugar es $300.000.' }
        ]
      },
      {
        id: 'mejor_medida',
        label: '3. ¿Cuál de las dos medidas representa de manera más fiel el sueldo típico de los trabajadores del comercio?',
        type: 'select',
        options: [
          {
            value: 'mediana',
            label: 'La mediana ($300.000), porque el promedio ($800.000) se ve fuertemente distorsionado hacia arriba por el sueldo extremo del gerente'
          },
          {
            value: 'media',
            label: 'La media ($800.000), porque siempre que se puede calcular el promedio es la mejor medida'
          }
        ],
        expected: 'mediana'
      },
      {
        id: 'justificacion',
        label: '4. Redactá tu conclusión y comprobá los criterios en la rúbrica',
        type: 'rubric',
        placeholder: 'Explicá cuál medida elegís y qué efecto produce el sueldo de $2.800.000 sobre la media...',
        criteria: [
          'Indiqué que la mediana ($300.000) representa mejor a la mayoría (4 de los 5 trabajadores ganan $300.000).',
          'Expliqué que la media ($800.000) es sensible al valor extremo ($2.800.000) y no refleja lo que gana ningún empleado.'
        ],
        modelAnswer: 'La mediana ($300.000) describe mucho mejor la realidad salarial típica del comercio, ya que 4 de las 5 personas cobran ese monto, mientras que la media ($800.000) queda distorsionada por el valor extremo del sueldo del gerente.'
      }
    ],
    hints: [
      'Escribí los 5 sueldos uno por uno: 300.000; 300.000; 300.000; 300.000; 2.800.000.',
      'Sumá los 5 sueldos (da 4.000.000) y dividí entre 5 para la media. Para la mediana, mirá cuál es el 3.º sueldo ordenado.',
      'Compará $800.000 y $300.000 con lo que realmente cobran los 4 empleados.'
    ],
    solutionSteps: [
      'Datos ordenados (n = 5): $300.000, $300.000, $300.000, $300.000, $2.800.000.',
      'Media: suma = $4.000.000 → x̄ = 4.000.000 ÷ 5 = $800.000.',
      'Mediana: posición central = (5 + 1) ÷ 2 = 3 → el tercer dato ordenado es Me = $300.000.',
      'Conclusión: la mediana ($300.000) es más representativa porque la media ($800.000) se ve arrastrada por el valor atípico/extremo del gerente.'
    ],
    commonErrorNote: 'No promediar solo 300.000 y 2.800.000: hay cuatro sueldos de $300.000 que deben incluirse en la suma y en el orden.'
  },
  {
    id: 'G4-04',
    title: 'Media y mediana de las estaturas de 8 jugadores de básquetbol',
    source: { kind: 'guia', exercise: '4.4', label: 'Guía 4.4' },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['media', 'mediana-par'],
    lessonId: 'L08',
    allowComparableVariant: true,
    prompt: 'Las estaturas expresadas en centímetros de n = 8 jugadores del equipo de básquetbol (ejemplo de la guía) son:\n162, 165, 168, 170, 172, 175, 180, 188.\nCalculá la suma total, la media aritmética (x̄) y la mediana (Me) detallando los valores centrales en las posiciones 4 y 5.',
    dataset: [162, 165, 168, 170, 172, 175, 180, 188],
    parts: [
      {
        id: 'suma',
        label: '1. Suma de las 8 estaturas (en cm)',
        type: 'number',
        integerOnly: true,
        expected: 1380
      },
      {
        id: 'media',
        label: '2. Media aritmética (x̄) en cm',
        type: 'number',
        unit: 'cm',
        expected: 172.5,
        roundingDecimals: 2
      },
      {
        id: 'centrales',
        label: '3. ¿Cuáles son los dos valores que ocupan las posiciones centrales 4.ª y 5.ª?',
        type: 'select',
        options: [
          { value: '170_172', label: '170 cm (posición 4) y 172 cm (posición 5)' },
          { value: '168_170', label: '168 cm (posición 3) y 170 cm (posición 4)' },
          { value: '172_175', label: '172 cm (posición 5) y 175 cm (posición 6)' }
        ],
        expected: '170_172'
      },
      {
        id: 'mediana',
        label: '4. Mediana (Me) en cm (semisuma de los dos valores centrales)',
        type: 'number',
        unit: 'cm',
        expected: 171,
        commonErrors: [
          { value: 4.5, message: '4,5 indica que el centro está entre las posiciones 4 y 5. Promediá las estaturas que están en esas posiciones: (170 + 172) ÷ 2.' }
        ]
      }
    ],
    hints: [
      'Sumá las 8 estaturas: 162 + 165 + 168 + 170 + 172 + 175 + 180 + 188 = 1380 cm.',
      'Dividí 1380 entre 8 para hallar la media.',
      'Como los 8 datos ya están ordenados de menor a mayor, tomá el 4.º dato (170) y el 5.º dato (172) y calculá (170 + 172) ÷ 2.'
    ],
    solutionSteps: [
      'Suma de los 8 datos: 1380 cm.',
      'Media aritmética: x̄ = 1380 ÷ 8 = 172,5 cm.',
      'Mediana (n = 8 par): posición = (8 + 1) ÷ 2 = 4,5. Promediamos el 4.º dato (170 cm) y el 5.º dato (172 cm): Me = (170 + 172) ÷ 2 = 342 ÷ 2 = 171 cm.'
    ],
    commonErrorNote: 'Fijate que 171 cm no figura en la lista original: con cantidad par de datos numéricos, la mediana es el punto medio entre los dos centrales.'
  },
  {
    id: 'G4-05',
    title: 'Respuestas correctas de 16 alumnos en una prueba corta',
    source: {
      kind: 'guia',
      exercise: '4.5',
      label: 'Guía 4.5 (verificado)',
      adaptationNote: 'Verifica la suma exacta 127 y expresa la media redondeada con el signo de aproximación: 127 ÷ 16 = 7,9375 ≈ 7,94.'
    },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['media', 'mediana-par', 'moda', 'redondeo'],
    lessonId: 'L07',
    allowComparableVariant: true,
    prompt: 'En una prueba corta de 10 preguntas, el número de respuestas correctas obtenido por n = 16 alumnos fue:\n5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10.\nDeterminá la suma total, la media (redondeada a 2 decimales), la mediana, la moda y si la serie es unimodal, bimodal o amodal.',
    dataset: [5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10],
    parts: [
      {
        id: 'suma',
        label: '1. Suma exacta de los 16 datos',
        type: 'number',
        integerOnly: true,
        expected: 127,
        commonErrors: [
          { value: 128, message: 'Revisá la suma con cuidado: 5 + (6×2) + (7×3) + (8×4) + (9×3) + (10×3) = 5 + 12 + 21 + 32 + 27 + 30 = 127 (no 128).' }
        ]
      },
      {
        id: 'media',
        label: '2. Media aritmética (x̄) redondeada a 2 decimales (o exacta 7,9375)',
        type: 'number',
        unit: 'aciertos',
        expected: { numerator: 127, denominator: 16 },
        roundingDecimals: 2,
        commonErrors: [
          { value: 8, message: 'La suma es 127 (no 128) y 127 ÷ 16 = 7,9375 ≈ 7,94. Escribí el valor con dos decimales (7,94) sin redondear a 8.' }
        ]
      },
      {
        id: 'mediana',
        label: '3. Mediana (Me) de los 16 datos (promedio de las posiciones 8 y 9)',
        type: 'number',
        unit: 'aciertos',
        expected: 8,
        commonErrors: [
          { value: 8.5, message: '8,5 es la posición central ((16 + 1) ÷ 2 = 8,5). Mirá qué datos ocupan los lugares 8.º y 9.º: ambos valen 8.' }
        ]
      },
      {
        id: 'moda',
        label: '4. Moda (Mo) de la distribución',
        type: 'number-set',
        expected: [8],
        maxFrequency: 4
      },
      {
        id: 'tipo_moda',
        label: '5. Según la cantidad de modas, ¿cómo se clasifica la serie?',
        type: 'select',
        options: [
          { value: 'unimodal', label: 'Unimodal (tiene una única moda: el valor 8 con frecuencia 4)' },
          { value: 'bimodal', label: 'Bimodal (dos modas empatadas)' },
          { value: 'amodal', label: 'Amodal (ningún valor se repite más que otros)' }
        ],
        expected: 'unimodal'
      }
    ],
    hints: [
      'Podés sumar agrupando por frecuencias: 5×1 + 6×2 + 7×3 + 8×4 + 9×3 + 10×3 = 5 + 12 + 21 + 32 + 27 + 30 = 127.',
      'Dividí 127 entre 16: da 7,9375, que redondeado a dos cifras decimales es ≈ 7,94.',
      'En los 16 datos ordenados, tanto el 8.º como el 9.º dato son 8 (mediana = 8), y el 8 es el único valor que se repite 4 veces (moda = 8, unimodal).'
    ],
    solutionSteps: [
      'Suma de las 16 observaciones: 5 + 12 + 21 + 32 + 27 + 30 = 127 aciertos.',
      'Media aritmética: x̄ = 127 ÷ 16 = 7,9375 ≈ 7,94 aciertos.',
      'Mediana (n = 16 par): posición = (16 + 1) ÷ 2 = 8,5. Los datos en las posiciones 8 y 9 son 8 y 8 → Me = (8 + 8) ÷ 2 = 8 aciertos.',
      'Moda: la mayor frecuencia absoluta es f = 4, que corresponde únicamente al valor 8 → Mo = 8 aciertos (serie unimodal).'
    ],
    commonErrorNote: 'Escribir siempre «≈ 7,94» al redondear 7,9375 a dos cifras decimales.'
  },
  {
    id: 'G4-06',
    title: 'Quinta nota necesaria para alcanzar promedio 7',
    source: { kind: 'guia', exercise: '4.6', label: 'Guía 4.6' },
    topic: 'medidas',
    level: 'intermedio',
    skills: ['media', 'valor-faltante'],
    lessonId: 'L07',
    allowComparableVariant: false,
    prompt: 'Un estudiante obtuvo las siguientes notas en cuatro trabajos prácticos de matemática: 6, 7, 8 y 5. ¿Qué nota necesita obtener en el quinto trabajo práctico para lograr un promedio final exacto de 7,00 entre los 5 trabajos?',
    dataset: [6, 7, 8, 5],
    parts: [
      {
        id: 'suma_actual',
        label: '1. ¿Cuánto suman las 4 notas que ya tiene (6 + 7 + 8 + 5)?',
        type: 'number',
        integerOnly: true,
        expected: 26
      },
      {
        id: 'suma_necesaria',
        label: '2. Para que 5 notas tengan promedio 7, ¿cuánto deben sumar en total las 5 notas (5 × 7)?',
        type: 'number',
        integerOnly: true,
        expected: 35
      },
      {
        id: 'nota_faltante',
        label: '3. ¿Qué nota debe obtener en el quinto trabajo práctico (35 − 26)?',
        type: 'number',
        expected: 9,
        commonErrors: [
          { value: 6.5, message: '6,5 es el promedio actual de las 4 notas (26 ÷ 4 = 6,5). Lo que buscamos es qué 5.ª nota hace que la suma llegue a 35.' }
        ]
      }
    ],
    hints: [
      'Pensalo primero como reparto: si el promedio de 5 notas es 7, es como si hubiera sacado 7 en cada una de las 5 pruebas (total acumulado = 5 × 7 = 35 puntos).',
      'Sumá los puntos que ya reunió en los 4 primeros trabajos: 6 + 7 + 8 + 5 = 26 puntos.',
      'Restá: 35 − 26 para saber cuántos puntos le faltan en el quinto trabajo.'
    ],
    solutionSteps: [
      'Razonamiento por total acumulado: para lograr promedio 7 en 5 trabajos, la suma de las 5 notas debe ser 5 × 7 = 35 puntos.',
      'Suma de las 4 notas conocidas: 6 + 7 + 8 + 5 = 26 puntos.',
      'Planteo algebraico: (6 + 7 + 8 + 5 + x) ÷ 5 = 7 → (26 + x) ÷ 5 = 7 → 26 + x = 35 → x = 35 − 26 = 9.',
      'Comprobación: (6 + 7 + 8 + 5 + 9) ÷ 5 = 35 ÷ 5 = 7,00.'
    ],
    commonErrorNote: 'Comprobar siempre reemplazando la nota hallada (9) en el promedio de las 5 notas.'
  },
  {
    id: 'G4-07',
    title: 'Tardanzas en el trimestre: comparación con y sin el valor extremo',
    source: {
      kind: 'guia',
      exercise: '4.7',
      label: 'Guía 4.7 (reformulado)',
      adaptationNote: 'Verifica las medianas 1 (con 11 datos) y 0,5 (con 10 datos) y reformula la consigna final como «Compará cuánto cambió cada medida y explicá qué observás», evitando sugerir que la mediana permaneció invariable.'
    },
    topic: 'medidas',
    level: 'desafio',
    skills: ['media', 'mediana-impar', 'mediana-par', 'valores-extremos'],
    lessonId: 'L10',
    allowComparableVariant: false,
    prompt: 'Se registra el número de tardanzas durante un trimestre de n = 11 alumnos (ejemplo de la guía):\n0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 11.\n1) Calculá la media aritmética y la mediana de los 11 datos.\n2) Si se excluye el dato extremo (11 tardanzas), recalculá la media y la mediana para los 10 alumnos restantes.\n3) Compará cuánto cambió cada medida y explicá qué observás.',
    dataset: [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 11],
    parts: [
      {
        id: 'media_11',
        label: '1a. Media aritmética (x̄) con los 11 datos (suma = 20; redondeá a 2 decimales o escribí 20/11)',
        type: 'number',
        unit: 'tardanzas',
        expected: { numerator: 20, denominator: 11 },
        roundingDecimals: 2
      },
      {
        id: 'mediana_11',
        label: '1b. Mediana (Me) con los 11 datos (valor en la 6.ª posición ordenada)',
        type: 'number',
        unit: 'tardanzas',
        expected: 1,
        commonErrors: [
          { value: 0, message: 'Contá con cuidado las posiciones: hay cinco ceros en las posiciones 1 a 5, y en la posición 6 (la central de 11 datos) está el primer 1.' },
          { value: 6, message: '6 es la posición central ((11 + 1) ÷ 2 = 6), pero el dato que ocupa la posición 6 es 1 tardanza.' }
        ]
      },
      {
        id: 'media_10',
        label: '2a. Media aritmética (x̄) sin el extremo (quedan n = 10 datos que suman 9)',
        type: 'number',
        unit: 'tardanzas',
        expected: 0.9,
        roundingDecimals: 2
      },
      {
        id: 'mediana_10',
        label: '2b. Mediana (Me) sin el extremo (promedio entre las posiciones 5.ª y 6.ª de los 10 datos)',
        type: 'number',
        unit: 'tardanzas',
        expected: 0.5,
        commonErrors: [
          { value: 1, message: 'Con 10 datos (par), las posiciones centrales son la 5.ª (que vale 0) y la 6.ª (que vale 1). Su promedio es (0 + 1) ÷ 2 = 0,5.' },
          { value: 0, message: 'En la posición 5 hay un 0, pero en la posición 6 hay un 1. Promediá ambos valores centrales: (0 + 1) ÷ 2 = 0,5.' }
        ]
      },
      {
        id: 'comparacion',
        label: '3. Al comparar los resultados antes y después de quitar el 11, ¿qué ocurrió con ambas medidas?',
        type: 'select',
        options: [
          {
            value: 'ambas_cambian_mediana_resistente',
            label: 'Ambas cambiaron: la media bajó fuertemente a la mitad (de ≈ 1,82 a 0,90) por ser muy sensible al extremo, mientras que la mediana tuvo un cambio menor (de 1 a 0,5) mostrando mayor resistencia'
          },
          {
            value: 'mediana_invariable',
            label: 'La mediana jamás puede cambiar al quitar un dato extremo'
          }
        ],
        expected: 'ambas_cambian_mediana_resistente'
      }
    ],
    hints: [
      'Con 11 datos: 0+0+0+0+0+1+1+2+2+3+11 = 20 → media = 20 ÷ 11 ≈ 1,82. Como n = 11 es impar, la posición central es la 6.ª: contá 5 ceros y el 6.º dato es 1.',
      'Al quitar el 11 quedan 10 datos: 0, 0, 0, 0, 0, 1, 1, 2, 2, 3. La suma es 9 → media = 9 ÷ 10 = 0,90.',
      'Con 10 datos (par), los centrales están en las posiciones 5 (valor 0) y 6 (valor 1): Me = (0 + 1) ÷ 2 = 0,5.'
    ],
    solutionSteps: [
      '1) Con los 11 alumnos: suma = 20 → media x̄ = 20 ÷ 11 ≈ 1,82 tardanzas. Posición central = (11 + 1) ÷ 2 = 6 → el 6.º dato ordenado es Me = 1 tardanza.',
      '2) Sin el dato extremo (n = 10): suma = 9 → media x̄ = 9 ÷ 10 = 0,90 tardanzas. Posición central = (10 + 1) ÷ 2 = 5,5 → promedio entre el 5.º dato (0) y el 6.º dato (1): Me = (0 + 1) ÷ 2 = 0,5 tardanzas.',
      '3) Conclusión: al retirar el valor extremo (11), la media se redujo fuertemente (de ≈ 1,82 a 0,90). La mediana también cambió (de 1 a 0,5) porque se desplazó la posición central de 6 a 5,5, pero varió mucho menos y representa mejor que la mayoría tuvo entre 0 y 1 tardanza.'
    ],
    commonErrorNote: 'La mediana es más resistente que la media ante extremos, pero puede cambiar al agregar o quitar observaciones.'
  }
];

module.exports = { GUIA_EXERCISES };
