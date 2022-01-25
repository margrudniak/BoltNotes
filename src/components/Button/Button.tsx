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
  disabled: boolean;
  onPress: (event: GestureResponderEvent) => void;
  text: string;
  textColor?: string;
}

export const Button = ({
  style,
  onPress,
  disabled,
  text,
  textColor = 'black',
}: ButtonProps) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      {...{onPress, disabled}}
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: disabled ? 'grey' : colors.primary,
          borderWidth: 3,
          borderRadius: 10,
          backgroundColor: disabled ? 'grey' : colors.primary,
        },
        style,
      ]}>
      <Text style={{color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
};
