import React from 'react'
import styled from 'styled-components'


import { PymentCards,CopyRightMenu } from "../../data/data"

function FooterBottom() {
  return (
    <>
        <FooterContainer>
            <FooterInner>
                <FooterLeft>
                    <SiteCopyright>
                        Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by <Color>KLBTheme.</Color>
                    </SiteCopyright>
                    <SitePymentCards>
                        {PymentCards.map((card, id) => (
                            <CardBox>
                                <Link>
                                    <PymentCarsIcon key={id} src={card.image} />
                                </Link>
                            </CardBox>
                        ))}
                    </SitePymentCards>
                </FooterLeft>
                <FooterRight>
                    <FooterCopyRightMenu>
                        {CopyRightMenu.map((title) =>(
                            <Menu>
                                <MenuItem>{title.menuitems}</MenuItem>
                            </Menu>
                        ))}
                    </FooterCopyRightMenu>
                </FooterRight>
            </FooterInner>  
        </FooterContainer>
    </>
  )
}

const FooterContainer = styled.div`
    padding:  45px 0;

`;

const FooterInner = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FooterLeft = styled.div`
    width: 50%;
`;

const SiteCopyright = styled.p`
    font-size: 12px;
`;
const Color = styled.a`
    display: inline-block;
    font-size: 13px;
    color: #634c9f;
    font-weight: 600;
`;

const SitePymentCards = styled.ul`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin : 20px 0;
`;

const CardBox = styled.li`
    
`;
const Link = styled.a`
    display: block;
`;
const PymentCarsIcon = styled.img`
    display: block;
    width: 100%;
`;

const FooterRight = styled.div`
    width: 26%;
`;

const FooterCopyRightMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Menu = styled.li`
    &:hover{
        text-decoration: underline;
    }
`;
const MenuItem = styled.a`
    font-size: 12px;
`;
export default FooterBottom;
