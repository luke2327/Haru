import React, { Component } from 'react';
import { 
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import getYoutubeLink from 'src/functions/getYoutubeLink';
import styles from './YoutubePlaylistStyle';

const channelId = 'UC7rqz5As19qYWl2Rc4z-iig';
const key = 'AIzaSyATb4ptZYFqwg1xarYjg8AR5pPKwU0I-4Y';
const part = 'snippet';
const maxResults = 50;
const useFunction = new getYoutubeLink()

export default class YoutubePlaylist extends React.Component{
  constructor(props){
    super(props);
    this.state= { isLoading: true }
  }

  componentDidMount(){
    return fetch(`https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&key=${key}&part=${part}&maxResults=${maxResults}`, {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson.items,
        })
      })
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#000'}}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <ActivityIndicator color='#fff' size='large' />
          </View>
        </View>
      )
    } else {
      return(
        <ScrollView style={styles.ScrollViewBackground}>
          <View style={{flex: 1}}>
            {
              this.state.dataSource.map((item, i) => (
                <TouchableOpacity 
                key={i} 
                onPress={() => Actions.RenderYoutube({text: useFunction._getYoutubeLink(item.id.videoId)})}
                >
                  <ImageBackground
                    style={styles.imageBackgroundBasic}
                    imageStyle={styles.imageBackgroundStyle}
                    source={{uri: item.snippet.thumbnails.high.url}}
                  >
                    <View style={styles.coverNews}>
                      <View style={styles.aboveNewsInfo}>
                        <View style={styles.newsSourceTextArea}>
                          <Text style={styles.newsSourceText}>youtube.com</Text>
                        </View>
                        <View>
                          <Text style={styles.newsDateText}>
                            {item.snippet.publishedAt.replace('.000Z', ['']).replace('T', [' '])}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.belowNewsInfo}>
                        <Text style={styles.newsTitleText}>{item.snippet.title}</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              ))
            }
          </View>
        </ScrollView>
        // <View style={{flex: 1}}>
        //   <YouTube
        //     videoId="t557dPspLxo"
        //     play={true}
        //     fullscreen={true}
        //     loop={true}

        //   />
        // </View>
      )
    }
  }
}