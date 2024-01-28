import React from 'react';

import { View } from 'react-native';

import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

export const Separator = ({ hide }: { hide?: boolean }) => {
  const { styles } = useAppTheme(_styles);
  return <View style={[styles.line, hide && { opacity: 0 }]} />;
};

const _styles = createStyles(theme => ({
  line: {
    backgroundColor: theme.colors.stroke.separatorPrimary,
    height: 1,
    width: '100%',
    marginLeft: theme.spacing.s,
  },
}));
