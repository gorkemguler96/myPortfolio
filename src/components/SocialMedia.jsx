import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {ImLinkedin2} from "react-icons/im";
import {SiGithub} from "react-icons/si";


function SocialMedia(props) {
    return (
        <div className={"app__social"}>
            <div>
                <a href="https://www.instagram.com/gorkemglr59/">
                    <BsInstagram/>
                </a>
            </div>
            <div>
                <a  href="https://www.linkedin.com/in/g%C3%B6rkem-g%C3%BCler-ab3a951b0/">
                    <ImLinkedin2/>
                </a>
            </div>
            <div>
                <a  href="https://github.com/gorkemguler96">
                    <SiGithub/>
                </a>
            </div>
        </div>
    );
}

export default SocialMedia;
