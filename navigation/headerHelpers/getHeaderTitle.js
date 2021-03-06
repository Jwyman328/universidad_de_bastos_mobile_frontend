import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import CenterSortHeader from '../../components/headers/CenterSortHeader';
import React, {Component, useContext, useState} from 'react';

export function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Video Center':
      return <CenterSortHeader/>;
    case 'Book Center':
      return 'Book Center';
    case 'Article Center':
      return 'Article Center';
  }
}