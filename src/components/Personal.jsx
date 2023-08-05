import React from "react";
import "../App.css";
import { useState } from "react";
import LoanInterestCalculator from "./LoanInterestCalculator";
import Alert from "@mui/material/Alert";
const Personal = () => {
  const [isRendered, setIsRendered] = useState(false);
  const [alert, setalert] = useState(false);
  const showInterest = () => {
    if (!isRendered) setIsRendered(!isRendered);
  };

  return (
    <div>
      {alert && (
        <Alert
          sx={{ width: "600px" }}
          onClose={() => {
            setalert(false);
          }}
        >
          Loan Application Submitted Successfully! Loan approval take 2-3
          business days.
        </Alert>
      )}
      <button className="loan" onClick={showInterest}>
        <h2>Personal Loan</h2>
      </button>

      {isRendered && (
        <LoanInterestCalculator
          open={isRendered}
          setOpen={setIsRendered}
          alert
          setalert={(p) => {
            setalert(p);
          }}
        />
      )}
    </div>
  );
};
export default Personal;
