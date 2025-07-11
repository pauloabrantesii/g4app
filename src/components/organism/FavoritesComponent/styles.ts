import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    backgroundColor: colors.white,
  },
  backContainer: {
    width: '100%',
    flexDirection: 'row',
    height: scaleSize(80),
    backgroundColor: colors.primary,
    paddingHorizontal: scaleSize(16),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scaleSize(10),
  },
  backButtonText: {
    fontSize: scaleFont(20),
    color: colors.primary,
    fontWeight: fontWeights.bold,
  },
  title: {
    fontFamily: fonts.roboto.medium,
    fontSize: scaleFont(20),
    fontWeight: fontWeights.medium,
    color: colors.white,
  },
  placeholder: {
    width: scaleSize(40),
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: scaleSize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontFamily: fonts.lato.bold,
    fontSize: scaleFont(20),
    fontWeight: fontWeights.bold,
    color: colors.gray,
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
