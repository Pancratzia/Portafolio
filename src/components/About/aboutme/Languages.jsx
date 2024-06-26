import { useTranslation } from "react-i18next";
import { languages } from "../../../data/data";
import { motion } from "framer-motion";

const Languages = () => {
  const [t] = useTranslation("global");
  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, amount: 0.5 }}
    className="rounded-xl p-5 text-slate-100 border-2 border-indigo-100">
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
    </motion.div>
  );
};

export default Languages;
