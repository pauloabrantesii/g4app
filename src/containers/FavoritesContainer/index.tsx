import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoritesComponent from '../../components/organism/FavoritesComponent';
import AddUserModal from '../../components/templates/AddUserModal';
import { addUser, selectUsers } from '../../store/favoritesSlice';

const FavoritesContainer = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleAddUser = (user: {
    name: string;
    phone: string;
    image: string;
  }) => {
    dispatch(addUser(user));
  };

  return (
    <>
      <FavoritesComponent onAddPress={handleOpenModal} users={users} />
      <AddUserModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleAddUser}
      />
    </>
  );
};

export default FavoritesContainer;
