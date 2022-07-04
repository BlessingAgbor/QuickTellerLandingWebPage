import React from 'react'
import styled from 'styled-components'
import Imag from '../quickteller/seamless-integration@3x.png';
const Payments = ()=>{

    return(
        <Container>
            <PayHold>
            <Top>
                <H6>WHY USE QUICKTELLER BUSINESS</H6>
                <H1>We Use a Technology-First Approach
                    to Payments and Finance
                </H1>
            </Top>
            <Content>
               <Text>
               <Ol1>
                    <Li>MULTIPLE PAYMENT CHANNELS</Li>
                </Ol1>
                <Br></Br>
                <H2>Get Paid Securely,  </H2> 
                   <H2>How and When You Want</H2> 
            
            <Br></Br>


                <P>
                As with all of our tools, payments are central to the experience.
                Even with online payments, you benefit from our lower rates
                and fast deposits. Quickteller business seamlessly integrates
                with your existing website or store and we provide various
                payment options.
                </P>
            <Br></Br>


                <Ol>
                &#x2713; <Li2>Cards</Li2>
                &#x2713; <Li2>USSD</Li2>
                &#x2713; <Li2>bank Transfer</Li2>
                </Ol>

                <Ol>
                  &#x2713; <Li2>Cards</Li2>
                  &#x2713;  <Li2>USSD</Li2>
                  &#x2713;  <Li2>bank Transfer</Li2>
                </Ol>
               </Text>

               <Image>
                   <Img src={Imag}></Img>
               </Image>
            </Content>
            </PayHold>
        </Container>
    )
}

export default Payments

const Container= styled.div`
`
const PayHold= styled.div`
width: 100%;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
`
const Top= styled.div`
width: 50%;
display: flex;
/* background-color: blue; */
text-align: center;
justify-content: center;
align-items: center;
flex-direction: column;
height: 300px;
`
const H1= styled.h1`
color:#003C58;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
const H6= styled.h5`
color:#003C58;
font-weight: normal;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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

const Image= styled.div`
width: 50%;
/* background-color:yellow; */

`
const Img= styled.img`
width: 100%;
`
const Br= styled.br``
// const Container= styled.div``
// const Container= styled.div``


