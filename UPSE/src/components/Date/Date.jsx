import React from 'react';
import styled from 'styled-components';
import Calender from '../../assets/icons/calander.svg';
import RightArrow from '../../assets/icons/rightarrow.svg';
import LeftArrow from '../../assets/icons/leftarrow.svg';

const DateRow = styled.div`
  width: 100%;
  max-width: 687px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 24px 0;
  margin-bottom: 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CalenderBox = styled.div`
  width: 32px;
  height: 32px;
  background-color: #90BBFF33;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CalenderImg = styled.img`
  width: 18px;
  height: 18px;
`;

const Datetime = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ArrowImg = styled.img`
  width: 13px;
  height: 13px;
`;

const DateText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
  margin: 0 12px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const DayText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
`;

const DateComponent = () => {
  return (
    <DateRow>
      <Left>
        <CalenderBox>
          <CalenderImg src={Calender} alt="" />
        </CalenderBox>
        <Datetime>
          <div className="leftarrow">
            <ArrowImg src={LeftArrow} alt="" />
          </div>
          <DateText>01, Jun, 2025</DateText>
          <div className="rightarrow">
            <ArrowImg src={RightArrow} alt="" />
          </div>
        </Datetime>
      </Left>
      <Right>
        <DayText>Sunday</DayText>
      </Right>
    </DateRow>
  );
};

export default DateComponent;
