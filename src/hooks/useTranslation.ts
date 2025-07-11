import { useTranslation as useI18nTranslation } from 'react-i18next';

// Hook personalizado para traduções
export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  // Função para traduzir com fallback
  const translate = (key: string, options?: any) => {
    return t(key, options);
  };

  // Função para mudar idioma
  const changeLanguage = (language: 'pt-BR' | 'en-US') => {
    i18n.changeLanguage(language);
  };

  // Função para obter idioma atual
  const getCurrentLanguage = () => {
    return i18n.language;
  };

  // Função para verificar se é português
  const isPortuguese = () => {
    return i18n.language === 'pt-BR';
  };

  // Função para verificar se é inglês
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