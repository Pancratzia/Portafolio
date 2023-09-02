import { useState, useEffect, SetStateAction } from "react";

import "./Contact.scss";
function Contact() {
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("https://via.placeholder.com/50");

  useEffect(() => {
    if (username.length >= 1) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Usuario no encontrado");
          }
        })
        .then((data) => {
          setAvatarUrl(data.avatar_url);
        })
        .catch((error) => {
          console.error(error);
          setAvatarUrl("https://via.placeholder.com/50");
        });
    } else {
      setAvatarUrl("https://via.placeholder.com/50");
    }
  }, [username]);

  const handleUsernameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  return (
    <div className="contact">
      <div className="container">
        <h2 className="h2-title">Contact Me</h2>
        <div className="contact-container">
          <form action="" className="form" method="POST">
            <legend>Want to get in touch? Feel free to write a message!</legend>

            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name..."
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email..."
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="github-username">
                GitHub Username <small>(Optional)</small>
              </label>
              <div className="user-info">
                <img src={avatarUrl} alt="github profile picture" />
                <div className="input">
                  <input
                    type="text"
                    name="github-username"
                    id="github-username"
                    placeholder="Your github username..."
                    onChange={handleUsernameChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your subject..."
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <div className="buttons">
              <input type="submit" value="Send" />
              <input type="reset" value="Reset" />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;