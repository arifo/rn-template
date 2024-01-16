import React from 'react';

import { Pressable, Text, PressableProps, StyleProp, ViewStyle } from 'react-native';

type Props = {
  children: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;

export const AccentButton: React.FC<Props> = ({ children, style, ...rest }) => (
  <Pressable
    {...rest}
    style={({ pressed }) => [
      {
        opacity: pressed ? 0.5 : 1,
        height: 55,
        width: '50%',
        borderRadius: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      },
      style,
    ]}>
    <Text>{children}</Text>
  </Pressable>
);
