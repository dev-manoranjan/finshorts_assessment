import {StyleSheet} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flex1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default styles;
