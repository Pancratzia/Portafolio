import MainLayout from "../components/Layouts/MainLayout";
import TechCard from "../components/Skills/TechCard";
import { techStak } from "../data/data";

const Skills = () => {

  return (
    <MainLayout title={"< Skills />"} pageName={"Skills"}>
      <div className="text-slate-100 container grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

        {techStak.map(({ name, stack }, index) => (
          <TechCard key={index} name={name} stack={stack} />
        ))}

      </div>
    </MainLayout>
  );
};

export default Skills;
