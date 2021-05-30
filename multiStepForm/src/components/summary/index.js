import React from 'react';
import {View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {commonStyles} from '../../styles/commonStyles';
import Button from '../button';
import ShowSummary from './showSummaryData';
const Summary = () => {
  const basicData = useSelector(state => state.basicDetail);
  const generalData = useSelector(state => state.generalDetail);
  return (
    <View style={[commonStyles.flex1, commonStyles.verticalCenter]}>
      <ShowSummary title="Name" text={basicData.name} />
      <ShowSummary title="Age" text={basicData.age} />
      <ShowSummary title="Weight" text={generalData.weight} />
      <ShowSummary title="Gender" text={generalData.gender} />
      <Button
        title="FINISH"
        onPress={() =>
          Alert.alert('Welcome', 'Registration completed successfully. Thanks')
        }
      />
    </View>
  );
};

export default Summary;
