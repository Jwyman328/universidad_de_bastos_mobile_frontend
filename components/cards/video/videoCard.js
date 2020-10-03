//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const VideoCard = () => {
  const imageUrl =
    'https://pbs.twimg.com/profile_images/1214249313070723073/ki5YXpQv.jpg';
  const title = 'Video Bastos';
  const noteTotal = 0
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageUrl,
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.noteContainer}>
        <Text style={styles.notes}>Notas:{noteTotal}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#bcd6e3',
    height: '50%',
    borderColor: 'blue',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius:20,
    width: '70%',
  },
  image: {
    height: '50%',
    borderRadius:20,
  },
  titleContainer:{
    height: '30%',
    alignItems:'flex-start',
    justifyContent: 'center',
    paddingLeft:10,

  },
  title:{
      fontSize:16,
  },
  noteContainer: {
      height:'20%',
      alignItems:'flex-start',
      justifyContent: 'center',
      paddingLeft:10,

  },
  notes:{
      fontSize:12,
  }
});

export default VideoCard;
