import { Fragment } from "react";
import React from "react";
import "./App.css";
import Personal from "./components/Personal";
import Med from "./components/Med";
import { useState } from "react";
import LoanInterestCalculator from "./components/LoanInterestCalculator";
import { MenuBar } from "./components/Navigation/MenuBar";
import { SideBar } from "./components/Navigation/SideBar";
import { Footer } from "./components/Navigation/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/login/profile";
import SignIn from "./components/login/SignIn";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <MenuBar />
          <SideBar />
          <div className="main">
            <Personal />
            <Med />
          </div>
          <Footer />{" "}
        </>
      ) : (
        <main className="SignIn">
          <SignIn />
        </main>
      )}
    </div>
  );
};

export default App;
