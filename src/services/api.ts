import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiResponse, Customer, LoginCredentials, User } from '../types';

export class ApiService {
  private api: AxiosInstance;
  private static instance: ApiService;

  private constructor() {
    this.api = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com',
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
          // Token expirado, redirecionar para login
          AsyncStorage.removeItem('accessToken');
        }
        return Promise.reject(error);
      }
    );
  }

  public async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User; token: string }>> {
    try {
      // Simulando login com API pública
      await this.api.post('/users/1', credentials);
      
      // Simulando resposta de login
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'Usuário Teste',
      };

      const mockToken = 'mock-jwt-token-' + Date.now();

      await AsyncStorage.setItem('accessToken', mockToken);
      await AsyncStorage.setItem('user', JSON.stringify(mockUser));

      return {
        data: { user: mockUser, token: mockToken },
        message: 'Login realizado com sucesso',
        success: true,
      };
    } catch (error) {
      throw new Error('Erro ao realizar login');
    }
  }

  public async getCustomers(): Promise<ApiResponse<Customer[]>> {
    try {
      const response = await this.api.get('/users');
      
      // Transformando dados da API em formato de Customer
      const customers: Customer[] = response.data.map((user: any) => ({
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        phone: `+55 11 99999-${user.id.toString().padStart(4, '0')}`,
        company: `Empresa ${user.id}`,
        address: {
          street: `${user.address?.street || 'Rua Teste'} ${user.id}`,
          city: user.address?.city || 'São Paulo',
          state: 'SP',
          zipCode: '01234-567',
        },
      }));

      return {
        data: customers,
        message: 'Clientes carregados com sucesso',
        success: true,
      };
    } catch (error) {
      throw new Error('Erro ao carregar clientes');
    }
  }

  public async getCustomerById(id: string): Promise<ApiResponse<Customer>> {
    try {
      const response = await this.api.get(`/users/${id}`);
      
      const customer: Customer = {
        id: response.data.id.toString(),
        name: response.data.name,
        email: response.data.email,
        phone: `+55 11 99999-${response.data.id.toString().padStart(4, '0')}`,
        company: `Empresa ${response.data.id}`,
        address: {
          street: `${response.data.address?.street || 'Rua Teste'} ${response.data.id}`,
          city: response.data.address?.city || 'São Paulo',
          state: 'SP',
          zipCode: '01234-567',
        },
      };

      return {
        data: customer,
        message: 'Cliente carregado com sucesso',
        success: true,
      };
    } catch (error) {
      throw new Error('Erro ao carregar cliente');
    }
  }

  public async logout(): Promise<void> {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('user');
  }
}

export default ApiService.getInstance(); 