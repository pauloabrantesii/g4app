import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../utils/colors';
import { styles } from './styles';
import { ButtonProps } from './types';

const Button = ({
  title,
  disabled,
  isLoading = false,
  ...props
}: ButtonProps) => {

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled || isLoading}
      {...props}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={ colors.primary }
          style={styles.loadingContainer}
        />
      )}
      </View>

    </TouchableOpacity>
  );
};

export default Button; 