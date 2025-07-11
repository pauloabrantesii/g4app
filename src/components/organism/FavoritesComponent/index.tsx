import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { normalize } from '../../../helper/normalize';
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

const FavoritesComponent = ({
  onAddPress,
  users,
}: {
  onAddPress: () => void;
  users: User[];
}) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const filteredUsers = search.trim()
    ? users.filter(user => {
        const searchNorm = normalize(search);
        return normalize(user.name).includes(searchNorm);
      })
    : users;

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
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.userInfoCardContainer}>
          {filteredUsers?.map((user, idx) => (
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
