import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import styles from './HeaderStyle';
import TestButton from './TestButton';

export default class CustomHeader extends React.Component{
  render(){
    return(
      <Header
        leftComponent={{icon: 'menu', color: styles.leftComponent['color']}}
        centerComponent={{text: 'Haru', style: styles.centerComponent}}
        rightComponent={<TestButton></TestButton>}
        // rightComponent={{icon: 'home', color: styles.rightComponent['color']}}
        backgroundColor={styles.headerBackground['backgroundColor']}
        containerStyle={styles.containerStyle}
      />
    )
  }
}