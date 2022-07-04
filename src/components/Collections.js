import React from 'react'
import styled from 'styled-components'
import  Front from '../quickteller/storefront.png'
import Back from '../quickteller/storefront-backdrop-pattern.svg'



const Collections = ()=> {

    return(
        <Container>
            <Holder>
                <Br></Br>
                <Top>
                    <H1Hold>
                    <H1>
                        With Storefront You Now
                        Have Everything You Need to
                        Sell Online with ease
                    </H1>
                    </H1Hold>
                    <P>
                    <Br></Br>
                       <P1>
                        Set up a fully-hosted online store in just minutes. The online
                        store was designed with you in mind, meaning you don't need
                        to hire any web designers or programmers to get started.
                        </P1>
                        <P2>
                        Let’s get you started
                        </P2>
                    </P>
                </Top>

                <Image>
                    <Small src={Back}></Small>
                    <Big src= {Front}></Big>
                </Image>

               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
               <Br></Br>
                 <Br></Br>
                 <Br></Br>

            </Holder>
           
        </Container>
    )
}
export default Collections

const Container= styled.div`
box-sizing: border-box;
`

const Holder= styled.div`
width: 100%;
padding-left: 5%;
box-sizing: border-box;
display: flex;
flex-direction:column;
`


const Top= styled.div`
width: 100%;
display: flex;
height: 200px;
justify-content: center;
align-items: center;
justify-content: space-between;
flex-direction: row;
`
const H1Hold = styled.div`
width: 50%;
display: flex;
`
const H1= styled.h1`
width: 65%;
font-weight: normal;
font-size: 35px;
color:#003C58;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
const P= styled.div`
width: 50%;
display: flex;
flex-direction: column;
`
const P1= styled.p`
width: 80%;

`
const P2= styled.p`
  text-decoration: underline;
  color:#003C58;

`



const Br= styled.br``




const Image= styled.div`
width: 100%;
display: flex;
position: relative;
object-fit: contain;
`
const Small= styled.img`
width: 22%;
display: flex;
position: relative;
left: 1000px;
object-fit: cover;
top: 0px;
`
const Big= styled.img`
width: 100%;
display: flex;
position: absolute;
top: 20px;
object-fit: contain;
right:5px;
`


/* flex-direction:column; */



// const Container= styled.div``


