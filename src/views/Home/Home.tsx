import React from 'react';
import {View} from 'react-native';

export interface HomeScreenProps {}

export const HomeScreen = ({message}: HomeScreenProps) => {
  return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
};
