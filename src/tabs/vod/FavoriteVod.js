import React, { Component } from 'react';
import { 
  View, 
  Text, ScrollView, 
  ImageBackground, 
  TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import VodList from 'src/assets/static/VodList';
import styles from './FavoriteVodStyle';
import getYoutubeImageLink from 'src/functions/getYoutubeImageLink';


export default class FavoriteVod extends React.Component{
  render(){
    const useFunction = new getYoutubeImageLink()
    VodList.vods.map((item, i) => {
      if(item.source == 'youtube.com'){
      item.image_link = useFunction._getYoutubeImageLink(item.link)
      }
    })
    return(
      <ScrollView style={styles.ScrollViewBackground}>
        <View>
          {
            VodList.vods.map((item, i) => (
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