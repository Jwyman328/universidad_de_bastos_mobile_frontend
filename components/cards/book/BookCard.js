//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import ReadButton from '../../buttons/ReadButton';
import {useWindowDimensions} from 'react-native';

// create a component
const BookCard = ({bookData}) => {
  const imageUri = bookData.image;
  const title = bookData.title;
  const author = bookData.author;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const styles = createStyleSheet(windowWidth, windowWidth)
  return (
    <FlipCard
      style={styles.outerContainer}
      perspective={300}
      flipHorizontal={true}
      flipVertical={false}>
      {/* Face Side */}
      <View style={styles.face}>
        <Image style={styles.image} source={{uri: imageUri}} />
      </View>
      {/* Back Side */}
      <View style={styles.back}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={3} style={styles.titleText}>
            {title}
          </Text>
        </View>
        <View style={styles.authorContainer}>
          <Text style={styles.authorText}>{author}</Text>
        </View>
        <ReadButton />
      </View>
    </FlipCard>
  );
};

// define your styles
function createStyleSheet(windowWidth,windowHeight){
  const styles = StyleSheet.create({
    outerContainer: {
      marginBottom: 20,
    },
    face: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    back: {
      width: windowWidth * .65,
      height: windowHeight * .7,
      backgroundColor: '#429ac7',
      borderColor: 'black',
      borderWidth: 2,
      alignItems: 'center',
      padding: 10,
    },
    image: {
      width: windowWidth * .65,
      height: windowHeight * .7,
      resizeMode: 'stretch',
      borderColor: 'black',
      borderWidth: 2,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      color: 'white',
      fontSize: 20,
      textTransform: 'capitalize',
    },
    authorContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    authorText: {
      color: 'white',
      fontSize: 16,
      textTransform: 'capitalize',
    },
  });
  return styles
}


//make this component available to the app
export default BookCard;
