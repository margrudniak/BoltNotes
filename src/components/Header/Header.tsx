import {useTheme} from '@react-navigation/native';
import React, {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './Header.style';
export interface HeaderProps {
  onPressNote: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({onPressNote}: HeaderProps) => {
  const {dark} = useTheme();
  return (
    <View style={styles.wrapper}>
      <Icon
        name="menu"
        size={20}
        color={dark ? 'white' : 'black'}
        onPress={() => console.log('clicked burger')}
      />
      <Icon.Button
        name="note"
        size={20}
        hitSlop={{top: 100, bottom: 200, left: 200, right: 100}}
        backgroundColor={'transparent'}
        color={dark ? 'white' : 'black'}
        onPress={() => onPressNote(true)}
        style={styles.noteButton}
      />
    </View>
  );
};
