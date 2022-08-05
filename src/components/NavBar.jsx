import React from "react";
import { Link } from "react-router-dom";
import useNauts from "hooks/useNauts";

export default function NavBar() {
  const { setRandomNauts } = useNauts();
  return (
    <div id="navBar">
      <Link to="/">Home</Link>
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
        Draft
      </Link>
      <Link to="/nauts">Nauts</Link>
      <Link to="/abilities">Abilities</Link>
    </div>
  );
}
