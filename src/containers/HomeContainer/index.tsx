import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HomeComponent from '../../components/organism/HomeComponent';
import { selectUser } from '../../store/authSlice';

const HomeContainer = () => {
  const user = useSelector(selectUser);
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log('Erro ao obter localização:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <HomeComponent user={user} coords={coords} />
  );
};

export default HomeContainer; 