import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';

/**
 * class : SideBarContent
 * extends : Component
 * description : SideMenu컴포넌트의 Content정보를 위한 컴포넌트
 */
export default class SideBarContent extends Component{
  render()
  {
    return(
      <View style={{backgroundColor:'#000',}}>
        <Text style={styles.container}>Order History</Text>
        <Text style={styles.container}>Account</Text>
        <Text style={styles.container}>Basket</Text>
        <Text style={styles.container}>About us</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    color: '#fff',
  }
});