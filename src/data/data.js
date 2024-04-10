import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
  FaHouse,
  FaUser,
  FaCubesStacked,
  FaLaptopCode,
  FaEnvelope,
  FaMusic,
  FaBookOpenReader,
  FaDog,
  FaGamepad,
} from "react-icons/fa6";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiSass,
  DiReact,
  DiAngularSimple,
  DiNodejsSmall,
  DiJava,
  DiJavascript,
  DiPhp,
  DiGit,
  DiNpm,
  DiVisualstudio,
  DiNetbeans,
  DiEclipse,
  DiMysql,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiVuedotjs,
  SiExpress,
  SiSpringboot,
  SiLaravel,
  SiCplusplus,
  SiPnpm,
  SiYarn,
  SiNetlify,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiVite,
  SiMariadb,
  SiSqlite,
  SiPostgresql,
} from "react-icons/si";

export const socials = [
  {
    Icon: FaSquareXTwitter,
    text: "sr-only.twitterX",
    links: "https://twitter.com/Pancratzia",
  },
  {
    Icon: FaSquareGithub,
    text: "sr-only.github",
    links: "https://github.com/Pancratzia",
  },
  {
    Icon: FaLinkedin,
    text: "sr-only.linkedin",
    links: "https://www.linkedin.com/in/leortegaperez/",
  },
];

export const routes = [
  {
    Icon: FaHouse,
    text: "sr-only.home",
    link: "/",
  },
  {
    Icon: FaUser,
    text: "sr-only.about",
    link: "/about",
  },
  {
    Icon: FaCubesStacked,
    text: "sr-only.skills",
    link: "/skills",
  },
  {
    Icon: FaLaptopCode,
    text: "sr-only.projects",
    link: "/projects",
  },
  {
    Icon: FaEnvelope,
    text: "sr-only.contact",
    link: "/contact",
  },
];

export const interests = [
  {
    Icon: FaMusic,
    text: "sr-only.interests.music",
  },
  {
    Icon: FaBookOpenReader,
    text: "sr-only.interests.reading",
  },
  {
    Icon: FaDog,
    text: "sr-only.interests.dog",
  },
  {
    Icon: FaGamepad,
    text: "sr-only.interests.gaming",
  },
];

export const languages = [
  {
    text: "pages.about_me.languages.spanish.name",
    level: "pages.about_me.languages.spanish.level",
  },
  {
    text: "pages.about_me.languages.english.name",
    level: "pages.about_me.languages.english.level",
  },
];

export const techStak = [
  {
    name: "FrontEnd",
    stack: [
      {
        name: "HTML",
        Icon: DiHtml5,
      },
      {
        name: "CSS",
        Icon: DiCss3,
      },
      {
        name: "SASS",
        Icon: DiSass,
      },
      {
        name: "Bootstrap",
        Icon: DiBootstrap,
      },
      {
        name: "Tailwind",
        Icon: SiTailwindcss,
      },
      {
        name: "React",
        Icon: DiReact,
      },
      {
        name: "Angular",
        Icon: DiAngularSimple,
      },
      {
        name: "VUE",
        Icon: SiVuedotjs,
      },
    ],
  },
  {
    name: "BackEnd",
    stack: [
      {
        name: "Node",
        Icon: DiNodejsSmall,
      },
      {
        name: "Express",
        Icon: SiExpress,
      },
      {
        name: "Laravel",
        Icon: SiLaravel,
      },
      {
        name: "Spring",
        Icon: SiSpringboot,
      },
      {
        name: "Firebase",
        Icon: SiFirebase,
      },
    ],
  },
  {
    name: "Languages",
    stack: [
      {
        name: "Java",
        Icon: DiJava,
      },
      {
        name: "C++",
        Icon: SiCplusplus,
      },
      {
        name: "PHP",
        Icon: DiPhp,
      },
      {
        name: "Javascript",
        Icon: DiJavascript,
      },
    ],
  },
  {
    name: "DevOps",
    stack: [
      {
        name: "Git",
        Icon: DiGit,
      },
      {
        name: "GitHub",
        Icon: FaSquareGithub,
      },
      {
        name: "NPM",
        Icon: DiNpm,
      },
      {
        name: "Yarn",
        Icon: SiYarn,
      },
      {
        name: "Pnpm",
        Icon: SiPnpm,
      },
      {
        name: "Netlify",
        Icon: SiNetlify,
      },
      {
        name: "Vercel",
        Icon: SiVercel,
      },
      {
        name: "Vite",
        Icon: SiVite,
      },
    ],
  },
  {
    name: "Tools",
    stack: [
      {
        name: "VS Code",
        Icon: DiVisualstudio,
      },
      {
        name: "Postman",
        Icon: SiPostman,
      },
      {
        name: "Netbeans",
        Icon: DiNetbeans,
      },
      {
        name: "Eclipse",
        Icon: DiEclipse,
      },
    ],
  },
  {
    name: "Database",
    stack: [
      {
        name: "MySQL",
        Icon: DiMysql,
      },
      {
        name: "SQLite",
        Icon: SiSqlite,
      },
      {
        name: "MariaDB",
        Icon: SiMariadb,
      },
      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
      }
    ],
  },
];

export const PROJECTS = [
  {
    title: "Landing Page - Dra. Yuleima Pérez",
    image: "landingpage",
    description: "Landing Page para una ginecobstetra. Su propósito principal es mostrar las cuentas de Redes Sociales de la doctora, sus servicios y su contacto. El proyecto está alojado en Vercel y se encuentra correctamente indexado en Google Search.",
    github: "https://github.com/ARLA-Dev/drayuleimaperez",
    demo: "https://www.drayuleimaperez.com/",
    tags: ["HTML", "CSS", "JavaScript", "AOS", "SwiperJS", "Vercel", "Google Search", "Landing Page", "SEO", "Google Search", "Leaflet"],
  },
  {
    title: "Quiz App",
    image: "quizapp",
    description: "Una aplicación web para jugar un quiz de 10 preguntas sobre programación creada con React, Redux y Firebase. Permite jugar tantas veces como se desee y muestra un ranking con los diez mejores jugadores.",
    github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/quiz-app",
    demo: "https://pancratzia-quizapp.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "React Custom Hooks", "Redux", "Firebase", "Netlify", "Game", "Ranking"],
  },
  {
    title: "Star Wars Wiki",
    image: "starwarswiki",
    description: "Una wiki de StarWars creada con React usando Custom Hooks, React Context y StarWars API. El proyecto también inlcuye un filtro para buscar personajes por nombre, y abre un Modal cuando un personaje es clickeado, que muestra más información sobre ellos.",
    github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/starwars-wiki",
    demo: "https://pancratzia-starwarswiki.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "SWAPI", "React Custom Hooks", "React Context", "Animated Background", "Recursivity"],
  },
  {
    title: "Conecta 4",
    image: "conecta4",
    description: "Un juego de conecta 4 creado en React. Le permite jugar contra otro jugador y utiliza almacenamiento local para guardar los movimientos y puntajes.",
    github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/conecta-4",
    demo: "https://pancratzia-conecta4.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "Game"],
  },
  {
    title: "Bienes Raices",
    image: "bienesraices",
    description: "Sitio Web para una agrencia de Real Estate para la venta de propiedades. Contiene un panel de administración para gestionar información relacionada con las propiedades, vendedores y publicaciones de blog.",
    github: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/06-BienesRaicesMVC",
    demo: "https://pancratzia-bienesraices.000webhostapp.com/",
    demoUser: "test@admin.com",
    demoPass: "admin",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "Admin"],
  },
];

export const EXTRA_PROJECTS = [
  {
    title: "Portafolio Personal",
    description: "Mi portafolio personal está hecho con React, TypeScript y SASS. Utiliza Vite para desarrollo rápido, la librería AOS para animaciones y SwiperJS para crear sliders. El proyecto está alojado en Netlify, y su código está disponible en GitHub. El proyecto integra FetchAPI y GitHub API para mostrar logros. Además, incluye soporte multilingüe.",
    link: "https://github.com/Pancratzia/Portfolio",
    tags: ["HTML", "JavaScript", "GitHub", "React", "TypeScript", "SASS", "AOS", "SwiperJS", "Netlify"],
  },
  {
    title: "App Salon",
    description: "Sitio Web para un salón de belleza donde una lista de servicios es mostrada para los clientes junto a la opción para agendar una cita. Incluye una sección de administración para gestionar la información de los clientes, las citas y los servicios.",
    link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/07-AppSalon",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin"],
  },
  {
    title: "UpTask",
    description: "Una aplicación de tareas simple donde cada usuario puede registrar y crear proyectos, que está formado por tareas que se pueden borrar, modificar y marcar como completadas.",
    link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/08-UpTask",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer"],
  },
  {
    title: "P.P.P",
    description: "Este proyecto ayuda a la empresa 'Pérez Productos Clean' a gestionar el inventario, los precios, y los ingredientes de fabricación. Desarrollada con Java 8, JasperReports, y MySQL.",
    link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/09-PankraCamp",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin", "PayPal"],
  },
  {
    title: "Blog en React y NodeJS",
    description: "Un blog en React creado con NodeJS, React, y PostgreSQL. Este proyecto permite a los usuarios escribir, modificar y borrar artículos de blog con diferentes categorías. Librerías como React Router Dom, React Quill y Multer son utilizadas.",
    link: "https://github.com/Pancratzia/React-And-NodeJs-Blog",
    tags: ["React", "NodeJS", "PostgreSQL", "React Quill", "React Router Dom", "Multer", "SASS"],
  },
  {
    title: "Femisys",
    description: "Creada por ArLa junto a Arthuro Dugarte (ArtDugarte en GitHub). Desarrollada con HTML, Bootstrap, SpringBoot, Electron, y PostgreSQL. Este sistema fue diseño para un doctor que necesita una solución más eficiente que la existente.",
    link: "https://github.com/Arla-Inc/FemiSys",
    tags: ["HTML", "Bootstrap", "SpringBoot", "Electron", "PostgreSQL"],
  },
  {
    title: "PankraCamp",
    description: "Proyecto para un evento de dos días para conferencias y talleres. Incluye un área administrativa para manejar la información de los eventos y un sistema de registro de usuarios para los participantes. Los participantes pueden comprar tres tipos de entradas y hacer pagos con PayPal.",
    tags: ["Java", "JasperReports", "MySQL", "Java Swing"],
  },
];
