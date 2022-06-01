import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {SiGithub} from "react-icons/si";

function SocialMedia(props) {
    return (
        <div className={"app__social"}>
            <div>
                <BsInstagram/>
            </div>
            <div>
                <FaFacebookF/>
            </div>
            <div>
                <SiGithub/>
            </div>
        </div>
    );
}

export default SocialMedia;
