import React, { useState } from "react";
import "../contact/contact.css";

function Contact() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length == 0) {
      setError(true);
      console.log("Set message");
    }
  };
  return (
    <>
      <div id="contact-me-container">
        <div id="inner-container">
          <div id="contact-header">
            <h2 id="contact-me">Contact Me</h2>
            <p id="contact-me-text">
              Hi there, contact me to ask me about anything you have in mind
            </p>
          </div>
          <div id="form-container">
            <form onSubmit={handleSubmit}>
              <div id="name-row" className="inputs">
                <div id="first-name-container">
                  <label htmlFor="first_name">First Name</label>
                  <input type="text"
                    id="first_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div id="second-name-container">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    id="last_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
              </div>

              <div id="email-container" className="inputs">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="yourname@email.com" required />
              </div>

              <div id="message-textarea" className="inputs">
                <label htmlFor="message">Message</label>
                <textarea id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className={error ? "textarea-error" : ""}
                  placeholder="send me a message"
                />
                {error && message.length <= 0 ? (
                  <p>Please insert a message</p>
                ) : (
                  ""
                )}
              </div>

              <div id="checkbox-area" className="inputs">
                <input type="checkbox" id="checkbox" required />
                <p>
                  You agree to providing your data to Adeleke who may contact you
                </p>
              </div>
              <div id="submit-btn-section" className="inputs">
                <button type="submit" id="btn__submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;