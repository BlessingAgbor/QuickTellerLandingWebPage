import React from 'react'
import styled from 'styled-components'

const Buttons = ()=> {
    return(
        <Container>
            <Butt>
                  Get Started
            </Butt>
        </Container>

    )
}

export default Buttons

const Container= styled.div`
width: auto;
display: flex;
clear: right;
padding-left: 30px;
flex-direction: column;
`

const Butt= styled.button`
      width: 45%;
      height: 40px;
      color: white;
      background-color: #009FE4;
      border: none;
      font-weight: bold;
      border-radius: 3px;
      font-size: medium;
`
