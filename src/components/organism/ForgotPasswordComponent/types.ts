

export interface ForgotPasswordFormData {
  email: string;
}

export interface ForgotPasswordComponentProps {
  onForgotPassword: (formData: ForgotPasswordFormData) => void;
  isLoading?: boolean;
  error?: boolean;
}