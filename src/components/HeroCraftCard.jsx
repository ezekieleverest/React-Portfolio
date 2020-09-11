import React from 'react'
import image from '../images/Herosheet.png'

function HeroCraft () {
  return (
    <div className="card" >
  <img src={image} className="heroImage text-center card-img-top" alt="HeroCraft" href="" />
  <div className="card-body">
   
    <p className="card-text">An app to create a fantasy character.</p>
    <a href="https://murmuring-cove-64228.herokuapp.com/" className="portBtn btn btn-dark mx-3">Check it out</a>
    <a href="/#/herotech" className="portBtn btn btn-dark mx-3">Tech Details</a>

  </div>
</div>
  )
}


export default HeroCraft

