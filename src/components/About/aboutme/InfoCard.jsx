import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const InfoCard = () => {
  const [t] = useTranslation("global");

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
      whileInView= {{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    className="border-2 border-yellow-600 p-5 rounded-xl text-indigo-100">
      <p className="text-center text-slate-100">
        {t("pages.about_me.info_card")}
      </p>

      <div className="flex justify-center mt-5 py-2 gap-2 flex-wrap flex-col items-center text-center">

        <span className="font-bold text-yellow-500">{t("pages.about_me.cv.question")}</span>
        <Link
          className="font-bold uppercase text-slate-100 hover:text-purple-200"
          to={t("pages.about_me.cv.link")}
          target="_blank"
        >
          {t("pages.about_me.cv.answer")}
        </Link>
      </div>
    </motion.div>
  );
};

export default InfoCard;
