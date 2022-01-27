import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {DateBar, Header, Item, Modal, VoiceRecord} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {containsObject, objMap} from '../../utils';
import {deleteItem, getAll} from '../../services/asyncStorage';

export interface itemType {
  [key: string]: string[];
}

export interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  const [render, setRender] = useState(false);
  const [values, setValues] = useState<itemType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [voiceRecord, setVoiceRecord] = useState(false);
  const {dark, colors} = useTheme();
  const {bottom, right} = useSafeAreaInsets();

  useEffect(() => {
    setValues([]);
    getAll((e: {[x: string]: string[]}) => {
      setValues(prev => [...prev, e]);
    });
  }, [render]);

  const onSaveData = () => setRender(prev => !prev);

  const handleDelete = async (keyOfDate: string, id: number) =>
    deleteItem(keyOfDate, id, () => onSaveData());

  const renderContent = () => {
    const renderContentItems: JSX.Element[] = [];
    values.map((e, i) => {
      Object.values(e)[0].length !== 0 &&
        renderContentItems.push(
          <DateBar key={`${e}${i}`} date={Object.keys(e).toString()} />,
        );
      objMap(e, (el: string[]) =>
        el.map((ele, it) => {
          renderContentItems.push(
            <Item
              key={`${ele}${it}`}
              title={ele + ''}
              onDelete={() => handleDelete(Object.keys(e).toString(), it)}
            />,
          );
        }),
      );
    });
    return renderContentItems;
  };

  return (
    <>
      <SafeAreaView
        edges={['top', 'left', 'right']}
        style={{flex: 1, backgroundColor: colors.background}}>
        <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
        <Header onPressNote={setModalVisible} />
        {renderContent()}
        <Icon
          size={60}
          name="add-circle"
          color={'red'}
          onPress={async () => {
            let test = await AsyncStorage.clear();
            console.log(test);
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            marginBottom: bottom,
            marginRight: right,
          }}
        />
        <Icon
          size={60}
          name="add-circle"
          color={colors.primary}
          onPress={() => setVoiceRecord(true)}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            marginBottom: bottom,
            marginRight: right,
          }}
        />
        <Modal {...{modalVisible, setModalVisible, onSaveData}} />
      </SafeAreaView>
      {voiceRecord && <VoiceRecord />}
    </>
  );
};
