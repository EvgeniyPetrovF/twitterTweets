import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

const DetailScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextWrapper>Details!</TextWrapper>
    </SafeAreaView>
  );
};
export default DetailScreen;
