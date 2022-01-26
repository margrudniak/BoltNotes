import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAll = (cb1: Function) => {
  AsyncStorage.getAllKeys((error?: Error, keys?: string[]) => {
    keys?.map(e => {
      AsyncStorage.getItem(e, (errorItem?: Error, result?: string) => {
        try {
          const valueArr = JSON.parse(result!);
          const value = {[e]: valueArr};
          cb1(value);
        } catch (err) {
          console.error('Error getAll', errorItem);
        }
      });
    });
  });
};
