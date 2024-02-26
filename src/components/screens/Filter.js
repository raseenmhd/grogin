import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value){
	return `${value}°C`;
}

function Filter() {
	const [value, setValue] = useState([0,0]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

  return (
	<MainContainer>
	  	<FilterContainer>
			<FilterSliderHeader>
		  		<WidgetTitle>
					Widget price filter
				</WidgetTitle>
				<PriceSlider>
					<MinPrice>
						<PriceTitle for="minprice">
							Min price
						</PriceTitle>
						<PriceInput type="text" id="minprice" placeholder="Min price" defaultValue="0"/>
					</MinPrice>
					<Separator>-</Separator>
					<MaxPrice>
						<PriceTitle htmlFor="maxprice">
							Max price
						</PriceTitle>
						<PriceInput type="text" id="maxprice" placeholder="Max price" defaultValue="30"/>
					</MaxPrice>
				</PriceSlider>
				<SliderPriceFilter>
					<Box sx={{ width: 247 }}>
						<Slider
							getAriaLabel={() => 'Temperature range'}
							value={value}
							onChange={handleChange}
							valueLabelDisplay="auto"
							getAriaValueText={valuetext}
							sx={{
								color: 'black', 
								'& .MuiSlider-track': {
								color: 'black', 
								},
								'& .MuiSlider-thumb': {
								color: 'black', 
								width: 15,
								height: 15,
								'&:hover, &.Mui-focusVisible': {
									boxShadow: 'none', 
								},
								},
							}}
						/>
					</Box>
				</SliderPriceFilter>
				<FilteredPriceRange>
					<FilteredContainer>
						<FilterTitle>Price:</FilterTitle>
						<FilterMinPrice>$0 </FilterMinPrice>
						<Divide></Divide>
						<FilterMaxPrice>$20</FilterMaxPrice>
					</FilteredContainer>
					<FilterButton>Filter</FilterButton>
				</FilteredPriceRange>
			</FilterSliderHeader>
	  	</FilterContainer>
	</MainContainer>
  );
}

const MainContainer = styled.div`
	width: 22%;
	padding-left: 50px;
`;

const FilterContainer = styled.div`
	
`;

const FilterSliderHeader = styled.div`
	padding-bottom: 30px;
	border-bottom: 1px solid #000;
`;

const WidgetTitle = styled.h2`
	font-size: 16px;
	font-weight: bold;
	padding: 20px 0;
`;

const PriceSlider = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const MinPrice = styled.div`
	width: 45%;
`;

const MaxPrice = styled.div`
	width: 45%;
`;

const Separator = styled.span`
	margin: 20px 15px 0;
	opacity: 0.6;
	font-size: 20px;
`;

const PriceTitle = styled.label`
	font-size: 14px;
	opacity: 0.7;
	margin-bottom: 5px;
	display: inline-block;
`;

const PriceInput = styled.input`
	border: 1px solid #D1D5DB;
	width: 100%;
	padding: 10px;
	border-radius: 10px;
`;

const SliderPriceFilter = styled.div`
	margin: 10px 0;
`;

const FilteredPriceRange = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const FilteredContainer = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.h5`
	font-size: 15px;
	margin-right : 3px;
`;

const FilterMinPrice = styled.span`
	font-size: 15px;
`;

const FilterMaxPrice = styled.span`
	font-size: 15px;
`;
const Divide = styled.div`
	height: 2px;
    width: 15px;
    background-color: #000;
	margin: 0 2px;
`;
const FilterButton = styled.button`
	padding: 10px 18px;
    font-size: 15px;
    font-weight: 600;
    background-color: #E5E7EB;
    border-radius: 10px;
`;
export default Filter;
