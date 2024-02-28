import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



import arrow from "../../assets/images/Vector.svg";
import search from "./../../assets/images/search.svg";
import heart from "../../assets/images/heart.svg";
import profile from "../../assets/images/profile.svg";
import cart from "../../assets/images/cart.svg";
import location from "../../assets/images/location.png";
import logo from "../../assets/images/logo.png";



function Header() {
  return (
	<>
		<HeaderContainer>
			
		  <HeaderTop>
			<NavLeft>
			  <Items>
				<Item>
				  <Link to="#">About Us</Link>
				</Item>
				<Item>
				  <Link to="#">My account</Link>
				</Item>
				<ItemThree>
				  <Link to="#">Wishlist</Link>
				</ItemThree>
				<Paragraph>
				  We deliver to you every day from <Bold>7:00 to 23:00</Bold>
				</Paragraph>
			  </Items>
			</NavLeft>
			<NavRight>
			  <LangugeButton>
				<Title>English</Title> 
				<Icon src={arrow} alt="arrow_icon" />
			  </LangugeButton>
			  <LangugeButton>
				<Title>USD</Title> 
				<Icon src={arrow} alt="arrow_icon" />
			  </LangugeButton>
			  <Button>Order Tracking</Button>
			</NavRight>
			</HeaderTop>
			<HeaderMiddle>
				<HeaderInner>
					<SiteLogo>
						<Link to="#">
							<Logo src={logo}/>
						</Link>
					</SiteLogo>
					<MiddleContainer>
						<LocationButton>
								<ActionIcon>
									<Location>
										<LocationIcon src={location}/>
									</Location>
								</ActionIcon>
								<ActionText>
									<Span>Deliver to</Span>
									<Text>all</Text>
								</ActionText>
						</LocationButton>
						<HeaderSearch>
							<SearchForm>
								<SearchInput type="search" placeholder="Search for products, categories or brands..."/>
								<SubmitButton>
									<SearchIcon src={search}/>
								</SubmitButton>
							</SearchForm>
						</HeaderSearch>
					</MiddleContainer>
					<RightContainer>
							<Profile>
								<Link to="login">
									<ProfileIcon>
										<Profilelogo src={profile}/>
									</ProfileIcon>
									<ProfileText>
										Account
									</ProfileText>
								</Link>
							</Profile>
							<Wishlist>
								<Link to="#">
									<WishlistIcon>
										<Wishlistimg src={heart}/>
									</WishlistIcon>
									<WishlistText>
										Wishlist
									</WishlistText>
								</Link>
							</Wishlist>
							<Cart>
								<Link to="#">
									<CartIcon>
										<Cartimg src={cart}/>
									</CartIcon>
									<CartText>
										Your Cart
										</CartText>
								</Link>
							</Cart>
						</RightContainer>
				</HeaderInner>
			</HeaderMiddle>
		</HeaderContainer>

	</>
  );
}

const HeaderContainer = styled.header`
 
  
`;

const HeaderTop = styled.div`
	height: 40px;
	padding: 0 50px;
	border-bottom: 1px solid #E5E7EB;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavLeft = styled.nav`
	display: flex;
	align-self: center;
	justify-content: space-between;
`;

const Items = styled.ul`
	display: flex;
	align-self: center;
	justify-content: space-between;
`;

const Item = styled.li`
	font-size: 13px;
	padding-right: 15px;

`;
const ItemThree = styled.li`
	font-size: 13px;
	padding-right: 15px;
	border-right: 1px solid #E5E7EB;
`;
const Paragraph = styled.li`
	font-size: 14px;
	padding-left: 15px;
`;
const Bold = styled.span`
	font-weight: bold;
	color: #EA580C;
`;
const NavRight = styled.nav`
	width: 17%;
	display: flex;
	align-self: center;
	justify-content: space-between;
`;

const LangugeButton = styled.div`
	display: flex;
	align-self: center;
	justify-content: space-between;
`;
const Title = styled.h4`
	margin-right: 6px;
	font-size: 13px;
	cursor: pointer;
`;
const Icon = styled.img`
	 width: 9px;
`;
const Button = styled.button`
	font-size: 13px;
	cursor: pointer;
`;

const HeaderMiddle = styled.div`
	padding : 0 50px;
	border-bottom: 1px solid #E5E7EB;
`;

const HeaderInner = styled.div`
	display : flex ;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	
`;

const SiteLogo = styled.div`
	width: 140px;
	
`;

const Logo = styled.img`
	display: block;
	width: 100%;
`;

const MiddleContainer = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const LocationButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 12%;
`;

const ActionIcon = styled.div`
  	width: 40px;
	height: 40px;
	background-color: #E5E7EB;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
`;
const Location = styled.div`
	width: 18px;
`;
const LocationIcon = styled.img`
	width: 100%;
	display: block;
`;
const ActionText = styled.div`
  /* Add styles for ActionIcon */
`;
const Span = styled.span`
	font-size: 12px;
`;
const Text = styled.p`
	font-size : 13px;
	font-weight: bold;

`;
const HeaderSearch = styled.div`
   	width: 85%;
	background-color: #F3F4F6;
	padding: 12px 10px 12px 20px;
	border-radius: 10px;
`;

const SearchForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SearchInput = styled.input`
	font-size: 14px;
	width: 90%;
	opacity: 0.9;
`;

const SubmitButton = styled.button`
	width: 20px;
`;

const SearchIcon = styled.img`
	display: block;
	width: 100%;
`;

const RightContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 15%;
`;

const Profile = styled.div`
	width: 30%;

`;
const ProfileIcon = styled.div`
  	width: 26px;
	margin: 0 auto;
`;
const Profilelogo = styled.img`
	display: block;
	width: 100%;
`;
const ProfileText = styled.p`
	font-size: 12px;
	text-align: center;
	font-weight: bold;
`;

const Wishlist = styled.div`
  	width: 30%;
`;

const WishlistIcon = styled.div`
	width: 25px;
	margin: 0 auto 2px;
`;
const Wishlistimg = styled.img`
	width: 100%;
	display: block;
`;
const WishlistText = styled.p`
	font-size: 12px;
	text-align: center;
	font-weight: bold;
`;
const Cart = styled.div`
  	width: 31%;

`;

const CartIcon = styled.div`
  	width: 25px;
	margin: 0 auto;
`;
const Cartimg = styled.img`
	
	width: 100%;
	display: block;
`;
const CartText = styled.p`
	font-size: 12px;
	text-align: center;
	font-weight: bold;
`;


export default Header;
