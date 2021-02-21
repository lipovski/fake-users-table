import React from 'react';

import { TableCell, TableRow, Typography, Button } from '@material-ui/core';

import useDashboardHandler from './useDashboardHandler';

import useDasboardStyles from './styles';

import Table from '../../components/Table';
import Form from '../Form';
import Modal from '../../components/Modal';
import headCells from './headCells';
import TableTitle from '../../components/TableTitle';

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
          sortUsersHandler={sortUsersHandler}
          headCells={headCells}
          tableTitle={
            <TableTitle
              title="Users list"
              buttonText="Add new"
              buttonOnCLick={() => onFormVisibility(null)}
            />
          }
        >
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
                  className={classes.editButton}
                >
                  Edit
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => toggleModalOn(row)}
                  className={classes.deleteButton}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      )}

      {isFormVisible && <Form offFormVisibility={offFormVisibility} />}

      <Modal isModalVisible={isModalVisible} toggleModalOff={toggleModalOff}>
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
          <Button
            onClick={handleUserDelete}
            className={classes.deleteButtonModal}
          >
            Delete
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
