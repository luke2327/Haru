import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ViewTabs from './ViewTabs';
import styles from './style/AppStyle';


const removeStatusBar = true;
export default class App extends React.Component {
  state = {
    other: {
      statusBarRel: {
        removeStatusBar: removeStatusBar,
      },
    },
    tabNavigator: {
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
      ],
      value: 0,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          hidden={this.state.other.statusBarRel.removeStatusBar}
        />
        <ViewTabs></ViewTabs>
      </View>
    );
  }
}