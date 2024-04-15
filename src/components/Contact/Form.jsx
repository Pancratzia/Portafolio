import { useTranslation } from "react-i18next";
import useForm from "../../hooks/useForm";

const Form = () => {
  const {
    githubUserToFind,
    setGithubUserToFind,
    githubUserPicture,
    handleSubmit,
    errors,
    setMail,
    mail,
    handleResetForm,
  } = useForm();

  const { name, email, message, subject } = mail;

  const [t] = useTranslation("global");

  return (
    <form
      method="POST"
      className="text-slate-100 container border-2 border-yellow-600 rounded-xl p-5"
      onSubmit={handleSubmit}
    >
      <legend className="text-center uppercase font-bold fluid-md">
        {t("pages.contact.message")}
      </legend>

      <fieldset className="mt-5 border-t-[1px] border-slate-300 pt-5">
        <legend className="text-center uppercase font-bold fluid-sm px-2">
          {t("pages.contact.legends.basic_info")}
        </legend>

        <div className="form-field flex flex-col">
          <label
            htmlFor="name"
            className="text-slate-100 font-bold fluid-md mb-2"
          >
            {t("pages.contact.labels.name")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("pages.contact.placeholders.name")}
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
            onChange={(e) => setMail({ ...mail, name: e.target.value })}
            value={name}
          />
          {errors.name && (
            <p className="text-red-500 text-center mt-1">{t(errors.name)}</p>
          )}
        </div>
      </fieldset>

      <fieldset className="mt-5 border-t-[1px] border-slate-300 pt-5">
        <legend className="text-center uppercase font-bold fluid-sm px-2">
          {t("pages.contact.legends.contact_info")}
        </legend>

        <div className="form-field flex flex-col">
          <label
            htmlFor="email"
            className="text-slate-100 font-bold fluid-md mb-2"
          >
            {t("pages.contact.labels.email")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("pages.contact.placeholders.email")}
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
            onChange={(e) => setMail({ ...mail, email: e.target.value })}
            value={email}
          />
          {errors.email && (
            <p className="text-red-500 text-center mt-1">{t(errors.email)}</p>
          )}
        </div>

        <div className="form-field flex flex-col">
          <label
            htmlFor="github"
            className="text-slate-100 font-bold fluid-md my-2"
          >
            {t("pages.contact.labels.github.label")}{" "}
            <small className="text-slate-300">
              ({t("pages.contact.labels.github.optional")})
            </small>
          </label>

          <div className="flex items-center gap-3 w-100">
            <img
              src={githubUserPicture}
              className="w-12 h-12 rounded-full"
              alt={t("pages.contact.labels.github.alt")}
            />
            <input
              type="text"
              name="github"
              id="github"
              placeholder={t("pages.contact.placeholders.github")}
              autoComplete="off"
              className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display w-full"
              onChange={(e) => setGithubUserToFind(e.target.value)}
              value={githubUserToFind}
            />
          </div>
          {errors.github && (
            <p className="text-red-500 text-center mt-1">{t(errors.github)}</p>
          )}
        </div>
      </fieldset>

      <fieldset className="mt-5 border-t-[1px] border-slate-300 pt-5">
        <legend className="text-center uppercase font-bold fluid-sm px-2">
          {t("pages.contact.legends.message")}
        </legend>

        <div className="form-field flex flex-col mb-2">
          <label
            htmlFor="subject"
            className="text-slate-100 font-bold fluid-md mb-2"
          >
            {t("pages.contact.labels.subject")}
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder={t("pages.contact.placeholders.subject")}
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
            onChange={(e) => setMail({ ...mail, subject: e.target.value })}
            value={subject}
          />
          {errors.subject && (
            <p className="text-red-500 text-center mt-1">{t(errors.subject)}</p>
          )}
        </div>

        <div className="form-field flex flex-col">
          <label
            htmlFor="message"
            className="text-slate-100 font-bold fluid-md mb-2"
          >
            {t("pages.contact.labels.message")}
          </label>
          <textarea
            name="message"
            id="message"
            placeholder={t("pages.contact.placeholders.message")}
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
            rows="5"
            style={{ resize: "vertical" }}
            onChange={(e) => setMail({ ...mail, message: e.target.value })}
            value={message}
          ></textarea>

          {errors.message && (
            <p className="text-red-500 text-center mt-1">{t(errors.message)}</p>
          )}
        </div>
      </fieldset>

      <div className="flex justify-center mt-5 gap-5">
        <input
          type="button"
          value={t("pages.contact.buttons.reset")}
          onClick={handleResetForm}
          className="flex justify-center items-center w-[max-content] rounded-full gap-1 px-4 py-2 fluid-md border-2 border-slate-300 transition duration-300 font-bold text-slate-300 cursor-pointer"
        />
        <input
          type="submit"
          value={t("pages.contact.buttons.send")}
          className="flex justify-center items-center w-[max-content] rounded-full gap-1 px-4 py-2 fluid-md border-2 border-yellow-600 transition duration-300 font-bold text-yellow-600 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Form;
