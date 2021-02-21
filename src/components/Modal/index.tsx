import React from 'react';

import { Dialog } from '@material-ui/core';

const Modal = ({ isModalVisible, toggleModalOff, children }) => {
  return (
    <Dialog open={isModalVisible} onClose={toggleModalOff}>
      {children}
    </Dialog>
  );
};

export default Modal;
