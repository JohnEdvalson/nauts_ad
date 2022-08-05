import { Routes, Route } from "react-router-dom";
import { Home, Nauts, Abilities, Draft } from "components";
import useNauts from "hooks/useNauts";

export default function App() {
  const { nauts, abilities } = useNauts();
  console.log("nauts:", nauts);
  console.log("abilities:", abilities);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nauts" element={<Nauts />} />
      <Route path="/abilities" element={<Abilities />} />
      <Route path="/draft" element={<Draft />} />
    </Routes>
  );
}
