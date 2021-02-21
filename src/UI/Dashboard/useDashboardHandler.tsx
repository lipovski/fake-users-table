import React from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { selectUserForm, deleteUser, sortUsers } from '../../slices/usersSlice';

import fetchUsers from '../../services/fetchUsersService';
import deleteUserService from '../../services/deleteUserService';
import { Iuser } from '../../types/common';

const useDashboardHandler = (): {
  users: Iuser[];
  isFormVisible: boolean;
  onFormVisibility: (selectedUser: Iuser | null) => void;
  offFormVisibility: () => void;
  handleUserDelete: () => void;
  toggleModalOn: (selectedUser: Iuser) => void;
  toggleModalOff: () => void;
  isModalVisible: boolean;
  sortUsersHandler: (columnName: { id: string; order: string }) => void;
} => {
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const { users, selectedUser } = useSelector(
    (state: RootStateOrAny) => state.usersReducer
  );

  const onFormVisibility = (user) => {
    setIsFormVisible(true);
    dispatch(selectUserForm(user));
  };

  const offFormVisibility = () => {
    setIsFormVisible(false);
    dispatch(selectUserForm({}));
  };

  const toggleModalOn = (user) => {
    setIsModalVisible(true);
    dispatch(selectUserForm(user));
  };

  const toggleModalOff = () => {
    setIsModalVisible(false);
    dispatch(selectUserForm({}));
  };

  const handleUserDelete = async () => {
    await deleteUserService(selectedUser.id);
    dispatch(deleteUser(selectedUser.id));
    toggleModalOff();
  };

  const sortUsersHandler = (columnName) => {
    dispatch(sortUsers(columnName));
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
    toggleModalOn,
    toggleModalOff,
    isModalVisible,
    sortUsersHandler,
  };
};

export default useDashboardHandler;
