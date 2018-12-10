import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent:'center',
  },
  ScrollViewBackground: {
    backgroundColor: '#000',
  },
  imageBackgroundBasic: {
    width: Dimensions.get('window').width - 20,
    height: 150,
    marginRight: 4,
    backgroundColor: '#fff',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 8,
  },
  imageBackgroundStyle: {
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#fff',
  },
  coverNews: {
    backgroundColor: 'rgba(0,0,0,.6)', 
    flex: 1, 
    borderRadius: 8
  },
  aboveNewsInfo: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    padding: 9
  },
  belowNewsInfo: {
    flexDirection: 'column-reverse', 
    height: 110, 
    paddingLeft: 10
  },
  newsSourceTextArea: {
    alignItems: 'center', 
    flexDirection: 'row'
  },
  newsSourceText: {
    textAlign: 'left', 
    color: '#fff', 
    display: 'flex'
  },
  newsDateText: {
    textAlign: 'right', 
    color: '#fff'
  },
  newsTitleText: {
    color: '#fff',
  },
});
