import React, { Component } from 'react';
import { View, Text, WebView, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PageOne extends React.Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <WebView
          source={{uri: this.props.text}} >
        </WebView>
      </View>
        
    )
  }
}