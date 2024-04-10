import { useTranslation } from "react-i18next";
import AboutMe from "../components/About/AboutMe";
import ExtraInfo from "../components/About/ExtraInfo";
import MainLayout from "../components/Layouts/MainLayout";

const About = () => {

  const [t] = useTranslation("global");

  return (
    <MainLayout title={`< ${t("pages.about_me.title")} />`} pageName={"About Me"}>
      <main className="lg:mt-10">
        <AboutMe />
      </main>

      <ExtraInfo />
    </MainLayout>
  );
};

export default About;
