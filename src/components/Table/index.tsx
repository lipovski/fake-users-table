import React from 'react';

import TableMui from '@material-ui/core/Table';

import {
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  TableBody,
} from '@material-ui/core';
import TableHead from '../TableHead';
import { Iuser } from '../../types/common';
import Button from '../Button';
import useTableStyles from './styles';
import TableTitle from '../TableTitle';
import colors from '../../constants/Colors';

const Table: React.FC<{ users: Iuser[] }> = ({ users }) => {
  const classes = useTableStyles();
  return (
    <div className={classes.root}>
      <TableTitle
        title="Users list"
        buttonText="Add new"
        buttonOnCLick={() => {}}
      />
      <Paper className={classes.paper}>
        <TableContainer>
          <TableMui>
            <TableHead />
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    padding="none"
                  >
                    {row.id}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.username}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.address?.city}</TableCell>
                  <TableCell align="center">
                    <Button
                      text="Edit"
                      onClick={() => {}}
                      color={colors.gold}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      text="Delete"
                      onClick={() => {}}
                      color={colors.red}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TableMui>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Table;
