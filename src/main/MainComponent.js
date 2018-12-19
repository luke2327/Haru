import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RenderBase from './RenderBase';
import RenderWebView from './RenderWebView';
import RenderYoutube from './RenderYoutube';
import SideMenu from 'src/common/drawer/SideMenu';
import I18n from 'react-native-i18n';

export default class MainComponent extends React.Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="RenderBase" component={RenderBase} initial={true} hideNavBar={true} />
          <Scene key="RenderWebView" component={RenderWebView} title="WebView" />
          <Scene
            key="DrawerMenu"
            drawer
            drawerWidth={250}
            drawerPosition='left'
            component={SideMenu}
            title="Setting"
          >
            <Scene
              key="RenderTest1"
              component={RenderWebView}
              title="RenderTest1"
            />
            <Scene
              key="RenderTest2"
              component={RenderWebView}
              title="RenderTest2"
            />
            <Scene
              key="RenderTest3"
              component={RenderWebView}
              title="RenderTest3"
            />
            <Scene key="RenderYoutube" component={RenderYoutube} title="Youtube" />
          </Scene>
        </Scene>
      </Router>
    )
  }
}