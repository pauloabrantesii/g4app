import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeComponent from '../../components/organism/HomeComponent';
import AddUserModal from '../../components/templates/AddUserModal';
import { selectUser } from '../../store/authSlice';
import { addUser } from '../../store/favoritesSlice';

const HomeContainer = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Erro ao obter localização:', error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (err) {
      console.error('Erro inesperado ao tentar obter localização:', err);
    }
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleAddUser = (user: { name: string; phone: string; image: string }) => {
    dispatch(addUser(user));
    setModalVisible(false);
  };

  return (
    <>
      <HomeComponent user={user} coords={coords} onRegisterPress={handleOpenModal} />
      <AddUserModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddUser}
      />
    </>
  );
};

export default HomeContainer; 