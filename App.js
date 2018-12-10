import React from 'react';
import { View, StatusBar } from 'react-native';
import CustomHeader from './common/header/Header';
import styles from './style/AppStyle';
import SideMenu from './common/side/SideMenu';
import { DrawerNavigator } from 'react-navigation';
import CustomFooter from './common/footer/Footer';

const removeStatusBar = true;
/**
  * class : App
  * extends : Component
  * description : 모든 컴포넌트가 시작되는 곳
  * 커스텀 헤더 및 푸터 컴포넌트가 있다.
**/
export default class App extends React.Component {
  state = {
    other: {
      statusBarRel: {
        removeStatusBar: removeStatusBar,
      },
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          // hidden={this.state.other.statusBarRel.removeStatusBar}
          barStyle="light-content"
        />
        <CustomHeader></CustomHeader>
        <CustomFooter style={styles.customFooterInit}></CustomFooter>
      </View>
    );
  }
}
