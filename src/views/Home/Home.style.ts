import {StyleSheet, ViewStyle} from 'react-native';

export interface Styles {
  wrapper: ViewStyle;
  addButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default styles;
