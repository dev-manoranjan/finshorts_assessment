import React from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';
import styles from './style';
const ShowSummary = props => {
  return (
    <View style={styles.container}>
      <Text style={[commonStyles.titleText, styles.titleText]}>
        {props.title}
      </Text>
      <Text style={commonStyles.subText}>{props.text}</Text>
    </View>
  );
};

export default ShowSummary;
