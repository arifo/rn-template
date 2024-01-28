import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';

import { s } from 'utils/scaler.ts';
import { Icon, RNText } from 'views/components';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

type TrailComponent = 'label' | 'icon';
type Trailing = TrailComponent | TrailComponent[];

type LeadingComponent = 'icon' | 'label' | 'back_button';
type Leading = LeadingComponent | LeadingComponent[];

export type HeaderProps = {
  animatedValue?: Animated.Value;
  title?: string;
  leading?: Leading;
  trailing?: Trailing;
  trailingLabel?: string;
  trailingIcon?: string;
};

export const Header = ({
  title,
  leading,
  trailing,
  trailingLabel,
  trailingIcon,
  animatedValue,
}: HeaderProps) => {
  const { styles } = useAppTheme(_styles);
  const navigation = useNavigation();

  const onBackPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  const titleOpacity = animatedValue?.interpolate({
    inputRange: [0, 25, 40],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <View style={styles.leading}>{buildLeading({ leading, onBackPress })}</View>
        <Animated.View pointerEvents={'none'} style={[styles.center, { opacity: titleOpacity }]}>
          <RNText typeScale={'nav_bar_title'}>{title}</RNText>
        </Animated.View>
        <View style={styles.trailing}>
          {buildTrail({ trailing, icon: trailingIcon, label: trailingLabel })}
        </View>
      </View>
      <Animated.View style={[styles.line, { opacity: titleOpacity }]} />
    </View>
  );
};

const buildLeading = ({
  leading,
  label,
  icon,
  onBackPress,
}: {
  leading?: Leading;
  onBackPress?: () => void;
  label?: string;
  icon?: string;
}) => {
  if (!leading) {
    return null;
  }
  const getComponent = (lead: LeadingComponent) => {
    switch (lead) {
      case 'back_button':
        return (
          <TouchableOpacity key={'header-leading-back'} onPress={onBackPress} hitSlop={20}>
            <Icon name={'chevron-left'} />
          </TouchableOpacity>
        );
      case 'label':
        return (
          <RNText key={'header-leading-label'} typeScale={'common_button'}>
            {label}
          </RNText>
        );
      case 'icon':
        return <Icon key={'header-leading-icon'} name={icon} />;
    }
  };
  if (Array.isArray(leading)) {
    return leading.map(getComponent);
  }
  return getComponent(leading);
};

const buildTrail = ({
  trailing,
  label,
  icon,
  onPress,
}: {
  trailing?: Trailing;
  label?: string;
  icon?: string;
  onPress?: (trailing: TrailComponent) => void;
}) => {
  if (!trailing) {
    return null;
  }

  const handlePress = (trailing: TrailComponent) => {
    if (onPress) {
      onPress(trailing);
    }
  };

  const getComponent = (trail: TrailComponent) => {
    switch (trail) {
      case 'label':
        return (
          <TouchableOpacity onPress={() => handlePress('label')}>
            <RNText key={'header-trailing-label'} typeScale={'common_button'}>
              {label}
            </RNText>
          </TouchableOpacity>
        );
      case 'icon':
        return (
          <TouchableOpacity onPress={() => handlePress('icon')}>
            <Icon key={'header-trailing-icon-button'} name={icon} />
          </TouchableOpacity>
        );
    }
  };
  if (Array.isArray(trailing)) {
    return trailing.map(getComponent);
  }
  return getComponent(trailing);
};

const _styles = createStyles(theme => ({
  container: {
    // borderWidth: 1,
  },
  navBar: {
    height: s(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.s,
  },
  leading: {
    // borderWidth: 1,
  },
  center: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trailing: {
    // paddingRight: theme.layout.gap(),
  },
  line: { height: 1, backgroundColor: theme.colors.stroke.separatorSecondary },
}));
