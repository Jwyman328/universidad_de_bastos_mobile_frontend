import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { CustomDrawerContent } from '../videoCenterNavigation/VideoCenterDrawerScreen';
import { BookCenterDrawerScreen } from './BookCenterDrawerScreen';
// import VideoCenterStackNavigation from './VideoCenterStackNavigation';
// import VideoSortScreen from '../../screens/centers/videoCenter/VideoSortScreen';
//import {drawerStyles} from './styles/drawerStyle';
//import {CustomDrawerContent} from './VideoCenterDrawerScreen';
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


