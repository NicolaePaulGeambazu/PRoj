import styled from "styled-components";

export const Title = styled.div`
  font-size: 36px;
  color: #00a9e0;
  margin-left: 160px;
  margin-top: 47px;
  margin-bottom: 45px;
  float: left;
  width: 1675px;
`;

export const Icon = styled.img`
margin:10px;
`

export const SearchPoint = styled.img`
  background-color: #5b6770;
  float: right;
  background-image: url("../images/ico_search.png");
  height: 30px;
  padding: 5px;
  border-radius: 50px;
  margin-top: -30px;
`;

export const BarSearch = styled.div`
  margin-top: -10px;
  width: 160px;
  height: 40px;
  margin-right: 128px;
  border-radius: 50px;
  border: solid 1px #5b6770;
  margin-left: 76px;
`;

export const Search = styled.input`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  margin-top: 13px;
  margin-left: 3px;
  margin-right: 3px;
  width: 70%;
  float: left;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 4fr;
  margin-left: 160px;
  margin-right: 128px;
  margin-top: 110px;
  margin-bottom: 37px;
  width: 1675px;
  padding: 0;
`;
export const Small = styled.img`
  width: 216px;
  height: 216px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Acc = styled.span`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  margin-top: 50px;
  float: right;
  margin-left: 10px;
`;

export const Box1 = styled.div`
  background-color: green;
  width: 160px;
`;
export const Box2 = styled.div`
  background-color: green;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Box3 = styled.img`
  height: 452px;
  width: 452px;
  grid-column: 3/5;
  grid-row: 1/3;
  background-color: red;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Box18 = styled.img`
  height: 452px;
  width: 452px;
  background-color: red;
  grid-column: 5/7;
  grid-row: 3/5;
  background-color: red;
  background-size: cover;
  background-repeat: no-repeat;
`;
