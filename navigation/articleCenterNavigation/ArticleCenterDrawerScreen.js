import React, {useContext, useReducer} from 'react';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-ionicons';

export function ArticleCenterDrawerScreen(props) {
  

  const navigation = useNavigation();

  return (

      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Artículos"
          onPress={() => navigation.navigate('ArticleCenter')}
          icon={() => <Icon size={20} name={'document'} />}
        />
        <DrawerItem
          label="Filtrar artículos"
          onPress={() => navigation.navigate('ArticleCenterSort')}
          icon={() => <Icon size={20} name={'cog'} />}
        />
      </DrawerContentScrollView>
  );
}
