import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {
  Component,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import VideoCard from '../../../components/cards/video/videoCard';
import {primaryGradient} from '../../../styles/colors';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import { useDispatch, useSelector } from 'react-redux';
import fetchVideos from '../../../redux/thunks/httpRequests/fetchVideos';
import selectAllVideos from '../../../redux/selectors/videos/selectAllVideos';
import selectSortedVideos, { selectVideoDataSort, selectVideoInsitutionSort, selectVideoTypeSort, selectVideoWatchedSort } from '../../../redux/selectors/videos/selectVideoSortTypeSelects';

// create a component
const VideoCenterScreen = () => {

  const [allVideoData, setAllVideoData] = useState(undefined);

  const dispatch = useDispatch()

  const sortedVdieos = useSelector(selectSortedVideos)

  useEffect(() => {
    loadVideoData();
  }, [dispatch]);

  useEffect(()=>{
    setAllVideoData(sortedVdieos);
  },[sortedVdieos])

  async function loadVideoData() {
    dispatch(fetchVideos())
  }

  function createVideoCards() {
    const allVideoCards = allVideoData.map((videoData) => {
      return <VideoCard key={videoData._id} videoData={videoData}></VideoCard>;
    });
    return allVideoCards;
  }

  return (
    <View style={styles.container}>
      <CenterSortHeader title={'Videos'} routeScreen="VideoCenterSortSettings" iconName="cog" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          {allVideoData ? createVideoCards() : null}
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryGradient,
  },
  scrollContainer: {
    flex: 0.8,
    //backgroundColor: '#2c3e50',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

//make this component available to the app
export default VideoCenterScreen;
