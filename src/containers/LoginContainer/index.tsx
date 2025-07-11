import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import LoginComponent from '../../components/organism/LoginComponent';
import { LoginFormData } from '../../components/organism/LoginComponent/types';
import { RootStackParamList } from '../../navigation/types';
import api from '../../services/api';
import { LoginCredentials } from '../../types';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async (formData: LoginFormData) => {
    try {
      setIsLoading(true);

      const credentials: LoginCredentials = {
        username: formData.username,
        password: formData.password,
      };

      const response = await api.login(credentials);
      console.log('Login realizado com sucesso', response);
      navigation.navigate('MainTabs');
    } catch (error) {
      console.log('deu erro', error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return <LoginComponent onLogin={handleLogin} isLoading={isLoading} error={error} />;
};

export default LoginContainer;
