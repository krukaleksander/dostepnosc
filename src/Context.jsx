import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [info, setInfo] = useState("");
  const [sending, setSending] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

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

  return (
    <AppContext.Provider
      value={{
        isContactFormOpen,
        openContactForm,
        closeContactForm,
        name,
        email,
        phone,
        date,
        message,
        error,
        info,
        sending,
        cleanFn,
        validateFn,
        setSending,
        setError,
        setInfo,
        setName,
        setPhone,
        setMessage,
        setDate,
        setEmail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
