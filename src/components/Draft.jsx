import React, { useEffect, useState } from "react";
import useNauts from "hooks/useNauts";
import AbilityBoard from "./AbilityBoard";
import PlayerCard from "./PlayerCard";
import AbilityCard from "./AbilityCard";
import NavBar from "./NavBar";

export default function Draft() {
  const { nauts, randomNauts, abilities } = useNauts();
  const [players, setPlayers] = useState([
    { id: 0, name: "Player One", team: "red", abilities: [] },
    { id: 1, name: "Player Two", team: "blue", abilities: [] },
    { id: 2, name: "Player Three", team: "red", abilities: [] },
    { id: 3, name: "Player Four", team: "blue", abilities: [] },
    { id: 4, name: "Player Five", team: "red", abilities: [] },
    { id: 5, name: "Player Six", team: "blue", abilities: [] },
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [targetAbility, setTargetAbility] = useState({});

  useEffect(() => {
    let playerList = players;
    playerList.forEach((player) => {
      player.abilities = [];
    });
    setPlayers(playerList);
    setCurrentPlayer(0);
    setTargetAbility({});
  }, [randomNauts]);

  return (
    <div id="draft">
      <div id="redTeam">
        {players.map((player) => {
          return abilities[0] && player.team === "red" ? (
            <PlayerCard
              key={player.id}
              naut={nauts[randomNauts[player.id]]}
              player={player}
              setTargetAbility={setTargetAbility}
            />
          ) : null;
        })}
      </div>
      <div id="draftAbilities">
        <NavBar />
        <AbilityBoard
          players={players}
          setPlayers={setPlayers}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          setTargetAbility={setTargetAbility}
        />
        {players[currentPlayer].team === "red" ? (
          <div id="redTurn">{players[currentPlayer].name}'s turn to pick.</div>
        ) : (
          <div id="blueTurn">{players[currentPlayer].name}'s turn to pick.</div>
        )}

        <div id="draftInfo">
          <AbilityCard ability={targetAbility} />
        </div>
      </div>
      <div id="blueTeam">
        {players.map((player) => {
          return abilities[0] && player.team === "blue" ? (
            <PlayerCard
              key={player.id}
              naut={nauts[randomNauts[player.id]]}
              player={player}
              setTargetAbility={setTargetAbility}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
