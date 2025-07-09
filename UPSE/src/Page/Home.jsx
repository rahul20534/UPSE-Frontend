import React from 'react'
import styled from 'styled-components';

//components
import Topics from '../components/Topics';
import Date from "../components/Date"
import News from "../components/News";


const Container = styled.div`
  display: flex;
  padding: 10px 40px;
  box-sizing: border-box;
`;

const Main = styled.div`
  display: flex;
  padding: 0px 100px;
  flex-direction: column;
  width: 50%;
  gap: 40px;
`

const Home = () => {
  return (
    <Container>
      <Topics />
      <Main>
        <Date />

        <News />
      </Main>
    </Container>
  )
}

export default Home