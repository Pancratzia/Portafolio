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
      title: `${t("projects.project_bienes_raices.title")}`,
      image: "project1",
      description:
        `${t("projects.project_bienes_raices.description")}`,
      github:
        "https://github.com/Pancratzia/Web-Development-Repository/tree/main/06-BienesRaicesMVC",
      demo: "https://pancratzia-bienesraices.000webhostapp.com/",
      demoUser: "test@admin.com",
      demoPass: "admin",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "Admin"],
    },
    {
      title: `${t("projects.project_landing_page.title")}`,
      image: "project5",
      description:
      `${t("projects.project_landing_page.description")}`,
      github: "https://github.com/ARLA-Dev/drayuleimaperez",
      demo: "https://www.drayuleimaperez.com/",
      tags: ["HTML", "CSS", "JavaScript", "AOS", "SwiperJS", "Vercel", "Google Search", "Landing Page", "SEO", "Google Search", "Leaflet"],
    }
  ];
  
  const EXTRA_PROJECTS = [
    {
      title: "Personal Portfolio",
      description:
        "My personal portfolio is built with React, TypeScript, and SASS. It utilizes Vite for fast development, AOS library for animations and SwiperJS to create sliders. The project is hosted on Netlify, and its code is available on GitHub. The contact form integrates FetchAPI and GitHub API to showcase achievements.",
      link: "https://github.com/Pancratzia/Portfolio",
      tags: ["HTML", "JavaScript", "GitHub", "React", "TypeScript", "SASS", "AOS", "SwiperJS", "Netlify"],
    },
    {
      title: "App Salon",
      description: "Website for a beauty salon where a list of services is displayed for clients along with the option to schedule an appointment. It includes an administration section to manage customer information, appointments, and services.",
      link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/07-AppSalon",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin"],
    },
    {
      title: "UpTask",
      description: "A simple task application where each user can register and create projects, consisting of tasks that can be deleted, modified, and marked as completed.",
      link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/08-UpTask",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer"],
    },
    {
      title: "PankraCamp",
      description: "Project for a two-day event featuring conferences and workshops. It includes an administrative area to manage event information and a user registration system for attendees. Attendees can purchase three types of tickets and make payments through PayPal (The project is a demo, so it is using a PayPal sandbox account).",
      link: "https://github.com/Pancratzia/Web-Development-Repository/tree/main/09-PankraCamp",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "PHPMailer", "Admin", "PayPal"],
    },
    {
      title: "Web Development Repository",
      description:
        "This repository contains projects created for the 'Desarrollo Web Completo con HTML5, CSS3, JS, AJAX PHP y MySQL' course by Juan Pablo de la Torre Valdez. Projects are hosted on platforms like Netlify, 000WebHost, and DOMCloud.",
      link: "https://github.com/Pancratzia/Web-Development-Repository",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MVC", "DOMCloud", "Netlify", "000WebHost", "SASS"],
    },
    {
      title: "React and NodeJS Blog",
      description:
        "A React Blog created with NodeJS, React, and PostgreSQL. This project enables users to write, modify, and delete blog articles with different categories. Libraries such as React Router Dom, React Quill, and Multer are utilized.",
      link: "https://github.com/Pancratzia/React-And-NodeJs-Blog",
      tags: ["React", "NodeJS", "PostgreSQL", "React Quill", "React Router Dom", "Multer", "SASS"],
    },
    {
      title: "FrontEnd Mini Challenges",
      description:
        "This project is designed to enhance front-end skills through mini challenges using various technologies such as React, SASS, CSS, JavaScript, Tailwind, and Styled Components. Demo projects and code are available online.",
      link: "https://github.com/Pancratzia/frontend-mini-challenges",
      tags: ["HTML", "CSS", "JavaScript", "React", "SASS", "Tailwind", "Styled Components", "GitHub"],
    },
    {
      title: "Femisys",
      description:
        "Created for ArLa Corp Organization along with Arthuro Dugarte (ArtDugarte on GitHub). Developed with HTML, Bootstrap, SpringBoot, Electron, and PostgreSQL. This system was designed for a doctor who needed a more efficient solution than the existing system.",
      link: "https://github.com/Arla-Inc/FemiSys",
      tags: ["HTML", "Bootstrap", "SpringBoot", "Electron", "PostgreSQL"],
    },
    {
      title: "P.P.P",
      description:
        "Created for ArLa Corp Organization along with Arthuro Dugarte. This project helps the company 'Pérez Productos Clean' manage inventory, prices, and fabrication ingredients. Developed with Java 8, JasperReports, and MySQL.",
      link: "https://github.com/Arla-Inc/P.P.P",
      tags: ["Java", "JasperReports", "MySQL", "Java Swing"],
    },
  ];
  return { ANIMATIONS, PROJECTS, EXTRA_PROJECTS };
}
