import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import styles from './style';
import {colors} from '../../styles/colors';
const StepNumber = props => {
  const customStyleCircle = {};
  const customStyleText = {};
  if (props.havingData && !props.selected) {
    customStyleCircle.backgroundColor = colors.finished;
    customStyleText.color = 'white';
  } else {
    if (props.selected) {
      customStyleCircle.borderWidth = 1;
      customStyleCircle.borderColor = colors.finished;
      customStyleText.color = colors.finished;
    } else {
      customStyleText.color = colors.unfinished;
    }
  }

  return (
    <TouchableNativeFeedback onPress={() => props.onPress(props.title)}>
      <View style={[styles.stepIndicatorContainer, customStyleCircle]}>
        <Text style={[styles.textContainer, customStyleText]}>
          {props.title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default StepNumber;
