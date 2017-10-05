import React, { Component } from 'react';

import {
  Text, 
  Alert, 
  View, 
  Button, 
  StyleSheet, 
  TextInput, 
  Image, 
  Platform
} from 'react-native';

import {
  Actions,
  Scene, 
  Router
} from 'react-native-router-flux';


class Cadastro extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      login: '',
      email: '',
      password: ''
    }
  }

  cadastrar = () => {
    fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: this.state.nome,
            login: this.state.login,
            email: this.state.email,
            password: this.state.password,
        })}).then((responseData) => {
        if (responseData.status == 201) {
          (responseData.json()).then((response) => {           
            Actions.contatos();
          });
        }else {Alert.alert('Dados inválidos', responseData.status.toString())}
    }).catch((error) => {
        console.log(error);
    }).done();
  }

  render() {
      return (
        <View style={[styles.container]}>
          <View style={[styles.form]}>
            <Text style={[styles.label]}>Informe os dados abaixo</Text>
            <TextInput style={[styles.input]}
              placeholder="Nome completo"
              onChangeText={(text) => this.setState({nome: text})}
            />
            <TextInput style={[styles.input]}
              placeholder="login"
              onChangeText={(text) => this.setState({login: text})}
            />
            <TextInput style={[styles.input]}
              placeholder="email"
              onChangeText={(text) => this.setState({email: text})}
            />
            <TextInput style={[styles.input]}
              placeholder="senha"
              onChangeText={(text) => this.setState({password: text})}
              secureTextEntry
            />
            <Button color={'#ffcc00'} title={'cadastrar'} onPress={() => this.cadastrar()} />
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
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderColor: 'gray'
  },
  form: {
    margin: 20
  },
  label: {
    color:'#ffcc00',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center'
  }
});

export default Cadastro
