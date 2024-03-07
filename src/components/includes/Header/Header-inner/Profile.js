import React from 'react';
import styled from 'styled-components';
import profile from "../../../../assets/images/profile.png";



function Profile({isprofileopen}) {
  return (
    <ProfileContainer isOpen={isprofileopen}>
      <ProfileImage>
        <Image src={profile} alt="Profile" />
      </ProfileImage>
      <UserName>Raseen</UserName>
      <Login>
        <Link to={"/"}>Log in</Link></Login>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 340px;
    border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #000;
    position: absolute;
    right: 200px;
    background-color: #fff;
    z-index: 50;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;

const ProfileImage = styled.div`
    margin-bottom: 20px;
    width: 100px; 
    height: 100px;
`;

const Image = styled.img`
   
    border-radius: 50%;
    width: 100%;
    display: block;
`;

const UserName = styled.h3`
    font-size: 18px;
    margin-bottom: 10px;
`;

const Login = styled.button`
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    background-color: #634C9F;
    width: 35%;
    height: 40px;
    font-size: 18px;
    border-radius: 5px;
`;
const Link = styled.a`
    color: #fff;
`;
export default Profile;
