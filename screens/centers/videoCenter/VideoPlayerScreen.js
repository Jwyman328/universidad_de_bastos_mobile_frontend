//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import WebView from 'react-native-webview';
import {useDispatch} from 'react-redux';
import VideoPlayerHeader from '../../../components/headers/VideoPlayerHeader';
import GlobalDataContext from '../../../data/global/globalContext';
import markVideoAsWatched from '../../../httpRequests/videoData/markVideoAsWatched';
import setVideoAsWatched from '../../../redux/actions/videos/setVideoAsWatched';
import {primaryGradient} from '../../../styles/colors';

// create a component
const VideoPlayerScreen = ({
  route: {
    params: {videoData},
  },
}) => {
  const globalContext = useContext(GlobalDataContext);
  const token = globalContext.token.value;
  const [markVideoAsWatchedStatus, setMarkVideoAsWatchedStatus] = useState('');

  const dispatch = useDispatch();

  async function handlePress() {
    const markVideo = await markVideoAsWatched(
      videoData.videoUrl,
      token,
      setMarkVideoAsWatchedStatus,
    );
    dispatch(setVideoAsWatched(videoData._id));
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
