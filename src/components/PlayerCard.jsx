import React from "react";

export default function PlayerCard({ naut, player, setTargetAbility }) {
  return player.team === "blue" ? (
    <div className="playerCard">
      <div className="bluePlayerInfo">
        <div className="playerInfo">
          <div className="playerStats">
            <h3 className="bluePlayerName">{player.name}</h3>
            <h3>{naut.name}</h3>
            <p>Health: {naut.health}</p>
            <p>Movement Speed: {naut.movement}</p>
          </div>
          <img
            className="playerAttack"
            src={naut.abilities.attack.icon}
            alt={naut.abilities.attack.name}
            onMouseEnter={() => setTargetAbility(naut.abilities.attack)}
          />
        </div>
        <div className="selectedAbilities">
          {player.abilities[0]
            ? player.abilities.map((ability) => {
                return (
                  <img
                    key={ability.name}
                    src={ability.icon}
                    alt={ability.name}
                    onMouseEnter={() => setTargetAbility(ability)}
                  />
                );
              })
            : null}
        </div>
      </div>
      <img className="playerPortrait" src={naut.image_url} alt={naut.name} />
    </div>
  ) : (
    <div className="playerCard">
      <img className="playerPortrait" src={naut.image_url} alt={naut.name} />
      <div className="redPlayerInfo">
        <div className="playerInfo">
          <img
            className="playerAttack"
            src={naut.abilities.attack.icon}
            alt={naut.abilities.attack.name}
            onMouseEnter={() => setTargetAbility(naut.abilities.attack)}
          />
          <div className="playerStats">
            <h3 className="redPlayerName">{player.name}</h3>
            <h3>{naut.name}</h3>
            <p>Health: {naut.health}</p>
            <p>Movement Speed: {naut.movement}</p>
          </div>
        </div>
        <div className="selectedAbilities">
          {player.abilities[0]
            ? player.abilities.map((ability) => {
                return (
                  <img
                    key={ability.name}
                    src={ability.icon}
                    alt={ability.name}
                    onMouseEnter={() => setTargetAbility(ability)}
                  />
                );
              })
            : null}{" "}
        </div>
      </div>
    </div>
  );
}
