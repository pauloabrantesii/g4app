import { StyleSheet } from 'react-native';
import { scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: scaleSize(50),
    width: scaleSize(56),
    height: scaleSize(56),
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
}); 