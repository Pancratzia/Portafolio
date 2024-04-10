import { useTranslation } from "react-i18next";
import AnimatedText from "../utils/AnimatedText";

const Header = () => {

  const [t] = useTranslation("global");

  return (
    <header className="container mb-6 flex items-center justify-center flex-col">
      <h1 className="fluid-3xl sm:fluid-4xl py-1 md:py-5 font-extrabold text-center">
        <AnimatedText text={`< ${t("name")} />`} />
      </h1>
      <h3 className="fluid-xl sm:fluid-2xl font-bold inline-block text-transparent text-stroke text-stroke-white text-center">
        {t("title")}
      </h3>
    </header>
  );
};

export default Header;
