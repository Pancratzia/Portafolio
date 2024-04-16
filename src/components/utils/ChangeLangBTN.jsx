import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const ChangeLangBTN = () => {
  const [t, i18n] = useTranslation("global");

  const [isDocumentLoading, setIsDocumentLoading] = useState(true);
  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  useEffect(() => {
    const onPageLoad = () => {
      setIsDocumentLoading(false);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {isDocumentLoading || (
        <motion.button
          initial={{ opacity: 0, scale: 0, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 3 }}
          className="text-slate-950 bg-indigo-100 border-indigo-100 border-2 p-2 flex justify-center items-center gap-2 fluid-md border-l-0 rounded-tr-md rounded-br-md
 "
          onClick={handleChangeLanguage}
        >
          <IoLanguage />
          <span className="sr-only">{t("sr-only.changeLanguage")}</span>
        </motion.button>
      )}
    </>
  );
};

export default ChangeLangBTN;
