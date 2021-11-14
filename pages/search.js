import React from "react";
import tw from "tailwind-styled-components"
import  Link from 'next/link'
const Search = () => {
    return(
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                    <BuckButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9cA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9cA3AF/vertical-line.png"/>
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
                </FromToIcons>
                <InputBoxes>
                    <Input placeholder="Enter pickup location"/>
                    <Input placeholder="Where to?"/>
                </InputBoxes>
            </InputContainer>
        </Wrapper>
    )
}
export default Search
const Wrapper = tw.div`
    bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
    bg-white rounded-full px-4
`
const BuckButton = tw.img`
    h-12
`
const InputContainer = tw.div`
    flex items-center bg-white
`
const FromToIcons = tw.div`
    w-10 flex flex-col
`
const Circle = tw.img``
const Line = tw.img``
const Square = tw.img``
const InputBoxes = tw.div`
    flex flex-col flex-1
`
const Input = tw.input`
    h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

