import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent:'center',
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  footerPaintMark: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  customFooterInit: {
    zIndex: 100,
    position: 'absolute',
  }
});
