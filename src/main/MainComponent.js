import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import RenderBase from './RenderBase';
import RenderWebView from './RenderWebView';
import RenderYoutube from './RenderYoutube';
import SideMenu from 'src/common/drawer/SideMenu';
import Language from 'src/common/drawer/basic/Language';
import I18n from 'react-native-i18n';

export default class MainComponent extends React.Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          <Scene key="RenderBase" component={RenderBase} initial={true} hideNavBar={true} />
          <Scene key="RenderWebView" component={RenderWebView} title="WebView" />
          <Scene key="RenderYoutube" component={RenderYoutube} title="Youtube" />
          <Scene key="RenderSetLanguage" component={Language} title={I18n.t('Z0003')}
            />
          <Scene
            key="DrawerMenu"
            drawer
            drawerWidth={250}
            drawerPosition='left'
            component={SideMenu}
            title={I18n.t('Z0001')}
            // navigationBarStyle={{backgroundColor: '#000'}}
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
          </Scene>
        </Scene>
      </Router>
    )
  }
}