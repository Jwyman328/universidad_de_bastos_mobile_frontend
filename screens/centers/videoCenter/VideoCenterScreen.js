import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {
  Component,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
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

  function createVideoCards({item}) {

    return <VideoCard  videoData={item}></VideoCard>;

  }

  return (
    <View style={styles.container}>
      <CenterSortHeader title={'Videos'} routeScreen="VideoCenterSortSettings" iconName="cog" />
      {/* <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          {allVideoData ? createVideoCards() : null}
        </View>
      </ScrollView> */}
      <FlatList
      style={styles.scrollContainer}
      contentContainerStyle={styles.cardContainer}
      data={allVideoData} 
      renderItem = {createVideoCards}
      keyExtractor={item => item._id}
      />

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryGradient,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  scrollContainer: {
    // flex: 0.8,
    //backgroundColor: '#2c3e50',
    width:'100%'


  },
  cardContainer: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',

    marginTop: 30,
  },
});

//make this component available to the app
export default VideoCenterScreen;
