import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enUS } from './locales/en-US';
import { ptBR } from './locales/pt-BR';

const resources = {
  'pt-BR': {
    translation: ptBR,
  },
  'en-US': {
    translation: enUS,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR',
    fallbackLng: 'pt-BR',
    debug: __DEV__,
    
    interpolation: {
      escapeValue: false,
    },
    

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    
    defaultNS: 'translation',
    ns: ['translation'],
  });

export default i18n;

export const changeLanguage = (language: 'pt-BR' | 'en-US') => {
  i18n.changeLanguage(language);
};

export const getCurrentLanguage = () => {
  return i18n.language;
};

export const getAvailableLanguages = () => {
  return Object.keys(resources);
}; 