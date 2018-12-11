import React, { Component } from 'react';
import { WebView, Alert, StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Linking, } from 'react-native';
import NewsList from '../../../static/NewsList';
import VodList from '../../../static/VideoList';
import styles from '../../style/contentsListStyle';
import getItem from '../../../common/function/getItem';
// import InAppBrowser from 'react-native-inappbrowser-reborn';

export default class FavoriteFootball extends Component{
  // async openLink(){
  //   try{
  //     await InAppBrowser.isAvailable()
  //     InAppBrowser.open('https://www.google.com', {
  //       // iOS Properties
  //       dismissButtonStyle: 'cancel',
  //       preferredBarTintColor: 'gray',
  //       preferredControlTintColor: 'white',
  //       readerMode: false,
  //       // Android Properties
  //       showTitle: true,
  //       toolbarColor: '#6200EE',
  //       secondaryToolbarColor: 'black',
  //       enableUrlBarHiding: true,
  //       enableDefaultShare: true,
  //       forceCloseOnRedirection: false,
  //       // Specify full animation resource identifier(package:anim/name)
  //       // or only resource name(in case of animation bundled with app).
  //       animations: {
  //         startEnter: 'slide_in_right',
  //         startExit: 'slide_out_left',
  //         endEnter: 'slide_in_right',
  //         endExit: 'slide_out_left',
  //       },
  //       // headers: {
  //       //   'my-custom-header': 'my custom header value'
  //       // },
  //     }).then((result) => {
  //       Alert.alert(JSON.stringify(result))
  //     })
  //   } catch (error) {
  //     Alert.alert(error.message)
  //   }
  // }
  render(){
    const newsList = NewsList
    const vodList = VodList
    const useFunction = new getItem()
    var favoriteFootball = []
    
    favoriteFootball = useFunction._getMergeTwoJson(newsList, vodList)
    return(
      // <WebView
      // style={{top: 40, width: 100000, height: 100000, backgroundColor: '#000'}}
      //   source={{uri:'www.google.com'}}
      //   />

      <ScrollView
        style={styles.ScrollViewBackground}
      >
        <View 
          style={styles.container}
        >
          {
            favoriteFootball.map((item, i) => (
              <TouchableOpacity
                // onPress={() => Linking.openURL(item.link)}
                // onPress={() => this.openLink()}
                // onPress={() => console.log('aaaaaaaa')}
                // onPress={() => useFunction._handleOnInAppBrowser(item.link)}
                key={i}
              >
                <ImageBackground
                  style={styles.imageBackgroundBasic}
                  imageStyle={styles.imageBackgroundStyle}
                  source={{uri: item.image_link}}
                >
                  <View style={styles.coverNews}>
                    <View style={styles.aboveNewsInfo}>
                      <View style={styles.newsSourceTextArea}>
                        <Text style={styles.newsSourceText}>{item.source}</Text>
                      </View>
                      <View>
                        <Text style={styles.newsDateText}>{item.create_tmp}</Text>
                      </View>
                    </View>
                    <View style={styles.belowNewsInfo}>
                      <Text style={styles.newsTitleText}>{item.title}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))
          }
        </View>
      </ScrollView>
    );        
  }
}