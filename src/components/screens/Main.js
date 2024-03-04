import React,{useState}from 'react'
import { Helmet } from 'react-helmet';


import MainHeader from "../includes/MainHeader";
import HeaderPage from './Header';
import NavBar from "../includes/NavBar";
import Filter from '../screens/spotlight/Filter';
import Pagination from "../includes/Pagination"
import styled from 'styled-components';
import Spotlight from '../screens/spotlight/Spotlight';
import Footer from '../screens/Footer';


import { Products } from '../data/data';
import RepHeader from '../includes/ResponsiveHeader/RepHeader';

	
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
		<Helmet>
			<title>Grogin | shoping</title>
		</Helmet>
		<MainHeader/>
			<HeaderPage />
			<RepHeader/>
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
	margin: 0 auto;
	max-width: 1440px;
	justify-content: space-between;
	@media all and (max-width: 640px){
		padding: 10px 10px 25px;
	}
`;

export default Main