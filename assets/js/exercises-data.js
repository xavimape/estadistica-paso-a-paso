/* Auto-generado por scripts/build-exercises-bank.js — 84 actividades verificadas */
(function (root) {
  'use strict';

  const EstadisticaApp = root.EstadisticaApp || (root.EstadisticaApp = {});

  const EXERCISES = [
  {
    "id": "G1-01",
    "title": "Clasificación de cuatro variables cotidianas",
    "source": {
      "kind": "guia",
      "exercise": "1.1",
      "label": "Guía 1.1"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "clasificar-variable",
      "justificar-variable"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Clasificá cada una de las siguientes cuatro variables en cualitativa (nominal u ordinal) o cuantitativa (discreta o continua) y elegí la justificación correcta.",
    "parts": [
      {
        "id": "p1",
        "label": "1. Distancia desde el hogar hasta el colegio expresada en kilómetros",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua (mide una longitud que admite valores intermedios, como 2,75 km)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (solo puede tomar kilómetros enteros)"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (expresa el nombre de la calle)"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (ordena barrios sin medir distancia)"
          }
        ],
        "expected": "cuantitativa-continua",
        "optionFeedback": {
          "cuantitativa-continua": "¡Correcto! La distancia es una magnitud física continua que admite valores intermedios en kilómetros o metros.",
          "cuantitativa-discreta": "Aunque a veces alguien diga «vivo a 2 km», la distancia real admite fracciones de kilómetro (como 2,35 km): es continua.",
          "cualitativa-nominal": "Se está registrando la distancia en kilómetros (una cantidad medible), no el nombre de la calle.",
          "cualitativa-ordinal": "Los kilómetros son una magnitud numérica continua, no una categoría verbal."
        }
      },
      {
        "id": "p2",
        "label": "2. Talle de remera del uniforme escolar (S, M, L, XL)",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (categorías con un orden de tamaño: S < M < L < XL)"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (letras sin ningún orden entre sí)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (conteo de remeras con números enteros)"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua (medición exacta en centímetros)"
          }
        ],
        "expected": "cualitativa-ordinal",
        "optionFeedback": {
          "cualitativa-ordinal": "¡Exacto! Las categorías S, M, L y XL expresan una cualidad ordenada de menor a mayor tamaño.",
          "cualitativa-nominal": "Fijate que S, M, L y XL sí tienen una jerarquía natural de tamaño (chico, mediano, grande, extragrande).",
          "cuantitativa-discreta": "No estamos contando cuántas remeras hay, sino clasificando el talle mediante letras ordenadas.",
          "cuantitativa-continua": "En este caso el registro se hace por categorías ordenadas (S, M, L, XL), por lo que es cualitativa ordinal."
        }
      },
      {
        "id": "p3",
        "label": "3. Cantidad de mascotas que conviven en el hogar",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (proviene de un conteo con valores enteros: 0, 1, 2, 3...)"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua (admite valores intermedios con coma)"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (indica si es perro, gato o loro)"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (indica cuál mascota llegó primero)"
          }
        ],
        "expected": "cuantitativa-discreta",
        "optionFeedback": {
          "cuantitativa-discreta": "¡Muy bien! Contar cuántas mascotas hay da valores enteros separados (0, 1, 2...), sin valores intermedios.",
          "cuantitativa-continua": "No puede haber 1,5 mascotas: al tratarse de un conteo de individuos, es cuantitativa discreta.",
          "cualitativa-nominal": "«Especie de mascota» sería nominal, pero acá la variable es «cantidad de mascotas» (un conteo numérico).",
          "cualitativa-ordinal": "La cantidad de mascotas es un número obtenido por conteo, es decir, cuantitativa discreta."
        }
      },
      {
        "id": "p4",
        "label": "4. Tipo de transporte utilizado para ir al instituto (Colectivo, Bicicleta, Moto, Caminando)",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (categorías no numéricas sin orden jerárquico natural)"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (categorías ordenadas por calificación)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (conteo de vehículos)"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua (velocidad del viaje)"
          }
        ],
        "expected": "cualitativa-nominal",
        "optionFeedback": {
          "cualitativa-nominal": "¡Correcto! Son categorías descriptivas que nombran el medio de traslado sin jerarquía natural.",
          "cualitativa-ordinal": "Entre Colectivo, Bicicleta, Moto y Caminando no existe una escala de jerarquía única.",
          "cuantitativa-discreta": "Cada estudiante responde con el nombre del medio de transporte, no con una cantidad.",
          "cuantitativa-continua": "El medio de transporte es un atributo categórico nominal."
        }
      }
    ],
    "hints": [
      "Preguntate primero en cada caso: ¿la respuesta es una palabra/categoría (cualitativa) o una cantidad matemática (cuantitativa)?",
      "Si es cualitativa, fijate si las opciones tienen un orden de menor a mayor (ordinal) o no (nominal).",
      "Si es cuantitativa, distinguí si surge de contar unidades separadas (discreta) o de medir una magnitud con valores intermedios (continua)."
    ],
    "solutionSteps": [
      "1) Distancia en km: Cuantitativa continua, porque la longitud admite valores intermedios (como 2,75 km).",
      "2) Talle de remera (S, M, L, XL): Cualitativa ordinal, porque son categorías no numéricas ordenadas por tamaño.",
      "3) Cantidad de mascotas: Cuantitativa discreta, porque surge de contar individuos enteros (0, 1, 2...).",
      "4) Tipo de transporte: Cualitativa nominal, porque son categorías sin orden jerárquico natural."
    ],
    "commonErrorNote": "No confundir «tipo de mascota» (cualitativa) con «cantidad de mascotas» (cuantitativa discreta)."
  },
  {
    "id": "G1-02",
    "title": "Encuesta sobre el estado de las computadoras",
    "source": {
      "kind": "guia",
      "exercise": "1.2",
      "label": "Guía 1.2"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "cualitativa-ordinal",
      "orden-jerarquico"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En un relevamiento escolar (ejemplo de estudio) para evaluar el estado de las computadoras del laboratorio, las respuestas posibles son: «Excelente, Bueno, Regular, Defectuoso». ¿Qué tipo de variable estadística representa esta medición y cuál es su orden lógico?",
    "parts": [
      {
        "id": "clasificacion",
        "label": "Clasificación de la variable «estado de las computadoras»",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          }
        ],
        "expected": "cualitativa-ordinal",
        "optionFeedback": {
          "cualitativa-ordinal": "¡Muy bien! Expresa una cualidad mediante categorías que siguen una escala de calidad ordenada.",
          "cualitativa-nominal": "Aunque son palabras, no da lo mismo el orden: hay una progresión clara desde Defectuoso hasta Excelente.",
          "cuantitativa-discreta": "Las respuestas son palabras de calidad, no cantidades numéricas.",
          "cuantitativa-continua": "Son categorías de estado, no mediciones continuas."
        }
      },
      {
        "id": "orden",
        "label": "Elegí la secuencia ordenada de menor a mayor calidad de funcionamiento",
        "type": "select",
        "options": [
          {
            "value": "def-reg-bue-exc",
            "label": "Defectuoso → Regular → Bueno → Excelente"
          },
          {
            "value": "bue-def-exc-reg",
            "label": "Bueno → Defectuoso → Excelente → Regular (orden alfabético)"
          },
          {
            "value": "reg-def-bue-exc",
            "label": "Regular → Defectuoso → Bueno → Excelente"
          }
        ],
        "expected": "def-reg-bue-exc",
        "optionFeedback": {
          "def-reg-bue-exc": "¡Exacto! Ese orden gradual permite incluso calcular frecuencias acumuladas o identificar la mediana ordinal.",
          "bue-def-exc-reg": "El orden alfabético no respeta la jerarquía real de calidad del equipo.",
          "reg-def-bue-exc": "«Defectuoso» indica peor estado que «Regular», por lo que va en el extremo inferior."
        }
      }
    ],
    "hints": [
      "Observá las cuatro respuestas posibles: «Excelente, Bueno, Regular, Defectuoso». ¿Son números o palabras?",
      "Como son palabras que describen un atributo, la variable es cualitativa.",
      "Fijate si esas cuatro palabras tienen una jerarquía de calidad entre sí."
    ],
    "solutionSteps": [
      "Las respuestas («Excelente, Bueno, Regular, Defectuoso») son categorías no numéricas, por lo que la variable es cualitativa.",
      "Como expresan una escala graduada de calidad (Defectuoso < Regular < Bueno < Excelente), su subclasificación es Cualitativa Ordinal."
    ],
    "commonErrorNote": "Ordenar categorías ordinales alfabéticamente en una tabla en lugar de respetar su jerarquía de nivel."
  },
  {
    "id": "G1-03",
    "title": "Tiempo registrado en los 100 metros llanos",
    "source": {
      "kind": "guia",
      "exercise": "1.3",
      "label": "Guía 1.3"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "cuantitativa-continua",
      "magnitud-vs-registro"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En la clase de Educación Física, la profesora registra el tiempo en segundos que tarda cada estudiante en recorrer 100 metros llanos. ¿Qué tipo de variable representa esta medición y por qué?",
    "parts": [
      {
        "id": "tipo",
        "label": "Tipo y subclasificación de la variable",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          }
        ],
        "expected": "cuantitativa-continua",
        "optionFeedback": {
          "cuantitativa-continua": "¡Correcto! El tiempo es una magnitud física continua.",
          "cuantitativa-discreta": "El tiempo no salta de a unidades aisladas: entre 13 s y 14 s existen infinitos instantes intermedios.",
          "cualitativa-ordinal": "Se mide el tiempo en segundos (cantidad numérica), no solo el puesto de llegada.",
          "cualitativa-nominal": "Los segundos medidos con cronómetro son una cantidad numérica continua."
        }
      },
      {
        "id": "justificacion",
        "label": "¿Por qué sigue siendo continua incluso si un reloj sencillo mostrara segundos sin décimas?",
        "type": "select",
        "options": [
          {
            "value": "magnitud",
            "label": "Porque el tiempo admite valores intermedios por su naturaleza física; la precisión del reloj solo redondea el registro"
          },
          {
            "value": "enteros",
            "label": "Porque si el reloj no muestra coma pasa a ser discreta y si tiene coma pasa a ser continua"
          },
          {
            "value": "etiqueta",
            "label": "Porque los segundos son etiquetas nominales de cada corredor"
          }
        ],
        "expected": "magnitud",
        "optionFeedback": {
          "magnitud": "¡Muy bien! La naturaleza de la magnitud (tiempo) no cambia por el instrumento con que la anotemos.",
          "enteros": "Ojo: redondear al anotar no cambia la naturaleza continua del tiempo.",
          "etiqueta": "Los segundos miden duración real; no son etiquetas."
        }
      }
    ],
    "hints": [
      "El tiempo se mide en segundos y fracciones de segundo (como 13,84 s).",
      "Entre dos tiempos cualesquiera siempre puede existir un tiempo intermedio.",
      "Recordá distinguir qué es la magnitud física (tiempo) de cómo la redondea el cronómetro."
    ],
    "solutionSteps": [
      "El tiempo empleado en recorrer 100 metros es una cantidad numérica obtenida por medición.",
      "Es una variable Cuantitativa Continua porque el tiempo transcurre sin saltos y admite cualquier valor real dentro de un intervalo (por ejemplo, 13,84 s), según la precisión del instrumento."
    ],
    "commonErrorNote": "No justifiques que es continua diciendo únicamente «porque tiene coma»; explicá que mide una magnitud continua que admite valores intermedios."
  },
  {
    "id": "G1-04",
    "title": "Número de asignaturas reprobadas en el cuatrimestre",
    "source": {
      "kind": "guia",
      "exercise": "1.4",
      "label": "Guía 1.4"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "cuantitativa-discreta",
      "conteo"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Se registró el número de asignaturas reprobadas por un grupo de estudiantes al finalizar el primer cuatrimestre (con valores posibles 0, 1, 2, 3, 4). Clasificá esta variable indicando su grupo general y su subclasificación.",
    "parts": [
      {
        "id": "grupo",
        "label": "Grupo general de la variable",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa",
            "label": "Cuantitativa (expresa una cantidad numérica con la que se puede operar)"
          },
          {
            "value": "cualitativa",
            "label": "Cualitativa (expresa un nombre o cualidad no numérica)"
          }
        ],
        "expected": "cuantitativa"
      },
      {
        "id": "subtipo",
        "label": "Subclasificación y razón matemática",
        "type": "select",
        "options": [
          {
            "value": "discreta",
            "label": "Discreta, porque surge de un conteo exacto de materias enteras (0, 1, 2, 3, 4) sin valores intermedios"
          },
          {
            "value": "continua",
            "label": "Continua, porque el promedio de materias puede dar con coma"
          },
          {
            "value": "ordinal",
            "label": "Ordinal, porque son palabras ordenadas"
          }
        ],
        "expected": "discreta",
        "optionFeedback": {
          "discreta": "¡Excelente! Nadie reprueba 1,4 materias: el conteo de asignaturas toma valores enteros aislados.",
          "continua": "Cuidado: aunque el promedio del curso pueda dar con decimales (por ejemplo, 1,2 materias), la variable observada en cada estudiante solo toma valores separados (0, 1, 2, 3, 4).",
          "ordinal": "Los valores 0, 1, 2, 3, 4 son cantidades contadas, por lo que es cuantitativa discreta."
        }
      }
    ],
    "hints": [
      "¿Qué se observa en cada estudiante? La cantidad de materias reprobadas.",
      "¿Puede un estudiante tener 2,5 materias reprobadas en el boletín, o se cuentan de a una entera?",
      "Los conteos de unidades enteras corresponden a variables cuantitativas discretas."
    ],
    "solutionSteps": [
      "Grupo general: Variable Cuantitativa, ya que mide una cantidad numérica.",
      "Subclasificación: Cuantitativa Discreta, porque proviene de contar asignaturas enteras (0, 1, 2, 3, 4) y no existen valores intermedios entre dos conteos consecutivos."
    ],
    "commonErrorNote": "Que el promedio de una variable discreta tenga decimales no convierte a la variable en continua."
  },
  {
    "id": "G1-05",
    "title": "Cuatro situaciones del ámbito escolar",
    "source": {
      "kind": "guia",
      "exercise": "1.5",
      "label": "Guía 1.5"
    },
    "topic": "variables",
    "level": "intermedio",
    "skills": [
      "clasificar-variable"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Determiná la clasificación exacta (cualitativa nominal, cualitativa ordinal, cuantitativa discreta o cuantitativa continua) para las siguientes cuatro situaciones:",
    "parts": [
      {
        "id": "temp",
        "label": "1. Temperatura corporal tomada en grados Celsius (36,2 °C; 36,6 °C)",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          }
        ],
        "expected": "cuantitativa-continua"
      },
      {
        "id": "civil",
        "label": "2. Estado civil de los adultos consultados (Soltero, Casado, Divorciado, Viudo)",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          }
        ],
        "expected": "cualitativa-nominal"
      },
      {
        "id": "conducta",
        "label": "3. Calificación cualitativa de conducta (Excelente, Muy Buena, Buena, Regular)",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          }
        ],
        "expected": "cualitativa-ordinal"
      },
      {
        "id": "hojas",
        "label": "4. Cantidad de hojas útiles que tiene la libreta de calificaciones",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          }
        ],
        "expected": "cuantitativa-discreta"
      }
    ],
    "hints": [
      "La temperatura es una magnitud física medible con termómetro; las hojas de una libreta se cuentan una por una.",
      "Tanto el estado civil como la calificación verbal de conducta usan palabras (cualitativas).",
      "Diferenciá cuál de las dos cualitativas tiene una jerarquía de nivel (Excelente > Muy Buena > Buena > Regular)."
    ],
    "solutionSteps": [
      "1) Temperatura corporal: Cuantitativa continua (magnitud física que admite valores intermedios en °C).",
      "2) Estado civil: Cualitativa nominal (categorías sin orden jerárquico natural).",
      "3) Calificación cualitativa de conducta: Cualitativa ordinal (sigue una jerarquía ordenada: Excelente > Muy Buena > Buena > Regular).",
      "4) Hojas útiles de la libreta: Cuantitativa discreta (conteo en números enteros)."
    ],
    "commonErrorNote": "Distinguir siempre entre calificación verbal ordenada (cualitativa ordinal) y nota numérica en puntos (cuantitativa)."
  },
  {
    "id": "G1-06",
    "title": "Debate sobre el talle de calzado y la longitud del pie",
    "source": {
      "kind": "guia",
      "exercise": "1.6",
      "label": "Guía 1.6 (adaptado)",
      "adaptationNote": "Se explicita el criterio escolar que modela la escala graduada de talles como discreta, aclarando que ver números no alcanza, que no es un conteo de zapatos y contrastándola con la longitud continua del pie en centímetros."
    },
    "topic": "variables",
    "level": "desafio",
    "skills": [
      "criterio-clasificacion",
      "discreta-vs-continua"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Martín afirma que el talle de calzado argentino (36, 37, 38, 39) es cualitativo porque refiere a una característica del cuerpo. Sofía sostiene que en la guía escolar se clasifica como cuantitativa discreta porque el sistema de talles está graduado en pasos numéricos separados (e incluso si hubiera medios talles como 37,5 seguirían siendo saltos fijos). Analizá el debate y comparalo con medir el pie en centímetros.",
    "parts": [
      {
        "id": "modelo_escolar",
        "label": "1. ¿Cómo se clasifica el talle numérico de calzado (36, 37, 38, 39) en el criterio de nuestra guía escolar y por qué?",
        "type": "select",
        "options": [
          {
            "value": "discreta-escala",
            "label": "Cuantitativa discreta, porque la escala de talles avanza en valores numéricos separados (pasos graduados de la horma)"
          },
          {
            "value": "nominal",
            "label": "Cualitativa nominal, porque los talles 36, 37, 38 no tienen ningún orden de tamaño"
          },
          {
            "value": "continua",
            "label": "Cuantitativa continua, porque se fabrican infinitos talles intermedios como 36,142"
          }
        ],
        "expected": "discreta-escala",
        "optionFeedback": {
          "discreta-escala": "¡Muy bien! En la guía escolar se modela como cuantitativa discreta porque toma valores separados de una escala graduada.",
          "nominal": "Los talles sí tienen orden de tamaño y provienen de una escala graduada.",
          "continua": "El calzado comercial se fabrica en puntos separados (enteros o medios puntos), no en cualquier decimal continuo."
        }
      },
      {
        "id": "contraste_pie",
        "label": "2. En cambio, si medimos con una regla la longitud exacta del pie en centímetros (por ejemplo, 23,8 cm; 24,15 cm), ¿qué tipo de variable es?",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua (la longitud física admite cualquier valor intermedio en el intervalo)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (porque se mide con regla)"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (porque ordena pies cortos y largos)"
          }
        ],
        "expected": "cuantitativa-continua",
        "optionFeedback": {
          "cuantitativa-continua": "¡Exacto! La longitud del pie en centímetros es una magnitud continua, mientras que el talle comercial la agrupa en pasos discretos.",
          "cuantitativa-discreta": "La longitud en centímetros no da saltos fijos: es una magnitud física continua.",
          "cualitativa-ordinal": "Medir en centímetros arroja una cantidad numérica continua."
        }
      },
      {
        "id": "cuidado_concepto",
        "label": "3. ¿Cuál de estas advertencias es verdadera al justificar tu respuesta en un examen?",
        "type": "select",
        "options": [
          {
            "value": "no-solo-enteros",
            "label": "Que esté escrito con números no basta por sí solo: hay que fijarse si representa una escala cuantitativa de valores separados y no confundir «talle 38» con «tener 38 zapatos»"
          },
          {
            "value": "todo-numero-es-discreto",
            "label": "Cualquier dato que tenga números enteros es siempre un conteo discreto"
          }
        ],
        "expected": "no-solo-enteros"
      }
    ],
    "hints": [
      "Distinguí entre la longitud real del pie (medida en cm con valores continuos) y la escala comercial de talles (36, 37, 38, 39).",
      "En el solucionario de la guía escolar se adopta la postura de Sofía (cuantitativa discreta) porque los talles avanzan en valores aislados.",
      "Aun así, recordá que «talle 38» es un punto de una escala graduada, no un conteo de 38 objetos."
    ],
    "solutionSteps": [
      "En el criterio de la guía escolar, Sofía tiene razón al clasificar el talle numérico (36, 37, 38, 39) como Cuantitativa Discreta, porque toma valores aislados de una escala numérica graduada.",
      "Precisión importante: no es un conteo de objetos y, según el fabricante o país, algunos autores también lo tratan como escala ordinal si solo interesa el orden de tamaño. En cambio, la longitud del pie medida en centímetros (por ejemplo, 24,3 cm) es inequívocamente Cuantitativa Continua."
    ],
    "commonErrorNote": "No escribir como regla universal «si tiene números enteros siempre es un conteo»: diferenciar conteo, escala graduada y longitud continua."
  },
  {
    "id": "G1-07",
    "title": "Volumen diario de agua potable consumido",
    "source": {
      "kind": "guia",
      "exercise": "1.7",
      "label": "Guía 1.7"
    },
    "topic": "variables",
    "level": "intermedio",
    "skills": [
      "cuantitativa-continua",
      "justificar-variable"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En una consulta de salud escolar se mide el volumen diario de agua potable consumido por cada estudiante (1,5 L; 2,0 L; 2,25 L). Clasificá la variable y justificá usando la idea de valores intermedios en un intervalo.",
    "parts": [
      {
        "id": "clasif",
        "label": "Clasificación de la variable «volumen diario de agua en litros»",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-continua"
      },
      {
        "id": "explicacion",
        "label": "Redactá con tus palabras por qué es continua y verificá los criterios en la rúbrica",
        "type": "rubric",
        "placeholder": "Explicá qué magnitud se mide y por qué admite valores intermedios entre dos cantidades como 1,5 L y 2,0 L...",
        "criteria": [
          "Mencioné que el volumen (en litros) es una magnitud física medible.",
          "Expliqué que entre dos valores cualesquiera (como 1,5 L y 2,0 L) puede tomar valores intermedios (como 1,75 L o 1,8 L) dentro de un intervalo."
        ],
        "modelAnswer": "Es una variable cuantitativa continua porque mide una magnitud física (el volumen de agua en litros) que puede tomar cualquier valor intermedio dentro de un intervalo numérico (por ejemplo, entre 1,5 L y 2,0 L existen valores como 1,75 L)."
      }
    ],
    "hints": [
      "El volumen se mide en litros (L) o mililitros (mL).",
      "¿El consumo de agua salta de 1 litro a 2 litros sin pasar por el medio, o puede tomar cualquier cantidad intermedia?",
      "En tu explicación nombrá la magnitud (volumen) y la posibilidad de tomar valores intermedios en un intervalo."
    ],
    "solutionSteps": [
      "Clasificación: Variable Cuantitativa Continua.",
      "Justificación: El volumen es una magnitud física medible que no avanza a saltos enteros, sino que admite valores reales intermedios dentro de un intervalo (por ejemplo, 1,5 L; 1,75 L; 2,25 L)."
    ],
    "commonErrorNote": "Si alguien toma exactamente «2 litros», la variable sigue siendo continua porque la magnitud volumen admite valores intermedios."
  },
  {
    "id": "G2-01",
    "title": "Tabla completa de faltas de 15 alumnos",
    "source": {
      "kind": "guia",
      "exercise": "2.1",
      "label": "Guía 2.1"
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "frecuencia-absoluta",
      "frecuencia-relativa",
      "porcentaje",
      "frecuencia-acumulada"
    ],
    "lessonId": "L04",
    "allowComparableVariant": true,
    "prompt": "Los siguientes datos corresponden a la cantidad de faltas registradas durante un mes por n = 15 alumnos de 2.º año (ejemplo de la guía):\n0, 1, 2, 0, 1, 1, 3, 0, 2, 1, 0, 1, 2, 1, 0.\nConstruí la tabla de frecuencias completa indicando f, fr (con 2 o 3 decimales o fracción), % (con 2 decimales) y F.",
    "dataset": [
      0,
      1,
      2,
      0,
      1,
      1,
      3,
      0,
      2,
      1,
      0,
      1,
      2,
      1,
      0
    ],
    "parts": [
      {
        "id": "tabla",
        "label": "Completá la tabla de frecuencias para 0, 1, 2 y 3 faltas (total n = 15)",
        "type": "freq-table",
        "totalN": 15,
        "columns": [
          "f",
          "fr",
          "pct",
          "F"
        ],
        "rows": [
          {
            "x": 0,
            "label": "0 faltas",
            "f": 5,
            "F": 5
          },
          {
            "x": 1,
            "label": "1 falta",
            "f": 6,
            "F": 11
          },
          {
            "x": 2,
            "label": "2 faltas",
            "f": 3,
            "F": 14
          },
          {
            "x": 3,
            "label": "3 faltas",
            "f": 1,
            "F": 15
          }
        ]
      }
    ],
    "hints": [
      "Contá primero cuántos ceros, unos, dos y tres hay en la lista: tienen que sumar 5 + 6 + 3 + 1 = 15.",
      "Para la frecuencia relativa (fr), dividí cada f entre 15: 5÷15 ≈ 0,33 (o 0,333); 6÷15 = 0,40; 3÷15 = 0,20; 1÷15 ≈ 0,07 (o 0,067).",
      "Para el porcentaje multiplicá por 100 (33,33 %; 40 %; 20 %; 6,67 %) y para la acumulada F sumá las f desde arriba (5, 11, 14, 15)."
    ],
    "solutionSteps": [
      "Conteo de frecuencias absolutas (f): 0 faltas → 5; 1 falta → 6; 2 faltas → 3; 3 faltas → 1. Suma Σf = 5 + 6 + 3 + 1 = 15.",
      "Frecuencias relativas (fr = f ÷ 15): 5/15 ≈ 0,33 (0,333); 6/15 = 0,40; 3/15 = 0,20; 1/15 ≈ 0,07 (0,067). Suma = 1,00.",
      "Frecuencias porcentuales (%): 33,33 %; 40,00 %; 20,00 %; 6,67 %. Suma = 100 %.",
      "Frecuencias acumuladas (F): F₁ = 5; F₂ = 5 + 6 = 11; F₃ = 11 + 3 = 14; F₄ = 14 + 1 = 15."
    ],
    "commonErrorNote": "En 5 ÷ 15 y 1 ÷ 15 los decimales son periódicos (0,333... y 0,066...): redondeá correctamente el segundo decimal de 0,066... a 0,07 (o 6,67 %)."
  },
  {
    "id": "G2-02",
    "title": "Frecuencia relativa y porcentual de la nota 8",
    "source": {
      "kind": "guia",
      "exercise": "2.2",
      "label": "Guía 2.2"
    },
    "topic": "frecuencias",
    "level": "inicial",
    "skills": [
      "frecuencia-absoluta",
      "frecuencia-relativa",
      "porcentaje"
    ],
    "lessonId": "L04",
    "allowComparableVariant": true,
    "prompt": "En una prueba corta de matemática realizada a n = 25 estudiantes, las notas obtenidas sobre 10 puntos fueron:\n6, 7, 8, 6, 9, 10, 7, 8, 8, 7, 6, 9, 8, 7, 10, 8, 9, 7, 6, 8, 7, 9, 8, 10, 7.\nCalculá cuántas veces aparece la nota 8, su frecuencia relativa (fr) y su frecuencia porcentual (%).",
    "dataset": [
      6,
      7,
      8,
      6,
      9,
      10,
      7,
      8,
      8,
      7,
      6,
      9,
      8,
      7,
      10,
      8,
      9,
      7,
      6,
      8,
      7,
      9,
      8,
      10,
      7
    ],
    "parts": [
      {
        "id": "f8",
        "label": "1. Frecuencia absoluta (f) de la nota 8 (cantidad de estudiantes que sacaron 8)",
        "type": "number",
        "integerOnly": true,
        "expected": 7
      },
      {
        "id": "fr8",
        "label": "2. Frecuencia relativa (fr) de la nota 8",
        "type": "number",
        "subkind": "fr",
        "expected": {
          "numerator": 7,
          "denominator": 25
        },
        "roundingDecimals": 2
      },
      {
        "id": "pct8",
        "label": "3. Frecuencia porcentual (%) de la nota 8",
        "type": "number",
        "unit": "%",
        "expected": 28,
        "roundingDecimals": 2
      }
    ],
    "hints": [
      "Recorré la lista de 25 notas contando únicamente cuántas veces aparece el número 8.",
      "El 8 aparece 7 veces. Para hallar la frecuencia relativa (fr), dividí 7 entre el total de estudiantes (25).",
      "Multiplicá el resultado de 7 ÷ 25 por 100 para obtener el porcentaje."
    ],
    "solutionSteps": [
      "Contamos las apariciones de la nota 8 en los 25 datos: f = 7 estudiantes.",
      "Frecuencia relativa: fr = 7 ÷ 25 = 0,28.",
      "Frecuencia porcentual: % = 0,28 × 100 = 28 % (el 28 % del curso obtuvo un 8)."
    ],
    "commonErrorNote": "No dividir entre la nota máxima (10 puntos) sino entre la cantidad total de estudiantes (n = 25)."
  },
  {
    "id": "G2-03",
    "title": "Interpretación de «2 o menos faltas»",
    "source": {
      "kind": "guia",
      "exercise": "2.3",
      "label": "Guía 2.3",
      "adaptationNote": "Incluye los datos y frecuencias del Ejercicio 2.1 en el propio enunciado para poder resolverlo de forma autónoma."
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "frecuencia-acumulada",
      "porcentaje",
      "interpretacion"
    ],
    "lessonId": "L05",
    "allowComparableVariant": true,
    "prompt": "En el registro mensual de faltas de n = 15 alumnos (Ejercicio 2.1), las frecuencias absolutas fueron: 0 faltas → 5 alumnos; 1 falta → 6 alumnos; 2 faltas → 3 alumnos; 3 faltas → 1 alumno. Respondé:\n1) ¿Cuántos alumnos registraron 2 o menos faltas en el mes?\n2) ¿Qué porcentaje del total representa dicho grupo (redondeado a 2 decimales)?",
    "parts": [
      {
        "id": "acum_2",
        "label": "1. Cantidad de alumnos con 2 o menos faltas (F hasta 2)",
        "type": "number",
        "integerOnly": true,
        "expected": 14,
        "commonErrors": [
          {
            "value": 3,
            "message": "3 es la cantidad de alumnos con exactamente 2 faltas. «2 o menos faltas» incluye también a quienes tuvieron 0 faltas (5) y 1 falta (6): 5 + 6 + 3 = 14."
          },
          {
            "value": 11,
            "message": "11 suma solo quienes tuvieron 0 o 1 falta (5 + 6). Como pide «2 o menos», sumá también los 3 alumnos con 2 faltas."
          }
        ]
      },
      {
        "id": "pct_2",
        "label": "2. Porcentaje del total que representa ese grupo (%)",
        "type": "number",
        "unit": "%",
        "expected": {
          "numerator": 1400,
          "denominator": 15
        },
        "roundingDecimals": 2,
        "commonErrors": [
          {
            "value": 20,
            "message": "20 % corresponde solo a quienes tuvieron exactamente 2 faltas (3 de 15). Calculá el porcentaje para los 14 alumnos de 15."
          }
        ]
      }
    ],
    "hints": [
      "«2 o menos faltas» significa haber tenido 0 faltas, 1 falta o 2 faltas.",
      "Sumá las frecuencias absolutas de esas tres filas: 5 + 6 + 3 (que es la frecuencia acumulada F₃).",
      "Para el porcentaje, dividí esa cantidad acumulada entre el total (15) y multiplicá por 100."
    ],
    "solutionSteps": [
      "Alumnos con 2 o menos faltas: corresponde a la frecuencia acumulada hasta x = 2 → F₃ = 5 + 6 + 3 = 14 alumnos.",
      "Porcentaje del total: (14 ÷ 15) × 100 = 93,333... % ≈ 93,33 %."
    ],
    "commonErrorNote": "Distinguir siempre «exactamente 2 faltas» (f = 3) de «2 o menos faltas» (F = 14)."
  },
  {
    "id": "G2-04",
    "title": "Tabla de horas diarias de estudio de 20 alumnos",
    "source": {
      "kind": "guia",
      "exercise": "2.4",
      "label": "Guía 2.4",
      "adaptationNote": "Agrega aclaración conceptual de que registrar el tiempo en horas enteras redondeadas no transforma al tiempo en una magnitud discreta."
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "frecuencia-absoluta",
      "frecuencia-relativa",
      "porcentaje",
      "frecuencia-acumulada"
    ],
    "lessonId": "L05",
    "allowComparableVariant": true,
    "prompt": "Los siguientes datos representan las horas diarias dedicadas a tareas fuera del colegio (registradas en horas enteras) por n = 20 alumnos de 2.º año:\n1, 2, 0, 1, 3, 2, 1, 2, 0, 1, 2, 3, 1, 4, 2, 1, 0, 2, 1, 2.\nNota conceptual: aunque acá se hayan anotado números enteros (0 a 4) y los organicemos por valores en la tabla, recordá que el tiempo es por naturaleza una magnitud continua.\nConstruí la tabla de frecuencias completa (f, fr, % y F).",
    "dataset": [
      1,
      2,
      0,
      1,
      3,
      2,
      1,
      2,
      0,
      1,
      2,
      3,
      1,
      4,
      2,
      1,
      0,
      2,
      1,
      2
    ],
    "parts": [
      {
        "id": "tabla",
        "label": "Completá la tabla de frecuencias para 0, 1, 2, 3 y 4 horas (n = 20)",
        "type": "freq-table",
        "totalN": 20,
        "columns": [
          "f",
          "fr",
          "pct",
          "F"
        ],
        "rows": [
          {
            "x": 0,
            "label": "0 h",
            "f": 3,
            "F": 3
          },
          {
            "x": 1,
            "label": "1 h",
            "f": 7,
            "F": 10
          },
          {
            "x": 2,
            "label": "2 h",
            "f": 7,
            "F": 17
          },
          {
            "x": 3,
            "label": "3 h",
            "f": 2,
            "F": 19
          },
          {
            "x": 4,
            "label": "4 h",
            "f": 1,
            "F": 20
          }
        ]
      }
    ],
    "hints": [
      "Contá cada valor en la lista de 20 datos: el 0 aparece 3 veces, el 1 aparece 7 veces, el 2 aparece 7 veces, el 3 aparece 2 veces y el 4 aparece 1 vez.",
      "Al dividir entre n = 20, cada unidad de frecuencia equivale a 1 ÷ 20 = 0,05 (es decir, 5 %).",
      "Sumá las frecuencias de arriba hacia abajo para la columna F: 3, 10, 17, 19, 20."
    ],
    "solutionSteps": [
      "0 h: f = 3 → fr = 3/20 = 0,15 → 15 % → F₁ = 3.",
      "1 h: f = 7 → fr = 7/20 = 0,35 → 35 % → F₂ = 3 + 7 = 10.",
      "2 h: f = 7 → fr = 7/20 = 0,35 → 35 % → F₃ = 10 + 7 = 17.",
      "3 h: f = 2 → fr = 2/20 = 0,10 → 10 % → F₄ = 17 + 2 = 19.",
      "4 h: f = 1 → fr = 1/20 = 0,05 → 5 % → F₅ = 19 + 1 = 20.",
      "Verificación: Σf = 20, Σfr = 1,00, Σ% = 100 %."
    ],
    "commonErrorNote": "Cuando n = 20, verificá que la última acumulada F₅ dé exactamente 20."
  },
  {
    "id": "G2-05",
    "title": "Medio de transporte de 40 estudiantes",
    "source": {
      "kind": "guia",
      "exercise": "2.5",
      "label": "Guía 2.5"
    },
    "topic": "frecuencias",
    "level": "inicial",
    "skills": [
      "frecuencia-relativa",
      "porcentaje",
      "variable-nominal"
    ],
    "lessonId": "L04",
    "allowComparableVariant": false,
    "prompt": "En una consulta a n = 40 estudiantes sobre el medio de transporte usado para asistir a clase, se obtuvieron las siguientes frecuencias absolutas:\nColectivo (16), Moto (10), Bicicleta (8) y Caminando (6).\nCompletá las columnas de frecuencia relativa (fr) y porcentual (%), y respondé por qué no se incluye la columna de frecuencia acumulada (F).",
    "parts": [
      {
        "id": "tabla",
        "label": "1. Completá fr y % para cada medio de transporte (n = 40)",
        "type": "freq-table",
        "totalN": 40,
        "columns": [
          "fr",
          "pct"
        ],
        "rows": [
          {
            "x": "Colectivo",
            "label": "Colectivo (f = 16)",
            "f": 16
          },
          {
            "x": "Moto",
            "label": "Moto (f = 10)",
            "f": 10
          },
          {
            "x": "Bicicleta",
            "label": "Bicicleta (f = 8)",
            "f": 8
          },
          {
            "x": "Caminando",
            "label": "Caminando (f = 6)",
            "f": 6
          }
        ]
      },
      {
        "id": "por_que_sin_F",
        "label": "2. ¿Por qué no corresponde interpretar una frecuencia acumulada «menor o igual» en esta tabla?",
        "type": "select",
        "options": [
          {
            "value": "nominal-sin-orden",
            "label": "Porque el medio de transporte es una variable cualitativa nominal y sus categorías no tienen un orden natural"
          },
          {
            "value": "porque-son-40",
            "label": "Porque cuando n = 40 no se puede sumar"
          },
          {
            "value": "porque-da-100",
            "label": "Porque los porcentajes ya suman 100 %"
          }
        ],
        "expected": "nominal-sin-orden"
      }
    ],
    "hints": [
      "El total de estudiantes es n = 16 + 10 + 8 + 6 = 40.",
      "Dividí cada frecuencia absoluta entre 40: 16÷40 = 0,40; 10÷40 = 0,25; 8÷40 = 0,20; 6÷40 = 0,15.",
      "Multiplicá cada fr por 100 y comprobá que 40 % + 25 % + 20 % + 15 % = 100 %."
    ],
    "solutionSteps": [
      "Colectivo: fr = 16 ÷ 40 = 0,40 → 40 %.",
      "Moto: fr = 10 ÷ 40 = 0,25 → 25 %.",
      "Bicicleta: fr = 8 ÷ 40 = 0,20 → 20 %.",
      "Caminando: fr = 6 ÷ 40 = 0,15 → 15 %.",
      "Comprobación: 40 % + 25 % + 20 % + 15 % = 100 %. No se interpreta F como «hasta» porque las categorías son nominales."
    ],
    "commonErrorNote": "No imponer un orden acumulado («menor o igual») a categorías nominales."
  },
  {
    "id": "G2-06",
    "title": "Tabla incompleta sobre número de hermanos (n = 30)",
    "source": {
      "kind": "guia",
      "exercise": "2.6",
      "label": "Guía 2.6"
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "frecuencia-faltante",
      "frecuencia-acumulada",
      "porcentaje"
    ],
    "lessonId": "L03",
    "allowComparableVariant": true,
    "prompt": "Se presenta la siguiente tabla incompleta sobre el número de hermanos en un curso de n = 30 alumnos:\n• x = 0 hermanos: f₁ = 6\n• x = 1 hermano: f₂ = 12\n• x = 2 hermanos: f₃ = ?\n• x = 3 hermanos: f₄ = 3\nCalculá el valor que falta en f₃, hallá la frecuencia acumulada F₃ (hasta 2 hermanos) y determiná el porcentaje de alumnos que tienen 2 o menos hermanos.",
    "parts": [
      {
        "id": "f3",
        "label": "1. Frecuencia absoluta faltante f₃ (alumnos con 2 hermanos)",
        "type": "number",
        "integerOnly": true,
        "expected": 9,
        "commonErrors": [
          {
            "value": 21,
            "message": "21 es la suma de las tres frecuencias conocidas (6 + 12 + 3). Restale 21 al total n = 30 para hallar f₃."
          }
        ]
      },
      {
        "id": "F3",
        "label": "2. Frecuencia acumulada F₃ (alumnos con 2 o menos hermanos)",
        "type": "number",
        "integerOnly": true,
        "expected": 27,
        "commonErrors": [
          {
            "value": 9,
            "message": "9 es la frecuencia simple f₃ (exactamente 2 hermanos). Para la acumulada F₃ sumá f₁ + f₂ + f₃ = 6 + 12 + 9."
          },
          {
            "value": 18,
            "message": "18 es F₂ (6 + 12). Sumale también f₃ = 9 para llegar hasta 2 hermanos."
          }
        ]
      },
      {
        "id": "pct_F3",
        "label": "3. Porcentaje de alumnos con 2 o menos hermanos (%)",
        "type": "number",
        "unit": "%",
        "expected": 90,
        "commonErrors": [
          {
            "value": 30,
            "message": "30 % es el porcentaje de quienes tienen exactamente 2 hermanos (9 de 30). Calculá el porcentaje para los 27 alumnos de 30."
          }
        ]
      }
    ],
    "hints": [
      "Todas las frecuencias absolutas deben sumar n = 30: 6 + 12 + f₃ + 3 = 30.",
      "Una vez que tenés f₃ = 9, calculá F₃ sumando las frecuencias de 0, 1 y 2 hermanos: 6 + 12 + 9.",
      "Dividí F₃ entre 30 y multiplicá por 100 para obtener el porcentaje acumulado."
    ],
    "solutionSteps": [
      "1) Suma total: 6 + 12 + f₃ + 3 = 30 → 21 + f₃ = 30 → f₃ = 30 − 21 = 9 alumnos.",
      "2) Frecuencia acumulada hasta 2 hermanos: F₃ = 6 + 12 + 9 = 27 alumnos.",
      "3) Porcentaje acumulado: (27 ÷ 30) × 100 = 0,90 × 100 = 90 % (el 90 % del curso tiene 2 o menos hermanos)."
    ],
    "commonErrorNote": "Comprobá que si 27 de 30 tienen 2 o menos hermanos y los otros 3 tienen 3 hermanos, 27 + 3 = 30 (90 % + 10 % = 100 %)."
  },
  {
    "id": "G2-07",
    "title": "Porcentaje de rendimiento «Bueno o superior»",
    "source": {
      "kind": "guia",
      "exercise": "2.7",
      "label": "Guía 2.7"
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "cualitativa-ordinal",
      "porcentaje",
      "acumulacion-ordinal"
    ],
    "lessonId": "L05",
    "allowComparableVariant": false,
    "prompt": "En una evaluación de n = 50 alumnos, los resultados según la escala ordenada (Insuficiente < Regular < Bueno < Sobresaliente) fueron: 15 obtuvieron «Sobresaliente», 20 «Bueno», 10 «Regular» y 5 «Insuficiente». ¿Cuántos estudiantes obtuvieron un rendimiento de «Bueno» o superior y qué porcentaje del total representan?",
    "parts": [
      {
        "id": "cant",
        "label": "1. Cantidad de estudiantes con rendimiento «Bueno» o «Sobresaliente»",
        "type": "number",
        "integerOnly": true,
        "expected": 35,
        "commonErrors": [
          {
            "value": 20,
            "message": "20 son solo quienes obtuvieron «Bueno». Como pide «Bueno o superior», sumá también los 15 de «Sobresaliente»."
          },
          {
            "value": 15,
            "message": "15 son solo los de «Sobresaliente». Incluí también a los 20 que obtuvieron «Bueno»."
          }
        ]
      },
      {
        "id": "pct",
        "label": "2. Porcentaje del total de 50 alumnos (%)",
        "type": "number",
        "unit": "%",
        "expected": 70,
        "commonErrors": [
          {
            "value": 35,
            "message": "35 es la cantidad de alumnos sobre un total de 50. Para pasar a porcentaje (sobre 100), hacé (35 ÷ 50) × 100."
          }
        ]
      }
    ],
    "hints": [
      "En la jerarquía de calificaciones, «Bueno o superior» abarca dos categorías: «Bueno» y «Sobresaliente».",
      "Sumá las frecuencias de esas dos categorías: 20 + 15 = 35 alumnos.",
      "Calculá qué porcentaje representa 35 sobre un total de n = 50 alumnos: (35 ÷ 50) × 100."
    ],
    "solutionSteps": [
      "Estudiantes con «Bueno» o «Sobresaliente»: 20 + 15 = 35 alumnos.",
      "Porcentaje sobre el total (n = 50): (35 ÷ 50) × 100 = 0,70 × 100 = 70 %."
    ],
    "commonErrorNote": "Cuando n = 50, cada alumno representa 2 % (no 1 %): 35 alumnos equivalen al 70 %."
  },
  {
    "id": "G3-01",
    "title": "Gráfico de barras para colores de remera de viaje",
    "source": {
      "kind": "guia",
      "exercise": "3.1",
      "label": "Guía 3.1"
    },
    "topic": "barras",
    "level": "inicial",
    "skills": [
      "construir-barras",
      "elegir-escala"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Un grupo de 30 estudiantes votó por el color de su remera: Azul (12 votos), Rojo (8 votos), Verde (6 votos) y Amarillo (4 votos). Elegí una escala uniforme válida para el eje vertical (Eje Y) e indicá la altura de cada barra.",
    "parts": [
      {
        "id": "constructor",
        "label": "1. Elegí cuántas unidades vale cada cuadrito (por ejemplo, 1 o 2 votos por cuadrito) y completá los votos que alcanza cada barra",
        "type": "bar-builder",
        "unit": "votos",
        "inputMode": "value",
        "maxGridCells": 15,
        "validScaleSteps": [
          1,
          2
        ],
        "bars": [
          {
            "key": "azul",
            "label": "Azul",
            "value": 12
          },
          {
            "key": "rojo",
            "label": "Rojo",
            "value": 8
          },
          {
            "key": "verde",
            "label": "Verde",
            "value": 6
          },
          {
            "key": "amarillo",
            "label": "Amarillo",
            "value": 4
          }
        ]
      },
      {
        "id": "cuadritos_azul",
        "label": "2. Si en tu hoja cuadriculada elegís la escala 1 cuadrito = 2 votos, ¿cuántos cuadritos de alto mide la barra de «Azul» (12 votos)?",
        "type": "number",
        "expected": 6
      }
    ],
    "hints": [
      "La mayor frecuencia es 12 votos (Azul). En una hoja con 15 cuadritos entran tanto la escala de 1 voto por cuadrito (12 cuadritos) como la de 2 votos por cuadrito (6 cuadritos).",
      "Cada barra debe subir hasta su frecuencia: Azul = 12, Rojo = 8, Verde = 6, Amarillo = 4.",
      "Si cada cuadrito vale 2 votos, para llegar a 12 votos necesitás 12 ÷ 2 = 6 cuadritos."
    ],
    "solutionSteps": [
      "Eje X (horizontal): colocamos las 4 categorías (Azul, Rojo, Verde, Amarillo) usando 2 cuadritos de ancho por barra y 1 cuadrito libre de separación.",
      "Eje Y (vertical): graduamos desde 0 con escala uniforme, por ejemplo de 2 en 2 (0, 2, 4, 6, 8, 10, 12 votos), donde 1 cuadrito = 2 votos (o de 1 en 1 si disponemos de 12 cuadritos).",
      "Con 1 cuadrito = 2 votos, las barras miden: Azul = 6 cuadritos (12 votos), Rojo = 4 cuadritos (8 votos), Verde = 3 cuadritos (6 votos) y Amarillo = 2 cuadritos (4 votos)."
    ],
    "commonErrorNote": "No existe una única escala correcta mientras empiece en 0, avance en pasos iguales y entre en el espacio disponible."
  },
  {
    "id": "G3-02",
    "title": "Gráfico de barras de faltas mensuales",
    "source": {
      "kind": "guia",
      "exercise": "3.2",
      "label": "Guía 3.2",
      "adaptationNote": "Provee la tabla completa en el enunciado para que sea autónomo respecto del Ejercicio 2.1."
    },
    "topic": "barras",
    "level": "inicial",
    "skills": [
      "construir-barras",
      "rotular-ejes"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Con los datos de faltas mensuales de 15 alumnos (0 faltas: 5 alumnos; 1 falta: 6 alumnos; 2 faltas: 3 alumnos; 3 faltas: 1 alumno), construí el gráfico de barras e identificá qué representa cada eje.",
    "parts": [
      {
        "id": "ejes",
        "label": "1. ¿Qué debe ubicarse en el eje horizontal (X) y qué en el eje vertical (Y)?",
        "type": "select",
        "options": [
          {
            "value": "x_faltas_y_alumnos",
            "label": "Eje X: Cantidad de faltas (0, 1, 2, 3) | Eje Y: Cantidad de alumnos (frecuencia absoluta)"
          },
          {
            "value": "x_alumnos_y_faltas",
            "label": "Eje X: Cantidad de alumnos (5, 6, 3, 1) | Eje Y: Cantidad de faltas"
          },
          {
            "value": "x_acumulada",
            "label": "Eje X: Frecuencia acumulada (5, 11, 14, 15) | Eje Y: Porcentaje"
          }
        ],
        "expected": "x_faltas_y_alumnos"
      },
      {
        "id": "constructor",
        "label": "2. Configurá la escala (por ejemplo, 1 cuadrito = 1 alumno) y la altura de cada barra",
        "type": "bar-builder",
        "unit": "alumnos",
        "inputMode": "value",
        "maxGridCells": 12,
        "validScaleSteps": [
          1,
          2
        ],
        "bars": [
          {
            "key": "f0",
            "label": "0 faltas",
            "value": 5
          },
          {
            "key": "f1",
            "label": "1 falta",
            "value": 6
          },
          {
            "key": "f2",
            "label": "2 faltas",
            "value": 3
          },
          {
            "key": "f3",
            "label": "3 faltas",
            "value": 1
          }
        ]
      }
    ],
    "hints": [
      "Los valores observados de la variable (0, 1, 2 y 3 faltas) van en la base horizontal (Eje X).",
      "La cantidad de veces que se repite cada valor (5, 6, 3 y 1 alumnos) da la altura vertical en el Eje Y.",
      "Como la frecuencia máxima es 6, elegir 1 cuadrito = 1 alumno permite dibujar alturas exactas de 5, 6, 3 y 1 cuadritos."
    ],
    "solutionSteps": [
      "Eje horizontal (X): valores de la variable «Cantidad de faltas» (0, 1, 2, 3), con barras de 2 cuadritos de ancho separadas por 1 cuadrito.",
      "Eje vertical (Y): «Cantidad de alumnos» graduado de 1 en 1 desde 0 hasta 6.",
      "Alturas de las barras: 0 faltas → 5 cuadritos; 1 falta → 6 cuadritos; 2 faltas → 3 cuadritos; 3 faltas → 1 cuadrito."
    ],
    "commonErrorNote": "Incluso cuando el valor de la variable es 0 («0 faltas»), tiene su propia barra cuya altura es su frecuencia (5 alumnos)."
  },
  {
    "id": "G3-03",
    "title": "Detección y prevención de dos errores habituales en gráficos de barras",
    "source": {
      "kind": "guia",
      "exercise": "3.3",
      "label": "Guía 3.3"
    },
    "topic": "barras",
    "level": "intermedio",
    "skills": [
      "detectar-errores-graficos",
      "justificar-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Un compañero dibujó un gráfico de barras en su carpeta cometiendo dos errores muy comunes: (1) pegó todas las barras sin dejar espacio entre ellas y (2) en el eje vertical escribió las marcas «0, 1, 3, 6, 12» a un cuadrito de distancia cada una. Identificá por qué son incorrectos y explicá cómo prevenirlos.",
    "parts": [
      {
        "id": "error_escala",
        "label": "1. ¿Por qué es un error matemático poner «0, 1, 3, 6, 12» a un cuadrito de distancia cada uno en el Eje Y?",
        "type": "select",
        "options": [
          {
            "value": "deforma-proporcion",
            "label": "Porque rompe la escala uniforme: un mismo cuadrito vale primero 1 unidad, luego 2, luego 3 y luego 6, deformando la proporcionalidad de las barras"
          },
          {
            "value": "sobran-numeros",
            "label": "Porque no se puede escribir el número 0 en el eje vertical"
          },
          {
            "value": "solo-impares",
            "label": "Porque en el eje Y nunca pueden ir números impares"
          }
        ],
        "expected": "deforma-proporcion"
      },
      {
        "id": "error_pegadas",
        "label": "2. ¿Cómo se previene el error de pegar las barras o hacerlas de distinto grosor?",
        "type": "select",
        "options": [
          {
            "value": "ancho-y-separacion",
            "label": "Usando un ancho constante (por ejemplo, 2 cuadritos por barra) y una separación uniforme (por ejemplo, 1 cuadrito libre) entre categorías o valores discretos"
          },
          {
            "value": "unir-con-linea",
            "label": "Uniendo todas las barras con una línea diagonal"
          }
        ],
        "expected": "ancho-y-separacion"
      },
      {
        "id": "explicacion",
        "label": "3. Escribí con tus palabras dos recomendaciones para revisar tu gráfico antes de entregar el examen",
        "type": "rubric",
        "placeholder": "Anotá cómo controlás la separación/ancho de las barras y la graduación del eje vertical...",
        "criteria": [
          "Indiqué dejar una separación constante (como 1 cuadrito) y mantener el mismo ancho en todas las barras.",
          "Indiqué graduar el eje Y desde 0 con intervalos numéricos iguales (por ejemplo, de 1 en 1 o de 2 en 2), sin copiar solo las frecuencias de la tabla."
        ],
        "modelAnswer": "1) Dejar 1 cuadrito constante de separación entre barras y mantener el mismo ancho (2 cuadritos). 2) Graduar el eje vertical desde 0 con intervalos iguales (como 0, 2, 4, 6, 8...), sin alterar las distancias numéricas."
      }
    ],
    "hints": [
      "En un eje graduado, la misma distancia en cuadritos debe representar siempre la misma cantidad de unidades.",
      "Si ponés solo los valores que aparecen en la tabla a igual distancia, una barra de 12 parece apenas más alta que una de 6.",
      "Para datos categóricos o discretos independientes, las barras llevan separación constante."
    ],
    "solutionSteps": [
      "Error 1: Dibujar las barras pegadas o de distinto ancho. Prevención: asignar 2 cuadritos de ancho a cada barra y 1 cuadrito libre de separación.",
      "Error 2: Alterar la escala numérica del eje Y ubicando números a saltos desiguales. Prevención: graduar el eje desde 0 con pasos constantes (por ejemplo, 0, 2, 4, 6, 8, 10, 12)."
    ],
    "commonErrorNote": "Nunca copies la columna f directamente como marcas del eje Y: graduá primero la recta numérica con pasos iguales."
  },
  {
    "id": "G3-04",
    "title": "Puntos anotados por partido en el torneo de básquetbol",
    "source": {
      "kind": "guia",
      "exercise": "3.4",
      "label": "Guía 3.4"
    },
    "topic": "barras",
    "level": "intermedio",
    "skills": [
      "rotular-ejes",
      "elegir-escala",
      "construir-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "En un torneo interclases de básquetbol (ejemplo ficticio), los puntos anotados por 2.º A en 5 partidos fueron: Partido 1 (12 pts), Partido 2 (20 pts), Partido 3 (16 pts), Partido 4 (24 pts) y Partido 5 (8 pts). Elegí el rótulo correcto del eje vertical y calculá la altura en cuadritos de cada barra usando la escala sugerida de 1 cuadrito = 4 puntos.",
    "parts": [
      {
        "id": "rotulo_y",
        "label": "1. ¿Cuál es el rótulo correcto para el eje vertical (Eje Y) en este gráfico?",
        "type": "select",
        "options": [
          {
            "value": "puntos",
            "label": "Puntos anotados (porque la altura de cada barra mide los tantos convertidos en ese partido)"
          },
          {
            "value": "frecuencia_partidos",
            "label": "Cantidad de partidos (frecuencia de partidos)"
          },
          {
            "value": "porcentaje",
            "label": "Porcentaje de alumnos"
          }
        ],
        "expected": "puntos",
        "optionFeedback": {
          "puntos": "¡Exacto! Acá no estamos contando cuántos partidos tuvieron cierto puntaje, sino mostrando los puntos anotados en cada partido.",
          "frecuencia_partidos": "Atención: cada barra es un partido y su altura representa los puntos anotados (12, 20, 16, 24, 8 pts).",
          "porcentaje": "Los datos están expresados en puntos anotados por partido."
        }
      },
      {
        "id": "constructor_cuadritos",
        "label": "2. Con la escala 1 cuadrito = 4 puntos, ingresá cuántos cuadritos de altura tendrá cada una de las 5 barras",
        "type": "bar-builder",
        "unit": "cuadritos",
        "inputMode": "cells",
        "maxGridCells": 10,
        "validScaleSteps": [
          4
        ],
        "bars": [
          {
            "key": "p1",
            "label": "Partido 1 (12 pts)",
            "value": 12
          },
          {
            "key": "p2",
            "label": "Partido 2 (20 pts)",
            "value": 20
          },
          {
            "key": "p3",
            "label": "Partido 3 (16 pts)",
            "value": 16
          },
          {
            "key": "p4",
            "label": "Partido 4 (24 pts)",
            "value": 24
          },
          {
            "key": "p5",
            "label": "Partido 5 (8 pts)",
            "value": 8
          }
        ]
      }
    ],
    "hints": [
      "Observá que todos los puntajes (12, 20, 16, 24 y 8) son múltiplos de 4.",
      "Si 1 cuadrito representa 4 puntos, el eje Y se gradúa: 0, 4, 8, 12, 16, 20, 24 puntos.",
      "Para saber cuántos cuadritos sube cada barra, dividí los puntos del partido entre 4."
    ],
    "solutionSteps": [
      "Rótulo del eje Y: «Puntos anotados» (y en el eje X: «Partido 1 a Partido 5»).",
      "Escala sugerida en eje Y: 1 cuadrito = 4 puntos (marcas en 0, 4, 8, 12, 16, 20, 24).",
      "Alturas en cuadritos: Partido 1 = 12 ÷ 4 = 3 cuadritos; Partido 2 = 20 ÷ 4 = 5 cuadritos; Partido 3 = 16 ÷ 4 = 4 cuadritos; Partido 4 = 24 ÷ 4 = 6 cuadritos; Partido 5 = 8 ÷ 4 = 2 cuadritos."
    ],
    "commonErrorNote": "Rotular siempre la magnitud real representada en el eje vertical («Puntos anotados» en un gráfico de puntos por partido)."
  },
  {
    "id": "G3-05",
    "title": "Proporción y altura de la barra «Cumbia» en géneros musicales",
    "source": {
      "kind": "guia",
      "exercise": "3.5",
      "label": "Guía 3.5 (precisado)",
      "adaptationNote": "Aclara la diferencia entre alcanzar el valor 40 % en un eje porcentual y ocupar el 40 % de la altura visible si el eje termina en otra cifra."
    },
    "topic": "barras",
    "level": "intermedio",
    "skills": [
      "porcentaje",
      "lectura-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "En un gráfico de barras sobre géneros musicales preferidos por n = 40 alumnos, la barra de «Cumbia» alcanza una frecuencia absoluta de 16 alumnos. Calculá qué porcentaje del total representa esa barra y analizá cómo se lee su altura en un eje porcentual.",
    "parts": [
      {
        "id": "pct_cumbia",
        "label": "1. ¿Qué porcentaje del total de 40 alumnos representa la barra de «Cumbia» (f = 16)?",
        "type": "number",
        "unit": "%",
        "expected": 40,
        "commonErrors": [
          {
            "value": 16,
            "message": "16 es la frecuencia absoluta sobre 40 alumnos. Para hallar el porcentaje hacé (16 ÷ 40) × 100."
          }
        ]
      },
      {
        "id": "lectura_eje",
        "label": "2. Si construimos el gráfico con un eje vertical en porcentajes (%), ¿hasta qué marca del eje llega la barra de Cumbia?",
        "type": "select",
        "options": [
          {
            "value": "marca_40",
            "label": "Llega hasta la marca de 40 % en el eje vertical (que sería el 40 % de un eje que llegara hasta el 100 % del curso, aunque el gráfico suele graduarse hasta un poco más de la categoría máxima)"
          },
          {
            "value": "marca_16",
            "label": "Llega hasta 16 % porque 16 alumnos es igual a 16 %"
          }
        ],
        "expected": "marca_40"
      }
    ],
    "hints": [
      "Dividí la frecuencia de Cumbia (16) entre el total del curso (40) y multiplicá por 100.",
      "16 ÷ 40 = 0,40 → 0,40 × 100 = 40 %.",
      "En un eje graduado en porcentajes, la barra sube hasta la línea del 40 %."
    ],
    "solutionSteps": [
      "Cálculo del porcentaje: (16 ÷ 40) × 100 = 0,40 × 100 = 40 %.",
      "Interpretación gráfica: en un eje vertical porcentual, la barra llega a la marca de 40 % (representa dos quintas partes, es decir el 40 %, del total de 40 estudiantes)."
    ],
    "commonErrorNote": "La altura de una barra se lee siempre contra la escala graduada del eje Y, no a ojo según dónde termine el recuadro."
  },
  {
    "id": "G3-06",
    "title": "¿Por qué no unir con líneas las categorías de un gráfico de barras?",
    "source": {
      "kind": "guia",
      "exercise": "3.6",
      "label": "Guía 3.6 (precisado)",
      "adaptationNote": "Explica por qué unir categorías nominales sugiere un orden o transición inexistente, sin afirmar que un gráfico de líneas jamás pueda representar conteos discretos a lo largo del tiempo."
    },
    "topic": "barras",
    "level": "desafio",
    "skills": [
      "concepto-barras",
      "justificar-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Explicá conceptualmente por qué en una distribución de frecuencias de una variable cualitativa nominal (como deporte o transporte preferido) dibujamos barras separadas y no unimos las categorías con una línea continua.",
    "parts": [
      {
        "id": "motivo_principal",
        "label": "1. ¿Qué idea falsa transmitiría unir con una línea categorías nominales como «Colectivo, Moto, Bicicleta, Caminando»?",
        "type": "select",
        "options": [
          {
            "value": "orden_transicion",
            "label": "Sugeriría un orden natural o una variación continua entre una palabra y otra, cuando son categorías independientes cuyo orden en el eje X es arbitrario"
          },
          {
            "value": "suma_distinta",
            "label": "Haría que la suma de las frecuencias absolutas deje de dar n"
          }
        ],
        "expected": "orden_transicion"
      },
      {
        "id": "aclaracion_lineas",
        "label": "2. ¿En qué caso sí tiene sentido usar segmentos o líneas para conectar datos?",
        "type": "select",
        "options": [
          {
            "value": "serie_temporal",
            "label": "Cuando el eje horizontal tiene una secuencia temporal u orden real donde interesa seguir la tendencia o evolución de un período al siguiente"
          },
          {
            "value": "nunca_jamas",
            "label": "En ningún caso de la estadística se usan gráficos de líneas"
          }
        ],
        "expected": "serie_temporal"
      },
      {
        "id": "explicacion",
        "label": "3. Redactá tu explicación y autoevaluala con la rúbrica",
        "type": "rubric",
        "placeholder": "Explicá por qué las barras van separadas y qué representa esa separación...",
        "criteria": [
          "Expliqué que las barras separadas muestran categorías o valores discretos independientes.",
          "Mencioné que unir categorías nominales con una línea sugeriría una transición o tendencia continua inexistente entre ellas."
        ],
        "modelAnswer": "Las barras se dibujan separadas porque representan categorías o valores discretos independientes. Unir categorías nominales con una línea continua sugeriría una transición intermedia o un orden natural que no existe entre opciones como colores o medios de transporte."
      }
    ],
    "hints": [
      "Pensá qué hay en el espacio entre la barra de «Colectivo» y la barra de «Moto»: ¿existe un valor numérico intermedio «medio colectivo y media moto»?",
      "No existe transición intermedia ni orden obligatorio entre categorías nominales.",
      "Por eso las barras separadas indican visualmente que cada categoría se cuenta por separado."
    ],
    "solutionSteps": [
      "En una distribución de categorías nominales o valores discretos, cada barra representa el conteo de un grupo bien diferenciado.",
      "Unir las barras con líneas continuas sugeriría la existencia de valores intermedios o una evolución de una categoría a la siguiente.",
      "Nota: los gráficos de líneas se reservan para mostrar tendencias a lo largo de un eje ordenado (típicamente el tiempo)."
    ],
    "commonErrorNote": "La separación entre barras cumple una función matemática: indicar que se trata de categorías o valores discretos separados."
  },
  {
    "id": "G3-07",
    "title": "Elección de escala para frecuencia máxima 25 en 15 cuadritos",
    "source": {
      "kind": "guia",
      "exercise": "3.7",
      "label": "Guía 3.7 (completado)",
      "adaptationNote": "Incluye explícitamente el cálculo de la altura de la barra máxima de 25 (12,5 cuadritos con escala de 2 por cuadrito), que faltaba en el solucionario original, además de las barras de 15 y 20."
    },
    "topic": "barras",
    "level": "desafio",
    "skills": [
      "elegir-escala",
      "proporcionalidad-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "En un examen debés elaborar un gráfico de barras donde hay tres barras de frecuencias 15, 20 y 25 (la máxima es f = 25), pero tu hoja cuadriculada solo dispone de 15 cuadritos de altura vertical útil. Usando la escala graduada de 1 cuadrito = 2 unidades (0, 2, 4, 6, ..., 26), calculá cuántos cuadritos de altura mide cada una de las tres barras.",
    "parts": [
      {
        "id": "altura_15",
        "label": "1. Con escala 1 cuadrito = 2 unidades, ¿cuántos cuadritos de alto mide la barra de frecuencia 15?",
        "type": "number",
        "expected": 7.5
      },
      {
        "id": "altura_20",
        "label": "2. Con esa misma escala, ¿cuántos cuadritos de alto mide la barra de frecuencia 20?",
        "type": "number",
        "expected": 10
      },
      {
        "id": "altura_25",
        "label": "3. ¿Y cuántos cuadritos de alto mide la barra máxima de frecuencia 25?",
        "type": "number",
        "expected": 12.5,
        "commonErrors": [
          {
            "value": 13,
            "message": "13 cuadritos corresponde a la marca de 26 unidades (26 ÷ 2 = 13). Para representar 25 unidades hacé 25 ÷ 2 = 12,5 cuadritos (a mitad de camino entre la línea 12 y la línea 13)."
          },
          {
            "value": 25,
            "message": "25 es la frecuencia en unidades, pero como cada cuadrito vale 2 unidades, dividí 25 ÷ 2 para hallar los cuadritos."
          }
        ]
      }
    ],
    "hints": [
      "Si 1 cuadrito representa 2 unidades, para saber cuántos cuadritos ocupa cualquier frecuencia simplemente dividís esa frecuencia por 2.",
      "Cuando la frecuencia es par (como 20), cae justo sobre una línea de la cuadrícula: 20 ÷ 2 = 10 cuadritos.",
      "Cuando la frecuencia es impar (como 15 o 25), termina en «,5» cuadritos: justo a la mitad entre dos líneas consecutivas."
    ],
    "solutionSteps": [
      "Con 15 cuadritos disponibles, una escala de 1 cuadrito = 1 unidad no entra (necesitaría 25 cuadritos). Elegimos 1 cuadrito = 2 unidades, graduando el eje Y de 2 en 2 hasta 26 (13 cuadritos de alto).",
      "Barra de frecuencia 15: 15 ÷ 2 = 7,5 cuadritos (mitad entre los cuadritos 7 y 8).",
      "Barra de frecuencia 20: 20 ÷ 2 = 10 cuadritos exactos.",
      "Barra de frecuencia 25 (máxima): 25 ÷ 2 = 12,5 cuadritos (mitad entre los cuadritos 12 y 13)."
    ],
    "commonErrorNote": "También sería matemáticamente válida una escala de 1 cuadrito = 5 unidades (donde 15, 20 y 25 medirían 3, 4 y 5 cuadritos), aunque usar 2 unidades por cuadrito aprovecha mejor la altura de la hoja."
  },
  {
    "id": "G4-01",
    "title": "Media, mediana y moda de las edades de 10 estudiantes",
    "source": {
      "kind": "guia",
      "exercise": "4.1",
      "label": "Guía 4.1"
    },
    "topic": "medidas",
    "level": "inicial",
    "skills": [
      "media",
      "mediana-par",
      "moda"
    ],
    "lessonId": "L07",
    "allowComparableVariant": true,
    "prompt": "Dado el siguiente conjunto de edades (en años) de n = 10 estudiantes que participan de un taller deportivo (ejemplo de la guía):\n12, 13, 13, 14, 14, 14, 15, 15, 16, 18.\nCalculá la suma total, la media aritmética, la mediana (promediando los dos datos centrales al ser n = 10 par) y la moda.",
    "dataset": [
      12,
      13,
      13,
      14,
      14,
      14,
      15,
      15,
      16,
      18
    ],
    "parts": [
      {
        "id": "suma",
        "label": "1. Suma total de las 10 edades",
        "type": "number",
        "integerOnly": true,
        "expected": 144
      },
      {
        "id": "media",
        "label": "2. Media aritmética (x̄) en años",
        "type": "number",
        "unit": "años",
        "expected": 14.4,
        "roundingDecimals": 2,
        "commonErrors": [
          {
            "value": 14,
            "message": "14 es la mediana y la moda, pero la media es 144 ÷ 10 = 14,4 años. No redondees a entero."
          },
          {
            "value": 24,
            "message": "Dividiste por la cantidad de valores distintos (6) en lugar de dividir entre los n = 10 estudiantes."
          }
        ]
      },
      {
        "id": "mediana",
        "label": "3. Mediana (Me) en años (promedio de las posiciones 5 y 6)",
        "type": "number",
        "unit": "años",
        "expected": 14,
        "commonErrors": [
          {
            "value": 5.5,
            "message": "5,5 es la posición central ((10 + 1) ÷ 2 = 5,5), no el valor de la edad. Buscá qué edades están en las posiciones 5 y 6 (ambas son 14)."
          }
        ]
      },
      {
        "id": "moda",
        "label": "4. Moda (Mo) en años",
        "type": "number-set",
        "expected": [
          14
        ],
        "maxFrequency": 3
      }
    ],
    "hints": [
      "Sumá los 10 números (incluyendo los repetidos): 12 + 13 + 13 + 14 + 14 + 14 + 15 + 15 + 16 + 18 = 144.",
      "Para la media dividí 144 entre 10. Para la mediana, como la lista ya está ordenada y n = 10 es par, fijate qué valores ocupan los lugares 5.º y 6.º.",
      "Para la moda, buscá cuál es la edad que más veces se repite en la lista."
    ],
    "solutionSteps": [
      "Datos ordenados (n = 10): 12, 13, 13, 14, 14, 14, 15, 15, 16, 18.",
      "Suma total: 144 años → Media: x̄ = 144 ÷ 10 = 14,4 años.",
      "Mediana: como n = 10 es par, posición = (10 + 1) ÷ 2 = 5,5. Promediamos los datos en posición 5 (14) y posición 6 (14): Me = (14 + 14) ÷ 2 = 14 años.",
      "Moda: el valor 14 años aparece 3 veces (mayor frecuencia) → Mo = 14 años."
    ],
    "commonErrorNote": "No confundir la posición 5,5 con el valor de la mediana (14 años), ni la frecuencia máxima (3) con la moda (14 años)."
  },
  {
    "id": "G4-02",
    "title": "Marca de zapatillas preferida por 12 adolescentes",
    "source": {
      "kind": "guia",
      "exercise": "4.2",
      "label": "Guía 4.2"
    },
    "topic": "medidas",
    "level": "inicial",
    "skills": [
      "moda-categorica",
      "pertinencia-medidas"
    ],
    "lessonId": "L09",
    "allowComparableVariant": false,
    "prompt": "Se consultó a n = 12 adolescentes sobre su marca de zapatillas preferida (ejemplo de la guía):\nNike, Adidas, Puma, Nike, Topper, Nike, Adidas, Puma, Nike, Topper, Adidas, Nike.\nRespondé si se pueden calcular la media y la mediana para esta variable, justificá por qué y determiná la medida correspondiente.",
    "dataset": [
      "Nike",
      "Adidas",
      "Puma",
      "Nike",
      "Topper",
      "Nike",
      "Adidas",
      "Puma",
      "Nike",
      "Topper",
      "Adidas",
      "Nike"
    ],
    "parts": [
      {
        "id": "pertinencia",
        "label": "1. ¿Se pueden calcular la media y la mediana para «marca de zapatillas»? ¿Por qué?",
        "type": "select",
        "options": [
          {
            "value": "no_nominal",
            "label": "No, porque es una variable cualitativa nominal: no se pueden sumar nombres (sin media) ni tienen un orden jerárquico natural (sin mediana)"
          },
          {
            "value": "si_frecuencias",
            "label": "Sí, promediando cuántas letras tiene cada marca"
          },
          {
            "value": "si_orden_alfabetico",
            "label": "Sí, ordenando alfabéticamente y tomando la marca del medio como mediana"
          }
        ],
        "expected": "no_nominal",
        "optionFeedback": {
          "no_nominal": "¡Exacto! En variables cualitativas nominales la única medida de tendencia central aplicable es la moda.",
          "si_frecuencias": "Eso mediría el largo de las palabras, no la preferencia de marca.",
          "si_orden_alfabetico": "El orden alfabético es una convención de diccionario, no una jerarquía de magnitud: no define una mediana estadística."
        }
      },
      {
        "id": "moda_marca",
        "label": "2. ¿Cuál es la moda (Mo) de esta distribución?",
        "type": "select",
        "options": [
          {
            "value": "Nike",
            "label": "Nike (es la categoría más frecuente, elegida 5 veces)"
          },
          {
            "value": "5",
            "label": "5 (porque es el número más alto)"
          },
          {
            "value": "Adidas",
            "label": "Adidas (elegida 3 veces)"
          }
        ],
        "expected": "Nike",
        "optionFeedback": {
          "5": "Cuidado: 5 es la frecuencia absoluta máxima (cuántas veces se eligió), pero la moda es la categoría: «Nike».",
          "Nike": "¡Correcto! Nike se repite 5 veces (frente a 3 de Adidas, 2 de Puma y 2 de Topper), por lo que Mo = Nike.",
          "Adidas": "Contá de nuevo: Adidas aparece 3 veces, pero Nike aparece 5 veces."
        }
      },
      {
        "id": "frec_nike",
        "label": "3. ¿Cuál es la frecuencia absoluta de «Nike»?",
        "type": "number",
        "integerOnly": true,
        "expected": 5
      }
    ],
    "hints": [
      "Contá cuántas veces aparece cada marca en los 12 datos: Nike, Adidas, Puma y Topper.",
      "Preguntate si se pueden sumar palabras para sacar un promedio o si hay una marca «mayor» que otra.",
      "Recordá que la moda es el nombre de la marca más elegida, no cuántas veces salió."
    ],
    "solutionSteps": [
      "Conteo de frecuencias (n = 12): Nike = 5, Adidas = 3, Puma = 2, Topper = 2.",
      "No es posible calcular la media ni la mediana porque la variable es Cualitativa Nominal (no admite suma aritmética ni orden jerárquico).",
      "La única medida aplicable es la Moda: Mo = Nike (con frecuencia absoluta f = 5)."
    ],
    "commonErrorNote": "En una variable cualitativa nominal, la moda es el nombre de la categoría más repetida («Nike»), nunca el número 5."
  },
  {
    "id": "G4-03",
    "title": "Salarios en un comercio y efecto de un valor extremo",
    "source": {
      "kind": "guia",
      "exercise": "4.3",
      "label": "Guía 4.3"
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "media",
      "mediana-impar",
      "eleccion-medida",
      "valores-extremos"
    ],
    "lessonId": "L10",
    "allowComparableVariant": false,
    "prompt": "En un comercio (datos ficticios del ejercicio), 4 empleados cobran un salario mensual de $300.000 cada uno y el gerente cobra $2.800.000 (total n = 5 personas).\n1) Calculá la media y la mediana de los 5 sueldos.\n2) Explicá cuál de las dos medidas representa mejor la situación salarial típica de los trabajadores y por qué.",
    "dataset": [
      300000,
      300000,
      300000,
      300000,
      2800000
    ],
    "parts": [
      {
        "id": "media",
        "label": "1. Media aritmética (x̄) de los 5 sueldos en pesos (podés escribir 800000 o 800.000)",
        "type": "number",
        "unit": "$",
        "allowThousandsDot": true,
        "expected": 800000,
        "commonErrors": [
          {
            "value": 1550000,
            "message": "Promediaste solo $300.000 y $2.800.000 como si fueran 2 personas, pero hay 4 empleados que cobran $300.000 y 1 gerente ($4.000.000 ÷ 5)."
          }
        ]
      },
      {
        "id": "mediana",
        "label": "2. Mediana (Me) de los 5 sueldos ordenados en pesos",
        "type": "number",
        "unit": "$",
        "allowThousandsDot": true,
        "expected": 300000,
        "commonErrors": [
          {
            "value": 3,
            "message": "3 es la posición central ((5 + 1) ÷ 2 = 3), pero el sueldo que ocupa el tercer lugar es $300.000."
          }
        ]
      },
      {
        "id": "mejor_medida",
        "label": "3. ¿Cuál de las dos medidas representa de manera más fiel el sueldo típico de los trabajadores del comercio?",
        "type": "select",
        "options": [
          {
            "value": "mediana",
            "label": "La mediana ($300.000), porque el promedio ($800.000) se ve fuertemente distorsionado hacia arriba por el sueldo extremo del gerente"
          },
          {
            "value": "media",
            "label": "La media ($800.000), porque siempre que se puede calcular el promedio es la mejor medida"
          }
        ],
        "expected": "mediana"
      },
      {
        "id": "justificacion",
        "label": "4. Redactá tu conclusión y comprobá los criterios en la rúbrica",
        "type": "rubric",
        "placeholder": "Explicá cuál medida elegís y qué efecto produce el sueldo de $2.800.000 sobre la media...",
        "criteria": [
          "Indiqué que la mediana ($300.000) representa mejor a la mayoría (4 de los 5 trabajadores ganan $300.000).",
          "Expliqué que la media ($800.000) es sensible al valor extremo ($2.800.000) y no refleja lo que gana ningún empleado."
        ],
        "modelAnswer": "La mediana ($300.000) describe mucho mejor la realidad salarial típica del comercio, ya que 4 de las 5 personas cobran ese monto, mientras que la media ($800.000) queda distorsionada por el valor extremo del sueldo del gerente."
      }
    ],
    "hints": [
      "Escribí los 5 sueldos uno por uno: 300.000; 300.000; 300.000; 300.000; 2.800.000.",
      "Sumá los 5 sueldos (da 4.000.000) y dividí entre 5 para la media. Para la mediana, mirá cuál es el 3.º sueldo ordenado.",
      "Compará $800.000 y $300.000 con lo que realmente cobran los 4 empleados."
    ],
    "solutionSteps": [
      "Datos ordenados (n = 5): $300.000, $300.000, $300.000, $300.000, $2.800.000.",
      "Media: suma = $4.000.000 → x̄ = 4.000.000 ÷ 5 = $800.000.",
      "Mediana: posición central = (5 + 1) ÷ 2 = 3 → el tercer dato ordenado es Me = $300.000.",
      "Conclusión: la mediana ($300.000) es más representativa porque la media ($800.000) se ve arrastrada por el valor atípico/extremo del gerente."
    ],
    "commonErrorNote": "No promediar solo 300.000 y 2.800.000: hay cuatro sueldos de $300.000 que deben incluirse en la suma y en el orden."
  },
  {
    "id": "G4-04",
    "title": "Media y mediana de las estaturas de 8 jugadores de básquetbol",
    "source": {
      "kind": "guia",
      "exercise": "4.4",
      "label": "Guía 4.4"
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "media",
      "mediana-par"
    ],
    "lessonId": "L08",
    "allowComparableVariant": true,
    "prompt": "Las estaturas expresadas en centímetros de n = 8 jugadores del equipo de básquetbol (ejemplo de la guía) son:\n162, 165, 168, 170, 172, 175, 180, 188.\nCalculá la suma total, la media aritmética (x̄) y la mediana (Me) detallando los valores centrales en las posiciones 4 y 5.",
    "dataset": [
      162,
      165,
      168,
      170,
      172,
      175,
      180,
      188
    ],
    "parts": [
      {
        "id": "suma",
        "label": "1. Suma de las 8 estaturas (en cm)",
        "type": "number",
        "integerOnly": true,
        "expected": 1380
      },
      {
        "id": "media",
        "label": "2. Media aritmética (x̄) en cm",
        "type": "number",
        "unit": "cm",
        "expected": 172.5,
        "roundingDecimals": 2
      },
      {
        "id": "centrales",
        "label": "3. ¿Cuáles son los dos valores que ocupan las posiciones centrales 4.ª y 5.ª?",
        "type": "select",
        "options": [
          {
            "value": "170_172",
            "label": "170 cm (posición 4) y 172 cm (posición 5)"
          },
          {
            "value": "168_170",
            "label": "168 cm (posición 3) y 170 cm (posición 4)"
          },
          {
            "value": "172_175",
            "label": "172 cm (posición 5) y 175 cm (posición 6)"
          }
        ],
        "expected": "170_172"
      },
      {
        "id": "mediana",
        "label": "4. Mediana (Me) en cm (semisuma de los dos valores centrales)",
        "type": "number",
        "unit": "cm",
        "expected": 171,
        "commonErrors": [
          {
            "value": 4.5,
            "message": "4,5 indica que el centro está entre las posiciones 4 y 5. Promediá las estaturas que están en esas posiciones: (170 + 172) ÷ 2."
          }
        ]
      }
    ],
    "hints": [
      "Sumá las 8 estaturas: 162 + 165 + 168 + 170 + 172 + 175 + 180 + 188 = 1380 cm.",
      "Dividí 1380 entre 8 para hallar la media.",
      "Como los 8 datos ya están ordenados de menor a mayor, tomá el 4.º dato (170) y el 5.º dato (172) y calculá (170 + 172) ÷ 2."
    ],
    "solutionSteps": [
      "Suma de los 8 datos: 1380 cm.",
      "Media aritmética: x̄ = 1380 ÷ 8 = 172,5 cm.",
      "Mediana (n = 8 par): posición = (8 + 1) ÷ 2 = 4,5. Promediamos el 4.º dato (170 cm) y el 5.º dato (172 cm): Me = (170 + 172) ÷ 2 = 342 ÷ 2 = 171 cm."
    ],
    "commonErrorNote": "Fijate que 171 cm no figura en la lista original: con cantidad par de datos numéricos, la mediana es el punto medio entre los dos centrales."
  },
  {
    "id": "G4-05",
    "title": "Respuestas correctas de 16 alumnos en una prueba corta",
    "source": {
      "kind": "guia",
      "exercise": "4.5",
      "label": "Guía 4.5 (verificado)",
      "adaptationNote": "Verifica la suma exacta 127 y expresa la media redondeada con el signo de aproximación: 127 ÷ 16 = 7,9375 ≈ 7,94."
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "media",
      "mediana-par",
      "moda",
      "redondeo"
    ],
    "lessonId": "L07",
    "allowComparableVariant": true,
    "prompt": "En una prueba corta de 10 preguntas, el número de respuestas correctas obtenido por n = 16 alumnos fue:\n5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10.\nDeterminá la suma total, la media (redondeada a 2 decimales), la mediana, la moda y si la serie es unimodal, bimodal o amodal.",
    "dataset": [
      5,
      6,
      6,
      7,
      7,
      7,
      8,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      10
    ],
    "parts": [
      {
        "id": "suma",
        "label": "1. Suma exacta de los 16 datos",
        "type": "number",
        "integerOnly": true,
        "expected": 127,
        "commonErrors": [
          {
            "value": 128,
            "message": "Revisá la suma con cuidado: 5 + (6×2) + (7×3) + (8×4) + (9×3) + (10×3) = 5 + 12 + 21 + 32 + 27 + 30 = 127 (no 128)."
          }
        ]
      },
      {
        "id": "media",
        "label": "2. Media aritmética (x̄) redondeada a 2 decimales (o exacta 7,9375)",
        "type": "number",
        "unit": "aciertos",
        "expected": {
          "numerator": 127,
          "denominator": 16
        },
        "roundingDecimals": 2,
        "commonErrors": [
          {
            "value": 8,
            "message": "La suma es 127 (no 128) y 127 ÷ 16 = 7,9375 ≈ 7,94. Escribí el valor con dos decimales (7,94) sin redondear a 8."
          }
        ]
      },
      {
        "id": "mediana",
        "label": "3. Mediana (Me) de los 16 datos (promedio de las posiciones 8 y 9)",
        "type": "number",
        "unit": "aciertos",
        "expected": 8,
        "commonErrors": [
          {
            "value": 8.5,
            "message": "8,5 es la posición central ((16 + 1) ÷ 2 = 8,5). Mirá qué datos ocupan los lugares 8.º y 9.º: ambos valen 8."
          }
        ]
      },
      {
        "id": "moda",
        "label": "4. Moda (Mo) de la distribución",
        "type": "number-set",
        "expected": [
          8
        ],
        "maxFrequency": 4
      },
      {
        "id": "tipo_moda",
        "label": "5. Según la cantidad de modas, ¿cómo se clasifica la serie?",
        "type": "select",
        "options": [
          {
            "value": "unimodal",
            "label": "Unimodal (tiene una única moda: el valor 8 con frecuencia 4)"
          },
          {
            "value": "bimodal",
            "label": "Bimodal (dos modas empatadas)"
          },
          {
            "value": "amodal",
            "label": "Amodal (ningún valor se repite más que otros)"
          }
        ],
        "expected": "unimodal"
      }
    ],
    "hints": [
      "Podés sumar agrupando por frecuencias: 5×1 + 6×2 + 7×3 + 8×4 + 9×3 + 10×3 = 5 + 12 + 21 + 32 + 27 + 30 = 127.",
      "Dividí 127 entre 16: da 7,9375, que redondeado a dos cifras decimales es ≈ 7,94.",
      "En los 16 datos ordenados, tanto el 8.º como el 9.º dato son 8 (mediana = 8), y el 8 es el único valor que se repite 4 veces (moda = 8, unimodal)."
    ],
    "solutionSteps": [
      "Suma de las 16 observaciones: 5 + 12 + 21 + 32 + 27 + 30 = 127 aciertos.",
      "Media aritmética: x̄ = 127 ÷ 16 = 7,9375 ≈ 7,94 aciertos.",
      "Mediana (n = 16 par): posición = (16 + 1) ÷ 2 = 8,5. Los datos en las posiciones 8 y 9 son 8 y 8 → Me = (8 + 8) ÷ 2 = 8 aciertos.",
      "Moda: la mayor frecuencia absoluta es f = 4, que corresponde únicamente al valor 8 → Mo = 8 aciertos (serie unimodal)."
    ],
    "commonErrorNote": "Escribir siempre «≈ 7,94» al redondear 7,9375 a dos cifras decimales."
  },
  {
    "id": "G4-06",
    "title": "Quinta nota necesaria para alcanzar promedio 7",
    "source": {
      "kind": "guia",
      "exercise": "4.6",
      "label": "Guía 4.6"
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "media",
      "valor-faltante"
    ],
    "lessonId": "L07",
    "allowComparableVariant": false,
    "prompt": "Un estudiante obtuvo las siguientes notas en cuatro trabajos prácticos de matemática: 6, 7, 8 y 5. ¿Qué nota necesita obtener en el quinto trabajo práctico para lograr un promedio final exacto de 7,00 entre los 5 trabajos?",
    "dataset": [
      6,
      7,
      8,
      5
    ],
    "parts": [
      {
        "id": "suma_actual",
        "label": "1. ¿Cuánto suman las 4 notas que ya tiene (6 + 7 + 8 + 5)?",
        "type": "number",
        "integerOnly": true,
        "expected": 26
      },
      {
        "id": "suma_necesaria",
        "label": "2. Para que 5 notas tengan promedio 7, ¿cuánto deben sumar en total las 5 notas (5 × 7)?",
        "type": "number",
        "integerOnly": true,
        "expected": 35
      },
      {
        "id": "nota_faltante",
        "label": "3. ¿Qué nota debe obtener en el quinto trabajo práctico (35 − 26)?",
        "type": "number",
        "expected": 9,
        "commonErrors": [
          {
            "value": 6.5,
            "message": "6,5 es el promedio actual de las 4 notas (26 ÷ 4 = 6,5). Lo que buscamos es qué 5.ª nota hace que la suma llegue a 35."
          }
        ]
      }
    ],
    "hints": [
      "Pensalo primero como reparto: si el promedio de 5 notas es 7, es como si hubiera sacado 7 en cada una de las 5 pruebas (total acumulado = 5 × 7 = 35 puntos).",
      "Sumá los puntos que ya reunió en los 4 primeros trabajos: 6 + 7 + 8 + 5 = 26 puntos.",
      "Restá: 35 − 26 para saber cuántos puntos le faltan en el quinto trabajo."
    ],
    "solutionSteps": [
      "Razonamiento por total acumulado: para lograr promedio 7 en 5 trabajos, la suma de las 5 notas debe ser 5 × 7 = 35 puntos.",
      "Suma de las 4 notas conocidas: 6 + 7 + 8 + 5 = 26 puntos.",
      "Planteo algebraico: (6 + 7 + 8 + 5 + x) ÷ 5 = 7 → (26 + x) ÷ 5 = 7 → 26 + x = 35 → x = 35 − 26 = 9.",
      "Comprobación: (6 + 7 + 8 + 5 + 9) ÷ 5 = 35 ÷ 5 = 7,00."
    ],
    "commonErrorNote": "Comprobar siempre reemplazando la nota hallada (9) en el promedio de las 5 notas."
  },
  {
    "id": "G4-07",
    "title": "Tardanzas en el trimestre: comparación con y sin el valor extremo",
    "source": {
      "kind": "guia",
      "exercise": "4.7",
      "label": "Guía 4.7 (reformulado)",
      "adaptationNote": "Verifica las medianas 1 (con 11 datos) y 0,5 (con 10 datos) y reformula la consigna final como «Compará cuánto cambió cada medida y explicá qué observás», evitando sugerir que la mediana permaneció invariable."
    },
    "topic": "medidas",
    "level": "desafio",
    "skills": [
      "media",
      "mediana-impar",
      "mediana-par",
      "valores-extremos"
    ],
    "lessonId": "L10",
    "allowComparableVariant": false,
    "prompt": "Se registra el número de tardanzas durante un trimestre de n = 11 alumnos (ejemplo de la guía):\n0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 11.\n1) Calculá la media aritmética y la mediana de los 11 datos.\n2) Si se excluye el dato extremo (11 tardanzas), recalculá la media y la mediana para los 10 alumnos restantes.\n3) Compará cuánto cambió cada medida y explicá qué observás.",
    "dataset": [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      11
    ],
    "parts": [
      {
        "id": "media_11",
        "label": "1a. Media aritmética (x̄) con los 11 datos (suma = 20; redondeá a 2 decimales o escribí 20/11)",
        "type": "number",
        "unit": "tardanzas",
        "expected": {
          "numerator": 20,
          "denominator": 11
        },
        "roundingDecimals": 2
      },
      {
        "id": "mediana_11",
        "label": "1b. Mediana (Me) con los 11 datos (valor en la 6.ª posición ordenada)",
        "type": "number",
        "unit": "tardanzas",
        "expected": 1,
        "commonErrors": [
          {
            "value": 0,
            "message": "Contá con cuidado las posiciones: hay cinco ceros en las posiciones 1 a 5, y en la posición 6 (la central de 11 datos) está el primer 1."
          },
          {
            "value": 6,
            "message": "6 es la posición central ((11 + 1) ÷ 2 = 6), pero el dato que ocupa la posición 6 es 1 tardanza."
          }
        ]
      },
      {
        "id": "media_10",
        "label": "2a. Media aritmética (x̄) sin el extremo (quedan n = 10 datos que suman 9)",
        "type": "number",
        "unit": "tardanzas",
        "expected": 0.9,
        "roundingDecimals": 2
      },
      {
        "id": "mediana_10",
        "label": "2b. Mediana (Me) sin el extremo (promedio entre las posiciones 5.ª y 6.ª de los 10 datos)",
        "type": "number",
        "unit": "tardanzas",
        "expected": 0.5,
        "commonErrors": [
          {
            "value": 1,
            "message": "Con 10 datos (par), las posiciones centrales son la 5.ª (que vale 0) y la 6.ª (que vale 1). Su promedio es (0 + 1) ÷ 2 = 0,5."
          },
          {
            "value": 0,
            "message": "En la posición 5 hay un 0, pero en la posición 6 hay un 1. Promediá ambos valores centrales: (0 + 1) ÷ 2 = 0,5."
          }
        ]
      },
      {
        "id": "comparacion",
        "label": "3. Al comparar los resultados antes y después de quitar el 11, ¿qué ocurrió con ambas medidas?",
        "type": "select",
        "options": [
          {
            "value": "ambas_cambian_mediana_resistente",
            "label": "Ambas cambiaron: la media bajó fuertemente a la mitad (de ≈ 1,82 a 0,90) por ser muy sensible al extremo, mientras que la mediana tuvo un cambio menor (de 1 a 0,5) mostrando mayor resistencia"
          },
          {
            "value": "mediana_invariable",
            "label": "La mediana jamás puede cambiar al quitar un dato extremo"
          }
        ],
        "expected": "ambas_cambian_mediana_resistente"
      }
    ],
    "hints": [
      "Con 11 datos: 0+0+0+0+0+1+1+2+2+3+11 = 20 → media = 20 ÷ 11 ≈ 1,82. Como n = 11 es impar, la posición central es la 6.ª: contá 5 ceros y el 6.º dato es 1.",
      "Al quitar el 11 quedan 10 datos: 0, 0, 0, 0, 0, 1, 1, 2, 2, 3. La suma es 9 → media = 9 ÷ 10 = 0,90.",
      "Con 10 datos (par), los centrales están en las posiciones 5 (valor 0) y 6 (valor 1): Me = (0 + 1) ÷ 2 = 0,5."
    ],
    "solutionSteps": [
      "1) Con los 11 alumnos: suma = 20 → media x̄ = 20 ÷ 11 ≈ 1,82 tardanzas. Posición central = (11 + 1) ÷ 2 = 6 → el 6.º dato ordenado es Me = 1 tardanza.",
      "2) Sin el dato extremo (n = 10): suma = 9 → media x̄ = 9 ÷ 10 = 0,90 tardanzas. Posición central = (10 + 1) ÷ 2 = 5,5 → promedio entre el 5.º dato (0) y el 6.º dato (1): Me = (0 + 1) ÷ 2 = 0,5 tardanzas.",
      "3) Conclusión: al retirar el valor extremo (11), la media se redujo fuertemente (de ≈ 1,82 a 0,90). La mediana también cambió (de 1 a 0,5) porque se desplazó la posición central de 6 a 5,5, pero varió mucho menos y representa mejor que la mayoría tuvo entre 0 y 1 tardanza."
    ],
    "commonErrorNote": "La mediana es más resistente que la media ante extremos, pero puede cambiar al agregar o quitar observaciones."
  },
  {
    "id": "N1-01",
    "title": "Distinguir variable, valor observado y frecuencia",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-01"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "dato-variable-frecuencia"
    ],
    "lessonId": "L01",
    "allowComparableVariant": false,
    "prompt": "En una actividad de aula (datos ficticios) se preguntó a 18 estudiantes cuántos útiles había en su cartuchera. La respuesta «6 útiles» apareció 5 veces. Identificá qué papel cumple cada elemento.",
    "parts": [
      {
        "id": "variable",
        "label": "1. ¿Cuál es la variable estadística estudiada?",
        "type": "select",
        "options": [
          {
            "value": "cant_utiles",
            "label": "La cantidad de útiles por cartuchera"
          },
          {
            "value": "18_est",
            "label": "Los 18 estudiantes consultados"
          },
          {
            "value": "5_veces",
            "label": "Las 5 repeticiones"
          }
        ],
        "expected": "cant_utiles"
      },
      {
        "id": "valor_x",
        "label": "2. ¿Qué representa «6 útiles» en ese registro?",
        "type": "select",
        "options": [
          {
            "value": "valor",
            "label": "Un valor observado de la variable (x = 6)"
          },
          {
            "value": "frecuencia",
            "label": "La frecuencia absoluta (f = 6)"
          },
          {
            "value": "muestra",
            "label": "El tamaño total de la muestra (n = 6)"
          }
        ],
        "expected": "valor"
      },
      {
        "id": "frec_f",
        "label": "3. ¿Qué representa «5 veces»?",
        "type": "select",
        "options": [
          {
            "value": "frecuencia",
            "label": "La frecuencia absoluta de ese valor (f = 5)"
          },
          {
            "value": "valor",
            "label": "El valor de la variable (x = 5)"
          },
          {
            "value": "total",
            "label": "El total de estudiantes (n = 5)"
          }
        ],
        "expected": "frecuencia"
      }
    ],
    "hints": [
      "La variable es la pregunta o característica general que se observa en cada integrante.",
      "El dato o valor (x) es una respuesta posible a esa pregunta («6 útiles»).",
      "La frecuencia (f) indica cuántas personas dieron esa misma respuesta («5 veces»)."
    ],
    "solutionSteps": [
      "Variable estadística: «cantidad de útiles por cartuchera».",
      "Valor de la variable (x): «6 útiles».",
      "Frecuencia absoluta (f): 5 (hay 5 estudiantes con 6 útiles). El total de la muestra es n = 18."
    ],
    "commonErrorNote": "No confundir el valor observado (6 útiles) con su frecuencia (5 estudiantes)."
  },
  {
    "id": "N1-02",
    "title": "Barrio de residencia y cantidad de cuadras caminadas",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-02"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "cualitativa-nominal",
      "cuantitativa-discreta"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En una planilla ficticia de movilidad se anotan dos datos de cada estudiante: el barrio donde vive (San Martín, San Miguel, Don Bosco) y la cantidad entera de cuadras que camina hasta la parada (1, 2, 3, 4). Clasificá ambas variables.",
    "parts": [
      {
        "id": "barrio",
        "label": "1. Barrio de residencia",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (nombres de barrios sin jerarquía)"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (tienen un orden numérico obligatorio)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          }
        ],
        "expected": "cualitativa-nominal"
      },
      {
        "id": "cuadras",
        "label": "2. Cantidad entera de cuadras caminadas hasta la parada",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (conteo de cuadras enteras)"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-discreta"
      }
    ],
    "hints": [
      "El nombre del barrio es una palabra sin orden jerárquico.",
      "Contar cuántas cuadras enteras se caminan arroja números enteros (1, 2, 3, 4).",
      "Un mismo relevamiento puede incluir variables cualitativas y cuantitativas a la vez."
    ],
    "solutionSteps": [
      "Barrio de residencia: Cualitativa nominal.",
      "Cantidad de cuadras contadas: Cuantitativa discreta."
    ],
    "commonErrorNote": "Un mismo relevamiento puede incluir variables cualitativas y cuantitativas a la vez."
  },
  {
    "id": "N1-03",
    "title": "Nivel de batería indicado con palabras ordenadas",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-03"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "cualitativa-ordinal"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Una aplicación muestra el estado de carga de una tablet con cuatro categorías verbales: «Crítico, Bajo, Medio, Completo». Clasificá la variable y contrastala con el porcentaje exacto de carga.",
    "parts": [
      {
        "id": "categoria_verbal",
        "label": "1. Estado de carga expresado como «Crítico, Bajo, Medio, Completo»",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (categorías no numéricas con orden creciente de carga)"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (palabras sin ningún orden)"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          }
        ],
        "expected": "cualitativa-ordinal"
      },
      {
        "id": "contraste_mah",
        "label": "2. Si en cambio se mide la energía almacenada en miliamperios-hora (mAh) o voltios con un instrumento de laboratorio, ¿de qué tipo general es?",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa",
            "label": "Cuantitativa (mide una magnitud física numérica)"
          },
          {
            "value": "cualitativa",
            "label": "Cualitativa nominal"
          }
        ],
        "expected": "cuantitativa"
      }
    ],
    "hints": [
      "Las palabras «Crítico, Bajo, Medio, Completo» no son números, pero sí están ordenadas de menor a mayor nivel.",
      "Por eso se trata de una variable cualitativa ordinal.",
      "Una misma característica puede registrarse como cualitativa ordinal (categorías de nivel) o cuantitativa (medición numérica)."
    ],
    "solutionSteps": [
      "La escala verbal «Crítico < Bajo < Medio < Completo» es Cualitativa Ordinal.",
      "Cuando esa misma característica se mide numéricamente en unidades físicas, pasa a ser una variable Cuantitativa."
    ],
    "commonErrorNote": "Una misma característica puede registrarse como cualitativa ordinal (categorías de nivel) o cuantitativa (medición numérica)."
  },
  {
    "id": "N1-04",
    "title": "Número de línea de colectivo y código de aula",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-04"
    },
    "topic": "variables",
    "level": "inicial",
    "skills": [
      "codigos-numericos",
      "cualitativa-nominal"
    ],
    "lessonId": "L01",
    "allowComparableVariant": false,
    "prompt": "En una planilla escolar se anota la línea de colectivo que usa cada estudiante («25», «40», «60», «70»). Un compañero dice: «Como son números enteros, es cuantitativa discreta y podemos calcular la línea promedio sumando 25 + 40 + 60». ¿Es correcto ese razonamiento?",
    "parts": [
      {
        "id": "clasif_linea",
        "label": "1. ¿Qué tipo de variable es el número de línea de colectivo?",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (el número funciona como nombre o etiqueta del recorrido)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (porque se escribe con cifras)"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          }
        ],
        "expected": "cualitativa-nominal"
      },
      {
        "id": "promedio_linea",
        "label": "2. ¿Tiene sentido matemático calcular el promedio de los números de línea (por ejemplo, decir que el promedio es la línea 41,6)?",
        "type": "select",
        "options": [
          {
            "value": "no_etiqueta",
            "label": "No, porque «60» no representa el triple de cantidad que «20»: son códigos identificadores y solo admite calcular la moda"
          },
          {
            "value": "si_suma",
            "label": "Sí, siempre que haya números se debe calcular el promedio"
          }
        ],
        "expected": "no_etiqueta"
      }
    ],
    "hints": [
      "Preguntate si la Línea 60 «mide o cuenta el doble» que la Línea 30.",
      "No: el número de línea es simplemente un código que identifica el recorrido.",
      "Cuando un número actúa como etiqueta sin medir cantidad, la variable es cualitativa nominal."
    ],
    "solutionSteps": [
      "El número de línea de colectivo identifica una categoría (el recorrido), no una cantidad.",
      "Por lo tanto, es una variable Cualitativa Nominal y no tiene sentido sumar ni promediar sus códigos."
    ],
    "commonErrorNote": "Regla clave: «ver números no alcanza para que sea cuantitativa». Distinguí siempre cantidad de etiqueta."
  },
  {
    "id": "N1-05",
    "title": "Masa de mochilas escolares y cantidad de carpetas",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-05"
    },
    "topic": "variables",
    "level": "intermedio",
    "skills": [
      "cuantitativa-continua",
      "cuantitativa-discreta"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En un proyecto de salud postural (datos ficticios) se pesa cada mochila en kilogramos (3,4 kg; 4,15 kg; 5,0 kg) y se cuenta cuántas carpetas lleva adentro (1, 2, 3, 4). Clasificá ambas variables.",
    "parts": [
      {
        "id": "peso_mochila",
        "label": "1. Masa/peso de la mochila en kilogramos (kg)",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua (magnitud física continua que admite valores intermedios)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-continua"
      },
      {
        "id": "cant_carpetas",
        "label": "2. Cantidad de carpetas dentro de la mochila",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (conteo de objetos enteros)"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          }
        ],
        "expected": "cuantitativa-discreta"
      }
    ],
    "hints": [
      "Los kilogramos se miden con balanza y admiten cualquier fracción de gramo intermedia.",
      "Las carpetas se cuentan de a unidades enteras.",
      "Que una mochila pese justo «5,0 kg» no hace discreto al peso: la magnitud admite valores intermedios."
    ],
    "solutionSteps": [
      "Masa/peso de la mochila en kg: Cuantitativa continua (proviene de medir una magnitud continua).",
      "Cantidad de carpetas: Cuantitativa discreta (proviene de contar unidades enteras)."
    ],
    "commonErrorNote": "Que una mochila pese justo «5,0 kg» no hace discreto al peso: la magnitud admite valores intermedios."
  },
  {
    "id": "N1-06",
    "title": "Orden correcto de categorías ordinales en una encuesta",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-06"
    },
    "topic": "variables",
    "level": "intermedio",
    "skills": [
      "cualitativa-ordinal",
      "orden-jerarquico"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Se consultó con qué frecuencia los estudiantes leen noticias científicas: «Nunca, Rara vez, A veces, Frecuentemente, Siempre». Identificá el tipo de variable y su orden lógico.",
    "parts": [
      {
        "id": "tipo",
        "label": "1. Tipo de variable",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          }
        ],
        "expected": "cualitativa-ordinal"
      },
      {
        "id": "orden",
        "label": "2. ¿En qué orden deben disponerse las filas de la tabla para poder leer la columna acumulada (F)?",
        "type": "select",
        "options": [
          {
            "value": "creciente",
            "label": "Nunca → Rara vez → A veces → Frecuentemente → Siempre (o exactamente al revés)"
          },
          {
            "value": "alfabetico",
            "label": "A veces → Frecuentemente → Nunca → Rara vez → Siempre (orden alfabético)"
          }
        ],
        "expected": "creciente"
      }
    ],
    "hints": [
      "Las opciones son palabras que indican menor o mayor asiduidad.",
      "Para que la acumulación tenga sentido, las filas deben seguir esa escala gradual.",
      "Si desordenás una variable ordinal en la tabla, la frecuencia acumulada pierde significado."
    ],
    "solutionSteps": [
      "Es una variable Cualitativa Ordinal porque sus categorías siguen una progresión de intensidad.",
      "Deben ordenarse según esa escala: Nunca → Rara vez → A veces → Frecuentemente → Siempre."
    ],
    "commonErrorNote": "Si desordenás una variable ordinal en la tabla, la frecuencia acumulada pierde significado."
  },
  {
    "id": "N1-07",
    "title": "Estatura anotada en centímetros enteros: ¿discreta o continua?",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-07"
    },
    "topic": "variables",
    "level": "intermedio",
    "skills": [
      "magnitud-vs-registro",
      "cuantitativa-continua"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En la ficha médica se anotaron las estaturas redondeadas en centímetros sin decimales: 158 cm, 161 cm, 164 cm, 170 cm. Un alumno afirma que como están escritas sin coma decimal, la estatura es una variable discreta. Analizá la afirmación.",
    "parts": [
      {
        "id": "clasif_estatura",
        "label": "1. ¿Qué tipo de variable es la estatura?",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          }
        ],
        "expected": "cuantitativa-continua"
      },
      {
        "id": "explicacion",
        "label": "2. ¿Por qué sigue siendo continua aunque se haya anotado en centímetros enteros?",
        "type": "select",
        "options": [
          {
            "value": "crecimiento_continuo",
            "label": "Porque nadie crece pegando saltos de 1 cm de golpe: la longitud es una magnitud continua y anotar números enteros es solo un redondeo de registro"
          },
          {
            "value": "cambia_segun_unidad",
            "label": "Porque en metros es continua pero en centímetros se vuelve discreta"
          }
        ],
        "expected": "crecimiento_continuo"
      }
    ],
    "hints": [
      "Pensá si una persona pasa de medir 160 cm a 161 cm sin pasar por 160,4 cm.",
      "Cambiar de metros (1,64 m) a centímetros (164 cm) o redondear el milímetro no cambia la naturaleza física de la longitud.",
      "No confundir «cómo se redondeó al anotar» con «qué tipo de magnitud es»."
    ],
    "solutionSteps": [
      "La estatura es una variable Cuantitativa Continua.",
      "Ni el cambio de unidad (metros a centímetros) ni el redondeo del instrumento alteran el hecho de que la longitud admite infinitos valores intermedios."
    ],
    "commonErrorNote": "No confundir «cómo se redondeó al anotar» con «qué tipo de magnitud es»."
  },
  {
    "id": "N1-08",
    "title": "Identificar la única variable cuantitativa discreta del grupo",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-08"
    },
    "topic": "variables",
    "level": "intermedio",
    "skills": [
      "cuantitativa-discreta",
      "clasificar-variable"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Observá estas cuatro variables registradas en un club deportivo (ejemplo ficticio) y clasificá cada una para identificar cuál es cuantitativa discreta.",
    "parts": [
      {
        "id": "v1",
        "label": "1. Cantidad de partidos ganados en el campeonato (0, 1, 2, 3...)",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-discreta"
      },
      {
        "id": "v2",
        "label": "2. Duración exacta de cada entrenamiento medida con reloj",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-continua"
      },
      {
        "id": "v3",
        "label": "3. Categoría de edad del torneo («Sub-13, Sub-15, Sub-17»)",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          }
        ],
        "expected": "cualitativa-ordinal"
      }
    ],
    "hints": [
      "Los partidos ganados se cuentan uno por uno con números enteros.",
      "La duración es tiempo (magnitud continua), y las divisiones Sub-13 < Sub-15 < Sub-17 son categorías ordenadas por etapa.",
      "En «Sub-13, Sub-15, Sub-17» el número forma parte del nombre de una categoría ordenada por edad."
    ],
    "solutionSteps": [
      "1) Cantidad de partidos ganados: Cuantitativa discreta (conteo entero).",
      "2) Duración del entrenamiento: Cuantitativa continua (magnitud tiempo).",
      "3) Categoría del torneo (Sub-13, Sub-15, Sub-17): Cualitativa ordinal (categorías ordenadas)."
    ],
    "commonErrorNote": "En «Sub-13, Sub-15, Sub-17» el número forma parte del nombre de una categoría ordenada por edad."
  },
  {
    "id": "N1-09",
    "title": "Códigos numéricos de respuesta (1 = Sí, 2 = No, 3 = No sabe)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-09"
    },
    "topic": "variables",
    "level": "desafio",
    "skills": [
      "codigos-numericos",
      "cualitativa-nominal"
    ],
    "lessonId": "L01",
    "allowComparableVariant": false,
    "prompt": "Para cargar rápido una encuesta en una planilla, se codificó la respuesta a «¿Tenés bicicleta propia?» usando: 1 = Sí, 2 = No, 3 = No responde. Analizá si esa codificación convierte a la variable en cuantitativa.",
    "parts": [
      {
        "id": "naturaleza",
        "label": "1. ¿Qué tipo de variable sigue siendo «tenencia de bicicleta» aunque se cargue con los códigos 1, 2 y 3?",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal (los números 1, 2 y 3 son etiquetas que reemplazan a palabras sin orden)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (porque en la planilla hay números 1, 2 y 3)"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cualitativa-nominal"
      },
      {
        "id": "operacion_valida",
        "label": "2. ¿Qué cálculo sí es válido hacer con la columna de códigos 1, 2 y 3?",
        "type": "select",
        "options": [
          {
            "value": "contar_frecuencias",
            "label": "Contar cuántos 1, cuántos 2 y cuántos 3 hay (frecuencias y porcentajes de cada categoría) y hallar la moda"
          },
          {
            "value": "promediar_codigos",
            "label": "Sumar todos los 1, 2 y 3 y dividir por n para obtener una media de 1,65"
          }
        ],
        "expected": "contar_frecuencias"
      }
    ],
    "hints": [
      "Si hubiéramos puesto 9 = Sí y 0 = No, el significado de la respuesta sería el mismo.",
      "Por lo tanto, el 1, 2 y 3 son simples abreviaturas de categorías nominales.",
      "Codificar categorías con números en una planilla no autoriza a calcularles media ni mediana."
    ],
    "solutionSteps": [
      "La variable es Cualitativa Nominal porque las respuestas reales («Sí», «No», «No responde») son categorías sin orden.",
      "Con esos códigos solo corresponde contar frecuencias absolutas, relativas, porcentajes y determinar la moda; promediar los códigos carece de sentido."
    ],
    "commonErrorNote": "Codificar categorías con números en una planilla no autoriza a calcularles media ni mediana."
  },
  {
    "id": "N1-10",
    "title": "Dos formas de registrar el uso del celular en una misma encuesta",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-10"
    },
    "topic": "variables",
    "level": "desafio",
    "skills": [
      "clasificar-variable",
      "transferencia"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En un estudio sobre hábitos digitales (datos ficticios) se hacen tres preguntas distintas sobre el celular:\nA) ¿Para qué lo usás principalmente? (Estudiar, Juegos, Redes, Música).\nB) ¿Cuántas aplicaciones educativas tenés instaladas? (0, 1, 2, 3, 4...).\nC) ¿Cuánto tiempo total de pantalla marcó el contador hoy? (2,4 h; 3,15 h...).\nClasificá cada una.",
    "parts": [
      {
        "id": "preg_a",
        "label": "Pregunta A: Uso principal del celular",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          }
        ],
        "expected": "cualitativa-nominal"
      },
      {
        "id": "preg_b",
        "label": "Pregunta B: Cantidad de aplicaciones educativas instaladas",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-discreta"
      },
      {
        "id": "preg_c",
        "label": "Pregunta C: Tiempo diario de pantalla en horas",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          }
        ],
        "expected": "cuantitativa-continua"
      }
    ],
    "hints": [
      "«Celular» es el tema general, pero cada pregunta define una variable distinta.",
      "El uso principal nombra actividades; las aplicaciones se cuentan de a una; el tiempo se mide de forma continua.",
      "No clasificar por el objeto («el celular»), sino por la característica exacta que mide o pregunta cada ítem."
    ],
    "solutionSteps": [
      "A) Uso principal: Cualitativa nominal (categorías sin orden).",
      "B) Cantidad de aplicaciones instaladas: Cuantitativa discreta (conteo entero).",
      "C) Tiempo de pantalla: Cuantitativa continua (medición de tiempo)."
    ],
    "commonErrorNote": "No clasificar por el objeto («el celular»), sino por la característica exacta que mide o pregunta cada ítem."
  },
  {
    "id": "N1-11",
    "title": "¿Cuándo un conjunto de datos discretos tiene promedio con coma?",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-11"
    },
    "topic": "variables",
    "level": "desafio",
    "skills": [
      "cuantitativa-discreta",
      "media-conceptual"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "En el ejemplo de la guía de 20 estudiantes, la variable «cantidad de libros leídos» toma los valores 0, 1, 2, 3 y 4, y el promedio da 1,5 libros. Una compañera pregunta: «Si el promedio dio 1,5 con coma, ¿entonces la variable cantidad de libros leídos es continua?». Respondé y justificá.",
    "parts": [
      {
        "id": "respuesta",
        "label": "1. ¿Qué tipo de variable es «cantidad de libros completos leídos»?",
        "type": "select",
        "options": [
          {
            "value": "discreta",
            "label": "Sigue siendo cuantitativa discreta: cada dato observado es un conteo entero (0, 1, 2, 3, 4); el 1,5 es un resumen (el promedio del grupo), no un dato individual obligatorio"
          },
          {
            "value": "continua",
            "label": "Pasa a ser cuantitativa continua porque su promedio tiene coma"
          }
        ],
        "expected": "discreta"
      },
      {
        "id": "rúbrica",
        "label": "2. Explicá con tus palabras la diferencia entre los valores que toma la variable y el valor del promedio",
        "type": "rubric",
        "placeholder": "Explicá qué valores puede responder cada estudiante y por qué el promedio puede tener decimales...",
        "criteria": [
          "Aclaré que cada estudiante respondió con un número entero de libros (0, 1, 2, 3 o 4), por lo que la variable es discreta.",
          "Expliqué que 1,5 libros surge de dividir la suma (30) entre 20 estudiantes y representa un reparto promedio, no que alguien haya respondido 1,5."
        ],
        "modelAnswer": "La variable es cuantitativa discreta porque cada observación cuenta libros enteros (0, 1, 2, 3, 4). Que el promedio dé 1,5 libros es resultado de dividir el total (30) entre los 20 estudiantes, y no cambia la naturaleza discreta de los datos."
      }
    ],
    "hints": [
      "Mirá qué valores respondió cada persona: 0, 1, 2, 3 o 4 libros.",
      "Al dividir la suma de números enteros (30) entre 20 personas aparece el decimal 1,5.",
      "La clasificación de la variable depende de los valores observados, no de si el promedio da con coma."
    ],
    "solutionSteps": [
      "La variable «cantidad de libros leídos» es Cuantitativa Discreta porque proviene de un conteo entero.",
      "El promedio (1,5 libros) es una medida resumen que reparte los 30 libros entre 20 estudiantes; un promedio decimal no convierte en continua a una variable discreta."
    ],
    "commonErrorNote": "Casi todas las variables discretas (hermanos, hijos, goles, faltas) suelen tener promedios con decimales."
  },
  {
    "id": "N1-12",
    "title": "Diseño de variables para un estudio del kiosco escolar",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N1-12"
    },
    "topic": "variables",
    "level": "desafio",
    "skills": [
      "clasificar-variable",
      "transferencia"
    ],
    "lessonId": "L02",
    "allowComparableVariant": false,
    "prompt": "Querés armar una consulta ficticia sobre la cantina escolar que incluya exactamente un ejemplo de cada uno de los cuatro tipos de variables. Asociá cada pregunta con su clasificación.",
    "parts": [
      {
        "id": "p_nominal",
        "label": "1. ¿Cuál de estas preguntas define una variable cualitativa nominal?",
        "type": "select",
        "options": [
          {
            "value": "alimento",
            "label": "¿Qué alimento elegís con más frecuencia en el recreo? (Fruta, Sándwich, Alfajor, Empanada)"
          },
          {
            "value": "satisfaccion",
            "label": "¿Qué nivel de conformidad tenés con la atención? (Bajo, Medio, Alto)"
          },
          {
            "value": "espera",
            "label": "¿Cuántos minutos exactos esperaste en la fila?"
          }
        ],
        "expected": "alimento"
      },
      {
        "id": "p_ordinal",
        "label": "2. ¿Cuál define una variable cualitativa ordinal?",
        "type": "select",
        "options": [
          {
            "value": "satisfaccion",
            "label": "¿Qué nivel de conformidad tenés con la atención? (Bajo, Medio, Alto)"
          },
          {
            "value": "alimento",
            "label": "¿Qué alimento elegís en el recreo?"
          },
          {
            "value": "veces",
            "label": "¿Cuántos días de esta semana compraste en la cantina? (0 a 5)"
          }
        ],
        "expected": "satisfaccion"
      },
      {
        "id": "p_discreta",
        "label": "3. ¿Cuál define una variable cuantitativa discreta?",
        "type": "select",
        "options": [
          {
            "value": "veces",
            "label": "¿Cuántos días de esta semana compraste en la cantina? (0, 1, 2, 3, 4, 5)"
          },
          {
            "value": "espera",
            "label": "¿Cuánto tiempo exacto esperaste en la fila medido en segundos?"
          }
        ],
        "expected": "veces"
      },
      {
        "id": "p_continua",
        "label": "4. ¿Y cuál define una variable cuantitativa continua?",
        "type": "select",
        "options": [
          {
            "value": "espera",
            "label": "¿Cuánto tiempo exacto esperaste en la fila medido con cronómetro?"
          },
          {
            "value": "veces",
            "label": "¿Cuántos productos compraste hoy?"
          }
        ],
        "expected": "espera"
      }
    ],
    "hints": [
      "Nominal: palabras sin orden (tipo de alimento). Ordinal: palabras con jerarquía (Bajo, Medio, Alto).",
      "Discreta: conteo de días enteros (0 a 5). Continua: medición de tiempo.",
      "Comprobá que cada tipo de variable responde a una pregunta distinta."
    ],
    "solutionSteps": [
      "Cualitativa nominal: tipo de alimento elegido.",
      "Cualitativa ordinal: nivel de conformidad (Bajo, Medio, Alto).",
      "Cuantitativa discreta: cantidad de días de la semana que compró (0 a 5).",
      "Cuantitativa continua: tiempo de espera en la fila."
    ],
    "commonErrorNote": "Comprobá que cada tipo de variable responde a una pregunta distinta."
  },
  {
    "id": "N2-01",
    "title": "Conteo de frecuencias absolutas en el ejemplo de 10 estudiantes",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-01"
    },
    "topic": "frecuencias",
    "level": "inicial",
    "skills": [
      "frecuencia-absoluta"
    ],
    "lessonId": "L03",
    "allowComparableVariant": true,
    "prompt": "En el ejemplo de las fichas didácticas, n = 10 estudiantes respondieron cuántos libros leyeron:\n0, 1, 1, 2, 0, 1, 3, 2, 1, 4.\nCompletá la columna de frecuencias absolutas (f) y verificá que sumen 10.",
    "dataset": [
      0,
      1,
      1,
      2,
      0,
      1,
      3,
      2,
      1,
      4
    ],
    "parts": [
      {
        "id": "tabla_f",
        "label": "Completá la frecuencia absoluta (f) de cada valor (n = 10)",
        "type": "freq-table",
        "totalN": 10,
        "columns": [
          "f"
        ],
        "rows": [
          {
            "x": 0,
            "label": "0 libros",
            "f": 2,
            "F": 2
          },
          {
            "x": 1,
            "label": "1 libro",
            "f": 4,
            "F": 6
          },
          {
            "x": 2,
            "label": "2 libros",
            "f": 2,
            "F": 8
          },
          {
            "x": 3,
            "label": "3 libros",
            "f": 1,
            "F": 9
          },
          {
            "x": 4,
            "label": "4 libros",
            "f": 1,
            "F": 10
          }
        ]
      }
    ],
    "hints": [
      "Contá cuántas veces aparece cada número del 0 al 4 en la lista de 10 datos.",
      "El 0 está 2 veces; el 1 está 4 veces; el 2 está 2 veces; el 3 está 1 vez; el 4 está 1 vez.",
      "Verificá: 2 + 4 + 2 + 1 + 1 = 10."
    ],
    "solutionSteps": [
      "f(0) = 2; f(1) = 4; f(2) = 2; f(3) = 1; f(4) = 1.",
      "Suma de frecuencias absolutas: 2 + 4 + 2 + 1 + 1 = 10 (coincide con los n = 10 estudiantes)."
    ],
    "commonErrorNote": "No confundir este ejemplo de 10 estudiantes (frecuencias 2, 4, 2, 1, 1) con el de la guía de 20 estudiantes (3, 8, 6, 2, 1)."
  },
  {
    "id": "N2-02",
    "title": "Paso de frecuencia absoluta a relativa y porcentaje (n = 10)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-02"
    },
    "topic": "frecuencias",
    "level": "inicial",
    "skills": [
      "frecuencia-relativa",
      "porcentaje"
    ],
    "lessonId": "L04",
    "allowComparableVariant": true,
    "prompt": "Con la tabla de 10 estudiantes (0 libros: f=2; 1 libro: f=4; 2 libros: f=2; 3 libros: f=1; 4 libros: f=1), completá las columnas de frecuencia relativa (fr) y porcentaje (%).",
    "parts": [
      {
        "id": "tabla_fr_pct",
        "label": "Completá fr y % para cada fila (n = 10)",
        "type": "freq-table",
        "totalN": 10,
        "columns": [
          "fr",
          "pct"
        ],
        "rows": [
          {
            "x": 0,
            "label": "0 libros (f = 2)",
            "f": 2
          },
          {
            "x": 1,
            "label": "1 libro (f = 4)",
            "f": 4
          },
          {
            "x": 2,
            "label": "2 libros (f = 2)",
            "f": 2
          },
          {
            "x": 3,
            "label": "3 libros (f = 1)",
            "f": 1
          },
          {
            "x": 4,
            "label": "4 libros (f = 1)",
            "f": 1
          }
        ]
      }
    ],
    "hints": [
      "Como n = 10, dividir por 10 corre la coma un lugar a la izquierda: 2 ÷ 10 = 0,20; 4 ÷ 10 = 0,40; 1 ÷ 10 = 0,10.",
      "Para el porcentaje, multiplicá cada fr por 100: 20 %, 40 %, 20 %, 10 %, 10 %.",
      "Recordá que en la columna fr va la proporción sobre 1 (como 0,40) y en la columna % va sobre 100 (40 %)."
    ],
    "solutionSteps": [
      "0 libros: fr = 2/10 = 0,20 → 20 %.",
      "1 libro: fr = 4/10 = 0,40 → 40 %.",
      "2 libros: fr = 2/10 = 0,20 → 20 %.",
      "3 libros: fr = 1/10 = 0,10 → 10 %.",
      "4 libros: fr = 1/10 = 0,10 → 10 %. Suma de fr = 1,00 y suma de % = 100 %."
    ],
    "commonErrorNote": "Recordá que en la columna fr va la proporción sobre 1 (como 0,40) y en la columna % va sobre 100 (40 %)."
  },
  {
    "id": "N2-03",
    "title": "Hallar el total n y la última acumulada",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-03"
    },
    "topic": "frecuencias",
    "level": "inicial",
    "skills": [
      "frecuencia-absoluta",
      "frecuencia-acumulada"
    ],
    "lessonId": "L03",
    "allowComparableVariant": false,
    "prompt": "En un registro de mascotas por hogar, las frecuencias absolutas fueron: 0 mascotas (f = 4), 1 mascota (f = 9), 2 mascotas (f = 5) y 3 mascotas (f = 2). Calculá el tamaño total de la muestra (n) y las frecuencias acumuladas F₂ y F₄.",
    "parts": [
      {
        "id": "total_n",
        "label": "1. ¿Cuál es el total de hogares encuestados (n)?",
        "type": "number",
        "integerOnly": true,
        "expected": 20
      },
      {
        "id": "F2",
        "label": "2. ¿Cuánto vale la frecuencia acumulada hasta 1 mascota (F₂ = f₁ + f₂)?",
        "type": "number",
        "integerOnly": true,
        "expected": 13
      },
      {
        "id": "F4",
        "label": "3. ¿Cuánto vale la última frecuencia acumulada (F₄, hasta 3 mascotas)?",
        "type": "number",
        "integerOnly": true,
        "expected": 20
      }
    ],
    "hints": [
      "Sumá todas las frecuencias absolutas: 4 + 9 + 5 + 2.",
      "Para F₂ sumá las dos primeras filas: 4 + 9.",
      "La última frecuencia acumulada (F₄) siempre coincide con el total n."
    ],
    "solutionSteps": [
      "Total de observaciones: n = 4 + 9 + 5 + 2 = 20 hogares.",
      "Frecuencia acumulada hasta 1 mascota: F₂ = 4 + 9 = 13 hogares.",
      "Última frecuencia acumulada: F₄ = 4 + 9 + 5 + 2 = 20 (coincide con n = 20)."
    ],
    "commonErrorNote": "Si el último valor de F no coincide con n, revisá las sumas parciales."
  },
  {
    "id": "N2-04",
    "title": "Distinguir «exactamente 2» de «hasta 2» en la tabla de libros (n = 20)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-04"
    },
    "topic": "frecuencias",
    "level": "inicial",
    "skills": [
      "frecuencia-acumulada",
      "interpretacion"
    ],
    "lessonId": "L05",
    "allowComparableVariant": false,
    "prompt": "En el ejemplo guiado de n = 20 estudiantes de la guía, las frecuencias de libros leídos son: 0 libros (f=3), 1 libro (f=8), 2 libros (f=6), 3 libros (f=2), 4 libros (f=1). Respondé las tres preguntas comparando f y F.",
    "parts": [
      {
        "id": "exactamente_2",
        "label": "1. ¿Cuántos estudiantes leyeron exactamente 2 libros?",
        "type": "number",
        "integerOnly": true,
        "expected": 6
      },
      {
        "id": "hasta_2",
        "label": "2. ¿Cuántos estudiantes leyeron hasta 2 libros inclusive (2 libros o menos)?",
        "type": "number",
        "integerOnly": true,
        "expected": 17,
        "commonErrors": [
          {
            "value": 6,
            "message": "6 leyeron exactamente 2 libros. «Hasta 2 libros inclusive» suma quienes leyeron 0, 1 o 2 libros: 3 + 8 + 6 = 17."
          }
        ]
      },
      {
        "id": "mas_de_2",
        "label": "3. ¿Cuántos estudiantes leyeron más de 2 libros (3 o 4 libros)?",
        "type": "number",
        "integerOnly": true,
        "expected": 3,
        "commonErrors": [
          {
            "value": 9,
            "message": "«Más de 2 libros» no incluye el 2: sumá únicamente quienes leyeron 3 libros (2) y 4 libros (1): 2 + 1 = 3."
          }
        ]
      }
    ],
    "hints": [
      "«Exactamente 2» mira solo la frecuencia f de la fila 2.",
      "«Hasta 2 inclusive» mira la acumulada F de la fila 2: 3 + 8 + 6 = 17.",
      "«Más de 2» abarca los valores mayores que 2 (3 y 4 libros): 2 + 1 = 3 (notá que 17 + 3 = 20)."
    ],
    "solutionSteps": [
      "Exactamente 2 libros: f(2) = 6 estudiantes.",
      "Hasta 2 libros inclusive: F(2) = 3 + 8 + 6 = 17 estudiantes.",
      "Más de 2 libros (3 o 4 libros): f(3) + f(4) = 2 + 1 = 3 estudiantes."
    ],
    "commonErrorNote": "Observá que quienes leyeron «hasta 2 libros» (17) más quienes leyeron «más de 2 libros» (3) completan los 20 estudiantes."
  },
  {
    "id": "N2-05",
    "title": "Reconstruir frecuencias absolutas a partir de porcentajes (n = 50)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-05"
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "porcentaje",
      "frecuencia-absoluta"
    ],
    "lessonId": "L04",
    "allowComparableVariant": false,
    "prompt": "En un relevamiento a n = 50 estudiantes sobre su taller artístico elegido, se informó que el 40 % eligió Música, el 30 % Teatro, el 20 % Pintura y el 10 % Danza. Calculá cuántos estudiantes (frecuencia absoluta f) eligieron cada taller.",
    "parts": [
      {
        "id": "f_musica",
        "label": "1. Estudiantes en Música (40 % de 50)",
        "type": "number",
        "integerOnly": true,
        "expected": 20
      },
      {
        "id": "f_teatro",
        "label": "2. Estudiantes en Teatro (30 % de 50)",
        "type": "number",
        "integerOnly": true,
        "expected": 15
      },
      {
        "id": "f_pintura",
        "label": "3. Estudiantes en Pintura (20 % de 50)",
        "type": "number",
        "integerOnly": true,
        "expected": 10
      },
      {
        "id": "f_danza",
        "label": "4. Estudiantes en Danza (10 % de 50)",
        "type": "number",
        "integerOnly": true,
        "expected": 5
      }
    ],
    "hints": [
      "Si f ÷ n = fr, entonces para recuperar f multiplicamos el total n por la frecuencia relativa (o hacemos porcentaje × n ÷ 100).",
      "Por ejemplo, el 40 % de 50 es 0,40 × 50 = 20 estudiantes.",
      "Comprobá al final que las cuatro cantidades enteras sumen 50."
    ],
    "solutionSteps": [
      "Música: 0,40 × 50 = 20 estudiantes.",
      "Teatro: 0,30 × 50 = 15 estudiantes.",
      "Pintura: 0,20 × 50 = 10 estudiantes.",
      "Danza: 0,10 × 50 = 5 estudiantes. Comprobación: 20 + 15 + 10 + 5 = 50."
    ],
    "commonErrorNote": "El porcentaje no es la cantidad de personas salvo cuando n = 100; con n = 50 cada 10 % equivale a 5 personas."
  },
  {
    "id": "N2-06",
    "title": "Diferencia entre «más de 1» y «al menos 1»",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-06"
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "frecuencia-acumulada",
      "interpretacion"
    ],
    "lessonId": "L05",
    "allowComparableVariant": false,
    "prompt": "En un curso de n = 25 estudiantes se consultó cuántos deportes practican por semana: 0 deportes (f = 5), 1 deporte (f = 11), 2 deportes (f = 6), 3 deportes (f = 3). Calculá cuántos practican «al menos 1 deporte» y cuántos practican «más de 1 deporte».",
    "parts": [
      {
        "id": "al_menos_1",
        "label": "1. Estudiantes que practican «al menos 1 deporte» (1 o más deportes)",
        "type": "number",
        "integerOnly": true,
        "expected": 20,
        "commonErrors": [
          {
            "value": 11,
            "message": "11 practican exactamente 1 deporte. «Al menos 1» significa 1, 2 o 3 deportes: 11 + 6 + 3 = 20."
          },
          {
            "value": 9,
            "message": "9 son quienes practican más de 1 deporte (2 o 3). «Al menos 1» incluye también a los 11 que practican 1 deporte."
          }
        ]
      },
      {
        "id": "mas_de_1",
        "label": "2. Estudiantes que practican «más de 1 deporte» (2 o 3 deportes)",
        "type": "number",
        "integerOnly": true,
        "expected": 9,
        "commonErrors": [
          {
            "value": 20,
            "message": "20 incluye a quienes practican 1 deporte. «Más de 1» exige estrictamente más que 1 (es decir, 2 o 3 deportes: 6 + 3 = 9)."
          }
        ]
      },
      {
        "id": "pct_al_menos_1",
        "label": "3. ¿Qué porcentaje del curso practica al menos 1 deporte (%)?",
        "type": "number",
        "unit": "%",
        "expected": 80
      }
    ],
    "hints": [
      "«Al menos 1» significa «como mínimo 1» (1, 2 o 3 deportes). También podés restar al total (25) los 5 que practican 0 deportes.",
      "«Más de 1» significa estrictamente mayor que 1 (solo 2 o 3 deportes).",
      "Para el porcentaje de 20 sobre 25: (20 ÷ 25) × 100."
    ],
    "solutionSteps": [
      "Al menos 1 deporte (1, 2 o 3): 11 + 6 + 3 = 20 estudiantes (o 25 − 5 = 20).",
      "Más de 1 deporte (2 o 3): 6 + 3 = 9 estudiantes.",
      "Porcentaje con al menos 1 deporte: (20 ÷ 25) × 100 = 80 %."
    ],
    "commonErrorNote": "«Al menos k» incluye al valor k (≥ k); «más de k» no incluye al valor k (> k)."
  },
  {
    "id": "N2-07",
    "title": "Detectar el efecto del redondeo en una tabla con n = 12",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-07"
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "redondeo",
      "frecuencia-relativa",
      "porcentaje"
    ],
    "lessonId": "L04",
    "allowComparableVariant": false,
    "prompt": "Tres categorías empatan con frecuencia f = 4 cada una en un grupo de n = 12 estudiantes (4 + 4 + 4 = 12). Al calcular la frecuencia relativa de cada fila obtenemos 4 ÷ 12 = 1/3 = 0,3333... Si redondeamos cada fila a dos decimales (0,33 y 33,33 %), analizá qué pasa con la suma.",
    "parts": [
      {
        "id": "fr_fila",
        "label": "1. ¿Cuál es la frecuencia relativa redondeada a 2 decimales de cada una de las tres filas?",
        "type": "number",
        "subkind": "fr",
        "expected": {
          "numerator": 4,
          "denominator": 12
        },
        "roundingDecimals": 2
      },
      {
        "id": "suma_redondeada",
        "label": "2. Si sumás tres veces 0,33 (los tres valores redondeados), ¿cuánto da esa suma?",
        "type": "number",
        "expected": 0.99,
        "roundingDecimals": 2
      },
      {
        "id": "explicacion_redondeo",
        "label": "3. ¿Significa ese 0,99 (o 99,99 %) que la tabla está mal hecha?",
        "type": "select",
        "options": [
          {
            "value": "no_es_redondeo",
            "label": "No: en fracción exacta 4/12 + 4/12 + 4/12 = 12/12 = 1; la diferencia de 0,01 se debe únicamente a haber truncado los decimales periódicos al mostrar"
          },
          {
            "value": "si_falta_alumno",
            "label": "Sí, significa que nos olvidamos de contar a un estudiante"
          }
        ],
        "expected": "no_es_redondeo"
      }
    ],
    "hints": [
      "4 ÷ 12 = 0,3333..., que redondeado a dos cifras decimales se escribe 0,33.",
      "0,33 + 0,33 + 0,33 = 0,99.",
      "Pero las fracciones exactas suman 4/12 + 4/12 + 4/12 = 12/12 = 1."
    ],
    "solutionSteps": [
      "Cada fila tiene fr = 4/12 ≈ 0,33 (33,33 %).",
      "La suma de los redondeos da 0,33 + 0,33 + 0,33 = 0,99 (y 33,33 % × 3 = 99,99 %).",
      "No es un error de conteo ni hay que inventar un dato: antes del redondeo la suma exacta es 12/12 = 1 (100 %)."
    ],
    "commonErrorNote": "Nunca alteres una frecuencia verdadera para forzar el redondeo; explicá que la diferencia de un centésimo proviene del redondeo."
  },
  {
    "id": "N2-08",
    "title": "Reconstruir las frecuencias simples (f) desde la columna acumulada (F)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-08"
    },
    "topic": "frecuencias",
    "level": "intermedio",
    "skills": [
      "frecuencia-acumulada",
      "frecuencia-absoluta"
    ],
    "lessonId": "L05",
    "allowComparableVariant": false,
    "prompt": "En una tabla de frecuencias sobre cantidad de lápices de colores, se borraron las frecuencias simples (f) pero quedó visible la columna de frecuencias acumuladas (F):\n• 0 lápices: F₁ = 3\n• 1 lápiz: F₂ = 11\n• 2 lápices: F₃ = 18\n• 3 lápices: F₄ = 20\nHallá cuántas veces se repitió cada valor (f₁, f₂, f₃ y f₄).",
    "parts": [
      {
        "id": "f1",
        "label": "1. Frecuencia simple f₁ (para 0 lápices)",
        "type": "number",
        "integerOnly": true,
        "expected": 3
      },
      {
        "id": "f2",
        "label": "2. Frecuencia simple f₂ (para 1 lápiz: F₂ − F₁)",
        "type": "number",
        "integerOnly": true,
        "expected": 8,
        "commonErrors": [
          {
            "value": 11,
            "message": "11 es la acumulada F₂ (que suma f₁ + f₂). Como f₁ = 3, restá 11 − 3 = 8."
          }
        ]
      },
      {
        "id": "f3",
        "label": "3. Frecuencia simple f₃ (para 2 lápices: F₃ − F₂)",
        "type": "number",
        "integerOnly": true,
        "expected": 7
      },
      {
        "id": "f4",
        "label": "4. Frecuencia simple f₄ (para 3 lápices: F₄ − F₃)",
        "type": "number",
        "integerOnly": true,
        "expected": 2
      }
    ],
    "hints": [
      "En la primera fila, F₁ siempre es igual a f₁.",
      "Como cada acumulada se obtiene sumando la nueva f a la acumulada anterior (F₂ = F₁ + f₂), para despejar f₂ hacés la resta: F₂ − F₁.",
      "Verificá que f₁ + f₂ + f₃ + f₄ dé igual a F₄ = 20."
    ],
    "solutionSteps": [
      "f₁ = F₁ = 3.",
      "f₂ = F₂ − F₁ = 11 − 3 = 8.",
      "f₃ = F₃ − F₂ = 18 − 11 = 7.",
      "f₄ = F₄ − F₃ = 20 − 18 = 2. Comprobación: 3 + 8 + 7 + 2 = 20."
    ],
    "commonErrorNote": "Para pasar de f a F sumamos; para recuperar f desde F restamos la acumulada anterior."
  },
  {
    "id": "N2-09",
    "title": "Encontrar el error en una tabla de frecuencias mal construida",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-09"
    },
    "topic": "frecuencias",
    "level": "desafio",
    "skills": [
      "detectar-errores-tabla",
      "frecuencia-absoluta"
    ],
    "lessonId": "L03",
    "allowComparableVariant": false,
    "prompt": "Un estudiante debía organizar los datos de n = 20 compañeros (valores 0, 1, 2, 3 y 4 con frecuencias 3, 8, 6, 2 y 1), pero en su hoja copió solo las filas de 0, 1 y 2 libros (frecuencias 3, 8 y 6), puso «Total = 17» y dividió todo por 17 diciendo que daba 100 %. Identificá el error y corregilo.",
    "parts": [
      {
        "id": "error_detectado",
        "label": "1. ¿Cuál fue el error principal al armar esa tabla?",
        "type": "select",
        "options": [
          {
            "value": "omitio_filas",
            "label": "Omitió las filas de 3 libros (f=2) y 4 libros (f=1), dejando afuera a 3 de los 20 estudiantes encuestados y alterando todos los porcentajes"
          },
          {
            "value": "ningun_error",
            "label": "Ninguno, porque 3 + 8 + 6 da 17"
          }
        ],
        "expected": "omitio_filas"
      },
      {
        "id": "pct_correcto_1",
        "label": "2. Con el total real de n = 20 estudiantes, ¿cuál es el porcentaje verdadero de la fila «1 libro» (f = 8)?",
        "type": "number",
        "unit": "%",
        "expected": 40
      },
      {
        "id": "suma_faltante",
        "label": "3. ¿Qué porcentaje del curso representan en conjunto las dos filas que se había olvidado de incluir (f = 2 y f = 1 sobre n = 20)?",
        "type": "number",
        "unit": "%",
        "expected": 15
      }
    ],
    "hints": [
      "Si el enunciado informa que se encuestó a 20 estudiantes, la suma de las frecuencias absolutas tiene que dar 20, no 17.",
      "Al omitir 3 datos (las filas de 3 y 4 libros), cambió el denominador de todas las frecuencias relativas.",
      "Con n = 20, 8 ÷ 20 = 0,40 (40 %) y los 3 alumnos omitidos representan (3 ÷ 20) × 100 = 15 %."
    ],
    "solutionSteps": [
      "El error fue omitir las filas de 3 libros (f = 2) y 4 libros (f = 1), reduciendo artificialmente el total de 20 a 17.",
      "Sobre el total correcto n = 20, la fila de 1 libro (f = 8) representa (8 ÷ 20) × 100 = 40 %.",
      "Las dos filas omitidas suman 2 + 1 = 3 estudiantes, que equivalen al (3 ÷ 20) × 100 = 15 % del curso."
    ],
    "commonErrorNote": "Control obligatorio: antes de calcular fr y %, comprobá siempre que Σf coincida con la cantidad de datos del enunciado."
  },
  {
    "id": "N2-10",
    "title": "Completar una tabla con pistas cruzadas de f, fr y F (n = 40)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-10"
    },
    "topic": "frecuencias",
    "level": "desafio",
    "skills": [
      "frecuencia-faltante",
      "frecuencia-relativa",
      "frecuencia-acumulada"
    ],
    "lessonId": "L05",
    "allowComparableVariant": false,
    "prompt": "En un estudio de n = 40 observaciones con valores 0, 1, 2 y 3 se sabe que:\n• Fila 0: su frecuencia relativa es fr₁ = 0,15.\n• Fila 1: la frecuencia acumulada hasta 1 es F₂ = 22.\n• Fila 2: su porcentaje es 30 %.\n• Fila 3: completa los 40 datos.\nHallá las cuatro frecuencias absolutas f₁, f₂, f₃ y f₄.",
    "parts": [
      {
        "id": "f1",
        "label": "1. Frecuencia absoluta f₁ (0,15 × 40)",
        "type": "number",
        "integerOnly": true,
        "expected": 6
      },
      {
        "id": "f2",
        "label": "2. Frecuencia absoluta f₂ (sabiendo que F₂ = f₁ + f₂ = 22)",
        "type": "number",
        "integerOnly": true,
        "expected": 16
      },
      {
        "id": "f3",
        "label": "3. Frecuencia absoluta f₃ (el 30 % de 40)",
        "type": "number",
        "integerOnly": true,
        "expected": 12
      },
      {
        "id": "f4",
        "label": "4. Frecuencia absoluta f₄ (para completar n = 40)",
        "type": "number",
        "integerOnly": true,
        "expected": 6
      }
    ],
    "hints": [
      "Para la fila 0: f₁ = fr₁ × n = 0,15 × 40 = 6.",
      "Para la fila 1: como F₂ = f₁ + f₂ = 22 y f₁ = 6, entonces f₂ = 22 − 6 = 16.",
      "Para la fila 2: el 30 % de 40 es 0,30 × 40 = 12. Luego restá 40 − (6 + 16 + 12) para obtener f₄."
    ],
    "solutionSteps": [
      "f₁ = 0,15 × 40 = 6.",
      "f₂ = F₂ − f₁ = 22 − 6 = 16.",
      "f₃ = 0,30 × 40 = 12.",
      "f₄ = 40 − (6 + 16 + 12) = 40 − 34 = 6."
    ],
    "commonErrorNote": "Todas las columnas de la tabla están conectadas: podés ir de fr a f multiplicando por n, y de F a f restando."
  },
  {
    "id": "N2-11",
    "title": "Comparar dos cursos de distinto tamaño usando porcentajes",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-11"
    },
    "topic": "frecuencias",
    "level": "desafio",
    "skills": [
      "frecuencia-relativa",
      "porcentaje",
      "comparacion"
    ],
    "lessonId": "L04",
    "allowComparableVariant": false,
    "prompt": "En el Curso A (de 20 estudiantes), 9 alumnos aprobaron con nota sobresaliente. En el Curso B (de 25 estudiantes), 10 alumnos aprobaron con nota sobresaliente. ¿En cuál de los dos cursos hubo mayor proporción (porcentaje) de notas sobresalientes?",
    "parts": [
      {
        "id": "pct_a",
        "label": "1. Porcentaje de sobresalientes en el Curso A (9 de 20) (%)",
        "type": "number",
        "unit": "%",
        "expected": 45
      },
      {
        "id": "pct_b",
        "label": "2. Porcentaje de sobresalientes en el Curso B (10 de 25) (%)",
        "type": "number",
        "unit": "%",
        "expected": 40
      },
      {
        "id": "comparacion",
        "label": "3. ¿Qué conclusión es correcta?",
        "type": "select",
        "options": [
          {
            "value": "curso_a_mayor_pct",
            "label": "Aunque el Curso B tiene 1 alumno más en cantidad absoluta (10 frente a 9), el Curso A tiene mayor proporción de sobresalientes (45 % frente a 40 %)"
          },
          {
            "value": "curso_b_mayor_pct",
            "label": "El Curso B tiene mayor porcentaje porque 10 es mayor que 9"
          }
        ],
        "expected": "curso_a_mayor_pct"
      }
    ],
    "hints": [
      "Cuando los grupos tienen distinto total n (20 y 25), no alcanza con comparar las frecuencias absolutas (9 y 10).",
      "Calculá el porcentaje en cada curso: (9 ÷ 20) × 100 y (10 ÷ 25) × 100.",
      "Para comparar partes de muestras de distinto tamaño (n distinto), usá siempre frecuencias relativas o porcentajes."
    ],
    "solutionSteps": [
      "Curso A: fr = 9 ÷ 20 = 0,45 → 45 %.",
      "Curso B: fr = 10 ÷ 25 = 0,40 → 40 %.",
      "Conclusión: las frecuencias relativas y porcentuales permiten comparar de forma justa grupos de distinto tamaño; el Curso A tuvo mayor porcentaje (45 % > 40 %)."
    ],
    "commonErrorNote": "Para comparar partes de muestras de distinto tamaño (n distinto), usá siempre frecuencias relativas o porcentajes."
  },
  {
    "id": "N2-12",
    "title": "Consultas combinadas sobre una distribución de tardanzas",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N2-12"
    },
    "topic": "frecuencias",
    "level": "desafio",
    "skills": [
      "frecuencia-acumulada",
      "porcentaje",
      "interpretacion"
    ],
    "lessonId": "L05",
    "allowComparableVariant": true,
    "prompt": "En un registro de n = 25 estudiantes sobre la cantidad de veces que olvidaron traer la regla en el mes, la tabla de frecuencias absolutas es: 0 veces (f=10), 1 vez (f=8), 2 veces (f=4), 3 veces (f=2), 4 veces (f=1). Respondé las tres consultas.",
    "parts": [
      {
        "id": "pct_ninguna",
        "label": "1. ¿Qué porcentaje de estudiantes no olvidó la regla ninguna vez (0 veces) (%)?",
        "type": "number",
        "unit": "%",
        "expected": 40
      },
      {
        "id": "pct_hasta_1",
        "label": "2. ¿Qué porcentaje la olvidó como máximo 1 vez (0 o 1 vez) (%)?",
        "type": "number",
        "unit": "%",
        "expected": 72
      },
      {
        "id": "cant_entre_1_y_2",
        "label": "3. ¿Cuántos estudiantes la olvidaron entre 1 y 2 veces inclusive (1 o 2 veces)?",
        "type": "number",
        "integerOnly": true,
        "expected": 12,
        "commonErrors": [
          {
            "value": 22,
            "message": "22 incluye también a los 10 estudiantes de «0 veces». «Entre 1 y 2 veces inclusive» suma solo las filas de 1 vez (8) y 2 veces (4)."
          }
        ]
      }
    ],
    "hints": [
      "Con n = 25, cada estudiante representa 100 ÷ 25 = 4 %.",
      "«Como máximo 1 vez» es la acumulada hasta 1: 10 + 8 = 18 estudiantes → (18 ÷ 25) × 100 = 72 %.",
      "«Entre 1 y 2 veces inclusive» suma las frecuencias de 1 vez (8) y 2 veces (4)."
    ],
    "solutionSteps": [
      "1) 0 veces: f = 10 → (10 ÷ 25) × 100 = 40 %.",
      "2) Como máximo 1 vez (0 o 1): F(1) = 10 + 8 = 18 → (18 ÷ 25) × 100 = 72 %.",
      "3) Entre 1 y 2 veces inclusive: f(1) + f(2) = 8 + 4 = 12 estudiantes."
    ],
    "commonErrorNote": "Leé con precisión qué valores extremos incluye cada frase («ninguna vez», «como máximo 1», «entre 1 y 2»)."
  },
  {
    "id": "N3-01",
    "title": "Lectura directa de frecuencias desde un gráfico de barras",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-01"
    },
    "topic": "barras",
    "level": "inicial",
    "skills": [
      "lectura-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "En el gráfico de barras de las fichas («Libros leídos por 10 estudiantes»), las alturas de las barras para 0, 1, 2, 3 y 4 libros son: barra de 0 = 2; barra de 1 = 4; barra de 2 = 2; barra de 3 = 1; barra de 4 = 1. Respondé leyendo los valores del gráfico.",
    "chartPreview": {
      "title": "Libros leídos por 10 estudiantes",
      "xAxisLabel": "Cantidad de libros",
      "yAxisLabel": "Cantidad de estudiantes",
      "yStep": 1,
      "yMax": 4,
      "bars": [
        {
          "label": "0",
          "value": 2
        },
        {
          "label": "1",
          "value": 4
        },
        {
          "label": "2",
          "value": 2
        },
        {
          "label": "3",
          "value": 1
        },
        {
          "label": "4",
          "value": 1
        }
      ]
    },
    "parts": [
      {
        "id": "max_frec",
        "label": "1. ¿Cuántos estudiantes alcanzan la barra más alta (la de 1 libro)?",
        "type": "number",
        "integerOnly": true,
        "expected": 4
      },
      {
        "id": "total_lectura",
        "label": "2. Sumando la altura de todas las barras, ¿cuántos estudiantes fueron consultados en total?",
        "type": "number",
        "integerOnly": true,
        "expected": 10
      },
      {
        "id": "valor_moda",
        "label": "3. Mirando qué barra es la más alta, ¿cuál es la moda (Mo) de libros leídos?",
        "type": "number",
        "integerOnly": true,
        "expected": 1,
        "commonErrors": [
          {
            "value": 4,
            "message": "4 es la altura de la barra (4 estudiantes), pero el valor de la variable en el eje horizontal para esa barra es 1 libro."
          }
        ]
      }
    ],
    "hints": [
      "La altura en el eje Y indica cuántos estudiantes tienen ese valor.",
      "Sumá las cinco alturas: 2 + 4 + 2 + 1 + 1.",
      "La barra más alta está sobre el valor «1 libro» en el eje X."
    ],
    "solutionSteps": [
      "La barra más alta llega a 4 estudiantes (sobre el valor 1 libro).",
      "Suma de las alturas: 2 + 4 + 2 + 1 + 1 = 10 estudiantes en total.",
      "La moda es el valor en el eje X cuya barra es más alta: Mo = 1 libro."
    ],
    "commonErrorNote": "En un gráfico de frecuencias, la moda se lee en la base de la barra más alta (eje X), mientras que la altura (eje Y) es su frecuencia."
  },
  {
    "id": "N3-02",
    "title": "Identificar el ancho y separación recomendados en hoja cuadriculada",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-02"
    },
    "topic": "barras",
    "level": "inicial",
    "skills": [
      "construir-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Vas a dibujar un gráfico de barras con 5 categorías en tu hoja cuadriculada siguiendo la regla práctica de la guía: 1 cuadrito libre antes de la primera barra, 2 cuadritos de ancho para cada barra y 1 cuadrito libre de separación entre barras. ¿Cuántos cuadritos horizontales ocupará ese tramo en el eje X?",
    "parts": [
      {
        "id": "ancho_5_barras",
        "label": "1. ¿Cuántos cuadritos suman los anchos de las 5 barras juntas (5 × 2)?",
        "type": "number",
        "integerOnly": true,
        "expected": 10
      },
      {
        "id": "espacios_totales",
        "label": "2. Contando el cuadrito previo a cada una de las 5 barras (5 espacios de 1 cuadrito), ¿cuántos cuadritos suman barras más espacios?",
        "type": "number",
        "integerOnly": true,
        "expected": 15
      }
    ],
    "hints": [
      "Cada barra ocupa 2 cuadritos de ancho: para 5 barras son 5 × 2 = 10 cuadritos.",
      "Cada barra lleva 1 cuadrito de espacio previo (1 + 2 = 3 cuadritos por categoría).",
      "Para 5 categorías: 5 × 3 = 15 cuadritos (y conviene dejar 1 cuadrito más al final para la flecha del eje)."
    ],
    "solutionSteps": [
      "Ancho de las 5 barras: 5 × 2 = 10 cuadritos.",
      "Con 1 cuadrito de separación previo por cada barra (5 espacios): 10 + 5 = 15 cuadritos horizontales."
    ],
    "commonErrorNote": "Planificar los cuadritos del eje X antes de trazar evita que la última barra quede apretada en el borde de la hoja."
  },
  {
    "id": "N3-03",
    "title": "Construir el gráfico del ejemplo de 20 estudiantes de la guía",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-03"
    },
    "topic": "barras",
    "level": "inicial",
    "skills": [
      "construir-barras",
      "elegir-escala"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Con la tabla del ejemplo guiado de la guía (n = 20 estudiantes: 0 libros → 3; 1 libro → 8; 2 libros → 6; 3 libros → 2; 4 libros → 1), configurá el gráfico de barras.",
    "parts": [
      {
        "id": "constructor",
        "label": "Elegí una escala uniforme (1 o 2 estudiantes por cuadrito) y completá la frecuencia de cada barra",
        "type": "bar-builder",
        "unit": "estudiantes",
        "inputMode": "value",
        "maxGridCells": 12,
        "validScaleSteps": [
          1,
          2
        ],
        "bars": [
          {
            "key": "b0",
            "label": "0 libros",
            "value": 3
          },
          {
            "key": "b1",
            "label": "1 libro",
            "value": 8
          },
          {
            "key": "b2",
            "label": "2 libros",
            "value": 6
          },
          {
            "key": "b3",
            "label": "3 libros",
            "value": 2
          },
          {
            "key": "b4",
            "label": "4 libros",
            "value": 1
          }
        ]
      }
    ],
    "hints": [
      "Como la frecuencia máxima es 8, la escala de 1 cuadrito = 1 estudiante ocupa apenas 8 cuadritos de alto.",
      "Copiá en cada barra su frecuencia absoluta correspondiente: 3, 8, 6, 2 y 1.",
      "Verificá que la suma de las alturas de las barras (3 + 8 + 6 + 2 + 1 = 20) coincida con n = 20."
    ],
    "solutionSteps": [
      "Escala en Eje Y: 1 cuadrito = 1 estudiante (de 0 a 8) o 1 cuadrito = 2 estudiantes.",
      "Alturas: 0 libros = 3; 1 libro = 8; 2 libros = 6; 3 libros = 2; 4 libros = 1."
    ],
    "commonErrorNote": "Verificá que la suma de las alturas de las barras (3 + 8 + 6 + 2 + 1 = 20) coincida con n = 20."
  },
  {
    "id": "N3-04",
    "title": "Pasar de un gráfico de barras a una tabla de frecuencias",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-04"
    },
    "topic": "barras",
    "level": "inicial",
    "skills": [
      "grafico-a-tabla",
      "porcentaje"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Un gráfico de barras sobre el club o deporte elegido en el patio muestra cuatro barras con estas alturas: Vóley = 10, Básquet = 6, Fútbol = 5, Ajedrez = 4. Construí la tabla de frecuencias (f, fr y %) a partir del gráfico.",
    "chartPreview": {
      "title": "Actividad elegida en el patio (n = 25)",
      "xAxisLabel": "Actividad",
      "yAxisLabel": "Estudiantes",
      "yStep": 2,
      "yMax": 12,
      "bars": [
        {
          "label": "Vóley",
          "value": 10
        },
        {
          "label": "Básquet",
          "value": 6
        },
        {
          "label": "Fútbol",
          "value": 5
        },
        {
          "label": "Ajedrez",
          "value": 4
        }
      ]
    },
    "parts": [
      {
        "id": "tabla_desde_grafico",
        "label": "Completá f, fr y % leyendo las alturas del gráfico (total n = 25)",
        "type": "freq-table",
        "totalN": 25,
        "columns": [
          "f",
          "fr",
          "pct"
        ],
        "rows": [
          {
            "x": "Vóley",
            "label": "Vóley",
            "f": 10
          },
          {
            "x": "Básquet",
            "label": "Básquet",
            "f": 6
          },
          {
            "x": "Fútbol",
            "label": "Fútbol",
            "f": 5
          },
          {
            "x": "Ajedrez",
            "label": "Ajedrez",
            "f": 4
          }
        ]
      }
    ],
    "hints": [
      "La altura de cada barra es su frecuencia absoluta f: 10, 6, 5 y 4 (suman n = 25).",
      "Dividí cada altura entre 25 para hallar fr: 10/25 = 0,40; 6/25 = 0,24; 5/25 = 0,20; 4/25 = 0,16.",
      "Multiplicá por 100 para obtener los porcentajes: 40 %, 24 %, 20 % y 16 %."
    ],
    "solutionSteps": [
      "Total de observaciones leídas del gráfico: n = 10 + 6 + 5 + 4 = 25.",
      "Vóley: f = 10 → fr = 0,40 → 40 %.",
      "Básquet: f = 6 → fr = 0,24 → 24 %.",
      "Fútbol: f = 5 → fr = 0,20 → 20 %.",
      "Ajedrez: f = 4 → fr = 0,16 → 16 %."
    ],
    "commonErrorNote": "Como es una variable cualitativa nominal, la tabla incluye f, fr y %, pero no columna acumulada F."
  },
  {
    "id": "N3-05",
    "title": "Elegir una escala para valores grandes (máximo 60 en 12 cuadritos)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-05"
    },
    "topic": "barras",
    "level": "intermedio",
    "skills": [
      "elegir-escala"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Se recolectaron botellas plásticas para reciclar en tres cursos: 2.º A juntó 45 botellas, 2.º B juntó 60 botellas y 2.º C juntó 30 botellas. Si disponés de 12 cuadritos verticales para el eje Y, ¿cuántas botellas debe representar como mínimo cada cuadrito y qué altura tendrá cada barra con escala de 5 botellas por cuadrito?",
    "parts": [
      {
        "id": "escala_minima",
        "label": "1. Si el máximo es 60 botellas y hay 12 cuadritos disponibles, ¿cuántas botellas representa 1 cuadrito al hacer 60 ÷ 12?",
        "type": "number",
        "expected": 5
      },
      {
        "id": "alt_45",
        "label": "2. Con escala 1 cuadrito = 5 botellas, ¿cuántos cuadritos de alto mide la barra de 2.º A (45 botellas)?",
        "type": "number",
        "expected": 9
      },
      {
        "id": "alt_30",
        "label": "3. ¿Y cuántos cuadritos mide la barra de 2.º C (30 botellas)?",
        "type": "number",
        "expected": 6
      }
    ],
    "hints": [
      "Dividí el valor máximo (60) por los cuadritos disponibles (12): 60 ÷ 12 = 5 botellas por cuadrito.",
      "Con esa escala, dividí cada cantidad por 5: 45 ÷ 5 = 9 cuadritos y 30 ÷ 5 = 6 cuadritos.",
      "Para elegir rápido una escala, dividí el valor máximo por la cantidad de cuadritos disponibles y redondeá hacia arriba a un paso cómodo (como 2, 5 o 10)."
    ],
    "solutionSteps": [
      "Escala elegida: 1 cuadrito = 5 botellas (el eje Y avanza 0, 5, 10, 15, ..., 60 en 12 cuadritos).",
      "Alturas: 2.º A (45) → 9 cuadritos; 2.º B (60) → 12 cuadritos; 2.º C (30) → 6 cuadritos."
    ],
    "commonErrorNote": "Para elegir rápido una escala, dividí el valor máximo por la cantidad de cuadritos disponibles y redondeá hacia arriba a un paso cómodo (como 2, 5 o 10)."
  },
  {
    "id": "N3-06",
    "title": "Detectar un gráfico engañoso con el eje vertical cortado (sin empezar en 0)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-06"
    },
    "topic": "barras",
    "level": "intermedio",
    "skills": [
      "detectar-errores-graficos"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Dos listas estudiantiles recibieron 52 votos (Lista Celeste) y 56 votos (Lista Blanca). Alguien dibujó un gráfico de barras haciendo que el eje vertical empiece en 50 en vez de 0: así, la barra de 52 sube 2 cuadritos y la de 56 sube 6 cuadritos (parece el triple de alta). Analizá por qué es engañoso.",
    "parts": [
      {
        "id": "razon_real",
        "label": "1. ¿Por qué es engañoso empezar el eje vertical de un gráfico de barras en 50 en lugar de 0?",
        "type": "select",
        "options": [
          {
            "value": "rompe_proporcionalidad",
            "label": "Porque las alturas dejan de ser proporcionales a los datos reales: 56 no es el triple de 52 (apenas supera a 52 en 4 votos), pero al recortar la base parece tres veces mayor"
          },
          {
            "value": "es_correcto",
            "label": "No tiene ningún problema, siempre conviene empezar el eje en 50"
          }
        ],
        "expected": "rompe_proporcionalidad"
      },
      {
        "id": "altura_correcta",
        "label": "2. Si el eje empieza correctamente en 0 con escala 1 cuadrito = 8 votos, ¿cuántos cuadritos mide la barra de 56 votos?",
        "type": "number",
        "expected": 7
      },
      {
        "id": "altura_52",
        "label": "3. Y con esa misma escala desde 0 (1 cuadrito = 8 votos), ¿cuántos cuadritos mide la barra de 52 votos?",
        "type": "number",
        "expected": 6.5
      }
    ],
    "hints": [
      "En un gráfico de barras la vista compara el largo completo de cada rectángulo desde la base.",
      "Si la base no es 0, un rectángulo de 6 cuadritos parece el triple que uno de 2 cuadritos, aunque 56 y 52 sean casi iguales.",
      "Desde 0 con 8 votos por cuadrito: 56 ÷ 8 = 7 cuadritos y 52 ÷ 8 = 6,5 cuadritos (se ve que son muy parecidos)."
    ],
    "solutionSteps": [
      "Un gráfico de barras debe tener su base en 0 para que la altura visual sea proporcional a la magnitud representada.",
      "Con base en 0 y escala de 8 votos por cuadrito, 56 votos ocupa 7 cuadritos y 52 votos ocupa 6,5 cuadritos, reflejando fielmente la pequeña diferencia."
    ],
    "commonErrorNote": "Regla fundamental: en todo gráfico de barras el eje de frecuencias o cantidades debe comenzar en 0."
  },
  {
    "id": "N3-07",
    "title": "Identificar la barra mal dibujada comparando tabla y gráfico",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-07"
    },
    "topic": "barras",
    "level": "intermedio",
    "skills": [
      "detectar-errores-graficos",
      "lectura-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "La tabla de una encuesta indica: Frutilla = 14, Chocolate = 18, Dulce de leche = 16, Vainilla = 8 (escala 1 cuadrito = 2 votos). Al revisar el dibujo de un compañero, ves que las alturas en cuadritos que trazó son: Frutilla = 7 cuadritos, Chocolate = 9 cuadritos, Dulce de leche = 6 cuadritos, Vainilla = 4 cuadritos. ¿Qué barra está mal trazada y qué altura debería tener?",
    "parts": [
      {
        "id": "barra_erronea",
        "label": "1. ¿Cuál de las cuatro barras no coincide con la tabla?",
        "type": "select",
        "options": [
          {
            "value": "ddl",
            "label": "Dulce de leche (dibujó 6 cuadritos, que representan 12 votos en lugar de 16)"
          },
          {
            "value": "frutilla",
            "label": "Frutilla (7 cuadritos × 2 = 14 votos)"
          },
          {
            "value": "chocolate",
            "label": "Chocolate (9 cuadritos × 2 = 18 votos)"
          },
          {
            "value": "vainilla",
            "label": "Vainilla (4 cuadritos × 2 = 8 votos)"
          }
        ],
        "expected": "ddl"
      },
      {
        "id": "altura_ddl_correcta",
        "label": "2. ¿Cuántos cuadritos de altura debe medir la barra de «Dulce de leche» (16 votos) con escala de 2 votos por cuadrito?",
        "type": "number",
        "expected": 8
      }
    ],
    "hints": [
      "Multiplicá los cuadritos dibujados por 2 votos/cuadrito para ver qué valor representa cada barra.",
      "Frutilla: 7×2 = 14 (bien); Chocolate: 9×2 = 18 (bien); Dulce de leche: 6×2 = 12 (¡pero la tabla dice 16!).",
      "Para representar 16 votos con 2 votos por cuadrito se necesitan 16 ÷ 2 = 8 cuadritos."
    ],
    "solutionSteps": [
      "Con escala 1 cuadrito = 2 votos: Frutilla = 14÷2 = 7 cuadritos; Chocolate = 18÷2 = 9 cuadritos; Vainilla = 8÷2 = 4 cuadritos.",
      "La barra de Dulce de leche fue dibujada de 6 cuadritos (12 votos), pero su frecuencia es 16 → debe medir 16 ÷ 2 = 8 cuadritos."
    ],
    "commonErrorNote": "Al terminar un gráfico, revisá barra por barra que su altura coincida con la fila correspondiente de la tabla."
  },
  {
    "id": "N3-08",
    "title": "Gráfico con eje vertical en porcentajes (%)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-08"
    },
    "topic": "barras",
    "level": "intermedio",
    "skills": [
      "construir-barras",
      "porcentaje"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Con los datos de transporte de n = 40 estudiantes (Colectivo: 40 %, Moto: 25 %, Bicicleta: 20 %, Caminando: 15 %), se quiere construir un gráfico de barras cuyo eje vertical muestre porcentajes (%) usando la escala 1 cuadrito = 5 %. Calculá cuántos cuadritos sube cada barra.",
    "parts": [
      {
        "id": "constructor_pct",
        "label": "Con escala 1 cuadrito = 5 %, ingresá la altura en cuadritos de cada medio de transporte",
        "type": "bar-builder",
        "unit": "cuadritos",
        "inputMode": "cells",
        "maxGridCells": 12,
        "validScaleSteps": [
          5
        ],
        "bars": [
          {
            "key": "col",
            "label": "Colectivo (40 %)",
            "value": 40
          },
          {
            "key": "moto",
            "label": "Moto (25 %)",
            "value": 25
          },
          {
            "key": "bici",
            "label": "Bicicleta (20 %)",
            "value": 20
          },
          {
            "key": "cam",
            "label": "Caminando (15 %)",
            "value": 15
          }
        ]
      }
    ],
    "hints": [
      "Dividí cada porcentaje entre 5 % por cuadrito.",
      "Colectivo: 40 ÷ 5 = 8 cuadritos; Moto: 25 ÷ 5 = 5 cuadritos; Bicicleta: 20 ÷ 5 = 4 cuadritos; Caminando: 15 ÷ 5 = 3 cuadritos.",
      "Observá que las barras de frecuencias absolutas (16, 10, 8, 6 con escala 2) y las de porcentajes (40 %, 25 %, 20 %, 15 % con escala 5 %) tienen exactamente las mismas alturas en cuadritos (8, 5, 4 y 3) porque son proporcionales."
    ],
    "solutionSteps": [
      "Con 1 cuadrito = 5 %, el eje Y se gradúa 0 %, 5 %, 10 %, ..., 40 %.",
      "Alturas en cuadritos: Colectivo = 8; Moto = 5; Bicicleta = 4; Caminando = 3."
    ],
    "commonErrorNote": "Observá que las barras de frecuencias absolutas (16, 10, 8, 6 con escala 2) y las de porcentajes (40 %, 25 %, 20 %, 15 % con escala 5 %) tienen exactamente las mismas alturas en cuadritos (8, 5, 4 y 3) porque son proporcionales."
  },
  {
    "id": "N3-09",
    "title": "Hallar la escala desconocida de un gráfico a partir de una barra",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-09"
    },
    "topic": "barras",
    "level": "desafio",
    "skills": [
      "proporcionalidad-barras",
      "lectura-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "En un gráfico de barras se borró la numeración del eje Y, pero sabemos por el texto que la barra de «Teatro» representa 18 estudiantes y tiene 6 cuadritos de altura. En ese mismo gráfico, la barra de «Coro» mide 4 cuadritos y la de «Orquesta» mide 5,5 cuadritos. Descubrí la escala y cuántos estudiantes hay en Coro y en Orquesta.",
    "parts": [
      {
        "id": "escala",
        "label": "1. ¿Cuántos estudiantes representa cada cuadrito del eje Y (18 ÷ 6)?",
        "type": "number",
        "expected": 3
      },
      {
        "id": "coro",
        "label": "2. ¿Cuántos estudiantes hay en «Coro» (4 cuadritos)?",
        "type": "number",
        "integerOnly": true,
        "expected": 12
      },
      {
        "id": "orquesta",
        "label": "3. Si hubiera otra barra de 7 cuadritos, ¿cuántos estudiantes representaría?",
        "type": "number",
        "integerOnly": true,
        "expected": 21
      }
    ],
    "hints": [
      "Como la escala es uniforme, si 6 cuadritos equivalen a 18 estudiantes, 1 cuadrito equivale a 18 ÷ 6 = 3 estudiantes.",
      "Multiplicá la altura en cuadritos de cada barra por 3 estudiantes/cuadrito.",
      "La proporcionalidad directa entre altura y frecuencia permite deducir cualquier barra conociendo una sola referencia."
    ],
    "solutionSteps": [
      "Escala del eje Y: 18 estudiantes ÷ 6 cuadritos = 3 estudiantes por cuadrito.",
      "Coro (4 cuadritos): 4 × 3 = 12 estudiantes.",
      "Barra de 7 cuadritos: 7 × 3 = 21 estudiantes."
    ],
    "commonErrorNote": "La proporcionalidad directa entre altura y frecuencia permite deducir cualquier barra conociendo una sola referencia."
  },
  {
    "id": "N3-10",
    "title": "Calcular una medida de tendencia central leyendo un gráfico de barras",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-10"
    },
    "topic": "barras",
    "level": "desafio",
    "skills": [
      "lectura-barras",
      "media"
    ],
    "lessonId": "L07",
    "allowComparableVariant": false,
    "prompt": "Un gráfico de barras muestra la cantidad de hermanos de un grupo de estudiantes: la barra de «0 hermanos» llega a 3; la de «1 hermano» llega a 5; la de «2 hermanos» llega a 2. A partir del gráfico, calculá cuántos estudiantes hay en total, cuántos hermanos suman en conjunto y cuál es el promedio de hermanos por estudiante.",
    "chartPreview": {
      "title": "Cantidad de hermanos en un grupo de 10 estudiantes",
      "xAxisLabel": "Número de hermanos",
      "yAxisLabel": "Cantidad de estudiantes",
      "yStep": 1,
      "yMax": 5,
      "bars": [
        {
          "label": "0",
          "value": 3
        },
        {
          "label": "1",
          "value": 5
        },
        {
          "label": "2",
          "value": 2
        }
      ]
    },
    "parts": [
      {
        "id": "n_total",
        "label": "1. Total de estudiantes (n = suma de alturas)",
        "type": "number",
        "integerOnly": true,
        "expected": 10
      },
      {
        "id": "suma_hermanos",
        "label": "2. Suma total de hermanos (0×3 + 1×5 + 2×2)",
        "type": "number",
        "integerOnly": true,
        "expected": 9
      },
      {
        "id": "media_hermanos",
        "label": "3. Promedio (media x̄) de hermanos por estudiante",
        "type": "number",
        "unit": "hermanos",
        "expected": 0.9,
        "roundingDecimals": 2
      }
    ],
    "hints": [
      "Sumá las alturas de las tres barras para hallar n: 3 + 5 + 2 = 10 estudiantes.",
      "Multiplicá cada valor del eje X por la altura de su barra: 0×3 = 0; 1×5 = 5; 2×2 = 4 → suma = 9 hermanos.",
      "Dividí 9 hermanos entre 10 estudiantes."
    ],
    "solutionSteps": [
      "Total de estudiantes: n = 3 + 5 + 2 = 10.",
      "Suma de productos (x · f): 0×3 + 1×5 + 2×2 = 0 + 5 + 4 = 9 hermanos.",
      "Media aritmética: x̄ = 9 ÷ 10 = 0,9 hermanos por estudiante."
    ],
    "commonErrorNote": "No promedies las alturas de las barras ((3+5+2)÷3): lo que se promedia son los valores de la variable ponderados por su frecuencia."
  },
  {
    "id": "N3-11",
    "title": "Comparación de dos gráficos con distintas escalas verticales",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-11"
    },
    "topic": "barras",
    "level": "desafio",
    "skills": [
      "comparar-graficos",
      "elegir-escala"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "Dos grupos graficaron cuántas plantas germinaron en el vivero. En el Gráfico 1 (usando 1 cuadrito = 1 planta), la barra de «Tomate» mide 8 cuadritos. En el Gráfico 2 (usando 1 cuadrito = 3 plantas), la barra de «Tomate» mide 4 cuadritos. ¿En cuál de los dos gráficos hubo mayor cantidad de plantas de tomate germinadas?",
    "parts": [
      {
        "id": "plantas_g1",
        "label": "1. ¿Cuántas plantas representa la barra de 8 cuadritos en el Gráfico 1 (1 cuadrito = 1 planta)?",
        "type": "number",
        "integerOnly": true,
        "expected": 8
      },
      {
        "id": "plantas_g2",
        "label": "2. ¿Cuántas plantas representa la barra de 4 cuadritos en el Gráfico 2 (1 cuadrito = 3 plantas)?",
        "type": "number",
        "integerOnly": true,
        "expected": 12
      },
      {
        "id": "conclusion",
        "label": "3. ¿Qué conclusión sacás al comparar dos gráficos separados?",
        "type": "select",
        "options": [
          {
            "value": "mirar_escala",
            "label": "Antes de comparar alturas visuales entre dos gráficos distintos, hay que leer la escala del eje Y: en el Gráfico 2 hay más plantas (12 > 8) aunque su barra ocupe menos cuadritos"
          },
          {
            "value": "mas_cuadritos_siempre_gana",
            "label": "Siempre tiene mayor valor la barra que ocupa más cuadritos sin importar la escala"
          }
        ],
        "expected": "mirar_escala"
      }
    ],
    "hints": [
      "En el Gráfico 1: 8 cuadritos × 1 planta/cuadrito = 8 plantas.",
      "En el Gráfico 2: 4 cuadritos × 3 plantas/cuadrito = 12 plantas.",
      "12 plantas es mayor que 8 plantas, aunque 4 cuadritos sea más bajo en el papel que 8 cuadritos."
    ],
    "solutionSteps": [
      "Gráfico 1: 8 × 1 = 8 plantas.",
      "Gráfico 2: 4 × 3 = 12 plantas.",
      "Al comparar dos gráficos diferentes, siempre hay que verificar primero la escala graduada de cada eje Y."
    ],
    "commonErrorNote": "Si dos gráficos se van a presentar juntos para compararlos a simple vista, conviene dibujarlos con la misma escala."
  },
  {
    "id": "N3-12",
    "title": "Redactar una conclusión completa a partir de un gráfico de barras",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N3-12"
    },
    "topic": "barras",
    "level": "desafio",
    "skills": [
      "comunicar-resultados",
      "lectura-barras"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "En un gráfico sobre el tipo de lectura preferida por n = 40 estudiantes, las frecuencias son: Cuentos = 18, Novelas = 10, Historietas = 8, Poesía = 4. Calculá el porcentaje de la categoría más elegida y redactá una conclusión clara que comunique los resultados.",
    "parts": [
      {
        "id": "pct_cuentos",
        "label": "1. ¿Qué porcentaje del total de 40 estudiantes eligió «Cuentos» (f = 18) (%)?",
        "type": "number",
        "unit": "%",
        "expected": 45
      },
      {
        "id": "conclusion_rubrica",
        "label": "2. Redactá una conclusión breve sobre el gráfico y autoevaluala con la rúbrica",
        "type": "rubric",
        "placeholder": "Mencioná cuál fue la categoría más elegida (moda), su cantidad o porcentaje, y el total de encuestados...",
        "criteria": [
          "Identifiqué a «Cuentos» como la categoría más frecuente (moda), con 18 de los 40 estudiantes (45 %).",
          "Mencioné el contraste con las demás categorías o con la menos elegida («Poesía», con 4 estudiantes o 10 %)."
        ],
        "modelAnswer": "Sobre un total de 40 estudiantes consultados, la opción más elegida (moda) fue Cuentos con 18 respuestas (el 45 % del grupo), seguida por Novelas (10) e Historietas (8), mientras que Poesía fue la menos frecuente con 4 respuestas (10 %)."
      }
    ],
    "hints": [
      "Calculá (18 ÷ 40) × 100 = 45 %.",
      "Una buena conclusión estadística nombra el total (40 estudiantes), la moda (Cuentos, 18 o 45 %) y el contraste con la menor frecuencia.",
      "Comunicar resultados no es solo repetir la lista de números: es destacar qué predomina y en qué proporción."
    ],
    "solutionSteps": [
      "Porcentaje de Cuentos: (18 ÷ 40) × 100 = 45 %.",
      "Conclusión: Cuentos es la moda de la distribución (18 de 40 estudiantes, 45 %), superando ampliamente a las demás opciones."
    ],
    "commonErrorNote": "Comunicar resultados no es solo repetir la lista de números: es destacar qué predomina y en qué proporción."
  },
  {
    "id": "N4-01",
    "title": "Media aritmética como reparto equitativo (5 datos)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-01"
    },
    "topic": "medidas",
    "level": "inicial",
    "skills": [
      "media"
    ],
    "lessonId": "L07",
    "allowComparableVariant": true,
    "prompt": "En el ejemplo de la Ficha 6, cinco estudiantes leyeron esta cantidad de libros: 0, 1, 1, 2, 6. Calculá la suma total de libros y el promedio (media) por estudiante.",
    "dataset": [
      0,
      1,
      1,
      2,
      6
    ],
    "parts": [
      {
        "id": "suma",
        "label": "1. Suma total de libros (0 + 1 + 1 + 2 + 6)",
        "type": "number",
        "integerOnly": true,
        "expected": 10
      },
      {
        "id": "media",
        "label": "2. Media aritmética (x̄) en libros por estudiante",
        "type": "number",
        "unit": "libros",
        "expected": 2,
        "commonErrors": [
          {
            "value": 2.5,
            "message": "Dividiste entre 4 (quizás olvidando contar el 0). El 0 también es un estudiante: hay n = 5 datos (10 ÷ 5 = 2)."
          }
        ]
      }
    ],
    "hints": [
      "Sumá los 5 números: 0 + 1 + 1 + 2 + 6 = 10.",
      "El estudiante que leyó 0 libros también forma parte del grupo: hay n = 5 estudiantes.",
      "Dividí 10 entre 5."
    ],
    "solutionSteps": [
      "Suma de todos los datos: 0 + 1 + 1 + 2 + 6 = 10 libros.",
      "Cantidad de observaciones: n = 5 estudiantes.",
      "Media aritmética: x̄ = 10 ÷ 5 = 2 libros por estudiante."
    ],
    "commonErrorNote": "Nunca excluyas los ceros al contar la cantidad de datos n para el promedio."
  },
  {
    "id": "N4-02",
    "title": "Media, mediana y moda desde la tabla de 20 estudiantes de la guía",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-02"
    },
    "topic": "medidas",
    "level": "inicial",
    "skills": [
      "media-tabla",
      "mediana-par",
      "moda"
    ],
    "lessonId": "L07",
    "allowComparableVariant": true,
    "prompt": "En el ejemplo integrador de la guía (n = 20 estudiantes), los libros leídos fueron: 0 libros (f=3), 1 libro (f=8), 2 libros (f=6), 3 libros (f=2), 4 libros (f=1). Calculá la suma total de libros usando los productos (x · f), la media, la mediana y la moda.",
    "parts": [
      {
        "id": "suma_productos",
        "label": "1. Suma total de libros Σ(x · f) = 0×3 + 1×8 + 2×6 + 3×2 + 4×1",
        "type": "number",
        "integerOnly": true,
        "expected": 30,
        "commonErrors": [
          {
            "value": 10,
            "message": "10 es la suma de los valores distintos (0+1+2+3+4) sin multiplicar por sus frecuencias. Multiplicá cada valor por su f."
          }
        ]
      },
      {
        "id": "media",
        "label": "2. Media aritmética (x̄ = 30 ÷ 20) en libros",
        "type": "number",
        "unit": "libros",
        "expected": 1.5,
        "roundingDecimals": 2,
        "commonErrors": [
          {
            "value": 6,
            "message": "Dividiste 30 entre 5 (la cantidad de filas), pero hay n = 20 estudiantes en total: 30 ÷ 20 = 1,5."
          }
        ]
      },
      {
        "id": "mediana",
        "label": "3. Mediana (Me) buscando las posiciones 10 y 11 en la acumulada (F₁=3, F₂=11)",
        "type": "number",
        "unit": "libros",
        "expected": 1
      },
      {
        "id": "moda",
        "label": "4. Moda (Mo) de libros leídos",
        "type": "number-set",
        "expected": [
          1
        ],
        "maxFrequency": 8
      }
    ],
    "hints": [
      "Sumá los productos: 0 + 8 + 12 + 6 + 4 = 30 libros en total.",
      "Dividí 30 libros entre los n = 20 estudiantes (da 1,5).",
      "Como F₁ = 3 y F₂ = 11, tanto el 10.º como el 11.º estudiante leyeron 1 libro (Me = 1). Y la mayor frecuencia es f = 8 en 1 libro (Mo = 1)."
    ],
    "solutionSteps": [
      "Suma de productos: 0×3 + 1×8 + 2×6 + 3×2 + 4×1 = 0 + 8 + 12 + 6 + 4 = 30 libros.",
      "Media: x̄ = 30 ÷ 20 = 1,5 libros.",
      "Mediana: con n = 20, las posiciones 10 y 11 caen en la fila de 1 libro (que abarca de la posición 4 a la 11) → Me = 1 libro.",
      "Moda: la mayor frecuencia es f = 8, que corresponde a Mo = 1 libro."
    ],
    "commonErrorNote": "En una tabla de frecuencias, dividí siempre la suma de productos entre el total n (20), nunca entre la cantidad de filas (5)."
  },
  {
    "id": "N4-03",
    "title": "Mediana con cantidad impar de datos desordenados (n = 7)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-03"
    },
    "topic": "medidas",
    "level": "inicial",
    "skills": [
      "mediana-impar",
      "ordenar-datos"
    ],
    "lessonId": "L08",
    "allowComparableVariant": true,
    "prompt": "Las notas de 7 estudiantes se anotaron en este orden a medida que entregaban:\n9, 5, 10, 6, 8, 6, 7.\nOrdenalas de menor a mayor y hallá la posición central y el valor de la mediana (Me).",
    "dataset": [
      9,
      5,
      10,
      6,
      8,
      6,
      7
    ],
    "parts": [
      {
        "id": "posicion",
        "label": "1. ¿Qué número de posición ocupa el dato central cuando n = 7 ((7 + 1) ÷ 2)?",
        "type": "number",
        "integerOnly": true,
        "expected": 4
      },
      {
        "id": "mediana",
        "label": "2. Una vez ordenados (5, 6, 6, 7, 8, 9, 10), ¿cuál es el valor de la mediana (Me)?",
        "type": "number",
        "unit": "puntos",
        "expected": 7,
        "commonErrors": [
          {
            "value": 6,
            "message": "6 era el 4.º número de la lista desordenada (9, 5, 10, 6...), pero primero hay que ordenar de menor a mayor: 5, 6, 6, [7], 8, 9, 10."
          },
          {
            "value": 4,
            "message": "4 es la posición central, pero la nota ubicada en el 4.º lugar ordenado es 7."
          }
        ]
      }
    ],
    "hints": [
      "No busques el centro sin ordenar antes la lista.",
      "Ordená los 7 datos de menor a mayor, incluyendo el 6 repetido: 5, 6, 6, 7, 8, 9, 10.",
      "El 4.º dato de esa lista ordenada es la mediana."
    ],
    "solutionSteps": [
      "Paso 1 (ordenar): 5, 6, 6, 7, 8, 9, 10.",
      "Paso 2 (posición central para n = 7 impar): (7 + 1) ÷ 2 = 4 (cuarto lugar).",
      "Paso 3 (valor): el 4.º dato ordenado es Me = 7 puntos."
    ],
    "commonErrorNote": "Si tomás el centro sin ordenar (que era 6), obtenés un resultado incorrecto."
  },
  {
    "id": "N4-04",
    "title": "Mediana con cantidad par de datos desordenados (n = 6)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-04"
    },
    "topic": "medidas",
    "level": "inicial",
    "skills": [
      "mediana-par",
      "ordenar-datos"
    ],
    "lessonId": "L08",
    "allowComparableVariant": true,
    "prompt": "Se registraron los goles convertidos por un equipo en 6 fechas: 3, 0, 8, 1, 4, 2. Ordenalos de menor a mayor y calculá la mediana (Me).",
    "dataset": [
      3,
      0,
      8,
      1,
      4,
      2
    ],
    "parts": [
      {
        "id": "mediana",
        "label": "Mediana (Me) de los 6 datos ordenados (0, 1, 2, 3, 4, 8)",
        "type": "number",
        "unit": "goles",
        "expected": 2.5,
        "roundingDecimals": 2,
        "commonErrors": [
          {
            "value": 4.5,
            "message": "Tomaste el 3.º y 4.º dato de la lista desordenada (8 y 1 → 4,5). Ordená primero: 0, 1, 2, 3, 4, 8 y promediá 2 y 3."
          },
          {
            "value": 3.5,
            "message": "3,5 es la posición central ((6 + 1) ÷ 2 = 3,5). Los valores en las posiciones 3 y 4 son 2 y 3, cuyo promedio es 2,5."
          }
        ]
      }
    ],
    "hints": [
      "Ordená primero los 6 datos: 0, 1, 2, 3, 4, 8.",
      "Como n = 6 es par, tomá los dos valores centrales (posiciones 3 y 4): son el 2 y el 3.",
      "Promediá ambos: (2 + 3) ÷ 2."
    ],
    "solutionSteps": [
      "Datos ordenados (n = 6): 0, 1, 2, 3, 4, 8.",
      "Posiciones centrales: 3.ª (valor 2) y 4.ª (valor 3).",
      "Mediana: Me = (2 + 3) ÷ 2 = 2,5 goles."
    ],
    "commonErrorNote": "Cuando n es par, la mediana puede dar un decimal (2,5) aunque todos los datos sean enteros."
  },
  {
    "id": "N4-05",
    "title": "Hallar la mediana directamente desde una tabla de frecuencias (n = 15)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-05"
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "mediana-tabla",
      "frecuencia-acumulada"
    ],
    "lessonId": "L08",
    "allowComparableVariant": false,
    "prompt": "En el ejemplo resuelto de la guía sobre notas de n = 15 alumnos, la tabla muestra:\n• Nota 6: f₁ = 2 → F₁ = 2\n• Nota 7: f₂ = 3 → F₂ = 5\n• Nota 8: f₃ = 5 → F₃ = 10\n• Nota 9: f₄ = 3 → F₄ = 13\n• Nota 10: f₅ = 2 → F₅ = 15\nUbicá la posición central usando la columna F y determiná la mediana.",
    "parts": [
      {
        "id": "pos_central",
        "label": "1. Como n = 15 es impar, ¿qué posición central buscamos ((15 + 1) ÷ 2)?",
        "type": "number",
        "integerOnly": true,
        "expected": 8
      },
      {
        "id": "mediana_tabla",
        "label": "2. Mirando la columna acumulada F (F₂ = 5 cubre hasta el 5.º lugar y F₃ = 10 cubre del 6.º al 10.º lugar), ¿cuál es la nota mediana (Me)?",
        "type": "number",
        "unit": "puntos",
        "expected": 8,
        "commonErrors": [
          {
            "value": 5,
            "message": "5 es la frecuencia absoluta f₃ de la nota 8, pero la mediana es el valor de la nota: 8 puntos."
          }
        ]
      }
    ],
    "hints": [
      "Con 15 datos ordenados, el dato central está en la posición (15 + 1) ÷ 2 = 8.",
      "Las notas 6 y 7 llegan hasta la posición acumulada F₂ = 5.",
      "Las cinco notas 8 ocupan las posiciones 6, 7, 8, 9 y 10 (hasta F₃ = 10). Por lo tanto, en la posición 8 hay un 8."
    ],
    "solutionSteps": [
      "Posición central: (15 + 1) ÷ 2 = 8 (octavo dato ordenado).",
      "La primera acumulada que alcanza o supera a 8 es F₃ = 10, que corresponde a la fila de Nota 8.",
      "Por lo tanto, Me = 8 puntos."
    ],
    "commonErrorNote": "Para hallar la mediana en una tabla ordenada, buscá la primera fila cuya frecuencia acumulada F sea mayor o igual a la posición central."
  },
  {
    "id": "N4-06",
    "title": "Distribución bimodal: identificar las dos modas empatadas",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-06"
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "moda",
      "bimodal"
    ],
    "lessonId": "L09",
    "allowComparableVariant": false,
    "prompt": "En un registro de 12 entregas de actividades, las calificaciones fueron:\n6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 6.\nDeterminá cuál o cuáles son las modas y cómo se clasifica la distribución.",
    "dataset": [
      6,
      7,
      7,
      7,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      6
    ],
    "parts": [
      {
        "id": "modas",
        "label": "1. Ingresá las modas de la serie (separadas por «y» o por punto y coma, por ejemplo: 7 y 9)",
        "type": "number-set",
        "expected": [
          7,
          9
        ],
        "maxFrequency": 3
      },
      {
        "id": "clasificacion",
        "label": "2. ¿Cómo se clasifica esta serie según sus modas?",
        "type": "select",
        "options": [
          {
            "value": "bimodal",
            "label": "Bimodal (dos valores empatan en la frecuencia máxima de 3 repeticiones)"
          },
          {
            "value": "unimodal",
            "label": "Unimodal (una sola moda)"
          },
          {
            "value": "amodal",
            "label": "Amodal (sin moda)"
          }
        ],
        "expected": "bimodal"
      }
    ],
    "hints": [
      "Contá cuántas veces aparece cada nota: el 6 está 2 veces; el 7 está 3 veces; el 8 está 2 veces; el 9 está 3 veces; el 10 está 2 veces.",
      "La frecuencia más alta es 3, y la alcanzan tanto el 7 como el 9.",
      "Cuando dos valores empatan en el máximo superando al resto, la serie es bimodal."
    ],
    "solutionSteps": [
      "Frecuencias absolutas: f(6)=2, f(7)=3, f(8)=2, f(9)=3, f(10)=2.",
      "La frecuencia máxima es 3 y corresponde a dos valores: 7 y 9.",
      "Por lo tanto, Mo = 7 y 9, y la distribución es bimodal."
    ],
    "commonErrorNote": "Cuando hay empate entre dos valores con la frecuencia más alta, no se promedian las modas: se informan ambas (7 y 9)."
  },
  {
    "id": "N4-07",
    "title": "Serie amodal: cuando ningún valor se destaca en frecuencia",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-07"
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "moda",
      "amodal"
    ],
    "lessonId": "L09",
    "allowComparableVariant": false,
    "prompt": "Las temperaturas mínimas (en °C) registradas en 5 mañanas consecutivas fueron: 11, 13, 14, 16, 18. Determiná la media, la mediana y analizá qué ocurre con la moda.",
    "dataset": [
      11,
      13,
      14,
      16,
      18
    ],
    "parts": [
      {
        "id": "media",
        "label": "1. Media aritmética (x̄) en °C",
        "type": "number",
        "unit": "°C",
        "expected": 14.4,
        "roundingDecimals": 2
      },
      {
        "id": "mediana",
        "label": "2. Mediana (Me) en °C",
        "type": "number",
        "unit": "°C",
        "expected": 14
      },
      {
        "id": "moda",
        "label": "3. ¿Cuál es la moda (escribí «amodal» si ningún valor se repite más que otro)?",
        "type": "number-set",
        "expected": []
      }
    ],
    "hints": [
      "Suma: 11 + 13 + 14 + 16 + 18 = 72 °C → dividí entre 5 para la media.",
      "El 3.º dato ordenado es 14 °C (mediana).",
      "Como los 5 valores aparecen 1 sola vez cada uno, ninguno se repite más que los demás: en el criterio escolar la serie es amodal."
    ],
    "solutionSteps": [
      "Media: (11 + 13 + 14 + 16 + 18) ÷ 5 = 72 ÷ 5 = 14,4 °C.",
      "Mediana: el 3.º dato ordenado es Me = 14 °C.",
      "Moda: todos los valores tienen frecuencia 1 → la serie es amodal (sin moda destacada)."
    ],
    "commonErrorNote": "Cuando ningún valor supera en frecuencia a los demás, indicá que la serie es amodal."
  },
  {
    "id": "N4-08",
    "title": "Comparar el efecto de cambiar un extremo de 6 a 16 (ejemplo de Ficha 9)",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-08"
    },
    "topic": "medidas",
    "level": "intermedio",
    "skills": [
      "valores-extremos",
      "media",
      "mediana-impar",
      "moda"
    ],
    "lessonId": "L10",
    "allowComparableVariant": false,
    "prompt": "En la Ficha 9 comparamos dos listas de 5 datos:\n• Lista original: 0, 1, 1, 2, 6 (suma = 10, media = 2, mediana = 1, moda = 1).\n• Lista modificada (cambiando el 6 por un 16): 0, 1, 1, 2, 16.\nCalculá la nueva media, mediana y moda de la lista modificada y observá cuál cambió.",
    "dataset": [
      0,
      1,
      1,
      2,
      16
    ],
    "parts": [
      {
        "id": "nueva_media",
        "label": "1. Nueva media aritmética (x̄) de 0, 1, 1, 2, 16",
        "type": "number",
        "unit": "libros",
        "expected": 4
      },
      {
        "id": "nueva_mediana",
        "label": "2. Nueva mediana (Me) de 0, 1, 1, 2, 16",
        "type": "number",
        "unit": "libros",
        "expected": 1
      },
      {
        "id": "nueva_moda",
        "label": "3. Nueva moda (Mo) de 0, 1, 1, 2, 16",
        "type": "number-set",
        "expected": [
          1
        ],
        "maxFrequency": 2
      }
    ],
    "hints": [
      "Sumá los nuevos datos: 0 + 1 + 1 + 2 + 16 = 20 → dividí entre 5.",
      "El dato central (3.º lugar) sigue siendo 1 y el valor más repetido sigue siendo 1.",
      "Cuando se reemplaza el valor máximo por uno aún mayor sin cambiar la cantidad de datos n, la mediana no se mueve pero la media sube."
    ],
    "solutionSteps": [
      "Nueva suma: 0 + 1 + 1 + 2 + 16 = 20 → Nueva media: 20 ÷ 5 = 4 libros (se duplicó de 2 a 4 por efecto del extremo 16).",
      "Nueva mediana: el 3.º dato ordenado sigue siendo Me = 1 libro.",
      "Nueva moda: el valor que más se repite sigue siendo Mo = 1 libro."
    ],
    "commonErrorNote": "Cuando se reemplaza el valor máximo por uno aún mayor sin cambiar la cantidad de datos n, la mediana no se mueve pero la media sube."
  },
  {
    "id": "N4-09",
    "title": "Mediana en una variable cualitativa ordinal",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-09"
    },
    "topic": "medidas",
    "level": "desafio",
    "skills": [
      "cualitativa-ordinal",
      "mediana-impar",
      "pertinencia-medidas"
    ],
    "lessonId": "L08",
    "allowComparableVariant": false,
    "prompt": "En una consulta de satisfacción con n = 9 respuestas ordenadas de menor a mayor nivel (Baja < Media < Alta), se obtuvieron: 2 respuestas «Baja», 4 respuestas «Media» y 3 respuestas «Alta». Determiná qué medidas pueden calcularse y cuáles son sus valores.",
    "parts": [
      {
        "id": "medidas_posibles",
        "label": "1. Tratándose de una variable cualitativa ordinal, ¿qué medidas de tendencia central tienen sentido?",
        "type": "select",
        "options": [
          {
            "value": "moda_y_mediana",
            "label": "La moda y la mediana (porque hay frecuencias y un orden jerárquico, pero no suma numérica para la media)"
          },
          {
            "value": "solo_media",
            "label": "Únicamente la media aritmética"
          },
          {
            "value": "las_tres",
            "label": "Media, mediana y moda"
          }
        ],
        "expected": "moda_y_mediana"
      },
      {
        "id": "mediana_ordinal",
        "label": "2. Al ordenar las 9 respuestas (Baja, Baja, Media, Media, [Media], Media, Alta, Alta, Alta), ¿qué categoría ocupa la 5.ª posición central (mediana)?",
        "type": "select",
        "options": [
          {
            "value": "Media",
            "label": "Media (ocupa las posiciones 3.ª a 6.ª, incluida la 5.ª central)"
          },
          {
            "value": "Baja",
            "label": "Baja (posiciones 1.ª y 2.ª)"
          },
          {
            "value": "Alta",
            "label": "Alta (posiciones 7.ª a 9.ª)"
          }
        ],
        "expected": "Media"
      }
    ],
    "hints": [
      "Como las categorías son palabras ordenadas (Baja < Media < Alta), no se pueden sumar para una media, pero sí se pueden ordenar para ubicar el centro (mediana).",
      "Con n = 9 respuestas, la posición central es (9 + 1) ÷ 2 = 5.",
      "Las 2 primeras son «Baja» y las 4 siguientes (lugares 3, 4, 5 y 6) son «Media»."
    ],
    "solutionSteps": [
      "En una variable cualitativa ordinal son aplicables la Moda y la Mediana (no la Media).",
      "Posición central para n = 9: (9 + 1) ÷ 2 = 5. La 5.ª respuesta ordenada corresponde a la categoría «Media» (que además coincide con la moda, f = 4)."
    ],
    "commonErrorNote": "Recordá la tabla de la guía: la mediana aplica tanto a variables cuantitativas como a cualitativas ordinales."
  },
  {
    "id": "N4-10",
    "title": "Detectar el error de dividir por la cantidad de filas en lugar de n",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-10"
    },
    "topic": "medidas",
    "level": "desafio",
    "skills": [
      "media-tabla",
      "detectar-errores"
    ],
    "lessonId": "L07",
    "allowComparableVariant": false,
    "prompt": "En una tabla sobre cantidad de mascotas en n = 25 hogares, los valores son 0, 1, 2 y 3 mascotas (4 filas), y la suma de los productos Σ(x · f) dio 35 mascotas en total. Un compañero calculó la media haciendo 35 ÷ 4 = 8,75 mascotas por hogar. Explicá por qué es imposible ese resultado y calculá la media correcta.",
    "parts": [
      {
        "id": "por_que_imposible",
        "label": "1. Sin hacer cuentas siquiera, ¿cómo te das cuenta enseguida de que una media de 8,75 mascotas es imposible en esta tabla?",
        "type": "select",
        "options": [
          {
            "value": "fuera_de_rango",
            "label": "Porque los datos van de 0 a 3 mascotas: el promedio jamás puede ser mayor que el dato máximo (3); el error fue dividir entre las 4 filas en vez de dividir entre los 25 hogares"
          },
          {
            "value": "porque_tiene_coma",
            "label": "Porque un promedio nunca puede tener decimales"
          }
        ],
        "expected": "fuera_de_rango"
      },
      {
        "id": "media_correcta",
        "label": "2. ¿Cuál es la media aritmética correcta (35 ÷ 25) en mascotas por hogar?",
        "type": "number",
        "unit": "mascotas",
        "expected": 1.4,
        "roundingDecimals": 2
      }
    ],
    "hints": [
      "Todo promedio tiene que quedar comprendido entre el valor mínimo (0) y el valor máximo (3) de los datos.",
      "El compañero dividió por 4 (las filas) en vez de dividir por n = 25 hogares.",
      "Hacé 35 ÷ 25."
    ],
    "solutionSteps": [
      "Comprobación de sentido: si ningún hogar tiene más de 3 mascotas, el promedio no puede ser 8,75.",
      "El error fue dividir la suma de productos (35) entre la cantidad de filas (4) en lugar del total de hogares (n = 25).",
      "Media correcta: x̄ = 35 ÷ 25 = 1,4 mascotas por hogar."
    ],
    "commonErrorNote": "Control rápido de cualquier media o mediana: el resultado siempre debe estar entre el valor mínimo y el valor máximo de la lista."
  },
  {
    "id": "N4-11",
    "title": "Construir un conjunto de 5 datos que cumpla condiciones dadas",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-11"
    },
    "topic": "medidas",
    "level": "desafio",
    "skills": [
      "media",
      "mediana-impar",
      "moda"
    ],
    "lessonId": "L10",
    "allowComparableVariant": false,
    "prompt": "Queremos completar una lista ordenada de 5 números enteros de menor a mayor: 2, 2, 4, 6, [ ? ] de modo que su moda sea 2, su mediana sea 4 y su media aritmética sea exactamente 5. ¿Qué número debe ir en el quinto lugar?",
    "parts": [
      {
        "id": "suma_5_datos",
        "label": "1. Para que 5 datos tengan media 5, ¿cuánto deben sumar en total (5 × 5)?",
        "type": "number",
        "integerOnly": true,
        "expected": 25
      },
      {
        "id": "quinto_dato",
        "label": "2. Como los cuatro primeros suman 2 + 2 + 4 + 6 = 14, ¿cuál debe ser el quinto número?",
        "type": "number",
        "integerOnly": true,
        "expected": 11
      }
    ],
    "hints": [
      "Si 5 números tienen promedio 5, su suma total es 5 × 5 = 25.",
      "Restá a 25 la suma de los cuatro primeros (2 + 2 + 4 + 6 = 14).",
      "Verificá que con 2, 2, 4, 6, 11 la moda sigue siendo 2 y el dato central (3.º) sigue siendo 4."
    ],
    "solutionSteps": [
      "Suma necesaria para media 5 con n = 5 datos: 5 × 5 = 25.",
      "Suma de los 4 primeros datos: 2 + 2 + 4 + 6 = 14 → quinto dato = 25 − 14 = 11.",
      "Verificación de 2, 2, 4, 6, 11: moda = 2 (se repite dos veces), mediana = 4 (3.º dato ordenado) y media = 25 ÷ 5 = 5."
    ],
    "commonErrorNote": "Modificar el último dato hacia arriba permite ajustar la media sin cambiar la mediana (4) ni la moda (2)."
  },
  {
    "id": "N4-12",
    "title": "Elegir la medida adecuada para tres preguntas distintas sobre un mismo negocio",
    "source": {
      "kind": "nuevo",
      "label": "Práctica N4-12"
    },
    "topic": "medidas",
    "level": "desafio",
    "skills": [
      "eleccion-medida",
      "pertinencia-medidas"
    ],
    "lessonId": "L10",
    "allowComparableVariant": false,
    "prompt": "En una librería escolar se analizan tres consultas distintas. Asociá cada pregunta con la medida de tendencia central que mejor ayuda a responderla.",
    "parts": [
      {
        "id": "q_stock",
        "label": "1. «¿Qué color de carpeta se vende más para encargar mayor cantidad al proveedor?»",
        "type": "select",
        "options": [
          {
            "value": "moda",
            "label": "La moda (identifica la categoría o valor más frecuente)"
          },
          {
            "value": "media",
            "label": "La media aritmética"
          },
          {
            "value": "mediana",
            "label": "La mediana"
          }
        ],
        "expected": "moda"
      },
      {
        "id": "q_reparto",
        "label": "2. «Si juntamos la recaudación pareja de los 5 días hábiles, ¿cuánto ingresó por día en promedio?»",
        "type": "select",
        "options": [
          {
            "value": "media",
            "label": "La media aritmética (reparte el total acumulado entre los 5 días)"
          },
          {
            "value": "moda",
            "label": "La moda"
          }
        ],
        "expected": "media"
      },
      {
        "id": "q_extremo",
        "label": "3. «De 9 compras del turno mañana, 8 fueron de entre $2.000 y $4.000 y una sola compra mayorista fue de $95.000. ¿Qué medida resume mejor el gasto típico de un cliente común?»",
        "type": "select",
        "options": [
          {
            "value": "mediana",
            "label": "La mediana (porque no se distorsiona por la compra mayorista extrema de $95.000)"
          },
          {
            "value": "media",
            "label": "La media (aunque dé más de $13.000 y ningún cliente común haya gastado eso)"
          }
        ],
        "expected": "mediana"
      }
    ],
    "hints": [
      "Para saber «qué es lo que más sale» (y más aún si es color), buscás la moda.",
      "Para repartir un total parejo entre los días, buscás la media.",
      "Cuando hay un valor extremo ($95.000) que distorsiona el promedio, conviene la mediana."
    ],
    "solutionSteps": [
      "1) Color más vendido → Moda (lo más frecuente).",
      "2) Ingreso diario al repartir el total de 5 días parejos → Media.",
      "3) Compra típica en presencia de un valor muy extremo ($95.000) → Mediana."
    ],
    "commonErrorNote": "La mejor medida depende siempre de la naturaleza de la variable, la presencia de extremos y la pregunta que queremos responder."
  },
  {
    "id": "I-01",
    "title": "Integrador 1: Libros leídos por 10 estudiantes (de principio a fin)",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-01"
    },
    "topic": "integrador",
    "level": "intermedio",
    "skills": [
      "clasificar-variable",
      "frecuencia-absoluta",
      "porcentaje",
      "media",
      "mediana-par",
      "moda"
    ],
    "lessonId": "L07",
    "allowComparableVariant": false,
    "prompt": "Recorrido integrador completo con los datos ficticios de las fichas: se consultó a n = 10 estudiantes cuántos libros leyeron en el año y respondieron:\n0, 1, 1, 2, 0, 1, 3, 2, 1, 4.\n1) Clasificá la variable.\n2) Completá la tabla de frecuencias (f, fr, % y F).\n3) Calculá la media, la mediana y la moda.",
    "dataset": [
      0,
      1,
      1,
      2,
      0,
      1,
      3,
      2,
      1,
      4
    ],
    "parts": [
      {
        "id": "clasif",
        "label": "1. ¿Cómo se clasifica la variable «cantidad de libros leídos»?",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta (conteo entero)"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-discreta"
      },
      {
        "id": "tabla",
        "label": "2. Completá la tabla de frecuencias para 0, 1, 2, 3 y 4 libros (n = 10)",
        "type": "freq-table",
        "totalN": 10,
        "columns": [
          "f",
          "fr",
          "pct",
          "F"
        ],
        "rows": [
          {
            "x": 0,
            "label": "0 libros",
            "f": 2,
            "F": 2
          },
          {
            "x": 1,
            "label": "1 libro",
            "f": 4,
            "F": 6
          },
          {
            "x": 2,
            "label": "2 libros",
            "f": 2,
            "F": 8
          },
          {
            "x": 3,
            "label": "3 libros",
            "f": 1,
            "F": 9
          },
          {
            "x": 4,
            "label": "4 libros",
            "f": 1,
            "F": 10
          }
        ]
      },
      {
        "id": "media",
        "label": "3a. Media aritmética (x̄) en libros (suma = 15, n = 10)",
        "type": "number",
        "unit": "libros",
        "expected": 1.5,
        "roundingDecimals": 2
      },
      {
        "id": "mediana",
        "label": "3b. Mediana (Me) en libros (promedio de las posiciones 5 y 6)",
        "type": "number",
        "unit": "libros",
        "expected": 1
      },
      {
        "id": "moda",
        "label": "3c. Moda (Mo) en libros",
        "type": "number-set",
        "expected": [
          1
        ],
        "maxFrequency": 4
      }
    ],
    "hints": [
      "Frecuencias absolutas: f(0)=2, f(1)=4, f(2)=2, f(3)=1, f(4)=1 (total n = 10).",
      "Suma de todos los libros: 0×2 + 1×4 + 2×2 + 3×1 + 4×1 = 0 + 4 + 4 + 3 + 4 = 15 → media = 15 ÷ 10 = 1,5.",
      "En los 10 datos ordenados (0, 0, 1, 1, [1, 1], 2, 2, 3, 4), las posiciones 5 y 6 son 1 y 1 (mediana = 1), y el 1 se repite 4 veces (moda = 1)."
    ],
    "solutionSteps": [
      "1) Variable Cuantitativa Discreta.",
      "2) Tabla (n = 10): 0 (f=2, fr=0,20, 20 %, F=2); 1 (f=4, fr=0,40, 40 %, F=6); 2 (f=2, fr=0,20, 20 %, F=8); 3 (f=1, fr=0,10, 10 %, F=9); 4 (f=1, fr=0,10, 10 %, F=10).",
      "3) Suma = 15 → Media x̄ = 15 ÷ 10 = 1,5 libros; Mediana Me = 1 libro; Moda Mo = 1 libro."
    ],
    "commonErrorNote": "Conectá siempre tabla y medidas: la acumulada F₂ = 6 ya te avisa que las posiciones 5 y 6 están en la fila de 1 libro."
  },
  {
    "id": "I-02",
    "title": "Integrador 2: Goles por partido en un torneo escolar (n = 12)",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-02"
    },
    "topic": "integrador",
    "level": "intermedio",
    "skills": [
      "clasificar-variable",
      "frecuencia-absoluta",
      "construir-barras",
      "media",
      "mediana-par",
      "moda"
    ],
    "lessonId": "L07",
    "allowComparableVariant": false,
    "prompt": "En los 12 partidos de un torneo de futsal (datos ficticios), la cantidad de goles convertidos por un equipo fue:\n1, 2, 0, 2, 3, 1, 2, 2, 1, 3, 0, 1.\nClasificá la variable, completá la tabla, verificá las barras y calculá las tres medidas de tendencia central.",
    "dataset": [
      1,
      2,
      0,
      2,
      3,
      1,
      2,
      2,
      1,
      3,
      0,
      1
    ],
    "parts": [
      {
        "id": "clasif",
        "label": "1. Tipo de variable («cantidad de goles por partido»)",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          }
        ],
        "expected": "cuantitativa-discreta"
      },
      {
        "id": "tabla",
        "label": "2. Completá las frecuencias f y acumuladas F para 0, 1, 2 y 3 goles (n = 12)",
        "type": "freq-table",
        "totalN": 12,
        "columns": [
          "f",
          "F"
        ],
        "rows": [
          {
            "x": 0,
            "label": "0 goles",
            "f": 2,
            "F": 2
          },
          {
            "x": 1,
            "label": "1 gol",
            "f": 4,
            "F": 6
          },
          {
            "x": 2,
            "label": "2 goles",
            "f": 4,
            "F": 10
          },
          {
            "x": 3,
            "label": "3 goles",
            "f": 2,
            "F": 12
          }
        ]
      },
      {
        "id": "media",
        "label": "3a. Media aritmética (x̄) de goles por partido (suma = 18, n = 12)",
        "type": "number",
        "unit": "goles",
        "expected": 1.5,
        "roundingDecimals": 2
      },
      {
        "id": "mediana",
        "label": "3b. Mediana (Me) promediando las posiciones 6.ª (valor 1) y 7.ª (valor 2)",
        "type": "number",
        "unit": "goles",
        "expected": 1.5,
        "roundingDecimals": 2
      },
      {
        "id": "moda",
        "label": "3c. Modas de la distribución (hay empate entre dos valores)",
        "type": "number-set",
        "expected": [
          1,
          2
        ],
        "maxFrequency": 4
      }
    ],
    "hints": [
      "Contá cada valor en los 12 partidos: 0 goles (2), 1 gol (4), 2 goles (4), 3 goles (2).",
      "Suma total de goles: 0×2 + 1×4 + 2×4 + 3×2 = 0 + 4 + 8 + 6 = 18 → media = 18 ÷ 12 = 1,5.",
      "Con n = 12, la posición 6 tiene 1 gol (F₂ = 6) y la posición 7 tiene 2 goles: Me = (1 + 2) ÷ 2 = 1,5. Y tanto 1 como 2 se repiten 4 veces (bimodal)."
    ],
    "solutionSteps": [
      "1) Variable cuantitativa discreta.",
      "2) Frecuencias: f(0)=2, f(1)=4, f(2)=4, f(3)=2; acumuladas: F = 2, 6, 10, 12.",
      "3) Suma = 18 → Media = 18 ÷ 12 = 1,5 goles. Mediana = (1 + 2) ÷ 2 = 1,5 goles. Modas = 1 y 2 goles (bimodal)."
    ],
    "commonErrorNote": "Fijate qué bien se ve en la columna F el cambio entre la posición 6 (último 1) y la posición 7 (primer 2)."
  },
  {
    "id": "I-03",
    "title": "Integrador 3: Trabajos prácticos entregados a término (n = 20)",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-03"
    },
    "topic": "integrador",
    "level": "intermedio",
    "skills": [
      "frecuencia-absoluta",
      "porcentaje",
      "frecuencia-acumulada",
      "construir-barras",
      "media",
      "mediana-par",
      "moda"
    ],
    "lessonId": "L07",
    "allowComparableVariant": false,
    "prompt": "Se registró cuántos de los 4 trabajos prácticos del bimestre entregó en fecha cada uno de los n = 20 estudiantes de un grupo (datos ficticios):\n• 1 trabajo: 2 estudiantes\n• 2 trabajos: 5 estudiantes\n• 3 trabajos: 8 estudiantes\n• 4 trabajos: 5 estudiantes\nCompletá la tabla, armá el gráfico de barras y hallá la media, mediana y moda.",
    "parts": [
      {
        "id": "tabla",
        "label": "1. Completá f, fr, % y F (total n = 20)",
        "type": "freq-table",
        "totalN": 20,
        "columns": [
          "f",
          "fr",
          "pct",
          "F"
        ],
        "rows": [
          {
            "x": 1,
            "label": "1 TP",
            "f": 2,
            "F": 2
          },
          {
            "x": 2,
            "label": "2 TP",
            "f": 5,
            "F": 7
          },
          {
            "x": 3,
            "label": "3 TP",
            "f": 8,
            "F": 15
          },
          {
            "x": 4,
            "label": "4 TP",
            "f": 5,
            "F": 20
          }
        ]
      },
      {
        "id": "barras",
        "label": "2. Construí el gráfico de barras con escala uniforme",
        "type": "bar-builder",
        "unit": "estudiantes",
        "inputMode": "value",
        "maxGridCells": 12,
        "validScaleSteps": [
          1,
          2
        ],
        "bars": [
          {
            "key": "tp1",
            "label": "1 TP",
            "value": 2
          },
          {
            "key": "tp2",
            "label": "2 TP",
            "value": 5
          },
          {
            "key": "tp3",
            "label": "3 TP",
            "value": 8
          },
          {
            "key": "tp4",
            "label": "4 TP",
            "value": 5
          }
        ]
      },
      {
        "id": "media",
        "label": "3a. Media aritmética (x̄) de trabajos entregados (suma de productos = 56, n = 20)",
        "type": "number",
        "unit": "trabajos",
        "expected": 2.8,
        "roundingDecimals": 2
      },
      {
        "id": "mediana",
        "label": "3b. Mediana (Me) en trabajos (posiciones 10 y 11)",
        "type": "number",
        "unit": "trabajos",
        "expected": 3
      },
      {
        "id": "moda",
        "label": "3c. Moda (Mo) en trabajos",
        "type": "number-set",
        "expected": [
          3
        ],
        "maxFrequency": 8
      }
    ],
    "hints": [
      "Con n = 20, las frecuencias relativas son 2/20=0,10; 5/20=0,25; 8/20=0,40; 5/20=0,25.",
      "Suma de productos: 1×2 + 2×5 + 3×8 + 4×5 = 2 + 10 + 24 + 20 = 56 → media = 56 ÷ 20 = 2,8.",
      "Como F₂ = 7 y F₃ = 15, las posiciones 10 y 11 están en «3 trabajos» (Me = 3), que también es la mayor frecuencia (Mo = 3)."
    ],
    "solutionSteps": [
      "Tabla (n = 20): 1 TP (2, 0,10, 10 %, F=2); 2 TP (5, 0,25, 25 %, F=7); 3 TP (8, 0,40, 40 %, F=15); 4 TP (5, 0,25, 25 %, F=20).",
      "Suma de productos: 2 + 10 + 24 + 20 = 56 → Media x̄ = 56 ÷ 20 = 2,8 trabajos.",
      "Mediana Me = 3 trabajos y Moda Mo = 3 trabajos."
    ],
    "commonErrorNote": "El 65 % del curso (8 + 5 = 13 de 20) entregó 3 o 4 trabajos prácticos."
  },
  {
    "id": "I-04",
    "title": "Integrador 4: Tiempo de recorrido a la escuela y efecto de un dato extremo",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-04"
    },
    "topic": "integrador",
    "level": "desafio",
    "skills": [
      "cuantitativa-continua",
      "media",
      "mediana-impar",
      "valores-extremos"
    ],
    "lessonId": "L10",
    "allowComparableVariant": false,
    "prompt": "Se midió el tiempo en minutos que tardan 9 estudiantes en llegar al colegio (datos ficticios):\n10, 12, 12, 15, 15, 15, 18, 20, 63 (el último vive en otra localidad).\nClasificá la variable, hallá la media, la mediana y la moda, y decidí cuál medida describe mejor al grupo.",
    "dataset": [
      10,
      12,
      12,
      15,
      15,
      15,
      18,
      20,
      63
    ],
    "parts": [
      {
        "id": "clasif",
        "label": "1. ¿Cómo se clasifica la variable «tiempo de viaje a la escuela»?",
        "type": "select",
        "options": [
          {
            "value": "cuantitativa-continua",
            "label": "Cuantitativa continua (el tiempo es una magnitud continua aunque se haya anotado en minutos enteros)"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          }
        ],
        "expected": "cuantitativa-continua"
      },
      {
        "id": "media",
        "label": "2a. Media aritmética (x̄) de los 9 tiempos en minutos (suma = 180)",
        "type": "number",
        "unit": "min",
        "expected": 20
      },
      {
        "id": "mediana",
        "label": "2b. Mediana (Me) en minutos (5.º dato ordenado)",
        "type": "number",
        "unit": "min",
        "expected": 15
      },
      {
        "id": "moda",
        "label": "2c. Moda (Mo) en minutos",
        "type": "number-set",
        "expected": [
          15
        ],
        "maxFrequency": 3
      },
      {
        "id": "eleccion",
        "label": "3. ¿Por qué la mediana (15 min) representa mejor el tiempo típico de viaje que la media (20 min)?",
        "type": "select",
        "options": [
          {
            "value": "extremo_63",
            "label": "Porque 7 de los 9 estudiantes tardan 18 minutos o menos, y la media (20 min) quedó inflada por el único valor extremo de 63 minutos"
          },
          {
            "value": "media_mejor",
            "label": "La media de 20 min es más representativa porque coincide con el octavo estudiante"
          }
        ],
        "expected": "extremo_63"
      }
    ],
    "hints": [
      "El tiempo es una magnitud física continua.",
      "Sumá los 9 tiempos: 10 + 12 + 12 + 15 + 15 + 15 + 18 + 20 + 63 = 180 min → 180 ÷ 9 = 20 min.",
      "El 5.º dato ordenado es 15 min (mediana) y el 15 aparece 3 veces (moda)."
    ],
    "solutionSteps": [
      "1) Variable cuantitativa continua.",
      "2) Suma = 180 min → Media x̄ = 180 ÷ 9 = 20 min; Mediana (posición 5) = 15 min; Moda = 15 min.",
      "3) La mediana (15 min) y la moda (15 min) reflejan mejor el viaje típico, mientras que la media (20 min) está desplazada hacia arriba por el valor extremo de 63 min."
    ],
    "commonErrorNote": "Observá que 8 de los 9 estudiantes tardan 20 minutos o menos; el dato de 63 minutos arrastra la media."
  },
  {
    "id": "I-05",
    "title": "Integrador 5 (categórico nominal): Club o taller extracurricular elegido (n = 25)",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-05"
    },
    "topic": "integrador",
    "level": "intermedio",
    "skills": [
      "cualitativa-nominal",
      "frecuencia-relativa",
      "porcentaje",
      "construir-barras",
      "moda-categorica",
      "pertinencia-medidas"
    ],
    "lessonId": "L09",
    "allowComparableVariant": false,
    "prompt": "En un relevamiento a n = 25 estudiantes sobre qué taller extracurricular prefieren (datos ficticios), las respuestas fueron:\nRobótica: 10 | Teatro: 7 | Huerta: 5 | Ajedrez: 3.\nClasificá la variable, completá la tabla sin columna acumulada, configurá el gráfico de barras e indicá la única medida de tendencia central pertinente.",
    "parts": [
      {
        "id": "clasif",
        "label": "1. Clasificación de la variable «taller extracurricular elegido»",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          }
        ],
        "expected": "cualitativa-nominal"
      },
      {
        "id": "tabla",
        "label": "2. Completá fr y % para los 4 talleres (total n = 25)",
        "type": "freq-table",
        "totalN": 25,
        "columns": [
          "fr",
          "pct"
        ],
        "rows": [
          {
            "x": "Robótica",
            "label": "Robótica (f = 10)",
            "f": 10
          },
          {
            "x": "Teatro",
            "label": "Teatro (f = 7)",
            "f": 7
          },
          {
            "x": "Huerta",
            "label": "Huerta (f = 5)",
            "f": 5
          },
          {
            "x": "Ajedrez",
            "label": "Ajedrez (f = 3)",
            "f": 3
          }
        ]
      },
      {
        "id": "barras",
        "label": "3. Construí el gráfico de barras de frecuencias absolutas",
        "type": "bar-builder",
        "unit": "estudiantes",
        "inputMode": "value",
        "maxGridCells": 12,
        "validScaleSteps": [
          1,
          2
        ],
        "bars": [
          {
            "key": "rob",
            "label": "Robótica",
            "value": 10
          },
          {
            "key": "tea",
            "label": "Teatro",
            "value": 7
          },
          {
            "key": "hue",
            "label": "Huerta",
            "value": 5
          },
          {
            "key": "aje",
            "label": "Ajedrez",
            "value": 3
          }
        ]
      },
      {
        "id": "medida_unica",
        "label": "4. ¿Cuál es la única medida de tendencia central aplicable y cuál es su valor?",
        "type": "select",
        "options": [
          {
            "value": "moda_robotica",
            "label": "La moda: Mo = Robótica (elegida por 10 estudiantes, el 40 %). No corresponden media ni mediana por ser categorías nominales"
          },
          {
            "value": "media_625",
            "label": "La media: (10 + 7 + 5 + 3) ÷ 4 = 6,25 talleres"
          },
          {
            "value": "mediana_teatro",
            "label": "La mediana: Teatro y Huerta"
          }
        ],
        "expected": "moda_robotica"
      }
    ],
    "hints": [
      "Los nombres de talleres son categorías sin orden jerárquico (cualitativa nominal).",
      "Dividí cada frecuencia entre 25: 10/25 = 0,40 (40 %); 7/25 = 0,28 (28 %); 5/25 = 0,20 (20 %); 3/25 = 0,12 (12 %).",
      "Para categorías nominales nunca se calcula media ni mediana: solo la moda (Robótica)."
    ],
    "solutionSteps": [
      "1) Variable cualitativa nominal.",
      "2) fr y %: Robótica (0,40 / 40 %), Teatro (0,28 / 28 %), Huerta (0,20 / 20 %), Ajedrez (0,12 / 12 %).",
      "3) Barras de alturas 10, 7, 5 y 3.",
      "4) Única medida aplicable: Moda Mo = Robótica (no existen media de talleres ni mediana sin orden)."
    ],
    "commonErrorNote": "Promediar las frecuencias (25 ÷ 4 = 6,25) es el promedio de alumnos por grupo, no la media de la variable."
  },
  {
    "id": "I-06",
    "title": "Integrador 6 (categórico ordinal): Nivel de comprensión autoevaluado (n = 20)",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-06"
    },
    "topic": "integrador",
    "level": "intermedio",
    "skills": [
      "cualitativa-ordinal",
      "frecuencia-acumulada",
      "porcentaje",
      "moda-categorica",
      "mediana-par"
    ],
    "lessonId": "L05",
    "allowComparableVariant": false,
    "prompt": "Al terminar un tema, n = 20 estudiantes indicaron su nivel de seguridad ordenado de menor a mayor:\n• Inicial (necesito ayuda): 3 estudiantes\n• En proceso (resuelvo con guía): 5 estudiantes\n• Logrado (resuelvo solo): 8 estudiantes\n• Destacado (puedo explicarlo): 4 estudiantes\nCompletá la tabla (incluyendo F porque hay orden jerárquico) y respondé.",
    "parts": [
      {
        "id": "clasif",
        "label": "1. ¿Qué tipo de variable es este nivel de seguridad?",
        "type": "select",
        "options": [
          {
            "value": "cualitativa-ordinal",
            "label": "Cualitativa ordinal (categorías con orden creciente de logro)"
          },
          {
            "value": "cualitativa-nominal",
            "label": "Cualitativa nominal"
          },
          {
            "value": "cuantitativa-discreta",
            "label": "Cuantitativa discreta"
          }
        ],
        "expected": "cualitativa-ordinal"
      },
      {
        "id": "tabla",
        "label": "2. Completá f, fr, % y F respetando el orden de menor a mayor nivel (n = 20)",
        "type": "freq-table",
        "totalN": 20,
        "columns": [
          "f",
          "fr",
          "pct",
          "F"
        ],
        "rows": [
          {
            "x": "Inicial",
            "label": "1. Inicial",
            "f": 3,
            "F": 3
          },
          {
            "x": "En proceso",
            "label": "2. En proceso",
            "f": 5,
            "F": 8
          },
          {
            "x": "Logrado",
            "label": "3. Logrado",
            "f": 8,
            "F": 16
          },
          {
            "x": "Destacado",
            "label": "4. Destacado",
            "f": 4,
            "F": 20
          }
        ]
      },
      {
        "id": "pct_logrado_o_mas",
        "label": "3. ¿Qué porcentaje del curso alcanzó «Logrado» o «Destacado» (%)?",
        "type": "number",
        "unit": "%",
        "expected": 60
      },
      {
        "id": "moda_mediana",
        "label": "4. ¿Cuáles son la moda y la categoría mediana (posiciones 10 y 11)?",
        "type": "select",
        "options": [
          {
            "value": "logrado",
            "label": "Tanto la moda (f = 8) como las posiciones centrales 10 y 11 (entre F₂=8 y F₃=16) corresponden a la categoría «Logrado»"
          },
          {
            "value": "en_proceso",
            "label": "Ambas corresponden a «En proceso»"
          }
        ],
        "expected": "logrado"
      }
    ],
    "hints": [
      "Al ser cualitativa ordinal, sí tiene sentido acumular desde Inicial hasta Destacado: F = 3, 8, 16, 20.",
      "«Logrado o Destacado» suma 8 + 4 = 12 estudiantes de 20 → (12 ÷ 20) × 100 = 60 %.",
      "Las posiciones 10 y 11 caen dentro de «Logrado» (que abarca los lugares 9 a 16)."
    ],
    "solutionSteps": [
      "1) Variable cualitativa ordinal.",
      "2) Tabla (n = 20): Inicial (3, 0,15, 15 %, F=3); En proceso (5, 0,25, 25 %, F=8); Logrado (8, 0,40, 40 %, F=16); Destacado (4, 0,20, 20 %, F=20).",
      "3) Logrado o Destacado: (8 + 4) ÷ 20 × 100 = 60 %.",
      "4) Moda = Logrado y Mediana ordinal = Logrado."
    ],
    "commonErrorNote": "Cuando la variable es cualitativa ordinal, sí podemos responder preguntas de acumulación y hallar la mediana ordinal, pero nunca calcular una media numérica."
  },
  {
    "id": "I-07",
    "title": "Integrador 7 (auditoría de errores): Corregir un informe con 3 errores graves",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-07"
    },
    "topic": "integrador",
    "level": "desafio",
    "skills": [
      "detectar-errores-tabla",
      "media-tabla",
      "moda",
      "mediana-par"
    ],
    "lessonId": "L07",
    "allowComparableVariant": false,
    "prompt": "Un alumno analizó la cantidad de hermanos de n = 10 compañeros con esta tabla correcta: 0 hermanos (f=2), 1 hermano (f=4), 2 hermanos (f=3), 3 hermanos (f=1). Sin embargo, en sus conclusiones escribió tres errores:\n• Error A: «La suma de hermanos es 0+1+2+3 = 6, y como hay 4 filas la media es 6 ÷ 4 = 1,5».\n• Error B: «La moda es 4 porque 4 es el número más grande de la columna f».\n• Error C: «La mediana es 5,5 porque (10 + 1) ÷ 2 = 5,5».\nCalculá los tres valores verdaderos para corregir el informe.",
    "parts": [
      {
        "id": "media_real",
        "label": "1. Corregí el Error A: ¿cuál es la verdadera media aritmética (suma de productos = 0×2 + 1×4 + 2×3 + 3×1 = 13, dividida entre n = 10)?",
        "type": "number",
        "unit": "hermanos",
        "expected": 1.3,
        "roundingDecimals": 2
      },
      {
        "id": "moda_real",
        "label": "2. Corregí el Error B: ¿cuál es el verdadero valor de la moda (Mo)?",
        "type": "number-set",
        "expected": [
          1
        ],
        "maxFrequency": 4
      },
      {
        "id": "mediana_real",
        "label": "3. Corregí el Error C: ¿cuál es el verdadero valor de la mediana (datos en las posiciones 5 y 6)?",
        "type": "number",
        "unit": "hermanos",
        "expected": 1,
        "commonErrors": [
          {
            "value": 5.5,
            "message": "5,5 es la posición central. Mirá las frecuencias acumuladas: F(0)=2 y F(1)=2+4=6, así que en las posiciones 5 y 6 el dato vale 1 hermano."
          }
        ]
      }
    ],
    "hints": [
      "Para la media desde tabla, multiplicá cada x por su f (0×2 + 1×4 + 2×3 + 3×1 = 13) y dividí entre n = 10.",
      "Para la moda, mirá qué valor de hermanos tiene f = 4: es «1 hermano».",
      "Para la mediana, 5,5 indica que busques las posiciones 5 y 6: ambas caen en la fila de «1 hermano» (porque F₁ = 2 y F₂ = 6)."
    ],
    "solutionSteps": [
      "Corrección A (Media): Σ(x · f) = 0 + 4 + 6 + 3 = 13 hermanos → x̄ = 13 ÷ 10 = 1,3 hermanos (no se suman x sin frecuencia ni se divide por 4 filas).",
      "Corrección B (Moda): 4 es la frecuencia máxima, pero el valor del dato más repetido es Mo = 1 hermano.",
      "Corrección C (Mediana): 5,5 es la posición central; los datos en las posiciones 5 y 6 valen 1 y 1 → Me = 1 hermano."
    ],
    "commonErrorNote": "Este ejercicio reúne los tres errores más frecuentes en un examen: dividir por filas, dar f como moda y dar la posición como mediana."
  },
  {
    "id": "I-08",
    "title": "Integrador 8 (auditoría gráfica y de datos): Reconstruir el estudio correcto",
    "source": {
      "kind": "integrador",
      "label": "Integrador I-08"
    },
    "topic": "integrador",
    "level": "desafio",
    "skills": [
      "detectar-errores-graficos",
      "frecuencia-faltante",
      "porcentaje",
      "media"
    ],
    "lessonId": "L06",
    "allowComparableVariant": false,
    "prompt": "En un informe sobre la cantidad de libros prestados por la biblioteca a n = 20 socios (valores 1, 2, 3 y 4 libros), una mancha tapó la frecuencia de «2 libros». Se sabe que:\n• 1 libro: f₁ = 5 socios\n• 2 libros: f₂ = ? socios\n• 3 libros: f₃ = 4 socios\n• 4 libros: f₄ = 2 socios\nAdemás, quien hizo el gráfico dibujó la barra de «1 libro» de 5 cuadritos y la de «3 libros» de 4 cuadritos, pero puso el título del eje Y como «Libros» en vez de «Cantidad de socios». Hallá los valores correctos.",
    "parts": [
      {
        "id": "f2_faltante",
        "label": "1. ¿Cuál es la frecuencia absoluta f₂ de «2 libros» para completar los n = 20 socios?",
        "type": "number",
        "integerOnly": true,
        "expected": 9
      },
      {
        "id": "pct_hasta_2",
        "label": "2. ¿Qué porcentaje de los 20 socios pidió prestados 2 libros o menos (F₂ = f₁ + f₂) (%)?",
        "type": "number",
        "unit": "%",
        "expected": 70
      },
      {
        "id": "media_prestamos",
        "label": "3. ¿Cuál es la media aritmética (x̄) de libros prestados por socio (suma de productos ÷ 20)?",
        "type": "number",
        "unit": "libros",
        "expected": 2.15,
        "roundingDecimals": 2
      },
      {
        "id": "error_rotulo",
        "label": "4. ¿Cómo deben rotularse correctamente los ejes del gráfico de barras?",
        "type": "select",
        "options": [
          {
            "value": "x_libros_y_socios",
            "label": "Eje horizontal (X): Cantidad de libros prestados (1, 2, 3, 4) | Eje vertical (Y): Cantidad de socios (frecuencia)"
          },
          {
            "value": "x_socios_y_libros",
            "label": "Eje horizontal (X): Cantidad de socios | Eje vertical (Y): Cantidad de libros"
          }
        ],
        "expected": "x_libros_y_socios"
      }
    ],
    "hints": [
      "Restá a 20 las frecuencias conocidas: 20 − (5 + 4 + 2) = 9 socios.",
      "Hasta 2 libros inclusive: F₂ = 5 + 9 = 14 socios → (14 ÷ 20) × 100 = 70 %.",
      "Suma de productos: 1×5 + 2×9 + 3×4 + 4×2 = 5 + 18 + 12 + 8 = 43 libros → dividí 43 entre 20."
    ],
    "solutionSteps": [
      "1) Frecuencia faltante: f₂ = 20 − (5 + 4 + 2) = 9 socios.",
      "2) Acumulada hasta 2 libros: F₂ = 5 + 9 = 14 socios → (14 ÷ 20) × 100 = 70 %.",
      "3) Suma de productos: 1×5 + 2×9 + 3×4 + 4×2 = 43 → Media x̄ = 43 ÷ 20 = 2,15 libros por socio.",
      "4) Eje X: «Cantidad de libros prestados»; Eje Y: «Cantidad de socios»."
    ],
    "commonErrorNote": "En una distribución de frecuencias, el eje X lleva los valores de la variable y el eje Y lleva las frecuencias."
  }
];

  const LAB_PRESETS = [
  {
    "id": "fichas-10",
    "title": "Fichas: Libros leídos por 10 estudiantes",
    "mode": "numeric",
    "kind": "discreta",
    "unit": "libros",
    "description": "Ejemplo ficticio de las fichas para celular (n = 10; frecuencias 2, 4, 2, 1, 1).",
    "values": [
      0,
      1,
      1,
      2,
      0,
      1,
      3,
      2,
      1,
      4
    ]
  },
  {
    "id": "guia-20",
    "title": "Guía: Libros leídos por 20 estudiantes",
    "mode": "numeric",
    "kind": "discreta",
    "unit": "libros",
    "description": "Ejemplo integrador de la guía principal (n = 20; frecuencias 3, 8, 6, 2, 1; media 1,5).",
    "values": [
      1,
      2,
      0,
      1,
      3,
      2,
      1,
      0,
      2,
      1,
      4,
      1,
      2,
      0,
      1,
      3,
      2,
      1,
      2,
      1
    ]
  },
  {
    "id": "guia-tardanzas-11",
    "title": "Guía 4.7: Tardanzas de 11 alumnos (con extremo 11)",
    "mode": "numeric",
    "kind": "discreta",
    "unit": "tardanzas",
    "description": "Permite probar el comparador Antes/Después retirando el valor extremo 11.",
    "values": [
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      11
    ],
    "extremeValueToExplore": 11
  },
  {
    "id": "guia-aciertos-16",
    "title": "Guía 4.5: Aciertos de 16 alumnos en prueba corta",
    "mode": "numeric",
    "kind": "discreta",
    "unit": "aciertos",
    "description": "16 observaciones cuya suma es 127 y su media es 127/16 = 7,9375 ≈ 7,94.",
    "values": [
      5,
      6,
      6,
      7,
      7,
      7,
      8,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      10
    ]
  },
  {
    "id": "guia-zapatillas-12",
    "title": "Guía 4.2: Marcas de zapatillas (cualitativa nominal)",
    "mode": "categorical",
    "kind": "nominal",
    "unit": "",
    "description": "12 respuestas nominales (Nike, Adidas, Puma, Topper). Muestra por qué solo aplica la moda.",
    "values": [
      "Nike",
      "Adidas",
      "Puma",
      "Nike",
      "Topper",
      "Nike",
      "Adidas",
      "Puma",
      "Nike",
      "Topper",
      "Adidas",
      "Nike"
    ]
  },
  {
    "id": "guia-computadoras-ordinal",
    "title": "Guía 1.2: Estado de computadoras (cualitativa ordinal)",
    "mode": "categorical",
    "kind": "ordinal",
    "categoryOrder": [
      "Defectuoso",
      "Regular",
      "Bueno",
      "Excelente"
    ],
    "unit": "",
    "description": "15 equipos evaluados con categorías ordenadas de menor a mayor calidad.",
    "values": [
      "Bueno",
      "Excelente",
      "Regular",
      "Bueno",
      "Defectuoso",
      "Bueno",
      "Regular",
      "Excelente",
      "Bueno",
      "Bueno",
      "Regular",
      "Excelente",
      "Bueno",
      "Regular",
      "Excelente"
    ]
  }
];

  EstadisticaApp.ExercisesData = {
    EXERCISES: EXERCISES,
    LAB_PRESETS: LAB_PRESETS
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EstadisticaApp.ExercisesData;
  }
})(typeof globalThis !== 'undefined' ? globalThis : window);
