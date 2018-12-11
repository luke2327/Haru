import React, { Component } from 'react';
import { Text, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity, Linking, } from 'react-native';
import VideoList from '../../../static/VideoList.json';
import styles from '../../style/contentsListStyle';

/**
 * class : viewFavoriteVideo
 * extends : Component
 * description : 탭 화면 중 관심 VOD를 보여주는 컴포넌트
 */
export default class viewFavoriteVideo extends Component{
  render(){
    const videoList = VideoList.vods
    return(
      <ScrollView
        style={{backgroundColor: '#000'}}  
      >
        <View
          style={styles.container}
        >
          {
            videoList.map((item, i) => (
              
              <TouchableOpacity
                // onPress={() => Linking.openURL(item.link)}
                key={i}
              >
                <ImageBackground
                  style={[styles.imageBackgroundBasic,{
                    width: Dimensions.get('window').width-20,
                  }]}
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