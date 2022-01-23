import React from 'react';
import {Text, View} from 'react-native';

export interface DateBarProps {}

export const DateBar = ({message}: DateBarProps) => {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        padding: 10,
      }}>
      <Text>{'24 stycznia 2022'}</Text>
    </View>
  );
};
