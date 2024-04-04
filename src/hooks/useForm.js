import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { SuccessAlert, ErrorAlert } from "../components/utils/Alerts";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, subject } = mail;

    let newErrors = {};

    if (!name || !name.trim() || name.length < 3) {
      newErrors = {
        ...newErrors,
        name: "Name is required and must be at least 3 characters long",
      };
    }

    if (!email || !email.trim() || email === "") {
      newErrors = { ...newErrors, email: "Email is required" };
    }

    if (
      !email.match(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/) &&
      errors.email !== "" &&
      email !== ""
    ) {
      newErrors = { ...newErrors, email: "Email is not valid" };
    }

    if (
      !githubUserExists &&
      githubUserToFind !== "" &&
      githubUserToFind.trim() !== ""
    ) {
      newErrors = { ...newErrors, github: "Github user doesn't exist" };
    }

    if (subject === "" || subject.trim() === "" || !subject) {
      newErrors = { ...newErrors, subject: "Subject is required" };
    }

    if (message === "" || message.trim() === "" || !message) {
      newErrors = { ...newErrors, message: "Message is required" };
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
              title: "Message sent!",
              text: "Thank you for your message. I'll get back to you as soon as possible",
            });
            resetForm(e.target);
          }
        },
        () => {
          ErrorAlert({
            title: "Error sending message",
            text: "Please try again later",
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
