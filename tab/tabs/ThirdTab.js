import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class ThirdTab extends Component{
    render(){
      return(
        <LinearGradient 
        colors={["#acb6e5", "#86fde8"]} 
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