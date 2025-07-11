import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PhoneComponent from '../../components/templates/PhoneComponent';
import { maskPhone } from '../../helper/mask';
import { selectUsers } from '../../store/favoritesSlice';

const PhoneContainer = () => {
  const [phone, setPhone] = useState('');
  const users = useSelector(selectUsers);

  const handlePress = (num: string) => {
    setPhone((prev) => maskPhone(prev + num));
  };

  const handleDelete = () => {
    setPhone((prev) => maskPhone(prev.replace(/\D/g, '').slice(0, -1)));
  };

  const handleCall = () => {
    const onlyNumbers = (str: string) => str.replace(/\D/g, '');
    const user = users.find((u: any) => onlyNumbers(u.phone) === onlyNumbers(phone));
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
