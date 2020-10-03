import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import VideoCard from '../../components/cards/video/videoCard';
import getAllVideoData from '../../httpRequests/videoData/getallVideoData';
import GlobalDataContext from '../../data/global/globalContext';

// create a component
const VideoCenterScreen = () => {
  const [getVideosRequestStatus, setGetVideosRequestStatus] = useState(
    undefined,
  );
  const [allVideoData, setAllVideoData] = useState();

  const globalContext = useContext(GlobalDataContext);
  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYzMDM4ODR9.f_NK_DVOXH4Ukc2-skqm2Ck3ejDrGh7e1TE4K9GE640';

  useEffect(() => {
    loadVideoData();
  }, []);

  async function loadVideoData() {
    const videoData = await getAllVideoData(
      setGetVideosRequestStatus,
      mockToken,
    ); //globalContext.token.value
    setAllVideoData(videoData);
  }

  function createVideoCards() {
    const allVideoCards = allVideoData.map((videoData) => {
      return <VideoCard key={videoData._id} videoData={videoData}></VideoCard>;
    });
    return allVideoCards;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {allVideoData ? createVideoCards() : null}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default VideoCenterScreen;
