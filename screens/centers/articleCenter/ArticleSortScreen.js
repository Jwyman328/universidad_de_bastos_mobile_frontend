import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SelectOptionButton from '../../../components/buttons/SelectOptionButton';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import ArticleCenterContext from '../../../data/centers/articlesCenter/articleCenterContext';
import {SET_FECHA} from '../../../reducers/centers/sortReducers/articleCenterSortReducer';
import setArticleDateSort from '../../../redux/actions/articles/setArticleDateSort';
import selectArticleSortFecha from '../../../redux/selectors/articles/selectArticleSortFecha';
import {sortFilterStyles} from '../../../styles/sortFilterStyles/sortFilterStyles';

// create a component
const ArticleSortScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const fecha = useSelector(selectArticleSortFecha)
  const selectedSortBy = fecha;


  function setSortBy(option) {
    dispatch(setArticleDateSort(option))
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
