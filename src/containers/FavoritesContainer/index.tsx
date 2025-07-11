import React, { useRef, useState } from 'react';
import { Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesComponent from '../../components/organism/FavoritesComponent';
import AddUserModal from '../../components/templates/AddUserModal';
import { addUser, selectUsers } from '../../store/favoritesSlice';

const FavoritesContainer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  console.log('users', users);

  const handleOpenModal = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
      setModalVisible(true);
    });
  };

  const handleAddUser = (user: User) => {
    console.log('user', user);
    dispatch(addUser(user));
  };

  return (
    <>
      <FavoritesComponent
        onAddPress={handleOpenModal}
        rotateAnim={rotateAnim}
        users={users}
      />
      <AddUserModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddUser}
      />
    </>
  );
};

export default FavoritesContainer;