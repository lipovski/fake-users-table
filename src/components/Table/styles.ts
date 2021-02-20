import { makeStyles } from '@material-ui/core';

import colors from '../../constants/Colors';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    border: `1px solid ${colors.gray}`,
    borderRadius: '6px',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  header: {
    backgroundColor: colors.gray,
  },
  titleRoot: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
  },
}));
