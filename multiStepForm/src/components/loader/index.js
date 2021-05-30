import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';
import styles from './style';

const Loader = props => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="fade"
      style={commonStyles.flex1}>
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={'blue'} />
        </View>
      </View>
    </Modal>
  );
};
export default Loader;
