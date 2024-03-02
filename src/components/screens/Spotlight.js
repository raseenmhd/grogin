import React from 'react'
import styled from 'styled-components'


import ProductListpage from './ProdectList';


import shoparrow from "../../assets/images/shopicon.svg";
import banner from "../../assets/images/banner.png";
import arrow from "../../assets/images/Vector.svg";
import listIcon1 from "../../assets/images/Icon1.svg";
import listIcon2 from "../../assets/images/Icon 2.svg";


function Spotlight({data}) {
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
`;
const PageHeader = styled.div`
	
`;

const ShopPageBanner = styled.div`
	position: relative;
`;

const EntryInner = styled.div`
	max-width: 45%;
	position:  absolute;
	z-index: 1;
	top: 15px;
	left: 30px;
	
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
`;

const Subtitle = styled.h4`
	font-size : 12px;
	font-weight: 600;
	color: #7C2D12;
	
`;
const EntryTitle = styled.h1`
	font-size : 30px;
	font-weight: bold;
	letter-spacing: -0.9px;
`;

const Paragraph = styled.p`
	font-size: 15px;
    opacity: 0.7;
    line-height: 1.4em;
	margin: 10px 0;
`;

const ShopNowButton = styled.button`
	width: 27%;
    border: 1px solid #E5E7EB;
    height: 35px;
    border-radius: 50px;
	background-color: #fff;
	cursor: pointer;
`;

const ButtonTitle = styled.span`
	font-size: 13px;
	font-weight: bold;
	
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
	border-radius: 10px;
`;

const ProdectBeforShop = styled.div`
	background-color: #F3F4F6;
	padding: 15px;
	width: 100%;
	margin: 10px 0;
	border-radius: 10px;
`;
const ProdectList = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ListProdectCount = styled.div`
	width: 50%;
`;

const CountText = styled.p`
	font-size: 13px;
	opacity: 0.8;
`;

const ProdectSortSection = styled.div`
	width: 45%;
  	display: flex;
	align-items: center;
	justify-content: space-between;
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