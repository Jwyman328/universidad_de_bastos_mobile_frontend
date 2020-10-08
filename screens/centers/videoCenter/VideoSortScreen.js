import {useNavigation} from '@react-navigation/native';
//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import SelectOptionButton from '../../../components/buttons/SelectOptionButton';
import CenterSortHeader from '../../../components/headers/CenterSortHeader';
import {hasReadYellow, whiteBackground} from '../../../styles/colors';

// create a component
const VideoSortScreen = () => {
  const navigation = useNavigation();

  const [selectedInstitution, setInstitution] = useState('Todos');
  const [selectedType, setType] = useState('Todos');
  const [selectedWatched, setWatched] = useState('Todos');
  const [selectedSortBy, setSortBy] = useState('Todos');

  function checkIsSelected(selected, option) {
    if (selected === option) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <View  style={styles.container} >
      <CenterSortHeader routeScreen={'VideoCenter'} iconName="videocam" />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>Sort and Filter Videos</Text>
        </View>
        {/* <Button
        onPress={() => navigation.navigate('VideoCenter')}
        title="Go back home"
      /> */}
        {/* <Text style={styles.subTitle}>Filter</Text> */}

        <View style={styles.sortGroup}>
          <Text style={styles.sortTitle}>Institución</Text>
          <View style={styles.groupOptions}>
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

        <View style={styles.sortGroup}>
          <Text style={styles.sortTitle}>Tipo</Text>
          <View style={styles.groupOptions}>
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

        <View style={styles.sortGroup}>
          <Text style={styles.sortTitle}>Mirado</Text>
          <View style={styles.groupOptions}>
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

          <View style={styles.sortGroup}>
            <Text style={styles.sortTitle}>Fecha</Text>
            <View style={styles.groupOptions}>
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
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: whiteBackground,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 18,
  },

  sortGroup: {
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'space-evenly',
  },
  sortTitle: {
    fontSize: 20,
    fontWeight: '600',


  },
  groupOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',

  },
});

//make this component available to the app
export default VideoSortScreen;
