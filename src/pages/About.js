import React from "react";
import BrandStatement from "../components/BrandStatement";
import SocialMediaLink from "../components/SocialMediaLink";
import Navbar from "../components/Navbar"
function About() {
  return (<div>
    <Navbar />
    <div className="card">
      Contact Information
    <p>Email: zekejeverest@gmail.com
    </p>
    <SocialMediaLink />
    </div>
    <div className="container">
      <BrandStatement  />
    </div>
    </div>
  );
}

export default About;
