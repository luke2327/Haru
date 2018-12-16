import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import FavoriteFootball from 'src/tabs/favorite/FavoriteFootball';

const initialLayout = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

export default class MyFeed extends React.Component{
  state = {
    index: 0,
    routes: [
      { key: 'all', title: '전체'},
      { key: 'dummy_1', title: '더 프리미어 리그' },
      { key: 'dummy_2', title: '분데스리가' }
    ]
  }

  _handleIndexChange = index => this.setState({index});
  _renderHeader = props => 
    <TabBar {...props}
      indicatorStyle={{backgroundColor: 'transparent'}}
      tabStyle={{backgroundColor: '#000'}}
      onTabPress={console.log(this.state.index)}
    />;
  _renderScene = SceneMap({
    all: FavoriteFootball,
    dummy_1: FavoriteFootball,
    dummy_2: FavoriteFootball
  });

  render(){
    return(
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        style={{flex: 15,}}
      />
    )
  }
}