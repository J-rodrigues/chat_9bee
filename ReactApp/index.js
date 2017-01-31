import React, { Component } from 'react';
import {Text, Alert, View, Button} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

//telas
import Login from './login'
import Home from './home'
import Chat from './chat'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} initial={true} hideNavBar={true} title="Login"/>
    <Scene key="home" component={Home} hideNavBar={false} title="9bee"/>
    <Scene key="chat" component={Chat} hideNavBar={false} />
  </Scene>
);

class Index extends Component {
  render() {
      return <Router scenes={scenes}/>
  }
}

export default Index
