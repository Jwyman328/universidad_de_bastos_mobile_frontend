//import liraries
import React, {Component, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ArticleCard from '../../../components/cards/articles/ArticleCard';
import getAllArticleData from '../../../httpRequests/articleData/getAllArticleData';
// create a component
import GlobalDataContext from '../../../data/global/globalContext';
import {primaryGradient} from '../../../styles/colors';
import MainHeader from '../../../components/headers/MainHeader';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';

const ArticleCenterScreen = () => {
  const [getAllArticleDataStatus, setGetAllArticleDataStatus] = useState(
    undefined,
  );
  const [allArticleData, setAllArticleData] = useState();

  const globalContext = useContext(GlobalDataContext);

  const mockToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTYzMDM4ODR9.f_NK_DVOXH4Ukc2-skqm2Ck3ejDrGh7e1TE4K9GE640';

  async function createArticleCards() {
    const articleCardsData = await getAllArticleData(
      setGetAllArticleDataStatus,
      mockToken,
    ); //globalContext.token.value

    const allArticleCards = articleCardsData.map((articleCardData) => {
      return (
        <ArticleCard key={articleCardData._id} articleData={articleCardData} />
      );
    });
    setAllArticleData(allArticleCards);
  }

  useEffect(() => {
    createArticleCards();
  }, []);
  return (
    <View style={styles.scrollContainer}>
      <CenterSortHeader routeScreen={'ArticleCenterSort'} iconName="cog"/>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {allArticleData ? allArticleData : null}
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
      marginTop:30,
    },
  });
  return styles;
}

const styles = createStyles(primaryGradient)

//make this component available to the app
export default ArticleCenterScreen;
