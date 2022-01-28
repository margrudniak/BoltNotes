import React from 'react';
import {Alert, GestureResponderEvent, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
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
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <Text style={{flex: 6}}>{title}</Text>
      <Icon
        size={30}
        name="delete"
        color={'black'}
        onPress={handleDelete}
        style={{
          padding: 5,
          paddingLeft: 10,
        }}
      />
    </View>
  );
};
