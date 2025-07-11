import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { styles } from './styles';
import { LoginFormData } from './types';

const LoginComponent = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('login.welcome') as string}</Text>
        </View>

        <View style={styles.form}>
          <Input
            placeholder={t('login.loginPlaceholder') as string}
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          
          <Input
            placeholder={t('login.passwordPlaceholder') as string}
            value={formData.password}
            onChangeText={(value) => handleInputChange('password', value)}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
          
          <TouchableOpacity 
            style={styles.forgotPasswordContainer}
            onPress={() => {}}
          >
            <Text style={styles.forgotPasswordText}>
              {t('login.forgotPassword') as string}
            </Text>
          </TouchableOpacity>
          
          <View style={styles.buttonContainer}>
            <Button
              title={t('login.enterButton') as string}
              onPress={() => {}}
              isLoading={false}
              disabled={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginComponent; 