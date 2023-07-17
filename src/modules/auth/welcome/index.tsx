import { View } from "native-base";
import React, { FC } from "react";

interface ITypes {
  info: string
}

const Welcome = (): React.ReactElement<ITypes> =>{
  return <View height="100%" width='100%' backgroundColor="cyan.800">

  </View>
}

export default Welcome;