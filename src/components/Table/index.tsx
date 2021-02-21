import React from 'react';

import TableMui from '@material-ui/core/Table';

import {
  TableRow,
  TableCell,
  Paper,
  TableContainer,
  TableBody,
  Button,
} from '@material-ui/core';
import TableHead from '../TableHead';
import { Iuser } from '../../types/common';
import useTableStyles from './styles';
import TableTitle from '../TableTitle';
import colors from '../../constants/Colors';

interface Iprops {
  users: Iuser[];
  onFormVisibility: (selectedUser: Iuser | null) => void;
  toggleModalOn: (selectedUser: Iuser) => void;
  sortUsersHandler: (columnName: { id: string; order: string }) => void;
}

const Table: React.FC<Iprops> = ({
  users,
  onFormVisibility,
  toggleModalOn,
  sortUsersHandler,
}) => {
  const classes = useTableStyles();

  return (
    <div className={classes.root}>
      <TableTitle
        title="Users list"
        buttonText="Add new"
        buttonOnCLick={() => onFormVisibility(null)}
      />
      <Paper className={classes.paper}>
        <TableContainer>
          <TableMui>
            <TableHead sortUsersHandler={sortUsersHandler} />
            <TableBody>
              {users.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.id}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.username}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.address?.city}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => onFormVisibility(row)}
                      style={{ color: colors.gold }}
                    >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => toggleModalOn(row)}
                      style={{ color: colors.red }}
                    >
                      Delete
                    </Button>
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
