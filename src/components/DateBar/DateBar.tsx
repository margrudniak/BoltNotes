import React from 'react';
import {Text, View} from 'react-native';

export interface DateBarProps {
  date: string;
}

export const DateBar = ({date}: DateBarProps) => {
  return (
    <View
      style={{
        backgroundColor: 'grey',
        padding: 10,
      }}>
      <Text>{date}</Text>
    </View>
  );
};
