import React from 'react';
import {Text, TextProps} from 'react-native';

const TextWrapper = (props: TextProps) => {
  return (
    <Text allowFontScaling={false} {...props}>
      {props.children}
    </Text>
  );
};

export default TextWrapper;
