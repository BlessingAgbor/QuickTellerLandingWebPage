import React from 'react'
import styled from 'styled-components'
import front from '../quickteller/connect@3x.png'
import back from '../quickteller/connect-backdrop-pattern.svg'

const Contact = ()=>{

    return(
        <Container>
            <PayHold>
            <Content>

            <Br></Br>
                <Br></Br>
                <Br></Br>
                <Br></Br>
            <ImageHold>
               

                
                   <Image src={back}></Image>
                   <Img src={front}></Img>
               </ImageHold>
            
               <Text>
              
                <Br></Br> <Br></Br>
                <Br></Br>
                <Br></Br>
                <Br></Br>
                


                <H2> We’re Here to</H2> 
                   <H2>Help You Get Started.</H2> 
            
            <Br></Br>


                <P>
                Connect with our Sales team for one-on-one
                assistance with getting started.
                </P>
            <Br></Br>
                <Butt>
                    Contact Us
                </Butt>

                <P2>
                We’ll call you within one business day, between 9 a.m. and
                5 p.m. in your time zone. If we can’t reach you, we’ll send an
                email with a phone number to call us back.
                </P2>
               </Text>

               
            </Content>
            </PayHold>
        </Container>
    )
}

export default Contact

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
/* background-color: red; */
flex-direction: row;
padding-left: 5%;
box-sizing: border-box;
/* background-color:green; */

`
const Text = styled.div`
width: 50%;
display: flex;
flex-direction: column;
/* background-color:red ; */
`

const H2= styled.h1`
width: 80%;
line-height: 5px;
font-weight: normal;
font-size: 35px;
color:#003C58;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;


`

const P = styled.p`
width: 50%;
/* letter-spacing:1px; */
font-size: 16px;
font-weight: normal;
line-height: 30px;
`

const P2= styled.p`
width: 53%;
/* letter-spacing:1px; */
font-size: 13.5px;
font-weight: normal;
line-height: 30px;
`
const ImageHold=styled.div`
width: 50%;
display: flex;
padding-top: 70px;
/* background-color: red; */
`
const Image= styled.img`
    width: 30%;
    display: flex;
    position: relative;
    /* object-fit: contain; */
    /* height: 100%; */
    right: 0px;
    left: 380px;
 top: -100px;
    `
const Butt= styled.button`
width: 30%;
height: 40px;
color: white;
background-color: #009FE4;
border: none;
font-weight: normal;
border-radius: 3px;
font-size: medium;
`

 const Img= styled.img`
 /* width: 40%; */
 display: flex;
 position: absolute;
 left: 67px;
 height: 400px;
 object-fit: cover;
 /* top: 200px; */
 `
const Br= styled.br``

// const Container= styled.div``


