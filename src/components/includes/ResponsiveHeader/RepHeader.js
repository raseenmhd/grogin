import React, { useState } from 'react';
import styled from 'styled-components';

import logo from "../../../assets/images/logo.png";
import menu from "../../../assets/images/menu.svg";
import cart from "../../../assets/images/cart.svg";
import arrowImage from "../../../assets/images/Vector.svg";
import close from "../../../assets/images/close.svg";

function RepHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <Header>
                <Menu>
                    <MenuIcon onClick={toggleMenu}>
                        <Icon src={menu} />
                    </MenuIcon>
                </Menu>
                <Logo>
                    <LogoIcon src={logo} />
                </Logo>
                <RightContainer>
                    <Cart>
                        <CartIcon src={cart} />
                    </Cart>
                </RightContainer>
            </Header>
            <Nav isOpen={isMenuOpen}>
                <Container>
                    <NavLeft>
                        <ListItems>
                            <Item>
                                <Logo>
                                    <LogoIcon src={logo} />
                                </Logo>
                                <Close  onClick={toggleMenu}>
                                    <CloseIcon src={close} />
                                </Close>
                            </Item>
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
                                    <Arrowimg src={arrowImage} />
                                </Arrow>
                            </Link>
                        </CustomButton>
                        <CustomButton2>
                            <Link to="">
                                <Textred>
                                    Almost Finished
                                    <Badge>SALE</Badge>
                                </Textred>
                                
                                <Arrow>
                                    <Arrowimg src={arrowImage} />
                                </Arrow>
                            </Link>
                        </CustomButton2>
                    </NavRight>
                </Container>
            </Nav>
        </>
    );
}

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px;
    border-bottom: 1px solid #D1D5DB;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 999;
    @media all and (max-width: 1280px){
        padding: 10px 50px;
    }
    @media all and (max-width: 640px){
        padding: 6px 15px;
    }
`;

const Menu = styled.div`
`;

const RightContainer = styled.div`
`;

const MenuIcon = styled.div`
    width: 20px;
    cursor: pointer;
`;

const Icon = styled.img`
    display: block;
    width: 100%;
`;

const Logo = styled.div`
    width: 120px;
    margin: 10px 0;
`;

const LogoIcon = styled.img`
    width: 100%;
    display: block;
`;

const Cart = styled.div`
    width: 26px;
    cursor: pointer;
`;

const CartIcon = styled.img`
    width: 100%;
    display: block;
`;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background-color: #fff;
    transition: left 0.3s ease;
    z-index: 999;
    overflow-y: auto;
`;

const Container = styled.div`
    display: block;
    align-items: center;
    justify-content: space-between;
`;

const NavLeft = styled.div`
    width: 100%;
    
`;

const ListItems = styled.ul`
    display: block;

`;

const Item = styled.li`
    font-size: 14px;
    padding: 20px 30px 20px;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    justify-content: space-between;
`;

const Close =styled.div`
    width: 25px;
`;

const CloseIcon =styled.img`
    display: block;
    width: 100%;
`;

const Link = styled.a`
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    width: 100%;

`;

const CustomButton = styled.button`
    cursor: pointer;
    padding: 20px 30px 20px;
    width: 100%;
    border-bottom: 1px solid #E5E7EB;
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
    padding: 20px 30px 20px;
    width: 100%;
    border-bottom: 1px solid #000;
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
`;

const Textred = styled.h4`
    display: inline-block;
    font-size: 14px;
    font-weight: 600;
    color: #DC2626;
`;

export default RepHeader;
