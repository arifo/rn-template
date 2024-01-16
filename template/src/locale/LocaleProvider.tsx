import React, { PropsWithChildren, useContext, useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { LangTag } from 'locale/types.ts';
import { selectSettings, setLanguage } from 'modules/settings/settingsSlice.ts';
import { useAppDispatch, useAppSelector } from 'store';

import LocalManager from './LocalManager';

export const LocaleContext = React.createContext({
  setLang: async (lang: LangTag) => {
    await LocalManager.setLanguage(lang);
  },
});

export const LocaleProvider = ({ children }: PropsWithChildren<{}>) => {
  const dispatch = useAppDispatch();
  const { appLanguage } = useAppSelector(selectSettings);

  useEffect(() => {
    const setInitLang = async () => {
      if (appLanguage) {
        await LocalManager.setLanguage(appLanguage);
      } else {
        dispatch(setLanguage(LocalManager.languageTag));
      }
    };
    setInitLang();
  }, [dispatch, appLanguage]);

  const setLang = async (langTag: LangTag) => {
    await LocalManager.setLanguage(langTag);
    dispatch(setLanguage(langTag));
  };
  return <LocaleContext.Provider value={{ setLang }}>{children}</LocaleContext.Provider>;
};

export const useAppLang = () => {
  const { t } = useTranslation();
  const context = useContext(LocaleContext);
  return { ...context, t };
};
