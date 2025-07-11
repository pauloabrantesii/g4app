import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.lato.bold,
    fontSize: scaleFont(48),
    fontWeight: fontWeights.bold,
    color: colors.primary,
  },
  locationText: {
    fontFamily: fonts.lato.bold,
    fontSize: scaleFont(20),
    fontWeight: fontWeights.bold,
    color: colors.gray,
  },
  content: {
    width: '100%',
    backgroundColor: colors.white,
        paddingHorizontal: scaleSize(16),
  },
  titleContainer: {},
  LocationContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  geoLocationContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: scaleSize(60),
    marginBottom: scaleSize(40),
  },
  userCardContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: scaleSize(20),

  },
});
