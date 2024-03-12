import React, { useState , useContext } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { UserContext } from '../../context/Store';


import axios from 'axios';
import { BASE_URL } from '../../helpers/axiosConfig';
//api 

import HeaderPage from '../../includes/Header/Header';
import NavBar from "../../includes/Header/Header-inner/NavBar";
import MainHeader from '../../includes/Header/Header-inner/MainHeader';
//components

import arrow from "./../../../assets/images/Vector.svg";
import RepHeader from '../../includes/ResponsiveHeader/RepHeader';
//images


function Login() {
	const navigate = useNavigate();

	const [phone,setPhone] = useState();
	const [password,setPassword] = useState();
	const [country,setCountry] = useState("IN");
	const [message, setMessage] = useState();

	
	const {dispatch} = useContext(UserContext) 
	
	const handleLoginSubmit = (e) => {
		setMessage("");
		e.preventDefault();
		axios
			.post(`${BASE_URL}api/v1/users/student/login/`, { phone, password, country })
			.then((response) => {
				let data = response.data;
				if (data.status_code === 6000) {
					localStorage.setItem("user_data", JSON.stringify(data.data));
					dispatch({ type: "LOGIN", payload:data.data})
					navigate("/")
				} else {
					const errors = data.data.errors;
					let errorMessage = "";

					if(errors) {
						for (const key in errors) {
							const errorArray = errors[key];
							if (Array.isArray(errorArray) && errorArray.length > 0) {
								errorMessage = `${key}: ${errorArray[0]}`;
								break;
							}
						}
					} else if (data.message) {
						errorMessage = data.message;
					} else {
						errorMessage = "Unknown error occurred";
						console.log(data.message);
					}
					setMessage(errorMessage);
				}
			})
			.catch((error) => {
				
			});

		};


	const handleNavigate = (e) => {
		e.preventDefault();
		navigate("/auth/register");
	};
  return (
	<>
		<Helmet>
			<title>Grogin | Login</title>
		</Helmet>
		<MainHeader/>
		<HeaderPage/>
		<NavBar/>
		<RepHeader />
		<PaginationWrapper>
			<PaginationContainer>
				<HomePage>Home</HomePage>
				<Arrow>
					<Icon src={arrow} alt="Arrow" />
				</Arrow>
				<Page>My account </Page>
				<Arrow>
					<Icon src={arrow} alt="Arrow" />
				</Arrow>
				<Page>Login</Page>
			</PaginationContainer>
		</PaginationWrapper>
	  	<LoginPageContainer>
			<LoginPageTitle>
				<NavLink to="/">
					<LoginButton>Login</LoginButton>
				</NavLink>
				<NavLink to="/auth/register" >
				<RegisterButton onSubmit={handleNavigate}>Register</RegisterButton>
				</NavLink>
			</LoginPageTitle>
			<Paragraph>
				If you have an account, sign in with your username or email address.
			</Paragraph>
			<LoginForm onSubmit={handleLoginSubmit} >
				<UserName>
					<UserNameLabel for="user_name">Phone number *</UserNameLabel>
					<UserNameInput 
						type="number" 
						id="user_name" 
						onChange={(e) => setPhone(e.target.value)} 
						value={phone} 
					/>
				</UserName>
				<Password>
					<PasswordLabel for="password">Password *</PasswordLabel>
					<PasswordInput 
						type="password" 
						id="password" 
						onChange={(e) => setPassword(e.target.value)} 
						value={password}
					/>
				</Password>
				<Password>
					<PasswordLabel for="country">country *</PasswordLabel>
					<PasswordInput 
						type="text" 
						id="country" 
						onChange={(e) => setCountry(e.target.value)} 
						value={country}
					/>
				</Password>
				{ message && <ErrorMessage>{message}</ErrorMessage>}
				<SubmitEvent type="submit">Login</SubmitEvent>
			</LoginForm>
		</LoginPageContainer>
	</>
  )
}
const PaginationWrapper = styled.div`
	padding: 20px 50px 10px;
	@media all and (max-width: 640px){
		padding: 20px 15px 10px;
	}

`;

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

`;

const HomePage = styled.span`
	font-size: 13px;
	opacity: 0.7;
	
`;

const Arrow = styled.div`
	width: 8px;
	margin: 0 10px 0 4px;
`;

const Icon = styled.img`
	display: block;
	width: 100%;
	transform: rotate(-90deg);

`;

const Page = styled.span`
	font-size: 13px;
	font-size: 600;
`;


const LoginPageContainer = styled.div`
	width: 40%;
	padding: 90px 0;
	margin: 0 auto;
	@media all and (max-width: 1080px){
		width: 55%;
	}
	@media all and (max-width: 980px){
		width: 70%;
	}
	@media all and (max-width: 640px){
		width: 90%;
	}

`;

const LoginPageTitle = styled.div`
	width: 100%;
	padding: 0 90px 25px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	@media all and (max-width: 480px){
		padding: 0 30px 20px;
	}
	@media all and (max-width: 360px){
		padding: 0 5px 0px;
	}
`;

const LoginButton = styled.h1`
	font-size: 30px;
	font-weight: bold;
	@media all and (max-width: 768px){
		font-size: 25px;
	}

`;

const RegisterButton = styled.h1`
	font-size: 30px;
	opacity: 0.5;
	font-weight: bold;
	@media all and (max-width: 768px){
		font-size: 25px;
	}
`;

const Paragraph = styled.p`
	font-size: 15px;
	text-align: center;
	padding: 15px 0;
	@media all and (max-width: 360px){
		font-size: 14px;	
		padding: 12px 0;
	}
`;

const LoginForm = styled.form`
  
`;

const UserName = styled.div`
`;

const UserNameLabel = styled.label`
	font-size: 15px;
	margin: 7px 0 10px;
	display: block;
`;

const UserNameInput = styled.input`
  	width: 100%;
	padding: 15px;
	border: 1px solid #000;
	border-radius: 10px;
	@media all and (max-width: 768px){
		padding: 10px;
	}

`;

const Password = styled.div`
	padding-top: 15px;
	@media all and (max-width: 480px){
		padding: 0;
	}
`;

const PasswordLabel = styled.label`
  	font-size: 15px;
	margin: 7px 0 10px;
	display: block;
`;

const PasswordInput = styled.input`
  	width: 100%;
	padding: 15px;
	border: 1px solid #000;
	border-radius: 10px;
	@media all and (max-width: 768px){
		padding: 10px;
	}
`;

const SubmitEvent = styled.button`
	width: 100%;
	margin-top: 30px;
	background-color: #634c9f ;
	padding: 15px ;
	font-size: 17px;
	color: #fff;
	font-weight: bold;
	border-radius: 10px;
	@media all and (max-width: 360px){
		margin-top: 20px;
	}
`;
const ErrorMessage = styled.p`
	font-size: 15px;
	font-weight: bold;
	margin-top: 15px;
	color: red;
	text-align: center;
`;
export default Login