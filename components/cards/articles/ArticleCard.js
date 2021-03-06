//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import NavToArticleButton from '../../buttons/NavToArticleButton';
import {hasReadYellow, whiteBackground,secondaryGradient} from '../../../styles/colors';

// create a component
const ArticleCard = ({articleData}) => {
  const title = articleData.title;
  const author = articleData.author;
  const categories = articleData.categories; // array of categories
  const date = new Date(articleData.date).toLocaleDateString();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.articleInfo}>
        <Text>{author}</Text>
        <Text>{date}</Text>
      </View>
      {/* <View>
        <Text>{categories}</Text>
      </View> */}
      <NavToArticleButton pageUri={articleData.url} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: whiteBackground,
    width: Dimensions.get('window').width * .8,
    height: 230,
    borderColor: hasReadYellow,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: '5%',
    marginBottom: 20,
  },
  titleContainer: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: secondaryGradient,
    textAlign:"center"
  },
  articleInfo: {
    flex: 0.4,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ArticleCard;
