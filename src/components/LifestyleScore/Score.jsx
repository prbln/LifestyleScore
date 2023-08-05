import "./Score.css";

import Lifestyle from "./lifestyle/lifestyle";
import { useState } from "react";
import ChartDialog from "./Walking/ChartDialog";

const Score = () => {
  const [showLifestyle, setshowLifestyle] = useState(true);
  const [showRunning, setshowRunning] = useState(false);
  return (
    <div>
      {showLifestyle && (
        <Lifestyle
          showLifestyle={showLifestyle}
          setshowLifestyle={setshowLifestyle}
          showRunning={showRunning}
          setshowRunning={setshowRunning}
        />
      )}
      {showRunning && (
        <ChartDialog
          showLifestyle={showLifestyle}
          setshowLifestyle={setshowLifestyle}
          showRunning={showRunning}
          setshowRunning={setshowRunning}
        />
      )}
    </div>
  );
};

export default Score;
