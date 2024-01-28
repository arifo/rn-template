import React from 'react';

import { ScrollView, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header, HeaderProps } from 'components/uiKit/Header/Header.tsx';
import { createStyles, useAppTheme } from 'views/contexts/ThemeContext';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  title?: string;
  headerProps?: Omit<HeaderProps, 'animatedValue'>;
};

export const SecondaryContainerView = ({ children, style, title, headerProps }: Props) => {
  const { styles } = useAppTheme(_styles);
  const headerProp: HeaderProps = {
    title,
    leading: 'back_button',
    ...headerProps,
  };
  return (
    <SafeAreaView edges={['top', 'bottom']} style={[styles.container, style]}>
      <Header {...headerProp} />
      <ScrollView keyboardShouldPersistTaps={'handled'} style={styles.contentContainer}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const _styles = createStyles(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.secondary,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.s,
    paddingTop: theme.spacing.xl,
    backgroundColor: theme.colors.background.secondary,
  },
}));
