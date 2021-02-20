import React from 'react';

import {
  TableCell,
  TableHead as TableHeadMui,
  TableRow,
} from '@material-ui/core';

import headCells from './headCells';

import useTableStyles from '../Table/styles';

const TableHead: React.FC = () => {
  const classes = useTableStyles();
  return (
    <TableHeadMui className={classes.header}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell align="center" key={headCell.id}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHeadMui>
  );
};

export default TableHead;
