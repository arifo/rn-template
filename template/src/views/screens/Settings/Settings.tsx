import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { useAppLang } from 'locale/LocaleProvider.tsx';
import { LangTag } from 'locale/types.ts';
import { selectSettings } from 'modules/settings/settingsSlice.ts';
import { Routes, TabScreenPropTypes } from 'navigation/Routes';
import { useAppDispatch, useAppSelector } from 'store';
import { createStyles, useAppTheme } from 'theme';
import { s } from 'utils/scaler.ts';
import { ContainerView, Icon, RNText } from 'views/components';

type Props = TabScreenPropTypes<typeof Routes.Settings>;

const SettingsScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const { styles, setTheme } = useAppTheme(_styles);
  const { appTheme, appLanguage } = useAppSelector(selectSettings);
  const { t, setLang } = useAppLang();

  const toggleTheme = () => {
    setTheme(appTheme === 'light' ? 'dark' : 'light');
  };

  const changeLang = (lang: LangTag) => {
    setLang(lang);
  };

  const navToUIKit = () => {
    navigation.getParent()?.navigate(Routes.UIKitRoot);
  };

  return (
    <ContainerView title={'Settings'}>
      <View style={styles.container}>
        <ListItem
          title={t(appTheme === 'dark' ? 'dark_mode' : 'light_mode')}
          value={appTheme}
          onPress={toggleTheme}
        />
        <ListItem
          title={'English'}
          onPress={() => {
            changeLang('en');
          }}
          isSelected={appLanguage === 'en'}
        />
        <ListItem
          title={'French'}
          onPress={() => {
            changeLang('fr');
          }}
          isSelected={appLanguage === 'fr'}
        />
        <ListItem
          title={'German'}
          onPress={() => {
            changeLang('de');
          }}
          isSelected={appLanguage === 'de'}
        />
        <ListItem
          title={'Russian'}
          onPress={() => {
            changeLang('ru');
          }}
          isSelected={appLanguage === 'ru'}
        />

        <ListItem title={'UI Kit'} value={null} onPress={navToUIKit} />
      </View>
    </ContainerView>
  );
};

export default SettingsScreen;

const ListItem = ({
  title,
  value,
  onPress,
  isSelected,
}: {
  title: string;
  value?: string | null;
  onPress: () => void;
  isSelected?: boolean;
}) => {
  const { styles } = useAppTheme(_styles);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listItem}>
        <RNText typeScale={'form_label'} style={styles.title}>
          {title}
        </RNText>
        <RNText style={styles.itemValue}>{value}</RNText>
        {isSelected && <Icon name={'check-circle'} color={'green'} />}
      </View>
    </TouchableOpacity>
  );
};

const _styles = createStyles(theme => ({
  container: { flex: 1, justifyContent: 'center' },

  //listItem
  listItem: {
    width: '100%',
    backgroundColor: theme.colors.background.buttonPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    flexDirection: 'row',
  },

  title: {
    fontSize: s(16),
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },

  itemValue: {
    fontSize: s(18),
    color: theme.colors.text.primary,
    marginLeft: 'auto',
  },
}));
