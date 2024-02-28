import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value){
	return `${value}°C`;
}

function Filter() {
	const [value, setValue] = useState([0,30]);

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
					<Box sx={{ width: "100%" }}>
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
{/* //////////////////////////////// */}
			<ProductCategory>
				<CategoryTitle>
					Product Categories
				</CategoryTitle>
			</ProductCategory>
			<FilterByColor>
				<Title>Filter by Color</Title>
				<ContantBox>
					<LeftContainer>
						<ColorBox>
						
						</ColorBox>
						<ColorName>
							Green
						</ColorName>
					</LeftContainer>
					<SelectedCount>
								(1)
					</SelectedCount>
				</ContantBox>
				
			</FilterByColor>
			<ProductBrand>
				<Title>Filter by Brands</Title>
				<From>
					<ContantBox>
						<LeftContainer>
							<InputCheckBox type="checkbox" id="check2"></InputCheckBox>
							<Label for="check2">Fresh</Label>
						</LeftContainer>
						<SelectedCount>
								(1)
						</SelectedCount>
					</ContantBox>
				</From>
			</ProductBrand>
			<ProductStatus>
				<Title>Filter by Brands</Title>
				<From>
					<Statusbar>
						<Checkbox>
							<InputCheckBox type="checkbox" id="check"></InputCheckBox>
							<Label for="check">In Stock</Label>
						</Checkbox>
						<Checkbox>
							<InputCheckBox  type="checkbox" id="check1"></InputCheckBox>
							<Label for="check1">On Sale</Label>
						</Checkbox>
					</Statusbar>
				</From>
			</ProductStatus>
	  	</FilterContainer>
	</MainContainer>
  );
}

const MainContainer = styled.div`
	width: 20%;
`;

const FilterContainer = styled.div`
	
`;

const FilterSliderHeader = styled.div`
	padding-bottom: 30px;
	border-bottom: 1px solid #E5E7EB;
`;

const WidgetTitle = styled.h2`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 20px ;
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
	font-size: 13px;
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
	cursor: pointer;
`;

////////////////////////////////

const ProductCategory = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #E5E7EB;
`;

const CategoryTitle = styled.h3`
	font-size: 16px;
	font-weight: bold;
`;

const FilterByColor = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #E5E7EB;
`;

const ColorBox = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50px;
	background-color: #81D742;
	
`;
const ContantBox = styled.div`
	margin-top: 20px ;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const LeftContainer = styled.div`
	display: flex;
	align-items: center;
`;
const Title = styled.h3`
	font-size: 16px;
	font-weight: bold;
	
`;
const ColorName = styled.h5`
	font-size: 14px;
	margin-left: 10px;
`;

const SelectedCount = styled.span`
	font-size: 15px;
	opacity: 0.8;
`;
const ProductBrand =styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #E5E7EB;
`;
const ProductStatus = styled.div`
  	padding: 20px 0;
	border-bottom: 1px solid #E5E7EB;
`;
const Checkbox = styled.div`
	display: block;
`;
const From = styled.div`
  /* Add your styles for From here */
`;

const InputCheckBox = styled.input`
  /* Add your styles for InputCheckBox here */
`;

const Statusbar = styled.div`
	margin-top: 20px ;
`;

const Label = styled.label`
    font-size: 15px;
    margin-left: 10px;

`;



export default Filter;
