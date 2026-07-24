# NEXORAIZ

Es una plataforma web integral diseñada para promover, preservar y revitalizar la riqueza cultural, el patrimonio turístico, las lenguas indígenas y la tradición oral nicaragüense.

## Características Principales

El sistema está dividido en módulos interactivos y dinámicos:

- Inicio / Visión General: Presentación de la plataforma y acceso rápido a los diferentes módulos.

- Turismo e Historias: Guía turística amigable con mapa práctico y videos descriptivos interactivos.

- Aprende Idiomas: Módulo de aprendizaje interactivo (estilo Duolingo) enfocado en lenguas originarias (*Mayagna* y *Miskito*), con sistema de vidas, niveles progresivos y puntajes.

- Leyendas y Mitos: Espacio dedicado a la tradición oral y mitología local, con visualización accesible.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Leafleft


## Estructura del Proyecto

NexoRaiz/
│
├── index.html        >   Estructura principal y contenedores de los módulos.
├── css/
│   ├── main.css      >   Estilos globales y maquetación (Navbar y Sidebar)
│   └── style.css     >   Estilos específicos de componentes e idiomas
    └── turismo.css   >   Estilos específicos de componentes del apartado turístico.
└── js/
    ├── main.js       >   Lógica de navegación entre pestañas.
    ├── idiomas.js    >   Lógica del juego de aprendizaje de idiomas.
    ├── turismo.js    >   Manejo de datos y filtros de turismo.
    └── leyendas.js   >   Renderizado del módulo de leyendas.
    ├── contenido.js  >   Contiene los datos mostrados, tales como ubicaciones y preguntas, para los apartados de turismo e idiomas, respectivamente.