import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from "../data";
import React, { useEffect, useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})};
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${props=>props.bg};
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    padding-left: 80px;
`

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    padding-right: 80px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const handeClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handeClick("left")}>
            <ArrowLeftIcon></ArrowLeftIcon>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img}></Image>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>DON'T COMPROMISE ON STYLE§ GET FLAT 30% OFF FOR NEW ARRIVALS</Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handeClick("left")}>
            <ArrowRightIcon></ArrowRightIcon>
        </Arrow>
    </Container>
  )
}

export default Slider