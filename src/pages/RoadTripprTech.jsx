import React from 'react'
import roadtrippr from '../images/roadtrippr.png'
import roadsplash from '../images/roadsplash.png'

function RoadTripprTech (){
    return(

<div className = "container slashaCont">
    <h1 className = "techDetailsh1">
        Technical Details
    </h1>
    <p>My team and I created this project in order to give road trippers the ability to see potential locations of interest along their route and near their destination.  Users also have the ability to add locations to a list of destinations for them to reference later</p>
        <h2>Technologies</h2>
        <ul>
            <li>Javascript</li>
            <li>Node.js</li>
            <li>Bootstrap 4.5</li>
            <li>Slick</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>axios</li>

        </ul>
        <div className="row imagerow">
        <img className="slashamenu col-6" src = {roadtrippr} />
        <img className = "slashaadmin col-6" src = {roadsplash} />
        </div>

</div>
    )
}


export default RoadTripprTech