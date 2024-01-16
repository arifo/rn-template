import { Dimensions } from 'react-native';

const guideLine = {
  width: 375,
  height: 812,
};

const { width, height } = Dimensions.get('window');

const scale = (size: number) => (width / guideLine.width) * size;

const verticalScale = (size: number) => (height / guideLine.height) * size;

const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;
const lineHeightMultiplier = (size: number, multiplier = 1.2) => moderateScale(size * multiplier);

export const s = moderateScale;
export const vs = verticalScale;
export const lhm = lineHeightMultiplier;
