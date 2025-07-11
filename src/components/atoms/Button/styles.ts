import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    borderRadius: scaleSize(12),
    width: scaleSize(214),
    height: scaleSize(50),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primaryVariant,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.roboto.bold,
    fontSize: scaleFont(20),
    fontWeight: fontWeights.bold,
    color: colors.white,
  },
  loadingContainer: {
    marginRight: 8,
  },
}); 