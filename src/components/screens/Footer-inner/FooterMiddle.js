import React from 'react';
import styled from 'styled-components';

import { FooterWidget1 ,FooterWidget2,FooterWidget3} from "../../data/data";
import email from "../../../assets/images/email.svg";
import phone from "../../../assets/images/phone.svg";
import facebook from "../../../assets/images/facebook.svg";
import linkdin from "../../../assets/images/linkdin.svg";
import insta from "../../../assets/images/insta.svg";
import twiter from "../../../assets/images/twiter.svg";
import appstore from "../../../assets/images/appstore.png"
import playstore from "../../../assets/images/playstore.png"

function FooterMiddle() {
  return (
	<MiddleContainer>
		<MiddleInner>
			<ContactBlock>
				<WidgeTitle>Do You Need Help ?</WidgeTitle>
				<WidgetBody>
				  <Paragraph>Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.</Paragraph>
					<FooterContact>
						<ContactInformations>
							<ContactIcon>
							  <Icon src={phone} alt="Icon" />
							</ContactIcon>
							<ContactDetials>
							  <Span>Monday-Friday: 08am-9pm</Span>
							  <Phone>0 800 300-353</Phone>
							</ContactDetials>
						</ContactInformations>
						<ContactInformationsMail>
							<ContactIcon>
							  <Icon src={email} alt="Icon" />
							</ContactIcon>
							<ContactDetials>
							  <Span>Need help with your order?</Span>
							  <Mail>info@example.com</Mail>
							</ContactDetials>
						</ContactInformationsMail>
					</FooterContact>
				</WidgetBody>
			</ContactBlock>
			<WidgetsBlock>
				<Widget1>
					<WidgeTitle>
					Make Money with Us
					</WidgeTitle>
					{FooterWidget1.map((Item) => (
						<WidgetConatiner key={Item.id}>
							<Text>{Item.Title}</Text>
						</WidgetConatiner>
					))}
				</Widget1>
				<Widget2>
					<WidgeTitle>
					   Let Us Help You
					</WidgeTitle>
					{FooterWidget2.map((Item) => (
						<WidgetConatiner key={Item.id}>
							<Text>{Item.Title}</Text>
						</WidgetConatiner>
					))}
				</Widget2>
				<Widget3>
					<WidgeTitle>
					  Get to Know Us
					</WidgeTitle>
					{FooterWidget3.map((Item) => (
						<WidgetConatiner key={Item.id}>
							<Text>{Item.Title}</Text>
						</WidgetConatiner>
					))}
				</Widget3>
				<Widget4>
					<WidgeTitle>
					Download our app
					</WidgeTitle>
					<AppButtons>
						<AppButton>
							<Link>
								<AppIcon src={playstore}/>
							</Link>
							<AppLabel>
								Download App Get -10% Discount
							</AppLabel>
						</AppButton>
						<AppButton>
							<Link>
								<AppIcon src={appstore}/>
							</Link>
							<AppLabel>
									Download App Get -20% Discount
							</AppLabel>
						</AppButton>
					</AppButtons>
					<WidgetFooter>
						<Title>
							Follow us on social media:
						</Title>
						<SocialMediaIcons>
							<IconBoxbig>
								<SocialIcon src={facebook} />
							</IconBoxbig>
							<IconBox>
								<SocialIcon src={twiter} />
							</IconBox>
							<IconBox>
								<SocialIcon src={insta} />
							</IconBox>
							<IconBox>
								<SocialIcon src={linkdin}/>
							</IconBox>
						</SocialMediaIcons>
					</WidgetFooter>
				</Widget4>
			</WidgetsBlock>
		</MiddleInner>
	</MiddleContainer>
  );
}

const MiddleContainer = styled.div`
	padding: 50px 0;
	border-bottom: 1px solid #e5e7eb;
`;

const MiddleInner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const ContactBlock = styled.div`
	width: 30%;
`;

const WidgeTitle = styled.h3`
	font-size: 15px;
	font-weight: bold;
	margin-bottom: 30px;
`;


const WidgetBody = styled.div`
  
`;

const Paragraph = styled.p`
	font-size: 13px;
	margin-bottom: 30px;
	width: 300px;
	color: #6B7280;
`;

const FooterContact = styled.div`
`;

const ContactInformations = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
`;
const ContactInformationsMail = styled.div`
	display: flex;
	align-items: center;
`;
const ContactIcon = styled.div`
	width: 25px;
`;

const Icon = styled.img`
	display: block;
	width: 100%;
`;

const ContactDetials = styled.div`
	margin-left: 20px;
`;

const Span = styled.span`
	font-size: 13px;
	color: #6B7280;
`;

const Phone = styled.a`
	display: block;
	font-size: 20px;
	font-weight: bold;
`;

const Mail = styled.a`
	display: block;
	font-size: 15px;
	font-weight: bold;
`;

const WidgetsBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 70%;
`;
const Widget1 = styled.div`
  
`;
const Widget2 = styled.div`

`;
const Widget3 = styled.div`


`;
const WidgetConatiner = styled.ul`
`
const Text = styled.li`
	color: #6B7280;
	font-size: 13px;
	line-height: 24px;
	&:hover{
		text-decoration: underline;
	}
`;
const Widget4 = styled.div`
	width: 25%;
`;


const AppButtons = styled.div`
	
`;

const AppButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
`;

const Link = styled.a`
	width: 80%;
	display: block;
`;

const AppIcon = styled.img`
	display: block;
	width: 100%;
`;

const AppLabel = styled.p`
	font-size: 11px;
	width: 55%;
	line-height: 12px;
	margin-left: 15px;
`;

const WidgetFooter = styled.div`

`;

const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;

const IconBox = styled.div`
	width: 35px;
	padding: 10px;
	background-color: #fff;
	border-radius: 5px;
	
`;

const SocialIcon = styled.img`
  width: 100%;
  display: block;
`;
const IconBoxbig = styled.div`
	width: 34px;
	background-color: #fff;
	padding: 9px 12px;
	border-radius: 5px;


`;
const Title = styled.h3`
	font-size: 12px;
	margin: 55px 0 10px ;

`;
export default FooterMiddle;
