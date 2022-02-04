import React from "react";
import TeamImg from "../images/teamWork.png";

function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="home-banner__text">
        <h1>Skorzystaj z usług lidera w branży dostępności cyfrowej</h1>
        <h2>
          Spraw aby Twoja strona internetowa dawała wszystkim równe szanse.
        </h2>
        <button>Darmowa konsultacja</button>
      </div>
      <div className="home-banner__image">
        <img src={TeamImg} alt="praca zespołowa nad dostępnością cyfrową" />
      </div>
    </div>
  );
}

export default HomeBanner;
