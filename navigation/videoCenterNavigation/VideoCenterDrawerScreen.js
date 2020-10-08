import * as React from 'react';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
  } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ionicons'

  export function VideoCenterDrawerScreen(props) {
    const navigation = useNavigation()
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
        label="Video Center"
        onPress={() => navigation.navigate('VideoCenter')}
        icon={()=> <Icon size={20}  name={'videocam'} />}
      />
       <DrawerItem
        label="Sort Videos"
        onPress={() => navigation.navigate('VideoCenterSortSettings')}
        icon={()=> <Icon size={20}  name={'cog'}/> }
      />
      </DrawerContentScrollView>
    );
  }