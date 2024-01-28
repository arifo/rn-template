import React from 'react';

import { View, StyleSheet, Pressable } from 'react-native';

import { s } from 'utils/scaler';
import { Icon, RNText } from 'views/components';
import { useAppTheme } from 'views/contexts/ThemeContext';

const SIZE = 75;

export const FloatingActionButton = ({ onPress }: { onPress: () => void }) => {
  const { theme } = useAppTheme(null);
  return (
    <View pointerEvents={'box-none'} style={{ ...StyleSheet.absoluteFillObject }}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            borderRadius: s(10),
            paddingHorizontal: s(16),
            paddingVertical: s(8),
            backgroundColor: theme.colors.background.accent,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: theme.spacing.xl,
            right: theme.spacing.m,
            flexDirection: 'row',
            opacity: pressed ? 0.9 : 1,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}>
        <Icon name={'plus'} size={'medium'} color={theme.colors.icon.contrast} />
        <RNText typeScale={'primary_button'} color={theme.colors.text.contrast}>
          Add
        </RNText>
      </Pressable>
    </View>
  );
};
