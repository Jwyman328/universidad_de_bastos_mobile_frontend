import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useState, useContext, useCallback} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SelectOptionButton from '../../../components/buttons/SelectOptionButton';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import VideoCenterContext from '../../../data/centers/videoCenter/videoCenterContext';
import { SET_FECHA, SET_INSTITUTION, SET_MIRADO, SET_TIPO } from '../../../reducers/centers/sortReducers/videoCenterSortReducer';
import { selectVideoDataSort, selectVideoInsitutionSort, selectVideoTypeSort, selectVideoWatchedSort } from '../../../redux/selectors/videos/selectVideoSortTypeSelects';
import { sortFilterStyles } from '../../../styles/sortFilterStyles/sortFilterStyles';

// create a component
const VideoSortScreen = () => {
  const navigation = useNavigation();

  const {videoCenterState, videoCenterDispatch} = useContext(
    VideoCenterContext,
  );
  
  const institution = useSelector(selectVideoInsitutionSort)
  const tipo = useSelector(selectVideoTypeSort)
  const mirado = useSelector(selectVideoWatchedSort)
  const fecha = useSelector(selectVideoDataSort)

  const dispatch = useDispatch()
  
  const selectedInstitution = institution;

  const setInstitution = useCallback(
    (value) => {dispatch({type:SET_INSTITUTION,payload:{institution:value}})},
    [dispatch]
  ) 

  const selectedType = tipo;
  const setType = useCallback(
    (value) => {dispatch({type:SET_TIPO,payload:{tipo:value}})},
    [dispatch]
  ) 

  const selectedWatched= mirado;
  const setWatched= useCallback(
    (value) => {dispatch({type:SET_MIRADO,payload:{mirado:value}})},
    [dispatch]
    )

  const selectedSortBy= fecha;
  const setSortBy= useCallback(
    (value) => {
      dispatch({type:SET_FECHA,payload:{fecha:value}})
    },
    [dispatch]
  )
 

  function checkIsSelected(selected, option) {
    if (selected === option) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View  style={sortFilterStyles.container} >
      <CenterSortHeader title={'Videos'} routeScreen={'VideoCenter'} iconName="videocam" />
      <View style={sortFilterStyles.contentContainer}>
        <View>
          <Text style={sortFilterStyles.title}>Filtrar Videos</Text>
        </View>
        {/* <Button
        onPress={() => navigation.navigate('VideoCenter')}
        title="Go back home"
      /> */}
        {/* <Text style={styles.subTitle}>Filter</Text> */}

        <View style={sortFilterStyles.sortGroup}>
          <Text style={sortFilterStyles.sortTitle}>Institución</Text>
          <View style={sortFilterStyles.groupOptions}>
            <SelectOptionButton
              isSelected={checkIsSelected(selectedInstitution, 'Todos')}
              setIsSelected={setInstitution}
              option="Todos"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedInstitution, 'UFM')}
              setIsSelected={setInstitution}
              option="UFM"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedInstitution, 'Xoan De Lugo')}
              setIsSelected={setInstitution}
              option="Xoan De Lugo"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(
                selectedInstitution,
                'Juan De Mariana',
              )}
              setIsSelected={setInstitution}
              option="Juan De Mariana"
            />
          </View>
        </View>

        <View style={sortFilterStyles.sortGroup}>
          <Text style={sortFilterStyles.sortTitle}>Tipo</Text>
          <View style={sortFilterStyles.groupOptions}>
            <SelectOptionButton
              isSelected={checkIsSelected(selectedType, 'Todos')}
              setIsSelected={setType}
              option="Todos"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedType, 'Entrevista')}
              setIsSelected={setType}
              option="Entrevista"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedType, 'Conferencia')}
              setIsSelected={setType}
              option="Conferencia"
            />
          </View>
        </View>

        <View style={sortFilterStyles.sortGroup}>
          <Text style={sortFilterStyles.sortTitle}>Mirado</Text>
          <View style={sortFilterStyles.groupOptions}>
            <SelectOptionButton
              isSelected={checkIsSelected(selectedWatched, 'Todos')}
              setIsSelected={setWatched}
              option="Todos"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedWatched, 'Mirado')}
              setIsSelected={setWatched}
              option="Mirado"
            />
            <SelectOptionButton
              isSelected={checkIsSelected(selectedWatched, 'No Mirado')}
              setIsSelected={setWatched}
              option="No Mirado"
            />
          </View>
        </View>
        {/* 
        <Text>Year</Text> */}

        <View>
          {/* <Text style={styles.subTitle}>Sort</Text> */}

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
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
    
});

//make this component available to the app
export default VideoSortScreen;
