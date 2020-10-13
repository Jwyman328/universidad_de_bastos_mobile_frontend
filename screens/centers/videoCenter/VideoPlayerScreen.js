//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import VideoPlayerHeader from '../../../components/headers/VideoPlayerHeader';
import GlobalDataContext from '../../../data/global/globalContext';
import markVideoAsWatched from '../../../httpRequests/videoData/markVideoAsWatched';
import { primaryGradient } from '../../../styles/colors';

// create a component
const VideoPlayerScreen = ({
  route: {
    params: {videoData},
  },
}) => {
    const mockToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYzMDM4ODR9.f_NK_DVOXH4Ukc2-skqm2Ck3ejDrGh7e1TE4K9GE640';
    const globalContext = useContext(GlobalDataContext)
    const [markVideoAsWatchedStatus, setMarkVideoAsWatchedStatus] = useState('')

    async function handlePress(){
       const markVideo = await markVideoAsWatched(videoData.videoUrl,mockToken,setMarkVideoAsWatchedStatus)
    }
  return (
    <View style={styles.container}>
        <VideoPlayerHeader title={videoData.title} />

      <TouchableOpacity onPress={handlePress} style={styles.videoContainer}>
        <WebView
          source={{uri: `https://www.youtube.com/embed/${videoData.videoUrl}`}}
        />
      </TouchableOpacity>
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
  },
});

//make this component available to the app
export default VideoPlayerScreen;
