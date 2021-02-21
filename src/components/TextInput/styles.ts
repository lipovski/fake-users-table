import { makeStyles } from '@material-ui/core';
import colors from '../../constants/Colors';

export default makeStyles(() => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '25% 75%',
    '&>p': {
      textAlign: 'center',
      margin: '7px 0',
    },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiOutlinedInput-input': { padding: '5px 10px' },
    '&>p': {
      margin: '7px 0',
    },
  },
  error: {
    color: colors.red,
  },
}));
