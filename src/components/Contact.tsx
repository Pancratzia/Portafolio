/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import validator from "email-validator";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [t] = useTranslation("global");

  const sendEmail = (e: any) => {
    e.preventDefault();
    const { name, email, message } = e.target;

    if (!name.value || !email.value || !message.value) {
      Swal.fire({
        title: `${t("Swal.titles.error")}`,
        text: `${t("Swal.messages.errors.fields")}`,
        icon: "error",
      });
      return;
    } else if (!validator.validate(email.value)) {
      Swal.fire({
        title: `${t("Swal.titles.error")}`,
        text: `${t("Swal.messages.errors.email")}`,
        icon: "error",
      });
      return;
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result: any) => {
            if (result.text === "OK") {
              Swal.fire({
                title: `${t("Swal.titles.email_sent")}`,
                text: `${t("Swal.messages.email_sent")}`,
                icon: "success",
              });
            }

            form.current?.reset();
          },
          (error: any) => {
            console.log(error.text);
            Swal.fire({
              title: `${t("Swal.titles.error")}`,
              text: `${t("Swal.messages.errors.something_went_wrong")}`,
              icon: "error",
            });
          }
        );
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading">{t("titles.contact")}</h2>
      <form
        className="contact__form"
        ref={form}
        onSubmit={sendEmail}
      >
        <legend className="contact__legend">
          {t("contact.contact_legend")}
        </legend>

        <fieldset className="contact__fieldset">
          <legend className="contact__legend--fieldset">{t("contact.contact_info")}</legend>

          <div className="contact__field">
            <label className="contact__label" htmlFor="name">
              {t("contact.labels.name")}
            </label>
            <input
              className="contact__input"
              type="text"
              id="name"
              name="name"
              placeholder={t("contact.placeholders.name")}
              required
            />
          </div>

          <div className="contact__field">
            <label className="contact__label" htmlFor="email">
              {t("contact.labels.email")}
            </label>
            <input
              className="contact__input"
              type="email"
              id="email"
              name="email"
              placeholder={t("contact.placeholders.email")}
              required
            />
          </div>

          <div className="contact__field--textarea">
            <label className="contact__label" htmlFor="message">
              {t("contact.labels.message")}
            </label>
            <textarea
              className="contact__textarea"
              id="message"
              name="message"
              placeholder={t("contact.placeholders.message")}
              required
            ></textarea>
          </div>
        </fieldset>

        <div className="contact__actions">
          <input
            type="reset"
            value={t("contact.buttons.reset")}
            className="contact__submit--reset"
          />
          <input className="contact__submit" type="submit" value={t("contact.buttons.submit")}/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
