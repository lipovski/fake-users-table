import React from 'react';

import { Typography, Button } from '@material-ui/core';
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
      <Button onClick={buttonOnCLick} style={{ color: colors.blue }}>
        {buttonText}
      </Button>
    </div>
  );
};

export default TableTitle;
