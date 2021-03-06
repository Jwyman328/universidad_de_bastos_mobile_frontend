import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useCallback, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SelectOptionButton from '../../../components/buttons/SelectOptionButton';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import setBookSortDate from '../../../redux/actions/books/setBookSortDate';
import setBookSortRead from '../../../redux/actions/books/setBookSortRead';
import setBookSortCategoria from '../../../redux/actions/books/setBooksSortCategoria';
import { selectSortCategoria, selectSortDate, selectSortRead } from '../../../redux/selectors/books/selectSortBooks';
import {hasReadYellow, whiteBackground} from '../../../styles/colors';
import { sortFilterStyles } from '../../../styles/sortFilterStyles/sortFilterStyles';

// create a component
const BookSortScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch()

  //const [selectedRead, setRead] = useState('Todos');
  //const [selectedCategoria, setCategoria] = useState('Todos');
  //const [selectedSortBy, setSortBy] = useState('Todos');

  const setRead = useCallback((option)=>{dispatch(setBookSortRead(option))},
  [dispatch]
  )

  const setSortBy = useCallback((option) => {
    dispatch(setBookSortDate(option))
  }, [dispatch]
  ) 

  const setCategoria = useCallback((option) => {
    dispatch(setBookSortCategoria(option))
  }, [dispatch]
  )

  const selectedRead = useSelector(selectSortRead)
  const selectedCategoria = useSelector(selectSortCategoria)
  const selectedSortBy = useSelector(selectSortDate)


  function checkIsSelected(selected, option) {
    if (selected === option) {
      return true;
    } else {
      return false;
    }
  }



  return (
    <View style={sortFilterStyles.container}>
      <CenterSortHeader title={'Libros'} routeScreen={'BookCenter'} iconName="book" />
      <View style={sortFilterStyles.contentContainer}>
        <View>
          <Text style={sortFilterStyles.title}>Filtrar Libros</Text>
        </View>
        {/* <Button
        onPress={() => navigation.navigate('VideoCenter')}
        title="Go back home"
      /> */}
        {/* <Text style={styles.subTitle}>Filter</Text> */}

        <View style={sortFilterStyles.sortGroup}>
          <Text style={sortFilterStyles.sortTitle}>Leido</Text>
          <View style={sortFilterStyles.groupOptions}>
            <SelectOptionButton
              isSelected={checkIsSelected(selectedRead, 'Todos')}
              setIsSelected={setRead}
              option="Todos"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedRead, 'Leido')}
              setIsSelected={setRead}
              option="Leido"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedRead, 'No Leido')}
              setIsSelected={setRead}
              option="No Leido"
            />
          </View>
        </View>

        <View style={sortFilterStyles.sortGroup}>
          <Text style={{...sortFilterStyles.sortTitle, ...styles.title}}>Categoria</Text>
          <View style={{...sortFilterStyles.groupOptions, ...styles.wrap}}>
            <SelectOptionButton
              isSelected={checkIsSelected(selectedCategoria, 'Todos')}
              setIsSelected={setCategoria}
              option="Todos"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedCategoria, 'Sociologia')}
              setIsSelected={setCategoria}
              option="Sociologia"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedCategoria, 'Economia')}
              setIsSelected={setCategoria}
              option="Economia"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedCategoria, 'Politica')}
              setIsSelected={setCategoria}
              option="Politica"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedCategoria, 'Ficcion')}
              setIsSelected={setCategoria}
              option="Ficcion"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedCategoria, 'Derecho')}
              setIsSelected={setCategoria}
              option="Derecho"
            />
          </View>
        </View>

        <View style={sortFilterStyles.sortGroup}>
          <Text style={sortFilterStyles.sortTitle}>Fecha</Text>
          <View style={sortFilterStyles.groupOptions}>
            <SelectOptionButton
              isSelected={checkIsSelected(selectedSortBy, 'Todos')}
              setIsSelected={setSortBy}
              option="Todos"
            />
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
const styles = StyleSheet.create({
    wrap:{
      justifyContent:'center',
      flexWrap:'wrap',

    },
    title:{
      marginBottom:30,
    }
});

//make this component available to the app
export default BookSortScreen;
