import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Icons from '@material-ui/icons';

import './style.css';
export default function Contact() {
    const history = useHistory();

    useEffect(()=>{document.title="Contato"},[]);

    useEffect(()=>{
        document.querySelector("div.content")?.classList.add("content", "animating");
        document.querySelector("div.whatsapp-section")?.classList.add("whatsapp-section", "animating");
        document.querySelector("div.email-section")?.classList.add("email-section", "animating");
        document.querySelectorAll("span")?.forEach(item=>{
            item.classList.add("animating");
        })
    },[history]);

    return (
        <div className="container">
            <div className="contact">
                <div className="presentation typewriter-effect anim-typewriter">
                    <span data-animation="left">Contato</span>
                    <span data-animation="left">Juliano Paulo</span>
                </div>
                <div className="content">
                    <div className="whatsapp-section" data-animation="top">
                        <a 
                            href="https://wa.me/5535984523630"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span data-animation="left">Celular <Icons.WhatsApp/>:</span> 
                        </a>
                        <span data-animation="left">(35) 9 8452-3630</span>
                    </div>
                    <div className="email-section" data-animation="top">
                        <span data-animation="left">E-mail <Icons.Email/>:</span>
                        <span data-animation="left">julianopaulo.santos@hotmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
