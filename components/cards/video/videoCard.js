import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, memo} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';
import {whiteBackground,hasReadYellow} from '../../../styles/colors';

// create a component
const VideoCard = ({videoData}) => {
  const imageUrl = videoData.image;

  const title = videoData.title;
  const noteTotal = videoData.noteCount;

  const navigation = useNavigation();

  function navigateToPage() {
    navigation.navigate('VideoPlayerScreen', {videoData: videoData});
  }
  
  const styles = createStyle(videoData.hasBeenWatchedByUser)
  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={navigateToPage}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.titleContainer}>
          <Text ellipsizeMode='tail' numberOfLines={3} style={styles.title}>{title}</Text>
        </View>

        <View style={styles.noteContainer}>
          <Text style={styles.notes}>Notas:{noteTotal}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
function createStyle(hasBeenWatchedByUser){
  const borderColor = hasBeenWatchedByUser? hasReadYellow: 'grey'
  const styles = StyleSheet.create({
    touchableContainer: {
      width: Dimensions.get('window').width * .8,
      alignItems:'center',

    },
    container: {
      backgroundColor: whiteBackground,
      height: 250, //'50%',
      borderColor: borderColor,
      borderWidth: 3,
      borderStyle: 'solid',
      borderRadius: 20,
      width: '100%',
      marginBottom: 30,
    },
    image: {
      height: '50%',
      borderRadius: 20,
    },
    titleContainer: {
      height: '30%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      width:'100%',
      position:'relative',
    },
    title: {
      fontSize: 16,  
    },
    noteContainer: {
      height: '20%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: 10,
    },
    notes: {
      fontSize: 12,
    },
  });
  return styles
}


export default memo(VideoCard);
