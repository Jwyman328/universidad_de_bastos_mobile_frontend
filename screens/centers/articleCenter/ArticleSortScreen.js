import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SelectOptionButton from '../../../components/buttons/SelectOptionButton';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import ArticleCenterContext from '../../../data/centers/articlesCenter/articleCenterContext';
import {SET_FECHA} from '../../../reducers/centers/sortReducers/articleCenterSortReducer';
import {sortFilterStyles} from '../../../styles/sortFilterStyles/sortFilterStyles';

// create a component
const ArticleSortScreen = () => {
  const navigation = useNavigation();

  const aticleCenterDataAndReducer = useContext(
    ArticleCenterContext
  );
  const {articleCenterState, articleCenterDispatch} = aticleCenterDataAndReducer
  
  const {fecha} = articleCenterState;
  const selectedSortBy = fecha;

  function setSortBy(option) {
    articleCenterDispatch({type: SET_FECHA, payload:{fecha: option}});
  }

  function checkIsSelected(selected, option) {
    if (selected === option) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View style={sortFilterStyles.container}>
      <CenterSortHeader title={'Articulos'} routeScreen={'ArticleCenter'} iconName="document" />
      <View style={sortFilterStyles.contentContainer}>
        <View>
          <Text style={sortFilterStyles.title}>Filtrar Artículos</Text>
        </View>
        {/* <Button
        onPress={() => navigation.navigate('VideoCenter')}
        title="Go back home"
      /> */}
        {/* <Text style={styles.subTitle}>Filter</Text> */}

        <View style={sortFilterStyles.sortGroup}>
          <Text style={sortFilterStyles.sortTitle}>Fecha</Text>
          <View style={sortFilterStyles.groupOptions}>
            <SelectOptionButton
              isSelected={checkIsSelected(selectedSortBy, 'Nuevo')}
              setIsSelected={setSortBy}
              option="Nuevo"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedSortBy, 'Viejo')}
              setIsSelected={setSortBy}
              option="Viejo"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default ArticleSortScreen;
