import React from 'react';
import { CustomButton } from './styles';

function Button({ ...rest }) {
  return <CustomButton {...rest}/>;
}

export default Button;