import React from 'react';

import { View, ViewStyle } from 'react-native';

import { getDebugStyle } from 'components/uiKit/utils.ts';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

import { RNText } from '../../RNText';

export const SimpleListHeading = ({
  label,
  style,
  debug,
}: {
  label: string;
  style?: ViewStyle;
  debug?: boolean;
}) => {
  const { styles, theme } = useAppTheme(_styles);
  return (
    <View style={[styles.container, debug && getDebugStyle(theme), style]}>
      <RNText typeScale={'heading_3'}>{label}</RNText>
    </View>
  );
};

const _styles = createStyles(theme => ({
  container: {
    paddingHorizontal: theme.spacing.s,
    paddingBottom: theme.spacing.s,
    paddingTop: theme.spacing.l,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
