import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NewsList from 'src/assets/static/NewsList';
import CustomHeader from 'src/common/header/Header';
import FavoriteFootball from 'src/tabs/favorite/FavoriteFootball';
import MyFeed from 'src/my-feed/MyFeed';
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