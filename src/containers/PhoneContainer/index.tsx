import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PhoneComponent from '../../components/templates/PhoneComponent';
import { selectUsers } from '../../store/favoritesSlice';

const PhoneContainer = () => {
  const [phone, setPhone] = useState('');
  const users = useSelector(selectUsers);

  const handlePress = (num: string) => {
    setPhone((prev) => prev + num);
  };

  const handleDelete = () => {
    setPhone((prev) => prev.slice(0, -1));
  };

  const handleCall = () => {
    const user = users.find((u: any) => u.phone === phone);
    if (user) {
      Alert.alert('Ligando...', `Ligando para ${user.name}`);
    } else {
      Alert.alert('Número não encontrado', 'Esse número não está nos favoritos.');
    }
  };

  return (
    <PhoneComponent
      phone={phone}
      onPress={handlePress}
      onDelete={handleDelete}
      onCall={handleCall}
    />
  );
};

export default PhoneContainer;
