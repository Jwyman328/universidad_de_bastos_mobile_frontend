import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// create a component
const VideoCard = ({videoData}) => {
  const imageUrl = videoData.image;

  const title = videoData.title;
  const noteTotal = videoData.noteCount;

  const navigation = useNavigation();

  function navigateToPage() {
    navigation.navigate('VideoPlayerScreen', {videoData: videoData});
  }
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
const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
    width:'70%%',
    alignItems:'center'
  },
  container: {
    //flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#bcd6e3',
    height: 250, //'50%',
    borderColor: 'blue',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    width: '100%',
    marginBottom: 30,
  },
  image: {
    height: '50%',
    borderRadius: 20,
    //width:'100%'
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
    //width:'95%'

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

export default VideoCard;
