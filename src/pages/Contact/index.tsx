import React, { useEffect } from 'react'
import './style.css';
export default function Contact() {
    useEffect(()=>{document.title="Contato"},[]);
    return (
        <div className="container content" id="contato" data-spy="scroll" data-target="#barraNavegacao">
            <h1>Contato</h1>
            <div className="container">
                <div className="row">                        
                    <div className="">
                        <h5>Outros contatos:</h5>
                        <div className="dados">
                            Juliano Paulo da Silva Santos<br/>
                            E-mail: julianopaulo.santos@hotmail.com
                            Celular (WhatsApp): (35) 9 8452-3630
                        </div>
                    </div>
                </div>                   
            </div>
        </div>
    )
}
