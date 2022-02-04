import React from "react";
import BeGoodImg from "../images/beGood.png";
import { Link } from "react-router-dom";

function HomeContact() {
  return (
    <div className="home-contact">
      <div className="home-contact__text">
        <h1>Dlaczego dostępność cyfrowa jest tak ważna?</h1>
        <p>
          Faktem jest niestety, że pewna grupa użytkowników Internetu jest z
          jego dużej części wyłączona. Są to osoby niepełnosprawne, które nie
          mają możliwości odczytania treści na niektórych stronach - jest to nic
          innego jak forma dyskryminacji tych osób. Nawet osoby starsze mają
          problemy z odczytywaniem zbyt małych tekstów, czy treści źle dobranych
          kolorystycznie. Dostępność cyfrowa to danie szansy wszystkim ludziom
          na to, aby na równych prawach korzystali z Internetu.
        </p>
        <button>
          <Link to="/kontakt">Kontakt</Link>
        </button>
      </div>
      <div className="img">
        <img
          src={BeGoodImg}
          alt="strona dostępna cyfrowo to równe szanse dla wszystkich"
        />
      </div>
    </div>
  );
}

export default HomeContact;
