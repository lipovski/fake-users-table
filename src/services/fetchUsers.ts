import axiosConfig from '../config/axiosConfig';
import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
} from '../slices/usersSlice';

export default () => {
  const usersUrl = '/users';
  return async (dispatch) => {
    dispatch(getUsers());
    try {
      const data = await axiosConfig.get(usersUrl);
      dispatch(getUsersSuccess(data.data));
    } catch (e) {
      dispatch(getUsersFailure());
    }
  };
};
