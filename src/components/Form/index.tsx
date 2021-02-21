import React from 'react';

import { Button } from '@material-ui/core';
import TextInput from '../TextInput';

import useFormStyles from './styles';
import useFormHandler from './useFormHandler';
import validation from './validation';

import colors from '../../constants/Colors';

interface Iprops {
  offFormVisibility: () => void;
}

const Form: React.FC<Iprops> = ({ offFormVisibility }) => {
  const classes = useFormStyles();

  const { handleFormSubmit, register, errors, selectedUser } = useFormHandler({
    offFormVisibility,
  });

  return (
    <form onSubmit={handleFormSubmit} className={classes.formContainer}>
      <TextInput
        name="name"
        title="Name"
        inputRef={register(validation.name)}
        error={errors.name}
        defaultValue={selectedUser?.name}
      />

      <TextInput
        name="email"
        title="Email"
        inputRef={register(validation.email)}
        error={errors.email}
        defaultValue={selectedUser?.email}
      />

      <TextInput
        name="username"
        title="Username"
        inputRef={register(validation.username)}
        error={errors.username}
        defaultValue={selectedUser?.username}
      />

      <TextInput
        name="city"
        title="City"
        inputRef={register(validation.city)}
        error={errors.city}
        defaultValue={selectedUser?.address?.city}
      />

      <div className={classes.buttonContainer}>
        <Button type="submit" style={{ color: colors.green }}>
          Submit
        </Button>
        <Button
          onClick={() => offFormVisibility()}
          style={{ color: colors.gray }}
        >
          cancel
        </Button>
      </div>
    </form>
  );
};

export default Form;
