import {ITweet} from '../../features/Home/components/Tweet';

export type HomeStackParamList = {
  Home: undefined;
  Details: {item: ITweet; userName: string};
};
