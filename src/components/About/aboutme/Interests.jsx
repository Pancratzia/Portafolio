import { useTranslation } from "react-i18next"
import { interests } from "../../../data/data"


const Interests = () => {

  const [t] = useTranslation("global")

  return (
    <div className="rounded-xl p-5 text-slate-100 border-2 border-indigo-100">
    <h3 className="font-bold fluid-lg uppercase text-center mb-5">
      {t("pages.about_me.interests")}
    </h3>

    <ul className="text-center grid grid-cols-4 pb-3">
      {interests.map(({ text, Icon}, index) => (
        <li key={index} className="flex justify-center items-center">
          <Icon className="w-7 h-7" />
          <span className="sr-only">{t(text)}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Interests