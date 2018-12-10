import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap, } from 'react-native-tab-view';
import FavoriteSong from "./tabs/dummy/FavoriteSong";
import FavoriteFootball from "./tabs/favorite/FavoriteFootball";
import ThirdTab from "./tabs/empty/ThirdTab";
import styles from '../style/ViewTabsStyle';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

/**
 * class : MyFeed
 * extends : Component
 * description : Swips의 MyFeed를 구현하기 위해 만든 컴포넌트 현재 추가되지 않음.
 */
export default class MyFeed extends Component{
  state = {
    index: 0,
    routes: [
      { key: 'all', title: '전체' },
      { key: 'first', title: '더 프리미어 리그' },
      { key: 'second', title: 'UEFA챔피언스 리그' },
    ],
  };
  /**
   * 화면이 바뀔 때 state의 index에 현재 보고있는 탭으로 지정함
   * 현재 더미 데이터를 집어넣었다
   * 0 : 전체
   * 1 : 더 프리미어 리그
   * 2 : UEFA챔피언스 리그
   */
  _handleIndexChange = index => this.setState({index});
  /**
   * 탭 바의 스타일 및 효과를 지정함
   */
  _renderHeader = props => <TabBar {...props} 
            indicatorStyle={{backgroundColor: 'transparent'}}
            tabStyle={{backgroundColor: '#000'}}
            onTabPress={console.log(this.state.index)}
          />;

  _renderScene = SceneMap({
    all: FavoriteSong,
    first: FavoriteFootball,
    second: ThirdTab,
  });

  render(){
    return(
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        style={styles.tabLayout}
      />
    );
  }
}