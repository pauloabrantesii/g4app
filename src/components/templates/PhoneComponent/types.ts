export interface PhoneComponentProps {
  phone: string;
  onPress: (num: string) => void;
  onDelete: () => void;
  onCall: () => void;
}
