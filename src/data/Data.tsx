import { useTranslation } from "react-i18next";


export const Data = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [t] = useTranslation("global");

  const ANIMATIONS = [
    "fade-up",
    "flip-up",
    "flip-right",
    "flip-down",
    "flip-left",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-down",
  ];
  
  const PROJECTS = [
    {
      title: `${t("projects.project_landing_page.title")}`,
      image: "landingpage",
      description:
      `${t("projects.project_landing_page.description")}`,
      github: "https://github.com/ARLA-Dev/drayuleimaperez",
      demo: "https://www.drayuleimaperez.com/",
      tags: ["HTML", "CSS", "JavaScript", "AOS", "SwiperJS", "Vercel", "Google Search", "Landing Page", "SEO", "Google Search", "Leaflet"],
    },
    {
      title: `${t("projects.projects_starwars_wiki.title")}`,
      image: "starwarswiki",
      description: `${t("projects.projects_starwars_wiki.description")}`,
      github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/starwars-wiki",
      demo: "https://pancratzia-starwarswiki.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript", "React", "SWAPI", "React Custom Hooks", "React Context", "Animated Background", "Recursivity"],
    },
    {
      title: `${t("projects.projects_conecta4.title")}`,
      image: "conecta4",
      description: `${t("projects.projects_conecta4.description")}`,
      github: "https://github.com/Pancratzia/Monthly-Projects/tree/main/conecta-4",
      demo: "https://pancratzia-conecta4.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript", "React", "Game"],
    },
    {
      title: `${t("projects.project_bienes_raices.title")}`,
      image: "bienesraices",
      description:
        `${t("projects.project_bienes_raices.description")}`,
      github:
        "https://github.com/Pancratzia/Web-Development-Repository/tree/main/06-BienesRaicesMVC",
      demo: "https://pancratzia-bienesraices.000webhostapp.com/",
      demoUser: "test@admin.com",
      demoPass: "admin",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "Admin"],
    },
    
  ];
  
  const EXTRA_PROJECTS = [
    {
      title: `${t("projects.project_personal_portfolio.title")}`,
      description:
        `${t("projects.project_personal_portfolio.description")}`,
      link: "https://github.com/Pancratzia/Portfolio",
      tags: ["HTML", "JavaScript", "GitHub", "React", "TypeScript", "SASS", "AOS", "SwiperJS", "Netlify"],
    },
    {
      title: `${t("projects.projects_app_salon.title")}`,
      description: `${t("projects.projects_app_salon.description")}`,
      link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/07-AppSalon",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin"],
    },
    {
      title: `${t("projects.projects_up_task.title")}`,
      description: `${t("projects.projects_up_task.description")}`,
      link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/08-UpTask",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer"],
    },
    {
      title: `${t("projects.projects_ppp.title")}`,
      description: `${t("projects.projects_ppp.description")}`,
      link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/09-PankraCamp",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin", "PayPal"],
    },
    {
      title: `${t("projects.projects_react_nodejs_blog.title")}`,
      description:
        `${t("projects.projects_react_nodejs_blog.description")}`,
      link: "https://github.com/Pancratzia/React-And-NodeJs-Blog",
      tags: ["React", "NodeJS", "PostgreSQL", "React Quill", "React Router Dom", "Multer", "SASS"],
    },
    {
      title: `${t("projects.projects_femisys.title")}`,
      description:
        `${t("projects.projects_femisys.description")}`,
      link: "https://github.com/Arla-Inc/FemiSys",
      tags: ["HTML", "Bootstrap", "SpringBoot", "Electron", "PostgreSQL"],
    },
    {
      title: `${t("projects.projects_pankracamp.title")}`,
      description:
        `${t("projects.projects_pankracamp.description")}`,
      tags: ["Java", "JasperReports", "MySQL", "Java Swing"],
    },
  ];
  return { ANIMATIONS, PROJECTS, EXTRA_PROJECTS };
}
