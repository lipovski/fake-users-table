import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    '&>button:first-of-type': {
      marginRight: '10px',
    },
  },
}));
