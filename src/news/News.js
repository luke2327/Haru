import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import FavoriteFootball from 'src/tabs/favorite/FavoriteFootball';

const initalLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export default class News extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'favorite', title: '관심 뉴스' },
      { key: 'top', title: '주요 뉴스'},
      { key: 'football', title: '축구'}
    ]
  };

  _handleIndexChange = index => this.setState({index});
  _renderHeader = props =>
    <TabBar {...props}
      indicatorStyle={{backgroundColor: 'transparent'}}
      tabStyle={{backgroundColor: '#000'}}
      onTabPress={console.log(this.state.index)}
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