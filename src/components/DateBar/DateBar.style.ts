import {StyleSheet, ViewStyle} from 'react-native';

export interface Styles {
  container: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: 'grey',
    padding: 10,
  },
});

export default styles;
