import React from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { getBuildNumber, getVersion } from 'react-native-device-info';

import { selectSettings } from 'modules/settings/settingsSlice.ts';
import { RootNavParamList, Routes } from 'navigation/Routes.ts';
import { useAppSelector } from 'store';
import { Card, ContainerView, ListItem, RNText, Separator } from 'views/components';
import { useAppLang } from 'views/contexts/LocaleContext';

type Props = { navigation: NativeStackNavigationProp<RootNavParamList> };

const Version = `${getVersion()} (${getBuildNumber()})`;

const SettingsScreen = ({ navigation }: Props) => {
  const { appTheme, appLanguage } = useAppSelector(selectSettings);
  const { t, languages } = useAppLang();

  const navToUIKit = () => {
    navigation.navigate(Routes.UIKitRoot, { screen: Routes.UIKit });
  };
  return (
    <ContainerView.Main title={t('nav.settings')}>
      <Card>
        <ListItem.Compact
          label={t('theme.theme')}
          trailing={['label', 'icon']}
          trailingLabel={t(`theme.${appTheme || 'system_default'}`)}
          onPress={() => navigation.navigate(Routes.ThemeSettings)}
        />
        <Separator />
        <ListItem.Compact
          label={t('language')}
          trailing={['label', 'icon']}
          trailingLabel={languages[appLanguage || 'en']}
          onPress={() => navigation.navigate(Routes.LanguageSettings)}
        />
      </Card>

      <Card>
        <ListItem.Compact label={'Share App'} trailing={'icon'} />
        <ListItem.Compact label={'Rate App'} trailing={'icon'} />
      </Card>

      <Card>
        <ListItem.Compact label={t('terms_of_service')} trailing={'icon'} />
        <Separator />
        <ListItem.Compact label={t('privacy_policy')} trailing={'icon'} />
      </Card>

      <Card>
        <ListItem.Compact label={'UI Kit'} onPress={navToUIKit} trailing={'icon'} />
      </Card>

      <View style={{ marginLeft: 'auto' }}>
        <RNText typeScale={'caption'}>
          {t('version')}: {Version}
        </RNText>
      </View>
    </ContainerView.Main>
  );
};

export default SettingsScreen;
