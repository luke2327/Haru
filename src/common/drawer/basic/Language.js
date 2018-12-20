import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import I18n from 'src/assets/i18n/i18n';

export default class Language extends React.Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <View>
          {/* <Text style={{color: '#fff'}}>{I18n.t('H0001')}</Text> */}
          <Button onPress={() => {
              I18n.locale = 'en';
              I18n.currentLocale();
              Actions.RenderBase();
              Actions.refresh();
            }} 
            title="change en"
            color='#fff'
          >
          </Button>
          <Button onPress={() => {
              I18n.locale = 'ko';
              I18n.currentLocale();
              Actions.RenderBase();
              Actions.refresh();
            }} 
            title="change ko" 
            color='#fff'
          >
          </Button>
          {/* <Button onPress={() => {
              if(I18n.locale == 'en'){
                I18n.locale = 'ko'
              } else {
                I18n.locale = 'en'
              }
              I18n.currentLocale();
              Actions.refresh()
            }}
            title="Toggle"
            color='#fff'
          /> */}
        </View>
      </View>
    )
  }
}
