import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 0 1 auto;
  padding: 5px;
  border-bottom: 1px solid gold;
  text-align: center;
`;
const QuestionInfo = styled.div`
  width:100%;
  color:white;
  background:black;
`
const QuestionText = () => {
  return (
    <Container>
      <QuestionInfo>
        <em>Question <b>4</b> of <b>34</b></em>
      </QuestionInfo>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, totam debitis provident sit exercitationem blanditiis repudiandae recusandae explicabo quis id, ipsa cum, eius in distinctio enim accusamus dicta quidem itaque dolor nostrum. Explicabo error a expedita ipsa perferendis harum, magni nihil. Fugit nulla eligendi odio! A nobis aspernatur et iure!
    </Container>
  );
};

export default QuestionText;
