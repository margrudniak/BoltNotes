import React from 'react';
import {Text, View} from 'react-native';
import styles from './DateBar.style';
export interface DateBarProps {
  date: string;
}

export const DateBar = ({date}: DateBarProps) => {
  return (
    <View style={styles.container}>
      <Text>{date}</Text>
    </View>
  );
};
