import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { ArticleCenterDrawerScreen } from './ArticleCenterDrawerScreen';
import ArticleCenterScreen from '../../screens/centers/articleCenter/ArticleCenterScreen';
import ArticleSortScreen from '../../screens/centers/articleCenter/ArticleSortScreen';
// import { BookCenterDrawerScreen } from './BookCenterDrawerScreen';

// import BookCenterScreen from '../../screens/centers/bookCenter/BookCenterScreen'
// import BookSortScreen from '../../screens/centers/bookCenter/BookSortScreen';

const Drawer = createDrawerNavigator();


export default function ArticleCenterSortDrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="BookCenter"
      drawerContent={(props) => <ArticleCenterDrawerScreen {...props} />}>
      <Drawer.Screen
        name="ArticleCenter"
        component={ArticleCenterScreen}
      />
      <Drawer.Screen
        name="ArticleCenterSort"
        component={ArticleSortScreen}
      />

    </Drawer.Navigator>
  );
}


