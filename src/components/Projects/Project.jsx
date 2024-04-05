import { FaEye, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Project = ({ project }) => {

    const { title, image, description, github, demo } = project;
  return (
    <div className="mb-5 text-slate-300  border-y-2 p-5">
      <h3 className="font-bold fluid-lg uppercase text-center mb-5 text-yellow-500">
        {title}
      </h3>

      <div className="grid grid-cols-[1fr_2fr] gap-5">
        <div className="grid content-center">
          <img
            src={`./img/projects/${image}.png`}
            alt={title}
            className="rounded-xl"
          />
        </div>

        <div>
          <p className="text-center">{description}</p>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <Link
              to={github}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center flex-col gap-1"
            >
              <FaGithub className="w-5 h-5 md:w-8 md:h-8 text-slate-300" />
              <span className="sr-only lg:not-sr-only fluid-sm">Github</span>
            </Link>

            <Link
              to={demo}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center flex-col gap-1"
            >
              <FaEye className="w-5 h-5 md:w-8 md:h-8 text-slate-300" />
              <span className="sr-only lg:not-sr-only fluid-sm">Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.object.isRequired,
}