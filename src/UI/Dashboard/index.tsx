import React from 'react';

import { Typography } from '@material-ui/core';

import useDashboardHandler from './useDashboardHandler';

import useDasboardStyles from './styles';

import Table from '../../components/Table';
import Form from '../../components/Form';
import Modal from '../../components/Modal';

const Dashboard: React.FC = () => {
  const {
    users,
    isFormVisible,
    onFormVisibility,
    offFormVisibility,
    handleUserDelete,
    toggleModalOff,
    toggleModalOn,
    isModalVisible,
    sortUsersHandler,
  } = useDashboardHandler();
  const classes = useDasboardStyles();

  return (
    <>
      <Typography className={classes.title} variant="h3">
        Dashboard
      </Typography>

      {!isFormVisible && (
        <Table
          users={users}
          onFormVisibility={onFormVisibility}
          toggleModalOn={toggleModalOn}
          sortUsersHandler={sortUsersHandler}
        />
      )}

      {isFormVisible && <Form offFormVisibility={offFormVisibility} />}

      <Modal
        isModalVisible={isModalVisible}
        toggleModalOff={toggleModalOff}
        handleUserDelete={handleUserDelete}
      />
    </>
  );
};

export default Dashboard;
