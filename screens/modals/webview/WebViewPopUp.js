import React, {Component, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Dimensions,
} from 'react-native';
// create a component
import {WebView} from 'react-native-webview';

const ModalViewPopUp = ({pageUri, showModal,setShowModal}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const styles = createStyleSheet(screenHeight, screenWidth);
  const [ modalVisible, setModalVisible]= useState(true)

   return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <WebView source={{uri: pageUri}} />
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={() => {
                setShowModal(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Close</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

// define your styles
function createStyleSheet(height, width) {
  const styles = StyleSheet.create({
    centeredView: {
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      height: height * .98,
      width: width,
    },
    openButton: {
      backgroundColor: '#F194FF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      height: 80,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  return styles;
}

//make this component available to the app
export default ModalViewPopUp;
