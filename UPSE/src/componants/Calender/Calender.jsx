import React from "react";
import "./Calender.css";
import RightArrow from '../../assets/icons/rightarrow.svg';
import LeftArrow from '../../assets/icons/leftarrow.svg';

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
    <div className="calendar">
      <div className="calendar-header">
        <button className="nav-arrow" onClick={goToPreviousMonth}>
          <img src={LeftArrow} alt="Previous month" />
        </button>
        <span>{month} {year}</span>
        <button className="nav-arrow" onClick={goToNextMonth}>
          <img src={RightArrow} alt="Next month" />
        </button>
      </div>
      <div className="calendar-weekdays">
        {weekdays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="calendar-days">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Calendar);