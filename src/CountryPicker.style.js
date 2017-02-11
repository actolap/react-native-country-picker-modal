import { StyleSheet, PixelRatio } from 'react-native';
import { getWidthPercent, getHeightPercent } from './ratio';

export default StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    width: getWidthPercent(100),
    height: getHeightPercent(100),
  },
  contentContainer: {
    width: getWidthPercent(100),
    backgroundColor: 'white',
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 19,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8,
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
  },
  itemCountry: {
    flexDirection: 'row',
    height: 52,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f3f4f5'
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: getHeightPercent(7),
    width: getWidthPercent(15),
  },
  itemCountryName: {
    justifyContent: 'center',
    width: getWidthPercent(70),
    height: getHeightPercent(7),
  },
  countryName: {
    fontSize: 16,
    color: '#919BA0',
    fontFamily: 'proximanova_regular'
  },
  letters: {
    position: 'absolute',
    height: getHeightPercent(100),
    top: 13,
    bottom: 0,
    right: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    height: getHeightPercent(3.3),
    width: getWidthPercent(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2),
    fontFamily: 'proximanova_regular'
  },
});
