import { FaEye, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Project = ({ project, isPrincipal = true }) => {
  const [t] = useTranslation("global");
  const { title, image, description, github, demo, link, tags } = project;
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="mb-5 text-slate-300 border-y-2 p-5">
      <h3 className="font-bold fluid-lg uppercase text-center mb-5 text-yellow-500">
        {t(title)}
      </h3>

      <div className={isPrincipal ? "grid grid-cols-[1fr_2fr] gap-5" : "grid gap-5"}>
        {isPrincipal && (
          <div className="grid content-center">
            <img
              src={`./img/projects/thumbnails/${image}.jpg`}
              alt={title}
              className="rounded-xl"
              width={"250px"}
              height={"auto"}
              loading="lazy"
            />
          </div>
        )}

        <div>
          <p className="text-center">{t(description)}</p>

          {isPrincipal && (
            <div className="grid grid-cols-2 gap-5 mt-5">
              <Link
                to={github}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center flex-col gap-1"
              >
                <FaGithub className="w-5 h-5 md:w-8 md:h-8 text-slate-300" />
                <span className="sr-only lg:not-sr-only fluid-sm">{t("sr-only.github")}</span>
              </Link>

              <Link
                to={demo}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center flex-col gap-1"
              >
                <FaEye className="w-5 h-5 md:w-8 md:h-8 text-slate-300" />
                <span className="sr-only lg:not-sr-only fluid-sm">{t("sr-only.demo")}</span>
              </Link>
            </div>
          )}

          {!isPrincipal && (
            <Link to={link} target="_blank" rel="noreferrer" className="flex justify-center items-center flex-col gap-1 mt-5">
              <FaGithub className="w-5 h-5 md:w-8 md:h-8 text-slate-300" />
                <span className="sr-only lg:not-sr-only fluid-sm">Github</span>
            </Link>
          )}
        </div>
      </div>

      <div className="w-full my-2 mt-5 text-center">

        {
          tags.map((tag, index) => (
            <span key={index} className="inline-block border border-slate-100 rounded-full px-3 py-1 text-xs font-semibold text-slate-100 mr-2 mb-2">{t(tag)}</span>

          ))
        }
      </div>
    </motion.div>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.object.isRequired,
  isPrincipal: PropTypes.bool,
};
