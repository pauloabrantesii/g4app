import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from '../../utils/colors';
import { styles } from './styles';
import { LoadingProps } from './types';

const Loading: React.FC<LoadingProps> = ({
  size = 'large',
  color = colors.primary,
  text = 'Carregando...',
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  );
};

export default Loading; 