import React from 'react';

import { Container } from './styles';

const Loading = ({ show }) => {
  return (
    <Container show={show}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </Container>
  );
};

export default Loading;
