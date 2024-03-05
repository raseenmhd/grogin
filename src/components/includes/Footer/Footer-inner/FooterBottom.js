import React from 'react'
import styled from 'styled-components'


import { PymentCards,CopyRightMenu } from "../../../data/data"

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
                            <CardBox key={card.id}>
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
                            <Menu key={title.id}>
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
    @media all and (max-width: 768px){
        padding: 20px 0;
    }
`;

const FooterInner = styled.div`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 768px){
        display: block;
    }
`;

const FooterLeft = styled.div`
    width: 50%;
    @media all and (max-width: 1380px){
		width: 40%;
	}
    @media all and (max-width: 768px){
        width: 100%;
        text-align: center;
    }
   
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
    @media all and (max-width: 980px){
        width: 70%;
    }
    @media all and (max-width: 768px){
        margin: 10px auto;
        width: 60%;
    }
    @media all and (max-width: 640px){
        width: 80%;
    }
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
    @media all and (max-width: 1380px){
		width: 35%;
	}
    @media all and (max-width: 1080px){
		width: 38%;
	}
    @media all and (max-width: 980px){
        width: 50%;
    }
    @media all and (max-width: 768px){
        width: 65%;
        margin: 0 auto;
    }
    @media all and (max-width: 640px){
        width: 90%;
    }
    @media all and (max-width: 480px){
        width: 100%;
    }


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
    @media all and (max-width: 360px){
        font-size: 10px;
    }
`;
export default FooterBottom;
