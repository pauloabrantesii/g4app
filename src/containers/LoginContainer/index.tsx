import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginComponent from '../../components/organism/LoginComponent';
import { LoginFormData } from '../../components/organism/LoginComponent/types';
import api from '../../services/api';
import { AppState } from '../../store';
import { setLoading, setToken, setUser } from '../../store/authSlice';
import { LoginCredentials } from '../../types';
const LoginContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: AppState) => state.auth);
  const [error, setError] = useState(false);

  const handleLogin = async (formData: LoginFormData) => {
    try {
      dispatch(setLoading(true));
      setError(false);

      const credentials: LoginCredentials = {
        username: formData.username,
        password: formData.password,
      };

      const response = await api.login(credentials);
      
      if (response.accessToken) {
        await AsyncStorage.setItem('accessToken', response.accessToken);
      }

      dispatch(setToken(response.accessToken));
      dispatch(setUser(response));
      dispatch(setLoading(false));
      
    } catch (error: any) {
      console.error('error', error);
      setError(true);
      dispatch(setLoading(false));
    }
  };
  const handleForgotPassword = async () => {
    navigation.navigate('ForgotPassword' as never);
  };

  return <LoginComponent onLogin={handleLogin} handleForgotPassword={handleForgotPassword} isLoading={isLoading} error={!!error} />;
};

export default LoginContainer;
