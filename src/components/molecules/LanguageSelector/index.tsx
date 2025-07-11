import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

const LanguageSelector = () => {
  const { t, changeLanguage, isPortuguese, isEnglish } = useTranslation();

  const handleLanguageChange = (language: 'pt-BR' | 'en-US') => {
    changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('common.language') as string}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            isPortuguese() && styles.activeButton
          ]}
          onPress={() => handleLanguageChange('pt-BR')}
        >
          <Text style={[
            styles.languageText,
            isPortuguese() && styles.activeText
          ]}>
            Português
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[
            styles.languageButton,
            isEnglish() && styles.activeButton
          ]}
          onPress={() => handleLanguageChange('en-US')}
        >
          <Text style={[
            styles.languageText,
            isEnglish() && styles.activeText
          ]}>
            English
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.surface,
    borderRadius: 8,
    margin: 16,
  },
  title: {
    fontFamily: fonts.roboto.medium,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    color: colors.textPrimary,
    marginBottom: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  languageButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  activeButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  languageText: {
    fontFamily: fonts.roboto.medium,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    color: colors.textPrimary,
  },
  activeText: {
    color: colors.white,
  },
});

export default LanguageSelector; 