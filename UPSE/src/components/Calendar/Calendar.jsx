import React from "react";
import styled from "styled-components";
import RightArrow from '../../assets/icons/rightarrow.svg';
import LeftArrow from '../../assets/icons/leftarrow.svg';

const CalendarContainer = styled.div`
  --cell-size: 30px;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  width: fit-content;
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  background-color: #232325;
  color: white;
  backdrop-filter: blur(5px);
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.75rem;
  padding: 0 0.5rem;
  color: white;
`;

const NavArrow = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
`;

const ArrowImg = styled.img`
  width: 9px;
  height: 12px;
`;

const CalendarWeekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, var(--cell-size));
  gap: 0.25rem;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const CalendarDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, var(--cell-size));
  gap: 0.25rem;
  font-size: 14px;
  font-weight: 500;
`;

const CalendarCell = styled.div`
  height: var(--cell-size);
  display: grid;
  place-items: center;
  color: white;
  border-radius: 6px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = React.useState(new Date(2025, 5, 1)); // June 2025 (month is 0-indexed)

  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const weekdays = ["SAN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Get days in month
  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <NavArrow onClick={goToPreviousMonth}>
          <ArrowImg src={LeftArrow} alt="Previous month" />
        </NavArrow>
        <span>{month} {year}</span>
        <NavArrow onClick={goToNextMonth}>
          <ArrowImg src={RightArrow} alt="Next month" />
        </NavArrow>
      </CalendarHeader>
      <CalendarWeekdays>
        {weekdays.map((day) => (
          <CalendarCell as="div" key={day}>{day}</CalendarCell>
        ))}
      </CalendarWeekdays>
      <CalendarDays>
        {days.map((day) => (
          <CalendarCell key={day}>{day}</CalendarCell>
        ))}
      </CalendarDays>
    </CalendarContainer>
  );
};

export default React.memo(Calendar);