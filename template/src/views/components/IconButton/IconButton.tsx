import React from 'react';

import { Pressable, ViewStyle } from 'react-native';

import { Icon, IconProps } from '../Icons';

type IconButtonProps = {
  onPress?: () => void;
  style?: ViewStyle;
} & IconProps;

export const IconButton: React.FC<IconButtonProps> = ({ onPress, style, ...iconProps }) => (
  <Pressable onPress={onPress} style={style}>
    <Icon {...iconProps} />
  </Pressable>
);
