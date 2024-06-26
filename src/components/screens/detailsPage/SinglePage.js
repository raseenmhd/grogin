// SinglePage.js
import React, {useState ,useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import styled from 'styled-components';
import MainHeader from "../../includes/Header/Header-inner/MainHeader";
import Header from '../../includes/Header/Header';
import NavBar from "../../includes/Header/Header-inner/NavBar";
import Pagination from '../../includes/Pagination';
import Footer from '../../includes/Footer/Footer';
import Profile from '../../includes/Header/Header-inner/Profile';


import { Products } from "../../data/data"; 
import Review from './SinglePage-inner/Review';


import ReactImageMagnify from 'react-image-magnify';


import share from "../../../assets/images/share.svg";
import compaerIcon from "../../../assets/images/campare.svg";
import card from "../../../assets/images/Card.svg";
import warranty from "../../../assets/images/warranty.svg";
import star from "../../../assets/images/star.svg"
import start2 from "../../../assets/images/start2.svg"
import bag from "../../../assets/images/bang.svg"
import maxIcon from "../../../assets/images/maxicon.svg"
import minIcon from "../../../assets/images/minicon.svg"
import RepHeader from '../../includes/ResponsiveHeader/RepHeader';


function SinglePage({data , toggleProfile, isprofileopen}) {
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const navigate = useNavigate()
//
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "March, 15, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor(time / (1000 * 60 * 60) % 24));
        setMinutes(Math.floor(time / 1000 / 60) % 60);
        setSeconds(Math.floor(time / 1000) % 60);
    };

    useEffect(() => {
        const interval = setInterval(getTime, 1000);
        return () => clearInterval(interval);
    }, []);
//

	const [value, setValue] = useState(1);

	const handleIncrement = () => {
		setValue(prevValue => prevValue + 1);
	};

	const handleDecrement = () => {
		if (value > 1) {
			setValue(prevValue => prevValue - 1);
		}
	};

//
	const [liked, setLiked] = useState(false);

	const toggleLike = () => {
		setLiked(!liked);
	};

//
	const { productId } = useParams();
	// console.log(Products,productId)
    const product = Products.find((product) => product.id === productId);
    if (!product) {
        return <div>Product not found!</div>;
    }
	

    return (
        <>
			<Helmet>
				<title>{product.title}</title>
      		</Helmet>
            <MainHeader />
            <Header toggleProfile={toggleProfile}/>
			<Profile isprofileopen={isprofileopen}/>
			<RepHeader />
            <NavBar />
            <Pagination />
            <Wrapper>
                <ProductContainer>
                    <ProductGallery>
                        <ProductImage >
						<ReactImageMagnify {...{
							smallImage: {
								alt: 'Wristwatch by Ted Baker London',
								isFluidWidth: true,
								src: product.cover_image,
								},
								largeImage: {
									src: product.cover_image,
									width: 1400,
									height: 1400,
								}
							}} />
                        </ProductImage>
                    </ProductGallery>
					<ProdectDescount>
						<Descount>{product.descount}</Descount>
					</ProdectDescount>
                    <ProductDetails>
                        <ProductName>{product.title}</ProductName>
                        <ProductMeta>
                            <ProductRating>
                                <Star src={star} />
                                <Star src={star} />
                                <Star src={star} />
                                <Star src={star} />
                                <Star src={start2} />
                                <RaitingBox>
                                    4.00
                                </RaitingBox>
                            </ProductRating>
                            <ProductSku>
                                SKU:
                                <SerialNumber>
                                    {product.serial_number}
                                </SerialNumber>
                            </ProductSku>
                        </ProductMeta>
                        <ProductShortDescription>
                            <ShortDescription>{product.short_description}</ShortDescription>
                        </ProductShortDescription>
                        <ProductPrice>
                            <OfferPrice>
                                ${product.offer_price}
                            </OfferPrice>
                            <OrginalPrice>
                                ${product.orginal_price}
                            </OrginalPrice>
                        </ProductPrice>
                        <Button>
                            Order on WhatsApp
                        </Button>
                        <SpecialOfferTimer>
                            <Label>
                                Special Offer:
                            </Label>
                            <SiteCountdown>
                                <Day>{days < 10 ? "0" + days : days}</Day>
                                <Hour>{hours <10 ? "0" + hours : hours}</Hour>
                                <Minute>{minutes <10 ? "0" + minutes : minutes}</Minute>
                                <Semicolon>:</Semicolon>
                                <Second>{seconds <10 ? "0" + seconds : seconds}</Second>
                            </SiteCountdown>
                            <OfferRemainter>
                                <Span>Remains until the end of the offer.</Span>
                            </OfferRemainter>
                        </SpecialOfferTimer>
						<CartContainer>
							<Quantity>
							<MinIconbox onClick={handleDecrement}>
								<MinIcon src={minIcon}/>
								</MinIconbox>
								<Input type="text" value={value} readOnly />
								<MaxIconbox onClick={handleIncrement}>
								<MaxIcon src={maxIcon}/>
							</MaxIconbox>
							</Quantity>
							<CartButton> <Icon src={bag}/>Add to cart</CartButton>
							<BuyButton>
							<Icon src={bag}/>Buy Now</BuyButton>
        				</CartContainer>
                        <ProdectNotices>
                            <NoticeBox>
                                <Notice>
                                    <NoticeIcon>
                                        <CreditCardIcon id src={card} />
                                    </NoticeIcon>
                                    <NoticeDetails>
                                        <Paragraph>
                                            <Bold>Payment.</Bold> Payment upon receipt of goods, Payment by card in the department, Google Pay, Online card, -5% discount in case of payment
                                        </Paragraph>
                                    </NoticeDetails>
                                </Notice>
                            </NoticeBox>
                            <NoticeBox>
                                <Border></Border>
                            </NoticeBox>
                            <NoticeBox>
                                <Notice>
                                    <NoticeIcon>
                                        <CreditCardIcon src={warranty} />
                                    </NoticeIcon>
                                    <NoticeDetails>
                                        <Paragraph>
                                            <Bold>Warranty.</Bold> Warranty. The Consumer Protection Act does not provide for the return of this product of proper quality.
                                        </Paragraph>
                                    </NoticeDetails>
                                </Notice>
                            </NoticeBox>
                        </ProdectNotices>
                        <Bottom>
                            <BottmBox>
                                <BottmIconBox onClick={toggleLike}>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill={liked ? "red" : "#626262"} />
									</svg>
                                </BottmIconBox>
                                <Title>{liked ? "Remove wish" : "Add to wishlist"}</Title>
                            </BottmBox>
                            <BottmBox>
                                <BottmIconBox>
                                    <BottmIcon src={share} />
                                </BottmIconBox>
                                <Title>Share this Product</Title>
                            </BottmBox>
                            <BottmBox>
                                <BottmIconBox>
                                    <BottmIcon src={compaerIcon} />
                                </BottmIconBox>
                                <Title>Compare</Title>
                            </BottmBox>
                        </Bottom>
                    </ProductDetails>
                </ProductContainer>
				<Review product={product}/>
            </Wrapper>
            <Footer />
        </>
    );
}
const Wrapper = styled.section`
	width: 90%;
	margin: 0 auto;
	max-width: 1440px;
`;
const ProductContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0 100px;
	position: relative;
	@media all and (max-width: 1280px){
		padding: 10px 0 0;
	}
	@media all and (max-width: 1080px){
		display: block;
	}

`;

const ProductGallery = styled.div`
  	flex: 1;
	z-index: 10;
`;

const ProdectDescount =styled.div`
	background-color: red;
	padding: 5px;
	width: 45px;
	border-radius: 25px;
	text-align: center;
	position: absolute;
	left: 10px;
    top: 125px;
	z-index: 11;
	@media all and (max-width: 1080px){
		left: 150px;
		top: 50px;
	}

	@media all and (max-width: 980px){
		left: 75px;
    	top: 75px;
	}
	@media all and (max-width: 640px){
		left: 40px;
	}
	@media all and (max-width: 480px){
		left : 20px;
		top:50px;
	}


`;

const Descount = styled.h3`
	color: #fff;
	font-weight: bold;
	font-size: 14px;

`;

const ProductImage = styled.div`
	width: 500px;
	height: 500px;
	@media all and (max-width: 1280px){
		width: 450px;
	}
	@media all and (max-width: 1080px){
		margin: 0 auto;
	}
	@media all and (max-width: 768px){
		height: 450px;
	}
	@media all and (max-width: 480px){
		height: 335px;
		width: 340px;
	}
	@media all and (max-width: 360px){
		height: 300px;
		width: 300px;
	}
`;

// const Image = styled.img`
//  	width: 100%;
// 	display: block;
// 	object-fit : cover;
// `;

const ProductDetails = styled.div`
	flex: 1;
	margin-left: 20px;
	
`;

const ProductName = styled.h2`
	font-size: 30px;
	margin-bottom: 10px;
	font-weight : bold;
`;

const ProductMeta = styled.div`
	padding-bottom: 15px;
	display: flex;
	align-items: center;
	width: 100%;
	border-bottom: 1px solid #E5E7EB;
`;

const ProductRating = styled.div`
 
`;
const Star = styled.img`
	
`;
const RaitingBox = styled.div`
	padding: 2px 5px;
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 13px;
	margin: 0 25px 0 10px;
	display : inline-block;
	font-weight: bold;
	
`;
const ProductSku = styled.p`
	font-size : 14px;
	color: #3f1a1a91;
	

`;
const SerialNumber = styled.span`
	font-size : 13px;
	color: #000;
`;
const ProductShortDescription = styled.div`
	
`;
const ShortDescription = styled.p`
	font-size : 14px;
	margin: 20px 0;
`;
const ProductPrice = styled.div`

`;

const OfferPrice = styled.span`
	font-weight: bold;
	color: red;
	font-size: 30px;
`;

const OrginalPrice = styled.span`
	text-decoration: line-through;
	color: #000;
	font-size: 20px;
	margin-left: 10px;
`;
const Button = styled.button`
	font-size: 17px;
	font-weight: bold;
	padding: 15px;
	color: #fff;
	background-color : #16A34A;
	border-radius: 10px;
	margin: 15px 0;
	cursor: pointer;
	@media all and (max-width: 1280px){
		font-size: 15px;
	}

`;
const SpecialOfferTimer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 18px 15px;
	background-color: #ffedd54f;
	border:  1px solid #FED7AA;
	border-radius: 10px;
	color: #EA580C;
`;
const CartContainer = styled.div`
    display: flex;
    align-items: center;
	justify-content: space-between;
	width: 70%;
	margin-top: 20px;
	@media all and (max-width: 1380px){
		width: 73%;
	}
	@media all and (max-width: 1080px){
		width: 50%;
	}
	@media all and (max-width: 980px){
		width: 58%;
	}
	@media all and (max-width: 768px){
		width: 70%;
	}
	@media all and (max-width: 640px){
		width: 93%;
	}
	@media all and (max-width: 480px){
		display: block;
	}

`;

const Quantity = styled.div`
    display: flex;
    align-items: center;
	justify-content: space-between;
	width: 30%;
	border: 1px solid #000;
    padding: 12px;
    border-radius: 10px;
	@media all and (max-width: 480px){
		width: 50%;
	}
	@media all and (max-width: 360px){
		width: 60%;
	}
`;

const MinIconbox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
const MinIcon = styled.img`
	width: 100%;
	display: block;
`;
const MaxIconbox = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
const MaxIcon = styled.img`
	width: 100%;
	display: block;
`;
const Input = styled.input`
    width: 20%;
	text-align: center;
`;

const CartButton = styled.button`
    font-size: 17px;
    font-weight: bold;
    padding: 15px;
    color: #fff;
    background-color: #16A34A;
    border-radius: 10px;
    cursor: pointer;
	@media all and (max-width: 1280px){
		font-size: 15px;
	}
	@media all and (max-width: 480px){
		display: block;
		padding: 15px;
		margin: 10px 0;
		width: 50%;
	}
	@media all and (max-width: 360px){
		width: 60%;
	}
	
`;
const Icon =styled.img`
	margin-right: 10px;
`;
const BuyButton = styled.button`
	font-size: 17px;
    font-weight: bold;
    padding: 15px;
    color: #fff;
    background-color: #000;
    border-radius: 10px;
    cursor: pointer;
	@media all and (max-width: 1280px){
		font-size: 15px;
	}
	@media all and (max-width: 480px){
		width: 50%;
		margin-bottom: 20px;
	}
	@media all and (max-width: 360px){
		width: 60%;
	}
	
`;
const Semicolon = styled.p`
	color: #000;
`;
const Label = styled.span`
	font-size: 15px;
	font-weight: bold;
	@media all and (max-width: 360px){
		font-size: 11px;
	}
`;

const SiteCountdown = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media all and (max-width: 640px){
		width: 50%;
	}
	@media all and (max-width: 480px){
		width: 58%;
	}
	@media all and (max-width: 360px){
		width: 100%;
	}
	
`;

const Day = styled.span`
 	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fed7aa91;
	border:  1px solid #FED7AA;
	border-radius: 5px;
	font-weight: 600;
	font-size: 15px;
`;

const Hour = styled.span`
 	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fed7aa91;
	border:  1px solid #FED7AA;
	border-radius: 5px;
	font-weight: 600;
	font-size: 15px;
`;

const Minute = styled.span`
  	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fed7aa91;
	border:  1px solid #FED7AA;
	border-radius: 5px;
	font-weight: 600;
	font-size: 15px;
`;

const Second = styled.span`
  	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fed7aa91;
	border:  1px solid #FED7AA;
	border-radius: 5px;
	font-weight: 600;
	font-size: 15px;
`;

const OfferRemainter = styled.div`
	margin-left: 15px;	
`;

const Span = styled.p`
	font-size: 13px;
	color: #000;
	@media all and (max-width: 640px){
		display: none;
	}
`;
const ProdectNotices = styled.ul`
	border: 2px solid #E5E7EB;
	border-radius: 10px;
	margin: 30px 0px;
	@media all and (max-width: 480px){
		display: none;
		
	}
`;

const NoticeBox = styled.li`
	
`;

const Notice = styled.div`
  	display: flex;
    align-items: flex-start;
	padding: 15px 18px;
`;
const Border = styled.div`
	border-bottom: 2px solid #E5E7EB;
`;
const NoticeIcon = styled.div`
	width: 42px;
`;

const CreditCardIcon = styled.img`
	display: block;
	width: 100%;
`;

const NoticeDetails = styled.div`
  	margin-left: 10px;
`;

const Paragraph = styled.p`
	font-size: 13px;
	
`;
const Bold = styled.h5`
	font-size: 14px;
	font-weight: bold;
	display: inline-block;
	opacity: 0.8;
	z-index: 0;
`;
const Bottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 75%;
	@media all and (max-width: 1080px){
		width: 50%;
	}
	@media all and (max-width: 640px){
		display: block;
	}
	

`;

const BottmBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media all and (max-width: 640px){
		margin-bottom: 10px;
	}
`;

const BottmIconBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #E5E7EB;
	width: 30px;
	cursor: pointer;
`;

const BottmIcon = styled.img`
	width: 100%;
	display: block;
`;

const Title = styled.p`
	font-size: 14px;
	margin-left: 10px;
	width: 140px;
`;

export default SinglePage;
