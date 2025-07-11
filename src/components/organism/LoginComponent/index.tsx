import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { styles } from './styles';
import { LoginComponentProps, LoginFormData } from './types';

const LoginComponent = ({
  onLogin,
  handleForgotPassword,
  isLoading = false,
  error = false,
}: LoginComponentProps) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  });

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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
                error={error}
                errorText={t('login.loginError')}
              />

              <Input
                placeholder={t('login.passwordPlaceholder') as string}
                value={formData.password}
                onChangeText={value => handleInputChange('password', value)}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                error={error}
                errorText={t('login.loginError')}
              />

              <TouchableOpacity
                style={styles.forgotPasswordContainer}
                onPress={handleForgotPassword}
              >
                <Text style={styles.forgotPasswordText}>
                  {t('login.forgotPassword')}
                </Text>
              </TouchableOpacity>

              <View style={styles.buttonContainer}>
                <Button
                  title={t('login.enterButton')}
                  onPress={handleLogin}
                  isLoading={isLoading}
                  disabled={isLoading}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginComponent;
