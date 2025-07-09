import React from 'react';
import styled from 'styled-components';
//icons
import Eval from '../../assets/icons/main.svg';
import Notification from '../../assets/icons/notification.svg';
import NotificationDot from '../../assets/icons/notification-dot.svg';
//image
import User from '../../assets/image/user.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #18191B;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Inter', Arial, sans-serif;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
`;

const Greeting = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`;

const DailyNews = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Evaluation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #9EAAFF29;
  border-radius: 8px;
  cursor: pointer;
  span {
    font-size: 16px;
    font-weight: 500;
    color: #475DFE;
    font-family: 'Inter', sans-serif;
  }
`;

const EvaluationIcon = styled.img`
  width: 20px;
  height: 22px;
`;

const NotificationBox = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  background-color: #FFFFFF29;
  text-align: center;
`;

const NotificationIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-top: 7.5px;
`;

const NotificationDotIcon = styled.img`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  margin-top: 4px;
  margin-right: 5px;
`;

const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <Greeting>
          <h1>Hello, Krishiv</h1>
        </Greeting>
        <DailyNews>
          <h1>Daily News</h1>
        </DailyNews>
      </NavbarLeft>
      <NavbarRight>
        <Evaluation>
          <EvaluationIcon src={Eval} alt="Evaluation icon" />
          <span>Mains Evaluation</span>
        </Evaluation>
        <NotificationBox>
          <NotificationIcon src={Notification} alt="Notification icon" />
          <NotificationDotIcon src={NotificationDot} alt="Notification alert" />
        </NotificationBox>
        <UserProfile>
          <UserImage src={User} alt="User profile" />
        </UserProfile>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;