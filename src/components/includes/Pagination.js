import React from 'react';
import styled from 'styled-components';

import arrow from "../../assets/images/Vector.svg";


function Pagination() {
	return (
		<PaginationWrapper>
			<PaginationContainer>
				<HomePage>Home</HomePage>
				<Arrow>
					<Icon src={arrow} alt="Arrow" />
				</Arrow>
				<ShoppingPage>Shop</ShoppingPage>
			</PaginationContainer>
		</PaginationWrapper>
	);
}
const PaginationWrapper = styled.div`
	padding: 20px 50px 10px;
	@media all and (max-width: 640px){
		padding: 15px 15px 0;
	}

`;

const PaginationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

`;

const HomePage = styled.span`
	font-size: 13px;
	opacity: 0.7;
	
`;

const Arrow = styled.div`
	width: 8px;
	margin: 0 10px 0 4px;
`;

const Icon = styled.img`
	display: block;
	width: 100%;
	transform: rotate(-90deg);

`;

const ShoppingPage = styled.span`
	font-size: 13px;
	font-weight: 600;
`;

export default Pagination;
