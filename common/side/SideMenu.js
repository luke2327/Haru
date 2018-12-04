import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from 'react-native-drawer';
import SideMenuContent from './SideMenuContent';

export default class SideMenu extends Component{
  constructor(){
    super();
    this.closeControlPanel = this.closeControlPanel.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
  };
  closeControlPanel = () => {
    this._drawer.close()
  };
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