import { useTranslation } from "react-i18next";

const About = () => {

  const [t] = useTranslation("global");

  return (
    <section className="about" id="about">
      <h2 className="about__heading">{t("titles.about_me")}</h2>
      <div className="about__grid">
        <div className="about__image-container">
          <picture>
            <source srcSet="img/personal/profile.avif" type="image/avif" />
            <source srcSet="img/personal/profile.webp" type="image/webp" />
            <source srcSet="img/personal/profile.png" type="image/png" />

            <img
              className="about__image"
              src="img/personal/profile.png"
              width="300"
              height="100%"
              alt="About"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="about__info"  dangerouslySetInnerHTML={{ __html: t("description") }}></div>
          
      </div>

      <footer className="about__footer">
        <p className="about__footer-text">
          Do you want to know more about me? <a href="https://drive.google.com/file/d/1-IR2j718rKg6Q-EWdLbgRS-H16-sDP-O/view?usp=sharing" target="_blank" className="about__footer-link">Read my CV!</a>
        </p>
      </footer>

    </section>
  );
};

export default About;
