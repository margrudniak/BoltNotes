import AsyncStorage from '@react-native-async-storage/async-storage';

export const deleteItem = async (
  keyOfDate: string,
  id: number,
  cb: () => void,
) => {
  try {
    const notes = await AsyncStorage.getItem(keyOfDate);
    let tempNotes = JSON.parse(notes!);
    tempNotes.splice(id, 1);
    await AsyncStorage.setItem(keyOfDate, JSON.stringify(tempNotes));
    cb();
  } catch (error) {
    console.error('Error in catch ', {error});
  }
};
