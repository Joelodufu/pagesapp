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
const Nav = () => {
  return (
    <Container>
        <Logo>

        </Logo>

        <Middle>

        <QuestionNumber number={10} isAnswered='grey'/>
        <QuestionNumber/>
        <QuestionNumber/>
        <QuestionNumber/>
        <QuestionNumber/>
        </Middle>

        <Left>

        </Left>
    </Container>
  )
}

export default Nav