import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  switchContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  switchStyle: {
    width: '45%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  switchText: {
    fontSize: 14,
    fontWeight: '700',
    paddingVertical: 10,
    textAlign: 'center',
  },
});

export default styles;
