import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from 'react-native-i18n';

export default class TestButton extends React.Component{
  _showDrawer = () => {
    return() => {
      Actions.refresh({key: 'DrawerMenu', open: true});
    }
  }
  render(){
    return(
      <View style={{flex: 1, marginTop: 20}}>
        <Text onPress={() => Actions.DrawerMenu()} style={{color: '#fff'}}>{I18n.t('H0002')}</Text>
      </View>
    )
  }
}