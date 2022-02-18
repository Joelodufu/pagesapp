import React from "react";
import styled from "styled-components";
import QuestionNumber from "./QuestionNumber";

const Container = styled.div`
  width: 100vw;
  height: 7vh;
  border-bottom: 0.2px solid rgb(216, 216, 216);
  display: flex;
  background-color: white;
`;
const Logo = styled.div`
  flex: 1;
  border-left: solid 0.2px rgb(216, 216, 216);
  display: flex;
  align-items: center;
`;

const Middle = styled.div`
  flex: 1;
  border-left: solid 0.2px rgb(216, 216, 216);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  border-left: solid 0.2px rgb(216, 216, 216);
`;

const Image = styled.img`
  height: 100%;
  margin-left: 10px;
`;
const Nav = () => {
  const questions = [
    {
      number: 1,
      isAnswered: true,
      question: "what is buharry's surname?",
      options: [
        {
          isCorrect: false,
          answer: "Joseph",
        },
        {
          isCorrect: false,
          answer: "Andrew",
        },
        {
          isCorrect: true,
          answer: "Muhammad",
        },
        {
          isCorrect: false,
          answer: "James",
        },
      ],
    },
    {
      number: 2,
      isAnswered: false,
      question: "what is last month of the year?",
      options: [
        {
          isCorrect: false,
          answer: "January",
        },
        {
          isCorrect: false,
          answer: "February",
        },
        {
          isCorrect: false,
          answer: "Decender",
        },
        {
          isCorrect: true,
          answer: "December",
        },
      ],
    },
    {
      number: 3,
      isAnswered: false,
      question: "what is a Tree?",
      options: [
        {
          isCorrect: false,
          answer: "Lost fowl",
        },
        {
          isCorrect: false,
          answer: "Local plants",
        },
        {
          isCorrect: true,
          answer: "Plants that grows arrallel",
        },
        {
          isCorrect: false,
          answer: "Jacobs' SOn",
        },
      ],
    },
  ];
  return (
    <Container>
      <Logo>
        <Image src="./logo.png" />
        <span>PAGESAPP</span>
      </Logo>

      <Middle>
          {
              questions.map(
                  question=>(
                    <QuestionNumber number={question.number} background={question.isAnswered?"green":"blue"} />
                  )
              )
          }
      </Middle>

      <Left></Left>
    </Container>
  );
};

export default Nav;
