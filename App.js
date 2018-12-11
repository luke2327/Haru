/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import CustomHeader from './common/header/Header';
import CustomFooter from './common/footer/Footer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{backgroundColor: '#3078ff', width: 100000, height: 100000}}></View> */}
        <CustomHeader></CustomHeader>
        <CustomFooter style={styles.customFooterInit}></CustomFooter>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
// AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
