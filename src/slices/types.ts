import { Iuser } from '../types/common';

export interface Istate {
  loading: boolean;
  hasErrors: boolean;
  users: Iuser[];
  selectedUser: Iuser;
}
