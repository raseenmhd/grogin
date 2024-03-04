import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrowImage from "../../assets/images/Vector.svg";




function NavBar() {
  return (
    	<Nav>
      		<Container>
        		<NavLeft>
          			<ListItems>
            			<Item>
              				<Link to="">
								<Text>Home</Text>
								<ArrowButton>
									<ArrowIcon src={arrowImage} />
								</ArrowButton>
							</Link>
           	 			</Item>
            			<Item>
              				<Link to="">
							 	<Text>Shop</Text>	
								<ArrowButton>
									<ArrowIcon src={arrowImage} />
								</ArrowButton>
							</Link>
            			</Item>
						<Item><Link to=""><Text>Fruits & Vegetables</Text></Link></Item>
						<Item><Link to=""><Text>Beverages</Text></Link></Item>
						<Item><Link to=""><Text>Blog</Text></Link></Item>
						<Item><Link to=""><Text>Contact</Text></Link></Item>
          			</ListItems>
        		</NavLeft>
        		<NavRight>
          			<CustomButton>
            			<Link to="">
							<Text>
								Trending Products
							</Text> 
							<Arrow>
								<Arrowimg src={arrowImage}/>
							</Arrow>
						</Link>
          			</CustomButton>
          			<CustomButton2>
            			<Link to="">
						 	<Textred>
							 	Almost Finished
							</Textred>	
           			 		<Badge>SALE</Badge>
							<Arrow>
								<Arrowimg src={arrowImage} />
							</Arrow>
						</Link>
          			</CustomButton2>
        		</NavRight>
      		</Container>
    	</Nav>
		
  );
}

const Nav = styled.nav`
	padding: 0 50px;
	border-bottom: 1px solid #E5E7EB;
`;

const Container = styled.div`
  	display: flex;
	align-items: center;
  	justify-content: space-between;
	height: 50px;
`;

const NavLeft = styled.div`
	width: 40%;
`;


const ListItems = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Item = styled.li`
	font-size: 14px;
	
`;

const ArrowButton = styled.button`
	width: 10px;
    margin-left: 7px;
`;

const ArrowIcon = styled.img`
 	 width: 100%;
	 display: block;
`;
const NavRight = styled.div`
	width: 29%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CustomButton = styled.button`
  	cursor: pointer;
`;

const Arrow = styled.div`
  	width: 10px;
    margin-left: 7px;
	display: inline-block;
`;

const Arrowimg = styled.img`
	width: 100%;
	display: block;
	filter: brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(900%) hue-rotate(355deg);
`;
const CustomButton2 = styled.div`

`;
const Badge = styled.span`
	background-color: #DC2626;
	border-radius: 5px;
	color: white;
	padding: 4px;
	margin-left: 5px;
	font-size: 11px;
	font-weight: bold;
`;
const Text = styled.h4`
	display: inline-block;
	font-size: 14px;
	font-weight: 600;
`
const Textred = styled.h4`
	display: inline-block;
	font-size: 14px;
	font-weight: 600;
	color: #DC2626;
`;
export default NavBar;
