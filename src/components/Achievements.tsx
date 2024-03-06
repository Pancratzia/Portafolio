import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Achievement } from "./Achievement";
import Aos from "aos";
import "aos/dist/aos.css";
import { ANIMATIONS } from "../data/data";
import { random } from "../utils/functions";
import { useTranslation } from "react-i18next";

const Achievements = () => {

  const [t] = useTranslation("global");

  const {
    data: reposData,
    loading: loadingData,
    error: errorData,
  } = useFetch(
    "https://api.github.com/users/pancratzia/repos",
    import.meta.env.VITE_GITHUB_API_KEY
  );

  const {
    data: memberData,
    loading: loadingMember,
    error: errorMember,
  } = useFetch(
    "https://api.github.com/users/pancratzia",
    import.meta.env.VITE_GITHUB_API_KEY
  );

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements__heading">{t("titles.achievements")}</h2>
      <div className="achievements__grid">
        <Achievement
          title={t("achievements.titles.repositories")}
          loading={loadingData}
          data={reposData}
          number={Array.isArray(reposData) ? reposData.length : 0}
          error={errorData}
          aos={random(ANIMATIONS)}
        />

        <Achievement
          title={t("achievements.titles.member")}
          loading={loadingMember}
          data={memberData}
          number={null}
          error={errorMember}
          aos={random(ANIMATIONS)}
        />

        <Achievement
          title={t("achievements.titles.projects_created")}
          loading={false}
          data={null}
          number="+20"
          error={null}
          aos={random(ANIMATIONS)}
        />

        <Achievement
          title={t("achievements.titles.successful_works")}
          loading={false}
          data={null}
          number="+5"
          error={null}
          aos={random(ANIMATIONS)}
        />
      </div>
    </section>
  );
};

export default Achievements;
