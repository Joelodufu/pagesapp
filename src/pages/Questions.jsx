import React from 'react'
import styled from 'styled-components';
import Question from '../components/Questions/Question';
import Nav from './../Navbar/Nav';

const Questions = () => {

    const Container = styled.div`
        width:100%;
        height:100%;
    `
  return (
     <Container>
         <Nav></Nav>
         <Question/>
     </Container>    
  )
}

export default Questions