import React from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../../services/fetchUsersService';
import deleteUserService from '../../services/deleteUserService';
import { selectUserForm, deleteUser } from '../../slices/usersSlice';
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
} => {
  const dispatch = useDispatch();

  const [isFormVisible, setIsFormVisible] = React.useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const users = useSelector(
    (state: RootStateOrAny) => state.usersReducer.users
  );

  const selectedUserModal = useSelector(
    (state: RootStateOrAny) => state.usersReducer.selectedUser
  );

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

  const toggleModalOn = (selectedUser) => {
    setIsModalVisible(true);
    dispatch(selectUserForm(selectedUser));
  };

  const toggleModalOff = () => {
    setIsModalVisible(false);
    dispatch(selectUserForm({}));
  };

  const handleUserDelete = async () => {
    await deleteUserService(selectedUserModal.id);
    dispatch(deleteUser(selectedUserModal.id));
    toggleModalOff();
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
  };
};

export default useDashboardHandler;
