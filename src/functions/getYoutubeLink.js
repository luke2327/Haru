import React, { Component } from 'react';

export default class getYoutubeLink extends React.Component{
  _getYoutubeLink = common_link => {
    link = `https://www.youtube.com/watch?v=${common_link}`;

    return link
  }
}