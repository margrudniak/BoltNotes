import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {StatusBar, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {DateBar, Header, Modal} from '../../components';

export interface HomeScreenProps {}

export const HomeScreen = ({message}: HomeScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {dark, colors} = useTheme();
  const {bottom, right} = useSafeAreaInsets();
  useEffect(() => console.log(modalVisible), [modalVisible]);
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <Header onPressNote={setModalVisible} />
      <DateBar />
      <Icon
        size={60}
        name="add-circle"
        color={colors.primary}
        onPress={() => console.log('clicked add')}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginBottom: bottom,
          marginRight: right,
        }}
      />
      <Modal {...{modalVisible, setModalVisible}} />
    </SafeAreaView>
  );
};
