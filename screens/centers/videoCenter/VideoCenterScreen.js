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
import VideoCenterContext from '../../../data/centers/videoCenter/videoCenterContext';
import { useDispatch, useSelector } from 'react-redux';
import fetchVideos from '../../../redux/thunks/httpRequests/fetchVideos';
import selectAllVideos from '../../../redux/selectors/videos/selectAllVideos';
import { selectVideoDataSort, selectVideoInsitutionSort, selectVideoTypeSort, selectVideoWatchedSort } from '../../../redux/selectors/videos/selectVideoSortTypeSelects';

// create a component
const VideoCenterScreen = () => {

  const [allVideoData, setAllVideoData] = useState(undefined);

  const {videoCenterState, videoCenterDispatch} = useContext(
    VideoCenterContext,
  );

  //const { institution,tipo,mirado,fecha} = videoCenterState
  const institution = useSelector(selectVideoInsitutionSort)
  const tipo = useSelector(selectVideoTypeSort)
  const mirado = useSelector(selectVideoWatchedSort)
  const fecha = useSelector(selectVideoDataSort)

  const dispatch = useDispatch()
  const allVideos = useSelector(selectAllVideos)

  useEffect(() => {
    loadVideoData();
  }, [dispatch]);

  useEffect(()=>{
    setAllVideoData(allVideos);
  },[allVideos])

  async function loadVideoData() {
    dispatch(fetchVideos())
  }

  function filterInstitution(video){

    if(institution==='Todos'){
      return true
    }

    if(institution==='UFM' && video.categories.includes('UFM')){
        return true
    }

    if(institution === 'Xoan De Lugo' && video.categories.includes('xoanDeLugo')){
        return true
    }

    if(institution === 'Juan De Mariana' && video.categories.includes('juanDeMariana')){
      return true
  }
    return false 
  }

  function filterType(video){
    if(tipo==='Todos'){
      return true
    }

    if(tipo==='Entrevista' && video.categories.includes('interview')){
        return true
    }

    if(tipo === 'Conferencia' && video.categories.includes('conference')){
        return true
    }

    return false 
  }

  function filterWatched(video){
    const hasVideoBeenWatched = video.hasBeenWatchedByUser? 'Mirado': "No Mirado"

    if(mirado==='Todos'){
      return true
    }

    if(mirado===hasVideoBeenWatched){
        return true
    }else{
      return false
    }
  }

  function sortByDate(videoData){
    const videosSortedByData = videoData.sort((a, b) => a.year - b.year);

    if(fecha==='Nuevo'){
      videosSortedByData.reverse()
    }
    return videosSortedByData
  }

  function sortVideoData(allVideos) {
    const sortedInstitutionVideos = allVideos.filter(video=>
       filterInstitution(video)
    )
    const sortTypeVideos = sortedInstitutionVideos.filter(video=>
      filterType(video)
      )
    const sortWatchedVideos = sortTypeVideos.filter(video=>
      filterWatched(video)
    )
    return sortWatchedVideos
  }

  function createVideoCards() {
    const filteredVideos = sortVideoData(allVideoData)
    const sortedVideos = sortByDate(filteredVideos)
    const allVideoCards = sortedVideos.map((videoData) => {
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
