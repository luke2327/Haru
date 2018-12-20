import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import I18n from 'react-native-i18n';
import FavoriteVod from 'src/tabs/vod/FavoriteVod';

const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export default class Video extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'favorite', title: I18n.t('H0010') },
      { key: 'dummy_1', title: I18n.t('H0011') },
      { key: 'dummy_2', title: I18n.t('H0014') },
      { key: 'dummy_3', title: I18n.t('H0015') },
      { key: 'dummy_4', title: I18n.t('H0016') },
    ]
  };

  _handleIndexChange = index => this.setState({index})

  _renderHeader = props =>
    <TabBar {...props}
      indicatorStyle={{backgroundColor: 'transparent'}}
      tabStyle={{backgroundColor: '#000', margin: 0}}
      labelStyle={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'capitalize'}}
      style={{backgroundColor: '#000'}}
      scrollEnabled={true}
      pressOpacity = {0.8}
    />;

  _renderScene = SceneMap({
    favorite: FavoriteVod,
    dummy_1: FavoriteVod,
    dummy_2: FavoriteVod,
    dummy_3: FavoriteVod,
    dummy_4: FavoriteVod,
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