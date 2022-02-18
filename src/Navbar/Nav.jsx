import React from 'react'
import styled from 'styled-components'
import QuestionNumber from './QuestionNumber'

const Container = styled.div`
    width:100vw;
    height:7vh;
    border-bottom:.5px solid grey;
    display:flex;
    background-color:white;
 
`
const Logo = styled.div`
    flex:1;
    border-left:solid .5px grey;
    display:flex;
    align-items:center;
`

const Middle=styled.div`
    flex:1;
    border-left:solid .5px grey;
    display:flex;
    align-items:center;
    justify-content:center;

`

const Left= styled.div`
    flex:1;
    border-left:solid .5px grey;

`

const Image = styled.img`
   height:100%;
   margin-left:10px;
`
const Nav = () => {
  return (
    <Container>
        <Logo>
            <Image src='./logo.png'/>
            <span>PAGESAPP</span>
        </Logo>

        <Middle>

        <QuestionNumber number={1} background={'grey'}/>
        <QuestionNumber number={2} background={'grey'}/>
        <QuestionNumber number={3} background={'grey'}/>
        <QuestionNumber number={4} background={'grey'}/>
        <QuestionNumber number={5} background={'grey'}/>
        </Middle>

        <Left>

        </Left>
    </Container>
  )
}

export default Nav