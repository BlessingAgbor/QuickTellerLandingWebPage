import React from 'react'
import styled from 'styled-components'
import multi from '../quickteller/multi-choice.png'
import oando from '../quickteller/oando.png'
import domino from '../quickteller/dominos.png'
import konga from '../quickteller/konga.png'
import bet from '../quickteller/betking.png'

const Logo= ()=> {

    return(

        <Container>
            <Holds>
                <H1>TRUSTED BY BRANDS YOU TRUST</H1>
                <ImgHold>
                <Logos3 src= {multi}></Logos3>
                <Logos src= {oando}></Logos>
                <Logos src= {domino}></Logos>
                <Logos src= {konga}></Logos>
                <Logos2 src= {bet}></Logos2>
                </ImgHold>
            </Holds>
        </Container>
    )
}
export default Logo

const Container= styled.div`
`
const Holds= styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const H1=styled.h4`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
/* width: 50% */
letter-spacing:5px;
color: #787878;
font-weight: normal;
font-size: 10px;
`
const ImgHold= styled.div`
width: 50%;
display: flex;
flex-direction: row;
justify-content: space-evenly;

`
const Logos= styled.img`
width: 12%;
height: 12%;
`

const Logos2= styled.img`
width: 4%;
height: 4%;
display: flex;
`

const Logos3= styled.img`
width: 6%;
height: 6%;
display: flex;
`