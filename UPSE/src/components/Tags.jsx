import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  background-color: #383636cc;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  margin-right: 5px;
`;

const ButtonText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #FFFFFFCC;
  margin: 0;
`;

const Tags = ({ value }) => {
  return (
    <Button>
      <ButtonText>{value}</ButtonText>
    </Button>
  );
};

export default Tags;
