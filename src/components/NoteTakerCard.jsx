import React from 'react'
import image from '../images/NoteTakerhome.png'

function NoteTaker () {
  return (
    <div className="card" >
  <img src={image} className="noteImage text-center card-img-top" alt="NoteTaker" href="" />
  <div className="card-body">
   
    <p className="card-text">An app for taking, storing, and reviewing notes.</p>
    <a href="https://piscine-saucisson-29803.herokuapp.com/" className="portBtn mx-3 btn btn-dark">Check it out</a>
    <a href="/#/notetech" className="portBtn btn btn-dark mx-3">Tech Details</a>

  </div>
</div>
  )
}


export default NoteTaker
