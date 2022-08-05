import React from "react";
import { Link } from "react-router-dom";
import useNauts from "hooks/useNauts";

export default function Home() {
  const { setRandomNauts } = useNauts();
  return (
    <div>
      <h2>Welcome to Awesomenauts Ability Draft!</h2>
      <Link
        to="/draft"
        onClick={() => {
          let randomArr = [];
          while (randomArr.length < 8) {
            const randomNum = Math.floor(Math.random() * 34);
            if (randomArr.indexOf(randomNum) === -1) randomArr.push(randomNum);
          }
          setRandomNauts(randomArr);
        }}
      >
        New Draft
      </Link>
      <br />
      <Link to="/nauts">List of Nauts</Link>
      <br />
      <Link to="/abilities">List of Abilities</Link>
      <br />
    </div>
  );
}
