import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import TextWrapper from '../TextWrapper';
import {styles} from './styles';

interface TextInputWrapperProps extends TextInputProps {
  label?: string;
  error?: string;
}

const TextInputWrapper = ({
  label,
  style,
  error,
  ...props
}: TextInputWrapperProps) => {
  return (
    <View style={styles.container}>
      {label && <TextWrapper style={styles.label}>{label}</TextWrapper>}
      <TextInput
        allowFontScaling={false}
        style={[styles.input, style]}
        {...props}
      />
      {error && <TextWrapper style={styles.errorText}>{error}</TextWrapper>}
    </View>
  );
};

export default TextInputWrapper;
