import React, { useEffect } from 'react';
import  * as Icons  from '@material-ui/icons';

import myProfilePicture from '../../assets/imgs/IMG_4271.jpg';

import './style.css';

export default function Home() {
    useEffect(()=>{
        document.title="Home";
    },[]);
    return (
        <div className="container">
            <div className="home">
                <div className="presentation">
                    <p className="name typewriter-effect anim-typewriter">Juliano Paulo.</p>
                    <div className="skills">
                        <span>Desenvolvedor Back-end:</span>
                            <div className="subskills">
                                <span>Desenvolvedor PHP</span>
                                <span>Desenvolvedor Nodejs</span>
                                <span>Desenvolvedor SQL</span>
                            </div>
                        <span>Desenvolvedor Front-end:</span>
                            <div className="subskills">
                                <span>Desenvolvedor HTML com CSS3 ou Bootstrap</span>
                                <span>Desenvolvedor Reactjs</span>
                            </div>
                    </div>
                </div>
                <hr/>
                <div className="content">

                    <section className="main">
                        <img src={myProfilePicture} alt="Foto de perfil"/>
                        <p>
                            Formado em Análise e Desenvolvimento de Sistemas, tenho 21 anos.
                            Sou apaixonado por tecnologia, e me tornei um desenvolvedor web para sanar minhas
                            vontades de aprender, venho com maior foco em  <b>backend development</b>, 
                            mas também com conhecimentos em <b>frontend</b>.
                        </p>
                        <p>
                            Tenho conhecimentos em <b>PHP, Nodejs, SQL, Reactjs, HTML5, Css3 e Bootstrap</b>, 
                            sempre me aperfeiçoando com mais.
                            Para saber mais sobre mim e sobre meus feitos acesse o meus projetos clicando 
                            no link do menu.Também lhe apresento minhas principais redes sociais:
                        </p>
                    </section>
                    <div className="social-links">
                        <a 
                            href="https://www.linkedin.com/in/juliano-paulo-santos-b38b9a159/" 
                            target="__blank"
                        >
                            <Icons.LinkedIn/>
                        </a>
                        <a 
                            href="https://github.com/jsdie099" 
                            target="__blank"
                        >
                            <Icons.GitHub/>
                        </a>
                        <a 
                            href="https://www.facebook.com/julianopaulo.santos/" 
                            target="__blank"
                        >
                            <Icons.Facebook/>
                        </a>
                        <a 
                            href="https://www.instagram.com/julianop099/" 
                            target="__blank"
                        >
                            <Icons.Instagram/>
                        </a>
                    </div>
                </div>
                
            </div>    
        </div>        
    )
}
