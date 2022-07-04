import React from "react";
import styled from 'styled-components'
import back from '../quickteller/backdrop.svg'
import pos from '../quickteller/pos@3x.png'
import cash from '../quickteller/icon-cash.svg'
import card from '../quickteller/icon-cards.svg'
import qr from '../quickteller/icon-qr-code.svg'
import ussd from '../quickteller/icon-ussd.svg'
import transfer from '../quickteller/icon-transfer.svg'

const Pointofsale = ()=>{
return(
    <Container>
            <PayHold>
            <Br></Br>
                <Br></Br>
                <Br></Br>
                <Br></Br>
            <Content>
                

               <Text>
               <Ol1>
                    <Li>POINT OF SALE TERMINAL</Li>
                </Ol1>
                <Br></Br>
               


                <H2>  One Card Reader for </H2> 
                   <H2>All Your Payment Needs</H2> 
            
            <Br></Br>


                <P>
                Introducing the one device for all your payment needs.
                Whether you're accepting payments at your countertop
                checkout or looking to accept payments on-the-go, the
                lightweight and easy to transport Card Reader connects to an
                array of devices and offers your business the flexibility to accept
                any type of payment, wherever you are.
                </P>


                <P>Payment modules available</P>
            <Br></Br>


                <Ol>
                 <Li2 src= {qr}></Li2>
                 <Li2 src={cash}></Li2>
                 <Li2 src={ussd}></Li2>
                 <Li2 src={card}></Li2>
                 <Li2 src={transfer}></Li2>
                </Ol>

                <Ol>
                 <L>QR CODE</L>
                 <L>CASH</L>
                 <L>USSD</L>
                 <L>CARD</L>
                 <L>TRANSFER</L>
                </Ol>
               </Text>

               
            <ImageHold>
                   <Image src={back}></Image>
                   <Img src={pos}></Img>
               </ImageHold>

            <Br></Br>
<Br></Br>
<Br></Br>
{/* <Br></Br>
<Br></Br>
<Br></Br>
<Br></Br>
<Br></Br> */}

            </Content>
            </PayHold>
        </Container>
    )
}

export default Pointofsale

const Container= styled.div`
`
const PayHold= styled.div`
width: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`


const Content= styled.div` 
width: 100%;
display: flex;
flex-direction: row;
padding-left: 5%;
box-sizing: border-box;
padding-bottom: 150px;
/* background-color:green; */

`
const Text = styled.div`
width: 50%;
display: flex;
flex-direction: column;
/* background-color:red ; */
`
const Ol1 = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Ol= styled.div`
width:100%;
display: flex;
line-height: 60px;
font-size: 15px;
justify-content: space-around;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


`
const H2= styled.h1`
width: 100%;
line-height: 5px;
font-weight: medium;
/* color:#003C58; */
color: #004277;
/* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
`

const Li= styled.li`
list-style:square;
font-size: 12.5px;
font-weight: lighter;

`
const L = styled.div``
const Li2= styled.img`
 

`

const P = styled.p`
width: 69%;
font-size: 16px;
font-weight: normal;
/* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
line-height: 30px;  
`

const ImageHold=styled.div`
width: 50%;
display: flex;
/* background-color: red; */
`
const Image= styled.img`
    width: 100%;
    display: flex;
    position: relative;
    object-fit: contain;
    height: 100%;
    `
 const Img= styled.img`
 width: 55%;
 /* height: 70%; */
 display: flex;
 position: absolute;
 right: 5px;
 /* left: 100px; */
 /* height: 350px; */
 /* object-fit: contain; */
 top: 3400px;
 /* background-position: 100px; */
 bottom: 0px;
 `
const Br= styled.br``
// const Container= styled.div``
// const Container= styled.div``


