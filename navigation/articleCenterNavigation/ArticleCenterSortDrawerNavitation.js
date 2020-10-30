import React, {useReducer} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ArticleCenterDrawerScreen} from './ArticleCenterDrawerScreen';
import ArticleCenterScreen from '../../screens/centers/articleCenter/ArticleCenterScreen';
import ArticleSortScreen from '../../screens/centers/articleCenter/ArticleSortScreen';

export default function ArticleCenterSortDrawerNavigation() {
  const Drawer = createDrawerNavigator();

  return (

      <Drawer.Navigator
        initialRouteName="BookCenter"
        drawerContent={(props) => <ArticleCenterDrawerScreen {...props} />}>
        <Drawer.Screen name="ArticleCenter" component={ArticleCenterScreen} />
        <Drawer.Screen name="ArticleCenterSort" component={ArticleSortScreen} />
      </Drawer.Navigator>
  );
}
