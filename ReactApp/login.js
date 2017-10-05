import React, { Component } from 'react';

import {
  Text, 
  Alert, 
  View, 
  Button, 
  StyleSheet, 
  TextInput, 
  Image, 
  TouchableHighlight,
  Platform
} from 'react-native';

import {
  Actions, 
  Scene, 
  Router
} from 'react-native-router-flux';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: '',
      senha: ''
    }
  }

  componentDidMount = () => {
    console.log("console 1")
  }

  componentWillMount = () => {
    console.log("console 2")
  }

  _login = () => {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.login,
            password: this.state.senha
        })
    }).then((responseData) => {
        if (responseData.status == 200) {
          (responseData.json()).then((response) => {
            Actions.contatos();
          });
        }else {
          Alert.alert('Acesso inválido', responseData.status.toString());
        }
    }).catch((error) => {
        console.log(error);
    })
  }

  render() {
      return (
        <View style={[styles.container]}>
          <View style={{flex: 0.8}}>
            <Image source={require('./imagens/logo.png')} style={styles.logo} resizeMode={'contain'}/>
          </View>
          <View style={{flex: 0.5}}>
            <TextInput style={[styles.input]}
              placeholder="login"
              onChangeText={(text) => this.setState({login: text})}
            />
            <TextInput style={[styles.input]}
              placeholder="senha"
              onChangeText={(text) => this.setState({senha: text})}
              secureTextEntry
            />
          </View>
          <View style={{flex: 0.8}}>
            <Button color={'#ffcc00'} title={'Entrar'} onPress={() => this._login()} />
          </View>
          <View style={{flex: 0.2}}>
            <TouchableHighlight onPress={() => Actions.cadastro()} underlayColor={'transparent'}>
              <Text style={{color:'#ffcc00'}}>cadastre-se</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  logo: {
    width: 260,
    height: 260,
    backgroundColor: 'transparent',
    marginBottom: 10,
  }
});

export default Login
