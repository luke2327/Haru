import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from 'src/assets/i18n/i18n';

export default class SideMenu extends React.Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View>
          <Button onPress={() => {
            Actions.RenderSetLanguage()
          }}
          title={I18n.t('Z0003')}
          color='#fff'
          />
        </View>
      </View>
    )
  }
}
