import React from 'react';

import { View } from 'react-native';

import { LangTag } from 'managers/LocalManager/types.ts';
import { Card, ListItem, ContainerView, Separator } from 'views/components';
import { useAppLang } from 'views/contexts/LocaleContext';

export const LanguageSettings = () => {
  const { t, setLang, languages, appLanguage } = useAppLang();

  const changeLang = (lang: LangTag) => {
    setLang(lang);
  };

  return (
    <ContainerView.Secondary title={t('nav.languages')}>
      <Card>
        {Object.entries(languages).map(([tag, lang], index) => (
          <View key={tag}>
            <Separator hide={!index} />
            <ListItem.Compact
              label={lang}
              trailing={tag === appLanguage ? 'icon' : undefined}
              trailingIcon={'check-circle'}
              onPress={() => changeLang(tag as LangTag)}
            />
          </View>
        ))}
      </Card>
    </ContainerView.Secondary>
  );
};
