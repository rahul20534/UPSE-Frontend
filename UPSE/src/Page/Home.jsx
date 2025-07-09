import React from 'react'
import styled from 'styled-components';

//components
import Topics from '../components/Topics';


const Container = styled.div`
  display: flex;
  padding: 10px 40px;
  box-sizing: border-box;
`;

const Home = () => {
  return (
    <Container>
      <Topics />
    </Container>
  )
}

export default Home