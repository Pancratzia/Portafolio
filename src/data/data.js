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
import { SiBun, SiIntellijidea, SiAstro } from "react-icons/si";

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
    name: "Home",
    link: "/",
  },
  {
    Icon: FaUser,
    text: "sr-only.about",
    name: "About Me",
    link: "/about",
  },
  {
    Icon: FaCubesStacked,
    text: "sr-only.skills",
    name: "Skills",
    link: "/skills",
  },
  {
    Icon: FaLaptopCode,
    text: "sr-only.projects",
    name: "Projects",
    link: "/projects",
  },
  {
    Icon: FaEnvelope,
    text: "sr-only.contact",
    name: "Contact",
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
    name: "pages.skills.titles.frontend",
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
      {
        name: "Astro",
        Icon: SiAstro,
      }
    ],
  },
  {
    name: "pages.skills.titles.backend",
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
    name: "pages.skills.titles.languages",
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
    name: "pages.skills.titles.devops",
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
      {
        name: "Bun",
        Icon: SiBun,
      }
    ],
  },
  {
    name: "pages.skills.titles.tools",
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
      {
        name: "IntelliJ",
        Icon: SiIntellijidea,
      }
    ],
  },
  {
    name: "pages.skills.titles.databases",
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
    title: "pages.projects.projects.project_landing_page.title",
    image: "landingpage",
    description: "pages.projects.projects.project_landing_page.description",
    github: "https://github.com/ARLA-Dev/drayuleimaperez",
    demo: "https://www.drayuleimaperez.com/",
    tags: ["HTML", "CSS", "JavaScript", "AOS", "SwiperJS", "Vercel", "Google Search", "Landing Page", "SEO", "Google Search", "Leaflet"],
  },
  {
    title: "pages.projects.projects.project_quiz_app.title",
    image: "quizapp",
    description: "pages.projects.projects.project_quiz_app.description",
    github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/quiz-app",
    demo: "https://pancratzia-quizapp.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "React Custom Hooks", "Redux", "Firebase", "Netlify", "Game", "Ranking"],
  },
  {
    title: "pages.projects.projects.project_starwars_wiki.title",
    image: "starwarswiki",
    description: "pages.projects.projects.project_starwars_wiki.description",
    github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/starwars-wiki",
    demo: "https://pancratzia-starwarswiki.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "SWAPI", "React Custom Hooks", "React Context", "Animated Background", "Recursivity"],
  },
  {
    title: "pages.projects.projects.project_conecta4.title",
    image: "conecta4",
    description: "pages.projects.projects.project_conecta4.description",
    github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/conecta-4",
    demo: "https://pancratzia-conecta4.netlify.app/",
    tags: ["HTML", "CSS", "JavaScript", "React", "Game"],
  },
  {
    title: "pages.projects.projects.project_bienes_raices.title",
    image: "bienesraices",
    description: "pages.projects.projects.project_bienes_raices.description",
    github: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/06-BienesRaicesMVC",
    demo: "https://pancratzia-bienesraices.000webhostapp.com/",
    demoUser: "test@admin.com",
    demoPass: "admin",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "Admin"],
  },
];

export const EXTRA_PROJECTS = [
  {
    title: "pages.projects.projects.project_personal_portfolio.title",
    description: "pages.projects.projects.project_personal_portfolio.description",
    link: "https://github.com/Pancratzia/Portfolio",
    tags: ["HTML", "JavaScript", "GitHub", "React",  "Tailwind","framer-motion", "emailJS", "SwiperJS", "Netlify"],
  },
  {
    title: "pages.projects.projects.project_app_salon.title",
    description: "pages.projects.projects.project_app_salon.description",
    link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/07-AppSalon",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin"],
  },
  {
    title: "pages.projects.projects.project_up_task.title",
    description: "pages.projects.projects.project_up_task.description",
    link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/08-UpTask",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer"],
  },
  {
    title: "pages.projects.projects.project_ppp.title",
    description: "pages.projects.projects.project_ppp.description",
    link: "https://github.com/ARLA-Dev/PEREZ-PRODUCTOS-CLEAN",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin", "PayPal"],
  },
  {
    title: "pages.projects.projects.project_react_nodejs_blog.title",
    description: "pages.projects.projects.project_react_nodejs_blog.description",
    link: "https://github.com/Pancratzia/React-And-NodeJs-Blog",
    tags: ["React", "NodeJS", "PostgreSQL", "React Quill", "React Router Dom", "Multer", "SASS"],
  },
  {
    title: "pages.projects.projects.project_femisys.title",
    description: "pages.projects.projects.project_femisys.description",
    link: "https://github.com/Arla-Inc/FemiSys",
    tags: ["HTML", "Bootstrap", "SpringBoot", "Electron", "PostgreSQL"],
  },
  {
    title: "pages.projects.projects.project_pankracamp.title",
    description: "pages.projects.projects.project_pankracamp.description",
    tags: ["Java", "JasperReports", "MySQL", "Java Swing"],
  },
];
