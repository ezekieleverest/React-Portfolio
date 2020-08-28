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
        
          <div className=" ">
            <HeroCraft />
          </div>
          <div className=" ">
            <Slasha />
          </div>
    
        
          <div className=" ">
            <NoteTaker />
          </div>
          <div className=" ">
              <RoadTrippr />
          </div>
        </div>


   
    </div>
  );
}

export default Portfolio;
