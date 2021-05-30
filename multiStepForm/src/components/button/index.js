import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import styles from './style';
const Button = props => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.textContainer}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Button;
