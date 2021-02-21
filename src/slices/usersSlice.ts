import { createSlice, current } from '@reduxjs/toolkit';
import { Istate } from './types';

const initialState: Istate = {
  loading: false,
  hasErrors: false,
  users: [],
  selectedUser: {
    name: '',
    email: '',
    id: 0,
    username: '',
    address: { city: '' },
  },
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    getUsers: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, { payload }) => {
      state.users = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    selectUserForm: (state, { payload }) => {
      state.selectedUser = payload;
    },
    editUserData: (state, { payload }) => {
      const oldUsers = [...current(state.users)];

      const selectedUser = oldUsers.filter(
        (user) => user.id === state.selectedUser.id
      )[0];

      const updatedUser = {
        ...selectedUser,
        name: payload.name,
        email: payload.email,
        username: payload.username,
        address: { city: payload.city },
      };

      const users = [
        ...oldUsers.filter((user) => user.id !== state.selectedUser.id),
        updatedUser,
      ].sort((a, b) => a.id - b.id);

      return { ...state, users };
    },
  },
});

export default usersSlice.reducer;

export const {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  editUserData,
  selectUserForm,
} = usersSlice.actions;
