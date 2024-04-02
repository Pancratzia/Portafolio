import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const defaultImageURL =
  "https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg";

const Form = () => {
  const [githubUserToFind, setGithubUserToFind] = useState("");
  const [githubUserPicture, setGithubUserPicture] = useState(defaultImageURL);
  const [githubUserExists, setGithubUserExists] = useState(false);
  const [errors, setErrors] = useState({});


  const setNewError = (key, value) => {
    setErrors((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, github, message } = e.target;

    setErrors({});

    if (!name.value || !name.value.trim() || name.value.length < 3) {
      setNewError("name", "Name is required and must be at least 3 characters long");
    }

    if (!email.value || !email.value.trim() || email.value === "") {
      setNewError("email", "Email is required");
    }

    if(!email.value.match(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/) && errors.email !== "") {
      setNewError("email", "Email is not valid");
    }

    if (!githubUserExists && github.value) {
      setNewError("github", "Github user doesn't exist");
    }

    if (message.value === "" || message.value.trim() === "" || !message.value) {
      setNewError("message", "Message is required");
    }


    resetForm(e.target);
  };

  const resetForm = (form) => {
    form.reset();
    setGithubUserToFind("");
    setGithubUserPicture(defaultImageURL);
    setGithubUserExists(false);
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
      })
      .catch(() => {
        setGithubUserExists(false);
        setGithubUserPicture(defaultImageURL);
      });
  }, [githubUserToFind]);


  return (
    <form
      method="POST"
      className="text-slate-100 container border-2 border-yellow-600 rounded-xl p-5"
      onSubmit={handleSubmit}
    >
      <legend className="text-center uppercase font-bold fluid-md">
        Do you want to contact me? Send me a message and I&apos;ll get back to
        you as soon as possible
      </legend>

      <fieldset className="mt-5 border-t-[1px] border-slate-300 pt-5">
        <legend className="text-center uppercase font-bold fluid-sm px-2">
          Basic Information
        </legend>

        <div className="form-field flex flex-col">
          <label
            htmlFor="name"
            className="text-slate-100 font-bold fluid-md mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name..."
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
          />
          {errors.name && <p className="text-red-500 text-center mt-1">{errors.name}</p>}
        </div>
      </fieldset>

      <fieldset className="mt-5 border-t-[1px] border-slate-300 pt-5">
        <legend className="text-center uppercase font-bold fluid-sm px-2">
          Contact Information
        </legend>

        <div className="form-field flex flex-col">
          <label
            htmlFor="email"
            className="text-slate-100 font-bold fluid-md mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email..."
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
          />
          {errors.email && <p className="text-red-500 text-center mt-1">{errors.email}</p>}
        </div>

        <div className="form-field flex flex-col">
          <label
            htmlFor="github"
            className="text-slate-100 font-bold fluid-md my-2"
          >
            GitHub Username <small className="text-slate-300">(Optional)</small>
          </label>

          <div className="flex items-center gap-3 w-100">
            <img src={githubUserPicture} className="w-12 h-12 rounded-full" />
            <input
              type="text"
              name="github"
              id="github"
              placeholder="Your GitHub username..."
              autoComplete="off"
              className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display w-full"
              onChange={(e) => setGithubUserToFind(e.target.value)}
              value={githubUserToFind}
            />
          </div>
          {errors.github && <p className="text-red-500 text-center mt-1">{errors.github}</p>}
        </div>
      </fieldset>

      <fieldset className="mt-5 border-t-[1px] border-slate-300 pt-5">
        <legend className="text-center uppercase font-bold fluid-sm px-2">
          Message
        </legend>

        <div className="form-field flex flex-col">
          <label
            htmlFor="message"
            className="text-slate-100 font-bold fluid-md mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message..."
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
            rows="5"
            cols="30"
            style={{ resize: "vertical", formSizing: "content" }}
          ></textarea>

          {errors.message && <p className="text-red-500 text-center mt-1">{errors.message}</p>}
        </div>
      </fieldset>

      <div className="flex justify-center mt-5">
        <input
          type="submit"
          value="Send Message"
          className="flex justify-center items-center w-[max-content] rounded-full gap-1 px-4 py-2 fluid-md border-2 border-yellow-600 transition duration-300 font-bold text-yellow-600 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default Form;
