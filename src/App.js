import React from "react";
import { Mech } from "./Components/Mech";
import { Civil } from "./Components/Civil";
import { Elec } from "./Components/Elec";
import { Comp } from "./Components/Comp";
import "./Components/Common.css";
function App() {
  return (
    <div className="main">
      <Mech />
      <Civil />
      <Elec />
      <Comp />
    </div>
  );
}

export default App;
