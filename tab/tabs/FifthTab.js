import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class FifthTab extends Component{
  render(){
    return(
      <LinearGradient 
        colors={["#ffffff", "#89fffd"]} 
        style={styles.container}
      >
        <Text>This Works</Text>
      </LinearGradient>
    );        
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});