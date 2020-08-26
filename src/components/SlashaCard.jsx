import React from 'react'
import image from '../images/Slasha.png'

function Slasha () {
  return (
    <div className="card" >
  <img src={image} className="slashaImage text-center card-img-top" alt="Slasha's" href="" />
  <div className="card-body">
   
    <p className="card-text">An app for Restaurant Menu Management.</p>
    <a href="https://desolate-stream-81420.herokuapp.com/" className="btn btn-dark mx-3">Check it out</a>
    <a href="/slashatech" className="btn btn-dark mx-3">Tech Details</a>
  </div>
</div>
  )
}


export default Slasha