import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styles from './Button.style';
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
        styles.container,
        {
          borderColor: disabled ? 'grey' : colors.primary,
          backgroundColor: disabled ? 'grey' : colors.primary,
        },
        style,
      ]}>
      <Text style={{color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
};
