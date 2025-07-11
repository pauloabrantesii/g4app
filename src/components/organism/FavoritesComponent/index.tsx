import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import { colors } from '../../../utils/colors';
import UserInfoCard from '../../molecules/UserInfoCard';
import { styles } from './styles';

const FavoritesComponent = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <Text style={styles.backButtonText}>←</Text>
          <Text style={styles.title}>{t('home.register')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <Image source={require('../../../assets/images/search.png')} />
          <TextInput
            style={styles.input}
            placeholderTextColor={colors.gray}
            placeholder={t('favorites.search')}
          />
        </View>
        <View style={styles.userInfoCardContainer}>
          <UserInfoCard
            image={require('../../../assets/images/person.png')}
            name="John Doe"
            phone="1234567890"
          />
          <UserInfoCard
            image={require('../../../assets/images/person.png')}
            name="John Doe"
            phone="1234567890"
          />

        </View>
      </View>
    </SafeAreaView>
  );
};

export default FavoritesComponent;
