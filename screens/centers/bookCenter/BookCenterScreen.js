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
  const [bookCards, setBookCards] = useState(undefined);

  const dispatch = useDispatch();

  const allBookData = useSelector(getBooks);

  function loadBookData() {
    dispatch(fetchBooks());
  }

  function createBookCards({item}) {
    // const allBookCards = allBookData.map((bookData) => {
    //   return (
    //     <BookCard
    //       loadBookData={loadBookData}
    //       key={bookData._id}
    //       bookData={bookData}></BookCard>
    //   );
    // });
    // return allBookCards;
    return (
      <BookCard
        loadBookData={loadBookData}
        key={item._id}
        bookData={item}></BookCard>
    );
  }

  useEffect(() => {
    loadBookData();
  }, [dispatch]);

  // useEffect(() => {
  //   if (allBookData) {
  //     const bookCards = createBookCards();
  //     setBookCards(bookCards);
  //   }
  // }, [allBookData]);

  return (
    <View style={styles.container}>
      <CenterSortHeader
        title={'Libros'}
        routeScreen={'BookCenterSort'}
        iconName="cog"
      />
      {/* <ScrollView>
        <View style={styles.scrollContainer}>
          {allBookData ? bookCards : null}
        </View>
      </ScrollView> */}
      <FlatList
            style={styles.scrollContainer}
           contentContainerStyle={styles.cardContainer}
        renderItem={createBookCards}
        data={allBookData}
        keyExtractor={(item) => item._id}
      />
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
    width:'100%'
  },
  cardContainer: {

    marginTop: 30,
  },
});

//make this component available to the app
export default BookCenterScreen;
