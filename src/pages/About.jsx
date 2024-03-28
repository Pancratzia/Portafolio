import AboutMe from "../components/About/AboutMe";
import ExtraInfo from "../components/About/ExtraInfo";
import MainLayout from "../components/Layouts/MainLayout";

const About = () => {
  return (
    <MainLayout>
      <main className="lg:mt-10">
        <AboutMe />
      </main>

      <ExtraInfo />
    </MainLayout>
  );
};

export default About;
