
import React from 'react'
import image from '../images/roadtrippr.png'

function RoadTrippr () {
  return (
    <div className="card" >
  <img src={image} className="slashaImage text-center card-img-top" alt="RoadTrippr" href="" />
  <div className="card-body">
   
    <p className="card-text">A fully front-end app to find destinations on a Road Trip.</p>
    <a href="https://ezekielenyart.github.io/RoadTrippr/" className="btn btn-dark mx-3">Check it out</a>
    <a href="/roadtech" className="btn btn-dark mx-3">Tech Details</a>

  </div>
</div>
  )
}


export default RoadTrippr