import React,{useState}from 'react'

import MainHeader from "../includes/MainHeader";
import HeaderPage from './Header';
import NavBar from "../includes/NavBar";
import Filter from './Filter';
import Pagination from "../includes/Pagination"
import styled from 'styled-components';
import Spotlight from '../screens/Spotlight';
import Footer from '../screens/Footer';

import { Products } from '../data/data';

	
function Main() {
	const [data, setData] = useState(Products);

    const filterResult = (selectedCategories) => {
        if (selectedCategories.length === 0) {
            setData(Products); // If no category is selected, show all products
        } else {
            const filteredData = Products.filter(product => selectedCategories.includes(product.category));
            setData(filteredData);
        }
    };
  return (
	<>
		<MainHeader/>
			<HeaderPage />
			<NavBar/>
			<Pagination />
		<SpotlightContainer>
			<Filter filterResult={filterResult} /> 
			<Spotlight data={data}/>
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