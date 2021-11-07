import './Content.css';

import { Route, Switch } from 'react-router-dom';

import About from '../../views/examples/About'
import CadastroUsers from '../../views/Operacional/Cadastro';
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import React from 'react';

const Content = props => (

  <main className="Content">

    <Switch>
      <Route path="/CadastroUsers">
        <CadastroUsers />
      </Route>
      <Route path="/About">
        <About />
      </Route>

      <Route path="/Home">
        <Home />
      </Route>

      <Route path="/Param/:id">
        <Param />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </main>

)



export default Content