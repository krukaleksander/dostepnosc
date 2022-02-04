import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeLinks from "../components/HomeLinks";
import HomeContact from "../components/HomeContact";

function Home() {
  return (
    <div className="page-wrapper">
      <HomeBanner />
      <HomeLinks />
      <HomeContact />
    </div>
  );
}

export default Home;
