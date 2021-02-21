import React from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../../services/fetchUsers';
import { selectUserForm } from '../../slices/usersSlice';
import { Iuser } from '../../types/common';

const useDashboardHandler = (): {
  users: Iuser[];
  isFormVisible: boolean;
  onFormVisibility: (selectedUser: Iuser | null) => void;
  offFormVisibility: () => void;
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

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return { users, isFormVisible, onFormVisibility, offFormVisibility };
};

export default useDashboardHandler;
