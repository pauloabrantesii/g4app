import { StyleSheet } from 'react-native';
import { scaleFont, scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: scaleSize(20),
    padding: scaleSize(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primaryVariant,
  },
  input: {
    width: '100%',
    fontSize: scaleFont(28),
    textAlign: 'center',
    marginBottom: scaleSize(16),
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.primary,
    padding: scaleSize(8),
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  key: {
    width: '30%',
    margin: '1.5%',
    aspectRatio: 1,
    backgroundColor: colors.primaryVariant,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontSize: scaleFont(28),
    color: colors.white,
  },
  callButton: {
    width: '64%',
    marginTop: scaleSize(16),
    backgroundColor: colors.primary,
    borderRadius: scaleSize(8),
    alignItems: 'center',
    justifyContent: 'center',
    padding: scaleSize(16),
    alignSelf: 'center',
  },
  callButtonText: {
    color: colors.white,
    fontSize: scaleFont(20),
    fontWeight: 'bold',
  },
});
