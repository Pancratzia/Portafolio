import { Link } from "react-router-dom";
import AnimatedText from "../utils/AnimatedText";
import { routes } from "../../data/data";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Header = ({ title, pageName }) => {
  const newRoutes = routes.filter((route) => route.name !== pageName);

  const [t] = useTranslation("global");

  return (
    <>
      <nav className="container text-center text-indigo-100 mb-6 py-2 md:py-0">
        <ul className="flex justify-center items-center gap-10 md:gap-8">
          {newRoutes.map((route, index) => (
            <li key={index}>
              <Link
                className="flex justify-center items-center gap-2 text-indigo-100 hover:text-purple-200"
                to={route.link}
              >
                <route.Icon className="w-6 h-6" />
                <span className="sr-only md:not-sr-only transition duration-300 font-bold">
                  {t(route.text)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <header className="container flex items-center justify-center flex-col text-white ">
        <h1 className="fluid-4xl py-1 md:py-5 font-extrabold">
          <AnimatedText text={title} />
        </h1>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  pageName: PropTypes.string,
};
