import {Box, Image, StatusBar} from 'native-base';
import React from 'react';
import {images} from '../../../constants';

const Welcome = () => {
  return (
    <Box height="100%" width="100%">
      <StatusBar barStyle={'light-content'} />
      <Image
        height={'100%'}
        width={'100%'}
        alt={'splash'}
        source={images.splash_img}
      />
      <Box height={'100%'} safeAreaY width="100%" position={'absolute'} />
    </Box>
  );
};

export default Welcome;
