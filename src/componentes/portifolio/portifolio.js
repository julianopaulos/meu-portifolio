import React, { Component } from 'react'
import img1 from './fast_food.jpg';

export default class Portifolio extends Component {
  render() {
    return (
      <div className="content container">
      
          <h1>Realizações</h1>
          
          <p>
            Veja alguns de meus projetos aqui:
          </p>
          <br/>
          <div className="row">
            <div className="col-md-4">
                <div className="thumbnail">
                    <a href={img1}><img className="img-fluid" src={img1} alt="Super Rango" /></a>
                    <div className="caption">
                        <h4>Super Rango</h4>
                        <h4>Meu primeiro site criado para projetos da faculdade</h4>
                        <h4><a href="http://superrango.rf.gd" role="button" target="_blank" rel="noopener noreferrer">
                            <input type="submit" value="Conheça-o"/>
                        </a></h4>
                    </div>
                </div>
              </div>

          </div>
            
      </div>
    )
  }
}
