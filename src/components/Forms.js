import "./FormsStyles.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Forms = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2qx462a', 'template_vuz30ut', form.current, {
        publicKey: 'bJg2vSOIJC030Kq9h',
      })
      .then(
        () => {
          alert('Message send Successfully');
          form.current.reset();
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Sarthak Goyal" required/>
        <label>Email</label>
        <input type="email" name="user_email" placeholder="2003sarthakgoyal@gmail.com" required/>
        <label>Message</label>
        <textarea name="message" rows="8" placeholder="Your Message"/>
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Forms;
