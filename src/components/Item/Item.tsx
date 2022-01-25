import React from 'react';
import {Text, View} from 'react-native';

export interface ItemProps {
  title: string;
}

export const Item = ({title}: ItemProps) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 10,
      }}>
      <Text>{title}</Text>
    </View>
  );
};
