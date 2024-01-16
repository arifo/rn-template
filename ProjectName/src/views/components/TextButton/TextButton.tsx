import React from 'react';

import { Pressable, StyleSheet } from 'react-native';

import { RNText } from '../RNText';

type Props = {
  text: string;
  onPress?: () => void;
};

export const TextButton: React.FC<Props> = ({ onPress, text }) => (
  <Pressable onPress={onPress}>
    <RNText style={styles.text}>{text}</RNText>
  </Pressable>
);

const styles = StyleSheet.create({
  text: { color: 'blue', fontSize: 14, fontWeight: '500' },
});
