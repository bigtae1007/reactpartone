import React from "react";
import styled from "styled-components";
import Main_star from "./Main_star";
const Main = (props) => {
  let num = 0

  props.date.forEach((item) => {
    item.num = parseInt(Math.random() * 6);
  });

  props.date.forEach((item)=>{
    num += item.num;
  })
  Math.round(num/7 * 10)
  const [averNum, setCount] = React.useState(Math.round(num/7 * 10)/10);

  return (
    <Container>
      <Title>내 일주일은?</Title>
      {props.date.map((item, i) => {
        return (
          <Main_star
            key={i}
            date={item.name}
            num={item.num}
          />
        );
      })}
      <LastDiv>
        <h2>평균 평점</h2>
        <h2>{averNum}</h2>
        <button onClick={()=>{setCount(0)}}>Reset</button>
      </LastDiv>
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid #ddd;
  width: 400px;
  margin: 40px auto;
  height: 800px;
  border-radius: 5px;
`;

const Title = styled.h3`
  text-align: center;
  margin-top: 60px;
`;
const LastDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top :50px;
  & h2{
    color: blue;
    text-align: center;
    margin: 5px;

  }
  & button {
    width: 120px;
    height: 60px;
    border-radius: 5px;
    background-color: skyblue;
    color: #fff;
    border: none;
    font-size: 20px;
  }
`;

export default Main;
