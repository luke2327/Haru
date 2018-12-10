import React from 'react';
import { Header, } from 'react-native-elements';
import styles from './HeaderStyle';

/**
  * class : CustomHeader
  * extends : Component
  * description : 최상단의 헤더를 이루는 영역
  * react-native-elements의 Header 컴포넌트를 사용한다.
**/
export default class CustomHeader extends React.Component {
  render() {
    return (
      <Header
        leftComponent={{icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Haru', style: styles.headerCenterComponent }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        backgroundColor='#000'
        containerStyle={{
          flex: 1,
          height: 400,
        }}
        leftContainerStyle={{ backgroundColor: '#fff '}}
      />
    )
  }
}