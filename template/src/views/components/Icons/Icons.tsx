import React from 'react';

import VectorIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size?: IconSizeProps['iconSizes'] | number;
  name?: string;
  color?: string;
  backgroundColor?: string;
}

export interface IconButtonProps extends IconProps {
  onPress?: () => void;
  children?: JSX.Element;
}

const IconSizes = {
  small: 18,
  medium: 28,
  large: 32,
  extraLarge: 38,
};

export const Icon = ({ size = 'medium', name = 'question', color }: IconProps) => {
  const { colors } = useAppTheme(_styles);
  return (
    <VectorIcons
      name={name}
      size={typeof size === 'number' ? size : IconSizes[size]}
      color={color || colors.icon.primary}
    />
  );
};

const _styles = createStyles(theme => ({
  icon: { color: theme.colors.icon.accent },
}));
