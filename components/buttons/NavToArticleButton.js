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
import ModalView from '../../screens/modals/webview/WebViewPopUp';
import {whiteBackground,hasReadYellow} from '../../styles/colors';

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
      flex: 0.23,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: screenWidth * .3,
      backgroundColor: hasReadYellow,
      height: '90%',
      borderRadius: 15,
      borderColor:'black',
      borderWidth:1,
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
