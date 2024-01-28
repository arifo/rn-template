import React from 'react';

import { Pressable, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

import { useAppTheme } from 'views/contexts/ThemeContext';

import { RNText } from '../RNText';

type Props = {
  children: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export const TextButton: React.FC<Props> = ({ style, onPress, children }) => {
  const { theme } = useAppTheme(null);
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <RNText typeScale={'primary_button'} color={theme.colors.text.textLink}>
        {children}
      </RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: { color: 'blue', fontSize: 14, fontWeight: '500' },
});
