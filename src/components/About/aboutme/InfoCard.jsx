import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const InfoCard = () => {
  const [t] = useTranslation("global");

  return (
    <div className="border-2 border-yellow-600 p-5 rounded-xl text-indigo-100">
      <p className="text-center text-slate-100">
        {t("pages.about_me.info_card")}
      </p>

      <div className="flex justify-center mt-5 py-2 gap-2 flex-wrap flex-col items-center">

        <span className="font-bold text-yellow-500">{t("pages.about_me.cv.question")}</span>
        <Link
          className="font-bold uppercase text-slate-100 hover:text-purple-200 "
          to={t("pages.about_me.cv_link")}
          target="_blank"
        >
          {t("pages.about_me.cv.answer")}
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
