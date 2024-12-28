import React, { Suspense, useRef, useState } from "react";
import styles from "./Contact.module.css";
import '../../App.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles['contact-form']} id="contact">
      <div className={styles['w-left']}>
        <div className={styles.awesome}>
          <span>Get in touch</span>
          <span>Contact me</span>
        </div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "20rem",
            left: "-8rem"
          }}
        ></div>
      </div>

      <div className={styles['c-right']}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            className={styles.user}
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className={styles.user}
            placeholder="Email"
          />
          <textarea name="message" className={styles.user} placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span>{submitted && "Thanks for contacting me!"}</span>
          <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
            top: "2rem",
            left: "30rem",
          }}
        ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
