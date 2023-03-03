import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const useAnimatedColor = (initialColor: string) => {
  const animatedColor = useSharedValue(initialColor);

  const animatedColorStyle = useAnimatedStyle(() => {
    return {
      color: animatedColor.value,
    };
  });

  return {animatedColor, animatedColorStyle};
};

export default useAnimatedColor;
