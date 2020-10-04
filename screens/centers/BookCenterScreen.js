//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import BookCard from '../../components/cards/book/BookCard';
import GlobalDataContext from '../../data/global/globalContext';
import getAllBookData from '../../httpRequests/bookData/getAllBookData';

// create a component
const BookCenterScreen = () => {
  const globalContext = useContext(GlobalDataContext);
  const [getAllBookDataStatus, setGetAllBookDataStatus] = useState(undefined);
  const [allBookData, setAllBookData] = useState(undefined);

  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYzMDM4ODR9.f_NK_DVOXH4Ukc2-skqm2Ck3ejDrGh7e1TE4K9GE640';

  async function loadBookData() {
    try {
      const allBookData = await getAllBookData(
        setGetAllBookDataStatus,
        mockToken,
      );
      console.log(allBookData, 'abd');
      setAllBookData(allBookData);
    } catch (err) {
      console.log(err, 'err');
    }
  }

  function createBookCards() {
    const allBookCards = allBookData.map((bookData) => {
      return <BookCard key={bookData._id} bookData={bookData}></BookCard>;
    });
    return allBookCards;
  }

  useEffect(() => {
    loadBookData();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {allBookData ? createBookCards() : null}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default BookCenterScreen;
