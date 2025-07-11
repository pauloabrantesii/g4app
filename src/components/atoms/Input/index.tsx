import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { styles } from './styles';
import { InputProps } from './types';

const Input = ({
  error,
  onFocus,
  onBlur,
  style,
  errorText,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const getInputStyle = () => {
    const inputStyle: any[] = [styles.input];
    
    if (isFocused) {
      inputStyle.push(styles.inputFocused);
    }
    
    if (error) {
      inputStyle.push(styles.inputError);
    }
    
    return inputStyle;
  };

  const getPlaceholderColor = () => {
    if (error) {
      return colors.error; 
    }
    return colors.secondary;
  };

  return (
    <View>
      <TextInput
        style={[getInputStyle(), style]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={getPlaceholderColor()}
        {...props}
      />
      {error && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

export default Input; 