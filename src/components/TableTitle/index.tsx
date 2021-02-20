import React from 'react';

import { Typography } from '@material-ui/core';
import Button from '../Button';
import useTableTitleClasses from './styles';
import colors from '../../constants/Colors';

interface Iprops {
  title: string;
  buttonText: string;
  buttonOnCLick: () => void;
}

const TableTitle: React.FC<Iprops> = ({ title, buttonText, buttonOnCLick }) => {
  const classes = useTableTitleClasses();
  return (
    <div className={classes.root}>
      <Typography>{title}</Typography>
      <Button text={buttonText} onClick={buttonOnCLick} color={colors.blue} />
    </div>
  );
};

export default TableTitle;
