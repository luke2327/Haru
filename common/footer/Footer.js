import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import News from '../../tab/NewsTabs';
import Video from '../../tab/VideoTabs';
import ScoresFixtures from '../../tab/ScoresFixturesTabs';

export default class CustomFooter extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'scoresFixtures', title: 'Scores/Fixtures', icon: 'queue-music', color: '#000' },
      { key: 'news', title: 'News', icon: 'album' },
      { key: 'video', title: 'Video', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

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
        barStyle={{ paddingBottom: 0, backgroundColor: '#000', borderTopWidth: 1, borderTopColor: '#fff'}}
      />
    );
  }
}