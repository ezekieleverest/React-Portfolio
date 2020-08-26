import React from 'react';
import fbIcon from "../images/fbIcon.png"
import githubIcon from "../images/gitHubIcon.png"
import linkedInIcon from "../images/linkedInIcon.ico"

function SocialMediaLink () {
    return (
<div  className='mx-auto'>
    <ul className=" list-group list-group-horizontal">
    <li className="fbLink list-group-item"><a href="https://www.facebook.com/ezekiel.enyart" className="iconListItem" src={fbIcon}>Facebook</a></li>
    <li className="ghLink list-group-item "><a href="https://github.com/ezekielenyart" className="iconListItem" src={githubIcon}>Github</a></li>
    <li className="liLink rounded list-group-item "><a href="https://www.linkedin.com/in/ezekiel-everest/" className="rounded iconListItem" src={linkedInIcon}>LinkedIn</a></li>
    </ul>
</div>
    )
}

export default SocialMediaLink