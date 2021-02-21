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
      // If user exist than set its values to state, if not than use initial state
      const newUser = { ...initialState.selectedUser };
      state.selectedUser = !payload ? newUser : payload;
    },

    addNewUser: (state, { payload }) => {
      // 1. Copy current users array to avoid mutation
      // 2. Create new user
      // 3. Add to existing users

      const currentUsers = [...current(state.users)];

      const newUser = {
        ...payload,
        address: { city: payload.city },
      };

      const users = [...currentUsers, newUser];

      return { ...state, users };
    },

    deleteUser: (state, { payload }) => {
      const currentUsers = [...current(state.users)];
      const users = currentUsers.filter((user) => user.id !== payload);
      return { ...state, users };
    },

    editUserData: (state, { payload }) => {
      // 1. Copy current users array to avoid mutation
      // 2. Find user by id
      // 3. Edit user properties
      // 4. Add user to array and sort ascening by id

      const currentUsers = [...current(state.users)];

      const selectedUser = currentUsers.filter(
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
        ...currentUsers.filter((user) => user.id !== state.selectedUser.id),
        updatedUser,
      ].sort((a, b) => a.id - b.id);

      return { ...state, users };
    },

    sortUsers: (state, { payload }) => {
      const currentUsers = [...current(state.users)];
      const users =
        payload.order === 'asc'
          ? currentUsers.sort((a, b) =>
              a[payload.id].localeCompare(b[payload.id])
            )
          : currentUsers.sort((a, b) =>
              b[payload.id].localeCompare(a[payload.id])
            );

      return { ...state, users };
    },
  },
});

export default usersSlice.reducer;

export const {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  addNewUser,
  deleteUser,
  editUserData,
  selectUserForm,
  sortUsers,
} = usersSlice.actions;
