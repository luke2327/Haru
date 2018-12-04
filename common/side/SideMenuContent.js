import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';


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