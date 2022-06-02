import React, {useState} from 'react';
import './Navbar.scss'
import { HiMenuAlt4, HiX} from "react-icons/hi";
import { motion } from "framer-motion";

function Navbar(props) {

    const [toggle,setToggle] = useState(false)

    return (
        <nav className={"app__navbar"}>
            <div className={"app__navbar-logo"}>
                <h1>Görkem GÜLER</h1>
            </div>
            <ul className={"app__navbar-links"}>
                {['home','about','work','skills','contact'].map((item)=>(
                    <li className={"app__flex p-text"} key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className={"app__navbar-menu"}>
                <HiMenuAlt4 onClick={()=>setToggle(true)}/>

                {
                    toggle && (
                        <motion.div
                            whileInView={{x:[300,0]}}
                            transation={{duration:0.85, ease: 'easeOut'}}
                        >
                            <HiX onClick={()=> setToggle(false)}/>
                            <ul >
                                {['home','about','work','skills','contact'].map((item)=>(
                                    <li key={item}>
                                        <a onClick={()=> setToggle(false)} href={`#${item}`}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>
        </nav>
    );
}

export default Navbar;
