import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap, } from 'react-native-tab-view';
import FavoriteFootball from "./tabs/favorite/FavoriteFootball";
import ThirdTab from "./tabs/empty/ThirdTab";
import FourthTab from "./tabs/empty/FourthTab";
import FifthTab from "./tabs/empty/FifthTab";
import viewFavoriteVideo from "./tabs/vod/FavoriteVideo"
import styles from '../style/ViewTabsStyle';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}
/**
 * class : Video
 * extends : Component
 * description : 하단의 탭 중 비디오 화면을 보여주는 컴포넌트
 */
export default class Video extends Component{
  state = {
    index: 0,
    routes: [
      { key: 'favorite', title: '관심 VOD' },
      { key: 'top', title: '주요 VOD' },
      { key: 'football', title: '축구' },
      { key: 'basketball', title: '농구' },
      { key: 'baseball', title: '야구' },
    ],
  };
  /**
   * 화면이 바뀔 때 state의 index에 현재 보고있는 탭으로 지정함
   * 0 : 관심 VOD
   * 1 : 주요 VOD
   * 2 : 축구
   * 3 : 농구
   * 4 : 야구
   */
  _handleIndexChange = index => this.setState({index});
  /**
   * 탭 바의 스타일 및 효과를 지정함 (ex: 눌렀을 때 특정 효과)
   */
  _renderHeader = props => <TabBar {...props} 
            indicatorStyle={{backgroundColor: 'transparent'}}
            tabStyle={{backgroundColor: '#000'}}
            onTabPress={console.log(this.state.index)}
  />;
  _renderScene = SceneMap({
    favorite: viewFavoriteVideo,
    top: FavoriteFootball,
    football: ThirdTab,
    basketball: FourthTab,
    baseball: FifthTab,
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