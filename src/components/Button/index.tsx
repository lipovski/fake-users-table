import React from 'react';

import ButtonMui from '@material-ui/core/Button';

interface Iprops {
  text: string;
  onClick: () => void;
  color: string;
}

const Button: React.FC<Iprops> = ({ text, onClick, color }) => {
  return (
    <ButtonMui style={{ background: color, color: '#fff' }} onClick={onClick}>
      {text}
    </ButtonMui>
  );
};

export default Button;
