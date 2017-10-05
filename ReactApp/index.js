import React, { Component } from 'react';

import {
  Actions, 
  Scene, 
  Router
} from 'react-native-router-flux';

//telas
import Login from './login'
import Cadastro from './cadastro'
import Contatos from './contatos'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} initial={true} hideNavBar={true} title="Login"/>
    <Scene key="cadastro" component={Cadastro} hideNavBar={false} title={'Cadastro'} />
    <Scene key="contatos" component={Contatos} hideNavBar={false} title={'Contatos'} />
  </Scene>
);

class Index extends Component {
  render() {
      return <Router scenes={scenes}/>
  }
}

export default Index
