import React from 'react'

import MainHeader from "../includes/MainHeader";
import HeaderPage from './Header';
import Navigation from "../includes/Navigations";
import Filter from './Filter';
import Pagination from "../includes/Pagination"
import styled from 'styled-components';
import Spotlight from '../screens/Spotlight';

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
				
	</>
  )
}
const SpotlightContainer = styled.section`
	padding: 20px 50px 0;
	display : flex;
	justify-content: space-between;
`;
export default Main