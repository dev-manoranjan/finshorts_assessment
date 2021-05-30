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
import {apiCall} from '../../actions/apiCall';
import {addBasicDetail} from '../../actions/basicDetail';
import {changeStep} from '../../actions/step';
import Loader from '../loader';
import {commonUtils} from '../../utils/commonUtils';
const validationSchema = yup.object({
  name: yup.string().required(),
  age: yup
    .string()
    .required()
    .test('is-num', 'Age must be a number > 0', val => {
      return parseInt(val) > 0;
    }),
});

const BasicForm = () => {
  const dispatch = useDispatch();
  const initialData = useSelector(state => state.basicDetail);
  const showLoading = useSelector(state => state.loading);

  const submitForm = data => {
    dispatch(apiCall(data)).then(returnedValue => {
      if (commonUtils.isValidResponse(returnedValue)) {
        dispatch(addBasicDetail(returnedValue.data));
        dispatch(changeStep(2));
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
                placeholder="Enter Name"
                onChangeText={formikProps.handleChange('name')}
                value={formikProps.values.name}
                onBlur={formikProps.handleBlur('name')}
              />
              <Text style={commonStyles.errorText}>
                {formikProps.touched.name && formikProps.errors.name}
              </Text>
              <TextInput
                style={commonStyles.input}
                placeholder="Enter Age"
                onChangeText={formikProps.handleChange('age')}
                value={formikProps.values.age}
                keyboardType="numeric"
                onBlur={formikProps.handleBlur('age')}
              />
              <Text style={commonStyles.errorText}>
                {formikProps.touched.age && formikProps.errors.age}
              </Text>
              <Button title="NEXT" onPress={formikProps.handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </TouchableNativeFeedback>
  );
};

export default BasicForm;
