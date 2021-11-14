import React from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'

function confirm() {
    return (
        <Wrapper>
            <Map />
            <RideContainer>

            </RideContainer>
        </Wrapper>
    )
}

export default confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`
const RideContainer = tw.div`
    flex-1
`