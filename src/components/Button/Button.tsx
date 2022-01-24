import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface ButtonProps {
  style: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  textColor?: string;
}

export const Button = ({
  style,
  onPress,
  text,
  textColor = 'black',
}: ButtonProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      {...{onPress}}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.primary,
          borderWidth: 3,
          borderRadius: 10,
          backgroundColor: colors.primary,
        },
        style,
      ]}>
      <Text style={{color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
};
