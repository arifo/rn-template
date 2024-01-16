import React from 'react';

import { Pressable, View, ViewStyle } from 'react-native';

import { getDebugStyle } from 'components/uiKit/utils.ts';
import { createStyles, useAppTheme } from 'theme';

import { Icon } from 'views/components';

import { RNText } from '../../../RNText';

type Props = {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
  debug?: boolean;
};

export const ListItemCompact = ({ label, onPress, debug, style }: Props) => {
  const { styles, theme } = useAppTheme(_styles);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        debug && getDebugStyle(theme),
        style,
        pressed && styles.pressed,
      ]}>
      <RNText typeScale={'common_button'}>{label}</RNText>
      <Icon name={'chevron-right'} />
    </Pressable>
  );
};

const _styles = createStyles(theme => ({
  container: {
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.s,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressed: { backgroundColor: theme.colors.background.secondaryAlpha },
}));
