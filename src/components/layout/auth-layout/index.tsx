import React from 'react';
import {Box, Flex, HStack, Pressable, StatusBar, Text} from 'native-base';
import {IAuthLayout} from './types';
import {FC} from 'react';
import {Svgs} from '../../../constants';
import {styles} from './styles';

const AuthLayout: FC<IAuthLayout> = (props: IAuthLayout) => {
  const {footer, children} = props;

  const onBack = () => {};

  return (
    <Box safeArea height={'100%'} width={'100%'}>
      <StatusBar barStyle={'dark-content'} />
      <HStack
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        style={styles.view}>
        <Pressable
          position={'absolute'}
          left={0}
          style={styles.btn}
          onPress={onBack}>
          <Svgs.BackIcon />
        </Pressable>
        <Text
          fontFamily={'body'}
          fontWeight={'700'}
          color={'black'}
          fontSize={16}>
          Contacts
        </Text>
      </HStack>
      <Flex flex={1}>{children}</Flex>
      {footer}
    </Box>
  );
};

export default AuthLayout;
