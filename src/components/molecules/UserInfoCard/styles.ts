import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scaleSize(60),
    backgroundColor: colors.white,
    paddingHorizontal: scaleSize(16)  ,
    paddingTop: scaleSize(12),
    paddingBottom: scaleSize(8),
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: scaleSize(12),
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaleSize(12),


  },
  avatar: {
    width: scaleSize(40),
    height: scaleSize(40),
    borderRadius: scaleSize(24),
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'center',

  },
  name: {
    fontFamily: fonts.roboto.regular,
    fontWeight: fontWeights.regular,
    fontSize: scaleFont(17),
    color: 'rgba(0, 0, 0, 1)',
  },
  phone: {
    fontFamily: fonts.roboto.regular,
    fontWeight: fontWeights.regular,
    fontSize: scaleFont(17),
    color: colors.gray,
  },
  divider: {
    width: scaleSize(290),
    height: 1,
    backgroundColor: 'rgba(185, 185, 185, 1)',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});