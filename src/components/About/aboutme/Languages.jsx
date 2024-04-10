import { useTranslation } from "react-i18next";
import { languages } from "../../../data/data";

const Languages = () => {
  const [t] = useTranslation("global");
  return (
    <div className="rounded-xl p-5 text-slate-100 border-2 border-indigo-100">
      <h3 className="font-bold fluid-lg uppercase text-center mb-5">
        {t("pages.about_me.languages.title")}
      </h3>

      <ul className="grid grid-cols-2 gap-5">
        {languages.map(({ text, level }, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b border-slate-300 pb-3"
          >
            <span className="font-bold">{t(text)}</span>
            <span className="text-yellow-600">{t(level)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
