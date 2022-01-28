import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export interface Styles {
  wrapper: ViewStyle;
  container: ViewStyle;
  inputContainer: ViewStyle;
  text: TextStyle;
  saveButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  inputContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    height: 150,
  },
  text: {
    alignSelf: 'flex-end',
    padding: 5,
  },
  saveButton: {
    height: 40,
  },
});

export default styles;
