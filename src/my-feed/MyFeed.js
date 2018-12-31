import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import I18n from 'react-native-i18n';
import FavoriteFootball from 'src/tabs/favorite/FavoriteFootball';
import YoutubePlaylist from 'src/tabs/dummy/YoutubePlaylist';

const initialLayout = {
  width: Dimensions.get('window').width,
  height: 0
}

export default class MyFeed extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'all', title: I18n.t('H0003') },
      { key: 'dummy_1', title: I18n.t('D0001') },
      { key: 'dummy_2', title: I18n.t('D0002') },
      { key: 'dummy_3', title: I18n.t('D0003') }
    ]
  }

  _handleIndexChange = index => this.setState({index});
  _renderHeader = props =>
    <TabBar {...props}
      indicatorStyle={{backgroundColor: 'transparent'}}
      tabStyle={{backgroundColor: '#000', margin: 0, alignSelf: 'flex-start', display: 'flex'}}
      labelStyle={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'capitalize'}}
      style={{backgroundColor: '#000'}}
      scrollEnabled={true}
      pressOpacity = {0.8}
    />
  ;
  _renderScene = SceneMap({
    all: YoutubePlaylist,
    dummy_1: FavoriteFootball,
    dummy_2: FavoriteFootball,
    dummy_3: FavoriteFootball,
  });

  render(){
    return(
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderHeader}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
    )
  }
}