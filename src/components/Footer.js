import React from 'react'
import styled from 'styled-components'

const Footer= ()=> {

    return(
        <Container>
            <ContainerAll>
            <Holder>
            <Foot>
                <B><Text>Interswitch</Text></B>
                <Text>Company</Text>
                <Text>Jobs</Text>
                <Text>Privacy & Terms</Text>

            </Foot>
            {/*  */}
            <Foot>
                <B><Text>Interswitch</Text></B>
                <Text>Company</Text>
                <Text>Jobs</Text>
                <Text>Privacy & Terms</Text>

            </Foot>
            {/*  */}

            <Foot>
                <B><Text>Interswitch</Text></B>
                <Text>Company</Text>
                <Text>Jobs</Text>
                <Text>Privacy & Terms</Text>

            </Foot>
            </Holder>
            </ContainerAll>
        </Container>
    )
}

export default Footer

const Container= styled.div``

const ContainerAll= styled.div`
width: 100%;
`
const Foot= styled.div`
width: 25%;
`
const B= styled.b``

const Text= styled.div``




const Holder= styled.div`
width: 100%;
/* flex-direction: row; */
display: flex;
padding-left: 5%;
justify-content: space-around;
box-sizing: border-box;
`
// const Container= styled.div``
// const Container= styled.div``
// const Container= styled.div``
// const Container= styled.div``
