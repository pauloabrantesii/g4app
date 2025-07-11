import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { scaleSize } from '../../../helper/responsive';
import { useTranslation } from '../../../hooks/useTranslation';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { styles } from './styles';
import { ForgotPasswordComponentProps, ForgotPasswordFormData } from './types';

interface Props extends ForgotPasswordComponentProps {
  feedback?: string | null;
}

const ForgotPasswordComponent = ({
  onForgotPassword,
  isLoading = false,
  error = false,
  feedback,
}: Props) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    email: '',
  });

  const handleInputChange = (
    field: keyof ForgotPasswordFormData,
    value: string,
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = () => {
    try {
      onForgotPassword(formData);
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('login.welcome')}</Text>
        </View>

        <View style={styles.form}>
          <Input
            placeholder={'e-mail'}
            value={formData.email}
            onChangeText={value => handleInputChange('email', value)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            error={error}
            errorText={t('login.loginError')}
          />

          <View style={styles.buttonContainer}>
            <Button
              title={
                isLoading ? t('login.sendingButton') : t('login.sendButton')
              }
              onPress={handleLogin}
              isLoading={isLoading}
              disabled={isLoading}
            />
          </View>
          {feedback && (
            <Text
              style={{
                color: 'green',
                textAlign: 'center',
                marginTop: scaleSize(16),
              }}
            >
              {feedback}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordComponent;
