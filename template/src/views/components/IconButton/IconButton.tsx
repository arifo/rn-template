import React from 'react';

import { TouchableOpacity, ViewStyle } from 'react-native';

import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

import { Icon, IconProps } from '../Icons';

type IconButtonProps = {
  onPress?: () => void;
  style?: ViewStyle;
} & IconProps;

const SIZE = 36;

export const IconButton: React.FC<IconButtonProps> = ({ onPress, style, ...iconProps }) => {
  const { styles } = useAppTheme(_styles);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Icon size={'large'} {...iconProps} />
    </TouchableOpacity>
  );
};

const _styles = createStyles(theme => ({
  button: {
    width: theme.layout.scale(SIZE),
    height: theme.layout.scale(SIZE),
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
