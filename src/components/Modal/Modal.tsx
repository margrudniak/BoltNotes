import {useTheme} from '@react-navigation/native';
import React, {Dispatch, SetStateAction} from 'react';
import {
  Modal as NativeModal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '..';

export interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({modalVisible, setModalVisible}: ModalProps) => {
  const [text, onChangeText] = React.useState('');
  const {dark} = useTheme();
  return (
    <View>
      <NativeModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              borderColor: 'black',
              padding: 10,
              borderWidth: 2,
              borderRadius: 10,
              shadowColor: dark ? 'white' : 'black',
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.37,
              shadowRadius: 7.49,

              elevation: 12,
            }}>
            <Text>{'Nowa notatka'}</Text>
            <TextInput onChangeText={onChangeText} value={text} />
            <Button text="ZAPISZ" onPress={() => setModalVisible(false)} />
          </View>
        </TouchableOpacity>
      </NativeModal>
    </View>
  );
};
