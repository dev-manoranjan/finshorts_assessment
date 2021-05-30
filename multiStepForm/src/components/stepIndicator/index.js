import React from 'react';
import {View} from 'react-native';
import styles from './style';
import StepNumber from '../stepNumber';
import Stepbar from '../stepBar';

import {useDispatch, useSelector} from 'react-redux';
import {changeStep} from '../../actions/step';

const StepIndicator = props => {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.step.currentStepVal);
  const basicData = useSelector(state => state.basicDetail);
  const generalData = useSelector(state => state.generalDetail);
  const changeStepNumber = data => {
    if (data === 1) {
      dispatch(changeStep(data));
    } else if (data === 2) {
      if (basicData.name && basicData.name.length) {
        dispatch(changeStep(data));
      }
    } else if (data === 3) {
      if (generalData.weight && generalData.weight.length) {
        dispatch(changeStep(data));
      }
    }
  };
  return (
    <View style={styles.indicatorContainer}>
      <StepNumber
        title={1}
        selected={currentStep === 1}
        havingData={basicData.name && basicData.name.length}
        onPress={data => changeStepNumber(data)}
      />
      <Stepbar selected={basicData.name && basicData.name.length} />
      <StepNumber
        title={2}
        selected={currentStep === 2}
        havingData={generalData.weight && generalData.weight.length}
        onPress={data => changeStepNumber(data)}
      />
      <Stepbar selected={generalData.weight && generalData.weight.length} />
      <StepNumber
        title={3}
        selected={currentStep === 3}
        havingData={generalData.weight && generalData.weight.length}
        onPress={data => changeStepNumber(data)}
      />
    </View>
  );
};

export default StepIndicator;
