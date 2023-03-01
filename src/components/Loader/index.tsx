import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import TextWrapper from '../TextWrapper';

import {styles} from './styles';

interface LoaderProps {
  label?: string;
}

const Loader = ({label}: LoaderProps) => {
  return (
    <View style={styles.centeredView}>
      <ActivityIndicator color={'white'} />
      <TextWrapper style={styles.text}>{label || 'Loading'}...</TextWrapper>
    </View>
  );
};

export default Loader;
