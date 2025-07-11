import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const SCALE = 375;

const scaleSize = (fontSize: number) => {
  const ratio = fontSize / SCALE;
  return Math.round(ratio * width);
};

const scaleFont = (size: number) => size * 1;

export { scaleFont, scaleSize };

