import React from 'react';

import { Button } from '@material-ui/core';

import useFormStyles from './styles';
import useFormHandler from './useFormHandler';
import validation from './validation';

import colors from '../../constants/Colors';
import TextInput from '../../components/TextInput';

import C from '../../constants/form';

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
        name={C.NAME}
        title="Name"
        inputRef={register(validation.name)}
        error={errors.name}
        defaultValue={selectedUser?.name}
      />

      <TextInput
        name={C.EMAIL}
        title="Email"
        inputRef={register(validation.email)}
        error={errors.email}
        defaultValue={selectedUser?.email}
      />

      <TextInput
        name={C.USERNAME}
        title="Username"
        inputRef={register(validation.username)}
        error={errors.username}
        defaultValue={selectedUser?.username}
      />

      <TextInput
        name={C.CITY}
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
