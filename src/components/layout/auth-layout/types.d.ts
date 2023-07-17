import { FC } from "react";
import { GestureResponderEvent } from "react-native";
import React from 'react';

export interface IAuthLayout {
  footer?: JSX.Element;
  children?: React.ReactElement[] | JSX.Element[];
}
