import { Scene, Router } from 'react-native-router-flux';
import RenderBase from './RenderBase';
import RenderWebView from './RenderWebView';
import React, { Component } from 'react';

export default class MainComponent extends React.Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="RenderBase" component={RenderBase} initial={true} hideNavBar={true} />
          <Scene key="RenderWebView" component={RenderWebView} title="WebView" />
        </Scene>
      </Router>
    )
  }
}