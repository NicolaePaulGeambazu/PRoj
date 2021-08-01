import React, { useEffect, useState } from "react";
import { Acc, Box1, Box2, Search, Small, Title, Wrapper } from "./main.style";
import all from "../../assets/images/all.svg";
import neu from "../../assets/images/neu.svg";
import top from "../../assets/images/top.svg";
// console.log(imina)



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
          ?.sort((a, b) => {
            if (a.feature < b.feature) return -1;
            if (a.feature > b.feature) return 1;
            return 0;
          })
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.titleGame.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return val;
            }
            return 0
          })
          .map((stuff, idx) => {
            console.log(stuff)
            return (
              <div id={idx}>
                <Small
                  src={stuff?.image} 
                />
              </div>
            );
          })}

      </Wrapper>
    </>
  );
};

export default Main;
