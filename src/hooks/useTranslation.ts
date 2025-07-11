import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  const translate = (key: string, options?: any): string => {
    const result = t(key, options);
    return typeof result === 'string' ? result : String(result);
  };

  const changeLanguage = (language: 'pt-BR' | 'en-US') => {
    i18n.changeLanguage(language);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const isPortuguese = () => {
    return i18n.language === 'pt-BR';
  };

  const isEnglish = () => {
    return i18n.language === 'en-US';
  };

  return {
    t: translate,
    changeLanguage,
    getCurrentLanguage,
    isPortuguese,
    isEnglish,
    language: i18n.language,
    ready: i18n.isInitialized,
  };
};