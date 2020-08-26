import React from "react";
import Navbar from "../components/Navbar";
import HeroCraft from "../components/HeroCraftCard";
import Slasha from "../components/SlashaCard";
import NoteTaker from "../components/NoteTakerCard";
import RoadTrippr from '../components/roadTripperCard'

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row portRow">
          <div className="col-6 card">
            <HeroCraft />
          </div>
          <div className="col-6 card">
            <Slasha />
          </div>
        </div>
        <div className="row portRow">
          <div className="col-6 card">
            <NoteTaker />
          </div>
          <div className="col-6 card">
              <RoadTrippr />
          </div>
        </div>
        <div className="row portRow">
          <div className="col-6 card">Hello</div>
          <div className="col-6 card">Hello</div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
