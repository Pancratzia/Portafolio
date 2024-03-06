import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [t] = useTranslation("global");

  const smoothScrollTo = (e: { preventDefault: () => void; }, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  };

  const navbarLinks = [
    { text: `${t("navbar.links.about_me")}`, href: "#about" },
    { text: `${t("navbar.links.achievements")}`, href: "#achievements" },
    { text: `${t("navbar.links.skills")}`, href: "#skills" },
    { text: `${t("navbar.links.projects")}`, href: "#projects" },
    { text: `${t("navbar.links.contact")}`, href: "#contact" },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__action" onClick={handleClick}>
        <div className={isOpen ? "navbar__icon open" : "navbar__icon close"}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={isOpen ? "navbar__links open" : "navbar__links close"}>
        {navbarLinks.map((link, index) => (
          <a href={link.href} key={index} onClick={(e) => smoothScrollTo(e, link.href)} className={`navbar__link`}>
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
