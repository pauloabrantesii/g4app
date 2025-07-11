import React from 'react';
import { Image, Text, View } from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import UserCard from '../../templates/UserCard';
import { styles } from './styles';

const HomeComponent = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('home.hello')}, Paulo</Text>
          <View style={styles.LocationContainer}>
            <View style={styles.LocationContainer}>
              <Image source={require('../../../assets/images/Location.png')} />
              <Text style={styles.locationText}>A5874125</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.geoLocationContainer}>
        <Image source={require('../../../assets/images/geolocation.png')} />
      </View>
      <View style={styles.userCardContainer}>
            <UserCard title={t('home.register')} onPress={() => {}} />
            <UserCard title={t('home.consultOrganization')} onPress={() => {}} />
      </View>

    </View>
  );
};

export default HomeComponent;
