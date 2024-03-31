const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, github, message } = e.target;

    if (!name.value || !email.value || !message.value) {
      alert("Please fill all the required fields");
    }

    console.log({ name: name.value, email: email.value, github: github.value, message: message.value });

    resetForm(e.target);
  };

  const resetForm = (form) => {
    form.reset();
  }

  return (
    <form method="POST" className="text-slate-100 container border-2 border-yellow-600 rounded-xl p-5" onSubmit={handleSubmit}>
      <legend className="text-center uppercase font-bold fluid-md">
        Do you want to contact me? Send me a message and I&apos;ll get back to you as soon as possible
      </legend>

      <fieldset className="mt-5 border-t-[1px] border-slate-300 pt-5">
        <legend className="text-center uppercase font-bold fluid-sm px-2">Basic Information</legend>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name..."
          required
          autoComplete="off"
          className="border-2 border-yellow-600 text-slate-950"
        />
      </fieldset>

      <fieldset>
        <legend>Contact Information</legend>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email..."
          required
          autoComplete="off"
          className="border-2 border-yellow-600 text-slate-950"
        />

        <label htmlFor="github">
          GitHub Username <small>(optional)</small>
        </label>
        <input
          type="text"
          name="github"
          id="github"
          placeholder="Your GitHub username..."
          autoComplete="off"
          className="border-2 border-yellow-600 text-slate-950"
        />
      </fieldset>

      <fieldset>
        <legend>Message</legend>
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message..."
          required
          autoComplete="off"
          className="border-2 border-yellow-600 text-slate-950"
        ></textarea>
      </fieldset>

      <input type="submit" value="Send Message" />
    </form>
  );
};

export default Form;
