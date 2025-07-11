import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, fontWeights } from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  text: {
    fontFamily: fonts.roboto.regular,
    marginTop: 16,
    fontSize: 16,
    fontWeight: fontWeights.regular,
    color: colors.textPrimary,
    textAlign: 'center',
  },
}); 