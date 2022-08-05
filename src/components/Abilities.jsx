import React from "react";
import useNauts from "hooks/useNauts";
import AbilityCard from "./AbilityCard";
import NavBar from "./NavBar";

export default function Abilities() {
  const { abilities } = useNauts();
  return (
    <div id="abilitiesPage">
      <NavBar />

      <h1>Abilities</h1>
      <div id="abilityList">
        {abilities.map((ability) => {
          return <AbilityCard key={ability.name} ability={ability} />;
        })}
      </div>
    </div>
  );
}
