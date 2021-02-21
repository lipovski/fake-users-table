import React from 'react';

import TableMui from '@material-ui/core/Table';

import { Paper, TableContainer, TableBody } from '@material-ui/core';
import TableHead from '../TableHead';
import { IheadCells } from '../../types/common';
import useTableStyles from './styles';

interface Iprops {
  sortUsersHandler: (columnName: { id: string; order: string }) => void;
  headCells: IheadCells[];
  children: React.ReactNode;
  tableTitle: React.ReactNode;
}

const Table: React.FC<Iprops> = ({
  sortUsersHandler,
  children,
  headCells,
  tableTitle,
}) => {
  const classes = useTableStyles();

  return (
    <div className={classes.root}>
      {tableTitle}
      <Paper className={classes.paper}>
        <TableContainer>
          <TableMui>
            <TableHead
              sortUsersHandler={sortUsersHandler}
              headCells={headCells}
            />
            <TableBody>{children}</TableBody>
          </TableMui>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Table;
