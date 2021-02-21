import { makeStyles } from '@material-ui/core';

import colors from '../../constants/Colors';

export default makeStyles((theme) => ({
  tableContainer: {
    padding: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
    padding: theme.spacing(4),
    paddingLeft: theme.spacing(1),
  },
  editButton: {
    backgroundColor: colors.gold,
    color: colors.white,
  },
  deleteButton: {
    backgroundColor: colors.red,
    color: colors.white,
  },
  modalHeader: {
    padding: '10px ',
    fontWeight: 'bold',
  },
  modalContent: {
    padding: '30px 10px',
    borderBottom: `1px solid ${colors.gray}`,
    borderTop: `1px solid ${colors.gray}`,
  },
  modalButtonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '10px',
  },
  deleteButtonModal: {
    backgroundColor: colors.red,
    color: colors.white,
    marginLeft: '15px',
  },
  cancelButton: {
    backgroundColor: colors.gray,
    color: colors.white,
  },
}));
