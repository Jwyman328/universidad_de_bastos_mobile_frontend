import React, {useReducer} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ArticleCenterDrawerScreen} from './ArticleCenterDrawerScreen';
import ArticleCenterScreen from '../../screens/centers/articleCenter/ArticleCenterScreen';
import ArticleSortScreen from '../../screens/centers/articleCenter/ArticleSortScreen';
// import { BookCenterDrawerScreen } from './BookCenterDrawerScreen';

// import BookCenterScreen from '../../screens/centers/bookCenter/BookCenterScreen'
// import BookSortScreen from '../../screens/centers/bookCenter/BookSortScreen';
import {articleCenterSortReducer} from '../../reducers/centers/sortReducers/articleCenterSortReducer';
import ArticleCenterContext from '../../data/centers/articlesCenter/articleCenterContext';

export default function ArticleCenterSortDrawerNavigation() {
  const Drawer = createDrawerNavigator();
  const articleCenterInitialState = {fecha: 'Nuevo'};

  const [articleCenterState, articleCenterDispatch] = useReducer(
    articleCenterSortReducer,
    articleCenterInitialState,
  );
  return (
    <ArticleCenterContext.Provider
      value={{articleCenterState, articleCenterDispatch}}>
      <Drawer.Navigator
        initialRouteName="BookCenter"
        drawerContent={(props) => <ArticleCenterDrawerScreen {...props} />}>
        <Drawer.Screen name="ArticleCenter" component={ArticleCenterScreen} />
        <Drawer.Screen name="ArticleCenterSort" component={ArticleSortScreen} />
      </Drawer.Navigator>
    </ArticleCenterContext.Provider>
  );
}
