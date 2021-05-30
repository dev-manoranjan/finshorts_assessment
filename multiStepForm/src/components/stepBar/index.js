import React from 'react';
import {View} from 'react-native';
import {colors} from '../../styles/colors';
import styles from './style';
const Stepbar = props => {
  return (
    <View
      style={[
        styles.barStyle,
        {backgroundColor: props.selected ? colors.finished : colors.unfinished},
      ]}
    />
  );
};

export default Stepbar;
