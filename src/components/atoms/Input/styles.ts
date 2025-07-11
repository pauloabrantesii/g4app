import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({

  input: {
    borderWidth: 1,
    height: scaleSize(61),
    borderColor: colors.secondary,
    borderRadius: scaleSize(4),
    paddingHorizontal: scaleSize(16),
    paddingVertical: scaleSize(12),
    fontSize: scaleFont(16),
    backgroundColor: colors.white,
    color: colors.primary,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
  inputError: {
    borderColor: colors.borderError,
  },
  error: {
    fontSize: 12,
    color: colors.error,
    marginTop: 4,
  },
}); 