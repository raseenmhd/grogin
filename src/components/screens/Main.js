import React from 'react'

import MainHeader from "../includes/MainHeader";
import HeaderPage from './Header';
import Navigation from "../includes/Navigations";
import Filter from './Filter';
import Pagination from "../includes/Pagination"
import styled from 'styled-components';
import Spotlight from '../screens/Spotlight';
import Footer from '../screens/Footer';



function Main() {
  return (
	<>
		<MainHeader/>
			<HeaderPage />
			<Navigation/>
			<Pagination />
		<SpotlightContainer>
			<Filter/>
			<Spotlight/>
		</SpotlightContainer>
		<Footer/>
				
	</>
  )
}
const SpotlightContainer = styled.section`
	padding: 20px 50px 50px;
	display : flex;
	justify-content: space-between;
`;
export default Main