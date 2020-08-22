import React, { useEffect } from 'react'
import './style.css';
export default function Graduations() {
    useEffect(()=>{document.title="Formações"},[]);
    return (
        <div className="container">
            <div className="graduations">
                <div className="presentation typewriter-effect anim-typewriter">
                    <span>Formações Acadêmicas</span>
                </div>
                <div className="content">
                    <span className="course-name">Análise e Desenvolvimento de Sistemas</span>
                    <div className="course-details">
                        Formado no curso de tecnólogo na instituição FAEX-Extrema, com início em 02/2018, e finalizando o 5° e 
                        último semestre em Junho de 2020. Curso totalmente focado na área de desenvolvimento de aplicativos e 
                        sites, principalmente com as tecnologias da Web também dando importância para metodologias de 
                        desenovlvimento usadas no mercado.                
                    </div>
                    <span className="course-name">Técnico em Eletrônica</span>
                    <div className="course-details">
                        Curso técnico que teve seu início em 02/2016 e finalização em 12/2017, focado tanto 
                        na teoria, quanto prática em montagem e testes de circuitos eletrônicos, também 
                        dando noções básicas de informática e programação em baixo nível.
                    </div>
                </div>
            </div>          
      </div>
    )
}
