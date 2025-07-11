import { StyleSheet } from 'react-native';
import { fonts, fontWeights } from './fonts';

export const typography = StyleSheet.create({
  // Títulos
  h1: {
    fontFamily: fonts.roboto.bold,
    fontSize: 32,
    fontWeight: fontWeights.bold,
    lineHeight: 40,
  },
  h2: {
    fontFamily: fonts.roboto.bold,
    fontSize: 28,
    fontWeight: fontWeights.bold,
    lineHeight: 36,
  },
  h3: {
    fontFamily: fonts.roboto.medium,
    fontSize: 24,
    fontWeight: fontWeights.medium,
    lineHeight: 32,
  },
  h4: {
    fontFamily: fonts.roboto.medium,
    fontSize: 20,
    fontWeight: fontWeights.medium,
    lineHeight: 28,
  },
  h5: {
    fontFamily: fonts.roboto.medium,
    fontSize: 18,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
  },
  h6: {
    fontFamily: fonts.roboto.medium,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 22,
  },

  // Corpo de texto
  body1: {
    fontFamily: fonts.roboto.regular,
    fontSize: 16,
    fontWeight: fontWeights.regular,
    lineHeight: 24,
  },
  body2: {
    fontFamily: fonts.roboto.regular,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    lineHeight: 20,
  },
  body3: {
    fontFamily: fonts.roboto.regular,
    fontSize: 12,
    fontWeight: fontWeights.regular,
    lineHeight: 18,
  },

  // Botões
  button: {
    fontFamily: fonts.roboto.medium,
    fontSize: 16,
    fontWeight: fontWeights.medium,
    lineHeight: 24,
  },
  buttonSmall: {
    fontFamily: fonts.roboto.medium,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    lineHeight: 20,
  },

  // Caption
  caption: {
    fontFamily: fonts.roboto.regular,
    fontSize: 12,
    fontWeight: fontWeights.regular,
    lineHeight: 16,
  },

  // Overline
  overline: {
    fontFamily: fonts.roboto.medium,
    fontSize: 10,
    fontWeight: fontWeights.medium,
    lineHeight: 14,
    textTransform: 'uppercase',
  },
}); 