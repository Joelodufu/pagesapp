import React from "react";
import styled from "styled-components";
import Options from "./Options";
import QuestionDesc from "./QuestionDesc";
import QuestionText from "./QuestionText";

const Question = () => {
  const Container = styled.div`
    width: 100%;
    height: 92%;
    display: flex;
  `;
  const QuestionContainer = styled.div`
    padding:10px;
    flex:2;
    height: 100%;
    background: white;
  `;

  const OptionContainer = styled.div`
    flex: 1;
    height: 100%;
    background: #e7f7e7;
  `;

  const QuestionWrapper = styled.div`
    width: 100%;

    max-height: 80%;
    min-height: 60%;
    overflow: scroll;
    background: white;
    padding: 10px;
    text-justify: distribute-all-lines;
  `;

  return (
    <Container>
      <QuestionContainer>
        <QuestionText />
        <QuestionWrapper>
          <QuestionDesc />
        </QuestionWrapper>
      </QuestionContainer>
      <OptionContainer>
        <Options />
      </OptionContainer>
    </Container>
  );
};

export default Question;
