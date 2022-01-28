import {StyleSheet, ViewStyle} from 'react-native';

export interface Styles {
  wrapper: ViewStyle;
  alignSelf: ViewStyle;
  groupButtons: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
  },
  alignSelf: {
    alignSelf: 'center',
  },
  groupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
