import React from "react";

export default function AbilityCard({ ability }) {
  return (
    <div className="abilityCard">
      <div className="abilityTitle">
        <h3>{ability.name}</h3>
        <img src={ability.icon} alt={ability.name} />
      </div>
      <p>{ability.description}</p>
    </div>
  );
}
