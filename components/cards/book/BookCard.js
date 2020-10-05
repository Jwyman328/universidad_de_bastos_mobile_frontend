//import liraries
import React, {Component, useContext, useState} from 'react';
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
import NavToBook from '../../buttons/NavToBookButton';
import GlobalDataContext from '../../../data/global/globalContext';
import markBookAsRead from '../../../httpRequests/bookData/markBookAsRead';

// create a component
const BookCard = ({bookData}) => {
  const [markBookAsReadStatus, setMarkBookAsReadStatus] = useState(undefined)

  const imageUri = bookData.image;
  const title = bookData.title;
  const author = bookData.author;
  const hasBeenReadByUser = bookData.hasBeenReadByUser
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const styles = createStyleSheet(windowWidth, windowWidth, hasBeenReadByUser);

  const globalContext = useContext(GlobalDataContext)
  const mockToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYzMDM4ODR9.f_NK_DVOXH4Ukc2-skqm2Ck3ejDrGh7e1TE4K9GE640';
  
  function markTheBookAsRead(){
    markBookAsRead(bookData._id,mockToken,setMarkBookAsReadStatus )
    //reload all books
  }

  function goToBook(){
    console.log('a')
  }
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
        <ReadButton onPressButton={markTheBookAsRead} />
      <NavToBook locationLink={bookData.locationLink}/>
      </View>
    </FlipCard>
  );
};

// define your styles
function createStyleSheet(windowWidth, windowHeight,hasBeenReadByUser) {
  const borderColor = hasBeenReadByUser? 'gold' : 'grey'
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
      width: windowWidth * 0.65,
      height: windowHeight * 0.7,
      backgroundColor: '#429ac7',
      borderColor: borderColor,
      borderWidth: 4,
      alignItems: 'center',
      padding: 10,
    },
    image: {
      width: windowWidth * 0.65,
      height: windowHeight * 0.7,
      resizeMode: 'stretch',
      borderColor: borderColor,
      borderWidth: 4,
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
  return styles;
}

//make this component available to the app
export default BookCard;
