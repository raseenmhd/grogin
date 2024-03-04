import React from 'react'
import styled from 'styled-components';

import FooterTop from "../../components/screens/Footer-inner/FooterTop";
import FooterMiddle from '../../components/screens/Footer-inner/FooterMiddle';
import FooterBottom from '../../components/screens/Footer-inner/FooterBottom';

function Footer() {
  return (
    <>
        <FooterContainer>
            <FooterWrapper>
                <FooterTop />
                <FooterMiddle/>
                <FooterBottom />
            </FooterWrapper>
        </FooterContainer>
		
       
    </>
  )
}

const FooterContainer = styled.section`
    padding: 0 50px;
    background-color: #f3f4f6;
    @media all and (max-width: 640px){
        padding: 0 15px;
    }
`;

const FooterWrapper = styled.section`
    max-width : 1440px;
    margin: 0 auto;
`;

export default Footer