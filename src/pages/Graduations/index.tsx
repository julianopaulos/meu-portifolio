import React, { useEffect } from 'react'
import './style.css';
export default function Graduations() {
    useEffect(()=>{document.title="Formações"},[]);
    return (
        <div className="">
          
        <h2>Formações Acadêmicas</h2><br/><br/>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3>Análise e Desenvolvimento de Sistemas</h3>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-justify">
            <p>
              Atualmente cursando o tecnólogo na instituição FAEX-Extrema, no 5° período letivo e, com previsão
              de formatura para a metade do ano de 2020. Curso totalmente focado na área de desenovlvimento de 
              aplicativos e sites, também dando importância para metodologias de desenovlvimento usadas no mercado.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div><br/>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3>Técnico em Eletrônica</h3>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-justify">
            <p>
              Curso técnico que teve seu início em 02/2016 e finalização em 12/2017, focado tanto na teoria,
              quanto prática em montagem e testes de circuitos eletrônicos, também dando noções básicas de 
              informática e programação em baixo nível.
            </p>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    )
}
