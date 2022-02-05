import React from "react";
import MaterialsImg from "../images/materialsImg.png";
import Banner from "../components/Banner";

function Materials() {
  return (
    <div className="law">
      <Banner
        title="Zbiór materiałów o dostępności, które można znaleźć w Internecie"
        subtitle="To artykuły, ustawy i inne materiały pomocne w poszerzaniu wiedzy o dostępności."
        img={MaterialsImg}
        imgClass="materials__img"
        alt="książki stoją na półce"
      />
    </div>
  );
}

export default Materials;
