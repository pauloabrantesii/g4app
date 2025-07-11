export interface AddUserModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (user: { image: any; name: string; phone: string }) => void;
} 