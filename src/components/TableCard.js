// ==============================|| CUSTOM - Table CARD ||============================== //
import React from 'react';
import styled from '@emotion/styled';

const TableCard = ({ children }) => {
  const Div = styled.div`
    margin: 0 -20px -20px -20px;
  `;
  return <Div>{children}</Div>;
};

export default TableCard;
