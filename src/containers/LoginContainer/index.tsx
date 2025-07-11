import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginComponent from '../../components/organism/LoginComponent';
import { LoginFormData } from '../../components/organism/LoginComponent/types';
import api from '../../services/api';
import { AppState } from '../../store';
import { clearError, setError, setLoading, setToken, setUser } from '../../store/authSlice';
import { LoginCredentials } from '../../types';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state: AppState) => state.auth);

  const handleLogin = async (formData: LoginFormData) => {
    try {
      dispatch(setLoading(true));
      dispatch(clearError());

      const credentials: LoginCredentials = {
        username: formData.username,
        password: formData.password,
      };

      const response = await api.login(credentials);
      console.log('response', response);
      
      if (response.accessToken) {
        await AsyncStorage.setItem('accessToken', response.accessToken);
      }

      dispatch(setToken(response.accessToken));
      dispatch(setUser(response.user));
      dispatch(setLoading(false));
      
    } catch (error: any) {
      console.log('deu erro', error);
      dispatch(setError(error.message || 'Erro ao fazer login'));
      dispatch(setLoading(false));
    }
  };

  return <LoginComponent onLogin={handleLogin} isLoading={isLoading} error={!!error} />;
};

export default LoginContainer;
