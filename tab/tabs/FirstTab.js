import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import SideMenu from '../../common/side/SideMenu'

export default class FiestTab extends Component{
    render(){
        return(
            <LinearGradient 
                colors={["#00C6FB", "#005BEA"]} 
                style={styles.container}
            >
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                1. それがあなたの幸せとしても
                </Text>
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                2. トリセツ
                </Text>
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                3. キセキ
                </Text>
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                4. ホシアイ
                </Text>
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                5. 好きな人がいること
                </Text>
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                6. 高嶺の花子さん
                </Text>
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                7. アスノヨゾラ哨戒班
                </Text>
                <Text style={{fontSize: 25, paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20, color: '#fff'}}>
                8. スパークル
                </Text>
                {/* <SideMenu></SideMenu> */}
            </LinearGradient>
        );        
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 10,
    }
});