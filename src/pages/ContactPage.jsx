import MainLayout from "../components/Layouts/MainLayout";

const ContactPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent");
  }
  return (
    <MainLayout title={"< Contact Me />"} pageName={"Contact"}>
      <main className="lg:mt-10">
        <form method="POST" className="text-slate-100">
          <legend>
            Do you want to contact me? Send me a message and I&apos;ll get back
            to you as soon as possible
          </legend>

          <fieldset>
            <legend>Basic Information</legend>

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

          <input type="submit" value="Send Message" onClick={handleSubmit} />
        </form>
      </main>
    </MainLayout>
  );
};

export default ContactPage;
