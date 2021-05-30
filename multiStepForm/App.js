import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {commonStyles} from './src/styles/commonStyles';
import StepIndicator from '@components/stepIndicator';
import BasicForm from '@components/form/basicDetail';
import GeneralForm from '@components/form/generalDetail';
import Summary from '@components/summary';
import {useSelector} from 'react-redux';
const App = () => {
  const currentStep = useSelector(state => state.step.currentStepVal);
  return (
    <SafeAreaView style={commonStyles.flex1}>
      <StepIndicator />
      <ScrollView
        style={commonStyles.container}
        contentContainerStyle={commonStyles.alignCenterScrollView}>
        {currentStep === 1 ? <BasicForm /> : null}
        {currentStep === 2 ? <GeneralForm /> : null}
        {currentStep === 3 ? <Summary /> : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
