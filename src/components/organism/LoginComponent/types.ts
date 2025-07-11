import { NavigationProps } from '../../../types';

export interface LoginContainerProps extends NavigationProps {}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginComponentProps {
  onLogin: (formData: LoginFormData) => void;
  isLoading?: boolean;
  error?: boolean;
}