import { useContext } from "react";
import NautsContext from "NautsContext";

export default function useNauts() {
  const {
    nauts,
    setNauts,
    abilities,
    setAbilities,
    randomNauts,
    setRandomNauts,
  } = useContext(NautsContext);

  return {
    nauts,
    setNauts,
    abilities,
    setAbilities,
    randomNauts,
    setRandomNauts,
  };
}
