import React from 'react'
import styled from 'styled-components'

import sell from '../quickteller/selling-icon.svg'
import fee from '../quickteller/fee-icon.svg'
import solu from '../quickteller/solutions-icon.svg'
const Sections= ()=> {
    return(
        <Container>
             <Holder2>
               

             <Section>
                    <Sec>
                        <Img src={sell}></Img>
                        <H5>Start Selling Online</H5>

                        <PSec>
                        Easily sell online and ship orders to
                        customers, offer in-shop pickup, or local
                        delivery—no matter what type of business
                        you have.
                        </PSec>
                    </Sec>
                </Section>

                {/* Second Section*/}

                <Section>
                    <Sec>
                        <Img src={fee}></Img>
                        <H5>Ease of Delivery</H5>

                        <PSec>
                        We give you the flexibility of handling your
                        own package delivery as well as provide
                        the option to intergate with our dedicated
                        logistics partners.
                        </PSec>
                    </Sec>
                </Section>

                {/* The third Section */}

                <Section>
                    <Sec>
                        <Img src={solu}></Img>
                        <H5>Built-in Payments Solutions</H5>

                        <PSec>
                        As with all of our tools, payments are central
                        to the experience. Even with online payments,
                        you benefit from our lower rates and fast
                        deposits.
                        </PSec>
                    </Sec>
                </Section>
             </Holder2>
        </Container>
    )
}

export default Sections

const Container= styled.div``
const Sec= styled.div`
width: 70%;
display: flex;
flex-direction:column;
/* background-color: firebrick; */

`

const Holder2= styled.div`
width: 100%;
display: flex;
/* position: absolute; */
`

const Img= styled.img`
width: 40px;
`
const H5= styled.h5`
font-size: 20px;
`
const PSec= styled.p`
width: 100%;
font-size: 18px;
line-height: 27px;
`

const Section= styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`