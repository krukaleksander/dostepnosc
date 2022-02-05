import React from "react";
import LawImg from "../images/lawImg.png";
import Banner from "../components/Banner";

function Law() {
  return (
    <div className="law">
      <Banner
        title="Czy muszę dostosować stronę do osób z niepełnosprawnościami?"
        subtitle="Jeżeli korzystasz z pieniędzy publicznych to masz taki obowiązek"
        img={LawImg}
        imgClass="law__img"
        alt="budynek sądu"
      />
    </div>
  );
}

export default Law;
