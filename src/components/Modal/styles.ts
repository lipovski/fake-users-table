import { makeStyles } from '@material-ui/core';
import colors from '../../constants/Colors';

export default makeStyles({
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
  deleteButton: {
    backgroundColor: colors.red,
    color: '#fff',
    marginLeft: '15px',
  },
  cancelButton: {
    backgroundColor: colors.gray,
    color: '#fff',
  },
});
