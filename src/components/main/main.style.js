import styled from "styled-components"

export const Title = styled.div`
  font-size: 36px;
  color: #00a9e0;
  margin-left: 160px;
  margin-top: 47px;
  
`;

export const Search = styled.input`
width: 160px;
height: 40px;
margin-right: 128px;
border: solid 1px #5B6770;
border-radius:10px;
margin-left:76px;
`

export const Wrapper = styled.div`
  border: 1px solid black;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 4fr;
  margin-left: 160px;
  margin-right: 128px;
  margin-top: 110px;
  margin-bottom: 37px;
  width: 1416px;
  padding: 0;
`;
export const Small = styled.img`
  border: 1px solid black;
  width: 160px;
  height: 160px;
  background-size: cover;
  background-repeat: no-repeat;
  
`;

export const Acc = styled.span`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  margin-top: 50px;
`;


export const Box1 = styled.div`
  border: 1px solid black;
  background-color: green;
  width: 160px;
`;
export const Box2 = styled.div`
  border: 1px solid black;
  background-color: green;
  width: 160px;
`;
export const Box3 = styled.div`
  grid-column: 3/5;
  grid-row: 1/3;
  border: 1px solid black;
  background-color: red;
`;

export const Box18 = styled.div`
  background-color: red;
  grid-column: 5/7;
  grid-row: 3/5;
`;
