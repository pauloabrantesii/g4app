import { NavigationProps } from '../../types';

export interface CustomerDetailContainerProps extends NavigationProps {
  route: {
    params: {
      customerId: string;
    };
  };
} 