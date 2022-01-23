import {useTheme} from '@react-navigation/native';
import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

export interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  textColor?: string;
}

export const Button = ({onPress, text, textColor = 'black'}: ButtonProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      {...{onPress}}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.primary,
        borderWidth: 3,
        borderRadius: 10,
        backgroundColor: colors.primary,
      }}>
      <Text style={{color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
};
