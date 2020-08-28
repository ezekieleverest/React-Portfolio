import React from 'react';
import fbIcon from "../images/fbIcon.png"
import githubIcon from "../images/gitHubIcon.png"
import linkedInIcon from "../images/linkedInIcon.ico"

function SocialMediaLink () {
    return (<span>

<a href="https://www.linkedin.com/in/ezekiel-everest/" className=" iconListItem liLink ml-5 mr-3" src={linkedInIcon}>LinkedIn</a>
<a href="https://github.com/ezekielenyart" className="iconListItem ghLink mx-3" src={githubIcon}>Github</a>
<a href="https://www.facebook.com/ezekiel.enyart" className="iconListItem fbLink mx-3" src={fbIcon}>Facebook</a>
<a className="iconListItem email mx-3">zekejeverest@gmail.com</a>

</span>
    )
}

export default SocialMediaLink