import React from "react";
import "./App.css";
import Personal from "./components/Personal";
import Med from "./components/Med";
import { useState } from "react";
import LoanInterestCalculator from "./components/LoanInterestCalculator";
const App = () => {
  const [category, setcategory] = useState("low");
  return (
    <div>
      <div className="main">
        <Personal />
        <Med />
      </div>
    </div>
  );
};

export default App;
