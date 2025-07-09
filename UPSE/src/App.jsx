// App.jsx
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import styled from 'styled-components';

//pages
import Home from './Page/Home.jsx';

//components
import Navbar from './components/Navbar.jsx';



const App = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;