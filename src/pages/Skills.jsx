import MainLayout from "../components/Layouts/MainLayout";
import { techStak } from "../data/data";

const Skills = () => {

  return (
    <MainLayout title={"< Skills />"} pageName={"Skills"}>
      <div className="text-slate-100 container grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

        {techStak.map(({ name, stack }, index) => (
          <div className="border-2 border-yellow-600 p-5 rounded-xl" key={index}>
            <h3 className="font-bold fluid-lg uppercase text-center mb-5">
              {name}
            </h3>

            <div className="grid grid-cols-4 gap-4">
              {stack.map(({ name, Icon }, index) => (
                <div key={index} className="flex justify-center items-center flex-col gap-1">
                  <h5 className="sr-only md:not-sr-only fluid-md">{name}</h5>
                  <Icon className="w-10 h-10" />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </MainLayout>
  );
};

export default Skills;
