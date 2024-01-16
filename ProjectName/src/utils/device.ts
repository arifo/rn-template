import { Dimensions, Platform } from 'react-native';

export const Device = {
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  screenSize: Dimensions.get('screen'),
  windowSize: Dimensions.get('window'),
};
