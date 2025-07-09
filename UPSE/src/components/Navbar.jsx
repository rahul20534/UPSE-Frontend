import React from 'react';
import styled from 'styled-components';


//icons
import Eval from '../assets/icons/license.svg';
import Notification from '../assets/icons/notification.svg';


//image
import User from '../assets/image/user.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  font-family: 'Inter', Arial, sans-serif;
  background-color: transparent;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8rem;
`;

const Greeting = styled.div`

`;


const Title = styled.h1`
    font-size: 32px;
    font-weight: 500;
    color: #FFFFFF;
    margin: 0;

    span {
      color: #A8A8A8
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
  gap: 10px;
  padding: 10px;
  background-color: rgba(25, 90, 255, 0.16);
  border-radius: 8px;
  cursor: pointer;
  span {
    font-size: 16px;
    font-weight: 500;
    color: #6A94FF;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Dot = styled.div`
  position: absolute;
  top: 8px;
  left: 26px;
  width: 6px;
  height: 6px;
  background-color: #FF8E68;
  border-radius: 50%;
  z-index: 1;
  transform: translate(50%, -50%);
  display: inline-block;

`;

const NotificationIcon = styled.img`
  width: 20px;
  height: 20px;
`;


const UserProfile = styled.div`
  width: 45px;
  height: 45px;
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
          <Title><span>Hello,</span> Krishiv</Title>
        </Greeting>
      </NavbarLeft>
      <NavbarRight>
        <Evaluation>
          <EvaluationIcon src={Eval} alt="Evaluation icon" />
          <span>Mains Evaluation</span>
        </Evaluation>
        <NotificationBox>
          <Dot/>
          <NotificationIcon src={Notification} alt="Notification icon" />
          
        </NotificationBox>
        <UserProfile>
          <UserImage src={User} alt="User profile" />
        </UserProfile>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;