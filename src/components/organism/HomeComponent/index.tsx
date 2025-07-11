import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import UserCard from '../../templates/UserCard';
import { styles } from './styles';
import { HomeComponentProps } from './types';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGF1bG9hYnJhbnRlc2lpIiwiYSI6ImNtY3lzcnNmNzBxNGoyanB1a3Y5azRmbWsifQ.EOfnCePVdqnny6_14WUh2g';



const HomeComponent = ({ user, coords, onRegisterPress }: HomeComponentProps ) => {
  const { t } = useTranslation();
  const myLatitude = coords?.latitude;

  const mapUrl = coords
    ? `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${coords.longitude},${coords.latitude},15,0/400x200?access_token=${MAPBOX_TOKEN}`
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('home.hello')}, {user?.username}</Text>
          <View style={styles.LocationContainer}>
            <View style={styles.LocationContainer}>
              <Image source={require('../../../assets/images/Location.png')} />
              <Text style={styles.locationText}>{myLatitude}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.geoLocationContainer}>
        {mapUrl ? (
          <Image
            source={{ uri: mapUrl }}
            style={{ width: 400, height: 200, borderRadius: 12 }}
            resizeMode="cover"
          />
        ) : (
          <Text>Obtendo localização...</Text>
        )}
      </View>
      <View style={styles.userCardContainer}>
            <UserCard title={t('home.register')} onPress={onRegisterPress} />
            <UserCard title={t('home.consultOrganization')} onPress={() => {}} />
      </View>

    </SafeAreaView>
  );
};

export default HomeComponent;
