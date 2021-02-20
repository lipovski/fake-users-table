import React from 'react';

import { Typography } from '@material-ui/core';
import Table from '../../components/Table';

import useDashboardHandler from './useDashboardHandler';
import useDasboardStyles from './styles';

const Dashboard: React.FC = () => {
  const { users } = useDashboardHandler();
  const classes = useDasboardStyles();

  return (
    <>
      <Typography className={classes.title} variant="h3">
        Dashboard
      </Typography>
      <Table users={users} />
    </>
  );
};

export default Dashboard;
