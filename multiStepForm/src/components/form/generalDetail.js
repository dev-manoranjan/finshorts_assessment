import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';
import {Formik} from 'formik';
import Button from '../button';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {addGeneralDetail} from '../../actions/generalDetail';
import CheckBox from '../checkBox';
import {changeStep} from '../../actions/step';
import Loader from '../loader';
import {apiCall} from '../../actions/apiCall';
import {commonUtils} from '../../utils/commonUtils';
const validationSchema = yup.object({
  weight: yup
    .string()
    .required()
    .test('is-num', 'Weight must be a number > 0', val => {
      return parseInt(val) > 0;
    }),
  gender: yup.string().required(),
});

const GeneralForm = () => {
  const dispatch = useDispatch();
  const initialData = useSelector(state => state.generalDetail);
  const showLoading = useSelector(state => state.loading);

  const submitForm = data => {
    dispatch(apiCall(data)).then(returnedValue => {
      if (commonUtils.isValidResponse(returnedValue)) {
        dispatch(addGeneralDetail(returnedValue.data));
        dispatch(changeStep(3));
      } else {
        Alert.alert('Error', 'Something went wrong.');
      }
    });
  };
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={[commonStyles.flex1, commonStyles.verticalCenter]}>
        <Loader visible={showLoading.loading} />
        <Formik
          initialValues={initialData}
          validationSchema={validationSchema}
          onSubmit={values => {
            submitForm(values);
          }}>
          {formikProps => (
            <View>
              <TextInput
                style={commonStyles.input}
                placeholder="Enter Weight in kg"
                onChangeText={formikProps.handleChange('weight')}
                value={formikProps.values.weight}
                keyboardType="numeric"
                onBlur={formikProps.handleBlur('weight')}
              />
              <Text style={commonStyles.errorText}>
                {formikProps.touched.weight && formikProps.errors.weight}
              </Text>
              <CheckBox
                title="Gender"
                data={{firstButtonTitle: 'MALE', secondButtonTitle: 'FEMALE'}}
                value={formikProps.values.gender}
                onChange={formikProps.handleChange('gender')}
              />
              <Text style={commonStyles.errorText}>
                {formikProps.touched.gender && formikProps.errors.gender}
              </Text>
              <Button title="NEXT" onPress={formikProps.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </TouchableNativeFeedback>
  );
};

export default GeneralForm;
