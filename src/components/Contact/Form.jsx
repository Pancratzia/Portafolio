import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const defaultImageURL =
  "https://st3.depositphotos.com/4111759/13425/v/450/depositphotos_134255626-stock-illustration-avatar-male-profile-gray-person.jpg";

const Form = () => {
  const [githubUserToFind, setGithubUserToFind] = useState("");
  const [githubUserPicture, setGithubUserPicture] = useState(defaultImageURL);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, github, message } = e.target;

    if (!name.value || !email.value || !message.value) {
      alert("Please fill all the required fields");
    }

    console.log({
      name: name.value,
      email: email.value,
      github: github.value,
      message: message.value,
    });

    resetForm(e.target);
  };

  const resetForm = (form) => {
    form.reset();
    setGithubUserToFind("");
    setGithubUserPicture(defaultImageURL);
  };

  useEffect(() => {

    //TODO: Wait till the user stopts typing in the input
    
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
            required
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
          />
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
            required
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
          />
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
            required
            autoComplete="off"
            className="border-2 border-yellow-600 text-slate-950 rounded-md p-1 font-display"
            rows="5"
            cols="30"
            style={{ resize: "vertical", formSizing: "content" }}
          ></textarea>
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
