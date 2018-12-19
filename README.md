# Haru
#### 종속성 설치

​    Android - Android Studio(SDK) 설치  
    IOS - XCode 설치  

1. Node.js 설치  
   https://nodejs.org/

2. npm 설치  

3. react-native-cli 설치  
   `npm install react-native-cli -g`

4. yarn 설치  
   `npm install yarn -g` 

5. 모듈 설치   
   `yarn`  
   
5 - 2. 설치된 모듈  
       `yarn add prop-types`  
       `yarn add react-native-tab-view`  
       `yarn add react-native-drawer`  
       `yarn add react-navigation`  
       `yarn add react-native-paper`  
       `yarn add react-native-i18n`  
       `yarn add react-native-router-flux`  
       `yarn add react-native-vector-icons` 
       `yarn add react-native-gesture-handler` 

6. 테스트 서버 시작  
   `react-native run-android`  
   `react-native run-ios`  

   

빌드 후 vector icons 관련 오류 발생 시  
`react-native link react-native-vector-icons`  

1. 폴더 구조 개편, router-flux를 사용한 navigation
2. 탭 가로 스크롤 구현
3. i18n 구현
4. youtube를 주소로 들어가지말고 sdk를 이용하여 구현하려 했으나, 네이티브 코드의 수정과 react-native 버전의 다운그레이드가 필요해 현재는 보류. 유튜브 API 렌더링 부분만 추가

**개발 참고 사이트**  
https://facebook.github.io/react-native/docs/getting-started  
https://github.com/react-native-community/react-native-tab-view  
https://react-native-training.github.io/react-native-elements/  
https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html  