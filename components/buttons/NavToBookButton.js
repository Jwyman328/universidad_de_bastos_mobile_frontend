//import liraries
import React, {Component,useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-ionicons'
import ModalViewPopUp from '../../screens/webview/WebViewPopUp';

// create a component
const NavToBook = ({locationLink}) => {
  const [isShowWebView, setIsShowWebView] = useState(false);

  function goToBook() {
    setIsShowWebView(true)
  }
  return (
    <View style={{flex: 1}} onStartShouldSetResponder={(event) => true}>
      <TouchableOpacity onPress={goToBook} style={styles.touchContainer}>
        <View style={styles.container}>
          <Icon
            size={43}
            name="arrow-forward"
            backgroundColor="#3b5998"
            ></Icon>
        </View>
      </TouchableOpacity>
      <ModalViewPopUp pageUri={locationLink} showModal={isShowWebView} setShowModal={setIsShowWebView} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  touchContainer: {
    height: 50,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default NavToBook;
