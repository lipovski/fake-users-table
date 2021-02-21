import React from 'react';

import { useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { editUserData } from '../../slices/usersSlice';
import { Iprops } from './types';

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

  const handleFormSubmit = handleSubmit((data) => {
    dispatch(editUserData(data));
    offFormVisibility();
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
