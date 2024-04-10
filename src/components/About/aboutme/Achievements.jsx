import { useTranslation } from "react-i18next";
import useFetch from "./../../../hooks/useFetch";

const Achievements = () => {
  const { data, loading, error } = useFetch(
    "https://api.github.com/users/pancratzia"
  );

  const [t] = useTranslation("global");
  return (
    <section className="my-5 grid grid-cols-1 md:grid-cols-2 gap-5 ">
      <article className="bg-slate-100 opacity-90 p-5 rounded-xl text-center bg-gradient-to-r from-purple-100 to-slate-100">
        <h4 className="font-bold uppercase fluid-lg text-purple-800">
          {t("pages.about_me.achievements.gh_repos")}
        </h4>
        <h3 className="font-bold fluid-4xl text-purple-800">
          {!loading && !error && data.public_repos}
          {loading && t("messages.loading_simple")}
          {error && t("messages.error_simple")}
        </h3>
      </article>

      <article className="bg-slate-100 opacity-90 p-5 rounded-xl text-center bg-gradient-to-r from-slate-100 to-purple-100">
        <h4 className="font-bold uppercase fluid-lg text-purple-800">
          {t("pages.about_me.achievements.gh_member")}
        </h4>
        <h3 className="font-bold fluid-4xl text-purple-800">
          {!loading && !error && data.created_at.slice(0, 4)}
          {loading && "Loading..."}
          {error && "Error"}
        </h3>
      </article>
    </section>
  );
};

export default Achievements;
