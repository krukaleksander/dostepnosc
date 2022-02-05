import React from "react";
import LawImg from "../images/lawImg.png";
import Banner from "../components/Banner";
import InvalidImg from "../images/chlopak_na_wozku.jpg";

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
      <div className="law__act">
        <div className="text">
          <h1>
            Ustawa z dnia 19 lipca 2019 r. o zapewnianiu dostępności osobom ze
            szczególnymi potrzebami
          </h1>
          <p>
            5 września 2021 roku weszły w życie przepisy ustawy z dnia 19 lipca
            2019 r. o zapewnieniu dostępności osobom ze szczególnymi potrzebami
            (Dz. U. z 2020 r., poz. 1062), obowiązek uwzględniania dostępności
            przez podmioty inne niż publiczne, w sytuacjach gdy podpisują one
            umowę z podmiotem publicznym na realizację zadań lub zamówień
            publicznych.
          </p>
        </div>
        <div className="img">
          <img src={InvalidImg} alt="chłopak na wózku" />
        </div>
      </div>
    </div>
  );
}

export default Law;
