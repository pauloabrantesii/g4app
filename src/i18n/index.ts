import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enUS } from './locales/en-US';
import { ptBR } from './locales/pt-BR';

// Recursos de tradução
const resources = {
  'pt-BR': {
    translation: ptBR,
  },
  'en-US': {
    translation: enUS,
  },
};

// Configuração do i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR', // Idioma padrão
    fallbackLng: 'pt-BR', // Idioma de fallback
    debug: __DEV__, // Debug apenas em desenvolvimento
    
    interpolation: {
      escapeValue: false, // React já escapa valores
    },
    
    // Configurações de detecção de idioma
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    
    // Configurações de namespace
    defaultNS: 'translation',
    ns: ['translation'],
  });

export default i18n;

// Função para mudar o idioma
export const changeLanguage = (language: 'pt-BR' | 'en-US') => {
  i18n.changeLanguage(language);
};

// Função para obter o idioma atual
export const getCurrentLanguage = () => {
  return i18n.language;
};

// Função para obter todos os idiomas disponíveis
export const getAvailableLanguages = () => {
  return Object.keys(resources);
}; 