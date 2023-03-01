import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextWrapper>Home!</TextWrapper>
    </SafeAreaView>
  );
};
export default HomeScreen;
