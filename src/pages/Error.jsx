import { useTranslation } from "react-i18next";
import MainLayout from "../components/Layouts/MainLayout"


const Error = () => {
    const [t] = useTranslation("global");
  return (
    <MainLayout title={`< ${t("pages.error.title")} />`} pageName={"Error"}>
    <h2 className="text-center text-slate-300">{t("pages.error.message")}</h2>
    </MainLayout>
  )
}

export default Error