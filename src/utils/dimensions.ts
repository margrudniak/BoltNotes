import {Dimensions} from 'react-native';

export const getDimensions = (type: 'screen' | 'window') => {
  const {width, height} = Dimensions.get(type);
  return {width, height};
};
