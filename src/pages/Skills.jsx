import { useTranslation } from "react-i18next";
import MainLayout from "../components/Layouts/MainLayout";
import TechCard from "../components/Skills/TechCard";
import { techStak } from "../data/data";

const Skills = () => {

  const [t] = useTranslation("global");

  return (
    <MainLayout title={`< ${t("pages.skills.title")} />`} pageName={"Skills"}>
      <main className="text-slate-100 container grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

        {techStak.map(({ name, stack }, index) => (
          <TechCard key={index} name={t(name)} stack={stack} />
        ))}

      </main>
    </MainLayout>
  );
};

export default Skills;
