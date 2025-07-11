import React, { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Modal, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { maskPhone } from '../../../helper/mask';
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
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
                onChangeText={text => setPhone(maskPhone(text))}
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default AddUserModal; 