import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import I18n from 'react-native-i18n';
import FavoriteFootball from 'src/tabs/favorite/FavoriteFootball';

const initalLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export default class News extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'favorite', title: I18n.t('H0008') },
      { key: 'top', title: I18n.t('H0007') },
      { key: 'football', title: I18n.t('H0014') }
    ]
  };

  _handleIndexChange = index => this.setState({index});
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
    favorite: FavoriteFootball,
    top: FavoriteFootball,
    football: FavoriteFootball
  });

  render(){
    return(
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initalLayout={initalLayout}
      />
    )
  }
}