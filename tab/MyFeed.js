import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap, } from 'react-native-tab-view';
import FirstTab from "./tabs/FirstTab";
import SecondTab from "./tabs/SecondTab";
import ThirdTab from "./tabs/ThirdTab";
import styles from '../style/ViewTabsStyle';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

export default class News extends Component{
  state = {
    index: 1,
    routes: [
      { key: 'all', title: '전체' },
      { key: 'first', title: '더 프리미어 리그' },
      { key: 'second', title: 'UEFA챔피언스 리그' },
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
    all: FirstTab,
    first: SecondTab,
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
        renderLabel={this._renderLabel}
      />
    );
  }
}