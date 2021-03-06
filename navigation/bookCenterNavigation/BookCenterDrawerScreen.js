import * as React from 'react';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons'

  export function BookCenterDrawerScreen(props) {
    const navigation = useNavigation()
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
        label="Los Libros"
        onPress={() => navigation.navigate('BookCenter')}
        icon={()=> <Icon size={20}  name={'book'} />}
      />
       <DrawerItem
        label="Filtrar libros"
        onPress={() => navigation.navigate('BookCenterSort')}
        icon={()=> <Icon size={20}  name={'cog'}/> }
      />
      </DrawerContentScrollView>
    );
  }