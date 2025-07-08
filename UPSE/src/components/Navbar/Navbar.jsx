import React from 'react';
import './Navbar.css';

//icons
import Evaluation from '../../assets/icons/main.svg';
import Notification from '../../assets/icons/notification.svg';
import NotificationDot from '../../assets/icons/notification-dot.svg';

//image
import User from '../../assets/image/user.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='greeting'>
          <h1>Hello, Krishiv</h1>
        </div>
        <div className='daily-news'>
          <h1>Daily News</h1>
        </div>
      </div>
      
      <div className='navbar-right'>
        <div className='evaluation'>
          <img src={Evaluation} alt="Evaluation icon" className='evaluation-icon' />
          <span>Mains Evaluation</span>
        </div>
        
        <div className='notification'>
          <img src={Notification} alt="Notification icon" className='notification-icon' />
          <img src={NotificationDot} alt="Notification alert" className='notification-dot' />
        </div>
        
        <div className='user-profile'>
          <img src={User} alt="User profile" className='user-image' />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;