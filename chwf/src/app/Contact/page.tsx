'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './about.module.css';
import Script from 'next/script';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o8pn2cn', 'template_1ife7c9', form.current, {
        publicKey: 'G0OaymeZA5j4h5MMt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
 <div className={styles.container}>
 <div className={styles.form}>

 <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="Name" /><br/><br/>
      <label>Email</label>
      <input type="email" name="Email" /><br/><br/>
      <label>Message</label><br/>
      <textarea name="Message" /><br/>
      <button>  <input type="submit" value="Send" /></button>
    <label>hey</label>
    </form>
 </div>
  </div>


    

  );
};

export default Contact