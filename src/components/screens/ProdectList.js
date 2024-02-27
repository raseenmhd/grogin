import React from 'react';
import styled from 'styled-components';

import image from "../../assets/images/image1.png"
import stoke from "../../assets/images/cart.svg"
import Favoriteicon from "../../assets/images/heart.svg"
import image1 from "../../assets/images/image2.png"
import image2 from "../../assets/images/image3.png"
import image3 from "../../assets/images/image4.png"

function ProductList() {
  return (
	<ProductContainer>
	  	<ProductTable>
			<ProductImage>
				<Image src={image} />
			</ProductImage>
			<ProductName>Yellow Potatoes Whole Fresh, 5lb Bag</ProductName>
			<ProductRating>Product Rating</ProductRating>
			<Pricing>
				<DiscountPrice>$27.90</DiscountPrice>
				<OriginalPrice>$32.90</OriginalPrice>
			</Pricing>
			<StockIndication>
				<StockIconBox>
					<StockIcon src={stoke} />
				</StockIconBox>
				<Label>in stock </Label>
			</StockIndication>
			<Favorite>
				<Offertag>
					<Offer>16%</Offer>
				</Offertag>
				<FavoriteIcon>
					<HeartIcon src={Favoriteicon}/>
				</FavoriteIcon>
			</Favorite>
	  	</ProductTable>
		  <ProductTable>
			<ProductImage>
				<Image src={image1} />
			</ProductImage>
			<ProductName>Yellow Potatoes Whole Fresh, 5lb Bag</ProductName>
			<ProductRating>Product Rating</ProductRating>
			<Pricing>
				<DiscountPrice>$27.90</DiscountPrice>
				<OriginalPrice>$32.90</OriginalPrice>
			</Pricing>
			<StockIndication>
				<StockIconBox>
					<StockIcon src={stoke} />
				</StockIconBox>
				<Label>in stock </Label>
			</StockIndication>
			<Favorite>
				<Offertag>
					<Offer>16%</Offer>
				</Offertag>
				<FavoriteIcon>
					<HeartIcon src={Favoriteicon}/>
				</FavoriteIcon>
			</Favorite>
	  	</ProductTable>
		  <ProductTable>
			<ProductImage>
				<Image src={image2} />
			</ProductImage>
			<ProductName>Yellow Potatoes Whole Fresh, 5lb Bag</ProductName>
			<ProductRating>Product Rating</ProductRating>
			<Pricing>
				<DiscountPrice>$27.90</DiscountPrice>
				<OriginalPrice>$32.90</OriginalPrice>
			</Pricing>
			<StockIndication>
				<StockIconBox>
					<StockIcon src={stoke} />
				</StockIconBox>
				<Label>in stock </Label>
			</StockIndication>
			<Favorite>
				<Offertag>
					<Offer>16%</Offer>
				</Offertag>
				<FavoriteIcon>
					<HeartIcon src={Favoriteicon}/>
				</FavoriteIcon>
			</Favorite>
	  	</ProductTable>
		  <ProductTable>
			<ProductImage>
				<Image src={image3} />
			</ProductImage>
			<ProductName>Yellow Potatoes Whole Fresh, 5lb Bag</ProductName>
			<ProductRating>Product Rating</ProductRating>
			<Pricing>
				<DiscountPrice>$27.90</DiscountPrice>
				<OriginalPrice>$32.90</OriginalPrice>
			</Pricing>
			<StockIndication>
				<StockIconBox>
					<StockIcon src={stoke} />
				</StockIconBox>
				<Label>in stock </Label>
			</StockIndication>
			<Favorite>
				<Offertag>
					<Offer>16%</Offer>
				</Offertag>
				<FavoriteIcon>
					<HeartIcon src={Favoriteicon}/>
				</FavoriteIcon>
			</Favorite>
	  	</ProductTable>
		<ProductTable>
			<ProductImage>
				<Image src={image2} />
			</ProductImage>
			<ProductName>Yellow Potatoes Whole Fresh, 5lb Bag</ProductName>
			<ProductRating>Product Rating</ProductRating>
			<Pricing>
				<DiscountPrice>$27.90</DiscountPrice>
				<OriginalPrice>$32.90</OriginalPrice>
			</Pricing>
			<StockIndication>
				<StockIconBox>
					<StockIcon src={stoke} />
				</StockIconBox>
				<Label>in stock </Label>
			</StockIndication>
			<Favorite>
				<Offertag>
					<Offer>16%</Offer>
				</Offertag>
				<FavoriteIcon>
					<HeartIcon src={Favoriteicon}/>
				</FavoriteIcon>
			</Favorite>
	  	</ProductTable>
	</ProductContainer>
  );
}
const ProductContainer = styled.div`
	width: 100%;
	border: 1px solid #E5E7EB;
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
`;
const ProductTable = styled.div`
	width: 20%;
	border: 1px solid #E5E7EB;
	border: 1px solid #E5E7EB;
	padding: 15px;
	position: relative;
`;
const ProductImage = styled.div`
	width: 100%;

`;
const Image = styled.img`
	display: block;
	width: 100%;

`;
const ProductName = styled.h3`
	font-size: 14px;
`;
const ProductRating = styled.div`
	font-size: 14px;
	margin: 10px 0;
`;
const Pricing = styled.div`
	display: flex;
	align-items: center;
	
`;

const DiscountPrice = styled.div`
	font-size: 22px;
	font-weight: bold;
	color: red;
	margin-right: 10px;
`;
const OriginalPrice = styled.div`
	font-size: 16px;
	text-decoration: line-through;
`;
const StockIndication = styled.div`
	display: flex;
	align-items: center;
    margin-top: 10px;
`;
const StockIconBox = styled.div`
	width: 30px;
    padding: 5px;
    background-color: #16A34A;
	border-radius: 5px;
	
`;
const StockIcon = styled.img`
	display: block;
	width: 100%;
	filter: invert(100%);
`;
const Label = styled.div`
	font-size: 13px;
	font-weight: bold;
	color: #16A34A;
	text-transform: uppercase;
	margin-left: 20px;
`;
const Favorite =styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	position: absolute;
	top: 15px;
`;
const Offertag = styled.div`
	background-color: red;
	padding: 5px 10px;
	border-radius: 25px;
`;
const Offer = styled.h5`
	font-size: 13px;
	font-weight: bold;
	color: #fff;
`;
const FavoriteIcon = styled.div`
	width: 20px;
`;
const HeartIcon= styled.img`
	display: block;
	width: 100%;
`;
export default ProductList;
