import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeLinks from "../components/HomeLinks";
import HomeContact from "../components/HomeContact";
import HomeNeedHelp from "../components/HomeNeedHelp";
function Home() {
  return (
    <div className="page-wrapper">
      <HomeBanner />
      <HomeLinks />
      <HomeContact />
      <HomeNeedHelp />
    </div>
  );
}

export default Home;
