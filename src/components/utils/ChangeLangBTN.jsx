import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const ChangeLangBTN = () => {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return <button className="text-slate-950 bg-indigo-100 border-indigo-100 border-2 p-2 flex justify-center items-center gap-2 fluid-md border-l-0 rounded-tr-md rounded-br-md
   " onClick={handleChangeLanguage}>
    <IoLanguage />
    <span className="sr-only">{t("sr-only.changeLanguage")}</span>
    </button>;
};

export default ChangeLangBTN;
