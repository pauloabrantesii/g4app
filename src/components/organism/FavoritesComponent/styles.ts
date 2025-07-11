import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { fonts, fontWeights } from '../../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.white,
    flex: 1,
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
    color: colors.white,
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
    width: '100%',
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: scaleSize(16),
    alignItems: 'center',
  },
  input: {
    fontFamily: fonts.roboto.regular,
    fontSize: scaleFont(16),
    fontWeight: fontWeights.regular,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: scaleSize(20),
    height: scaleSize(30),
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: scaleSize(15),
    paddingHorizontal: scaleSize(10),
    backgroundColor: colors.white,
    gap: scaleSize(10),
  },
  userInfoCardContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: scaleSize(20),
  },
  addButtonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    padding: scaleSize(16),
    bottom: 0,
    right: 0,
  },
});
