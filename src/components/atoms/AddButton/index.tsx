import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { AddButtonProps } from './types';

const AddButton = ({
  onPress,
  ...props
}: AddButtonProps) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      {...props}
    >
      <View style={styles.content}>
        <Image source={require('../../../assets/images/plus.png')} />
      </View>

    </TouchableOpacity>
  );
};

export default AddButton;