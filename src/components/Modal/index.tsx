import React from 'react';

import { Dialog, Typography, Button } from '@material-ui/core';
import useModalStyles from './styles';

const Modal = ({ isModalVisible, toggleModalOff, handleUserDelete }) => {
  const classes = useModalStyles();
  return (
    <Dialog open={isModalVisible} onClose={toggleModalOff}>
      <Typography className={classes.modalHeader} variant="h6">
        Delete
      </Typography>
      <div className={classes.modalContent}>
        Are you sure you want to delete the user?
      </div>
      <div className={classes.modalButtonsContainer}>
        <Button className={classes.cancelButton} onClick={toggleModalOff}>
          Cancel
        </Button>
        <Button onClick={handleUserDelete} className={classes.deleteButton}>
          Delete
        </Button>
      </div>
    </Dialog>
  );
};

export default Modal;
