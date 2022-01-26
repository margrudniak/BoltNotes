import AsyncStorage from '@react-native-async-storage/async-storage';
import {getFormatedDate} from '../../utils';

export const saveOrPush = async (value: string) => {
  try {
    await AsyncStorage.getItem(
      getFormatedDate(new Date()),
      async (err, result) => {
        try {
          if (result !== null) {
            console.log('Data Found', result);
            const newIds = JSON.parse(result!).concat(value);
            AsyncStorage.setItem(
              getFormatedDate(new Date()),
              JSON.stringify(newIds),
            );
          } else {
            console.log('Data Not Found');
            await AsyncStorage.setItem(
              getFormatedDate(new Date()),
              JSON.stringify(value),
            );
          }
        } catch (e) {
          console.log('err', err);
        }
      },
    );
  } catch (e) {
    console.log('error', e);
  }
};
