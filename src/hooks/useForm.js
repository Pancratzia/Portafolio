import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const defaultImageURL = "./img/utils/no-user.jpg";

const initialUser = {
  name: "",
  email: "",
  github: "",
  message: "",
};

const useForm = () => {
  const [githubUserToFind, setGithubUserToFind] = useState("");
  const [githubUserPicture, setGithubUserPicture] = useState(defaultImageURL);
  const [githubUserExists, setGithubUserExists] = useState(false);
  const [errors, setErrors] = useState({});

  const [user, setUser] = useState(initialUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = user;

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


    if (!githubUserExists && githubUserToFind !== "" && githubUserToFind.trim() !== "") {
      newErrors = { ...newErrors, github: "Github user doesn't exist" };
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
        (res) => {
          if (res.status === 200) {
            alert("Message sent successfully");
          }
        },
        (error) => {
          alert(error.text);
        }
      );

    resetForm(e.target);
  };

  const resetForm = (form) => {
    form.reset();
    setGithubUserToFind("");
    setGithubUserPicture(defaultImageURL);
    setGithubUserExists(false);
    setErrors({});
    setUser(initialUser);
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
        setUser({ ...user, github: response.data.login });
      })
      .catch(() => {
        setGithubUserExists(false);
        setGithubUserPicture(defaultImageURL);
        setUser({ ...user, github: "" });
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
    resetForm,
    setUser,
    user,
  };
};

export default useForm;
