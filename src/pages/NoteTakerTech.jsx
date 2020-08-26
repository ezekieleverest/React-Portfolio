import React from 'react'
import notesheet from '../images/notesheet.png'
import notesplash from '../images/notesplash.png'

function NoteTakerTech (){
    return(

<div className = "container slashaCont">
    <h1 className = "techDetailsh1">
        Technical Details
    </h1>
    <p>In this project, I worked alone to create a simple app for taking notes and storing them for later use.  This app uses a simple MySql database for the storage of the notes.</p>
        <h2>Technologies</h2>
        <ul>
            <li>Javascript</li>
            <li>MySql</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Bootstrap 4.5</li>
            <li>Slick</li>
            <li>HTML5</li>
            <li>CSS3</li>
        </ul>
        <div className="row imagerow">
        <img className="slashamenu col-6" src = {notesplash} />
        <img className = "slashaadmin col-6" src = {notesheet} />
        </div>

</div>
    )
}


export default NoteTakerTech