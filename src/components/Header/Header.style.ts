import {StyleSheet, ViewStyle} from 'react-native';

export interface Styles {
  wrapper: ViewStyle;
  noteButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  noteButton: {
    padding: 0,
  },
});

export default styles;
