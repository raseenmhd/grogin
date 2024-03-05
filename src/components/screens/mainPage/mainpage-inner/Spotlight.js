import React from 'react'
import styled from 'styled-components'


import ProductListpage from './ProdectList';


import shoparrow from "../../../../assets/images/shopicon.svg";
import banner from "../../../../assets/images/banner.png";
import arrow from "../../../../assets/images/Vector.svg";
import listIcon1 from "../../../../assets/images/Icon1.svg";
import listIcon2 from "../../../../assets/images/Icon 2.svg";
import filter from "../../../../assets/images/filter.png";


function Spotlight({data , toggleFilter}) {


	return (
		<>
			<SpotlightContainer>
					<PageHeader>
							<ShopPageBanner>
								<EntryInner>
									<EntryHeader>
										<Subtitle>
											Only This Week
										</Subtitle>
									</EntryHeader>
									<EntryTitle>
										Grocery store with different
										treasures
									</EntryTitle>
									<Paragraph>
										We have prepared special discounts for you on grocery
										products...
									</Paragraph>
									<ShopNowButton>
										<ButtonTitle>
											ShopNow
										</ButtonTitle>
										<ButtonIcon>
											<ArrowIcon src={shoparrow}/>
										</ButtonIcon>
									</ShopNowButton>
								</EntryInner>
								<EntryMedia>
									<Image src={banner}/>
								</EntryMedia>
							</ShopPageBanner>
					</PageHeader>
					<ProdectBeforShop>
						<ProdectList>
							<ListProdectCount>
								<FilterBox onClick={toggleFilter}>
									<FilterIcon src={filter} />
								</FilterBox>
								<CountText>
									Showing 1–20 of 159 results
								</CountText>
							</ListProdectCount>
							<ProdectSortSection>
								<SortByPrice>
									<SortSubtitle>
										Sort:
									</SortSubtitle>
									<SortingItem>
										<SortingOptions>
											<SortItem>Sort by latest</SortItem>
											<SortItem>Sort by average rating</SortItem>
											<SortItem>Sort by popularity</SortItem>
											<SortItem>Sort by price: high to low</SortItem> 
											<SortItem>Sort by price: low to high</SortItem>
											<DownArrow src={arrow}/>
										</SortingOptions>
									</SortingItem>
								</SortByPrice>
								<SortByItems>
									<SortSubtitle>
										Show:
									</SortSubtitle>
									<SortingItem>
										<SortingOptions>
											<SortItem>20 items</SortItem>
											<SortItem>30 items</SortItem>
											<SortItem>40 items</SortItem>
											<SortItem>50 items</SortItem>
											<DownArrow src={arrow}/>
										</SortingOptions>
									</SortingItem>
								</SortByItems>
								<ProdectViweButton>
									<GridViweActive>
										<ListIcon src={listIcon1}/>
									</GridViweActive>
									<GridViweList>
										<ListIcon src={listIcon2}/>
									</GridViweList>
								</ProdectViweButton>
							</ProdectSortSection>
						</ProdectList>
					</ProdectBeforShop>
					<ProductListpage data={data}/>
			</SpotlightContainer>
		</>
	)
}
const SpotlightContainer = styled.div`
    width: 78%;
	padding: 0 15px;
	@media all and (max-width: 1080px){
		width: 100%;
		padding: 0;
	}
	
`;
const PageHeader = styled.div`
	
`;

const ShopPageBanner = styled.div`
	position: relative;
	
`;

const EntryInner = styled.div`
	width: 45%;
	position:  absolute;
	z-index: 1;
	top: 15px;
	left: 30px;
	@media all and (max-width: 768px){
        width: 65%;
    }
	@media all and (max-width: 640px){
		width: 75%;
	}
	@media all and (max-width: 480px){
		top: 30px;
	}
`;
const EntryHeader = styled.div`
	background-color: #FFEDD5;
	width: 25%;
	height: 20px;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	@media all and (max-width: 1280px){
		width: 30%;
		height: 25px;
		margin-bottom: 0;
	}
	@media all and (max-width: 480px){
		width: 40%;
	}
	
`;

const Subtitle = styled.h4`
	font-size : 12px;
	font-weight: 600;
	color: #7C2D12;
	@media all and (max-width: 1280px){
		font-size : 11px;
	}
	
`;
const EntryTitle = styled.h1`
	font-size : 30px;
	font-weight: bold;
	letter-spacing: -0.9px;
	@media all and (max-width: 1280px){
		font-size: 27px;
	}
	@media all and (max-width: 360px){
		font-size: 25px;
	}
`;

const Paragraph = styled.p`
	font-size: 15px;
    opacity: 0.7;
    line-height: 1.4em;
	margin: 10px 0;
	@media all and (max-width: 1280px){
		
		font-size: 13px;
	}
	@media all and (max-width: 480px){
		width: 100%;
	}
`;

const ShopNowButton = styled.button`
	width: 28%;
    border: 1px solid #E5E7EB;
    height: 40px;
    border-radius: 50px;
	background-color: #fff;
	cursor: pointer;
	@media all and (max-width: 1280px){
		height: 40px;
		width: 30%;
	}
	@media all and (max-width: 480px){
		width: 40%;
	}
`;

const ButtonTitle = styled.span`
	font-size: 14px;
	font-weight: bold;
	@media all and (max-width: 1280px){
		font-size: 13px;
	}
`;

const ButtonIcon = styled.span`
	width : 13px;
	margin-left: 10px;
	display: inline-block;
`;

const ArrowIcon = styled.img`
	display: block;
	widows: 100%;
	
`;

const EntryMedia = styled.div`
	width: 100%;
	
`;

const Image = styled.img`
	width: 100%;
	display : block;
	object-fit: cover;
	border-radius: 10px;
	@media all and (max-width: 1280px){
		height: 230px;
	}
	@media all and (max-width: 480px){
		height: 260px;
	}
`;

const ProdectBeforShop = styled.div`
	background-color: #F3F4F6;
	padding: 15px;
	width: 100%;
	margin: 10px 0;
	border-radius: 10px;
	@media all and (max-width: 360px){
		padding: 7px;
	}
`;
const ProdectList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const FilterBox = styled.div`
	width: 30px;
	margin-right: 20px;
	display: none;
	border: 1px solid #000;
	padding: 5px;
	border-radius: 5px;
	@media all and (max-width: 1080px){
		display: block;
	}
`;

const FilterIcon = styled.img`
	display: block;
	width: 100%;
`;
const ListProdectCount = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	@media all and (max-width: 640px){
		width: 15%;
	}
	@media all and (max-width: 360px){
		width: 20%;
	}
`;

const CountText = styled.p`
	font-size: 13px;
	opacity: 0.8;
	@media all and (max-width: 640px){
		display: none;
	}

`;

const ProdectSortSection = styled.div`
	width: 45%;
  	display: flex;
	align-items: center;
	justify-content: space-between;
	@media all and (max-width: 640px){
		width: 100%;
	}
`;

const SortByPrice = styled.div`
	width: 40%;
    display: flex;
	align-items: center;
	justify-content: space-between;
	
`;

const SortSubtitle = styled.span`
    font-size: 13px;
    opacity: 0.6;
`;

const SortingItem = styled.div`
	width: 100%;
	margin-left: 7px;
`;

const SortingOptions = styled.select`
    display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 100%;
`;

const SortItem = styled.option`
    font-size: 13px;
    margin: 0 10px;

`;

const DownArrow = styled.img`
	display: block;
	width: 10px;
	
`;
const SortByItems = styled.div`
	width: 40%;
    display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`;

const ProdectViweButton = styled.div`
	width:14%;
    display: flex;
	align-items: center;
	justify-content: space-between;
`;

const GridViweList = styled.div`
    width: 20px;
	cursor: pointer;
	@media all and (max-width: 360px){
		display: none;
	}
`;

const ListIcon = styled.img`
    display: block;
	width: 100%;
`;

const GridViweActive = styled.div`
	width: 26px;
	margin-right: 5px;
    background-color: #D1D5DB;
    border-radius: 5px;
    padding: 2px 0 2px 4px;
	cursor: pointer;
`;

export default Spotlight