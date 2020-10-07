//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import BookCard from '../../components/cards/book/BookCard';
import MainHeader from '../../components/headers/MainHeader';
import GlobalDataContext from '../../data/global/globalContext';
import getAllBookData from '../../httpRequests/bookData/getAllBookData';
import {primaryGradient} from '../../styles/colors';
MainHeader
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
      setAllBookData(allBookData);
    } catch (err) {
      console.log(err, 'err');
    }
  }

  function createBookCards() {
    const allBookCards = allBookData.map((bookData) => {
      return <BookCard loadBookData={loadBookData} key={bookData._id} bookData={bookData}></BookCard>;
    });
    return allBookCards;
  }

  useEffect(() => {
    loadBookData();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollContainer}>
          {allBookData ? createBookCards() : null}
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: primaryGradient,
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
  },
});

//make this component available to the app
export default BookCenterScreen;
