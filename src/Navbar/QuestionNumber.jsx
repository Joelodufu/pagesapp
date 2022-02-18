import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border:solid .5px grey;
    height:23px;
    width:23px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:2px;
    padding:5px;
    cursor:pointer;
    background:{props=>props.background}
`

const QuestionNumber = ({number, background}) => {
  return (
    <Container background={background}>{number}</Container>
  )
}

export default QuestionNumber