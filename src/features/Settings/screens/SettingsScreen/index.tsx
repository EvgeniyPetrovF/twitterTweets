import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

const SettingsScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextWrapper>Settings!</TextWrapper>
    </SafeAreaView>
  );
};
export default SettingsScreen;
