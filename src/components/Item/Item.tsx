import React from 'react';
import {Alert, GestureResponderEvent, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './Item.style';
export interface ItemProps {
  title: string;
  onDelete: (event: GestureResponderEvent) => void;
}

export const Item = ({title, onDelete}: ItemProps) => {
  const handleDelete = (event: GestureResponderEvent) =>
    Alert.alert(`Czy na pewno chcesz usunąć element ${title}`, '', [
      {
        text: 'Anuluj',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => onDelete(event)},
    ]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
      <Icon
        size={30}
        name="delete"
        color={'black'}
        onPress={handleDelete}
        style={styles.iconDelete}
      />
    </View>
  );
};
