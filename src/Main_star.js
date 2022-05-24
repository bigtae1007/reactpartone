import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Main_Star = (props) => {
  const history = useNavigate();
  const starArr = [0, 1, 2, 3, 4];
  return (
    <ContatinDiv>
      <span>{props.date}</span>
      {
        starArr.map((item, i) => {
          return item < props.num ? <Point2 key={item} /> : <Point1 key={item} />;
        })
      }
      <Today onClick={()=>{
          history(`/day/${props.date}`);
        }}>▶</Today>
    </ContatinDiv>
  );
};
const ContatinDiv = styled.div`
display: flex;
justify-content: space-around;
padding: 0 60px;
margin: 20px 0;

`;

const Today = styled.span`
color: purple;
font-size: 30px;
line-height: 24px;
cursor: pointer;
`;
const Point1 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c1c9c5;
`;
const Point2 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: yellow;
`;

export default Main_Star;
