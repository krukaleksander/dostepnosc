import React from "react";
import ContactImg from "../images/contactImg.png";
import Banner from "../components/Banner";

function Contact() {
  return (
    <div className="law">
      <Banner
        title="Skontaktuj się z nami jeśli nurtują Cię jakieś pytania."
        subtitle="Telefon, email, formularz kontaktowy - masz wiele możliwości."
        img={ContactImg}
        imgClass="contact__img"
        alt="książki stoją na półce"
      />
    </div>
  );
}

export default Contact;
