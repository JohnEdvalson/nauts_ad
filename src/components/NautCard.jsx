import React from "react";

export default function NautCard({ naut }) {
  return (
    <div className="nautCard">
      <div className="nautInfo">
        <h3 className="nautTitle">{naut.name}</h3>
        <p>Health: {naut.health}</p>
        <p>Movement Speed: {naut.movement}</p>
        <img src={naut.image_url} alt={naut.name} />
      </div>
      <div className="nautAbilities">
        <span className="nautAttack">
          <img
            src={naut.abilities.attack.icon}
            alt={naut.abilities.attack.name}
          />
          <p>
            {naut.abilities.attack.name}:<br />
            {naut.abilities.attack.description}
          </p>
        </span>
        <span className="nautJump">
          <img
            src={naut.abilities.jump.icon}
            alt={naut.abilities.jump.description}
          />
          <p>
            Jump:
            <br />
            {naut.abilities.jump.description}
          </p>
        </span>
      </div>
    </div>
  );
}
