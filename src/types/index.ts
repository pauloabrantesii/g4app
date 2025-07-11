export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface CustomerState {
  customers: Customer[];
  selectedCustomer: Customer | null;
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  customer: CustomerState;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface ApiResponse{
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  image: string;
  phone: string;
  token: string;
}

export interface NavigationProps {
  navigation: any;
  route: any;
} 