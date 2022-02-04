import { useState } from "react";
import { CgClose } from "react-icons/cg";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
import "moment/locale/pl";
import { useGlobalContext } from "../Context";

const ContactForm = () => {
  const { closeContactForm } = useGlobalContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");
  const [sending, setSending] = useState(false);

  const cleanFn = () => {
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setMessage("");
    setError("");
  };
  const validateFn = () => {
    if (name.length < 1) {
      return setError("Jak masz na imię?");
    } else if (phone.length < 9) {
      return setError("Telefon jest za krótki");
    } else if (message.length < 1) {
      return setError("Podaj treść wiadomości");
    } else return true;
  };
  const handleSetMessage = () => {
    if (validateFn()) {
      setSending(true);
      let data = new URLSearchParams();

      data.append("clientName", name);
      data.append("clientEmail", email);
      data.append("clientPhone", phone);
      data.append("clientDate", date);
      data.append("clientMessage", message);
      fetch(`https://energy2000.herokuapp.com/or-msg`, {
        method: "post",
        body: data,
      })
        .then((response) => response.text())
        .then((text) => {
          setError("");
          setInfo(text);
          setSending(false);
        })
        .then(() => cleanFn())
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="contact-form" onClick={() => closeContactForm()}></div>
      <div className="form">
        <span>
          <CgClose onClick={() => closeContactForm()} />
        </span>
        <h2>Formularz kontaktowy</h2>
        <input
          type="text"
          placeholder="Imię"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setError("")}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setError("")}
        />
        <input
          type="text"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onFocus={() => setError("")}
        />
        <h4>Kiedy mamy się skontaktować?</h4>

        {/* problem z datetime */}
        <Datetime
          locale="pl"
          initialValue={new Date()}
          onChange={(e) => setDate(e._d)}
          onFocus={() => setError("")}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Wiadomość"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setError("")}
        ></textarea>
        {error && <p className="error">{error}</p>}
        {info && <p className="info">{info}</p>}
        {!sending ? (
          <button onClick={handleSetMessage}>Wyślij</button>
        ) : (
          <div className="sending">
            <p className="sending__info">Wysyłanie wiadomości...</p>
            <div className="sending__ring"></div>
          </div>
        )}
        <p>Nasz przedstawiciel skontaktuje się w wybranym terminie.</p>
      </div>
    </>
  );
};

export default ContactForm;
