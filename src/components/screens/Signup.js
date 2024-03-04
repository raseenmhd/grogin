import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';

import HeaderPage from './Header';
import NavBar from "../includes/NavBar";
import MainHeader from '../includes/MainHeader';


// images
import arrow from "../../assets/images/Vector.svg"
// images

function LoginPage() {
  return (
	<>
		<Helmet>
			<title>Grogin | Register</title>
		</Helmet>
		<MainHeader/>
		<HeaderPage/>
		<NavBar/>
		<PaginationWrapper>
			<PaginationContainer>
				<HomePage>Home</HomePage>
				<Arrow>
					<Icon src={arrow} alt="Arrow" />
				</Arrow>
				<Page>My account</Page>
				<Arrow>
					<Icon src={arrow} alt="Arrow" />
				</Arrow>
				<Page>Register</Page>
			</PaginationContainer>
		</PaginationWrapper>
	  	<LoginPageContainer>
			<LoginPageTitle>
				<NavLink to="/login">
					<LoginButton>Login</LoginButton>
				</NavLink>
				<NavLink to="">
					<RegisterButton>Register</RegisterButton>
				</NavLink>
			</LoginPageTitle>
			<Paragraph>
            There are many advantages to creating an account: the payment process is faster, shipment tracking is possible and much more.
			</Paragraph>
			<LoginForm>
				<UserName>
					<UserNameLabel for="user_name">Username *</UserNameLabel>
					<UserNameInput type="text" id="user_name" />
				</UserName>
                <EmailName>
					<EmailLabel for="email">email address *</EmailLabel>
					<EmailInput type="email" id="email" />
				</EmailName>
				<Password>
					<PasswordLabel for="password">Password *</PasswordLabel>
					<PasswordInput type="password" id="password" />
				</Password>
				<SubmitEvent type="submit">Register</SubmitEvent>
			</LoginForm>
		</LoginPageContainer>
	</>
  )
}

const PaginationWrapper = styled.div`
	padding: 20px 50px 10px;
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
`;

const LoginPageTitle = styled.div`
	width: 100%;
	padding: 0 90px 25px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const LoginButton = styled.h1`
	font-size: 30px;
	font-weight: bold;
    opacity: 0.5;
`;

const RegisterButton = styled.h1`
	font-size: 30px;
	font-weight: bold;
`;

const Paragraph = styled.p`
	font-size: 15px;
	text-align: center;
	padding: 15px 0;
`

const LoginForm = styled.form`
  
`

const UserName = styled.div`
`

const UserNameLabel = styled.label`
	font-size: 15px;
	margin: 7px 0 10px;
	display: block;
`

const UserNameInput = styled.input`
  	width: 100%;
	padding: 15px;
	border: 1px solid #000;
	border-radius: 10px;

`

const Password = styled.div`
	padding-top: 15px;
`

const PasswordLabel = styled.label`
  	font-size: 15px;
	margin: 7px 0 10px;
	display: block;
`

const PasswordInput = styled.input`
  	width: 100%;
	padding: 15px;
	border: 1px solid #000;
	border-radius: 10px;
`

const SubmitEvent = styled.button`
	width: 100%;
	margin-top: 30px;
	background-color: #634c9f ;
	padding: 15px ;
	font-size: 17px;
	color: #fff;
	font-weight: bold;
	border-radius: 10px;
`
const EmailName = styled.div`
    padding-top: 15px;
`;
const EmailLabel = styled.label`
    font-size: 15px;
	margin: 7px 0 10px;
	display: block;
`;
const EmailInput = styled.input`
    width: 100%;
	padding: 15px;
	border: 1px solid #000;
	border-radius: 10px;
`;
export default LoginPage
