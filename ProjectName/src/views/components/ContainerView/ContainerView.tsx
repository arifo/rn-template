import React, { PropsWithChildren } from 'react';

import { ScrollView, ScrollViewProps, View, ViewProps, ViewStyle } from 'react-native';

import { createStyles, useAppTheme } from 'theme';
import { Header } from 'views/components';

type ScrollableContainerViewProps = PropsWithChildren<{
  containerStyles?: ViewStyle;
  contentViewProps?: ScrollViewProps;
  style?: ViewStyle;
  title?: string;
  scrollable: true;
}>;

type ContainerViewProps = PropsWithChildren<{
  containerStyles?: ViewStyle;
  contentViewProps?: ViewProps;
  style?: ViewStyle;
  title?: string;
  scrollable?: false;
}>;
type Props = ScrollableContainerViewProps | ContainerViewProps;

export const ContainerView = ({
  children,
  scrollable,
  containerStyles,
  style,
  contentViewProps,
  title,
}: Props) => {
  const { styles } = useAppTheme(_styles);

  const ContentView = scrollable ? ScrollView : View;

  return (
    <View style={[styles.container, containerStyles]}>
      {!!title && <Header title={title} />}
      <ContentView style={[{ flex: 1 }, style]} {...contentViewProps}>
        {children}
      </ContentView>
    </View>
  );
};

const _styles = createStyles(theme => ({
  container: { flex: 1, backgroundColor: theme.colors.background.primary },
}));
