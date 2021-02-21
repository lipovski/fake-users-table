import React from 'react';

import { Typography } from '@material-ui/core';

import useDashboardHandler from './useDashboardHandler';

import useDasboardStyles from './styles';

import Table from '../../components/Table';
import Form from '../../components/Form';

const Dashboard: React.FC = () => {
  const {
    users,
    isFormVisible,
    onFormVisibility,
    offFormVisibility,
  } = useDashboardHandler();
  const classes = useDasboardStyles();

  return (
    <>
      <Typography className={classes.title} variant="h3">
        Dashboard
      </Typography>
      {!isFormVisible && (
        <Table users={users} onFormVisibility={onFormVisibility} />
      )}

      {isFormVisible && <Form offFormVisibility={offFormVisibility} />}
    </>
  );
};

export default Dashboard;
