import React from 'react';
import './Header.scss'
import profile from '../../assests/son.png'
import circle from '../../assests/circle.svg'
import redux from '../../assests/redux.png'
import react from '../../assests/react.png'
import sass from '../../assests/sass.png'
import { motion } from 'framer-motion'
import {AppWrap} from '../../wrapper'

const scaleVariants = {
    vhileInView: {
        scale: [0,1],
        opacity: [0,1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}


function Header(props) {
    return (
        <div className={"app__header app__flex"}>
            <motion.div
                whileInView={{x:[-100,0], opacity: [0,1] }}
                transition={{duration:0.5}}
                className={"app__header-info"}
            >
                <div className={"app__header-badge"}>
                    <div className="badge-cmp ap__flex">
                        <span>👋</span>
                        <div style={{marginLeft:20}}>
                            <p className={"p-text"}>Hello, I am </p>
                            <h1 className={"head-text"}>Görkem</h1>
                        </div>
                    </div>

                    <div className={"tag-cmp app__flex"}>
                        <p className="p-text">Frontend Developer</p>
                        <p className="p-text">UI / UX DESIGNER</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0,1] }}
                transition={{duration:0.5, delayChildren: 0.5}}
                className={"app__header-img"}
            >
                <img src={profile} alt="profile"/>
                <div>
                <motion.img
                    whileInView={{ scale: [0,1] }}
                    transition={{duration:1, ease: "easeInOut"}}
                    className={"overlay_circle"}
                    src={circle}
                    alt={"circle"}
                />
                </div>
            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.vhileInView}
                className={"app__header-circles"}
            >
                {[redux,react,sass].map((circle, index)=>(
                    <div className={"circle-cmp app__flex"} key={`circle-${index}`}>
                        <img src={circle} alt="circle"/>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, 'home');
