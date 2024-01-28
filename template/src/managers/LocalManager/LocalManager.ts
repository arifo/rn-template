import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { findBestLanguageTag } from 'react-native-localize';

import { resources } from './resources';
import { LangTag } from './types.ts';

const Languages: Record<LangTag, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  ru: 'Русский',
};

export class LocaleManagerClass {
  private static instance: LocaleManagerClass;
  private _languageTag: LangTag = 'en';

  private constructor() {
    const { languageTag } = findBestLanguageTag<LangTag>(Object.keys(resources) as LangTag[]) || {
      languageTag: 'en',
    };
    this._languageTag = languageTag;
    this.setI18nConfig(this._languageTag);
  }

  public static get Instance(): LocaleManagerClass {
    if (!LocaleManagerClass.instance) {
      LocaleManagerClass.instance = new LocaleManagerClass();
    }

    return LocaleManagerClass.instance;
  }

  get languageTag() {
    return this._languageTag;
  }
  get languages() {
    return Languages;
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
