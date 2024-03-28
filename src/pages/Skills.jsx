import MainLayout from "../components/Layouts/MainLayout";
import { DiHtml5 } from "react-icons/di";

const Skills = () => {
  return (
    <MainLayout title={"< Skills />"} pageName={"Skills"}>
      <div className="text-slate-100 container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <h3 className="font-bold fluid-lg uppercase text-center mb-5">
            FrontEnd
          </h3>

          <div className="w-20 h-20 bg-slate-950 rounded-full flex justify-center items-center flex-col">
            <h5 className="sr-only md:not-sr-only fluid-md">HTML</h5>
            <DiHtml5 className="w-10 h-10" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Skills;
