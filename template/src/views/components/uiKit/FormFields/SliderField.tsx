import React, { useState } from 'react';

import Slider from '@react-native-community/slider';
import { View } from 'react-native';

import { RNText } from 'views/components';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

type Props = {
  label?: string;
  value?: number;
  onValueChange?: (value: number) => void;
};

export const SliderField = ({ label, value, onValueChange }: Props) => {
  const { styles, theme } = useAppTheme(_styles);
  const [state, setState] = useState(10);
  const sliderValue = value || state;
  const setSliderValue = onValueChange || setState;
  return (
    <View style={styles.container}>
      <RNText typeScale={'form_label'}>{label}</RNText>
      <Slider
        tapToSeek
        step={1}
        minimumValue={6}
        maximumValue={32}
        value={sliderValue}
        onValueChange={setSliderValue}
        maximumTrackTintColor={theme.colors.other.trackBackground}
        minimumTrackTintColor={theme.colors.other.trackBufferAccent}
        style={styles.slider}
      />
    </View>
  );
};

const _styles = createStyles(theme => ({
  container: {
    marginBottom: theme.layout.gap(),
  },
  slider: { width: '100%', height: theme.layout.scale(40) },
}));
