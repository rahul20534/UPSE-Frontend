import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Icons
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const CalendarContainer = styled.div`
  --cell-size: 30px;
  font-family: 'Inter', sans-serif;
  width: fit-content;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: #232325;
  color: white;
  backdrop-filter: blur(5px);
  animation: ${fadeIn} 0.2s ease-out;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  padding: 0 0.5rem;
`;

const NavArrow = styled.button`
  background: none;
  border: none;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: ${({ disabled }) => (disabled ? 'rgba(255,255,255,0.5)' : 'white')};
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
  border-radius: 6px;
  color: ${({ disabled }) => (disabled ? '#666' : '#fff')};
  background: ${({ selected }) => (selected ? '#FF6A00' : 'transparent')};

  &:hover {
    background: ${({ disabled }) => (disabled ? 'transparent' : 'rgba(255,255,255,0.1)')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  }
`;

const Calendar = React.forwardRef(({ selectedDate, setSelectedDate }, ref) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const today = new Date();

  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const startDay = new Date(year, monthIndex, 1).getDay();

  const isFutureDate = (day) => {
    const thisDay = new Date(year, monthIndex, day);
    return thisDay > today;
  };

  const isSelected = (day) => {
    return (
      selectedDate &&
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === monthIndex &&
      selectedDate.getDate() === day
    );
  };

  const handleDateClick = (day) => {
    if (!isFutureDate(day)) {
      setSelectedDate(new Date(year, monthIndex, day));
    }
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, monthIndex - 1, 1));
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(year, monthIndex + 1, 1);
    if (nextMonth <= today) {
      setCurrentDate(nextMonth);
    }
  };

  // 🔑 Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") goToPreviousMonth();
      if (e.key === "ArrowRight") goToNextMonth();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentDate]);

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const disabled = isFutureDate(day);
    days.push(
      <CalendarCell
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={disabled}
        selected={isSelected(day)}
      >
        {day}
      </CalendarCell>
    );
  }

  const isCurrentMonth = currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear();


  return (
    <CalendarContainer ref={ref}>
      <CalendarHeader>
        <NavArrow onClick={goToPreviousMonth}>
          <FiChevronLeft />
        </NavArrow>
        <span>{monthName} {year}</span>
        <NavArrow onClick={goToNextMonth} disabled={isCurrentMonth}>
          <FiChevronRight />
        </NavArrow>
      </CalendarHeader>
      <CalendarWeekdays>
        {weekdays.map((day) => (
          <CalendarCell as="div" key={day} style={{ fontWeight: 700 }}>
            {day}
          </CalendarCell>
        ))}
      </CalendarWeekdays>
      <CalendarDays>{days}</CalendarDays>
    </CalendarContainer>
  );
});

export default React.memo(Calendar);
