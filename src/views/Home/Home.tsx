import React, {useEffect, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {DateBar, Header, Item, Modal} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {objMap} from '../../utils';

export interface itemType {
  [key: string]: string[];
}

export interface HomeScreenProps {}

export const HomeScreen = ({}: HomeScreenProps) => {
  const [values, setValues] = useState<itemType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const {dark, colors} = useTheme();
  const {bottom, right} = useSafeAreaInsets();

  useEffect(() => {
    AsyncStorage.getAllKeys((error?: Error, keys?: string[]) => {
      keys?.map(e => {
        AsyncStorage.getItem(e, (errorItem?: Error, result?: string) => {
          try {
            const valueArr = JSON.stringify(result)
              .replace(/"|\\/g, '')
              .split(',');
            setValues(prev => [...prev, {[e]: valueArr}]);
          } catch (err) {
            console.error('Error', errorItem);
          }
        });
      });
    });
  }, [modalVisible]);

  const renderContent = () => {
    const renderContentItems: JSX.Element[] = [];
    values.map((e, i) => {
      renderContentItems.push(
        <DateBar key={`${e}${i}`} date={Object.keys(e).toString()} />,
      );
      objMap(e, (el: string[]) =>
        el.map((ele, it) => {
          renderContentItems.push(<Item key={it} title={ele + ''} />);
        }),
      );
    });
    return renderContentItems;
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={{flex: 1, backgroundColor: colors.background}}>
      <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
      <Header onPressNote={setModalVisible} />
      {renderContent()}
      <Icon
        size={60}
        name="add-circle"
        color={colors.primary}
        onPress={async () => {
          let test = await AsyncStorage.getAllKeys();
          console.log(test);
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          marginBottom: bottom,
          marginRight: right,
        }}
      />
      <Icon
        size={60}
        name="add-circle"
        color={'green'}
        onPress={async () => {
          let test = await AsyncStorage.clear();
          console.log(test);
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 100,
          marginBottom: bottom,
          marginRight: right,
        }}
      />
      <Icon
        size={60}
        name="add-circle"
        color={'red'}
        onPress={async () =>
          await AsyncStorage.setItem(
            '@MySuperStore:key',
            JSON.stringify(['test1']),
          )
        }
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          marginBottom: bottom,
          marginRight: right,
        }}
      />
      <Modal {...{modalVisible, setModalVisible}} />
    </SafeAreaView>
  );
};
