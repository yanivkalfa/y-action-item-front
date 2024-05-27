import { User } from '../../config/types/types';

export interface UserProps {
  user: User;
  selectedUser: string | undefined;
  setSelected: (userEmail: string | undefined) => void;
}