//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';
import ModalView from '../../screens/webview/WebViewPopUp';

// create a component
const NavToArticleButton = ({pageUri}) => {
  const [isShowWebView, setIsShowWebView] = useState(false);
  function navToArticleWebView() {
    setIsShowWebView(true);
  }
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const styles = createStyleSheet(screenHeight, screenWidth);
  return (
    <TouchableOpacity onPress={navToArticleWebView} style={styles.container}>
      {isShowWebView ? (

        <ModalView setShowModal={setIsShowWebView} showModal={isShowWebView} pageUri={pageUri} />
      ) : (
        <View style={styles.buttonContainer}>
          <Text style={styles.title}>Read</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

// define your styles
function createStyleSheet(screenHeight, screenWidth) {
  const styles = StyleSheet.create({
    container: {
      flex: 0.3,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
      backgroundColor: '#ccd1eb',
      height: '90%',
      borderRadius: 15,
    },
    title: {
      fontSize: 20,
    },
    webView: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: 800,
      width: '100%',
    },
  });

  return styles;
}

//make this component available to the app
export default NavToArticleButton;
