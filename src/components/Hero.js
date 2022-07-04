import React from 'react'
import styled from 'styled-components'
import Big from '../quickteller/dashboard@3x.png'
import small from '../quickteller/webpay-mobile@3x.png'
import smaller from '../quickteller/terminal-mobile@3x.png'

const HERO = () => {
   return(
       <Container>
           <Br></Br>
           <Br></Br>

            <HeroContainer>
            <Hero>
          <TextHold>
          <Text>
                <H1>All the Tools You Need
                to Grow Your Business,
                In One Place.
                </H1>
                <Para>
                    Our suite of integrated tools saves you time, so you can
                    focus on growing revenue and delivering exceptional
                    service to your customers.
                </Para>
                <Br></Br>
                <Br></Br>
                <Butt> Get Started</Butt>
            </Text>
          </TextHold>
           <ImageHold>
           <Image src={Big}>
           </Image>

            <SmallImg src = {small}>
            </SmallImg>
          <SmallerImg src={smaller}></SmallerImg>

           </ImageHold>
            </Hero>
        </HeroContainer> 
       </Container>
   )
    }
    export default HERO

    const Container = styled.div``

    const HeroContainer = styled.div`
    width: 100%;
    display: flex;

    flex-direction: column;
    `
    const Hero= styled.div`
    width: 100%;
    display: flex;
    padding-left: 5%;
    box-sizing: border-box;


    flex-direction: row;
    `
    const TextHold = styled.div`
    width: 50%;
    /* background-color:red; */
    `

    const Text = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    `
    const H1 = styled.h1`
    font-size: 37px;
    line-height: 55px; 
    width: 65%;
    font-weight: medium;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    `
    const Para = styled.p`
    width: 60%;
    font-size: 16px;
    line-height: 25px; 


    `
    const Br = styled.br``
    const Butt = styled.button`
      width: 35%;
      height: 40px;
      color: white;
      background-color: #009FE4;
      border: none;
      font-weight: medium;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

      border-radius: 3px;
      font-size: medium;
`

    const ImageHold = styled.div`
    width: 50%;
    display: flex;
    /* background-color:green ; */
    `
    const Image= styled.img`
    width: 100%;
    display: flex;
    position: relative;
    object-fit: cover;

    `
    const SmallImg= styled.img`
    width: 15%;
    display: flex;
    position: absolute;
    /* background-color:green ; */
    right: 140px;
    height: 350px;
    /* object-fit: contain; */
    top: 190px;
    `
    const SmallerImg = styled.img`
    width: 16%;
    display: flex;
    position: absolute;
    right: 0px;
    top: 150px;
    height: 390px;
    /* object-fit: contain; */
    `






    // const Text = styled.div``
    // const Text = styled.div``
    // const Text = styled.div``
    // const Text = styled.div``
    // const Text = styled.div``
