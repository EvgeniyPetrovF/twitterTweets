import React, {FC, useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMMKVString} from 'react-native-mmkv';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Tweet, {ITweet} from '../../components/Tweet';
import Loader from '../../../../components/Loader';
import TextWrapper from '../../../../components/TextWrapper';
import TweetsAPI from '../../../../services/API/Tweets';
import {HomeStackParamList} from '../../../../models/navigation';
import {StorageKeys} from '../../../../models/storage';
import Animated, {withTiming} from 'react-native-reanimated';
import useAnimatedOpacity from '../../../../common/hooks/useAnimatedOpacity';

const ListEmptyComponent: FC = () => {
  return <TextWrapper>No items</TextWrapper>;
};

const keyExtractor = (item: ITweet) => {
  return item.id;
};

const ItemSeparatorComponent: FC = () => {
  return <View style={styles.separator} />;
};

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const animationDuration = 300;

const HomeScreen: FC<Props> = ({navigation}) => {
  const [userName] = useMMKVString(StorageKeys.userName);
  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState<ITweet[]>();
  const {opacity: listOpacity, animatedOpacityStyle} = useAnimatedOpacity();

  const fetchTweets = async () => {
    try {
      if (userName) {
        const response = await TweetsAPI.getTweets({userName});
        setTweets(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const initialFetchTweets = async () => {
    setIsLoading(true);
    await fetchTweets();
    setIsLoading(false);
  };

  useEffect(() => {
    initialFetchTweets();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      listOpacity.value = withTiming(1, {duration: animationDuration});
    } else {
      listOpacity.value = 0;
    }
  }, [listOpacity, isLoading]);

  const renderTweet: ListRenderItem<ITweet> = ({item}) => {
    const navigateToTweet = () => {
      if (userName) {
        navigation.navigate('Details', {item, userName});
      }
    };

    return (
      <TouchableOpacity onPress={navigateToTweet}>
        <Tweet authorNickname={userName} {...item} />
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent: FC = useCallback(() => {
    return (
      <TextWrapper style={styles.listHeader}>
        {`${userName}'s tweets:`}
      </TextWrapper>
    );
  }, [userName]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <Animated.View style={animatedOpacityStyle}>
          <FlatList
            data={tweets}
            renderItem={renderTweet}
            onRefresh={fetchTweets}
            refreshing={isLoading}
            ListHeaderComponent={ListHeaderComponent}
            ItemSeparatorComponent={ItemSeparatorComponent}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={keyExtractor}
          />
        </Animated.View>
      )}
    </SafeAreaView>
  );
};
export default HomeScreen;
