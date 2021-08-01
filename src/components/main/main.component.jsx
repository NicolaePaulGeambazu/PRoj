import React, { useEffect, useState } from "react";
import { Acc, BarSearch, Box1, Box18, Box3, Icon, Search, SearchPoint, Small, Title, Wrapper } from "./main.style";
import all from "../../assets/images/all.svg";
import neu from "../../assets/images/neu.svg";
import top from "../../assets/images/top.svg"
import ico from '../main/images/ico_search.png'

function parseFetchDesign(response) {
  const obj = JSON.parse(response);
  for (var i = 0; i < obj.images.length; i++) {
    var imagineJoc = obj.images[i].image; // patul catre imagine
    var titluJoc = obj.images[i].titleGame; // titlul jocului
    var featureJoc = obj.images[i].feature; // acel feature care vad ca mai e precizat

    /// incarcam imaginile, titlurile, etc
    try {
      var pfp = require(imagineJoc);
      document.getElementById("imagine" + (i + 1).toString()).src = pfp.default;
    } catch (err) {
      console.error(err);
    }
  }
}

var imgjoc = require("../../assets/images/1.png");

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
          <Icon src={all} alt="all" />
          <Icon src={neu} alt="new" />
          <Icon src={top} alt="top" />
          <BarSearch>
          <Search
          
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <SearchPoint src={ico}/>
          </BarSearch>
            
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
            return 0;
          })
          .map((stuff, idx) => {
            // console.log("./images/" + stuff.image + ".png")
            var pth = "./images/1.png";
            var index = "1";
            imgjoc = require("./images/" + stuff.image + ".png").default;
            if (idx === 9) {
              return <Box18 src={imgjoc}/>;
            } else {
              if (idx === 18) {
                return <Box3 src={imgjoc} />;
              } else {
                return (
                  <div id={idx}>
                    <Small src={imgjoc} />
                  </div>
                );
              }
            }
          })}
      </Wrapper>
    </>
  );
};

export default Main;
