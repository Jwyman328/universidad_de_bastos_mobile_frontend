import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import BookCard from '../../../components/cards/book/BookCard';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import getBooks from '../../../redux/selectors/books/getBooks';
import fetchBooks from '../../../redux/thunks/httpRequests/fetchBooks';

import {primaryGradient} from '../../../styles/colors';


// create a component
const BookCenterScreen = () => {
  const [bookCards,setBookCards] = useState(undefined)

  const dispatch = useDispatch();

  const allBookData = useSelector(getBooks) 
 
  function loadBookData() {
    dispatch(fetchBooks())
  }

  function createBookCards() {
    const allBookCards = allBookData.map((bookData) => {
      return (
        <BookCard
          loadBookData={loadBookData}
          key={bookData._id}
          bookData={bookData}></BookCard>
      );
    });
    return allBookCards;
  }

  useEffect(() => {
    loadBookData();
  }, [dispatch]);

  useEffect(() => {
    if (allBookData){
      const bookCards = createBookCards()
      setBookCards(bookCards)
    }
  },[allBookData]);

  return (
    <View style={styles.container}>
      <CenterSortHeader
        title={'Libros'}
        routeScreen={'BookCenterSort'}
        iconName="cog"
      />
      <ScrollView>
        <View style={styles.scrollContainer}>
          {bookCards ? bookCards : null}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

//make this component available to the app
export default BookCenterScreen;
