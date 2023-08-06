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
import Score from "./components/LifestyleScore/Score";
import { scoreContext, homeContext } from "./context";

const App = () => {
  const { isAuthenticated } = useAuth0();
  const [registered, setregistered] = useState(true);
  const [home, sethome] = useState(true);
  return (
    <scoreContext.Provider value={{ registered, setregistered }}>
      <homeContext.Provider value={{ home, sethome }}>
        {isAuthenticated ? (
          <>
            <MenuBar />
            <SideBar />
            {home ? (
              <div className="main">
                <Personal />
                <Med />
              </div>
            ) : (
              <Score />
            )}
            <Footer />{" "}
          </>
        ) : (
          <main className="SignIn">
            <SignIn />
          </main>
        )}
      </homeContext.Provider>
    </scoreContext.Provider>
  );
};

export default App;
