import AnimatedText from "../utils/AnimatedText";

const Header = () => {
  return (
    <header className="container mb-6 flex items-center justify-center flex-col">
      <h1 className="fluid-4xl py-1 md:py-5 font-extrabold">
        <AnimatedText text={"< Laura Ortega />"} />
      </h1>
      <h3 className="fluid-2xl font-bold inline-block text-transparent text-stroke text-stroke-white ">
        FullStack Web Developer
      </h3>
    </header>
  );
};

export default Header;
