import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from 'react-native-drawer';
import SideMenuContent from './SideMenuContent';

/**
 * class : SideMenu
 * extends : Component
 * description : 원래 헤더 왼쪽 부분 버튼컴포넌트에 Drawer메뉴를 추가하려 했으나 현재 보류 중 입니다.
 */
export default class SideMenu extends Component{
  constructor(){
    super();
    this.closeControlPanel = this.closeControlPanel.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
  };
  /**
   * Drawer컴포넌트의 닫는 동작을 구현
   */
  closeControlPanel = () => {
    this._drawer.close()
  };
  /**
   * Drawer컴포넌트의 여는 동작을 구현
   */
  openControlPanel = () => {
    this._drawer.open()
  };

  render(){
    const drawerStyles = {
      drawer: { shadowColor: '#fff', shadowOpacity: 0.8, shadowRadius: 3 },
      main: { paddingLeft: 3 },
    }

    return(
      <Drawer
        type="static"
        content={<SideMenuContent />}
        ref = {(ref) => this._drawer = ref}
        openDrawerOffset={100}
        styles={drawerStyles}
        tweenHandler={Drawer.tweenPresets.parallax}
      >
          <Text onPress={this.openControlPanel}
                style={{color:'#fff'}}>
            Drawer
          </Text>
      </Drawer>
    );   
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
  }
});