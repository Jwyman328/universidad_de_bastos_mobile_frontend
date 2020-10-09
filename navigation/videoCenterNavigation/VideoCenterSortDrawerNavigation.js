import React, {useReducer} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import VideoCenterStackNavigation from './VideoCenterStackNavigation';
import VideoSortScreen from '../../screens/centers/videoCenter/VideoSortScreen';
import {drawerStyles} from './styles/drawerStyle';
import {VideoCenterDrawerScreen} from './VideoCenterDrawerScreen';
import {videoSortReducer} from '../../reducers/centers/sortReducers/videoCenterSortReducer';
import VideoCenterContext from '../../data/centers/videoCenter/videoCenterContext';
const Drawer = createDrawerNavigator();

export default function VideoCenterSortDrawerNavigation() {
  const initialSortFilterState = {
    institution: 'Todos',
    tipo: 'Todos',
    mirado: 'Todos',
    fecha: 'Todos',
  };

  const [sortFilterState, dispatchSortFilter] = useReducer(
    videoSortReducer,
    initialSortFilterState,
  );

  const videoContextData = {
    videoCenterState: sortFilterState,
    videoCenterDispatch: dispatchSortFilter,
  };
  return (
    <VideoCenterContext.Provider value={videoContextData}>
      <Drawer.Navigator
        initialRouteName="VideoCenter"
        drawerStyle={drawerStyles.drawerStyle}
        drawerContent={(props) => <VideoCenterDrawerScreen {...props} />}>
        <Drawer.Screen
          name="VideoCenter"
          component={VideoCenterStackNavigation}
        />
        <Drawer.Screen
          name="VideoCenterSortSettings"
          component={VideoSortScreen}
        />
      </Drawer.Navigator>
    </VideoCenterContext.Provider>
  );
}
