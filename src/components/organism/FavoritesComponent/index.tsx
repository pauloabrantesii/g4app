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
import AddButton from '../../atoms/AddButton';
import UserInfoCard from '../../molecules/UserInfoCard';
import { styles } from './styles';

interface User {
  image: any;
  name: string;
  phone: string;
}

const FavoritesComponent = ({ onAddPress, users }: { onAddPress: () => void, users: User[] }) => {
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
          {users?.map((user, idx) => (
            <UserInfoCard
              key={idx}
              image={user.image}
              name={user.name}
              phone={user.phone}
            />
          ))}
        </View>
      </View>
      <View style={styles.addButtonContainer}>
        <AddButton onPress={onAddPress} />
      </View>
    </SafeAreaView>
  );
};

export default FavoritesComponent;
