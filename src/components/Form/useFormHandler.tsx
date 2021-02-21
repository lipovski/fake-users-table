import React from 'react';

import { useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { editUserData, addNewUser } from '../../slices/usersSlice';
import { Iprops } from './types';
import createUserService from '../../services/createUserService';
import editUserService from '../../services/editUserService';

const initialState = {
  name: '',
  email: '',
  city: '',
  username: '',
};

const useFormHandler = ({ offFormVisibility }: Iprops) => {
  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { selectedUser } = useSelector(
    (state: RootStateOrAny) => state.usersReducer
  );

  const [formValues, setFormValues] = React.useState<{
    name: string;
    email: string;
    username: string;
    city: string;
  }>(initialState);

  const handleChange = (e) =>
    setFormValues({ ...formValues, [e.name]: e.target.value });

  const handleFormSubmit = handleSubmit(async (data) => {
    // check whether user id exist. If not than create new user, if yest than update existing user.

    const isNew = selectedUser.id === 0;

    const result = isNew
      ? await createUserService(data)
      : await editUserService({ ...data, id: selectedUser.id });

    if (!result.error) {
      const submit = isNew
        ? addNewUser({ ...data, id: result.id })
        : editUserData(data);

      dispatch(submit);
      offFormVisibility();
    }
  });

  return {
    formValues,
    handleChange,
    handleFormSubmit,
    register,
    errors,
    selectedUser,
  };
};

export default useFormHandler;
