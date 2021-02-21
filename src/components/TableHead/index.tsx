import React from 'react';

import {
  TableCell,
  TableHead as TableHeadMui,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';

import useTableStyles from '../Table/styles';
import { IheadCells } from '../../types/common';

interface Iprops {
  sortUsersHandler: (prop: { id: string; order: string }) => void;
  headCells: IheadCells[];
}

const TableHead: React.FC<Iprops> = ({ sortUsersHandler, headCells }) => {
  const [isAsc, setIsAsc] = React.useState<boolean>(false);
  const classes = useTableStyles();
  return (
    <TableHeadMui className={classes.header}>
      <TableRow>
        {headCells.map((headCell) =>
          headCell.sorted ? (
            <TableCell align="center" key={headCell.id}>
              <TableSortLabel
                direction={!isAsc ? 'desc' : 'asc'}
                onClick={() => {
                  setIsAsc(!isAsc);
                  sortUsersHandler({
                    id: headCell.id,
                    order: !isAsc ? 'asc' : 'desc',
                  });
                }}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell align="center" key={headCell.id}>
              {headCell.label}
            </TableCell>
          )
        )}
      </TableRow>
    </TableHeadMui>
  );
};

export default TableHead;
