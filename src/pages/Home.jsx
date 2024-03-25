import AnimatedText from "../components/utils/AnimatedText";
import RoundedPicture from "../components/utils/RoundedPicture";
import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin
} from "react-icons/fa6";
import SocialSquare from "../components/utils/SocialSquare";
import RedirectLinkButton from "../components/utils/RedirectLinkButton";

const Home = () => {
  return (
    <div className="flex justify-center flex-col min-h-screen py-6">
      {/* main title */}
      <header className="container my-0 mx-auto mb-6 flex items-center justify-center flex-col">
        <h1 className="fluid-4xl py-1 md:py-5 font-extrabold">
          <AnimatedText text={"< Laura Ortega />"} />
        </h1>
        <h3 className="fluid-2xl font-bold inline-block text-transparent text-stroke text-stroke-white ">
          FullStack Web Developer
        </h3>
      </header>

      <div className="container my-0 mx-auto w-80 h-80 md:w-96 md:h-96">
        <RoundedPicture
          imageUrl="./img/personal/profile"
          description="Laura Ortega - FullStack Web Developer Picture"
        />
      </div>

      {/* Socials */}

      <div className="w-full my-5 py-2">
        <div className="flex justify-center items-center gap-6">
          <SocialSquare
            Icon={FaSquareXTwitter}
            text="Twitter X"
            links="https://twitter.com/Pancratzia"
          />

          <SocialSquare
            Icon={FaSquareGithub}
            text="Github X"
            links="https://github.com/Pancratzia"
          />

          <SocialSquare
            Icon={FaLinkedin}
            text="Linkedin X"
            links="https://www.linkedin.com/in/leortegaperez/"
          />
        </div>
      </div>

      {/* Go To "About Me" Page */}

      <div className="flex justify-center mt-5">
        <RedirectLinkButton text={"About Me"} link={"/about"} />
      </div>
    </div>
  );
};

export default Home;
