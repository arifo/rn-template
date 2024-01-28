import React from 'react';

import { Switch, View } from 'react-native';

import { RNText } from 'views/components';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

type Props = {
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
};

export const SwitchField = ({ label, value, onValueChange }: Props) => {
  const { styles, theme } = useAppTheme(_styles);
  return (
    <View style={styles.container}>
      <RNText typeScale={'form_label'}>{label}</RNText>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: theme.colors.other.trackBackground,
          true: theme.colors.other.trackBufferAccent,
        }}
      />
    </View>
  );
};

const _styles = createStyles(theme => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: theme.layout.scale(44),
    marginBottom: theme.layout.gap(),
  },
}));
