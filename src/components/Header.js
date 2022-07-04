import React from 'react'
import styled from 'styled-components'
import logo from '../quickteller/app-logo.svg'

const Header = () => {
   return(
    <Container>
        <ContainerAll>
            <HeadHold>
                <Head>
                    <LogoHold>
                        <Logo src={logo}></Logo>
                    </LogoHold>

                    <Navs>
                        <Nav>Overview</Nav>
                        <Nav>StoreFront</Nav>
                        <Nav>Pricing</Nav>
                        <Nav>Checkout Demo</Nav>
                        <Nav>Developers</Nav>

                    </Navs>

                    <Sign>
                        <SignIn>
                            Sign in
                        </SignIn>
                        <Butt>
                            Get Started
                        </Butt>
                    </Sign>
                </Head>
            </HeadHold>
        </ContainerAll>
    </Container>
   )
}
    export default Header

    const Container= styled.div`
    box-sizing: border-box;
    `

    const ContainerAll= styled.div`
    width: 100%;
    display: flex;
    clear: right;
    flex-direction: column;
    `
    const HeadHold= styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    width: 100%;
    /* background-color:pink; */
    padding-left: 5%;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    
    `
    const Head= styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 5px;
     /* background-color:khaki; */
    `

const LogoHold= styled.div`
width: 25%;
/* background-color:yellow; */
display: flex;
justify-content:space-between;
`
const Logo = styled.img`
    width: 50%;
    
`
const Navs= styled.div`
    width: 40%;
      display: flex;
      color: #003C5D;
      font-size: 17px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      /* background-color: green; */
      justify-content: space-evenly;
      align-items: center;
`
const Nav= styled.span`
`
const Sign= styled.div`
      width: 25%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #009FE4;
      /* background-color:red; */
`
const SignIn= styled.span`

`
const Butt = styled.button`
      width: 40%;
      height: 40px;
      color: white;
      background-color: #009FE4;
      border: none;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

      border-radius: 3px;
      font-size: medium;
`
