import React from "react";
import BrandStatement from "../components/BrandStatement";
import SocialMediaLink from "../components/SocialMediaLink";
import Navbar from "../components/Navbar"
function About() {
  return (<div>
    <Navbar />
    <div className="container">
      <BrandStatement  />
    </div>
    <div className="footer fixed-bottom">

   <SocialMediaLink />
   
    </div>
    </div>
  );
}

export default About;
