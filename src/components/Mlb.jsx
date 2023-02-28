import React from "react";

// importing mlbStandings component
import Mlbstandings from "./Mlb-standings";

// importing mlb schedule for cubs
import Mlbschedule from "./Mlb-schedule";

function Mlb() {
  return (
    <div className="mlb" id="mlb-section">
      <h3 className="section-header">MLB - Chicago Cubs</h3>
      <Mlbstandings />
      <Mlbschedule />
    </div>
  );
}

export default Mlb;
