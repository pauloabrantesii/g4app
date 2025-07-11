import { NavigationProps } from '../../../types';

export interface LoginContainerProps extends NavigationProps {}

export interface LoginFormData {
  email: string;
  password: string;
}