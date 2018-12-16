import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import FavoriteVod from 'src/tabs/vod/FavoriteVod';

const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export default class Video extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'favorite', title: '관심 VOD' },
      { key: 'dummy_1', title: '주요 VOD' },
      { key: 'dummy_2', title: '축구' },
      { key: 'dummy_3', title: '농구' },
      { key: 'dummy_4', title: '야구' },
    ]
  };

  _handleIndexChange = index => this.setState({index})
  _renderHeader = props =>
    <TabBar {...props}
      indicatorStyle={{background: 'transparent'}}
      tabStyle={{backgroundColor: '#000'}}
      onTabPress={console.log(this.state.index)}
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