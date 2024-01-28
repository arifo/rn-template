import React from 'react';

import { ColorSchemeName, View } from 'react-native';

import { Card, ListItem, ContainerView, Separator } from 'views/components';
import { useAppLang } from 'views/contexts/LocaleContext';
import { useAppTheme } from 'views/contexts/ThemeContext';

export const ThemeSettings = () => {
  const { t } = useAppLang();
  const { appTheme, setTheme } = useAppTheme(null);

  const toggleTheme = (theme: ColorSchemeName) => {
    setTheme(theme);
  };

  const menuItems: { label: string; theme: ColorSchemeName }[] = [
    { label: t('theme.system_default'), theme: null },
    { label: t('theme.light'), theme: 'light' },
    { label: t('theme.dark'), theme: 'dark' },
  ];
  return (
    <ContainerView.Secondary title={t('nav.themes')}>
      <Card>
        {menuItems.map((menu, index) => (
          <View key={menu.label}>
            <Separator hide={!index} />
            <ListItem.Compact
              label={menu.label}
              trailing={menu.theme === appTheme ? 'icon' : undefined}
              trailingIcon={'check-circle'}
              onPress={() => toggleTheme(menu.theme)}
            />
          </View>
        ))}
      </Card>
    </ContainerView.Secondary>
  );
};
