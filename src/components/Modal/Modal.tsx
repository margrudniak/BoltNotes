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
import {saveOrPush} from '../../services/asyncStorage';
import styles from './Modal.style';
export interface ModalProps {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  onSaveData: () => void;
}

export const Modal = ({
  modalVisible,
  setModalVisible,
  onSaveData,
}: ModalProps) => {
  const [text, setText] = useState('');
  const {dark} = useTheme();
  const {width} = getDimensions('window');
  const refInput = useRef<TextInput>(null);
  const maxLength = 130;

  const onDismissModal = () => {
    setModalVisible(false);
    setText('');
  };

  const onSave = async () => {
    await saveOrPush(text);
    onDismissModal();
    onSaveData();
  };

  const changeColor = () =>
    checkIfExceeded(text.length, maxLength) ? 'red' : 'black';

  const handleOnLayout = () =>
    setTimeout(() => {
      refInput?.current?.focus();
    }, 100);

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
          style={styles.wrapper}>
          <View
            style={[
              styles.container,
              {
                shadowColor: dark ? 'white' : 'black',
              },
            ]}>
            <Text>{'Nowa notatka'}</Text>
            <TextInput
              ref={refInput}
              onLayout={handleOnLayout}
              multiline
              maxLength={maxLength}
              onChangeText={setText}
              value={text}
              style={[
                styles.inputContainer,
                {
                  borderColor: changeColor(),
                  width: 0.8 * width,
                },
              ]}
            />
            <Text
              style={[
                styles.text,
                {
                  color: changeColor(),
                },
              ]}>{`${text.length} / ${maxLength}`}</Text>
            <Button
              disabled={text.length > 0 ? false : true}
              text="ZAPISZ"
              onPress={onSave}
              style={styles.saveButton}
            />
          </View>
        </TouchableOpacity>
      </NativeModal>
    </View>
  );
};
