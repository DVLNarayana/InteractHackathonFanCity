/* @flow */

import {Platform, Dimensions} from 'react-native';

export const packageConfig = require('../../package.json');

export const IS_PLATFORM_IOS = Platform.OS === 'ios' ? true : false;

var {height, width} = Dimensions.get('screen');
export const deviceWidth = width;
export const deviceHeight = height;

export const APP_VERSION = packageConfig.version;
