import React, { useEffect, useState } from "react";
import useNauts from "hooks/useNauts";

export default function AbilityBoard({
  currentPlayer,
  setCurrentPlayer,
  players,
  setPlayers,
  setTargetAbility,
}) {
  const { nauts, abilities, randomNauts } = useNauts();
  const [turn, setTurn] = useState(1);
  const [isDraft, setIsDraft] = useState(true);
  const [reservedAbilities, setReservedAbilities] = useState([]);
  const passTurn = (abilityId) => {
    if (isDraft && reservedAbilities.indexOf(abilityId) === -1) {
      setReservedAbilities([...reservedAbilities, abilityId]);

      let playerList = [...players];
      playerList[currentPlayer].abilities = [
        ...playerList[currentPlayer].abilities,
        abilities[abilityId],
      ];
      setPlayers(playerList);

      if (turn < 6) {
        setCurrentPlayer(currentPlayer + 1);
        setTurn(turn + 1);
      } else if (turn === 6) {
        setTurn(turn + 1);
      } else if (turn === 12) {
        setIsDraft(false);
      } else {
        setCurrentPlayer(currentPlayer - 1);
        setTurn(turn + 1);
      }
    }
  };

  useEffect(() => {
    setReservedAbilities([]);
    setIsDraft(true);
    setTurn(1);
  }, [randomNauts]);

  return (
    <div className="board">
      {randomNauts.map((randomNaut) => {
        return abilities[0] ? (
          <div key={nauts[randomNaut].name} className="abilityPair">
            <img
              id={randomNaut * 2}
              src={abilities[randomNaut * 2].icon}
              alt={abilities[randomNaut * 2].name}
              onClick={() => {
                passTurn(randomNaut * 2);
              }}
              onMouseEnter={() => setTargetAbility(abilities[randomNaut * 2])}
            />
            <img
              id={randomNaut * 2 + 1}
              src={abilities[randomNaut * 2 + 1].icon}
              alt={abilities[randomNaut * 2 + 1].name}
              onClick={() => {
                passTurn(randomNaut * 2 + 1);
              }}
              onMouseEnter={() =>
                setTargetAbility(abilities[randomNaut * 2 + 1])
              }
            />
          </div>
        ) : null;
      })}
    </div>
  );
}
