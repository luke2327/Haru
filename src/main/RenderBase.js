import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import CustomHeader from 'src/common/header/Header';
import CustomFooter from 'src/common/footer/Footer';

export default class RenderBase extends React.Component{
  render(){
    return(
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content"></StatusBar>
        <CustomHeader></CustomHeader>
        <CustomFooter></CustomFooter>
      </View>
    )
  }
}