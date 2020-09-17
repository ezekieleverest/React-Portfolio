
import React from 'react'
import image from '../images/roadtripprpage.png'

function RoadTrippr () {
  return (
    <div className="card" >
  <img src={image} className="slashaImage text-center card-img-top" alt="RoadTrippr" href="" />
  <div className="card-body">
   
    <p className="card-text">A fully front-end app to find destinations on a Road Trip.</p>
    <a href="https://ezekieleverest.github.io/RoadTrippr/" className="portBtn btn btn-dark mx-3">Check it out</a>
    <a href="/React-Portfolio/#/roadtech" className="portBtn btn btn-dark mx-3">Tech Details</a>

  </div>
</div>
  )
}


export default RoadTrippr