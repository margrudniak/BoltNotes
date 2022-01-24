import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  Modal as NativeModal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button} from '..';
import {checkIfExceeded, getDimensions} from '../../utils';

export interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({modalVisible, setModalVisible}: ModalProps) => {
  const [text, setText] = useState('');
  const {dark} = useTheme();
  const {width} = getDimensions('window');
  const refInput = useRef<TextInput>(null);
  const maxLength = 130;

  const onDismissModal = () => {
    setModalVisible(false);
    setText('');
  };

  const changeColor = () =>
    checkIfExceeded(text.length, maxLength) ? 'red' : 'black';

  return (
    <View>
      <NativeModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onDismissModal}>
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={onDismissModal}
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
            <TextInput
              ref={refInput}
              onLayout={() => refInput?.current?.focus()}
              multiline
              maxLength={maxLength}
              onChangeText={setText}
              value={text}
              style={{
                margin: 10,
                padding: 10,
                borderColor: changeColor(),
                borderWidth: 2,
                borderRadius: 10,
                width: 0.8 * width,
                height: 100,
              }}
            />
            <Text
              style={{
                color: changeColor(),
                alignSelf: 'flex-end',
                padding: 5,
              }}>{`${text.length} / ${maxLength}`}</Text>
            <Button
              text="ZAPISZ"
              onPress={onDismissModal}
              style={{height: 40}}
            />
          </View>
        </TouchableOpacity>
      </NativeModal>
    </View>
  );
};
