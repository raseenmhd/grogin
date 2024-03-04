import React, {useState}from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


import stoke from "../../../assets/images/cart.svg"
// import Favoriteicon from "../../../assets/images/heart.svg"


import star from "../../../assets/images/star.svg"
import start2 from "../../../assets/images/start2.svg"


function ProductList({data}) {

	const limiteData = data.slice(0,15);
//

const [liked, setLiked] = useState(false);

const toggleLike = () => {
	setLiked(!liked);
};
  	return (
		<ProductContainer>
			{limiteData.map((product) => {
				return(	
					<ProductTable key={product.id} >
						<NavLink to={`/product/${product.id}`}>
							<ProductImage>
								<Image src={product.cover_image} />
							</ProductImage>
							<ProductName>{product.title}</ProductName>
							<ProductRating>
								<Star src={star} />
								<Star src={star} />
								<Star src={star} />
								<Star src={star} />
								<Star src={start2} />
							</ProductRating>
							<Pricing>
								<DiscountPrice>${product.offer_price}</DiscountPrice>
								<OriginalPrice>${product.orginal_price}</OriginalPrice>
							</Pricing>
							<StockIndication>
								<StockIconBox>
									<StockIcon src={stoke} />
								</StockIconBox>
								<Label>in stock </Label>
							</StockIndication>
							<Favorite>
								<Offertag>
									<Offer>{product.descount}</Offer>
								</Offertag>
								<FavoriteIcon onClick={toggleLike}>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? "red" : "#626262"} />
									</svg>
								</FavoriteIcon>
							</Favorite>
						</NavLink>
					</ProductTable>	
				)
			})}
		</ProductContainer>
  );
}
const ProductContainer = styled.div`
	width: 100%;
	border: 2px solid #E5E7EB;
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
	z-index: 0;
	
`;

const ProductTable = styled.div`
	width: 20%;
	border-right: 1px solid #E5E7EB;
	border-bottom: 1px solid #E5E7EB;
	padding: 15px;
	position: relative;
	@media all and (max-width: 980px){
		width: 33.3%;
	}
	@media all and (max-width: 480px){
        width: 50%;
    }
`;
const ProductImage = styled.div`
	width: 100%;

`;
const Image = styled.img`
	display: block;
	width: 100%;

`;
const ProductName = styled.h3`
	font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 40px;

`;
const ProductRating = styled.div`
	font-size: 14px;
	margin: 10px 0;
`;
const Star = styled.img`

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
	z-index: 10;
`;
const Offertag = styled.div`
	background-color: red;
	padding: 5px 10px;
	border-radius: 25px;
	@media all and (max-width: 1280px){
		padding: 2px 6px;
	}

`;
const Offer = styled.h5`
	font-size: 13px;
	font-weight: bold;
	color: #fff;
	@media all and (max-width: 1280px){
		font-size: 12px;
	}
`;
const FavoriteIcon = styled.div`
	width: 20px;
`;

export default ProductList;
