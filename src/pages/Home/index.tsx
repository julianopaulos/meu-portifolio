import React, { useEffect } from 'react';



import './style.css';

export default function Home() {
    useEffect(()=>{
        document.title="Home";
    },[]);
    return (
        <div className="content container">
        <h1 id="apresentacao">
            Olá, eu sou Juliano Paulo.
        </h1><br/>
        <p>
            Sou um desenvolvedor web com maior foco em <b>backend</b>, mas também 
            
            com conhecimentos em frontend.<br/>
            Tenho conhecimentos em <b>PHP, SQL, Reactjs, HTML5, Css3 e Bootstrap</b>, sempre me 
            aperfeiçoando com mais.<br/>
            Para saber mais sobre mim e sobre meus feitos acesse o meu portifólio clicando 
            no link do menu. <br/>Também lhe apresento minhas redes sociais principais:<br/><br/>
            
        </p>
        <div className="row">
              <div className="col-md-4"/>
              <div className="col-md-1">
                
              </div>
              <div className="col-md-1">
                
              </div>
              <div className="col-md-1">
                
              </div>
              <div className="col-md-1">
                
              </div>
            </div>
      </div>        
    )
}
