import React from "react";
import useNauts from "hooks/useNauts";
import NautCard from "./NautCard";
import NavBar from "./NavBar";

export default function Nauts() {
  const { nauts } = useNauts();
  return (
    <div id="nautsPage">
      <NavBar />
      <h1>Nauts</h1>
      <div id="nautList">
        {nauts.map((naut) => {
          return <NautCard key={naut.name} naut={naut} />;
        })}
      </div>
    </div>
  );
}
