import {ArrowForwardIcon, Box, IconButton, Image, StatusBar} from 'native-base';
import React from 'react';
import {images, screens} from '../../../constants';

const Welcome = (props: any) => {
  const {navigation} = props;

  const onNavigate = () => {
    navigation.navigate(screens.Login);
  };

  return (
    <Box height="100%" width="100%">
      <StatusBar barStyle={'light-content'} />
      <Image
        height={'100%'}
        width={'100%'}
        alt={'splash'}
        source={images.splash_img}
      />
      <Box
        height={'100%'}
        justifyContent={'flex-end'}
        alignItems={'center'}
        safeAreaY
        width="100%"
        position={'absolute'}>
        <IconButton
          backgroundColor={'#0F2432'}
          borderRadius={30}
          variant={'solid'}
          height={50}
          width={50}
          onPress={onNavigate}
          mb={6}>
          <ArrowForwardIcon size={5} color={'white'} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Welcome;
