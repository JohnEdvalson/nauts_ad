import React, { useEffect, useState } from "react";
import NautsContext from "../NautsContext";
import nautsjson from "../api/nauts";

export default function NautsProvider({ children }) {
  const [nauts, setNauts] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [randomNauts, setRandomNauts] = useState([]);

  useEffect(() => {
    const nautsObj = nautsjson.nauts;
    function getNauts() {
      const nautArr = [];
      for (const naut in nautsObj) {
        nautArr.push(nautsObj[naut]);
      }
      setNauts(nautArr);
    }
    getNauts();
  }, []);

  useEffect(() => {
    function getAbilities() {
      let abils = [];
      for (const naut of nauts) {
        abils.push({ owner: naut.name, ...naut.abilities.one });
        abils.push({ owner: naut.name, ...naut.abilities.two });
      }
      setAbilities(abils);
    }
    getAbilities();
  }, [nauts]);

  useEffect(() => {
    function getRandomNauts() {
      let randomArr = [];
      while (randomArr.length < 8) {
        const randomNum = Math.floor(Math.random() * 34);
        if (randomArr.indexOf(randomNum) === -1) randomArr.push(randomNum);
      }
      setRandomNauts(randomArr);
    }
    getRandomNauts();
  }, []);

  return (
    <NautsContext.Provider
      value={{
        nauts,
        setNauts,
        abilities,
        setAbilities,
        randomNauts,
        setRandomNauts,
      }}
    >
      {children}
    </NautsContext.Provider>
  );
}
