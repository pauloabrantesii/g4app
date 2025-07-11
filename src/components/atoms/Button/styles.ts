import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    borderRadius: scaleSize(4),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primaryVariant,
    height: scaleSize(50),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.roboto.medium,
    fontSize: scaleFont(20),
    fontWeight: fontWeights.medium,
    color: colors.white,
  },
  loadingContainer: {
    marginRight: 8,
  },
}); 