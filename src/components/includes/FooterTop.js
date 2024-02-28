import React from 'react';
import styled from 'styled-components';


import email from "../../assets/images/email.svg"

function FooterTop() {
  return (
	
		<FooterHead>
			<LeftSection>
				<EntryTitle>Join our newsletter for £10 offs</EntryTitle>
				<EntryNote>Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!
				</EntryNote>
			</LeftSection>
				<RightSection>
				<SubscribeEmail>
					<Form>
						<EmailLogo for="email" >
							<EmailIcon src={email}  alt="Email Icon" />
						</EmailLogo>
						<EmailInput type="email" id="email" placeholder="Enter Your email address" />
						<SubmitButton type="submit" value="send"></SubmitButton>
					</Form>
				</SubscribeEmail>
				<InformationText>
					By subscribing you  to our <Link href="#">Terms & Conditions and Privacy & Cookies Policy.</Link>
				</InformationText>
			</RightSection>
		</FooterHead>
  );
}


const FooterHead = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 50px 0;
	border-bottom: 1px solid #E5E7EB;
`;

const LeftSection = styled.div`
	width: 30%;

`;

const RightSection = styled.div`
	width : 35%;
`;

const EntryTitle = styled.h3`
	font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const EntryNote = styled.p`
	font-size: 12px;
    line-height: 18px;
`;

const SubscribeEmail = styled.div`
	background-color: #fff;
	padding: 12px;
	border: 1px solid #E5E7EB;
	border-radius: 10px;
	position: relative;
`;

const Form = styled.form`
	display: flex;
	align-items: center;
    
`;

const EmailLogo = styled.label`
	width: 20px;
	margin-right: 5px;
`;

const EmailIcon = styled.img`
	display: block;
	width: 100%;
`;

const EmailInput = styled.input`
	width: 75%;
	font-size: 15px;
`;

const SubmitButton = styled.input`
	width: 18%;
    background-color: #634C9F;
    color: #fff;
    position: absolute;
    right: -1px;
    height: 45px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0px;
    border-radius: 0 10px 10px 0;
	cursor: pointer;
`;

const InformationText = styled.p`
	font-size: 11px;
	margin-top: 10px;
`;

const Link = styled.a`
	font-size: 11px;
	color: #634C9F;
`;


export default FooterTop;
