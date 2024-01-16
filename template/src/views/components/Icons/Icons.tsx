import React from 'react';

import VectorIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStyles, useAppTheme } from 'theme';

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size?: IconSizeProps['iconSizes'];
  name: string;
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

export const Icon = ({ size = 'medium', name, color }: IconProps) => {
  const { colors } = useAppTheme(_styles);
  return <VectorIcons name={name} size={IconSizes[size]} color={color || colors.icon.accent} />;
};

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  size = 'medium',
  color,
  onPress,
  children,
}) => {
  const { colors } = useAppTheme(_styles);
  return (
    <VectorIcons.Button
      name={name}
      size={IconSizes[size]}
      color={color || colors.icon.accent}
      onPress={onPress}>
      {children}
    </VectorIcons.Button>
  );
};

const _styles = createStyles(theme => ({
  icon: { color: theme.colors.icon.accent },
}));
