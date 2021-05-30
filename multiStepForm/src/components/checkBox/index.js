import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import styles from './style';
const CheckBox = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.switchContainer}>
        <TouchableNativeFeedback
          onPress={() => props.onChange(props.data.firstButtonTitle)}>
          <View
            style={[
              styles.switchStyle,
              {
                backgroundColor:
                  props.value === props.data.firstButtonTitle
                    ? 'green'
                    : 'white',
              },
            ]}>
            <Text
              style={[
                styles.switchText,
                {
                  color:
                    props.value === props.data.firstButtonTitle
                      ? 'white'
                      : 'grey',
                },
              ]}>
              {props.data.firstButtonTitle}
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => props.onChange(props.data.secondButtonTitle)}>
          <View
            style={[
              styles.switchStyle,
              {
                backgroundColor:
                  props.value === props.data.secondButtonTitle
                    ? 'green'
                    : 'white',
              },
            ]}>
            <Text
              style={[
                styles.switchText,
                {
                  color:
                    props.value === props.data.secondButtonTitle
                      ? 'white'
                      : 'grey',
                },
              ]}>
              {props.data.secondButtonTitle}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default CheckBox;
