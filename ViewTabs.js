import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";
import ThirdTab from "./ThirdTab";
import styles from './style/ViewTabsStyle';

export default class ViewTabs extends Component{
  state = {
      tabNavigator: {
        index: 0,
        routes: [
          { key: 'first', title: 'First' },
          { key: 'second', title: 'Second' },
          { key: 'third', title: 'Third' },
        ],
        value: 0,
      },
  };

  render(){
    return(
      <TabView
        navigationState={this.state.tabNavigator}
        tabBarPosition = 'top'
        renderScene={SceneMap({
          first: FirstTab,
          second: SecondTab,
          third: ThirdTab,
        })}
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#e0e0e8'}}
            tabStyle={{backgroundColor: '#000'}}
          />
        }
        onIndexChange={index => this.setState({index})}
        initialLayout={{ 
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height 
                      }}
        style={styles.tabLayout}
      />
    )
  }
}