import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import I18n from 'react-native-i18n';
import News from 'src/news/News';
import MyFeed from 'src/my-feed/MyFeed';
import Vod from 'src/vod/Vod';
import styles from './FooterStyle';

export default class CustomFooter extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'myFeed', title: I18n.t('H0004'), icon: 'queue-music' },
      { key: 'news', title: I18n.t('H0006'), icon: 'album' },
      { key: 'vod', title: I18n.t('H0007'), icon: 'history' }
    ]
  };

  _handleIndexChange = index => this.setState({index});
  _returnIndex = () => {
    console.log('this is from Footer');
    console.log(this.state.index);
    return this.state.index;
  }
  _renderScene = BottomNavigation.SceneMap({
    myFeed: MyFeed,
    news: News,
    vod: Vod,
  });

  render(){
    this._returnIndex()
    return(
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle={styles.barStyle}
      />
    )
  }
}