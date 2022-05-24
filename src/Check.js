import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
const Check = (props) => {
  let params = useParams();
  const myDIv = React.useRef(null);
  const [num, setCount] = React.useState(0);
  const exArr = [1, 2, 3, 4, 5];
  const navigate = useNavigate();
  const changeDiv = (e) => {
    if (e.target.id !== "") {
      setCount(e.target.id);
    }
  };
  const keyChange = (e) => {
    if (e.key <= 5 && e.key >= 0) {
      setCount(e.key);
    }
  };
  React.useEffect(() => {
    let div = myDIv.current;
    div.addEventListener("click", changeDiv);
    window.addEventListener("keydown", keyChange);
    return () => {
      div.removeEventListener("click", changeDiv);
      window.removeEventListener("keydown", keyChange);
    };
  });
  return (
    <Container>
      <h3>
        <SpanDay>{params.day + "요일"}</SpanDay> 평점 남기기
      </h3>
      <div ref={myDIv}>
        {exArr.map((item, i) => {
          return i < num ? (
            <StarDiv key={i} id={item} />
          ) : (
            <NoStarDiv key={i} id={item} />
          );
        })}
      </div>
      <SaveBtn
        onClick={() => {
          navigate(-1);
        }}
      >
        평점 남기기
      </SaveBtn>
    </Container>
  );
};
const Container = styled.div`
  border: 1px solid #ddd;
  width: 400px;
  margin: 40px auto;
  height: 800px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 60px 0;
  & > div {
    display: flex;
    justify-content: space-around;
    margin: 10px 100px;
  }
`;
const SpanDay = styled.span`
  background-color: orange;
  border-radius: 5px;
  padding: 3px;
  color: #fff;
`;
const SaveBtn = styled.button`
  border: none;
  background-color: purple;
  width: 300px;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  margin: 10px auto 0;
`;
const NoStarDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c1c9c5;
`;
const StarDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: yellow;
`;
export default Check;
