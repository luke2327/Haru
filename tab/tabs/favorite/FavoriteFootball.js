import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Linking, } from 'react-native';
import { LinearGradient, WebBrowser } from 'expo';
import NewsList from '../../../static/NewsList';
import VodList from '../../../static/VideoList';
import styles from '../../style/contentsListStyle';
import getItem from '../../../common/function/getItem';
import InAppBrowser from 'react-native-inappbrowser-reborn';

export default class FavoriteFootball extends Component{
  render(){
    const newsList = NewsList
    const vodList = VodList
    const useFunction = new getItem()
    var favoriteFootball = []
    
    favoriteFootball = useFunction._getMergeTwoJson(newsList, vodList)
    return(
      <ScrollView
        style={styles.ScrollViewBackground}
      >
        <LinearGradient 
          colors={["#000000", "#000000"]} 
          style={styles.container}
        >
          {
            favoriteFootball.map((item, i) => (
              <TouchableOpacity
                onPress={() => useFunction._handleOnInAppBrowser(item.link)}
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
        </LinearGradient>
      </ScrollView>
    );        
  }
}