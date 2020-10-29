//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import ArticleCard from '../../../components/cards/articles/ArticleCard';
// create a component
import {primaryGradient} from '../../../styles/colors';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import { useDispatch, useSelector } from 'react-redux';
import fetchArticles from '../../../redux/thunks/httpRequests/fetchArticles';
import selectSortedArticles from '../../../redux/selectors/articles/selectSortedArticles';

const ArticleCenterScreen = () => {
  const [allArticleCards, setAllArticleCards] = useState();

  const dispatch = useDispatch()

  const articlesSorted = useSelector(selectSortedArticles)

   function createArticleCards({item}) {
    //const allArticleCards = articlesSorted.map((articleCardData) => {
      return (
        <ArticleCard key={item._id} articleData={item} />
      );
    }

  // useEffect(() => {
  //   if (articlesSorted){
  //     createArticleCards();
  //   }
  // }, [articlesSorted]);

  useEffect(() =>{
    loadArticles()
  },[dispatch])

  const loadArticles = () => {
    dispatch(fetchArticles())
  }


  return (
    <View style={styles.scrollContainer}>
      <CenterSortHeader title={'Articulos'} routeScreen={'ArticleCenterSort'} iconName="cog" />
      {/* <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {allArticleCards ? allArticleCards : null}
        </View>
      </ScrollView> */}
      <FlatList
        style={styles.scrollContainer}
        contentContainerStyle={styles.cardContainer}

      data={articlesSorted}
      renderItem={createArticleCards}
      keyExtractor={(item)=> item._id}
       />
    </View>
  );
};

// define your styles
function createStyles(backgroundColor) {
  const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
      backgroundColor: backgroundColor,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },

    cardContainer:{
      alignItems:'center',
      marginTop:30,
    }
  });
  return styles;
}

const styles = createStyles(primaryGradient);

//make this component available to the app
export default ArticleCenterScreen;
