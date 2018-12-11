import React, { Component } from 'react';

/**
 * 자주 (여러 곳)에서 쓰이는 기능들을 모아놓은 파일.
 */
export default class getItem extends Component{
  /**
   * Youtube의 기본 이미지 링크를 리턴해주는 함수.
   * 파라메터로 Youtube의 링크를 넘기면 된다.
   */
  _getYoutubeImageLink = row_link => {
    vodId = row_link.split('v=')[1]
    imageLink = `https://img.youtube.com/vi/${vodId}/sddefault.jpg`;
  
    return imageLink
  }
  /**
   * 2가지의 JSON을 받아서 합치는 함수.
   * 지금은 뉴스와 VOD JSON을 합치는 데만 이용한다.
   */
  _getMergeTwoJson = (firstJSON, secondJSON) => {
    var vodsList = []
    var newsList = []
    var resultList = []

    console.log(Object.keys(firstJSON)[0])

    if(Object.keys(firstJSON)[0] == 'vods'){
      vodsList = firstJSON.vods
      newsList = secondJSON.news
    } else {
      vodsList = secondJSON.vods
      newsList = firstJSON.news
    }
    vodsList.map(node => {
      if(node.image_link == ''){
        node.image_link = this._getYoutubeImageLink(node.link)
      }
      resultList.push(node)
    })
    newsList.map(node => {
      resultList.push(node)
    })

    return resultList
  }
  /**
   * 주소를 파라메터로 받아 인앱 브라우저로 띄워주는 함수
   */
  // _handleOnInAppBrowser = async (link='') => (
  //   await WebBrowser.openBrowserAsync(link)
  //   )
}