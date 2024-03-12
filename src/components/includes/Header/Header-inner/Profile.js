import React , {useContext , useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


import { BASE_URL } from '../../../helpers/axiosConfig';
import { UserContext } from '../../../../App';


import profile from "../../../../assets/images/profile.png";
import axios from 'axios';


function Profile({isprofileopen}) {

	const {userData , updateUserData} = useContext(UserContext)
	
	const handleLogout = () => {
		updateUserData({type : "LOGOUT"})
	}
//
	const [username, setUsername] = useState({
		full_name : "full_name",
		phone: "phone",
		unique_discord_id: "unique_discord_id",
	});

	useEffect( () => {
		axios
			.get(`${BASE_URL}api/v1/users/profile/`,{
				headers: {
					Authorization : `Bearer ${userData?.access}`,
				},
			})
			.then((response) => {
				setUsername(response.data.data)
			})
			.catch((error) => {
				console.log(error);
			})
	},[]);

  return (
	<ProfileContainer isOpen={isprofileopen}>
		<ProfileImage>
			<Image src={profile} alt="Profile" />
		</ProfileImage>
		<UserName>{username.full_name}</UserName>
		<Id>id : #{username.unique_discord_id}</Id>
		{userData ? (
			<Logout onClick={() => handleLogout()}>
				Log out
			</Logout>
		) : (
			<Login>
				Log in
			</Login>
		)}
		
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
	font-weight: bold;
`;


const Id = styled.p`
	font-size: 14px;
	opacity: 0.8;
	margin-bottom: 10px;
`;
const Login = styled.button`
	color: #fff;
	font-weight: bold;
	cursor: pointer;
	background-color: #634C9F;
	font-size: 18px;
	border-radius: 5px;
	padding: 7px 20px;
`;
const Logout = styled(Link)`
	color: #fff;
	font-weight: bold;
	cursor: pointer;
	background-color: #634C9F;
	font-size: 18px;
	border-radius: 5px;
	padding: 7px 20px;
`;

export default Profile;
