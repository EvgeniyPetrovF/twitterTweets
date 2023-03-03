import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const useAnimatedOpacity = () => {
  const opacity = useSharedValue(0);

  const animatedOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return {opacity, animatedOpacityStyle};
};

export default useAnimatedOpacity;
