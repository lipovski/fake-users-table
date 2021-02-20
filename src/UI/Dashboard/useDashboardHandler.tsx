import React from 'react';

import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../../services/fetchUsers';

const useDashboardHandler = () => {
  const dispatch = useDispatch();

  const users = useSelector(
    (state: RootStateOrAny) => state.usersReducer.users
  );

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return { users };
};

export default useDashboardHandler;
