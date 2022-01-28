import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface Styles {
  wrapper: ViewStyle;
  text: TextStyle;
  iconDelete: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    flex: 6,
  },
  iconDelete: {
    padding: 5,
    paddingLeft: 10,
  },
});

export default styles;
