import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class RenderWebView extends React.Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <WebView source={{uri: this.props.text}} />
      </View>
        
    )
  }
}