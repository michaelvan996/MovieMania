import React from "react";
import Contactnavbar from "./ContactComponents/Contactnavbar.jsx";
import Contactmain from "./ContactComponents/Contactmain.jsx";
import "./Contact.css";
import Footer from "../Footer.jsx";
import ContactPerson from "./ContactComponents/contactPerson.jsx";
import CEO from "./contactImg/CEO.png";
import designer from "./contactImg/designer.png";
import director from "./contactImg/director.png";
import filmMaker from "./contactImg/filmMaker.png";

const Contact = () => {
  return (
    <div className="contact--container">
      <Contactnavbar />

      <div className="contact-person-container">
        <ContactPerson
          img={CEO}
          name="Maxwell Sterling"
          phone="(321) 242-1234"
          email="maxwell@moviemania.com"
        />
        <ContactPerson
          img={designer}
          name="Ava Hawthorne"
          phone="(343) 423-2345"
          email="ava@moviemania.com"
        />
        <ContactPerson
          img={director}
          name="Amara Sterling"
          phone="(234) 644-4678"
          email="amara@moviemania.com"
        />
        <ContactPerson
          img={filmMaker}
          name="Lucian Wilde"
          phone="(235) 234-4676"
          email="lucian@moviemania.com"
        />
      </div>
      <Contactmain />
      <Footer />
    </div>
  );
};

export default Contact;
