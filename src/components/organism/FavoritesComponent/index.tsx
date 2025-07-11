import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import { styles } from './styles';

const FavoritesComponent = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Image source={require('../../../assets/images/goBack.png')} />
          <Text style={styles.title}>{t('home.register')}</Text>
        </TouchableOpacity>
        </View>

      </View>
      
      <View style={styles.content}>
      
      </View>
    </View>
  );
};

export default FavoritesComponent;
