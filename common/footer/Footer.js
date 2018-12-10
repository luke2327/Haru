import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import News from '../../tab/NewsTabs';
import Video from '../../tab/VideoTabs';
import ScoresFixtures from '../../tab/ScoresFixturesTabs';
import styles from './FooterStyle';

/**
 * class : CustomFooter
 * extends : Component
 * description : 하단의 탭을 관리하는 컴포넌트
 * BottomNavigation 컴포넌트에서 탭마다 다른 화면을 보여주는 기능을 함.
 */
export default class CustomFooter extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'scoresFixtures', title: 'Scores/Fixtures', icon: 'queue-music' },
      { key: 'news', title: 'News', icon: 'album' },
      { key: 'video', title: 'Video', icon: 'history' },
    ],
  };
  /**
   * 화면이 바뀔 때 state의 index에 현재 보고있는 탭으로 지정함
   * 0 : 일정/결과
   * 1 : 뉴스
   * 2 : VOD
   */
  _handleIndexChange = index => this.setState({ index });
  /**
   * 탭을 누를 때 효과를 테스트 하기위해 만든 함수
   */
  _returnIndex = () =>{
    console.log('this is from Footer');
    console.log(this.state.index);
    return this.state.index;
  }
  _renderScene = BottomNavigation.SceneMap({
    news: News,
    video: Video,
    scoresFixtures: ScoresFixtures,
  });

  render() {
    this._returnIndex()
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle={styles.barStyle}
      />
    );
  }
}