import React from "react";
import { GoLaw } from "react-icons/go";
import { RiFilePaperLine } from "react-icons/ri";

function HomeLinks() {
  return (
    <div className="home-links">
      <div className="home-links__law">
        <div className="img">
          <GoLaw />
        </div>
        <h1>Kto musi zadbać o dostępność cyfrową?</h1>
        <h2>
          We wrześniu 2021 roku weszły zmian, które wiele zmieniają na tym polu.
        </h2>
        <button>Czytaj</button>
      </div>
      <div className="home-links__requirements">
        <div className="img">
          <RiFilePaperLine />
        </div>
        <h1>Jakie wymogi należy spełnić?</h1>
        <h2>
          Wymogi zawarte są w standardzie WCAG 2.1, warto się z nim zapoznać.
        </h2>
        <button>Czytaj</button>
      </div>
    </div>
  );
}

export default HomeLinks;
