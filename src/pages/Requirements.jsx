import React from "react";
import RequirementsImg from "../images/requirementsImg.png";
import Banner from "../components/Banner";

function Requirements() {
  return (
    <div className="law">
      <Banner
        title="Jakie wymogi należy spełnić aby strona mogła być uznana za dostępną?"
        subtitle="Niepełnosprawność to bardzo szerokie pojęcie co wiąże się z wielością stawianych wymagań."
        img={RequirementsImg}
        imgClass="requirements__img"
        alt="mężczyzna siedzi przed komputerem"
      />
    </div>
  );
}

export default Requirements;
