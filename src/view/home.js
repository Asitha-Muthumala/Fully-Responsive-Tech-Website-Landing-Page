import React from "react";

import AppHero from "../components/home/hero";
import AppAbout from "../components/home/about";
import AppFeature from "../components/home/feature";
import AppWorks from "../components/home/works";
import AppFaq from "../components/home/faq";
import AppPackage from "../components/home/package";
import AppContact from "../components/home/contact";

function AppHome() {
    return(
        <div className="main">
          <AppHero />
          <AppAbout />
          <AppFeature />
          <AppWorks />
          <AppFaq />
          <AppPackage />
          <AppContact />
        </div>
    );
}

export default AppHome;