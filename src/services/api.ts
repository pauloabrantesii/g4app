import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LoginCredentials } from '../types';

export class ApiService {
  private api: AxiosInstance;
  private static instance: ApiService;

  private constructor() {
    this.api = axios.create({
      baseURL: 'https://dummyjson.com',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private setupInterceptors(): void {
    this.api.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error.response?.status === 401) {
          AsyncStorage.removeItem('accessToken');
        }
        return Promise.reject(error);
      }
    );
  }


  public async login(credentials: LoginCredentials) {
    try {
      const response = await this.api.post('/auth/login', {
        username: credentials.username,
        password: credentials.password,
      });
      const { accessToken } = response.data;
      await AsyncStorage.setItem('accessToken', accessToken);
      return response.data;
    } catch (error: any) {
      console.error('Erro detalhado do login:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText,
      });
      throw error;
    }
  }

}

export default ApiService.getInstance(); 