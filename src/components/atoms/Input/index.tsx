import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { scaleSize } from '../../../helper/responsive';
import { colors } from '../../../utils/colors';
import { styles } from './styles';
import { InputProps } from './types';

const Input = ({
  error,
  onFocus,
  onBlur,
  style,
  isPassword,
  errorText,
  togglePasswordVisibility,
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
      <>
            <TextInput
        style={[getInputStyle(), style]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor={getPlaceholderColor()}
        {...props}
      />
      {!!isPassword && (
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Image source={require('../../../assets/images/visible.png')} style={{ width: scaleSize(20), height: scaleSize(20), position: 'absolute', right: scaleSize(10), bottom: scaleSize(20) }} />
        </TouchableOpacity>
      )}
      </>

      {error && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
};

export default Input; 