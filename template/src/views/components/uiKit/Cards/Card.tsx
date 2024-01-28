import React from 'react';

import { View, ViewProps } from 'react-native';

import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

export const Card = ({ children, style, ...props }: ViewProps) => {
  const { styles } = useAppTheme(_styles);
  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const _styles = createStyles(theme => ({
  card: {
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
    backgroundColor: theme.colors.background.cardPrimary,
    borderRadius: theme.layout.borderRadius.main,
  },
}));
