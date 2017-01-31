import React, { Component } from 'react';
import {Text, Alert, View, StyleSheet, ListView, Image, TouchableHighlight} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

//telas
import Chat from './chat'

var default_contatos = [
  {
    id: 5,
    nome: 'Sergio Gomes',
    imagem: 'https://s3-sa-east-1.amazonaws.com/jogamais-api/sergioprofile.png'
  },
  {
    id: 2,
    nome: 'Maria das Dores',
    imagem: 'https://s3-sa-east-1.amazonaws.com/jogamais-api/mariaprofile.png'
  },
  {
    id: 1,
    nome: 'João da Silva',
    imagem: 'https://s3-sa-east-1.amazonaws.com/jogamais-api/joaoprofile.png'
  }
];

class Contatos extends Component {
  constructor(props){
    super(props);
    this.state = {
          dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  }

  componentDidMount = () => {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(default_contatos)});
  }

  _renderRow = (data) => {
    let {nome, imagem} = data;
    return (
      <View style={[styles.container]}>
        <TouchableHighlight onPress={() => Actions.chat({data: data, title: nome})} underlayColor={'transparent'}>
          <View style={[styles.listaContatos]}>
            <Image source={{uri: imagem}} style={[styles.fotoPerfil]} />
            <Text style={[styles.labelNome]}>{nome}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          enableEmptySections={true}
        />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderBottomWidth: 1.2,
    borderBottomColor: "gray",
  },
  listaContatos: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    margin: 10,
  },
  fotoPerfil: {
    height: 60,
    width: 60
  },
  labelNome: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500'
  }
});

export default Contatos
