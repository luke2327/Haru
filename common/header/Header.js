import React, {Component} from 'react';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';

export default class CustomHeader extends React.Component {
  render() {
    return (
      <Header
        leftComponent={{icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Haru', style: {color: '#fff'} }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor='#000'
        containerStyle={{
          flex: 1,
          height: 400,
        }}
        leftContainerStyle={{ backgroundColor: '#fff '}}
      />
    )
  }
}