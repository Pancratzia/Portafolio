import { FaEye, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Project = ({ project, isPrincipal = true }) => {
  const [t] = useTranslation("global");
  const { title, image, description, github, demo, link, tags } = project;

  const ghLink = isPrincipal ? github : link;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-5 text-slate-300 border-y-2 p-5 grid content-center relative"
    >
      <h3 className="font-bold fluid-lg uppercase text-center mb-5 text-yellow-500">
        {t(title)}
      </h3>

      <div className={"grid gap-5"}>
        {isPrincipal && (
          <img
            src={`./img/projects/thumbnails/${image}.jpg`}
            alt={title}
            width={"50px"}
            loading="lazy"
            height={"100px"}
            className="mx-auto my-0 overflow-hidden object-cover w-[50px]"
          />
        )}

        <div>
          <p className="text-center">{t(description)}</p>

          <div className="flex justify-center gap-10 mt-5">
            <Link
              to={ghLink}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center flex-col gap-1"
            >
              <FaGithub className="w-5 h-5 md:w-8 md:h-8 text-slate-300" />
              <span className="sr-only lg:not-sr-only fluid-sm">
                {t("sr-only.github")}
              </span>
            </Link>
            {isPrincipal && (
              <Link
                to={demo}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center flex-col gap-1"
              >
                <FaEye className="w-5 h-5 md:w-8 md:h-8 text-slate-300" />
                <span className="sr-only lg:not-sr-only fluid-sm">
                  {t("sr-only.demo")}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="w-full my-2 mt-5 text-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block border border-slate-100 rounded-full px-3 py-1 text-xs font-semibold text-slate-100 mr-2 mb-2"
          >
            {t(tag)}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;

Project.propTypes = {
  project: PropTypes.object.isRequired,
  isPrincipal: PropTypes.bool,
};
