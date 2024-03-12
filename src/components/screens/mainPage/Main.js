import React,{useState}from 'react'
import { Helmet } from 'react-helmet';


import MainHeader from "../../includes/Header/Header-inner/MainHeader";
import Header from '../../includes/Header/Header';
import NavBar from "../../includes/Header/Header-inner/NavBar";
import Filter from './mainpage-inner/Filter';
import Pagination from "../../includes/Pagination"
import styled from 'styled-components';
import Spotlight from './mainpage-inner/Spotlight';
import Footer from '../../includes/Footer/Footer';
import Profile from '../../includes/Header/Header-inner/Profile';

import { Products } from '../../data/data';
import RepHeader from '../../includes/ResponsiveHeader/RepHeader';

	
function Main({toggleProfile , isprofileopen}) {

	const [isFilteropen, setFilteropen] = useState(false);

    const toggleFilter = () => {
        setFilteropen(!isFilteropen);
    }
//

	const [data, setData] = useState(Products);

    const filterResult = (selectedCategories) => {
        if (selectedCategories.length === 0) {
            setData(Products); 
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
			<Header toggleProfile={toggleProfile}/>
			<RepHeader/>
			<Profile isprofileopen={isprofileopen}/>
			<NavBar/>
			<Pagination />
		<SpotlightContainer>
			<Filter filterResult={filterResult} isFilteropen={isFilteropen} toggleFilter={toggleFilter}/> 
			<Spotlight data={data} toggleFilter={toggleFilter}/>
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