import React from "react";
import { GoLaw } from "react-icons/go";
import { RiFilePaperLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function HomeLinks() {
  return (
    <div className="home-links">
      <div className="home-links__law home-links__container">
        <div className="img">
          <GoLaw />
        </div>
        <h1>Kto musi zadbać o dostępność cyfrową?</h1>
        <h2>
          We wrześniu 2021 roku weszły zmiany, które wiele zmieniają na tym
          polu.
        </h2>
        <button>
          <Link to="/prawo">Czytaj więcej</Link>
        </button>
      </div>
      <div className="home-links__requirements home-links__container">
        <div className="img">
          <RiFilePaperLine />
        </div>
        <h1>Jakie standardy powinniśmy spełnić aby być dostępni cyfrowo?</h1>
        <h2>
          Wymogi zawarte są w standardzie WCAG 2.1, warto się z nim zapoznać.
        </h2>
        <button>
          <Link to="/wymogi">Czytaj więcej</Link>
        </button>
      </div>
    </div>
  );
}

export default HomeLinks;
