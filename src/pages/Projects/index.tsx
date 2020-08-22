import React, {useEffect} from 'react';

import superRangoImg from '../../assets/imgs/fast_food.jpg';
import adminContabilImg from '../../assets/imgs/admincontabil.png';

import './style.css';
export default function Projects() {
    useEffect(()=>{document.title="Projetos"},[]);
    return (
        <div className="container">
          <div className="graduations">
            <div className="presentation">
              <span className="typewriter-effect anim-typewriter">Projetos Desenvolvidos</span>
              <span>Veja alguns de meus projetos aqui:</span>
            </div>
            <div className="content">
                <div className="project-container">     
                    <a 
                        href="http://superrango.rf.gd" 
                        role="button" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={superRangoImg}  alt="Super Rango" />
                    </a>
                    <hr/>
                    <div className="details">
                        <span>Super Rango</span>
                        <span>
                            Site criado para projetos da faculdade.
                            Simula uma aplicação de delivery de lanches,
                            como um ifood, por exemplo.
                        </span>
                        <a 
                            href="http://superrango.rf.gd" 
                            role="button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Conheça-o
                        </a>
                    </div>
                </div>
                <div className="project-container">     
                    <a 
                        href="https://admincontabil.herokuapp.com/" 
                        role="button" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <img src={adminContabilImg}  alt="Administração de gastos pessoais" />
                    </a>
                    <hr/>
                    <div className="details">
                        <span>Administrador de gastos pessoais</span>
                        <span>
                            Aplicação desenvolvida para qualquer pessoas poder fazer um controle
                            melhor dos seus próprios gastos.
                        </span>
                        <a 
                            href="https://admincontabil.herokuapp.com/" 
                            role="button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Conheça-o
                        </a>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
}
