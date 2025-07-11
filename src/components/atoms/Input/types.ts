import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: boolean;
  containerStyle?: any;
  errorText?: string;
}