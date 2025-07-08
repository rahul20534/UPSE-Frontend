// App.jsx
import { useState } from 'react';
import './App.css';
import Topics from './components/Topics/Topics';
import Navbar from './components/Navbar/Navbar';
import Date from './components/Date/Date';
import Calendar from './components/Calendar/Calendar';
import News from './components/News/News';

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className='appContainer'>
      <Navbar className='nav' />
      <div className='lower'>
        <div className='topics'>
          <Topics />
        </div>
        <div className='mainContent'>
          <Date onCalendarClick={() => setShowCalendar(!showCalendar)} />
          {showCalendar && (
            <div className='calendarPopup'>
              <Calendar />
            </div>
          )}
          <News />
        </div>
      </div>
    </div>
  );
};

export default App;