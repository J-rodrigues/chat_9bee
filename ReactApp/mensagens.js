import React, { Component } from 'react';
import {Text, Alert, View, StyleSheet, ListView, Image, TouchableHighlight} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

//componentes
import Firebase from './componentes/firebase'

//telas
import Chat from './chat'

class Mensagens extends Component {
  constructor(props){
    super(props);
    this.state = {
          dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
    this.itemsRef = Firebase.initialize.database().ref();
  }

  componentDidMount = () => {
    this.itemsRef.on('value', (snap) => {
      var items = []
      snap.forEach((child) => {
        let contato = child.val();
        for (first in contato) break;
        items.unshift({
          id: contato[first].sendUser.id,
          nome: contato[first].sendUser.nome,
          imagem: contato[first].sendUser.imagem
        });
      });
      this.setState({dataSource: this.state.dataSource.cloneWithRows(items)});
    });
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

export default Mensagens
