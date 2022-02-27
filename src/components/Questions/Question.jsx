import React from "react";
import styled from "styled-components";

const Question = () => {
  const Container = styled.div`
    width: 100%;
    height: 92%;
    display: flex;
  `;
  const QuestionContainer = styled.div`
    width: 75%;
    height: 100%;
    background: white;
  `;

  const OptionContainer = styled.div`
    width: 25%;
    height: 100%;
    background: #e7f7e7;
  `;

  const QuestionWrapper=styled.div`
    width:100%;
    height:90%;
    overflow:scroll;
    background:white;
    padding:10px;
    text-justify: distribute-all-lines;
  
  `
  const QuestionInfo=styled.div`
    width:100%;
    height:1px;
    background-color:gold;
  `
  return (
    <Container>
      
      <QuestionContainer>
      <QuestionInfo/>
        <em>WAEC Objective 21 / 79</em>
      <QuestionInfo/>
      <QuestionWrapper>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus voluptatem tempore, veritatis dicta corrupti minima. Tempore eligendi excepturi repellat enim ratione porro, voluptatum necessitatibus veniam placeat velit quibusdam laboriosam ipsum, fuga ipsam exercitationem ea aut facere praesentium, eos architecto recusandae inventore? Neque accusamus architecto asperiores, fugiat non, eligendi ut autem illo exercitationem ratione nemo. Consectetur similique laboriosam animi culpa sequi quaerat nemo voluptatem deserunt dolores a aut recusandae, tempora expedita dignissimos autem nostrum officiis exercitationem, itaque ea vitae, nisi unde? Esse eaque praesentium rerum qui inventore consectetur veritatis quibusdam placeat eveniet nihil, modi facere aperiam illum cupiditate error tempora velit autem tempore eos expedita! Ratione similique laboriosam sequi soluta quae quisquam cum rem quam officiis temporibus maxime numquam amet culpa, ea quas ullam deleniti fugit vitae nisi fuga magnam. Hic molestias eveniet modi ipsam in. Inventore voluptas officia corporis modi incidunt sunt iusto sint ipsum numquam cum eos, nam dolores placeat. Obcaecati ab explicabo vitae reiciendis ex aliquid culpa quibusdam quia quaerat, nihil consequuntur eveniet eos perspiciatis natus perferendis similique tempora laborum doloremque repellat nobis inventore? Dicta molestiae quae excepturi ex ipsam suscipit facere repellendus, odit veritatis quo pariatur illum harum placeat eum, eos at laborum, consequuntur sit saepe fugiat nemo obcaecati. Accusamus commodi doloremque, suscipit cupiditate voluptatem excepturi dignissimos tempora dolore optio quas ex dolores et repellendus placeat, incidunt aliquam vel nisi. Error quasi natus odit eos rerum dolores ex adipisci laboriosam sapiente, ullam impedit doloremque officia soluta eaque incidunt aliquid, nesciunt necessitatibus et repudiandae ad deleniti! Molestiae, aut ut. Id, dolore eveniet quasi accusamus neque, ea doloremque cupiditate saepe est quae omnis iusto veniam. Est deleniti voluptates fuga rerum totam consectetur voluptatibus, numquam porro iure expedita officia, ratione, impedit cupiditate molestias tempora odio. Nobis voluptate tempore, ad eum, pariatur rerum placeat ea a, illo error porro. Quas dolorum vitae laudantium, optio eveniet nisi facere distinctio voluptatum inventore explicabo minus, consectetur omnis accusantium reprehenderit eligendi vel libero ullam saepe iure odio in unde? Assumenda, veritatis molestiae vitae ut amet natus hic quae! Nostrum quo odio odit cupiditate? Id libero eos in harum fuga qui sapiente dolore nulla culpa natus ipsum vero, sed deleniti enim excepturi iste tempore ratione omnis quidem, reiciendis ab eveniet. Tempore, doloremque explicabo tempora voluptates, ipsum laborum voluptas repudiandae veniam quos ratione dicta vel! Ex excepturi veritatis nobis exercitationem beatae velit explicabo, error deserunt fugit expedita quo fuga soluta amet nulla labore. Culpa obcaecati, a mollitia doloribus debitis, totam quo eius est blanditiis laudantium ipsa vitae magni voluptatibus, soluta voluptatum sunt esse earum. At praesentium laboriosam reprehenderit sapiente ducimus culpa voluptatibus aliquid qui dolorum dolores maiores ipsam eaque veniam fuga, perferendis totam fugit minus quam hic asperiores quibusdam optio quidem. Natus iure dicta vel dignissimos dolorum error, eligendi reiciendis, hic minus, adipisci numquam voluptas deleniti quibusdam officia eius nihil neque enim. Hic doloribus, reiciendis quis consectetur et ipsum ipsam in earum impedit ratione assumenda quaerat expedita eveniet? Incidunt sapiente cumque magni quia illum vel, sunt ipsa velit ipsam a. Tenetur, corporis iusto molestiae ipsa doloremque nostrum.</p>
      </QuestionWrapper>
       
      </QuestionContainer>
      <OptionContainer></OptionContainer>
    </Container>
  );
};

export default Question;
