import { Box, Flex, Text } from "native-base"
import { IAuthLayout } from './types';
import { FC } from "react";
import { Pressable } from "react-native";
import { BackIcon } from "../../../constants/images";
import { useNavigation } from "@react-navigation/native";

const AuthLayout: FC<IAuthLayout> = (props: IAuthLayout) => {
  const { footer, children } = props;
  const navigation = useNavigation();

  const onBack = () =>{

  }

  return <Box safeAreaY safeAreaX height={'100%'} width={'100%'}>
    <Pressable onPress={onBack}>
      <BackIcon/>
    </Pressable>
    <Flex flex={1}>
      {children}
    </Flex>
    {footer}
  </Box>
}

export default AuthLayout;