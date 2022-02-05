import React from "react";
import TeamImg from "../images/teamWork.png";
import Banner from "../components/Banner";
import HomeLinks from "../components/HomeLinks";
import HomeContact from "../components/HomeContact";
import HomeNeedHelp from "../components/HomeNeedHelp";
function Home() {
  return (
    <div className="page-wrapper">
      <Banner
        title="Skorzystaj z usług lidera w branży dostępności cyfrowej"
        subtitle="Spraw aby Twoja strona internetowa dawała wszystkim równe szanse."
        img={TeamImg}
        imgClass="home__img"
        alt="praca zespołowa nad dostępnością cyfrową"
      />
      <HomeLinks />
      <HomeContact />
      <HomeNeedHelp />
    </div>
  );
}

export default Home;
