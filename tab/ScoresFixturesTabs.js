import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap, } from 'react-native-tab-view';
import FirstTab from "./tabs/FirstTab";
import SecondTab from "./tabs/SecondTab";
import ThirdTab from "./tabs/ThirdTab";
import FourthTab from './tabs/FourthTab';
import styles from '../style/ViewTabsStyle';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

export default class ScoresFixtures extends Component{
  state = {
    index: 0,
    routes: [
      { key: 'favorite', title: '관심 정보', icon: 'ios-game-controller-b' },
      { key: 'football', title: '축구' },
      { key: 'basketball', title: '농구' },
      { key: 'baseball', title: '야구' },
    ],
  };
  
  _renderLabel = ({ routes }) => (
    <Text>{routes.title}</Text>
  );

  _handleIndexChange = index => this.setState({index});

  _renderHeader = props => <TabBar {...props} 
            indicatorStyle={{backgroundColor: 'transparent'}}
            tabStyle={{backgroundColor: '#000'}}
            onTabPress={console.log(this.state.index)}
  />;

  _renderScene = SceneMap({
    favorite: FirstTab,
    football: SecondTab,
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
        renderLabel={this._renderLabel}
      />
    );
  }
}