import { RecyclerProfile, MapPoint, MaterialCost } from './types';

export const RECYCLERS: RecyclerProfile[] = [
  {
    id: 'don-omar',
    name: 'Don Omar Antonio Valdés',
    age: 70,
    role: 'Reciclador de Oficio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoRs5GETci9chckriB9GPzpL22onOLK8wHbJKG6KRfLX71XQQ70pEt7oeJOZYzePHAKs4x1A4q7uLi0URREdJNrnVjmXgCZMTGpmN3tD0AdOld0G3vSjcu60UTuxqF_3kmrTXvR8XZzbH_nKtjtlfILqfgUBfP3vMJI-geJ9em-Ig8L-dOFyBuG_E0PaZS0clGgPDlRYpBVnrae0iDlXBvbjlwYooLQ_0lxo6mBH96QBqYKtZhShmE59yQvx-rdxfWIQDV4Am88q4',
    quote: 'Esto es un oficio. Quien no lo respeta bajo el sol, no conoce la dignidad que tiene limpiar el mundo.',
    bio: 'Tiene las manos curtidas por el peso constante de la madera y el cartón. Cada día empuja su carretilla improvisada por las calles históricas de Buga, buscando entre las bolsas de basura lo que el resto de ciudadanos desechan sin pensar un milisegundo. En un día difícil, su larga jornada de 12 horas apenas le deja $5.000 COP, un reflejo descarnado de un mercado asimétrico e implacable.',
    status: 'Independiente',
    audioUrl: 'https://drive.google.com/file/d/1qPQ90EiC7aXfi3aKOIsQ_ZwxiJKa2xPp/view',
    audioDuration: '2:15'
  },
  {
    id: 'monica-valencia',
    name: 'Mónica Valencia',
    role: 'Líder de Ruta FUVAR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoRs5GETci9chckriB9GPzpL22onOLK8wHbJKG6KRfLX71XQQ70pEt7oeJOZYzePHAKs4x1A4q7uLi0URREdJNrnVjmXgCZMTGpmN3tD0AdOld0G3vSjcu60UTuxqF_3kmrTXvR8XZzbH_nKtjtlfILqfgUBfP3vMJI-geJ9em-Ig8L-dOFyBuG_E0PaZS0clGgPDlRYpBVnrae0iDlXBvbjlwYooLQ_0lxo6mBH96QBqYKtZhShmE59yQvx-rdxfWIQDV4Am88q4',
    quote: 'Cuando ya lo ven a uno con un costal cargado atrás, ahí sí cambian las cosas. El uniforme nos da el escudo que la indiferencia nos quita.',
    bio: 'Mónica lleva más de 10 años recorriendo Buga entera. Conoce cada esquina, callejón y los estrictos horarios de recolección de los locales comerciales como la palma de su mano. Cree firmemente que la única vía de salida de la marginalidad urbana es la unión gremial y las tarifas reguladas.',
    status: 'Asociado',
    audioUrl: 'https://drive.google.com/file/d/1qPQ90EiC7aXfi3aKOIsQ_ZwxiJKa2xPp/view',
    audioDuration: '1:48'
  },
  {
    id: 'mauricio-peraza',
    name: 'Mauricio Peraza',
    role: 'Reciclador Autónomo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHPQjWMa2f4W-rmo_zIVVaCSgVivoQ6CLiJNJZ3Pq3RMwvZ0X73zqm_UW4ibShCDBjy3XIhWgbNZmU6A3M__pR9dWNb4fU5VYj5mbf8qmJqMmv1AN5zOzZfN4FuH-H2U4BiuWibwMpz5RB0bv4L7NCopgMhT4P7zTremB8B_s5w1jTr_qg7lxDpD3E-tmaRItlMrGOujcjbGYtE2Dok9ULNwXveefYpDRjKAzGiBiNiQiXy2tn_ipgsfEa_0ETdgdOfnQWrxouzFU',
    quote: 'Reciclar no es recoger basura; es darle una segunda oportunidad a la tierra y a nosotros mismos.',
    bio: 'Mauricio lleva mucho tiempo en el reciclaje independiente de metales. Su primera carreta de madera se la dio su padre tras perder el trabajo en una severa crisis. Es un conocedor innato de las aleaciones y alega que la calle es la escuela de supervivencia más pura.',
    status: 'Independiente',
    audioUrl: 'https://drive.google.com/file/d/1qPQ90EiC7aXfi3aKOIsQ_ZwxiJKa2xPp/view',
    audioDuration: '1:15'
  },
  {
    id: 'juan-carlos',
    name: 'Juan Carlos',
    role: 'Gestor Ambiental de Acopio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdSyBy16dwKJd4xUdq457A1bGJNoJPO0PGJ2wclvwNAlyRZB70JIWfjiBrzPRpM6jhnwbXdeqJoyVy399KlO8U6fN1ah85b7BCYMmxjpLt8dinZ4znodWzJSjL3RPBNZJmbGnXakkashAPJ1rHV4DZo2wDWok1jH-xJYFATiitbajt5v3n7dG2XTYrPVejyScwdvVUTZTPH2xyJNyiyd9z64k8dES3p2UN-45mG2_uT_V552l0agf1UwkyU5kZSashnogGPFeRjY',
    quote: 'Antes nos veían como parte del problema. Ahora, con el uniforme naranja de FUVAR, somos la solución que camina libre por las calles.',
    bio: 'Como miembro estandarte de FUVAR (Fundación Voluntad de Acopio y Reciclaje de Buga), Juan Carlos es el rostro de la transición social. Transita con orgullo usando sus botas de seguridad y su chaleco reflectivo naranja, empujando una bicicleta adaptada de alta resistencia.',
    status: 'Asociado',
    audioUrl: 'https://drive.google.com/file/d/1qPQ90EiC7aXfi3aKOIsQ_ZwxiJKa2xPp/view',
    audioDuration: '2:30'
  }
];

export const MAP_POINTS: MapPoint[] = [
  {
    id: 'plaza-cabal',
    title: 'Plaza de Cabal',
    category: 'historico',
    subtitle: 'Corazón social de Buga',
    description: 'El núcleo fundacional republicano, donde convergen el comercio tradicional y las complejas dinámicas de segregación social.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoRs5GETci9chckriB9GPzpL22onOLK8wHbJKG6KRfLX71XQQ70pEt7oeJOZYzePHAKs4x1A4q7uLi0URREdJNrnVjmXgCZMTGpmN3tD0AdOld0G3vSjcu60UTuxqF_3kmrTXvR8XZzbH_nKtjtlfILqfgUBfP3vMJI-geJ9em-Ig8L-dOFyBuG_E0PaZS0clGgPDlRYpBVnrae0iDlXBvbjlwYooLQ_0lxo6mBH96QBqYKtZhShmE59yQvx-rdxfWIQDV4Am88q4',
    details: 'Fundada bajo la rigurosa retícula colonial de las Leyes de Indias, la Plaza de Cabal es la parada inevitable para comerciantes e independientes. En sus costados, las bolsas de almacenes de ropa y restaurantes guardan el cartón corrugado de mayor gramaje, convirtiéndolo en un campo de disputa silencioso a tempranas horas de la mañana.',
    x: 48,
    y: 52,
    quote: 'La plaza es de todos, pero sólo quienes la caminamos de noche sabemos de qué está hecha.',
    quoteAuthor: 'Mónica V.'
  },
  {
    id: 'callejones',
    title: 'Callejones del Centro',
    category: 'historico',
    subtitle: 'Líneas de sombra y memoria',
    description: 'Estrechos pasajes empedrados que guardan los retales de la arquitectura colonial republicana y el paso del reciclador.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoRs5GETci9chckriB9GPzpL22onOLK8wHbJKG6KRfLX71XQQ70pEt7oeJOZYzePHAKs4x1A4q7uLi0URREdJNrnVjmXgCZMTGpmN3tD0AdOld0G3vSjcu60UTuxqF_3kmrTXvR8XZzbH_nKtjtlfILqfgUBfP3vMJI-geJ9em-Ig8L-dOFyBuG_E0PaZS0clGgPDlRYpBVnrae0iDlXBvbjlwYooLQ_0lxo6mBH96QBqYKtZhShmE59yQvx-rdxfWIQDV4Am88q4',
    details: 'Los pasadizos históricos que conectan el centro de Buga con las casonas antiguas son hermosos para el turista, pero desafiantes para la carretilla. El eco metálico del paso de la zorra resuena en las paredes encaladas mientras se extrae el archivo muerto de oficinas administrativas.',
    x: 62,
    y: 38,
    quote: 'En el laberinto blanco, cada puerta de madera tiene un horario de desecho diferente.',
    quoteAuthor: 'Don Omar'
  },
  {
    id: 'parque-reina',
    title: 'Parque de la Reina',
    category: 'social',
    subtitle: 'Encuentro identitario',
    description: 'Espacio recreativo alternativo donde se organizan las asambleas populares de base.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7IoGaE8lmK2GSFO7d7t1ZE7B9I9dpyzreF9_51ySkbob6MzgeIJpIkAsWx7yn3qRq7NPhjwTBLGGdlMpKCkx83PczcLzHRWLUEDlIDUHKf7VsNIT_9IEQGoQb_7RZ5veynXb7dfNi2lRGt81AakFqPGT-bjowt98We7Lc7u2557Vn1gyuaa5QJl6nxlkLwr9fxTGynv-CW8XxCoBs7oLsIJci2yWJASixHobB66tWmuCHQQ4ljmLiGyEZqHarsZQFK0_t9FngtY0',
    details: 'El Parque de la Reina funciona como un respiradero de la densa trama urbana del centro de Buga. Aquí, los recicladores independientes pausan su extenuante jornada para resguardarse del inclemente sol del Valle del Cauca bajo la cobija de árboles centenarios.',
    x: 32,
    y: 72,
    quote: 'Un vaso de agua fría aquí debajo del samán vale más que un buen día de cobre.',
    quoteAuthor: 'Mauricio P.'
  },
  {
    id: 'estacion',
    title: 'Estación del Ferrocarril',
    category: 'ambiental',
    subtitle: 'Vestigio de progreso industrial',
    description: 'Arquitectura industrial que hoy se erige como hito monumental, cercana a las rutas de pesaje periféricas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHPQjWMa2f4W-rmo_zIVVaCSgVivoQ6CLiJNJZ3Pq3RMwvZ0X73zqm_UW4ibShCDBjy3XIhWgbNZmU6A3M__pR9dWNb4fU5VYj5mbf8qmJqMmv1AN5zOzZfN4FuH-H2U4BiuWibwMpz5RB0bv4L7NCopgMhT4P7zTremB8B_s5w1jTr_qg7lxDpD3E-tmaRItlMrGOujcjbGYtE2Dok9ULNwXveefYpDRjKAzGiBiNiQiXy2tn_ipgsfEa_0ETdgdOfnQWrxouzFU',
    details: 'Un monumento patrio de alta valía arquitectónica que atestigua el pasado ferroviario del Valle del Cauca. Sus cercanías señalan el límite donde el centro histórico cede ante la periferia de bodegas industriales de acopio primario.',
    x: 25,
    y: 28,
    quote: 'Ver los vagones vacíos recuerda el volumen de lo que solía fluir, hoy cargamos el peso a pulso.',
    quoteAuthor: 'Juan Carlos'
  },
  {
    id: 'sede-fuvar',
    title: 'Sede Fundación FUVAR',
    category: 'ambiental',
    subtitle: 'Epicentro de Dignidad',
    description: 'El centro logístico donde se pesa, clasifica y compacta el esfuerzo urbano antes de entregarlo a la escala siderúrgica.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAenSKFTf6MuTcPz8MMvNviB4MiZju1rundn8bnikBntMDTTK7ryX6p8uP7C8P8GEkw_ogCQomVocveh7rF0vBILvrT-OB5ibIpe46dV3TTaF0KiGWVOdbkdBnisF8EAd5tB4pxBwbtE1bhmV8AAjJA2gSN1bIB8JOzwbENR6zQSjIdCKunICboUxaOeN56fjKVPHJv5TxLrIOOHSSCeo9pm2TGRIdEUyPEg1beWOaz5weM6AUWwq-UG5NaI4B0WWUH_C0nx4kCZVXkg',
    details: 'Es el puerto seguro. Aquí las carretas y bicicletas de carga depositan el material recolectado. Las básculas certificadas aseguran un pago ético y transparente, mitigando el abuso sistemático de los intermediarios especuladores callejeros.',
    x: 75,
    y: 65,
    quote: 'FUVAR no es sólo una bodega; es la prueba física de que organizados podemos exigir derechos.',
    quoteAuthor: 'Dirección Gral. FUVAR'
  }
];

export const MATERIALS: MaterialCost[] = [
  {
    id: 'carton',
    name: 'Cartón Corrugado',
    unit: 'kg',
    paidToRecycler: 200,
    paidToIndustry: 350,
    description: 'Es el sustento básico de alto volumen. Los recicladores recolectan pacas pesadas para compensar la severa subvaloración del precio.',
    iconName: 'Package'
  },
  {
    id: 'pet',
    name: 'Plástico PET Transparente',
    unit: 'kg',
    paidToRecycler: 800,
    paidToIndustry: 2100,
    description: 'Tiene un rendimiento óptimo de reciclabilidad, pero un kilogramo exige recolectar docenas de botellas vacías aplastadas a mano.',
    iconName: 'GlassWater'
  },
  {
    id: 'archivo',
    name: 'Papel de Archivo Blanco',
    unit: 'kg',
    paidToRecycler: 400,
    paidToIndustry: 950,
    description: 'Procedente de despachos legales y oficinas del sector histórico. Su valor es estable por su alto porcentaje de celulosa pura.',
    iconName: 'FileText'
  },
  {
    id: 'vidrio',
    name: 'Vidrio Verde / Ámbar',
    unit: 'kg',
    paidToRecycler: 80,
    paidToIndustry: 250,
    description: 'Extremadamente pesado y cortante. Requiere vehículos muy fuertes y produce ingresos marginales para el esfuerzo requerido.',
    iconName: 'Inbox'
  },
  {
    id: 'chatarra',
    name: 'Metales / Chatarra de Hierro',
    unit: 'kg',
    paidToRecycler: 600,
    paidToIndustry: 1400,
    description: 'Altamente codiciada en chatarrerías secundarias. Su precio varía según la cotización del acero en los mercados de fundición.',
    iconName: 'Layers'
  }
];

export const TIMELINE = [
  {
    year: '2003',
    title: 'Sentencia T-724 de la Corte',
    desc: 'Hito jurisprudencial donde la Corte Constitucional amparó los derechos fundamentales de los recicladores de oficio, ordenando acciones afirmativas para integrarlos en la gestión de residuos públicos del país.'
  },
  {
    year: '2016',
    title: 'Nace la Fundación FUVAR',
    desc: 'Unión colectiva de más de 60 recicladores en Guadalajara de Buga para resistir los monopolios de recolección privada y consolidar el primer centro autónomo de acopio ético.'
  },
  {
    year: '2024',
    title: 'El Decreto 0271',
    desc: 'Normativa nacional que implementa la tarifa de remuneración directa al reciclador por tonelada recuperada, un avance administrativo de alta jerarquía jurídica pero lenta implementación real.'
  },
  {
    year: '2026',
    title: 'Hacia la Red de Protección',
    desc: 'Horizonte de proyección para consolidar la protección de salud ocupacional, tecnificación del transporte urbano (sustitución de tracción humana) y pensión digna para recicladores mayores.'
  }
];
