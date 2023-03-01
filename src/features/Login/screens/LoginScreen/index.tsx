import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import TextWrapper from '../../../../components/TextWrapper';

import {styles} from './styles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <TextWrapper>Login</TextWrapper>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
