import React from 'react'
import styled from 'styled-components'
import Imag from '../quickteller/instant-payments-invoice@3x.png'
import Imag2 from '../quickteller/instant-payments-confirmation@3x.png'
const Payment2 = ()=>{

    return(
        <Container>
            <PayHold>
            <Content>

            <ImageHold>
                   <Image src={Imag}></Image>
                   <Img src={Imag2}></Img>
               </ImageHold>
            
               <Text>
               <Ol1>
                    <Li>INSTANT PAYMENTS</Li>
                </Ol1>
                <Br></Br>
               

                <H2> Built to Save Time </H2> 
                   <H2>and Get You Paid Faster</H2> 
            
            <Br></Br>


                <P>
                Send professional invoices, track them in real time, and accept
                payments online—all from one place. Save time with auto-billing,
                stored information, and powerful reporting tools. Customers can
                pay in one click. They can pay an online invoice through their
                computer, in person, or right through their phone.
                </P>
            <Br></Br>


                <Ol>
                &#x2713; <Li2>Payment Links</Li2>
                &#x2713; <Li2>Invoices</Li2>
                &#x2713; <Li2>Subscriptions</Li2>
                </Ol>
               </Text>

               
            </Content>
            </PayHold>
        </Container>
    )
}

export default Payment2

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
padding-left: 5%;
box-sizing: border-box;
flex-direction: row;
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
width:60%;
display: flex;
line-height: 30px;
justify-content: space-around;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


`
const H2= styled.h1`
width: 80%;
line-height: 5px;
font-weight: medium;
color:#003C58;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


`

const Li= styled.li`
list-style:square;
`

const Li2= styled.li`
   list-style:none;
 

`

const P = styled.p`
width: 90%;
/* letter-spacing:1px; */
font-size: 21px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
line-height: 30px;
`

const ImageHold=styled.div`
width: 50%;
display: flex;
/* background-color: red; */
`
const Image= styled.img`
    width: 50%;
    display: flex;
    position: relative;
    object-fit: contain;
    height: 100%;
    `
 const Img= styled.img`
 width: 23%;
 display: flex;
 position: absolute;
 left: 210px;
 height: 350px;
 /* object-fit: contain; */
 top: 1580px;
 `
const Br= styled.br``
// const Container= styled.div``
// const Container= styled.div``


