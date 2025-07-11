import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { styles } from './styles';
import { LoginComponentProps, LoginFormData } from './types';

const LoginComponent = ({
  onLogin,
  isLoading = false,
}: LoginComponentProps) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

  console.log('formData', formData);

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    try {
      onLogin(formData);
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('login.welcome') as string}</Text>
        </View>

        <View style={styles.form}>
          <Input
            placeholder={t('login.loginPlaceholder') as string}
            value={formData.username}
            onChangeText={value => handleInputChange('username', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Input
            placeholder={t('login.passwordPlaceholder') as string}
            value={formData.password}
            onChangeText={value => handleInputChange('password', value)}
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
              onPress={handleLogin}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginComponent;
