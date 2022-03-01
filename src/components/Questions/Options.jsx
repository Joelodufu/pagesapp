import React from 'react'
import  styled  from 'styled-components';

const Container = styled.div`
   height:100%;
    background:yellow;
`
const Options = () => {
  const OptionsWrapper = styled.div`
    width:100%;
    height:60%;
    background:white;
    margin:10px 0px;
    box-shadow:black 0px 0px 10px;

  `
  const ActionWrapper=styled.div`
  height:20%;
  width:100%;
  background:grey;
  `
  return (
    <Container>
        Select ans Option
        <OptionsWrapper>

        </OptionsWrapper>
        <ActionWrapper>

        </ActionWrapper>
    </Container>
  )
}

export default Options