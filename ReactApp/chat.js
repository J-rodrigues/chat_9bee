import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'

//componentes
import Firebase from './componentes/firebase'
import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {

 constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: this.props.data,
      perfil: {
        _id: 3,
        nome: 'Vitor de Souza',
        imagem: 'https://s3-sa-east-1.amazonaws.com/jogamais-api/vitorprofile.png'
      }
    };
    this.onSend = this.onSend.bind(this);
    this.itemsRef = Firebase.initialize.database().ref('chat-' + this.props.data.id);
  }

  componentDidMount = () => {
    this.itemsRef.on('value', (snap) => {
      var items = []
      snap.forEach((child) => {
      let mensagem = child.val();
          items.unshift({
           _id: mensagem._id,
           text: mensagem.text,
           createdAt: new Date(mensagem.createdAt),
           user: {
             _id: mensagem.user.user_id,
             name: mensagem.user.name,
             avatar: mensagem.user.imagem
           }});
      });
      this.setState({messages: items});
    });
  }

  onSend = (messages = []) => {
    this.itemsRef.push({
        _id: messages[0]._id,
        text: messages[0].text,
        createdAt: messages[0].createdAt.toString(),
        sendUser: this.state.user,
        user:{
          user_id: messages[0].user._id,
          name: messages[0].user.nome,
          imagem: messages[0].user.imagem
        }
    });
  }

  render = () => {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={this.state.perfil}
      />
    );
  }
}


export default Chat
