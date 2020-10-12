//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';
import VideoPlayerHeader from '../../../components/headers/VideoPlayerHeader';
import { primaryGradient } from '../../../styles/colors';

// create a component
const VideoPlayerScreen = ({
  route: {
    params: {videoData},
  },
}) => {
  return (
    <View style={styles.container}>
        <VideoPlayerHeader title={videoData.title} />

      <View style={styles.videoContainer}>
        <WebView
          source={{uri: `https://www.youtube.com/embed/${videoData.videoUrl}`}}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryGradient,
  },
  videoContainer: {
    width: '95%',
    height: 300,
    backgroundColor: 'red',
  },
});

//make this component available to the app
export default VideoPlayerScreen;
