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
    text: "Twitter X",
    links: "https://twitter.com/Pancratzia",
  },
  {
    Icon: FaSquareGithub,
    text: "Github X",
    links: "https://github.com/Pancratzia",
  },
  {
    Icon: FaLinkedin,
    text: "Linkedin X",
    links: "https://www.linkedin.com/in/leortegaperez/",
  },
];

export const routes = [
  {
    Icon: FaHouse,
    text: "Home",
    link: "/",
  },
  {
    Icon: FaUser,
    text: "About Me",
    link: "/about",
  },
  {
    Icon: FaCubesStacked,
    text: "Skills",
    link: "/skills",
  },
  {
    Icon: FaLaptopCode,
    text: "Projects",
    link: "/projects",
  },
  {
    Icon: FaEnvelope,
    text: "Contact",
    link: "/contact",
  },
];

export const interests = [
  {
    Icon: FaMusic,
    text: "Music",
  },
  {
    Icon: FaBookOpenReader,
    text: "Reading",
  },
  {
    Icon: FaDog,
    text: "Dogs",
  },
  {
    Icon: FaGamepad,
    text: "Videogames",
  },
];

export const languages = [
  {
    text: "Spanish",
    level: "Native",
  },
  {
    text: "English",
    level: "Fluent",
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
