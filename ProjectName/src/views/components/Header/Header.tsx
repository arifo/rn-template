import React, { useMemo } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createStyles, useAppTheme } from 'theme';

import { RNText } from '../RNText';
import { TextButton } from '../TextButton';

type Props = { title: string; rightComponent?: () => React.ReactNode; onBack?: () => void };

export const Header: React.FC<Props> = ({ title, onBack, rightComponent }) => {
  const { styles } = useAppTheme(_styles);
  const navigation = useNavigation();
  const canGoBack = useMemo(() => navigation.canGoBack(), [navigation]);
  const onBackPress = () => {
    if (onBack) {
      onBack();
    }
    navigation.goBack();
  };
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <RNText style={styles.title}>{title}</RNText>
        </View>
        <View style={styles.frontView}>
          {canGoBack && <TextButton text="Back" onPress={onBackPress} />}
          {rightComponent && rightComponent()}
        </View>
      </View>
    </SafeAreaView>
  );
};

const _styles = createStyles(theme => ({
  safeArea: { backgroundColor: theme.colors.background.primary },
  container: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.s,
    backgroundColor: theme.colors.background.primary,
    alignItems: 'center',
  },
  titleView: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 16 },
  frontView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
