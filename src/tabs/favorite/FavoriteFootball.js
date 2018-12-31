import React, { Component } from 'react';
import {
  ScrollView,
  Text, 
  View, 
  ImageBackground,
  TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import NewsList from 'src/assets/static/NewsList';
import styles from './FavoriteFootballStyle';


export default class FavoriteFootball extends Component{
  render(){
    return(
      <ScrollView style={styles.ScrollViewBackground}>
        <View>
          {
            NewsList.news.map((item, i) => (
              <TouchableOpacity 
                key={i} 
                onPress={() => Actions.RenderWebView({text: item.link})} 
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
    )
  }
}