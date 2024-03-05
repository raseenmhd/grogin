import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'


function MainHeader() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const deadline = "March, 20, 2024";

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
    @media all and (max-width: 980px){
        display: block;
        width: 100%;
    }
`;

const LeftTitle = styled.div`
    width: 41%;
    @media all and (max-width: 1280px){
        width: 45%;
    }
    @media all and (max-width: 980px){
        width: 100%;
        margin-bottom: 5px;
    }

`;
const Paragraph = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    @media all and (max-width: 1080px){
        font-size: 11px;
    }
`;
const RightSaleTimer = styled.div`
    width: 36%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1280px){
        width: 45%;
    }
    @media all and (max-width: 1080px){
        width: 46%;
    }
    @media all and (max-width: 980px){
        width: 65%;
        margin: 0 auto;
    }
    @media all and (max-width: 768px){
        width: 70%;
    }
    @media all and (max-width: 640px){
        width: 95%;
    }
`;

const Title = styled.h2`
    font-size: 13px;
    opacity: 0.7;
    margin-right: 5px;
    @media all and (max-width: 1080px){
        font-size: 12px;
    }
    @media all and (max-width: 480px){
        display: none;
    }
`;

const Days = styled.div`
    width: 13%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1280px){
        width: 12%;
    }
`;

const DayLabel = styled.span`
    font-size: 12px;
    opacity: 0.7;
    @media all and (max-width: 480px){
        margin-left: 10px;
    }

`;

const Time = styled.h2`
    font-size: 18px;
    font-weight: 600;
    @media all and (max-width: 1080px){
        font-size: 16px;
    }
`;
const Hours = styled.div`
      width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1280px){
        width: 13%;
    }
    @media all and (max-width: 1080px){
        width: 14%;
    }
`;

const HourLabel = styled.span`
    font-size: 12px;
    opacity: 0.7;
    @media all and (max-width: 480px){
        margin-left: 10px;
    }
`;

const Minits = styled.div`
    width: 19%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1280px){
        width: 17%;
    }
`;

const MinitLabel = styled.span`
    font-size: 12px;
    opacity: 0.7;
    @media all and (max-width: 480px){
        margin-left: 10px;
    }
`;

const Seconds = styled.div`
    width: 13%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media all and (max-width: 1280px){
        width: 12%;
    }
`;

const SecondLabel = styled.span`
    font-size: 12px;
    opacity: 0.7;
    @media all and (max-width: 480px){
        margin-left: 10px;
    }
    
`;
export default MainHeader
