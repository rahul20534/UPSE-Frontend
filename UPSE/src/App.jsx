// App.jsx
import { useState } from 'react';
import styled from 'styled-components';
import Topics from './components/Topics/Topics';
import Navbar from './components/Navbar/Navbar';
import DateComponent from './components/Date/Date';
import Calendar from './components/Calendar/Calendar';
import News from './components/News/News';

const AppBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AppContainer = styled.div`
  width: 100vw;
  max-width: 1400px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Lower = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 32px;
  width: 100%;
  gap: 36px;
`;

const Sidebar = styled.div`
  min-width: 240px;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-left: 0;
  margin-top: 0;
`;

const CalendarPopup = styled.div`
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 10;
`;

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <AppBackground>
      <AppContainer>
        <Navbar />
        <Lower>
          <Sidebar>
            <Topics />
          </Sidebar>
          <MainContent>
            <DateComponent onCalendarClick={() => setShowCalendar(!showCalendar)} />
            {showCalendar && (
              <CalendarPopup>
                <Calendar />
              </CalendarPopup>
            )}
            <News />
          </MainContent>
        </Lower>
      </AppContainer>
    </AppBackground>
  );
};

export default App;