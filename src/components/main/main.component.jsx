import React, { useEffect, useState } from "react";
import { Acc, Search, Small, Title, Wrapper } from "./main.style";
import all from "../../assets/images/all.svg";
import neu from "../../assets/images/neu.svg";
import top from "../../assets/images/top.svg";
import Image1 from "../../assets/images/1.png";
import { imaget } from "../../assets";

export const Main = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3800/Design")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const { images = [] } = data;
  return (
    <>
      <Title>
        {data?.title}
        <Acc>
          <img src={all} alt="all" />
          <img src={neu} alt="new" />
          <img src={top} alt="top" />
          <Search
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </Acc>
      </Title>
      <Wrapper>
        {images
          // ?.sort(function(a, b){
          //   return a - b;
          // }).filter((val) => {
          //   if (search === "") {
          //     return val;
          //   } else if (
          //     val.titleGame.toLowerCase().includes(search.toLocaleLowerCase())
          //   ) {
          //     return val;
          //   }
          // })
          .map((stuff) => {
            return (
              <div>
                <Small
                  src={stuff?.image}
                  alt=""
                  style={{ width: 100, height: 100 }}
                />
                {/* <Box2></Box2>
              <Box3></Box3>
              <Small></Small>
              <Small/>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Small></Small>
              <Box18></Box18>
              <Small></Small>
              <Small></Small>
              <Small></Small> */}
              </div>
            );
          })}
      </Wrapper>
      <Small src={imaget.image_1} alt="" styled={{ width: 100, height: 100 }} />
      
    </>
  );
};

export default Main;
