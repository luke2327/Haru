import React, { Component } from 'react';

export default class getYoutubeImageLink extends React.Component{
  _getYoutubeImageLink = common_link => {
    vodId = common_link.split('v=')[1]
    imageLink = `https://img.youtube.com/vi/${vodId}/sddefault.jpg`;

    return imageLink
  }
}