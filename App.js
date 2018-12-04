import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Header, } from 'react-native-elements';
import News from './tab/NewsTabs';
import styles from './style/AppStyle';
import SideMenu from './common/side/SideMenu';
import { DrawerNavigator } from 'react-navigation';
import CustomFooter from './common/footer/Footer';


const removeStatusBar = true;

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
        <Header 
          leftComponent={{icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Haru', style: styles.headerCenterComponent }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          backgroundColor='#000'
          containerStyle={{
            flex: 1,
            height: 400,
          }}
          leftContainerStyle={{ backgroundColor: '#fff '}}
        >
        </Header>
        {/* <NewsTabs style={{zIndex: 1, position: 'absolute'}}></NewsTabs> */}
        {/* <View style={styles.footer}>
          <Text style={styles.footerPaintMark}>Haru</Text>
        </View> */}
        <CustomFooter style={{zIndex: 100, position: 'absolute'}}></CustomFooter>
      </View>
    );
  }
}