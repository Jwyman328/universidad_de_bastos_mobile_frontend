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
import {secondaryGradient,hasReadYellow} from '../../../styles/colors';
import markBookAsUnRead from '../../../httpRequests/bookData/markBookAsUnRead';

// create a component
const BookCard = ({bookData,loadBookData}) => {
  const [markBookAsReadStatus, setMarkBookAsReadStatus] = useState(undefined)
  const [markBookAsUnReadStatus, setMarkBookAsUnReadStatus] = useState(undefined)


  const imageUri = bookData.image;
  const title = bookData.title;
  const author = bookData.author;
  const hasBeenReadByUser = bookData.hasBeenReadByUser
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const styles = createStyleSheet(windowWidth, windowWidth, hasBeenReadByUser);

  const globalContext = useContext(GlobalDataContext)
  const token = globalContext.token.value

  function handleReadUnReadButtonClick(){
    if(hasBeenReadByUser){
      markTheBookAsUnRead()
    }else{
      markTheBookAsRead()
    }
  }

  function markTheBookAsRead(){
    markBookAsRead(bookData._id,token,setMarkBookAsReadStatus )
    //reload all books
    loadBookData()
  }

  function markTheBookAsUnRead(){
    markBookAsUnRead(bookData._id,token, setMarkBookAsUnReadStatus)
    loadBookData()
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
        <ReadButton onPressButton={handleReadUnReadButtonClick} hasRead={hasBeenReadByUser} />
      <NavToBook locationLink={bookData.locationLink}/>
      </View>
    </FlipCard>
  );
};

// define your styles
function createStyleSheet(windowWidth, windowHeight,hasBeenReadByUser) {
  const borderColor = hasBeenReadByUser? hasReadYellow : 'grey'
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
      backgroundColor: secondaryGradient,
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
      textAlign:'center'
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
