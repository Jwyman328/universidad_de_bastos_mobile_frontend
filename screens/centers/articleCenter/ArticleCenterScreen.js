//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ArticleCard from '../../../components/cards/articles/ArticleCard';
// create a component
import {primaryGradient} from '../../../styles/colors';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import { useDispatch, useSelector } from 'react-redux';
import fetchArticles from '../../../redux/thunks/httpRequests/fetchArticles';
import selectAllArticles from '../../../redux/selectors/articles/selectAllArticles';
import selectArticleSortFecha from '../../../redux/selectors/articles/selectArticleSortFecha';

const ArticleCenterScreen = () => {
  const [allArticleCards, setAllArticleCards] = useState();


  const fecha = useSelector(selectArticleSortFecha)


  const dispatch = useDispatch()

  function sortArticlesByDate(articleData) {
    const articleDataSorted = articleData.sort((a, b) => new Date(a.date) - new Date(b.date));
    if(fecha==='Nuevo'){
      articleDataSorted.reverse()
    }
    return articleDataSorted
  }

  const allArticles = useSelector(selectAllArticles) //

   function createArticleCards() {
    const articlesSorted = sortArticlesByDate(allArticles)
    const allArticleCards = articlesSorted.map((articleCardData) => {
      return (
        <ArticleCard key={articleCardData._id} articleData={articleCardData} />
      );
    })
    setAllArticleCards(allArticleCards);
  }

  useEffect(() => {
    if (allArticles){
      createArticleCards();
    }
  }, [fecha, allArticles]);

  useEffect(() =>{
    loadArticles()
  },[dispatch])

  const loadArticles = () => {
    dispatch(fetchArticles())
  }


  return (
    <View style={styles.scrollContainer}>
      <CenterSortHeader title={'Articulos'} routeScreen={'ArticleCenterSort'} iconName="cog" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {allArticleCards ? allArticleCards : null}
        </View>
      </ScrollView>
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
  });
  return styles;
}

const styles = createStyles(primaryGradient);

//make this component available to the app
export default ArticleCenterScreen;
