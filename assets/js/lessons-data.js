(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});

  const SYMBOLS_GLOSSARY = [
    {
      id: 'n',
      symbol: 'n',
      name: 'Cantidad total de datos (tamaño de la muestra)',
      readsAs: '«ene» (cantidad total de observaciones)',
      plainMeaning: 'Indica cuántas respuestas, personas u observaciones se registraron en total.',
      example: 'Si encuestamos a 20 estudiantes sobre cuántos libros leyeron, entonces n = 20.',
      warning: 'No confundas n (total de datos) con la cantidad de filas de la tabla.'
    },
    {
      id: 'x',
      symbol: 'x (o xᵢ)',
      name: 'Valor o categoría de la variable',
      readsAs: '«equis» o «equis sub i» (cada valor distinto observado)',
      plainMeaning: 'Representa cada respuesta distinta que aparece en los datos (un número o una categoría).',
      example: 'En libros leídos (0, 1, 2, 3, 4), cada uno de esos números posibles es un valor x.',
      warning: 'x es el dato observado (por ejemplo, 1 libro), no cuántas veces se repite.'
    },
    {
      id: 'f',
      symbol: 'f (o fᵢ)',
      name: 'Frecuencia absoluta',
      readsAs: '«efe» o «efe sub i» (cantidad de veces que aparece un valor)',
      plainMeaning: 'Cuenta cuántas veces se repite exactamente ese valor o categoría en la lista de datos.',
      example: 'Si 8 estudiantes respondieron que leyeron 1 libro, la frecuencia absoluta de 1 libro es f = 8.',
      warning: 'Al sumar todas las frecuencias absolutas (f) de la tabla, siempre tiene que dar el total n.'
    },
    {
      id: 'fr',
      symbol: 'fr (o hᵢ)',
      name: 'Frecuencia relativa',
      readsAs: '«efe erre» (parte o proporción del total)',
      plainMeaning: 'Muestra qué parte del total representa una fila. Se calcula dividiendo la frecuencia absoluta entre el total de datos: f ÷ n.',
      example: 'Si 8 de 20 estudiantes leyeron 1 libro, entonces fr = 8 ÷ 20 = 0,40.',
      warning: 'La frecuencia relativa está entre 0 y 1. La suma de todas las fr antes de redondear es 1.'
    },
    {
      id: 'pct',
      symbol: '%',
      name: 'Porcentaje (frecuencia porcentual)',
      readsAs: '«por ciento» (cuántos de cada 100)',
      plainMeaning: 'Expresa la frecuencia relativa sobre una base de 100. Se obtiene multiplicando la frecuencia relativa por 100.',
      example: 'Si fr = 0,40, entonces 0,40 × 100 = 40 %. Significa 40 de cada 100.',
      warning: 'No mezcles fr (0,40) con % (40 %). La suma de los porcentajes da 100 % (o muy cerca si hubo redondeo).'
    },
    {
      id: 'F',
      symbol: 'F (o Fᵢ)',
      name: 'Frecuencia absoluta acumulada',
      readsAs: '«efe mayúscula» (cantidad acumulada hasta ese valor)',
      plainMeaning: 'Suma las frecuencias absolutas desde el primer valor ordenado hasta la fila actual inclusive. Responde «¿cuántos tienen hasta este valor?».',
      example: 'Con frecuencias 3 (para 0 libros), 8 (para 1 libro) y 6 (para 2 libros), la acumulada hasta 2 libros es F = 3 + 8 + 6 = 17.',
      warning: 'Solo tiene sentido acumular cuando la variable tiene un orden natural (cuantitativa o cualitativa ordinal).'
    },
    {
      id: 'eq',
      symbol: '=',
      name: 'Igual a',
      readsAs: '«es igual a»',
      plainMeaning: 'Indica que el resultado de la cuenta es exacto, sin recortar decimales.',
      example: '6 ÷ 15 = 0,4 (el cociente termina exactamente en 0,4).',
      warning: 'Si recortás o redondeás periódicos como 0,333..., usá el signo ≈ en lugar de =.'
    },
    {
      id: 'approx',
      symbol: '≈',
      name: 'Aproximadamente igual a',
      readsAs: '«es aproximadamente igual a»',
      plainMeaning: 'Indica que el número fue redondeado a cierta cantidad de decimales.',
      example: '127 ÷ 16 = 7,9375 ≈ 7,94 (redondeado a dos cifras decimales).',
      warning: 'Redondeá recién al escribir el resultado final, no en los pasos intermedios.'
    },
    {
      id: 'xbar',
      symbol: 'x̄',
      name: 'Media aritmética (promedio)',
      readsAs: '«equis barra» (media o promedio)',
      plainMeaning: 'Es el resultado de sumar todos los datos numéricos y dividir esa suma por la cantidad total de datos (n).',
      example: 'Para los datos 2, 3 y 4: suma = 2 + 3 + 4 = 9; cantidad n = 3; promedio x̄ = 9 ÷ 3 = 3.',
      warning: 'Solo se calcula en variables cuantitativas. Siempre se divide por el total de observaciones (n).'
    },
    {
      id: 'sigma',
      symbol: 'Σ',
      name: 'Sumatoria',
      readsAs: '«sumatoria» (letra griega sigma mayúscula)',
      plainMeaning: 'Es una forma abreviada de pedir «sumá todos los términos indicados».',
      example: 'Σf significa sumar todas las frecuencias de la columna f: f₁ + f₂ + ... = n.',
      warning: 'No hace falta memorizar índices complicados: primero escribí la suma con números y verificá qué estás sumando.'
    },
    {
      id: 'Me',
      symbol: 'Me',
      name: 'Mediana',
      readsAs: '«mediana»',
      plainMeaning: 'Es el valor que queda en el centro cuando ordenás todos los datos de menor a mayor.',
      example: 'En 0, 1, 1, 2, 6 (5 datos ordenados), el tercer dato es el central: Me = 1.',
      warning: 'Primero ordená siempre los datos. No confundas la posición central con el valor que está en esa posición.'
    },
    {
      id: 'Mo',
      symbol: 'Mo',
      name: 'Moda',
      readsAs: '«moda»',
      plainMeaning: 'Es el valor o la categoría que más veces se repite (el de mayor frecuencia absoluta).',
      example: 'En 0, 1, 1, 2, 6, el número 1 se repite 2 veces y los demás 1 vez: Mo = 1.',
      warning: 'La moda es el valor del dato (1 libro), no la cantidad de veces que aparece (frecuencia).'
    }
  ];

  const LESSONS = [
    {
      id: 'L01',
      number: 1,
      topic: 'variables',
      title: 'Dato, variable y frecuencia: cantidades frente a etiquetas',
      objective: 'Distinguir la característica que estudiamos (variable), cada respuesta observada (dato) y cuántas veces se repite (frecuencia), diferenciando cantidades de etiquetas numéricas.',
      prerequisites: 'Contar elementos de una lista y leer situaciones cotidianas.',
      plainExplanation: [
        'Cuando hacemos una consulta o registro, primero definimos qué característica queremos observar en cada persona o elemento: esa característica general se llama variable estadística (por ejemplo, «deporte preferido» o «cantidad de hermanos»).',
        'Cada respuesta individual que obtenemos es un dato u observación (por ejemplo, «vóley» o «2 hermanos»). Y la cantidad de veces que se repite un mismo valor en todo el grupo es su frecuencia.',
        '¡Atención con los números! Que una respuesta se escriba con cifras no significa automáticamente que sea una cantidad matemática. Un número de camiseta (como la 10), el código postal o el número de línea de colectivo funcionan como nombres o etiquetas para identificar categorías: no tiene sentido sumarlos ni sacarles un promedio.'
      ],
      smallExample: {
        context: 'Ejemplo ficticio: consulta a 6 compañeros sobre cuántas mascotas tienen en su casa.',
        data: 'Respuestas registradas: 1, 2, 1, 0, 2, 1.',
        steps: [
          'Variable estudiada: cantidad de mascotas en el hogar (es la característica que preguntamos).',
          'Valores distintos observados: 0, 1 y 2 mascotas.',
          'Frecuencia del valor 1: aparece 3 veces en la lista (hay 3 compañeros que tienen 1 mascota).',
          'Total de observaciones: son 6 respuestas en total.'
        ],
        interpretation: 'Decir «1 mascota» es el valor del dato; decir «3 compañeros» es su frecuencia absoluta.'
      },
      notationNote: 'En las tablas vas a ver «x» para el valor del dato, «f» para la cantidad de veces que aparece (frecuencia absoluta) y «n» para la cantidad total de observaciones.',
      commonErrors: [
        'Confundir la variable («cantidad de mascotas») con un valor particular («2 mascotas») o con la muestra («los 6 compañeros»).',
        'Creer que «todo lo que tiene números es cuantitativo»: el número de documento, el número de aula o el código de trámite son etiquetas cualitativas, no cantidades medibles.'
      ],
      guidedPractice: {
        question: 'En una planilla escolar (ejemplo ficticio) se anota el número de línea de colectivo que toma cada estudiante (Línea 25, Línea 40, Línea 60) y la cantidad de cuadernos que trajo en la mochila (2, 3, 4). ¿Cuál de las dos características representa una cantidad matemática y cuál una etiqueta?',
        steps: [
          'Preguntate: ¿tiene sentido sumar o repartir los números de línea de colectivo? No: «25» es el nombre de un recorrido.',
          'En cambio, 2, 3 o 4 cuadernos cuentan cuántos útiles hay: se pueden sumar y comparar como cantidades.'
        ],
        answer: 'La cantidad de cuadernos es una variable cuantitativa (expresa cantidad), mientras que la línea de colectivo es cualitativa nominal (el número actúa como etiqueta identificadora).'
      },
      independentPracticeIds: ['G1-01', 'N1-01', 'N1-04']
    },
    {
      id: 'L02',
      number: 2,
      topic: 'variables',
      title: 'Cualitativas (nominal y ordinal) y cuantitativas (discreta y continua)',
      objective: 'Clasificar variables en cualitativas nominales, cualitativas ordinales, cuantitativas discretas y cuantitativas continuas justificando por el significado de la magnitud.',
      prerequisites: 'Distinguir palabras/categorías de cantidades y reconocer cuándo existe una jerarquía u orden.',
      plainExplanation: [
        'Las variables cualitativas describen cualidades, categorías o atributos. Si las categorías no tienen una jerarquía natural (como color de remera o medio de transporte), es cualitativa nominal. Si las categorías siguen una escala ordenada de menor a mayor nivel (como «Insuficiente, Regular, Bueno, Sobresaliente» o talles «S, M, L, XL»), es cualitativa ordinal.',
        'Las variables cuantitativas miden o cuentan cantidades numéricas con las que tiene sentido operar. Es cuantitativa discreta cuando toma valores separados o enumerables, típicamente procedentes de un conteo (como 0, 1, 2, 3 hermanos o materias).',
        'Es cuantitativa continua cuando describe una magnitud física (longitud, tiempo, masa, volumen, temperatura) que puede tomar valores intermedios entre dos valores cualesquiera. Importante: aunque anotemos «2 horas» o «165 cm» redondeados sin coma, el tiempo y la estatura siguen siendo magnitudes continuas; la precisión del instrumento o del registro no cambia la naturaleza de la magnitud.'
      ],
      smallExample: {
        context: 'Cuatro registros ficticios de una jornada deportiva escolar:',
        data: '1) Deporte elegido (Fútbol, Vóley, Básquet). 2) Puesto en el torneo (1.º, 2.º, 3.º). 3) Goles convertidos en un partido (0, 1, 2, 3...). 4) Tiempo en correr 100 metros llanos (13,8 s; 14,25 s...).',
        steps: [
          'Deporte elegido: son categorías sin orden jerárquico → Cualitativa nominal.',
          'Puesto en el torneo: indica un orden de llegada (1.º precede a 2.º y a 3.º) → Cualitativa ordinal.',
          'Goles convertidos: proviene de contar goles enteros aislados → Cuantitativa discreta.',
          'Tiempo en 100 metros: el tiempo es una magnitud continua que admite valores intermedios según el cronómetro → Cuantitativa continua.'
        ],
        interpretation: 'No clasifiques diciendo solo «tiene coma = continua, no tiene coma = discreta». Mirá siempre si estás contando unidades separadas o midiendo una magnitud continua.'
      },
      notationNote: 'En el ejercicio del talle de calzado (36, 37, 38, 39), el material escolar modela esa escala graduada como cuantitativa discreta porque avanza en pasos fijos, mientras que la longitud del pie en centímetros (por ejemplo, 24,3 cm) es cuantitativa continua.',
      commonErrors: [
        'Decir que el tiempo es discreto cuando alguien responde en horas enteras («estudié 2 horas»): la magnitud tiempo sigue siendo continua aunque se redondee al anotar.',
        'Olvidar el orden en variables cualitativas ordinales como el estado de un equipo («Excelente, Bueno, Regular, Defectuoso»).'
      ],
      guidedPractice: {
        question: 'Clasificá estas dos variables y explicá por qué: a) Calificación de conducta («Excelente, Muy Buena, Buena, Regular»); b) Volumen de agua consumido por día en litros (1,5 L; 2,0 L; 2,25 L).',
        steps: [
          'En (a), las respuestas son categorías de cualidad pero ordenadas por jerarquía.',
          'En (b), el volumen de líquido es una magnitud física que puede tomar cualquier valor intermedio en un intervalo.'
        ],
        answer: 'a) Cualitativa ordinal (categorías con orden jerárquico). b) Cuantitativa continua (magnitud medible que admite valores intermedios).'
      },
      independentPracticeIds: ['G1-02', 'G1-03', 'G1-06', 'G1-07']
    },
    {
      id: 'L03',
      number: 3,
      topic: 'frecuencias',
      title: 'Conteo de frecuencias absolutas y control del total',
      objective: 'Organizar una lista de datos desordenados en una tabla de frecuencias absolutas y comprobar que la suma coincida con el total de observaciones.',
      prerequisites: 'Conteo ordenado y suma de números naturales.',
      plainExplanation: [
        'Cuando tenemos una lista de datos sueltos, leerlos uno por uno es incómodo y es fácil perderse. Una tabla de frecuencias resume la información mostrando cada valor distinto en una fila y cuántas veces aparece.',
        'La frecuencia absoluta se representa con la letra f minúscula. Para construirla sin errores, identificá primero todos los valores distintos, ordenalos si tienen orden natural y contá cuántas veces aparece cada uno en la lista original.',
        'Regla de oro para comprobar tu trabajo: sumá todos los números de la columna de frecuencias absolutas (f). Esa suma tiene que coincidir exactamente con la cantidad total de datos recolectados (n). Si no coincide, te salteaste un dato o contaste alguno dos veces.'
      ],
      smallExample: {
        context: 'Ejemplo ficticio de las fichas: libros leídos en el año por 10 estudiantes.',
        data: 'Lista de respuestas: 0, 1, 1, 2, 0, 1, 3, 2, 1, 4.',
        steps: [
          'Identificamos los valores distintos de libros leídos (x): 0, 1, 2, 3 y 4.',
          'Contamos cada uno en la lista: el 0 aparece 2 veces (f = 2); el 1 aparece 4 veces (f = 4); el 2 aparece 2 veces (f = 2); el 3 aparece 1 vez (f = 1); el 4 aparece 1 vez (f = 1).',
          'Comprobamos la suma de frecuencias: 2 + 4 + 2 + 1 + 1 = 10. Coincide con los n = 10 estudiantes.'
        ],
        interpretation: 'En la guía principal también vas a ver otro ejemplo distinto de 20 estudiantes (frecuencias 3, 8, 6, 2, 1 que suman 20). Mirá siempre cuál es el total n de tu problema.'
      },
      notationNote: 'La igualdad Σf = n se lee «la suma de todas las frecuencias absolutas es igual al total de datos n».',
      commonErrors: [
        'Sumar los valores de la variable (0 + 1 + 2 + 3 + 4 = 10) en lugar de sumar las frecuencias absolutas.',
        'Olvidar contar los ceros: el valor 0 es un dato válido (por ejemplo, «0 faltas» o «0 libros leídos») y su frecuencia debe contarse.'
      ],
      guidedPractice: {
        question: 'En un curso de n = 30 estudiantes se consultó cuántos hermanos tienen: 6 respondieron «0 hermanos», 12 respondieron «1 hermano», falta anotar cuántos tienen «2 hermanos» y 3 respondieron «3 hermanos». ¿Cuál es la frecuencia absoluta faltante?',
        steps: [
          'Sabemos que todas las frecuencias absolutas deben sumar n = 30.',
          'Sumamos las frecuencias conocidas: 6 + 12 + 3 = 21 estudiantes.',
          'Restamos al total: 30 − 21 = 9 estudiantes.'
        ],
        answer: 'La frecuencia absoluta de «2 hermanos» es f = 9 (porque 6 + 12 + 9 + 3 = 30).'
      },
      independentPracticeIds: ['G2-01', 'G2-06', 'N2-01', 'N2-03']
    },
    {
      id: 'L04',
      number: 4,
      topic: 'frecuencias',
      title: 'Frecuencia relativa, porcentaje y redondeo',
      objective: 'Calcular e interpretar la frecuencia relativa (fr) y porcentual (%), verificando sus sumas totales y explicando el efecto del redondeo.',
      prerequisites: 'División con decimales, multiplicación por 100 y redondeo a dos cifras decimales.',
      plainExplanation: [
        'Saber que 7 estudiantes sacaron un 8 es útil, pero no significa lo mismo 7 de 10 estudiantes que 7 de 50. Para comparar qué parte del grupo representa una fila, calculamos la frecuencia relativa (fr): dividimos la frecuencia absoluta (f) por el total de datos (n).',
        'Para expresar esa misma proporción como porcentaje (%), multiplicamos la frecuencia relativa por 100 (o calculamos f × 100 ÷ n). Así sabemos cuántos serían cada 100 observaciones.',
        'Antes de redondear, todas las frecuencias relativas suman exactamente 1 y todos los porcentajes suman 100 %. Cuando una división da periódica (como 5 ÷ 15 = 0,333...), redondeamos al mostrar (por ejemplo, ≈ 0,33 o 33,33 %) y aclaramos si la suma redondeada da 0,99 o 1,01.'
      ],
      smallExample: {
        context: 'Ejemplo de la guía: libros leídos por n = 20 estudiantes (frecuencias: 3, 8, 6, 2, 1).',
        data: 'Cálculo para la fila «1 libro leído», donde f = 8:',
        steps: [
          'Frecuencia relativa: dividimos la frecuencia entre el total → fr = 8 ÷ 20 = 0,40.',
          'Frecuencia porcentual: multiplicamos por 100 → % = 0,40 × 100 = 40 %.',
          'Comprobación de toda la tabla: 0,15 + 0,40 + 0,30 + 0,10 + 0,05 = 1,00 y 15 % + 40 % + 30 % + 10 % + 5 % = 100 %.'
        ],
        interpretation: 'Que fr sea 0,40 y el porcentaje sea 40 % dice exactamente lo mismo: dos quintas partes (el 40 %) del grupo leyeron 1 libro.'
      },
      notationNote: 'Escribí «=» cuando el decimal es exacto (8 ÷ 20 = 0,4) y «≈» cuando redondeás (5 ÷ 15 ≈ 0,33).',
      commonErrors: [
        'Dividir al revés (n ÷ f en vez de f ÷ n): una frecuencia relativa nunca puede ser mayor que 1.',
        'Escribir «0,40 %» cuando querías poner «40 %», o escribir «40» en la casilla de frecuencia relativa fr.'
      ],
      guidedPractice: {
        question: 'En una prueba de 25 estudiantes, el valor «nota 8» aparece 7 veces. Calculá su frecuencia relativa y su porcentaje.',
        steps: [
          'Identificamos f = 7 y el total n = 25.',
          'Dividimos: fr = 7 ÷ 25 = 0,28.',
          'Multiplicamos por 100: 0,28 × 100 = 28 %.'
        ],
        answer: 'La frecuencia relativa es fr = 0,28 y representa el 28 % del curso.'
      },
      independentPracticeIds: ['G2-02', 'G2-05', 'N2-02', 'N2-05']
    },
    {
      id: 'L05',
      number: 5,
      topic: 'frecuencias',
      title: 'Frecuencia acumulada y preguntas «hasta», «exactamente», «más de» y «al menos»',
      objective: 'Construir la columna de frecuencia acumulada (F) cuando existe un orden significativo y responder preguntas de acumulación sin confundirlas con un valor puntual.',
      prerequisites: 'Ordenar valores de menor a mayor y distinguir «igual a», «menor o igual que» y «mayor que».',
      plainExplanation: [
        'La frecuencia acumulada (F mayúscula) se obtiene sumando las frecuencias absolutas desde el primer valor ordenado hasta la fila actual inclusive. Su última fila siempre coincide con el total n.',
        '¿Cuándo tiene sentido usarla? Solo cuando los valores tienen un orden significativo (variables cuantitativas o cualitativas ordinales). Si la variable es nominal (como medio de transporte o club preferido), el orden de las filas es arbitrario y no tiene sentido interpretar «acumulado hasta moto».',
        'Prestá mucha atención a las palabras de la pregunta: «exactamente 2 faltas» pide la frecuencia simple f de la fila 2; «2 faltas o menos» (o «hasta 2 faltas» / «a lo sumo 2») pide la frecuencia acumulada F hasta 2 inclusive; «más de 2 faltas» pide solo los valores estrictamente mayores (3 o más); «al menos 2 faltas» incluye el 2 y los mayores (2, 3...).'
      ],
      smallExample: {
        context: 'Faltas registradas en un mes por n = 15 alumnos (Ejercicio 2.1):',
        data: '0 faltas (f = 5), 1 falta (f = 6), 2 faltas (f = 3), 3 faltas (f = 1).',
        steps: [
          'Fila 0 faltas: F₁ = 5.',
          'Fila 1 falta: F₂ = 5 + 6 = 11 (alumnos con 0 o 1 falta).',
          'Fila 2 faltas: F₃ = 11 + 3 = 14 (alumnos con 0, 1 o 2 faltas).',
          'Fila 3 faltas: F₄ = 14 + 1 = 15 (coincide con n = 15).'
        ],
        interpretation: '¿Cuántos tuvieron exactamente 2 faltas? f₃ = 3 alumnos. ¿Cuántos tuvieron 2 o menos faltas? F₃ = 14 alumnos (14 ÷ 15 × 100 ≈ 93,33 %).'
      },
      notationNote: 'Fᵢ suma las frecuencias desde la primera fila hasta la fila i: F₃ = f₁ + f₂ + f₃.',
      commonErrors: [
        'Responder con f (una sola fila) cuando la pregunta dice «2 o menos» o «hasta 2».',
        'Incluir el 2 cuando la pregunta pide «más de 2» (que significa estrictamente mayor que 2).'
      ],
      guidedPractice: {
        question: 'En una evaluación de 50 alumnos, los niveles ordenados de rendimiento fueron: Insuficiente (5), Regular (10), Bueno (20) y Sobresaliente (15). ¿Qué porcentaje obtuvo «Bueno o superior»?',
        steps: [
          '«Bueno o superior» abarca las categorías «Bueno» (20) y «Sobresaliente» (15).',
          'Sumamos ambas frecuencias: 20 + 15 = 35 alumnos de los 50.',
          'Pasamos a porcentaje: (35 ÷ 50) × 100 = 70 %.'
        ],
        answer: '35 alumnos, que representan el 70 % del curso.'
      },
      independentPracticeIds: ['G2-03', 'G2-04', 'G2-07', 'N2-06']
    },
    {
      id: 'L06',
      number: 6,
      topic: 'barras',
      title: 'Construcción y lectura de gráficos de barras (y cómo detectar errores)',
      objective: 'Elegir una escala uniforme en hoja cuadriculada, rotular ejes y título correctamente, e identificar errores visuales frecuentes.',
      prerequisites: 'Ubicación de números en una recta graduada y proporcionalidad simple.',
      plainExplanation: [
        'Un gráfico de barras representa cada categoría o valor discreto mediante un rectángulo cuya altura es proporcional a su valor o frecuencia. Para que sea claro y honesto, el eje vertical (Eje Y) debe arrancar en 0 y avanzar con una escala uniforme (por ejemplo, de 1 en 1, de 2 en 2 o de 4 en 4 en todos los cuadritos por igual).',
        'En la hoja cuadriculada, una regla práctica muy prolija es usar 2 cuadritos de ancho para cada barra y dejar 1 cuadrito libre de separación entre barra y barra. No existe una única escala obligatoria para el eje Y: cualquier escala uniforme que entre cómoda en tu hoja es matemáticamente válida.',
        'Fijate siempre qué magnitud muestra el eje vertical: en una tabla de frecuencias, el eje Y representa cantidad de estudiantes o porcentaje; pero en un gráfico de puntos anotados en cada partido (como el Ejercicio 3.4), el eje Y representa puntos anotados, no cantidad de partidos.'
      ],
      smallExample: {
        context: 'Frecuencia máxima f = 25 y una hoja cuadriculada con 15 cuadritos de altura disponible (Ejercicio 3.7).',
        data: 'Queremos representar barras de frecuencias 15, 20 y 25 sin salirnos de los 15 cuadritos.',
        steps: [
          'Si usáramos 1 unidad por cuadrito, necesitaríamos 25 cuadritos (no entra en los 15 disponibles).',
          'Elegimos la escala uniforme: 1 cuadrito = 2 unidades. Graduamos el eje Y de 2 en 2: 0, 2, 4, 6, ..., 24, 26 (ocupa 13 cuadritos).',
          'Calculamos la altura de cada barra dividiendo por 2: el valor 15 sube 7,5 cuadritos (mitad entre 7 y 8); el valor 20 sube 10 cuadritos; el valor 25 sube 12,5 cuadritos (mitad entre 12 y 13).'
        ],
        interpretation: 'Tampoco es correcto unir los techos de barras de categorías nominales con una línea quebrada, porque sugeriría un orden o transición continua inexistente entre palabras.'
      },
      notationNote: 'Altura en cuadritos = valor a representar ÷ unidades por cuadrito.',
      commonErrors: [
        'Cambiar el paso del eje Y usando solo los números de la tabla (por ejemplo, poner a igual distancia 0, 1, 3, 6, 12): eso deforma las alturas.',
        'Pegar todas las barras sin separación o empezar el eje vertical en un número distinto de 0 exagerando diferencias.'
      ],
      guidedPractice: {
        question: 'En un torneo de básquet, 2.º año anotó en 5 partidos: 12, 20, 16, 24 y 8 puntos. Si elegís 1 cuadrito = 4 puntos en el eje Y, ¿cuántos cuadritos de altura tendrá cada barra y cómo rotulás el eje vertical?',
        steps: [
          'Dividimos cada puntaje entre 4 puntos por cuadrito: 12 ÷ 4 = 3; 20 ÷ 4 = 5; 16 ÷ 4 = 4; 24 ÷ 4 = 6; 8 ÷ 4 = 2 cuadritos.',
          'El eje Y muestra los puntos convertidos en cada partido.'
        ],
        answer: 'Las barras miden 3, 5, 4, 6 y 2 cuadritos de altura. El eje vertical se rotula «Puntos anotados» (graduado 0, 4, 8, 12, 16, 20, 24).'
      },
      independentPracticeIds: ['G3-01', 'G3-03', 'G3-04', 'G3-07']
    },
    {
      id: 'L07',
      number: 7,
      topic: 'medidas',
      title: 'Media aritmética (promedio) desde lista y desde tabla',
      objective: 'Calcular e interpretar la media aritmética como reparto equitativo, tanto con datos sueltos como usando productos en una tabla de frecuencias.',
      prerequisites: 'Suma, multiplicación y división con paréntesis.',
      plainExplanation: [
        'La media aritmética es el promedio que usamos habitualmente: se obtiene sumando todos los datos y dividiendo esa suma por la cantidad total de observaciones. Representa qué valor le tocaría a cada uno si el total se repartiera en partes iguales.',
        'Empecemos sin símbolos raros: si tres datos son 2, 3 y 4, la suma es 2 + 3 + 4 = 9 y como hay 3 datos hacemos (2 + 3 + 4) ÷ 3 = 3. Usá paréntesis en la calculadora si escribís toda la cuenta en línea para que divida toda la suma y no solo el último número.',
        'Cuando los datos están en una tabla de frecuencias, en lugar de sumar «6 + 6 + 7 + 7 + 7...» uno por uno, multiplicamos cada valor por la cantidad de veces que se repite (x · f), sumamos todos esos productos y dividimos por el total de datos n (¡nunca por la cantidad de filas!).'
      ],
      smallExample: {
        context: 'Ejemplo integrador de la guía: libros leídos por n = 20 estudiantes.',
        data: 'Valores x = 0, 1, 2, 3, 4 con frecuencias f = 3, 8, 6, 2, 1.',
        steps: [
          'Multiplicamos cada valor por su frecuencia: 0×3 = 0; 1×8 = 8; 2×6 = 12; 3×2 = 6; 4×1 = 4.',
          'Sumamos los productos (total de libros leídos por los 20 estudiantes): 0 + 8 + 12 + 6 + 4 = 30 libros.',
          'Dividimos entre los n = 20 estudiantes (no entre las 5 filas): 30 ÷ 20 = 1,5 libros.'
        ],
        interpretation: 'Que la media sea 1,5 libros no significa que alguien haya leído un libro y medio: es el promedio por estudiante si los 30 libros se repartieran en partes iguales entre los 20 alumnos.'
      },
      notationNote: 'x̄ = (suma de todos los datos) ÷ n. En tabla: x̄ = Σ(x · f) ÷ n.',
      commonErrors: [
        'Dividir por la cantidad de valores distintos (5 filas) en lugar de dividir por el total de estudiantes (n = 20).',
        'Sumar solo los valores distintos (0 + 1 + 2 + 3 + 4) olvidando multiplicar cada uno por cuántas veces se repite.'
      ],
      guidedPractice: {
        question: 'Un estudiante obtuvo 6, 7, 8 y 5 en cuatro trabajos prácticos. ¿Qué nota necesita en el quinto trabajo para que su promedio de los 5 trabajos sea exactamente 7?',
        steps: [
          'Para que 5 notas tengan promedio 7, la suma total de las 5 notas debe ser 5 × 7 = 35 puntos.',
          'Sumamos las 4 notas que ya tiene: 6 + 7 + 8 + 5 = 26 puntos.',
          'Calculamos cuánto falta para llegar a 35: 35 − 26 = 9.'
        ],
        answer: 'Necesita obtener un 9 en el quinto trabajo práctico (porque (26 + 9) ÷ 5 = 35 ÷ 5 = 7).'
      },
      independentPracticeIds: ['G4-01', 'G4-05', 'G4-06', 'N4-02']
    },
    {
      id: 'L08',
      number: 8,
      topic: 'medidas',
      title: 'Mediana con cantidad impar y par de datos: ordenar y distinguir posición de valor',
      objective: 'Hallar la mediana ordenando previamente los datos, diferenciando la posición central del valor central tanto para n impar como para n par.',
      prerequisites: 'Ordenar números de menor a mayor y promediar dos números.',
      plainExplanation: [
        'La mediana (Me) es el valor que ocupa el centro cuando los datos están ordenados de menor a mayor (o de mayor a menor). El Paso 1 obligatorio es ordenar todos los datos, incluyendo los repetidos. Si buscás el centro en una lista desordenada, el resultado no es la mediana.',
        'Si la cantidad de datos (n) es impar, hay un único lugar central en la posición (n + 1) ÷ 2. Por ejemplo, con 5 datos ordenados (0, 1, 1, 2, 6), la posición central es (5 + 1) ÷ 2 = 3 (el tercer lugar), y el valor en ese tercer lugar es 1. ¡Cuidado: la posición es 3, pero la mediana es 1!',
        'Si la cantidad de datos (n) es par, la fórmula (n + 1) ÷ 2 termina en «,5» e indica que el centro queda entre dos posiciones centrales: n ÷ 2 y (n ÷ 2) + 1. En datos cuantitativos, la mediana es el promedio (semisuma) de esos dos valores centrales.'
      ],
      smallExample: {
        context: 'Estaturas de n = 8 jugadores de básquet (Ejercicio 4.4):',
        data: 'Datos ya ordenados en cm: 162, 165, 168, 170, 172, 175, 180, 188.',
        steps: [
          'Como n = 8 es par, calculamos (8 + 1) ÷ 2 = 4,5 → buscamos las posiciones 4 y 5.',
          'El dato en la posición 4 es 170 cm y el dato en la posición 5 es 172 cm.',
          'Promediamos ambos valores centrales: (170 + 172) ÷ 2 = 342 ÷ 2 = 171 cm.'
        ],
        interpretation: 'La mediana (171 cm) deja al menos la mitad de las observaciones a cada lado (incluyendo las iguales cuando hay repeticiones).'
      },
      notationNote: 'Precisión matemática: cuando hay valores repetidos o cantidad impar, no prometas que exactamente el 50 % es estrictamente menor; decí que al menos la mitad de los datos es menor o igual a la mediana y al menos la mitad es mayor o igual.',
      commonErrors: [
        'Tomar el número del medio sin ordenar antes la lista de datos.',
        'Responder con el número de la posición (por ejemplo, decir que la mediana es 4,5 o 6 en lugar de buscar qué dato ocupa ese lugar).'
      ],
      guidedPractice: {
        question: 'Encontrá la mediana de estos 6 datos desordenados: 4, 0, 8, 1, 3, 2.',
        steps: [
          'Primero ordenamos de menor a mayor: 0, 1, 2, 3, 4, 8.',
          'Como n = 6 (par), las posiciones centrales son la 3.ª y la 4.ª: los valores son 2 y 3.',
          'Promediamos ambos: (2 + 3) ÷ 2 = 2,5.'
        ],
        answer: 'La mediana es 2,5 (observá que en una cantidad par de datos, la mediana puede ser un valor intermedio que no figuraba en la lista original).'
      },
      independentPracticeIds: ['G4-04', 'N4-03', 'N4-04', 'N4-05']
    },
    {
      id: 'L09',
      number: 9,
      topic: 'medidas',
      title: 'Moda numérica y categórica: empates y series sin moda',
      objective: 'Identificar la moda en variables cuantitativas y cualitativas, distinguiendo series unimodales, bimodales y amodales.',
      prerequisites: 'Conteo de repeticiones (frecuencia absoluta).',
      plainExplanation: [
        'La moda (Mo) es el valor o la categoría que aparece con mayor frecuencia absoluta (el dato que más se repite). Es la única medida de tendencia central que se puede aplicar a cualquier tipo de variable, incluidas las cualitativas nominales (como deporte o marca de zapatillas).',
        'Si un solo valor tiene la frecuencia máxima, la distribución es unimodal. Si dos valores distintos empatan en esa frecuencia máxima (y superan a otros), es bimodal y se nombran ambos valores.',
        '¿Qué pasa si todos los valores aparecen la misma cantidad de veces (por ejemplo, cada dato aparece 1 sola vez en 1, 2, 3, 4)? Ningún valor se destaca sobre los demás: en el criterio escolar habitual decimos que la serie no tiene moda o es amodal.'
      ],
      smallExample: {
        context: 'Tres listas breves para comparar:',
        data: 'Lista A: Nike, Adidas, Nike, Puma, Nike. | Lista B: 1, 1, 2, 2, 3. | Lista C: 10, 12, 15, 18.',
        steps: [
          'En la Lista A, «Nike» aparece 3 veces (más que cualquiera): es unimodal y Mo = Nike.',
          'En la Lista B, el 1 y el 2 aparecen 2 veces cada uno (y el 3 una vez): es bimodal con modas 1 y 2.',
          'En la Lista C, todos aparecen 1 vez: ninguno se repite más que otro → es amodal.'
        ],
        interpretation: 'Recordá siempre: la moda es el dato o categoría (por ejemplo, «Nike» o «8 aciertos»), nunca la frecuencia máxima («3 veces» o «4 alumnos»).'
      },
      notationNote: 'Si en una tabla la mayor frecuencia absoluta es f = 8 y corresponde a x = 1 libro, entonces Mo = 1 libro (y su frecuencia es 8).',
      commonErrors: [
        'Escribir como moda la frecuencia más alta en vez del valor de la variable que tiene esa frecuencia.',
        'Intentar calcular media o mediana con nombres de marcas o deportes en lugar de usar la moda.'
      ],
      guidedPractice: {
        question: 'En la tabla de horas de estudio de 20 alumnos (valores 0, 1, 2, 3, 4 horas), las frecuencias absolutas son: f(0)=3, f(1)=7, f(2)=7, f(3)=2, f(4)=1. ¿Cuál es la moda y cómo se clasifica la serie?',
        steps: [
          'Buscamos la mayor frecuencia absoluta en la columna f: el máximo es 7.',
          'Miramos a qué valores de horas corresponde f = 7: tanto a «1 hora» como a «2 horas».'
        ],
        answer: 'Hay dos modas empatadas: 1 hora y 2 horas. La distribución es bimodal.'
      },
      independentPracticeIds: ['G4-02', 'N4-06', 'N4-07', 'N4-08']
    },
    {
      id: 'L10',
      number: 10,
      topic: 'medidas',
      title: '¿Qué medida conviene elegir? Efecto de valores extremos',
      objective: 'Comparar media, mediana y moda frente a datos extremos o atípicos y justificar cuál resume mejor un conjunto según la pregunta del problema.',
      prerequisites: 'Cálculo de media, mediana y moda.',
      plainExplanation: [
        'Que una medida se pueda calcular con una cuenta no garantiza que sea la más informativa para describir al grupo. Antes de elegir, preguntate qué querés comunicar y cómo están distribuidos los datos.',
        'La media usa todos los valores en la suma, por lo que es ideal cuando buscamos repartir un total equitativamente y los datos son parejos. Sin embargo, es muy sensible a los valores extremos (muy altos o muy bajos respecto del resto): un solo dato lejano puede arrastrar el promedio lejos de la mayoría.',
        'La mediana depende del orden central y por eso es mucho más resistente ante valores extremos. Ojo: «más resistente» no significa que jamás pueda cambiar; al quitar o agregar un dato extremo, la mediana puede variar un poco (como pasa en el Ejercicio 4.7 de tardanzas, donde pasa de 1 a 0,5), pero cambia mucho menos que la media.'
      ],
      smallExample: {
        context: 'Tardanzas de 11 alumnos en un trimestre (Ejercicio 4.7):',
        data: 'Con los 11 datos: 0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 11. | Sin el extremo (10 datos): 0, 0, 0, 0, 0, 1, 1, 2, 2, 3.',
        steps: [
          'Con los 11 datos: suma = 20 → media = 20 ÷ 11 ≈ 1,82 tardanzas. El 6.º dato ordenado es Me = 1 tardanza.',
          'Al retirar el extremo (11 tardanzas), quedan 10 datos: suma = 9 → media = 9 ÷ 10 = 0,90 tardanzas (bajó a menos de la mitad).',
          'En los 10 datos restantes, los centrales (posiciones 5 y 6) son 0 y 1 → mediana Me = (0 + 1) ÷ 2 = 0,5 tardanzas.'
        ],
        interpretation: 'Ambas medidas cambiaron al quitar el valor extremo 11, pero la media cayó fuertemente (de 1,82 a 0,90) mientras que la mediana varió levemente (de 1 a 0,5) y refleja mejor que la mayoría tuvo entre 0 y 1 tardanza.'
      },
      notationNote: 'Para variables cualitativas nominales usá únicamente la moda; para datos numéricos con valores extremos muy marcados, acompañá o priorizá la mediana frente a la media.',
      commonErrors: [
        'Afirmar que la mediana «nunca cambia» cuando se quita o agrega un dato extremo.',
        'Usar solo la media de sueldos cuando un único sueldo gerencial muy alto distorsiona el promedio de los trabajadores.'
      ],
      guidedPractice: {
        question: 'En un comercio (ejemplo ficticio), 4 empleados cobran $300.000 cada uno y el gerente cobra $2.800.000. La media da $800.000 y la mediana da $300.000. ¿Cuál representa mejor el sueldo típico de los trabajadores y por qué?',
        steps: [
          'Observamos que 4 de las 5 personas ganan $300.000 y nadie gana cerca de $800.000.',
          'El promedio ($800.000) quedó traccionado hacia arriba por el sueldo extremo del gerente ($2.800.000).'
        ],
        answer: 'La mediana ($300.000) representa mucho mejor el salario típico del comercio, porque no se distorsiona por el valor extremo.'
      },
      independentPracticeIds: ['G4-03', 'G4-07', 'N4-09', 'N4-12']
    }
  ];

  const FICHAS_CATALOG = [
    {
      id: 'ficha-01',
      number: 1,
      topic: 'variables',
      title: '¿Qué tipo de variable es?',
      subtitle: 'La variable es la característica que estudiás.',
      fileName: 'ficha-01-variables.png',
      originalName: '01_Variables.png',
      summary: 'Diferencia cualitativa nominal y ordinal de cuantitativa discreta y continua, y advierte sobre etiquetas numéricas.',
      htmlSections: [
        { heading: '1. Cualitativa nominal', text: 'Son categorías sin orden natural. Ejemplo: deporte preferido → fútbol, vóley, natación.' },
        { heading: '2. Cualitativa ordinal', text: 'Son categorías con un orden. Ejemplo: satisfacción → baja, media, alta.' },
        { heading: '3. Cuantitativa discreta', text: 'Tiene valores separados. En los conteos se usan enteros. Ejemplo: cantidad de hermanos → 0, 1, 2…' },
        { heading: '4. Cuantitativa continua', text: 'Describe una magnitud que puede tomar valores intermedios. Ejemplo: estatura → 1,60 m; 1,605 m…' },
        { heading: 'Pensá qué significa el dato', text: 'Un número de camiseta es una etiqueta, no una cantidad. Ver números no alcanza para clasificar.', highlight: true }
      ]
    },
    {
      id: 'ficha-02',
      number: 2,
      topic: 'frecuencias',
      title: 'Frecuencia absoluta',
      subtitle: 'Frecuencia significa cuántas veces aparece un valor.',
      fileName: 'ficha-02-frecuencia-absoluta.png',
      originalName: '02_Frecuencia_absoluta.png',
      summary: 'Muestra cómo contar repeticiones en un ejemplo ficticio de 10 estudiantes y comprobar la suma total.',
      htmlSections: [
        { heading: 'Nuestros datos: libros leídos (ejemplo de 10 estudiantes)', text: 'Diez estudiantes respondieron: 0, 1, 1, 2, 0, 1, 3, 2, 1, 4.' },
        { heading: 'Contá las repeticiones', text: 'El valor 1 aparece cuatro veces. Entonces, 4 estudiantes leyeron 1 libro.' },
        {
          heading: 'Tabla de frecuencia absoluta',
          table: {
            headers: ['Libros (x)', 'Veces (f)'],
            rows: [['0', '2'], ['1', '4'], ['2', '2'], ['3', '1'], ['4', '1'], ['Total', '10']]
          }
        },
        { heading: 'Comprobá que no falte nadie', text: 'La suma de las frecuencias debe dar la cantidad de estudiantes: 2 + 4 + 2 + 1 + 1 = 10.', highlight: true }
      ]
    },
    {
      id: 'ficha-03',
      number: 3,
      topic: 'frecuencias',
      title: 'Frecuencia relativa y %',
      subtitle: 'Es la misma información expresada de dos formas.',
      fileName: 'ficha-03-frecuencia-relativa-porcentaje.png',
      originalName: '03_Frecuencia_relativa_y_porcentaje.png',
      summary: 'Explica el paso de frecuencia absoluta a proporción (fr = f ÷ n) y a porcentaje (fr × 100).',
      htmlSections: [
        { heading: '1. Calculá la parte del total', text: 'De 10 estudiantes, 4 leyeron 1 libro. Dividí la frecuencia entre el total: 4 ÷ 10 = 0,4.' },
        { heading: '2. Pasá esa parte a porcentaje', text: 'Multiplicá la frecuencia relativa por 100: 0,4 × 100 = 40 %.' },
        { heading: '3. Interpretá el resultado', text: 'El 40 % de estos estudiantes leyó 1 libro.' },
        {
          heading: 'Tabla con fr y %',
          table: {
            headers: ['Libros', 'f', 'fr', '%'],
            rows: [
              ['0', '2', '0,20', '20 %'],
              ['1', '4', '0,40', '40 %'],
              ['2', '2', '0,20', '20 %'],
              ['3', '1', '0,10', '10 %'],
              ['4', '1', '0,10', '10 %'],
              ['Total', '10', '1,00', '100 %']
            ]
          }
        },
        { heading: 'Control rápido', text: 'Las relativas suman 1 y los porcentajes 100 %. Al redondear, puede haber pequeñas diferencias.', highlight: true }
      ]
    },
    {
      id: 'ficha-04',
      number: 4,
      topic: 'frecuencias',
      title: 'Frecuencia acumulada',
      subtitle: 'Sirve para responder «¿cuántos hasta este valor?».',
      fileName: 'ficha-04-frecuencia-acumulada.png',
      originalName: '04_Frecuencia_acumulada.png',
      summary: 'Muestra cómo sumar frecuencias fila a fila y diferencia «exactamente 2» de «hasta 2 inclusive».',
      htmlSections: [
        { heading: '1. Ordená los valores', text: 'Para libros leídos: 0, 1, 2, 3, 4. La acumulada se escribe con F mayúscula.' },
        { heading: '2. Sumá de a poco', text: 'Para llegar hasta 2 libros, incluí a quienes leyeron 0, 1 o 2 libros: 2 + 4 + 2 = 8 estudiantes.' },
        {
          heading: 'Tabla acumulada',
          table: {
            headers: ['Libros (x)', 'Veces (f)', 'Acumulada (F)'],
            rows: [
              ['0', '2', '2'],
              ['1', '4', '6'],
              ['2', '2', '8'],
              ['3', '1', '9'],
              ['4', '1', '10'],
              ['Total', '10', '—']
            ]
          }
        },
        { heading: 'Leé la diferencia', text: 'Exactamente 2 libros: 2 estudiantes. Hasta 2 libros, inclusive: 8 estudiantes. La última acumulada es el total: 10.', highlight: true }
      ]
    },
    {
      id: 'ficha-05',
      number: 5,
      topic: 'barras',
      title: 'Construí un gráfico de barras',
      subtitle: 'Usá la tabla: libros 0, 1, 2, 3, 4; frecuencias 2, 4, 2, 1, 1.',
      fileName: 'ficha-05-grafico-de-barras.png',
      originalName: '05_Grafico_de_barras.png',
      summary: 'Guía visual para preparar ejes desde 0, escala uniforme, ancho constante y separación entre barras.',
      htmlSections: [
        { heading: '1. Prepará los ejes', text: 'Horizontal: libros leídos. Vertical: cantidad de estudiantes. Empezá en 0 y mantené la misma escala.' },
        { heading: '2. Dibujá y rotulá', text: 'Barras del mismo ancho y separación uniforme. Agregá título («Libros leídos por 10 estudiantes») y nombres de los ejes.' },
        { heading: 'Alturas representadas', text: '0 libros → barra hasta 2; 1 libro → barra hasta 4; 2 libros → barra hasta 2; 3 libros → barra hasta 1; 4 libros → barra hasta 1.' },
        { heading: 'Antes de terminar', text: '¿Cada barra coincide con su frecuencia? ¿La escala avanza de 1 en 1 en este ejemplo? ¿Se leen el título y los ejes?', highlight: true }
      ]
    },
    {
      id: 'ficha-06',
      number: 6,
      topic: 'medidas',
      title: 'Media = promedio',
      subtitle: 'Repartí el total en partes iguales entre los datos.',
      fileName: 'ficha-06-media.png',
      originalName: '06_Media.png',
      summary: 'Explica la suma de todos los datos dividida entre la cantidad de observaciones y el cálculo desde una tabla.',
      htmlSections: [
        { heading: '1. Sumá todos los datos', text: 'Libros leídos por 5 estudiantes: 0, 1, 1, 2, 6. Suma: 0 + 1 + 1 + 2 + 6 = 10.' },
        { heading: '2. Contá cuántos datos hay', text: 'Hay 5 estudiantes. Dividí el total de libros entre 5, no entre los valores distintos: 10 ÷ 5 = 2 libros.' },
        { heading: '3. Explicá qué significa', text: 'El promedio es 2 libros por estudiante. Es lo que tocaría a cada uno si repartieras los 10 libros en partes iguales.' },
        { heading: 'Si trabajás con una tabla', text: 'Multiplicá cada valor por sus repeticiones. Sumá esos productos y dividí por el total de datos. Así contás también los valores repetidos.' },
        { heading: 'Ojo con los datos muy grandes', text: 'La media puede cambiar bastante por un valor extremo. No significa que todos tengan exactamente ese valor.', highlight: true }
      ]
    },
    {
      id: 'ficha-07',
      number: 7,
      topic: 'medidas',
      title: 'Mediana = centro al ordenar',
      subtitle: 'Primero ordená de menor a mayor. Después buscá el centro.',
      fileName: 'ficha-07-mediana.png',
      originalName: '07_Mediana.png',
      summary: 'Compara cantidad impar y par de datos, aclara la diferencia entre posición y valor, y explica su sensibilidad.',
      htmlSections: [
        { heading: 'Si hay una cantidad impar', text: 'Datos ordenados: 0, 1, 1, 2, 6. Hay 5 datos. El central es el tercero: 0, 1, [1], 2, 6 → mediana: 1.' },
        { heading: 'Si hay una cantidad par', text: 'Datos ordenados: 0, 1, 2, 3, 4, 8. Hay 6 datos. Los centrales son el tercero y el cuarto (2 y 3): (2 + 3) ÷ 2 = 2,5.' },
        { heading: 'Posición y valor son distintos', text: 'En el primer ejemplo, la posición central es 3, pero el dato que ocupa ese lugar es 1. La mediana es 1, no 3.', highlight: true },
        { heading: 'No te saltees el orden', text: 'No busques el centro de la lista desordenada. Con una cantidad par de datos numéricos, la mediana puede no aparecer en la lista.' },
        { heading: '¿Y si cambia un extremo?', text: 'La mediana suele ser menos sensible que la media, pero puede cambiar.' }
      ]
    },
    {
      id: 'ficha-08',
      number: 8,
      topic: 'medidas',
      title: 'Moda = lo más frecuente',
      subtitle: 'Buscá el valor o la categoría que más se repite.',
      fileName: 'ficha-08-moda.png',
      originalName: '08_Moda.png',
      summary: 'Presenta casos con una moda, dos modas empatadas (bimodal), sin moda destacada (amodal) y moda en categorías.',
      htmlSections: [
        { heading: 'Una moda', text: 'Datos: 0, 1, 1, 2, 6. El 1 aparece dos veces; los demás, una. Moda: 1 | Su frecuencia: 2.' },
        { heading: 'Dos modas empatadas', text: 'Datos: 1, 1, 2, 2, 3. El 1 y el 2 aparecen dos veces cada uno. Modas: 1 y 2 → bimodal.' },
        { heading: 'Sin una moda destacada', text: 'Datos: 1, 2, 3, 4. Ninguno se repite más que otro. En el uso escolar habitual, se llama amodal.' },
        { heading: 'También sirve para categorías', text: 'Deportes: vóley, fútbol, vóley, natación. La moda es vóley: es el más elegido.' },
        { heading: 'No confundas valor y frecuencia', text: 'Si 4 estudiantes leyeron 1 libro, la moda es 1 libro. El 4 indica cuántas veces aparece.', highlight: true }
      ]
    },
    {
      id: 'ficha-09',
      number: 9,
      topic: 'medidas',
      title: '¿Qué medida me conviene?',
      subtitle: 'La elección depende de qué querés saber.',
      fileName: 'ficha-09-elegir-la-medida.png',
      originalName: '09_Elegir_la_medida.png',
      summary: 'Contrasta qué comunica cada medida y qué ocurre al cambiar un dato extremo de 6 a 16.',
      htmlSections: [
        { heading: 'Media: para repartir el total', text: 'Con 0, 1, 1, 2, 6 libros, el total es 10 y hay 5 estudiantes. Media: 10 ÷ 5 = 2 libros.' },
        { heading: 'Mediana: para ubicar el centro', text: 'En 0, 1, 1, 2, 6, el dato central es 1. Puede ayudar cuando hay valores extremos. Mediana: 1 libro.' },
        { heading: 'Moda: para saber qué se repite', text: 'En esa misma lista, el 1 es el valor más frecuente. Moda: 1 libro.' },
        { heading: 'Probá cambiar el extremo', text: 'Si cambiás 6 por 16, los datos son 0, 1, 1, 2, 16. Media: 20 ÷ 5 = 4. Mediana y moda: 1. En este caso, solo cambió la media.', highlight: true },
        { heading: 'Preguntate qué querés comunicar', text: 'Para deporte preferido, usá la moda. No calcules un promedio de nombres. Para datos numéricos, explicá qué aporta la medida elegida.' }
      ]
    },
    {
      id: 'ficha-10',
      number: 10,
      topic: 'simbolos',
      title: 'Símbolos sin misterio',
      subtitle: 'Cada símbolo abrevia una idea que podés decir con palabras.',
      fileName: 'ficha-10-simbolos.png',
      originalName: '10_Simbolos.png',
      summary: 'Resume qué significan n, f, fr, F, Σ, = y ≈ con ejemplos numéricos directos.',
      htmlSections: [
        { heading: 'n y f: contá personas o datos', text: 'n: cantidad total de datos. f: veces que aparece un valor. Ejemplo: de 10 estudiantes, 4 leyeron 1 libro → n = 10 y f = 4.' },
        { heading: 'fr y F: dos ideas diferentes', text: 'fr: frecuencia relativa → 4 ÷ 10 = 0,4. F: frecuencia acumulada → sumá las frecuencias hasta esa fila.' },
        { heading: 'Σ se lee «sumatoria»', text: 'Significa sumar los términos indicados. Si los datos son 2, 3 y 4, sumar todos los datos es hacer: 2 + 3 + 4 = 9.' },
        { heading: '= y ≈ no dicen lo mismo', text: '= significa «es igual a». ≈ significa «es aproximadamente igual a». Ejemplo: 127 ÷ 16 = 7,9375 ≈ 7,94.' },
        { heading: 'Primero entendé la cuenta', text: 'Buscá qué significa cada signo antes de aplicar una fórmula de memoria.', highlight: true }
      ]
    }
  ];

  const DIAGNOSTIC_QUESTIONS = [
    {
      id: 'D-01',
      topic: 'variables',
      lessonId: 'L01',
      prompt: 'En un torneo escolar de vóley se registra el número de camiseta de cada jugadora (4, 7, 10, 12). ¿Cómo se clasifica esta variable?',
      options: [
        { value: 'nominal', label: 'Cualitativa nominal (el número funciona como etiqueta para identificar a la jugadora)' },
        { value: 'discreta', label: 'Cuantitativa discreta (porque está escrita con números enteros)' },
        { value: 'continua', label: 'Cuantitativa continua (porque es un número real)' }
      ],
      expected: 'nominal',
      feedback: {
        nominal: '¡Bien! Aunque se escriba con números, la camiseta identifica a la jugadora y no mide ni cuenta una cantidad.',
        discreta: 'Cuidado: ver números enteros no alcanza. El número de camiseta es una etiqueta identificadora, no un conteo.',
        continua: 'El número de camiseta no mide una magnitud continua; es un código identificador (cualitativa nominal).'
      }
    },
    {
      id: 'D-02',
      topic: 'variables',
      lessonId: 'L02',
      prompt: 'Se mide el tiempo que tarda cada estudiante en resolver un rompecabezas, anotándolo redondeado en minutos enteros (3 min, 4 min, 5 min). ¿Qué tipo de variable es el tiempo?',
      options: [
        { value: 'continua', label: 'Cuantitativa continua (el tiempo es una magnitud continua aunque se registre redondeado)' },
        { value: 'discreta', label: 'Cuantitativa discreta (porque se anotaron números sin coma)' },
        { value: 'ordinal', label: 'Cualitativa ordinal (porque ordena quién tardó más)' }
      ],
      expected: 'continua',
      feedback: {
        continua: '¡Exacto! La naturaleza de la magnitud tiempo es continua; redondear al registrar no la transforma en discreta.',
        discreta: 'Que se anote redondeado sin decimales depende del registro, pero el tiempo admite valores intermedios (es continua).',
        ordinal: 'El tiempo se mide numéricamente en unidades (minutos/segundos), por lo que es cuantitativa continua.'
      }
    },
    {
      id: 'D-03',
      topic: 'frecuencias',
      lessonId: 'L04',
      prompt: 'En un grupo de 20 estudiantes, 5 eligieron «Básquet». ¿Cuál es la frecuencia relativa (fr) y el porcentaje (%) de Básquet?',
      options: [
        { value: '0.25_25', label: 'fr = 0,25 y 25 % (porque 5 ÷ 20 = 0,25 y 0,25 × 100 = 25 %)' },
        { value: '4_40', label: 'fr = 4 y 40 % (dividiendo 20 ÷ 5)' },
        { value: '0.05_5', label: 'fr = 0,05 y 5 % (copiando la frecuencia absoluta 5)' }
      ],
      expected: '0.25_25',
      feedback: {
        '0.25_25': '¡Correcto! Dividiste la frecuencia (5) por el total (20) para hallar fr = 0,25 y multiplicaste por 100 para el 25 %.',
        '4_40': 'Dividiste al revés (20 ÷ 5). Para la frecuencia relativa siempre hacé frecuencia dividida por el total (5 ÷ 20 = 0,25).',
        '0.05_5': '5 es la frecuencia absoluta en 20 datos, no sobre 100. Hacé 5 ÷ 20 = 0,25 → 25 %.'
      }
    },
    {
      id: 'D-04',
      topic: 'frecuencias',
      lessonId: 'L05',
      prompt: 'En una tabla de hermanos (valores 0, 1, 2, 3), las frecuencias absolutas son: f(0)=4, f(1)=7, f(2)=5, f(3)=4 (total n=20). ¿Cuántos estudiantes tienen «hasta 2 hermanos» (2 o menos)?',
      options: [
        { value: '16', label: '16 estudiantes (sumando las frecuencias de 0, 1 y 2 hermanos: 4 + 7 + 5)' },
        { value: '5', label: '5 estudiantes (mirando solo la fila de 2 hermanos)' },
        { value: '11', label: '11 estudiantes (sumando solo 0 y 1 hermano: 4 + 7)' }
      ],
      expected: '16',
      feedback: {
        '16': '¡Muy bien! «Hasta 2 hermanos» incluye 0, 1 y 2 hermanos: es la frecuencia acumulada F(2) = 4 + 7 + 5 = 16.',
        '5': '5 es la cantidad que tiene «exactamente 2 hermanos». «Hasta 2» acumula 0, 1 y 2 hermanos (4 + 7 + 5 = 16).',
        '11': '11 acumula hasta 1 hermano. Como dice «hasta 2 hermanos» (2 o menos), también se incluye la fila de 2 hermanos (11 + 5 = 16).'
      }
    },
    {
      id: 'D-05',
      topic: 'barras',
      lessonId: 'L06',
      prompt: 'Tenés que graficar frecuencias cuyo valor máximo es 24 en una hoja con 14 cuadritos verticales disponibles. ¿Cuál de estas escalas para el eje Y es válida y entra en la hoja?',
      options: [
        { value: 'escala2', label: '1 cuadrito = 2 unidades (el eje llega a 24 en 12 cuadritos y avanza de 2 en 2)' },
        { value: 'escala1', label: '1 cuadrito = 1 unidad (necesitaría 24 cuadritos)' },
        { value: 'irregular', label: 'Poner solo los números 0, 5, 8, 24 a un cuadrito de distancia cada uno' }
      ],
      expected: 'escala2',
      feedback: {
        escala2: '¡Exacto! Con 2 unidades por cuadrito la escala es uniforme y 24 ocupa 12 cuadritos, entrando cómodamente en los 14.',
        escala1: 'Con 1 unidad por cuadrito necesitarías 24 cuadritos de alto, pero la hoja solo tiene 14 disponibles.',
        irregular: 'El eje vertical siempre debe avanzar en pasos iguales (escala uniforme); saltar de 0 a 5, 8 y 24 deforma las barras.'
      }
    },
    {
      id: 'D-06',
      topic: 'barras',
      lessonId: 'L06',
      prompt: 'En un gráfico de barras sobre los puntos anotados por un equipo en 4 partidos (Partido 1: 18 pts, Partido 2: 12 pts, Partido 3: 24 pts, Partido 4: 15 pts), ¿qué representa el eje vertical (Eje Y)?',
      options: [
        { value: 'puntos', label: 'La cantidad de puntos anotados en cada partido' },
        { value: 'partidos', label: 'La cantidad de partidos que se repiten' },
        { value: 'jugadores', label: 'La cantidad de jugadores del equipo' }
      ],
      expected: 'puntos',
      feedback: {
        puntos: '¡Muy bien! En este gráfico cada barra muestra los puntos convertidos en ese partido.',
        partidos: 'Los partidos están en el eje horizontal; la altura de cada barra mide los puntos anotados en ese partido.',
        jugadores: 'Los datos registrados son puntos por partido, por lo que el eje Y se rotula «Puntos anotados».'
      }
    },
    {
      id: 'D-07',
      topic: 'medidas',
      lessonId: 'L07',
      prompt: 'En una tabla de 10 estudiantes, los valores de libros leídos son 0, 1, 2, 3, 4 con frecuencias 2, 4, 2, 1, 1 (la suma total de libros es 15). ¿Cómo se calcula la media (promedio)?',
      options: [
        { value: 'div10', label: 'Dividiendo el total de libros (15) entre los 10 estudiantes: 15 ÷ 10 = 1,5 libros' },
        { value: 'div5', label: 'Dividiendo 15 entre las 5 filas de la tabla: 15 ÷ 5 = 3 libros' },
        { value: 'sumx', label: 'Sumando 0 + 1 + 2 + 3 + 4 = 10 y dividiendo entre 5' }
      ],
      expected: 'div10',
      feedback: {
        div10: '¡Correcto! Siempre dividimos la suma total de los datos (15 libros) entre el total de observaciones (n = 10 estudiantes).',
        div5: 'Ojo: 5 es la cantidad de filas distintas, pero participaron 10 estudiantes. Se divide entre n = 10.',
        sumx: 'Si sumás solo 0+1+2+3+4 no estás teniendo en cuenta cuántas veces se repite cada valor (frecuencia).'
      }
    },
    {
      id: 'D-08',
      topic: 'medidas',
      lessonId: 'L08',
      prompt: 'Los puntajes de 5 estudiantes (desordenados) fueron: 8, 4, 10, 5, 6. ¿Cuál es la mediana y cuál es la moda?',
      options: [
        { value: 'me6_amodal', label: 'Ordenados (4, 5, 6, 8, 10), la mediana es 6 y la serie es amodal (ninguno se repite)' },
        { value: 'me10_mo10', label: 'La mediana es 10 porque está en el medio de la lista original y la moda es 10' },
        { value: 'me3_mo1', label: 'La mediana es 3 (por la tercera posición) y la moda es 1' }
      ],
      expected: 'me6_amodal',
      feedback: {
        me6_amodal: '¡Excelente! Ordenaste primero (4, 5, 6, 8, 10) para ubicar el valor central (6) y reconociste que ningún valor se repite más que otro (amodal).',
        me10_mo10: 'Recordá ordenar siempre de menor a mayor antes de buscar el centro: en 4, 5, 6, 8, 10 el valor central es 6.',
        me3_mo1: '3 es el número de la posición central, pero el dato en esa posición ordenada (4, 5, [6], 8, 10) es 6. Y como todos aparecen 1 vez, es amodal.'
      }
    }
  ];

  const CALCULATOR_CONCEPTUAL_GUIDE = {
    status: 'pending-model',
    note: 'Cuando informes la marca y el modelo exacto de tu calculadora científica (incluido cualquier sufijo como MS, ES, LA CW o II), se incorporará acá el instructivo tecla por tecla específico para tu equipo.',
    tips: [
      {
        title: '1. Usá paréntesis al promediar en una sola línea',
        detail: 'Si querés calcular el promedio de 6, 7, 8 y 5 en un solo paso, escribí (6 + 7 + 8 + 5) ÷ 4 =. Si ponés 6 + 7 + 8 + 5 ÷ 4 sin paréntesis, la calculadora respeta la jerarquía de operaciones y divide solo el 5 entre 4.'
      },
      {
        title: '2. Hacé también la suma primero como control',
        detail: 'Un hábito muy seguro en el examen es sumar primero y apretar «=» para anotar el total en tu hoja (por ejemplo, 127), y recién después dividir ese resultado entre n (127 ÷ 16 = 7,9375). Así podés mostrar el paso intermedio.'
      },
      {
        title: '3. Fracción frente a decimal',
        detail: 'Muchas calculadoras muestran primero el resultado como fracción (por ejemplo, 127/16 o 7 15/16) y tienen una tecla para alternar a expresión decimal (7.9375). Recordá que en el visor el punto suele representar la coma decimal.'
      },
      {
        title: '4. Frecuencia relativa y porcentaje',
        detail: 'No hace falta buscar una tecla especial de «%»: para hallar la frecuencia relativa hacé f ÷ n (por ejemplo, 7 ÷ 25 = 0,28) y para pasarla a porcentaje multiplicá ese número por 100 (0,28 × 100 = 28).'
      },
      {
        title: '5. Redondeá recién al final',
        detail: 'Si una frecuencia relativa da periódica (como 5 ÷ 15 = 0,333333...), multiplicá el valor completo por 100 para obtener 33,33 % en lugar de recortar antes de tiempo.'
      }
    ]
  };

  EstadisticaApp.LessonsData = {
    SYMBOLS_GLOSSARY: SYMBOLS_GLOSSARY,
    LESSONS: LESSONS,
    FICHAS_CATALOG: FICHAS_CATALOG,
    DIAGNOSTIC_QUESTIONS: DIAGNOSTIC_QUESTIONS,
    CALCULATOR_CONCEPTUAL_GUIDE: CALCULATOR_CONCEPTUAL_GUIDE
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.LessonsData;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
