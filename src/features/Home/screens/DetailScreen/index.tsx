import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStackParamList} from '../../../../models/navigation';
import Tweet from '../../components/Tweet';
import {styles} from './styles';

type Props = NativeStackScreenProps<HomeStackParamList, 'Details'>;

const DetailScreen: FC<Props> = ({route}) => {
  const {item, userName} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Tweet authorNickname={userName} {...item} />
    </SafeAreaView>
  );
};
export default DetailScreen;
