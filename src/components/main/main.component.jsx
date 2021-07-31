import React, { useEffect, useState } from "react";
import { Acc, Box1, Box2, Search, Small, Title, Wrapper } from "./main.style";
import all from "../../assets/images/all.svg";
import neu from "../../assets/images/neu.svg";
import top from "../../assets/images/top.svg";
// console.log(imina)

export const Main = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  this.state = {
    
      "titleGame":"Hotline",
      "image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.blacktype.bet%2Fcasino%2Fnew-games%2F&psig=AOvVaw2YR0LNXIJiUi0DvQ27BuSM&ust=1627856725273000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCq14CtjvICFQAAAAAdAAAAABAD",
      "feature":"1"
    
  }

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
        {this.state
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
          .map((stuff) => {
            console.log(stuff)
            return (
              <div>
                <Small
                  src={this.state.image} 
                />
              </div>
            );
          })}

      </Wrapper>
    </>
  );
};

export default Main;
