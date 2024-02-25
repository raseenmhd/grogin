import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'


function MainHeader() {

	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);


	const deadline = "March, 1, 2024";

	const getTime = () => {
	const time = Date.parse(deadline) - Date.now();
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
		setHours(Math.floor(time / (1000 * 60 * 60) % 24));
		setMinutes(Math.floor(time / 1000 / 60) % 60);
		setSeconds(Math.floor(time / 1000) % 60);
	};

		useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);
		return () => clearInterval(interval);
	}, []);
  return (
    <>
		
		<Main>
			<Wrapper>
				<TopHeader>
					<LeftTitle >
						<Paragraph>
							FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
						</Paragraph>
					</LeftTitle>
					<RightSaleTimer>
						<Title>
							Until the end of the sale:
							
						</Title>
						<Days>
							<Time>{days < 10 ? "0" + days : days}</Time>
							<DayLabel>
								days 
							</DayLabel>
							
						</Days>
						<Hours>
							<Time>{hours <10 ? "0" + hours : hours}</Time>
							<HourLabel>
								hours
							</HourLabel>

						</Hours>
						<Minits>
							<Time>{minutes <10 ? "0" + minutes : minutes}</Time>
							<MinitLabel>
								minutes
							</MinitLabel>
						</Minits>
						<Seconds>
							<Time>{seconds <10 ? "0" + seconds : seconds}</Time>
							<SecondLabel>
								sec.
							</SecondLabel>
						</Seconds>
					</RightSaleTimer>
				</TopHeader>
			</Wrapper>
		</Main>
		
    </>
  )
}
const Main = styled.section`
	width: 100%;
	background-color: #634C9F ;
	color: #fff;
	padding: 10px;
`;
const Wrapper = styled.section`
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
`
const TopHeader = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

const LeftTitle = styled.div`
	width: 41%;
`;
const Paragraph = styled.p`
	text-align: center;
	font-size: 13px;
	font-weight: 600;
`;
const RightSaleTimer = styled.div`
	width: 36%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 14px;
  opacity: 0.7;
`;

const Days = styled.div`
	width: 14%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const DayLabel = styled.span`
  font-size: 14px;
  opacity: 0.7;
`;

const Time = styled.h2`
	font-size: 20px;
	font-weight: 600;
`;
const Hours = styled.div`
  	width: 15%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HourLabel = styled.span`
	font-size: 14px;
	opacity: 0.7;
`;

const Minits = styled.div`
	width: 18%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const MinitLabel = styled.span`
  	font-size: 14px;
	opacity: 0.7;
`;

const Seconds = styled.div`
	width: 13%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SecondLabel = styled.span`
  	font-size: 14px;
	opacity: 0.7;
	
`;
export default MainHeader
