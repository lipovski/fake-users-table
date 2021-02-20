import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  users: [],
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
  },
});

export default usersSlice.reducer;

export const {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
} = usersSlice.actions;
