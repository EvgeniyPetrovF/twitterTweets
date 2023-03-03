import React, {FC} from 'react';
import {View} from 'react-native';
import Moment from 'moment';
import TextWrapper from '../../../../components/TextWrapper';
import {styles} from './styles';

export interface ITweet {
  authorNickname?: string;
  author_id: string;
  created_at: string;
  id: string;
  text: string;
}

const Tweet: FC<ITweet> = ({created_at, text, authorNickname}) => {
  return (
    <View>
      <View style={styles.header}>
        <TextWrapper style={styles.nickname}>@{authorNickname}</TextWrapper>
        <TextWrapper>{Moment(created_at).format('D MMM YYYY')}</TextWrapper>
      </View>
      <TextWrapper>{text}</TextWrapper>
    </View>
  );
};

export default Tweet;
