import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap, } from 'react-native-tab-view';
import FavoriteSong from "./tabs/dummy/FavoriteSong";
import FavoriteFootball from "./tabs/favorite/FavoriteFootball";
import ThirdTab from "./tabs/empty/ThirdTab";
import FourthTab from './tabs/empty/FourthTab';
import styles from '../style/ViewTabsStyle';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}
/**
 * class : ScoresFixtures
 * extends : Component
 * description : 하단의 탭 중 결과/일정 화면을 보여주는 컴포넌트
 */
export default class ScoresFixtures extends Component{
  state = {
    /** index : 화면 렌더 후 첫 시작 탭의 index 값
     * key : _renderScene에서 쓰이는 key 값
     * title : 탭의 제목 label에 쓰이는 값
     */
    index: 0,
    routes: [
      { key: 'favorite', title: '관심 정보' },
      { key: 'football', title: '축구' },
      { key: 'basketball', title: '농구' },
      { key: 'baseball', title: '야구' },
    ],
  };
  /**
   * 화면이 바뀔 때 state의 index에 현재 보고있는 탭으로 지정함
   * 0 : 관심 정보
   * 1 : 축구
   * 2 : 농구
   * 3 : 야구
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
    favorite: FavoriteSong,
    football: FavoriteFootball,
    basketball: ThirdTab,
    baseball: FourthTab,
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