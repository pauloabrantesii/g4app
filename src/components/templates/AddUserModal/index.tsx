import React, { useState } from 'react';
import { Image, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface AddUserModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (user: { image: any; name: string; phone: string }) => void;
}

const AddUserModal = ({ visible, onClose, onSave }: AddUserModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [image] = useState(require('../../../assets/images/person.png'));

  const handleSave = () => {
    if (name && phone) {
      onSave({ image, name, phone });
      setName('');
      setPhone('');
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Adicionar Pessoa</Text>
          <Image source={image} style={styles.avatar} />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddUserModal; 