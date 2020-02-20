import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons';



export default class Home extends Component {
  render() {
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
                <SocialIcon url="http://facebook.com/julianopaulo.santos" target="_blank" />
              </div>
              <div className="col-md-1">
                <SocialIcon url="https://www.linkedin.com/in/juliano-paulo-santos-b38b9a159/" target="_blank" />
              </div>
              <div className="col-md-1">
                <SocialIcon url="https://github.com/jsdie099" target="_blank" />
              </div>
              <div className="col-md-1">
                <SocialIcon url="https://www.instagram.com/julianop099/" target="_blank" />
              </div>
            </div>
      </div>        
      
    )
  }
}
