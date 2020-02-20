import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './componentes/home/home';
import Portifolio from './componentes/portifolio/portifolio';
import Contato from './componentes/contato/contato';
import Estudos from './componentes/estudos/estudos';
export default class Routes extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/portifolio' component={Portifolio} />
          <Route exact path='/estudos' component={Estudos} />
          <Route exact path='/contato' component={Contato} />
      </Switch>
    )
  }
}
