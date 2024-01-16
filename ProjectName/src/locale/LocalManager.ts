import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';
import { findBestLanguageTag } from 'react-native-localize';

import { resources } from './resources';
import { LangTag } from './types.ts';

class LocaleManager {
  private static instance: LocaleManager;
  private _languageTag: LangTag = 'en';

  private constructor() {
    const { languageTag } = findBestLanguageTag<LangTag>(Object.keys(resources) as LangTag[]) || {
      languageTag: 'en',
    };
    this._languageTag = languageTag;
    this.setI18nConfig(this._languageTag);
  }

  public static get Instance(): LocaleManager {
    if (!LocaleManager.instance) {
      LocaleManager.instance = new LocaleManager();
    }

    return LocaleManager.instance;
  }

  get languageTag() {
    return this._languageTag;
  }

  public async setI18nConfig(savedLanguage: LangTag): Promise<void> {
    const selectedLanguage = savedLanguage || this._languageTag;

    await i18n.use(initReactI18next).init({
      resources,
      lng: selectedLanguage,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
  }

  public async setLanguage(langTag: LangTag) {
    try {
      this._languageTag = langTag;
      await i18n.changeLanguage(langTag);
    } catch (e) {
      console.warn(e);
    }
  }
}

const LocaleManagerInstance = LocaleManager.Instance;
export default LocaleManagerInstance;
