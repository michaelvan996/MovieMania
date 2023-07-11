import React from 'react';

import Contactnavbar from "./ContactComponents/Contactnavbar.jsx";
import Contactmain from "./ContactComponents/Contactmain.jsx";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact--container">
      <Contactnavbar />
      <Contactmain />
    </div>
  )
}

export default Contact;
