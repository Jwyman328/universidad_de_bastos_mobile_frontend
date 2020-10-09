import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { BookCenterDrawerScreen } from './BookCenterDrawerScreen';

import BookCenterScreen from '../../screens/centers/bookCenter/BookCenterScreen'
import BookSortScreen from '../../screens/centers/bookCenter/BookSortScreen';
const Drawer = createDrawerNavigator();


export default function BookCenterSortDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="BookCenter"
      //drawerStyle={} //drawerStyles.drawerStyle
      drawerContent={(props) => <BookCenterDrawerScreen {...props} />}>
      <Drawer.Screen
        name="BookCenter"
        component={BookCenterScreen}
      />
      <Drawer.Screen
        name="BookCenterSort"
        component={BookSortScreen}
      />

    </Drawer.Navigator>
  );
}


