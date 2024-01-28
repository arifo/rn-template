import React, { PropsWithChildren } from 'react';

import { Animated, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  AnimatedScrollView,
  useScrollY,
} from 'components/AnimatedScrollView/AnimatedScrollView.tsx';
import { RNText } from 'views/components';
import { Header, HeaderProps } from 'views/components/uiKit';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

type Props = PropsWithChildren<{
  containerStyles?: ViewStyle;
  style?: ViewStyle;
  title?: string;
  headerProps?: Omit<HeaderProps, 'animatedValue'>;
}>;

export const MainContainerView = ({
  children,
  containerStyles,
  style,
  title,
  headerProps,
}: Props) => {
  const { styles } = useAppTheme(_styles);
  const scrollY = useScrollY();
  const [width, setWidth] = React.useState(0);

  const titleScale = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [1.4, 1],
    extrapolate: 'clamp',
  });
  const translateX = scrollY.interpolate({
    inputRange: [-200, 0],
    outputRange: [width / 6, 0],
    extrapolate: 'clamp',
  });

  const headerProp: HeaderProps = {
    title,
    ...headerProps,
    animatedValue: scrollY,
  };

  return (
    <SafeAreaView edges={['top']} style={[styles.container, containerStyles]}>
      <Header {...headerProp} />
      <AnimatedScrollView animatedValue={scrollY} style={[styles.contentContainer, style]}>
        <Animated.View
          onLayout={e => {
            setWidth(e.nativeEvent.layout.width);
          }}
          style={[styles.heading, { transform: [{ scale: titleScale }, { translateX }] }]}>
          <RNText typeScale={'heading_1'}>{headerProp.title}</RNText>
        </Animated.View>
        {children}
      </AnimatedScrollView>
    </SafeAreaView>
  );
};

const _styles = createStyles(theme => ({
  container: { flex: 1, backgroundColor: theme.colors.background.primary },
  contentContainer: { paddingHorizontal: theme.spacing.m },
  heading: { marginBottom: theme.spacing.l, alignSelf: 'flex-start' },
}));
