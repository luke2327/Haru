import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

export default class SecondTab extends Component{
    render(){
        return(
            <LinearGradient 
                colors={["#9796f0", "#fbc7d4"]} 
                style={styles.container}
            />
        );        
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});