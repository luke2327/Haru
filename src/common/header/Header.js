import React, { Component } from 'react';
import { Card, ListItem, Button, Icon, Header } from 'react-native-elements';
import styles from './HeaderStyle';

export default class CustomHeader extends React.Component{
  render(){
    return(
      <Header
        leftComponent={{icon: 'menu', color: styles.leftComponent['color']}}
        centerComponent={{text: 'Haru', style: styles.centerComponent}}
        rightComponent={{icon: 'home', color: styles.rightComponent['color']}}
        backgroundColor={styles.headerBackground['backgroundColor']}
        containerStyle={styles.containerStyle}
      />
    )
  }
}