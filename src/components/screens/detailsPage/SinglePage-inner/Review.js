import React, { useState } from 'react';
import styled from 'styled-components';


import profile from "../../../../assets/images/profile.png"


const Review = ({ product }) => {

	const [showComments, setShowComments] = useState(false);

	const toggleDescription = () => {
		setShowComments(false);
	};

	const toggleComments = () => {
		setShowComments(true);
	};
//
	const [liked, setLiked] = useState(false);

	const toggleLike = () => {
		setLiked(!liked);
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
					<IsLikedButton onClick={toggleLike} >
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? "red" : "#626262"} />
						</svg>
						<LikeCount>{liked ? "1" : ""}</LikeCount>
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
	@media all and (max-width: 480px){
		display: block;
	}

`;

const ReviewContent = styled.p`
	width: 80%;
	font-size: 14px;
	@media all and (max-width: 480px){
		width: 100%;
		margin-top: 10px;
	}
`;

const IsLikedButton = styled.button`
	position: absolute;
    right: 20px;
    top: 0px;
	width: 20px;
`;

const LikeCount = styled.p`
	font-size: 12px;
	display: block;
`;

export default Review;
