import React from 'react';

import { Animated, RefreshControl, ScrollView, ScrollViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from 'views/contexts/ThemeContext';

type AnimatedScrollViewProps = ScrollViewProps & {
  animatedValue?: Animated.Value;
  onRefresh?: () => void;
};

export const AnimatedScrollView = React.forwardRef<ScrollView, AnimatedScrollViewProps>(
  ({ animatedValue, onRefresh, ...props }: AnimatedScrollViewProps, ref) => {
    const { theme } = useAppTheme(null);
    const scrollY = useScrollY(animatedValue);
    const insets = useSafeAreaInsets();
    const [refreshing, setRefreshing] = React.useState(false);

    const handleRefresh = () => {
      try {
        setRefreshing(true);
        onRefresh && onRefresh();
      } catch (error) {
        console.log(error);
      } finally {
        setRefreshing(false);
      }
    };

    return (
      <Animated.ScrollView
        ref={ref}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        contentContainerStyle={[
          { paddingBottom: insets.bottom + theme.spacing.l, flexGrow: 1 },
          props.contentContainerStyle,
        ]}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
        {...props}
      />
    );
  },
);

export const useScrollY = (animatedValue?: Animated.Value) => {
  const fallbackValue = React.useRef(new Animated.Value(0)).current;
  const scrollY = animatedValue || fallbackValue;
  return scrollY;
};
