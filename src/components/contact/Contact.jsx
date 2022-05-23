import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yok30nk",
        "template_b5jwrh8",
        formRef.current,
        "user_zzf8kacuoDY3pHBGTDc9G"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img className="contactimg" src="assets/contact.svg" alt="" />

        <div className="c-info">
          <img src="./assets/address.png" alt="" />
          Ghaziabad,Uttar Pradesh (IN)
          <img src="./assets/phone.png" alt="" />
          +91 9990173641
          <img src="./assets/email.png" alt="" />
          gya7329@gmail.com
        </div>
      </div>

      <div className="right">
        <h2> Contact Me </h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Subject" name="subject" />
          <input type="text" placeholder="Email" name="email" />
          <textarea rows="5" placeholder="Message" name="message"></textarea>
          <button className="submit">Submit</button>
          {done && <span>Thanks , I'll reply ASAP ):</span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
