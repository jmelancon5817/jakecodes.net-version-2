import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-text">
        <h2 id="contact-headline">Contact</h2>
        <p className="contact-description">Let's get to work</p>
      </div>
      <div className="contact-form">
        <form
          action="https://getform.io/f/be461f3c-6531-4524-bd62-991670990617"
          method="POST"
        >
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              cols="30"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="button-box">
            <button className="underline">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
