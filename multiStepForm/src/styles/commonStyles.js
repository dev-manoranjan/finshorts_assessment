import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
  },
  verticalCenter: {justifyContent: 'center'},
  alignCenterScrollView: {flexGrow: 1, justifyContent: 'center'},
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
  },
});

export {commonStyles};
