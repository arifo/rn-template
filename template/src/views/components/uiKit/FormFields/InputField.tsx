import React, { useState } from 'react';

import { TextInputProps, View } from 'react-native';
import { TextInput as GestureHandlerTextInput } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';

import { FontFamily } from 'components/RNText/typography.ts';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

import { RNText } from '../../RNText';

type InputFormProps = TextInputProps & {
  label: string;
  trailing?: React.ReactNode;
};

const withSpringConfig = {
  stiffness: 100,
  damping: 10,
};

const AnimatedTextInput = Animated.createAnimatedComponent(GestureHandlerTextInput);
const AnimateText = Animated.createAnimatedComponent(RNText);

export const InputField = ({ label, placeholder, trailing, ...props }: InputFormProps) => {
  const { styles, theme } = useAppTheme(_styles);
  const colors = theme.colors;

  const [focused, setFocused] = useState(false);
  const [trailingWidth, setTrailing] = useState(0);
  const isFocused = useSharedValue(false);
  const labelPosOnFocused = useSharedValue({ x: 0, y: 0 });
  const labelPosInitial = useSharedValue({ x: 0, y: 0 });
  const inputBackgroundColor = useSharedValue('transparent');
  const borderBottomColor = useSharedValue(colors.stroke.fieldBorderEnabled);
  const borderBottomWidth = useSharedValue(1);

  const handleFocus = () => {
    borderBottomColor.value = withSpring(colors.text.accent, withSpringConfig);
    borderBottomWidth.value = withSpring(2, withSpringConfig);
    inputBackgroundColor.value = withSpring(colors.background.secondary, withSpringConfig);
    isFocused.value = true;
    setFocused(true);
  };

  const handleBlur = () => {
    borderBottomColor.value = withSpring(colors.stroke.fieldBorderEnabled, withSpringConfig);
    borderBottomWidth.value = withSpring(1, withSpringConfig);
    inputBackgroundColor.value = withSpring('transparent', withSpringConfig);
    isFocused.value = false;
    setFocused(false);
  };

  const animatedLabelViewStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    top: withTiming(
      isFocused.value || !!props.value ? labelPosOnFocused.value.y : labelPosInitial.value.y,
    ),
    left: withTiming(
      isFocused.value || !!props.value ? labelPosOnFocused.value.x : labelPosInitial.value.x,
    ),
  }));
  const animatedLabelStyle = useAnimatedStyle(() => ({
    fontSize: withTiming(isFocused.value || !!props.value ? 12 : 16),
    color: withTiming(
      isFocused.value
        ? colors.text.accent
        : !props.value
          ? colors.text.primary
          : colors.text.secondary,
    ),
  }));
  const animatedInputStyle = useAnimatedStyle(() => ({
    borderBottomColor: borderBottomColor.value,
    borderBottomWidth: borderBottomWidth.value,
    // backgroundColor: inputBackgroundColor.value,
  }));

  return (
    <View style={styles.container}>
      <RNText
        onLayout={({ nativeEvent: { layout } }) => {
          labelPosOnFocused.value = { x: layout.x, y: layout.y };
        }}
        typeScale={'form_label'}>
        {' '}
      </RNText>
      <Animated.View
        onLayout={({ nativeEvent: { layout } }) => {
          labelPosInitial.value = { x: layout.x + 8, y: layout.height - layout.y / 2 };
        }}
        style={[styles.inputWrapper, animatedInputStyle]}>
        <AnimatedTextInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={focused ? placeholder : ''}
          placeholderTextColor={theme.colors.text.muted}
          style={[styles.input, { paddingRight: trailingWidth + 8 }]}
          {...props}
        />

        <View
          onLayout={({ nativeEvent }) => {
            setTrailing(nativeEvent.layout.width);
          }}
          style={styles.trailingView}>
          {trailing}
        </View>
      </Animated.View>
      <Animated.View pointerEvents={'none'} style={[animatedLabelViewStyle]}>
        <AnimateText typeScale={'form_label'} style={[animatedLabelStyle]}>
          {label}
        </AnimateText>
      </Animated.View>
    </View>
  );
};

const _styles = createStyles(theme => ({
  container: {
    width: '100%',
    marginBottom: theme.layout.gap(),
  },
  inputWrapper: {
    width: '100%',
    height: theme.layout.scale(44),
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingLeft: theme.layout.gap(),
    fontSize: theme.layout.scale(18),
    color: theme.colors.text.primary,
    fontFamily: FontFamily.regular,
  },
  trailingView: { position: 'absolute', right: 0, top: 0, bottom: 0 },
}));
