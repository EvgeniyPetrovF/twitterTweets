import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    minWidth: '60%',
    backgroundColor: 'dodgerblue',
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  disabledButton: {
    opacity: 0.3,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});
