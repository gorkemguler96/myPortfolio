import React, {useState} from 'react';
import './Footer.scss'
import {AppWrap, MotionWrap} from "../../wrapper";
import {client} from './client'
import emaill from '../../assests/email.png'
import mobile from '../../assests/mobile.png'

function Footer(props) {

    const [formData,setFormData] = useState({name:'',email:'',message:''})
    const [isFormSubmitted,setIsFormSubmitted] = useState(false)
    const [loading,setLoading] = useState(false)
    const {name, email, message} = formData

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setFormData({...formData,[name]:value})
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type : 'contact',
            name: formData.name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(()=>{
                setLoading(false)
                setIsFormSubmitted(true)
            })
    }

    return (
        <>
            <h2 className={"head-text"}>Take a coffe & chat with me</h2>

            <div className={"app__footer-cards"}>
                <a href="mailto:gorkemguler1996@gmail.com">
                <div className={"app__footer-card"}>
                    <img src={emaill} alt="email"/>
                    <span className={"p-text"}>gorkemguler1996@gmail.com</span>
                </div>
                </a>
                <a href="tel:+905344035243">
                <div className={"app__footer-card"}>
                    <img src={mobile} alt="mobile"/>
                    <span className={"p-text"}>+90 (534) 403 52-43</span>
                </div>
                </a>
            </div>

            {!isFormSubmitted ?
                <div className={"app__footer-form app__flex"}>
                    <div className={"app__flex"}>
                        <input className={"p-text"} placeholder={"Your Name"} name={"name"} value={name} onChange={handleChangeInput} type="text"/>
                    </div>
                    <div className={"app__flex"}>
                        <input className={"p-text"} placeholder={"Your Email"} name={"email"} value={email} onChange={handleChangeInput} type="email"/>
                    </div>
                    <div>
                    <textarea
                        className={"p-text"}
                        placeholder={"Your Message"}
                        value={message}
                        name="message"
                        onChange={handleChangeInput}
                    />
                    </div>
                    <button type={"button"} className={"p-text"} onClick={handleSubmit}>{ loading ? 'Sending' : 'Send Message'}</button>
                </div>
                : <div>
                    <h3 className={"head-text"}>Thank you for getting in touch</h3>
                </div>
            }


        </>
    );
}

export default AppWrap(
    MotionWrap(Footer,'app__footer'),
    'contact',
    'app__whitebg'
);

