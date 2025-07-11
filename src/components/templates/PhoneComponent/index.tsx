import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { PhoneComponentProps } from './types';

const numbers = ['1','2','3','4','5','6','7','8','9','0'];

const PhoneComponent  = ({ phone, onPress, onDelete, onCall }:PhoneComponentProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={phone}
        editable={false}
        placeholder="Digite o número"
        placeholderTextColor="#aaa"
      />
      <View style={styles.keyboard}>
        {numbers.map((num) => (
          <TouchableOpacity key={num} style={styles.key} onPress={() => onPress(num)}>
            <Text style={styles.keyText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.key} onPress={onDelete}>
          <Text style={styles.keyText}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton} onPress={onCall}>
          <Text style={styles.callButtonText}>Ligar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneComponent;
