import React, { Component } from 'react';
import {Text, Alert, View, Button, StyleSheet, TextInput, Platform} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import Dimensions from 'Dimensions';

//tab view
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

//telas
import Contatos from './contatos'
import Mensagens from './mensagens'


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      routes: [
       { key: '1', title: 'contatos' },
       { key: '2', title: 'mensagens' },
      ]
    };
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar
              style={styles.tabbar}
              tabStyle={styles.tabbarTab}
              indicatorStyle={styles.tabbarIndicator}
              {...props} />;
  };


  _renderScene = ({ route }) => {
     switch (route.key) {
     case '1':
       return <Contatos />;
     case '2':
       return <Mensagens />;
     default:
       return null;
   }
 };

  render() {
      return (
          <TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onRequestChangeTab={this._handleChangeTab}
          />
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 64 : 50,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabbar: {
    backgroundColor: "#ffcc00",
  },
  tabbarTab: {
    backgroundColor: "transparent"
  },
  tabbarIndicator: {
    backgroundColor: "gray",
  },
});

export default Home
