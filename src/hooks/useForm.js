import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { SuccessAlert, ErrorAlert } from "../components/utils/Alerts";

import { useTranslation } from "react-i18next";

const defaultImageURL = "./img/utils/no-user.jpg";

const initialMail = {
  name: "",
  email: "",
  github: "",
  subject: "",
  message: "",
};

const useForm = () => {
  const [githubUserToFind, setGithubUserToFind] = useState("");
  const [githubUserPicture, setGithubUserPicture] = useState(defaultImageURL);
  const [githubUserExists, setGithubUserExists] = useState(false);
  const [errors, setErrors] = useState({});

  const [mail, setMail] = useState(initialMail);

  const [t] = useTranslation("global");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, subject } = mail;

    let newErrors = {};

    if (!name || !name.trim() || name.length < 3) {
      newErrors = {
        ...newErrors,
        name: "validations.name",
      };
    }

    if (!email || !email.trim() || email === "") {
      newErrors = { ...newErrors, email: "validations.email_required" };
    }

    if (
      !email.match(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
      errors.email !== "" &&
      email !== ""
    ) {
      newErrors = { ...newErrors, email: "validations.email_not_valid" };
    }

    if (
      !githubUserExists &&
      githubUserToFind !== "" &&
      githubUserToFind.trim() !== ""
    ) {
      newErrors = { ...newErrors, github: "validations.github_not_exist" };
    }

    if (subject === "" || subject.trim() === "" || !subject) {
      newErrors = { ...newErrors, subject: "validations.subject" };
    }

    if (message === "" || message.trim() === "" || !message) {
      newErrors = { ...newErrors, message: "validations.message" };
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;


    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        async (res) => {
          if (res.status === 200) {
            await SuccessAlert({
              title: t("Swal.form.success_title"),
              text: t("Swal.form.success_text"),
            });
            resetForm(e.target);
          }
        },
        () => {
          ErrorAlert({
            title: t("Swal.form.error_title"),
            text: t("Swal.form.error_text"),
          });
        }
      );

  };

  const resetForm = (form) => {
    form.reset();
    handleResetForm();
  };

  const handleResetForm = () => {
    setGithubUserToFind("");
    setGithubUserPicture(defaultImageURL);
    setGithubUserExists(false);
    setErrors({});
    setMail(initialMail);
  };

  useEffect(() => {
    if (!githubUserToFind || githubUserToFind === "") {
      setGithubUserExists(false);
      setGithubUserPicture(defaultImageURL);
      return;
    }

    const url = `https://api.github.com/users/${githubUserToFind}`;

    axios
      .get(url)
      .then((response) => {
        setGithubUserExists(true);
        setGithubUserPicture(response.data.avatar_url);
        setMail({ ...mail, github: response.data.login });
      })
      .catch(() => {
        setGithubUserExists(false);
        setGithubUserPicture(defaultImageURL);
        setMail({ ...mail, github: "" });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubUserToFind]);

  return {
    githubUserToFind,
    setGithubUserToFind,
    githubUserPicture,
    setGithubUserPicture,
    githubUserExists,
    setGithubUserExists,
    errors,
    handleSubmit,
    handleResetForm,
    mail,
    setMail,
  };
};

export default useForm;
