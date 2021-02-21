import React from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../../services/fetchUsersService';
import { selectUserForm, deleteUser } from '../../slices/usersSlice';
import { Iuser } from '../../types/common';
import deleteUserService from '../../services/deleteUserService';

const useDashboardHandler = (): {
  users: Iuser[];
  isFormVisible: boolean;
  onFormVisibility: (selectedUser: Iuser | null) => void;
  offFormVisibility: () => void;
  handleUserDelete: (id: number) => void;
} => {
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);

  const onFormVisibility: (selectedUser: Iuser | null) => void = (
    selectedUser
  ) => {
    setIsFormVisible(true);
    dispatch(selectUserForm(selectedUser));
  };

  const offFormVisibility = () => {
    setIsFormVisible(false);
    dispatch(selectUserForm({}));
  };

  const users = useSelector(
    (state: RootStateOrAny) => state.usersReducer.users
  );

  const handleUserDelete = async (id) => {
    await deleteUserService(id);
    dispatch(deleteUser(id));
  };

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return {
    users,
    isFormVisible,
    onFormVisibility,
    offFormVisibility,
    handleUserDelete,
  };
};

export default useDashboardHandler;
