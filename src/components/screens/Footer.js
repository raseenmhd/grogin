import React from 'react'
import styled from 'styled-components';

import FooterTop from "../includes/FooterTop";
import FooterMiddle from '../includes/FooterMiddle';
import FooterBottom from '../includes/FooterBottom';

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
`;

const FooterWrapper = styled.section`
    max-width : 1440px;
    margin: 0 auto;
`;

export default Footer