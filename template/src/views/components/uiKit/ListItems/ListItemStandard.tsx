import React from 'react';

import { Pressable, View, ViewStyle } from 'react-native';

import { getDebugStyle } from 'components/uiKit/utils.ts';
import { s } from 'utils/scaler.ts';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

import { Icon } from '../../Icons';
import { RNText } from '../../RNText';

type TrailComponent = 'label' | 'icon';
type Trailing = TrailComponent | TrailComponent[];

type LeadingComponent = 'icon';
type Leading = LeadingComponent | LeadingComponent[];

type Props = {
  label: string;
  subLabel: string;
  onPress?: () => void;
  style?: ViewStyle;
  debug?: boolean;
  leading?: Leading;
  leadingProps?: { icon?: string };
  trailing?: Trailing;
  trailingLabel?: string;
  trailingIcon?: string;
};

export const ListItemStandard = ({
  label,
  subLabel,
  onPress,
  debug,
  style,
  leading,
  leadingProps,
  trailing,
  trailingLabel,
  trailingIcon,
}: Props) => {
  const { styles, theme } = useAppTheme(_styles);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        debug && getDebugStyle(theme),
        style,
        pressed && styles.pressed,
      ]}>
      {leading && leading.length > 0 && (
        <View style={styles.leading}>{buildLeading(leading, leadingProps)}</View>
      )}
      <View style={styles.center}>
        <RNText typeScale={'common_button'}>{label}</RNText>
        <RNText numberOfLines={2} typeScale={'list_item_text'} color={theme.colors.text.secondary}>
          {subLabel}
        </RNText>
      </View>
      <View style={styles.trailing}>
        {buildTrail({ trailing, label: trailingLabel, icon: trailingIcon })}
      </View>
    </Pressable>
  );
};

type BuildTrailProps = { trailing?: Trailing; label?: string; icon?: string };

const buildTrail = ({ trailing, icon, label }: BuildTrailProps) => {
  if (!trailing) {
    return null;
  }
  const getComponent = (trail: TrailComponent) => {
    switch (trail) {
      case 'label':
        return (
          <RNText key={'list-item-compact-trailing-label'} typeScale={'common_button'}>
            {label}
          </RNText>
        );
      case 'icon':
        return (
          <Icon key={'list-item-compact-trailing-icon'} name={icon ? icon : 'chevron-right'} />
        );
    }
  };

  if (Array.isArray(trailing)) {
    return trailing.map(getComponent);
  }
  return getComponent(trailing);
};

const buildLeading = (leading: Leading, leadingProps?: { icon?: string }) => {
  if (!leading) {
    return null;
  }
  const getComponent = (lead: LeadingComponent) => {
    switch (lead) {
      case 'icon':
        return (
          <Icon
            size={'extraLarge'}
            key={'list-item-compact-leading-icon'}
            name={leadingProps?.icon}
          />
        );
    }
  };

  if (Array.isArray(leading)) {
    return leading.map(getComponent);
  }
  return getComponent(leading);
};

const _styles = createStyles(theme => ({
  container: {
    paddingHorizontal: theme.layout.gap(),
    paddingVertical: theme.layout.gap(),
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: s(50),
  },
  pressed: { backgroundColor: theme.colors.background.secondaryAlpha },
  trailing: { flexDirection: 'row', alignItems: 'center' },
  leading: { marginRight: theme.layout.gap() },
  center: { flex: 1, marginRight: theme.layout.gap() },
}));
