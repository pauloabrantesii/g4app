import { User } from '../../../types';

export interface HomeComponentProps {
  user: User;
  coords: { latitude: number; longitude: number } | null;
  onRegisterPress: () => void;
}
