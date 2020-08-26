import React from 'react'
import heroabilities from '../images/heroabilities.png'
import herosplash from '../images/herosplash.png'
import herorace from '../images/herorace.png'
import heroroster from '../images/heroroster.png'

function HeroCraftTech (){
    return(

<div className = "container slashaCont">
    <h1 className = "techDetailsh1">
        Technical Details
    </h1>
    <p>In this project, my team and I created an intuitive application for creating fantasy characters for use in Dungeons and Dragons.  The user has full control over their choice of Race, Class, Abilities, and Background.  Upon creation, the character is then stored in a Mongo Database in order to be referenced later and viewed on character summary sheet for ease of use while the user engages in Dungeons and Dragons.</p>
        <h2>Technologies</h2>
        <ul>
            <li>Express</li>
            <li>Node.js</li>
            <li>Bootstrap 4.5</li>
            <li>Slick</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Passport</li>
            <li>Javascript</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>axios</li>
            <li>ContextAPI</li>
            <li>axios</li>
            <li>bCrypt</li>

        </ul>
        <div className="row imagerow">
        <img className="heroimage col-6" src = {herorace} />
        <img className = "heroimage col-6" src = {heroabilities} />
        </div>
        <div className="row imagerow">
        <img className="heroimage col-6" src = {heroroster} />
        <img className = "heroimage col-6" src = {herosplash} />
        </div>

</div>
    )
}


export default HeroCraftTech