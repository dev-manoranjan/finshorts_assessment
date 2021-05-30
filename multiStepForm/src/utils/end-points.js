import {Platform} from 'react-native';
const host =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:3030/'
    : 'http://localhost:3030/';
const endpoints = {};

export {host, endpoints};
