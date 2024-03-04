import React, { useState } from 'react';
import styled from 'styled-components';


import profile from "../../../assets/images/profile.png"
import star from "../../../assets/images/star.svg"


const Review = ({ product }) => {

	const [showComments, setShowComments] = useState(false);

	const toggleDescription = () => {
		setShowComments(false);
	};

	const toggleComments = () => {
		setShowComments(true);
	};
//

  return (
	<>
		<SinglePageBottom>
			<DescriptionContainer>
				<Title onClick={toggleDescription} showComments={showComments}>Description</Title>
				<Title2 onClick={toggleComments} showComments={showComments}>Review</Title2>
				<HorizontalLine />
				<ProductDescription showComments={showComments}>
				<DescriptionContent>
					{product.description}
				</DescriptionContent>
				</ProductDescription>
			</DescriptionContainer>
			<CommentsContainer showComments={showComments}>
				{showComments && (
				<ReviewContainer>
					<Profile>
						<ProfileImage src={profile} alt="Profile" />
					</Profile>
					<ReviewContent>
					This is the review content. It can contain any information about the product review, such as the user's opinion, rating, and additional details.
					</ReviewContent>
					<IsLikedButton >
							<LikeIcon src={star} />
					</IsLikedButton>
				</ReviewContainer>
				)}
			</CommentsContainer>
		</SinglePageBottom>
	</>
  );
};

const SinglePageBottom =styled.section`
	padding: 20px 0;
`;

const DescriptionContainer = styled.div`
  	padding: 10px 0 30px;
  
`;

const Title = styled.h2`
	font-size: 16px;
	padding-bottom: 17px;
	width: 10%;
	display: inline-block;
	cursor: pointer;
	opacity: ${({ showComments }) => (!showComments ? '1' : '0.5')} ;
	border-bottom: ${({ showComments }) => (!showComments ? '3px solid' : '0')};
	@media all and (max-width: 980px){
		width: 12%;
	}
	@media all and (max-width: 768px){
		width: 15%;
	}
	@media all and (max-width: 640px){
		width: 20%;
	}
	@media all and (max-width: 480px){
		width: 27%;
	}
`;

const Title2 = styled.h2`
	font-size: 16px;
	width: 6%;
	padding-bottom: 17px;
	display: inline-block;
	cursor: pointer;
	opacity: ${({ showComments }) => (showComments ? '1' : '0.5')} ;
	border-bottom: ${({ showComments }) => (showComments ? '3px solid' : '0')};
	@media all and (max-width: 1280px){
		margin-left: 5px;
	}
	@media all and (max-width: 1080px){
		margin-left: 10px;
	}
	@media all and (max-width: 980px){
		margin-left: 20px;
		width: 8%;
	}
	@media all and (max-width: 768px){
		width: 10%;
	}
	@media all and (max-width: 640px){
		width: 13%;
	}
	@media all and (max-width: 480px){
		width: 18%;
	}
`;

const HorizontalLine = styled.hr`
  	border: 1px solid #E5E7EB;
`;

const ProductDescription = styled.div`
  	display: ${({ showComments }) => (showComments ? 'none' : 'block')};
	height: 165px;
	@media all and (max-width: 980px){
		height: unset;
	}
`;

const DescriptionContent = styled.p`
	font-size: 14px;
	margin: 20px 0;
`;

const CommentsContainer = styled.div`
	display: ${({ showComments }) => (showComments ? 'block' : 'none')};
	height: 185px;
`;

const Profile = styled.div`
	width: 70px;
`;

const ProfileImage = styled.img`
	display: block;
	width: 100%;
`;

const ReviewContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: relative;
	padding: 30px 0;
	border-bottom: 1px solid #E5E7EB;
	@media all and (max-width: 640px){
		justify-content: space-between;
	}

`;

const ReviewContent = styled.p`
	width: 80%;
	font-size: 14px;
`;

const IsLikedButton = styled.button`
	position: absolute;
    right: 20px;
    top: 0px;
	width: 20px;
`;

const LikeIcon = styled.img`
	display: block;
	width: 100%;
`;

export default Review;
