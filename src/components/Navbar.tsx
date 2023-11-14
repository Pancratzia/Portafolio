import { useState } from "react";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navbarLinks = [
    { text: "About Me", href: "#about" },
    { text: "Achievements", href: "#achievements" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#" },
    { text: "Contact", href: "#" },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__action" onClick={handleClick}>
        <div className={isOpen? "navbar__icon open" : "navbar__icon close" }>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={isOpen? "navbar__links open" : "navbar__links close"}>
        {navbarLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`navbar__link`}
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
