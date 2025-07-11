import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    width: scaleSize(303),
    height: scaleSize(124),
    backgroundColor: colors.white,
    borderRadius: scaleSize(20),
    padding: scaleSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.45,
    shadowRadius: 8,
    elevation: 10,
    borderBottomWidth: scaleSize(10),
    borderBottomColor: colors.primaryVariant,
  },
  content: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scaleSize(12),
  },
  text: {
    fontSize: scaleFont(20),
    fontFamily: fonts.lato.bold,
    fontWeight: fontWeights.bold,
    color: colors.gray,
  },
});
