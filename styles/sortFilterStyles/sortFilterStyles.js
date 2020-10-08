import React, {Component, useState} from 'react';
import { StyleSheet} from 'react-native';
import { whiteBackground } from '../colors';

export const sortFilterStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: whiteBackground,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',

  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 18,
  },

  sortGroup: {
    alignItems: 'center',
    width: '100%',
    height: 100,
    justifyContent: 'space-evenly',
  },
  sortTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  groupOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
});