import React from 'react'
import slashamenu from '../images/slashamenu.png'
import slashaadmin from '../images/slashaadmin.png'

function SlashaTech (){
    return(
<div className = "container slashaCont">
    <h1 className = "techDetailsh1">
        Technical Details
    </h1>
    <p>In this project I worked with a partner to build a system for managing a restaurants menu.  In my experience working in restaurants, the system is often confusing and unnecessarily complicated, and my partner and I decided to create a system that was more intuitive.</p>
        <h2>Technologies</h2>
        <ul>
            <li>Javascript</li>
            <li>MySql</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Passport</li>
            <li>Bootstrap 4.5</li>
            <li>Slick</li>
            <li>HTML5</li>
            <li>CSS3</li>
        </ul>
        <div className="row imagerow">
        <img className="slashamenu col-6" src = {slashamenu} />
        <img className = "slashaadmin col-6" src = {slashaadmin} />
        </div>
</div>
    )
}


export default SlashaTech