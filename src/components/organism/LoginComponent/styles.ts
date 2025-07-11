import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scaleSize(16),
  },
  title: {
    fontFamily: fonts.roboto.bold,
    fontSize: 24,
    fontWeight: fontWeights.extraBold,
    color: colors.primary,
  },
  content: {
    width: scaleSize(341),
    height: scaleSize(340),
    backgroundColor: colors.white,
    padding: scaleSize(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 5,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  titleContainer: {

  },
  form: {
    width: '100%',
    padding: scaleSize(16),
    gap: scaleSize(16),
  },
  buttonContainer: {
    alignItems: 'center',

  },
  forgotPasswordContainer: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontFamily: fonts.roboto.regular,
    fontSize: scaleFont(14),
    fontWeight: fontWeights.regular,
    color: colors.gray,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    marginBottom: 20,
  },
  footerText: {
    fontFamily: fonts.roboto.regular,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    color: colors.textSecondary,
  },
  createAccountText: {
    fontFamily: fonts.roboto.medium,
    fontSize: 14,
    fontWeight: fontWeights.medium,
    color: colors.primary,
  },
  errorContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFE5E5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FFCCCC',
  },
  errorText: {
    fontFamily: fonts.roboto.regular,
    color: colors.error,
    fontSize: 14,
    fontWeight: fontWeights.regular,
    textAlign: 'center',
  },
}); 