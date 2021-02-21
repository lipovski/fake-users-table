import React from 'react';

import { TextField } from '@material-ui/core';
import useTextInputStyles from './styles';

interface Iprops {
  title: string;
  name: string;
  error: { message: string };
  defaultValue: string;
  inputRef: any;
}

const TextInput: React.FC<Iprops> = ({
  title,
  name,
  error,
  inputRef,
  defaultValue,
}) => {
  const classes = useTextInputStyles();
  return (
    <div className={classes.container}>
      <p>{title}</p>
      <div className={classes.inputContainer}>
        <TextField
          inputRef={inputRef}
          name={name}
          variant="outlined"
          defaultValue={defaultValue}
        />
        <p className={classes.error}>{error?.message}</p>
      </div>
    </div>
  );
};

export default TextInput;
