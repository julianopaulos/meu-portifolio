import React, { useEffect } from 'react';
import * as Icons from '@material-ui/icons';

import './style.css';
/* 'https://wa.me/5535984523630' */
export default function Contact() {
    useEffect(()=>{document.title="Contato"},[]);
    return (
        <div className="container">
            <div className="contact">
                <div className="presentation typewriter-effect anim-typewriter">
                    <span>Contato</span>
                    <span>Juliano Paulo</span>
                </div>
                <div className="content">
                    <div className="whatsapp-section">
                        <a 
                            href="https://wa.me/5535984523630"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <span>Celular <Icons.WhatsApp/>:</span> 
                        </a>
                        <span>(35) 9 8452-3630</span>
                    </div>
                    <div className="email-section">
                        <span>E-mail <Icons.Email/>:</span>
                        <span>julianopaulo.santos@hotmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
