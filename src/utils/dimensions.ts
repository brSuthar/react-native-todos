import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const getHeight = (h: number) => {
  return `${(100 / height) * h}%`;
};

const getWidth = (h: number) => {
  return `${(100 / width) * h}%`;
};

export {width, height, getHeight, getWidth};
