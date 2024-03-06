import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer className="footer">
      <p className="footer__alias">Pancratzia</p>
      <p className="footer__text">
        © {new Date().getFullYear()} Laura Ortega. {t("footer")}.
      </p>
    </footer>
  );
};

export default Footer;
