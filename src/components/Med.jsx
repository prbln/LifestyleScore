import React from "react";
import "../App.css";
import { useState, useContext } from "react";
import LoanInterestCalculator from "./LoanInterestCalculator";
import { AlertDialog } from "./AlertDialog";
import { scoreContext, homeContext } from "../context";
const Med = () => {
  const { registered, setregistered } = useContext(scoreContext);

  const [show, setshow] = useState(false);
  const showInterest = () => {
    setshow(!show);
  };
  return (
    <div>
      <button className="loan" onClick={showInterest}>
        <h2>Instant Medical Loan</h2>
      </button>
      {show && (
        <AlertDialog
          open={show}
          setisopen={(p) => {
            setshow(p);
          }}
        />
      )}
    </div>
  );
};
export default Med;
